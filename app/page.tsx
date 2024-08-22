import {client, urlFor} from "@/app/lib/sanity";
import {blogCard} from "@/app/lib/interface";
import {Card} from "@/components/ui/card";
import Image from "next/image";

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
      <div className={"grid grid-cols-1 m:grid-cols-2 mt-5 "}>
          {data.map((post, idx)=>(
            <Card key={idx}>
                <Image src={urlFor(post.titleImage).url()} alt={'Image'} width={300} height={300} />
            </Card>
          ))}
      </div>
    </>
  );
}

export default Home;
