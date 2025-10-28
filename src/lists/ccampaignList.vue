    <script setup lang="ts">
    import { ref, onMounted , getCurrentInstance } from 'vue';
    import axios from "axios"
    import { TabulatorFull as Tabulator } from 'tabulator-tables';
    import  'tabulator-tables/dist/css/tabulator_modern.min.css';
    import {DateTime} from 'luxon'

const instance = getCurrentInstance();
const API_BASE = ref(instance.appContext.config.globalProperties.$API_BASE_URL);
const API_URL = "/api/dbview/c11_customer_v";
//console.log( 'API_BASE_URL in campaignList.vue: ' + API_BASE.value + API_URL );
const API_BASE_URL = API_BASE.value + API_URL;
    function link(cell: { getValue: () => any; }, formatterParams: any){
    var url = cell.getValue();
		return "<a href='/components/campaignDetail"+url+"'>"+url+"</a>";
	}
    const tableContainer = ref("CampaignTableContainer");
//    let tabulatorInstance: Tabulator | null;

    onMounted(() => {
      let tabulatorInstance = new Tabulator(tableContainer.value, {
        height: "450px",
        layout: 'fitDataTable',
        columns: [
          { title: 'ID', field: 'CUSTOMER_ID', formatter:link, width:70 },
          { title: 'First Name', field: 'FIRST_NAME', width: 250,  sorter: 'string' },
          { title: 'Surname', field: 'LAST_NAME', width: 380,  sorter: 'string' },
          { title: 'Email Address', field: 'ACTIVE_EMAIL_ADDRESS', width: 350,  sorter: 'string' }
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
//              ajaxURL:  API_BASE_URL, // Your API endpoint"http://localhost:8080/api/conversation/list", 
              ajaxURL:  API_BASE_URL, // Your API endpoint", 
              ajaxParams: { _limit: null }, // Optional: parameters to send with the request
 
    });
  });

</script>
<template>
	<main id="campaignList">
		<h1>CCustomer Browser</h1>
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