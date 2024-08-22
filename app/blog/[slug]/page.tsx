import {client} from "@/app/lib/sanity";
import {fullBlogCard} from "@/app/lib/interface";

const getData = async (slug: string) =>{
    const query = `
        *[_type == 'blog' && slug.current == '${ slug }']{
          "currentSlug": slug.current,
          titleImage,
          smallDescription,
          content
        }[0]
    `;
    return await client.fetch(query);
}


const BlogArticle = async ({params} : {params: {slug: string}}) =>{
    const data: fullBlogCard = await getData(params.slug)
    return (
        <>
            
        </>
    );
}

export default BlogArticle;