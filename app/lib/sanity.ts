import {createClient} from "next-sanity";
import  imageUrlBuilder  from '@sanity/image-url'

export const client = createClient({
    apiVersion: process.env.BLOG_API_VERSION,
    dataset: process.env.BLOG_DATASET,
    projectId: process.env.BLOG_PROJECT_ID,
    useCdn: false
})
const builder = imageUrlBuilder(client)

export const urlFor = (source: any) =>{
    return builder.image((source));
}