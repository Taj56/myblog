export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of the blog',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of the blog',
        },
        {
          name: 'titleImage',
          type: 'image',
          title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small description of the blog',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
};