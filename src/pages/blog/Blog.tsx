import React from "react";
import Nav from "@/components/nav"
import { getAllPosts } from "@/queries/blog-data";
import { IoMdBook } from "react-icons/io";
import { FaRegCalendarTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


type HnodeResponse = {
  brief: string;
  publishedAt: string;
  readTimeInMinutes: number;
  slug: string;
  url: string;
  title: string;
  coverImage?: {
    url: string;
  
  }
}

const Blog = () => {
  const [response, setResponse] = React.useState<HnodeResponse>({brief: "", publishedAt: "", readTimeInMinutes: 0, slug: "", url: "", title: ""} as HnodeResponse)
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    document.title = "Blog";
    getAllPosts({host: "guedes.hashnode.dev/", first: 10})
    .then((res) => {
      const node = res.edges[0].node
      setResponse((prev) => {
        return {...prev, brief: node.brief, publishedAt: node.publishedAt, readTimeInMinutes: node.readTimeInMinutes, slug: node.slug, url: node.url, title: node.title, coverImage:{url: node.coverImage.url}}
      
      })
    } )
    .then(() => setLoading(false))
    .catch((err) => console.log(err))

  }, []); 


  return (
    <main className=" min-h-screen ">
    <Nav />
    <div className="mt-24">
      <div className="container flex flex-col gap-4 ">
        <h1 className="text-5xl font-semibold text-[#6E07F3]"> Blog </h1>
        <h2 className="text-xl font-light "> I find that to learn one must know how to teach, this series is my attempt at teaching what I have been learning during my studies. </h2>
      </div>
      {loading ? <div className="container mx-auto"> <p className="text-xl font-semibold text-center">Loading...</p> </div> : 
        <div className="flex flex-col mt-12  gap-12 items-center">
          <PostCard {...response} />
        </div>
      }
    </div>
    </main>
  )
}

export default Blog

const PostCard = ({brief, publishedAt, readTimeInMinutes, url, title, coverImage}: HnodeResponse) => {
  return (
   < > 
    <Link to={url} target="_blank" className="container bg-white border rounded-lg  py-16 px-12 flex flex-col 2xl:flex-row 2xl:gap-8 text-left lg:w-3/5 ">
      <div className="rounded-lg 2xl:w-full 2xl:h-full ">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex gap-2 text-[#64748b] my-1">
          <p className="text-sm font-normal flex gap-2 text-[#6E07F3]"><FaRegCalendarTimes className="pl-1 mt-1" />  {new Date(publishedAt).toLocaleDateString()}</p>
          <p className="text-sm font-normal flex gap-1 text-[#6E07F3]"> <IoMdBook className=" w-4 h-4 pt-1"/> {readTimeInMinutes} min read</p>
          <p className="text-sm font-normal pl-2 text-[#6E07F3]">  Read on Hash Node</p>
        </div>
        <div className=" text-md  md:text-lg">
          <p className="indent-1 lg:text-clip"> {brief} </p>
        </div>
      </div>
      <img src={coverImage?.url} alt="cover image" className="w-full h-full 2xl:w-1/4 2xl:h-1/4 object-cover rounded-lg border" loading="lazy"/>
    </Link>
  </>

  )
}