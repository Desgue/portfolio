
import Projects from "./Projects"

const Contacts = () => {
  return (
    <>
    <main className='min-h-screen mt-24'>
      <div className='min-h-full  flex flex-col items-center text-center container mx-auto'>
        <h1 className='text-4xl font-bold text-black'> Contact Me </h1>
        <h2 className='text-md font-semibold pt-4'> Contact me on the following links </h2>
        
      </div>
      <div className='mx-auto container  w-[90%] md:w-[80%] grid grid-cols-12 gap-8 mt-12'>
          <div className='col-span-8 text-left border min-h-[360px]'> Some card </div>
          <div className='col-span-4 border min-h-[360px]'> Some Text </div>
          <div className='col-span-4 text-left border min-h-[360px]'> Some text </div>
          <div className='col-span-8 border min-h-[360px]'> Some Card </div>
      </div>
    </main>
    <Projects />
    </>
  )
}

export default Contacts