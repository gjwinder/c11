<script setup lang="ts">
import { RouterView } from 'vue-router'
import { h, ref, onMounted, onBeforeUnmount } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

interface MenuBadge {
  text: string
  class?: string
}

interface MenuIcon {
  element: ReturnType<typeof h>
}

interface MenuItem {
  header?: string
  title?: string
  href?: string
  icon?: MenuIcon
  child?: MenuItem[]
  hiddenOnCollapse?: boolean
  disabled?: boolean
  badge?: MenuBadge
  component?: ReturnType<typeof h>
}

interface Theme {
  name: string
  input: string
}

const separator = h('hr', {
  style: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
})

interface IconProps {
  icon: string
  size?: 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
  [key: string]: any
}

const faIcon = (props: IconProps): MenuIcon => {
  return {
    element: h('div', [h(FontAwesomeIcon, { size: props.size || 'lg', ...props })]),
  }
}

const layoutRoot = ref<HTMLElement | null>(null)

const menu = ref<MenuItem[]>([
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
    href: '/',
    title: 'On-Line Help',
    icon: faIcon({ icon: 'fa-solid fa-circle-info' }),
  },
  {
    header: 'Connect Modules',
    hiddenOnCollapse: true,
  },
  {
    title: 'Campaigns',
    href: '/mainLayout',
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
        href: '/mainLayout/campaignDetail',
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
      },
    ],
  },
  {
    title: 'Customers',
    href: '/mainLayout',   
    icon: faIcon({ icon: 'fa-solid fa-bell' }),     
    child: [
      {
        href: '/mainLayout/customerList',
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
      },
    ],
  },
  {
    title: 'Reports',
    href: '/mainLayout',
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
      },
    ],
  },
  {
    title: 'Surveys',
    href: '/mainLayout',
    icon: faIcon({ icon: 'fa-solid fa-cubes' }),
  },
  {
    title: 'Admin',
    href: '/mainLayout',
    icon: faIcon({ icon: 'fa-solid fa-user-tie' }),
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
    ],
  },
  {
    component: separator,
  },
  {
    header: 'Profile',
    href: '/mainLayout',
    hiddenOnCollapse: true,
  },
  {
    href: '/',
    title: 'Logout',
    icon: faIcon({ icon: 'fa-solid fa-cog' }),
    badge: {
      text: 'new',
      class: 'vsm--badge_default',
    },
  },
])

const collapsed = ref(false)
const themes = ref<Theme[]>([
  { name: 'Default theme', input: '' },
  { name: 'Dark theme', input: 'dark-theme' },
  { name: 'White theme', input: 'white-theme' },
  { name: 'Nuxt theme', input: 'nuxt-theme' },
  { name: 'Emma`s theme', input: 'yellow-theme' },
])
const selectedTheme = ref('yellow-theme')
const isOnMobile = ref(false)

// Theme selector rendered as a small functional component and inserted into the menu
const ThemeSelector = () =>
  h('div', { class: 'vsm-theme-selector', style: { padding: '8px' } }, [
    h('div', { style: { marginBottom: '6px', fontWeight: 600 } }, ),
    h(
      'select',
      {
        value: selectedTheme.value,
        onChange: (e: Event) => {
          selectedTheme.value = (e.target as HTMLSelectElement).value
        },
      },
      themes.value.map((t) => h('option', { value: t.input }, t.name))
    ),
  ])

const themeSelectorVNode = h(ThemeSelector)
// insert theme selector at the top of the menu so it appears inside the sidebar
menu.value.unshift({ component: themeSelectorVNode, hiddenOnCollapse: true })

let _vsmObserver: MutationObserver | null = null
let _docObserver: MutationObserver | null = null

const onToggleCollapse = (c: boolean) => {
  console.log('onToggleCollapse')
}

const onItemClick = (event: Event, item: MenuItem) => {
  console.log('onItemClick')
  // console.log(event)
  // console.log(item)
}

const onResize = () => {
  if (window.innerWidth <= 767) {
    isOnMobile.value = true
    collapsed.value = true
  } else {
    isOnMobile.value = false
    collapsed.value = false
  }
}

