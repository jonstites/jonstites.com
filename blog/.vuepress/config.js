module.exports = {
  title: "jonstites",
  description: 'Shouting into the void',
  head: [
    ['link', { rel: 'icon', href: '/code.svg' }]
  ],  
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Books',
        link: '/reading_list/',
      },
      {
        text: 'Best of the internet',
        link: '/best_of/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Resume',
        link: '/resume/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/jonstites',
        },
      ],
      copyright: [
        {
          text: 'Blog content licensed under the Creative Commons CC BY 4.0',
          link: 'https://creativecommons.org/licenses/by/4.0/',
        },
      ],
    },
    feed: {
      canonical_base:'https://jonstites.com',
      rss:true,
      atom:true,
      json:false,
      posts_directories: ["_posts"]
    },
    sitemap: {
      hostname: "https://www.jonstites.com"
    }
  },
}
