

const Projects = () => {

  return (
    <main className="min-h-screen ">
      <div className="min-h-[480px] flex flex-col items-center text-center mx-auto pt-24 bg-[#6E07F3]">
        <h1 className="text-4xl font-bold text-white pt-12">My Personal Projects</h1>
        <h2 className="text-md font-semibold pt-4 text-white">Here are some ways to contact me.</h2>
      </div>
      <div className="container border  rounded-xl  shadow-lg min-h-[640px] mx-auto w-[90%] md:w-[80%] grid grid-cols-12 gap-8 mt-[-180px] bg-white">
       
          <div className='col-span-8 text-left border min-h-[360px]'> Some card </div>
          <div className='col-span-4 border min-h-[360px]'> Some Text </div>
          <div className='col-span-4 text-left border min-h-[360px]'> Some text </div>
          <div className='col-span-8 border min-h-[360px]'> Some Card </div>
      </div>
    </main>
  )
}

export default Projects