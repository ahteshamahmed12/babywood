// sanity/pet.ts
export default {
    name: 'Product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'tags',
            type: 'string',
            title: 'Tags',
            options: {
                includeFromRelated: 'myTags'
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot:true,
            }
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            Options:{
                source:'alt',
                maxLength: 200, 
                slugify: (input:string) => input
                .toLowerCase()
                .replace(/\s+/g,'-')
                .slice(0, 200)
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type'
        },
        {
            name: 'brand',
            type: 'string',
            title: 'Brand'
        },
        {
            name: 'weight',
            type: 'string',
            title: 'Weight'
        },


    ]
}
