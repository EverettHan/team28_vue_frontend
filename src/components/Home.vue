<template>
  <div>
    <h2>Basic Usage</h2>
    <pre>&lt;template&gt;
  &lt;sidebar-menu :menu="menu" /&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        menu: [
          {
            header: true,
            title: 'Main Navigation',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user'
          },
          {
            href: '/charts',
            title: 'Charts',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
            ]
          }
        ]
      }
    }
  }
&lt;/script&gt;
</pre>
    <h3>Item Properties</h3>
    <pre>...
menu [
  // item
  {
    href: '/',

    title: 'Dashboard',

    // icon class
    icon: 'fa fa-user'
    

  },

  // header item
  {
    header: true,
    title: 'Main Navigation'
  },

  // component item
  {
    component: componentName
  }
]
...
</pre>
  </div>
</template>