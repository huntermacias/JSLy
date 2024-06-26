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
    image: 'logo3.png',
    ogImage: 'logo3.png',
    twitterCard: 'summary_large_image',

    socials: {
      twitter: 'huntermacias_',
      github: 'https://github.com/huntermacias',
      youtube: 'https://www.youtube.com/channel/UCehlaH65-4g7NywRWX0MlkA/videos',
      portfolio: socials.portfolio,
      linkedin: socials.linkedin
    },

    aside: {
      level: 1,
      collapsed: false,
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
        href: 'https://jsly.vercel.app/'
      },
      textLinks: [],
      iconLinks: [],
      fluid: true
    },
   
   
  }
})
