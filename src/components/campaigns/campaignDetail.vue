    <script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'
import axios from 'axios'

interface QuietPeriod {
  quietLevel: string
  campaignQuietPeriods: null
  companyQuietPeriods: null
  systemQuietPeriods: null
}

interface Campaign {
  id: number
  name: string
  description: string
  type: number
  departmentID: number
  languageID: number
  mailFarmID: number
  expirationDate: string | null
  neverExpires: boolean
  expirationChosen: boolean
  conversationID: number
  audienceModelID: number
  segmentModelID: number
  quietLevel: string
  quietPeriodObjs: null
  companyID: number
  campaignType: string
  dataLoadDate: string | null
  priority: number
  quietPeriod: QuietPeriod
}

const props = defineProps({
  theme: {
    type: String,
    default: undefined,
  },
})

const instance = getCurrentInstance()
const API_BASE = ref(instance.appContext.config.globalProperties.$API_BASE_URL)
console.log('API_BASE in campaignDetail.vue: ' + API_BASE.value)
const API_URL = "/api/campaign"


const campaign = ref<Campaign | null>(null)

// Example: get campaignId from route params (if using vue-router)
import { useRoute } from 'vue-router'
const route = useRoute()
const campaignId = route.params.id || 214 // fallback to 214 if not provided
console.log('Campaign ID in campaignDetail.vue: ' + campaignId)
const fetchCampaign = async () => {
  try {
    const response = await axios.get(`${API_BASE.value}${API_URL}/id/${campaignId}`)
    campaign.value = response.data
  } catch (error) {
    console.error('Error fetching campaign:', error)
  }
}

onMounted(() => {
  fetchCampaign()
})

const saveCampaign = async () => {
  try {
    if (!campaign.value) {
      console.warn('No campaign data to save')
      return
    }
    // send the campaign object as JSON payload in the PUT request
    const response = await axios.put(
      `${API_BASE.value}${API_URL}/id/${campaignId}/type/normal`,
      campaign.value,
      { headers: { 'Content-Type': 'application/json' } }
    )
    alert('Campaign Saved Successfully')
  } catch (error) {
    console.error('Error saving campaign:', error)
  }
}

</script>

<template>
  <div class="campaign-detail">
    <h1>Campaign Detail</h1>
    <form v-if="campaign" @submit.prevent="saveCampaign" class="campaign-form">
      <div class="form-grid">
        <!-- Basic Information -->
        <div class="form-section">
          <h3>Basic Information</h3>
          <div class="form-group">
            <label for="name">Campaign Name</label>
            <input 
              id="name"
              v-model="campaign.name"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              id="description"
              v-model="campaign.description"
              class="form-control"
              rows="2"
            ></textarea>
          </div>
        </div>

        <!-- Campaign Settings -->
        <div class="form-section">
          <h3>Campaign Settings</h3>
          <div class="form-row">
            <div class="form-group half">
              <label for="type">Type</label>
              <input 
                id="type"
                v-model="campaign.type"
                type="number"
                class="form-control"
              />
            </div>
            <div class="form-group half">
              <label for="campaignType">Campaign Type</label>
              <input 
                id="campaignType"
                v-model="campaign.campaignType"
                type="text"
                class="form-control"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label for="priority">Priority</label>
              <input 
                id="priority"
                v-model="campaign.priority"
                type="number"
                class="form-control"
              />
            </div>
            <div class="form-group half">
              <label for="quietLevel">Quiet Level</label>
              <input 
                id="quietLevel"
                v-model="campaign.quietLevel"
                type="text"
                class="form-control"
                readonly
              />
            </div>
          </div>
        </div>

        <!-- IDs and References -->
        <div class="form-section">
          <h3>References</h3>
          <div class="form-row">
            <div class="form-group third">
              <label for="departmentID">Department ID</label>
              <input 
                id="departmentID"
                v-model="campaign.departmentID"
                type="number"
                class="form-control"
              />
            </div>
            <div class="form-group third">
              <label for="languageID">Language ID</label>
              <input 
                id="languageID"
                v-model="campaign.languageID"
                type="number"
                class="form-control"
              />
            </div>
            <div class="form-group third">
              <label for="mailFarmID">Mail Farm ID</label>
              <input 
                id="mailFarmID"
                v-model="campaign.mailFarmID"
                type="number"
                class="form-control"
              />
            </div>
          </div>
        </div>

        <!-- Expiration Settings -->
        <div class="form-section">
          <h3>Expiration</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="checkbox-label">
                <input 
                  type="checkbox"
                  v-model="campaign.neverExpires"
                />
                Never Expires
              </label>
            </div>
            <div class="form-group" v-if="!campaign.neverExpires">
              <label for="expirationDate">Expiration Date</label>
              <input 
                id="expirationDate"
                v-model="campaign.expirationDate"
                type="date"
                class="form-control"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-save">Save Campaign</button>
      </div>
    </form>
    <div v-else class="loading">Loading campaign data...</div>
  </div>
</template>

<style lang="scss">
@use '@/styles/detailStyles.css';

</style>