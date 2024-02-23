
import ContactForm from "@/components/ContactForm"
import Projects from "./Projects"

const Contacts = () => {
  return (
    <>

      <div className='min-h-full min-w-full h-full  flex flex-col lg:grid lg:grid-cols-3 '>
        <div className="flex flex-col col-start-2 col-end-3  text-center items-center my-16 shadow-lg min-w-[420px] pb-4 ">
          <h1 className='text-4xl font-bold text-[#6E07F3] py-12'> Say Hello! </h1>
            <ContactForm />
        </div>
      </div>

    
    </>
  )
}

export default Contacts