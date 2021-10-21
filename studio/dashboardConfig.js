export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6171b89f80ab2c14ee8907ef',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ctj4ff56',
                  apiId: '709d06ab-a398-4867-bec9-af19b893eb5f'
                },
                {
                  buildHookId: '6171b89f8c161716e758f5ef',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z5f8zbrs',
                  apiId: '81fd00b2-436a-4d53-bb71-e6c09ac64d56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/satendra4u/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z5f8zbrs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
