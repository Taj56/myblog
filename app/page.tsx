import {client, urlFor} from "@/app/lib/sanity";
import {blogCard} from "@/app/lib/interface";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const getData = async () =>{
    const query = `
        *[_type == 'blog'] | order(_createdAt desc){
            title,
            smallDescription,
            "currentSlug": slug.current,
            titleImage
        }
    `;

    return await client.fetch(query);
};


const Home = async () => {

    const data: blogCard[] = await getData();


  return (
    <>
      <div className={"grid grid-cols-1 md:grid-cols-2 mt-5 gap-5"}>
          {data.map((post, idx)=>(
            <Card key={idx}>
                <Image src={urlFor(post.titleImage).url()} alt={'Image'}
                       width={500} height={500}
                       className={"rounded-t-lg h-[200px] object-cover object-center"}
                />
                <CardContent className={"mt-5"}>
                    <h3 className={"text-xl line-clamp-2 font-bold"}>{post.title}</h3>

                    <p className={"line-clamp-2 mt-1 text-sm text-gray-500"}>{post.smallDescription}</p>
                    <Button asChild={true} className={"w-full mt-7"}>
                        <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                    </Button>
                </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}

export default Home;
