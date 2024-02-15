import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import tasker from '../../assets/projects.png'
import shooter from '../../assets/wave-shooter.png'
const Projects = () => {

  return (
    <main className="min-h-screen ">
      <div className="min-h-[480px] flex flex-col items-center text-center mx-auto pt-24 bg-[#6E07F3]">
        <h1 className="text-4xl font-bold text-white pt-12">My Personal Projects</h1>
        <h2 className="text-md font-semibold pt-4 text-white">Here are pet projects I am currently working on.</h2>
      </div>
      <div className="container border  rounded-xl  shadow-lg min-h-[640px] mx-auto w-[90%] md:w-[80%] flex flex-col lg:grid lg:grid-cols-12 gap-8 mt-[-180px] bg-white">
       
          <div className='lg:col-span-8 group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg pt-4'> 
            <Link to="/projects/tasker">
            <img loading="lazy" className="h-full w-full object-cover" src={tasker} alt="Tasker Landing Page" />
            </Link>
          </div>
          <div className='lg:col-span-4 min-h-[360px] flex flex-col item-center text-center pt-2 container'> 
            <h1 className="text-xl font-bold"><span className='text-[#6E07F3] font-extrabold text-2xl'>Tasker</span><br/> Project Management App </h1>
            <p className="text-md font-semibold pt-2 text-pretty">A project management app that helps you keep track of your projects and tasks.</p>
            
            <p className="text-base font-medium    pt-8 text-pretty  ">Use the visitor account with Username: Visitor and Password: Visitor123 if you want to access all functionality.</p>
            <p className="text-base font-medium pt-2 text-pretty">This project was made using Vite + React, Aws Cognito, Go and PostgresSql.</p>
            <Link to="https://production.d3ozduy4s4mqlc.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 w-full border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white" variant="outline">View Project</Button>
            </Link>
            <Link to="https://github.com/Desgue/Tasker" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 w-full border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white" variant="outline">View Repository</Button>
            </Link>
          </div>


          <div className='order-1 lg:order-2 lg:col-span-8 group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg pt-4'> 
            <Link to="/projects/shooter">
            <img loading="lazy" className="h-full lg:h-[90%] pl-12 w-full lg:w-[90%] object-cover" src={shooter} alt="Tasker Landing Page" />
            </Link>
          </div>

          <div className='order-2 lg:order-1 lg:col-span-4 min-h-[360px] flex flex-col item-center text-center pt-2 pb-4 container'> 
            <h1 className="text-[#6E07F3] font-extrabold text-2xl"> Wave Shooter </h1>
            <p className="text-md font-semibold pt-2 text-pretty">A wave shooter style game in 2D</p>
            
            <p className="text-base font-medium pt-8 text-pretty ">This project is still under development and its still my second attempt in 2d game development in Python, I can say it have been a challange and a thrill to delve into the world of vector math and OOP.</p>
            <p className="text-base font-medium pt-2 text-pretty">Made with Python and Pygame-Ce.</p>
            <Link to="/projects/shooter">
              <Button className="mt-4 w-full border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white" variant="outline">View Project</Button>
            </Link>
            <Link to="https://github.com/Desgue/wave-shooter" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 w-full border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white" variant="outline">View Repository</Button>
            </Link>
          </div>
          
      </div>
    </main>
  )
}

export default Projects