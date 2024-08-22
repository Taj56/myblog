import {createClient} from "next-sanity";

export const client = createClient({
    apiVersion: process.env.BLOG_API_VERSION,
    dataset: process.env.BLOG_DATASET,
    projectId: process.env.BLOG_PROJECT_ID,
    useCdn: false
})