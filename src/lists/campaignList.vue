
    <script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import axios from "axios"
    import { TabulatorFull as Tabulator } from 'tabulator-tables';
    import  'tabulator-tables/dist/css/tabulator_modern.min.css';
    import {DateTime} from 'luxon'
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
          { title: 'ID', field: 'id', formatter:link, width:70 },
          { title: 'Campaign Name', field: 'name', width: 250,  sorter: 'string' },
          { title: 'Descripton', field: 'description', width: 350,  sorter: 'string' },
          { title: 'Expiration Date', field: 'expirationDate', width: 220,  sorter: 'date'},
  //        formatter:"datetime", formatterParams:
  //        {
  //          inputFormat:"YYYY-MM-DD'T'HH:mm:ss.SSSxxxxxx",
  //          invalidPlaceholder:"(invalid date)",
  //          timezone:"America/Los_Angeles",
  //        } },          
          { title: 'Type', field: 'campaignType', width: 180, sorter: 'number' },
          { title: 'Priority', field: 'priority', width: 100, sorter: 'number' },
          { title: 'Conv ID', field: 'conversationID', width: 100,  sorter: 'number' },          
          { title: 'Dept ID', field: 'departmentID', width: 100, sorter: 'number' }
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
    width: 200px;
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