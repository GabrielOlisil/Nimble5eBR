import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nimble 5e BR",
  description: "Um guia de como jogar",
  base:"Nimble5eBR",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      
    ],
    

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Combate', link: '/nimble-test' },
          { text: 'Iniciativa', link: '/api-examples' },
          { text: 'Mana', link: '/nimble-test' },
          { text: 'Skills', link: '/nimble-test' },
          { text: 'Descanso', link: '/nimble-test' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
