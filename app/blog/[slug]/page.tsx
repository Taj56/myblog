import {client, urlFor} from "@/app/lib/sanity";
import {fullBlogCard} from "@/app/lib/interface";
import Image from "next/image";
import {PortableText} from "@portabletext/react";

const getData = async (slug: string) =>{
    const query = `
        *[_type == 'blog' && slug.current == '${ slug }']{
          "currentSlug": slug.current,
          title,
          titleImage,
          smallDescription,
          content
        }[0]
    `;
    return await client.fetch(query);
}

export const revalidate = 30 // revalidate at most 30sec


const BlogArticle = async ({params} : {params: {slug: string}}) =>{
    const data: fullBlogCard = await getData(params.slug)
    return (
        <>
            <div className={"mt-8"}>
                <h1>
                    <span
                        className={"block text-base text-center text-primary font-semibold tracking-wide uppercase"}>
                        Tajay Rob - Blog
                    </span>
                    <span
                        className={"mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl"}>
                        {data.title}
                    </span>
                </h1>
                <Image src={urlFor(data.titleImage).url()} alt={'Image'}
                       width={800} height={800}
                       priority
                       className={"rounded-lg mt-8 border mx-auto"}
                />
                <div
                    className={"mt-16 prose prose-blue prose-lg dark:prose-invert prose-headings:underline"}>
                    <PortableText value={data.content} />
                </div>
            </div>
        </>
    );
}

export default BlogArticle;