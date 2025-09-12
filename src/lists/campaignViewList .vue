    <script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import axios from "axios"
    import { TabulatorFull as Tabulator } from 'tabulator-tables';
    import  'tabulator-tables/dist/css/tabulator_modern.min.css';

    function link(cell: { getValue: () => any; }, formatterParams: any){
    var url = cell.getValue();
		return "<a href='/components/campaignDetail"+url+"'>"+url+"</a>";
	}
    const tableContainer = ref("CampaignTableContainer");
//    let tabulatorInstance: Tabulator | null;

    onMounted(() => {
      let tabulatorInstance = new Tabulator(tableContainer.value, {
//        ajaxURL: 'http://localhost:8080/api/campaign/list', // Your JSON-server endpoint
        height: "450px",
        layout: 'fitDataTable',
        columns: [
          { title: 'ID', field: 'campaign_id', formatter:link, width:70 },
          { title: 'Campaign Name', field: 'campaign_name', width: 250,  sorter: 'string' },
          { title: 'Descripton', field: 'description', width: 250,  sorter: 'string' },
          { title: 'Creation Date', field: 'insert_datetime', width: 180,  sorter: 'date' },          
          { title: 'Type', field: 'campaign_type_code', width: 180, sorter: 'number' },
          { title: 'Priority', field: 'priority_code', width: 100, sorter: 'number' },
          { title: 'Conversation Name', field: 'conversation_name', width: 200,  sorter: 'number' },          
          { title: 'Count', field: 'count', width: 100, sorter: 'number' },
          { title: 'Last Count Date', field: 'count_date', width: 180, sorter: 'date' },
        ],
            ajaxRequestFunc: function(ajaxURL, config, ajaxParams) {
              return new Promise(function(resolve, reject) {
                axios.get(ajaxURL, { params: ajaxParams })
                    .then(function(response) {
                        // Resolve the promise with the data
                        resolve(response.data);
                    })
                    .catch(function(error) {
                        // Reject the promise if there's an error
                        reject(error);
                    });
      });
    },
              ajaxURL: "http://localhost:8080/api/campaign/list", // Your API endpoint
              ajaxParams: { _limit: 10 }, // Optional: parameters to send with the request
 
    });
  });

</script>
<template>
	<main id="campaignList">
		<h1>Campaign List</h1>
		<br></br>
<div ref="tableContainer"> </div>
	</main>
</template>
<style>

.CampaignTableContainer {
  float: left;
    width: 400px;
}

.tabulator .tabulator-header .tabulator-col {
        background-color: #15262b; /* Dark example */
  width: 1040px;
}

.tabulator-col-title {
        font-family: "Fira sans", sans-serif; /* Set the font family */
        font-size: 18px; /* Set the font size */
        font-weight:200;
        color: #f8f4f4; /* White text example */
}

.tabulator {
  background-color: #f8f4f4; /* Or any desired color */
  border: 0;
}

</style>