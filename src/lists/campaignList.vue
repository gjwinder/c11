    <script setup lang="ts">
    import { ref, onMounted, getCurrentInstance } from 'vue';
    import { useRouter } from 'vue-router'
    import axios from "axios"
    import { TabulatorFull as Tabulator } from 'tabulator-tables';
    import 'tabulator-tables/dist/css/tabulator.css';
    import { DateTime } from 'luxon'

    const props = defineProps({
      theme: {
        type: String,
        default: undefined,
      },
    })
    const instance = getCurrentInstance();
    const API_BASE = ref(instance.appContext.config.globalProperties.$API_BASE_URL);
    const API_URL = "/api/campaign/list";
    //console.log( 'API_BASE_URL in campaignList.vue: ' + API_BASE.value + API_URL );
    const API_BASE_URL = API_BASE.value + API_URL;

    const router = useRouter()

    const tableContainer = ref("CampaignTableContainer");
    //    let tabulatorInstance: Tabulator | null;

    onMounted(() => {
      let tabulatorInstance = new Tabulator(tableContainer.value, {
        //        ajaxURL: 'http://localhost:8080/api/campaign/list', // Your JSON-server endpoint
        height: "450px",
        layout: 'fitDataTable',
        columns: [
          {
            title: 'ID', field: 'id', width: 70,
            // use cellClick to navigate via the router (prevents full page reload)
            cellClick: function (e: Event, cell: any) {
              const data = cell.getRow().getData()
              const id = data?.id
              if (id !== undefined && id !== null) {
                //              router.push(`/mainLayout/campaignDetail/${id}`)
                router.push({ name: 'campaignDetail', params: { id: id}});
              }
            }
          },
          { title: 'Campaign Name', field: 'name', width: 250, sorter: 'string' },
          { title: 'Descripton', field: 'description', width: 350, sorter: 'string' },
          { title: 'Expiration Date', field: 'expirationDate', width: 220, sorter: 'date' },
          //        formatter:"datetime", formatterParams:
          //        {
          //          inputFormat:"YYYY-MM-DD'T'HH:mm:ss.SSSxxxxxx",
          //          invalidPlaceholder:"(invalid date)",
          //          timezone:"America/Los_Angeles",
          //        } },          
          { title: 'Type', field: 'campaignType', width: 180, sorter: 'number' },
          { title: 'Priority', field: 'priority', width: 100, sorter: 'number' },
          { title: 'Conv ID', field: 'conversationID', width: 100, sorter: 'number' },
          { title: 'Dept ID', field: 'departmentID', width: 100, sorter: 'number' }
        ],
        ajaxRequestFunc: function (ajaxURL, config, ajaxParams) {
          return new Promise(function (resolve, reject) {
            axios.get(ajaxURL, { params: ajaxParams })
              .then(function (response) {
                // Resolve the promise with the data
                resolve(response.data);
              })
              .catch(function (error) {
                // Reject the promise if there's an error
                reject(error);
              });
          });
        },
        //              ajaxURL:  API_BASE_URL, // Your API endpoint"http://localhost:8080/api/conversation/list", 
        ajaxURL: API_BASE_URL, // Your API endpoint", 
        ajaxParams: { _limit: 10 }, // Optional: parameters to send with the request

      });
    });

</script>
<template>
  <main class="campaignList">
    <h1>Campaign List</h1>
    <br></br>
    <div ref="tableContainer"> </div>
  </main>
</template>
<style lang="scss">
@use '../styles/tabulatorStyles.css';

.campaignList h1 {
  background-color: --vsm-base-bg;
}

.CampaignTableContainer {
  float: left;
  width: 200px;
}
</style>