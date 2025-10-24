<script type="ts">
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
          header: 'Connect 11.2 Documentation',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'On-Line Docs',
          icon: faIcon({ icon: 'fa-solid fa-book' }),
        },
        {
          href: '/basic-usage',
          title: 'On-Line Help',
          icon: faIcon({ icon: 'fa-solid fa-circle-info' }),
        },
        {
          header: 'Connect Modules',
          hiddenOnCollapse: true,
        },
        {
          title: 'Campaigns',
          icon: faIcon({ icon: 'fa-solid fa-cogs' }),
              child: [
            {
              href: '/mainLayout/campaignList',
              title: 'Definitions',
              icon: faIcon({ icon: 'fa-solid fa-magnifying-glass', size: 'sm' }),
            },
            {
              href: '/mainLayout/conversationList',
              title: 'Conversations/Lists',
              icon: faIcon({ icon: 'fa-solid fa-comments', size: 'sm' }),
            },
                        {
              href: '/page/sub-page-1',
              title: 'audience Models',
              icon: faIcon({ icon: 'fa-solid fa-people-arrows', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'segmentation Models',
              icon: faIcon({ icon: 'fa-solid fa-database', size: 'sm' }),
            },
                        {
              href: '/page/sub-page-1',
              title: 'Suppression Lists',
              icon: faIcon({ icon: 'fa-solid fa-wand-magic', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'Sender Names',
              icon: faIcon({ icon: 'fa-solid fa-list', size: 'sm' }),
            },
                        {
              href: '/page/sub-page-1',
              title: 'Sender domains',
              icon: faIcon({ icon: 'fa-solid fa-square-share-nodes', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'Results',
              icon: faIcon({ icon: 'fa-solid fa-list-check', size: 'sm' }),
            }
          ],
        },
        {           
          title: 'Customers',
          icon: faIcon({ icon: 'fa-solid fa-bell' }),
             child: [
            {
              href: '/page/sub-page-1',
              title: 'Customer Browser',
              icon: faIcon({ icon: 'fa-solid fa-window-restore', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'Attributes',
              icon: faIcon({ icon: 'fa-solid fa-suitcase', size: 'sm' }),
            },
            {
              href: '/page/sub-page-1',
              title: 'Preferences',
              icon: faIcon({ icon: 'fa-solid fa-check', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'Interests',
              icon: faIcon({ icon: 'fa-solid fa-eye', size: 'sm' }),
            }         

          ],
        },
        {
          title: 'Reports',
          icon: faIcon({ icon: 'fa-solid fa-palette' }),
            child: [
            {
              href: '/page/sub-page-1',
              title: 'System Reports',
              icon: faIcon({ icon: 'fa-solid fa-hotel', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'activity Reports',
              icon: faIcon({ icon: 'fa-solid fa-square-envelope', size: 'sm' }),
            },
                        {
              href: '/page/sub-page-1',
              title: 'Conversion Reports',
              icon: faIcon({ icon: 'fa-solid fa-tag', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'Message Status Report',
              icon: faIcon({ icon: 'fa-solid fa-champagne-glasses', size: 'sm' }),
            },
                        {
              href: '/page/sub-page-1',
              title: 'Tags Report',
              icon: faIcon({ icon: 'fa-solid fa-tags', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'Campaign Summery',
              icon: faIcon({ icon: 'fa-solid fa-champagne-glasses', size: 'sm' }),
            },
                        {
              href: '/page/sub-page-1',
              title: 'Custom Reports',
              icon: faIcon({ icon: 'fa-solid fa-hotel', size: 'sm' }),
            }
           
          ],
        },
        {
          href: '/slots',
          title: 'Surveys',
          icon: faIcon({ icon: 'fa-solid fa-cubes' }),
        },
        {
          title: 'Admin',
          icon: faIcon({ icon: 'fa-solid fa-cubes' }),
            child: [
            {
              href: '/page/sub-page-1',
              title: 'Company Admin',
              icon: faIcon({ icon: 'fa-solid fa-user-tie', size: 'sm' }),
            },
            {
              href: '/page/sub-page-1',
              title: 'Instance Admin',
              icon: faIcon({ icon: 'fa-solid fa-screwdriver-wrench', size: 'sm' }),
            },
            {
              href: '/page/sub-page-2',
              title: 'Deployments',
              icon: faIcon({ icon: 'fa-solid fa-screwdriver', size: 'sm' }),
              disabled: true,
            },
          ]
        },
        {
          component: separator,
        },
        {
          header: 'Examples',
          hiddenOnCollapse: true,
        },
        {
          title: 'Badge',
          icon: faIcon({ icon: 'fa-solid fa-cog' }),
          badge: {
            text: 'new',
            class: 'vsm--badge_default',
          },
        },
      ],
      collapsed: false,
      themes: [
        {
          name: 'Default theme',
          input: '',
        },
        {
          name: 'White theme',
          input: 'white-theme',
        },
        {
          name: 'Yellow theme',
          input: 'yellow-theme',
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
<template>
  <sidebar-menu
    v-model:collapsed="collapsed"
    :menu="menu"
    :theme="selectedTheme"
    :show-one-child="true"
    :smooth-scroll="true"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
  />
    <div
    v-if="isOnMobile && !collapsed"
    class="sidebar-overlay"
    @click="collapsed = true"
  />
  <div id="demo" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
    <div class="demo">
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
        <hr style="margin: 50px 0px; border: 1px solid #e3e3e3" />
        <router-view />
      </div>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: px;
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