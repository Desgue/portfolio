import Contacts from "./Contacts"
const AboutMe = () => {
  return (
    <main className='min-h-screen h-screen min-w-screen  '>
      <section className='bg-[#6E07F3] h-[65%] flex flex-col justify-center text-center'>
        <div className=" w-full sm:w-[75%] lg:!w-[45%] container pb-32">
          <h1 className='text-4xl font-bold text-white '> Hi, Im Eduardo </h1>
          <h2 className='text-xl font-medium text-white pt-4 h-fit'> Since the begging of my journey as a Software Developer a Year ago, I've done remote work for a consulting
            agency, created several websites and worked on a few personal projects. I am quietly confident, naturally curious, and perpetually working on improving my chops solving problems. </h2>
        </div>
      </section>
      <div className='bg-white flex flex-col lg:flex-row text-center gap-12 min-h-full lg:min-h-[80%] w-[90%] md:w-[80%] border rounded-xl shadow-md container mt-[-140px] '>
          <div className="container border-b lg:border-b-0 lg:border-r min-h-[460px] pt-24">
            <h1 className='text-2xl font-bold text-black'> About Me </h1>
            <h2 className='text-md font-semibold pt-4'> I'm a software developer based in Brazil. I have a passion for software development and I'm always looking for new challenges. I'm a quick learner and I'm always looking for new technologies to learn. </h2>
          </div>
          <div className="container border-b lg:border-b-0 lg:border-r min-h-[460px] pt-24">
            <h1 className='text-2xl font-bold text-black'> About Me </h1>
            <h2 className='text-md font-semibold pt-4'> I'm a software developer based in Brazil. I have a passion for software development and I'm always looking for new challenges. I'm a quick learner and I'm always looking for new technologies to learn. </h2>
          </div> 
          <div className="container min-h-[460px] pt-24">
            <h1 className='text-2xl font-bold text-black '> About Me </h1>
            <h2 className='text-md font-semibold pt-4'> I'm a software developer based in Brazil. I have a passion for software development and I'm always looking for new challenges. I'm a quick learner and I'm always looking for new technologies to learn. </h2>
          </div>
        </div>
        <Contacts />
    </main>
  )
}

export default AboutMe