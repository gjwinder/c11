    <script setup lang="ts">
    import axios from "axios"
    import { ref, onMounted } from 'vue';
    import { TabulatorFull as Tabulator } from 'tabulator-tables';
    import  'tabulator-tables/dist/css/tabulator_modern.min.css';
    import  'tabulator-tables/dist/css/tabulator.min.css';
    
    function link(cell: { getValue: () => any; }, formatterParams: any){
    var url = cell.getValue();
		return "<a href='/components/conversationDetail"+url+"'>"+url+"</a>";
	}

    const tableContainer = ref("ConversationTableContainer");
//    let tabulatorInstance: Tabulator | null;

    onMounted(() => {
      let tabulatorInstance = new Tabulator(tableContainer.value, {
//        ajaxURL: 'http://localhost:3000/CONVERSATION_MASTER', // Your JSON-server endpoint
        height: "450px",
        layout: 'fitDataTable',
        columns: [
          { title: 'ID', field: 'id', formatter:link, width:70 },
          { title: 'Conversation Name', field: 'name', width: 250,  sorter: 'string' },
          { title: 'Descripton', field: 'description', width: 380,  sorter: 'string' },
          { title: 'Cust Count', field: 'customerCount', width: 30,  sorter: 'number' },
          { title: 'Update Date', field: 'updateDate', width: 145,  sorter: 'date' }         
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
              ajaxURL: "http://localhost:8080/api/conversation/list", // Your API endpoint
              ajaxParams: { _limit: 10 }, // Optional: parameters to send with the request
 
    });
  });
  </script>
<template>
	<main id="conversationList">
		<h1>Conversation List</h1>
		<br></br>
<div ref="tableContainer"> </div>
	</main>
</template>
<style>
.tabulator-row .tabulator-cell:first-child {
  border-left: 10px solid #858789;
}     
.tabulator-row:nth-child(2n) .tabulator-cell:first-child {
  border-left: 10px solid #d9d9d3; 
}  

.tabulator {
  background-color: #f8f4f4; /* Or any desired color */
  border: 0;
}
</style>