
const AboutMe = () => {
  return (
    <main className='flex flex-col text-center h-[100dvh]'>
        <div className=" bg-[#6E07F3] relative h-2/3 lg:h-2/3 justify-center flex">
          <div className="container w-3/5 pt-12 lg:pt-24 items-center">
            <h1 className='text-4xl font-bold text-white '> Hi, Im Eduardo </h1>
            <h2 className='text-xl font-medium text-white pt-4'> Since the begging of my journey as a Software Developer a Year ago, I've done remote work for a consulting
              agency, created several websites and worked on a few personal projects. I am quietly confident, naturally curious, and perpetually working on improving my chops solving problems. </h2>
          </div>
        </div>
      <div className='flex flex-col lg:flex-row shadow-xl container lg:h-[420px] lg:translate-y-[-100px] bg-white  '>
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r container pt-12">
            <h1 className='text-2xl font-bold text-black'> Past Experience </h1>
            <h2 className='text-md font-semibold pt-4 text-pretty'> I'm a software developer based in Brazil. I have a passion for software development and I'm always looking for new challenges. I'm a quick learner and I'm always looking for new technologies to learn. </h2>
          </div>
          <div className=" lg:border-r border-b lg:border-b-0  container pt-12">
            <h1 className='text-2xl font-bold text-black'> About Me </h1>
            <h2 className='text-md font-semibold pt-4 text-pretty'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, exercitationem cumque placeat perferendis laboriosam beatae nemo labore doloremque. Modi minus vitae iste, quod laborum quo temporibus corrupti quidem vel eos? </h2>
          </div> 
          <div className="container pt-12">
            <h1 className='text-2xl font-bold text-black  '> What To Expect </h1>
            <h2 className='text-md font-semibold pt-4 text-pretty'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde dolor illo voluptates, vero explicabo eos ea illum soluta ad quae fugiat vitae quo officia doloribus odio corporis omnis animi esse.  </h2>
          </div>
      </div>
        
    </main>
  )
}

export default AboutMe