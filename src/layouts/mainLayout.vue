
<template>
        <div class="container">
          Select theme:
          <select v-model="selectedTheme">
            <option
              v-for="(theme, index) in themes"
              :key="index"
              :value="theme.input"
            >
              {{ theme.name }}
            </option>
          </select>
        </div>
  <sidebar-menu
    v-model:collapsed="collapsed"
    :menu="menu"
    :theme="selectedTheme"
    :show-one-child="true"
    :smooth-scroll="true"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
  />
 <!--   <div
    v-if="isOnMobile && !collapsed"
    class="sidebar-overlay"
    @click="collapsed = true"
  />  -->
 <!--    <div id="demo" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">--> 
      <div class="demo">
        <hr style="margin: 0px 0px; border: 1px solid #e3e3e3" />
        <router-view />
      </div>
 <!--   </div>-->
</template>

<script >
import { h } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const separator = h('hr', {
  style: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
})

const faIcon = (props) => {
  return {
    element: h('div', [h(FontAwesomeIcon, { size: 'lg', ...props })]),
  }
}

export default {
  name: 'App',
  data() {
    return {
      menu: [
        
        {
          header: 'Getting Started',
          hiddenOnCollapse: true,
        },
        {
          href: '/mainLayout/documentation',
          title: 'Documentation',
          icon: faIcon({ icon: 'fa-solid fa-book' }),
        },
        {
          header: 'Main Modules',
          hiddenOnCollapse: true,
        },
        {
          href: '/mainLayout/campaignList',
          title: 'Campaigns',
          icon: faIcon({ icon: 'fa-solid fa-bullhorn' }),
        child: [
            {
              href: '/page/sub-page-1',
              title: 'Properties',
              icon: faIcon({ icon: 'fa-solid fa-arrow-right', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'Targeting',
              icon: faIcon({ icon: 'fa-solid fa-arrow-right', size: 'sm' }),
            },
             {
              href: '/page/sub-page-2',
              title: 'Messages',
              icon: faIcon({ icon: 'fa-solid fa-arrow-right', size: 'sm' }),
            },
             {
              href: '/page/sub-page-2',
              title: 'Results',
              icon: faIcon({ icon: 'fa-solid fa-arrow-right', size: 'sm' }),
            },
          ],  
        },
        {
          href: '/mainLayout/conversationList',
          title: 'Conversations',
          icon: faIcon({ icon: 'fa-solid fa-list-ul' }),
        },
        {
          href: '/styling',
          title: 'Audience Models',
          icon: faIcon({ icon: 'fa-solid fa-palette' }),
        },
        {
          href: '/slots',
          title: 'Segment Models',
          icon: faIcon({ icon: 'fa-solid fa-cubes' }),
        },
            {
          href: '/mainLayout/conversationList',
          title: 'Suppression Lists',
          icon: faIcon({ icon: 'fa-solid fa-list-ul' }),
        },
        {
          href: '/styling',
          title: 'Sender Names',
          icon: faIcon({ icon: 'fa-solid fa-palette' }),
        },
        {
          href: '/slots',
          title: 'Sender Domains',
          icon: faIcon({ icon: 'fa-solid fa-cubes' }),
        },
                {
          href: '/slots',
          title: 'Results',
          icon: faIcon({ icon: 'fa-solid fa-cubes' }),
        },
        {
          component: separator,
        },
        {
          title: 'Logout',
          icon: faIcon({ icon: 'fa-solid fa-list-alt' }),
          child: [
            {
              title: 'page',
            },
            {
              title: 'Level 2 ',
              child: [
                {
                  title: 'page',
                },
                {
                  title: 'Page',
                },
              ],
            },
            {
              title: 'Page',
            },
            {
              title: 'Another Level 2',
              child: [
                {
                  title: 'Level 3',
                  child: [
                    {
                      title: 'Page',
                    },
                    {
                      title: 'Page',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      collapsed: false,
      themes: [
        {
          name: 'Default theme',
          input: 'dark-theme',
        },
        {
          name: 'White theme',
          input: 'white-theme',
        },
      ],
      selectedTheme: 'white-theme',
      isOnMobile: false,
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log('onToggleCollapse')
    },
    onItemClick(event, item) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}

#demo {
  padding-left: 290px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 65px;
}
#demo.onmobile {
  padding-left: 65px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.demo {
  padding: 50px;
}

.container {
  max-width: 900px;
}
</style>