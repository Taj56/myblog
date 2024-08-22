import {client} from "@/app/lib/sanity";
import {blogCard} from "@/app/lib/interface";

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
      <div>
        <h1>hello</h1>
      </div>
    </>
  );
}

export default Home;