function syncVsmVar() {
  try {
    const sidebarEl = document.querySelector('.v-sidebar-menu') as HTMLElement | null
    const rootEl = layoutRoot.value
    if (!sidebarEl || !rootEl) return
    const valueVsmBaseBg = getComputedStyle(sidebarEl).getPropertyValue('--vsm-base-bg')
    if (valueVsmBaseBg) {
      rootEl.style.setProperty('--vsm-base-bg', valueVsmBaseBg.trim())
    }
    const valueVsmDropDownBg = getComputedStyle(sidebarEl).getPropertyValue('--vsm-dropdown-bg')
    if (valueVsmDropDownBg) {
      rootEl.style.setProperty('--vsm-dropdown-bg', valueVsmDropDownBg.trim())
    }
    const valueItemColor = getComputedStyle(sidebarEl).getPropertyValue('--vsm-item-color')
    if (valueItemColor) {
      rootEl.style.setProperty('--vsm-item-color', valueItemColor.trim())
    }
  } catch (e) {
    // fail silently
  }
}

function startVsmObserver() {
  const sidebarEl = document.querySelector('.v-sidebar-menu')
  if (sidebarEl && !_vsmObserver) {
    _vsmObserver = new MutationObserver(() => syncVsmVar())
    _vsmObserver.observe(sidebarEl, { attributes: true, attributeFilter: ['class', 'style'] })
  }
  const docEl = document.documentElement || document.body
  if (docEl && !_docObserver) {
    _docObserver = new MutationObserver(() => syncVsmVar())
    _docObserver.observe(docEl, { attributes: true, attributeFilter: ['class'] })
  }
}

function stopVsmObserver() {
  if (_vsmObserver) {
    try {
      _vsmObserver.disconnect()
    } catch (e) {}
    _vsmObserver = null
  }
  if (_docObserver) {
    try {
      _docObserver.disconnect()
    } catch (e) {}
    _docObserver = null
  }
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
  syncVsmVar()
  startVsmObserver()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  stopVsmObserver()
})
</script>

<template>
  <div ref="layoutRoot" class="layout-root">
    <sidebar-menu
      v-model:collapsed="collapsed"
      :menu="menu"
      :theme="selectedTheme"
      :show-one-child="true"
      :smooth-scroll="true"
      class="layout-sidebar"
      @update:collapsed="onToggleCollapse"
      @item-click="onItemClick"
    />
    <div
      v-if="isOnMobile && !collapsed"
      class="sidebar-overlay"
      @click="collapsed = true"
    />
    <main class="layout-main" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
      <div class="content-wrapper">
        <div class="container">
          <!-- Theme select moved into the sidebar menu (top) -->
        </div>
        <router-view :theme="selectedTheme" />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@use 'vue-sidebar-menu/src/scss/vue-sidebar-menu.scss';
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: px;
  background-color: #f2f4f7;
  color: #262626;
}

.layout-root {
  /* expose a local copy of the sidebar variable so scoped/local styles can read it
     fallback to the existing page background when the variable isn't present */
  --vsm-base-bg: var(--vsm-base-bg, #f2f4f7);
  --vsm-dropdown-bg: var(--vsm-dropdown-bg, #e3e3e3);
  --vsm-item-color: var(--vsm-item-color, #e3e3e3);
  --sidebar-width: 290px;
  --sidebar-collapsed-width: 50px;
  
  display: flex;
  min-height: 100vh;
  position: relative;
}

/* Layout sidebar styles */
.layout-sidebar {
  position: relative !important; /* Override the default fixed position */
  height: 100vh;
  flex-shrink: 0;
  border-right: 1px solid #bcbbbb;
  z-index: 1;
}

/* Layout main content area */
.layout-main {
  flex: 1;
  min-width: 0; /* Prevent flex item from overflowing */
  background: var(--vsm-dropdown-bg, #e3e3e3);
  color: var(--vsm-item-color, #e3e3e3);
  padding: 20px;
  transition: margin-left 0.3s ease;
}

/* Content wrapper for proper spacing */
.content-wrapper {
  height: 100%;
  max-width: 100%;
}

/* Mobile styles */
@media (max-width: 767px) {
  .layout-sidebar {
    position: fixed !important;
    left: 0;
    top: 0;
  }
  
  .layout-main {
    margin-left: 0;
    width: 100%;
  }
  
  .layout-main.onmobile {
    padding: 10px;
  }
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

.container {
  max-width: 900px;
}

/* Sidebar theme selector styling */
.vsm-theme-selector {
  padding: 8px 12px;
}
.vsm-theme-selector select {
  width: 100%;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.12);
}
</style>
