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
    image: '/image1.webp',

    socials: {
      twitter: 'huntermacias_',
      github: 'https://github.com/huntermacias',
      youtube: 'https://www.youtube.com/channel/UCehlaH65-4g7NywRWX0MlkA/videos',
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
    // table of content configuration
    toc: {
      show: true,
      maxDepth: 3
    },
    
    footer: {
      credits: {
        icon: 'Logo',
        text: 'Powered by JSLy',
        href: 'https://jsly.vercel.app/'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
   
   
  }
})
