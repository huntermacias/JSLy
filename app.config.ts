// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
const socials = {
   portfolio: {
      label: 'Portfolio',
      icon: 'PortfolioIcon',
      href: 'https://hunter-me.vercel.app/'
   },
   linkedin: {
      label: 'LinkedIn',
      icon: 'LinkedInIcon',
      href: 'https://www.linkedin.com/in/huntermacias/'
   },
   }
  


export default defineAppConfig({
  docus: {
    title: 'JSLy',
    description: 'The best place to master JavaScript',
    image: 'https://img.freepik.com/free-vector/matrix-style-binary-code-digital-background-with-falling-numbers_1017-25336.jpg?t=st=1714430629~exp=1714434229~hmac=ca3d9c37e72cb7532000819e7fda366391043f69fbedb5695a0ba1ec8dda957b',
    socials: {
      twitter: 'huntermacias_',
      github: 'https://github.com/huntermacias',
      portfolio: socials.portfolio,
      linkedin: socials.linkedin
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      title: 'JSLy',
      logo: 'Logo',
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: 'Logo',
        text: 'Powered by JSLy',
        href: 'https://docus-zeta-red.vercel.app/'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
   
  }
})
