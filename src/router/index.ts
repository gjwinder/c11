import { createRouter, createWebHistory } from 'vue-router'
import loginLayout from "../layouts/loginLayout.vue"
import mainlayout from "../layouts/mainLayout.vue"
import topMenu from "../components/topMenu.vue"
import campaignSidebar from "../components/campaignSidebar.vue"
import campaignList from "../lists/campaignList.vue"
import conversationList  from "../lists/conversationList.vue"
import audienceList  from "../lists/audienceList.vue"
import segmentationList  from "../lists/segmentationList.vue"
import suppressionList  from "../lists/suppressionList.vue"
import senderList  from "../lists/senderList.vue"
import domainList  from "../lists/domainList .vue"
import resultList  from "../lists/resultList.vue"
import documentation from "../links/documentation.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [	
		{
			path: '/',
			name: "LoginLayout",
			component: loginLayout
		},	
		{	path: '/components/topMenu',
			name: "TopMenu",
			component: topMenu
		},	
		{	path: '/components/campaignSidebar',
			name: "CampaignSidebar",
			component: campaignSidebar
		},
  		{
			path: '/mainLayout',
			name: "MainLayout",
			component: mainlayout,
			children: [
				{
				path: 'campaignList',
				component: campaignList
				},
				{
				path: 'conversationList',
				component: conversationList
				}	
				,
				{
				path: 'audienceList',
				component: audienceList
				}	
				,
				{
				path: 'segmentationList',
				component: segmentationList
				}	
				,
				{
				path: 'suppressionList',
				component: suppressionList
				},	
				{
				path: 'senderList',
				component: senderList
				}	
				,
				{
				path: 'domainList',
				component: domainList
				}	
				,
				{
				path: 'resultList',
				component: resultList
				}	
				,
				{
				path: 'documentation',
				beforeEnter() {
    			window.open('https://docs.brickstreetsoftware.com/display/BSC10r571/Brick_Street_Connect_Documentation.html', '_blank')
  				},
				component: documentation								
				}]
			}
			]
})

export default router
