import React from "react"
import Nav from "@/components/nav"
import tasker from '../../assets/projects_resized.png'
import shooter from '../../assets/wave-shooter_resized.png'
import pong from '../../assets/pong_ingame.png'
import portfolio from '../../assets/portfolio_landing.png'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ReactNode } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SiReact, SiVite, SiPostgresql, SiAwsamplify, SiPython } from "react-icons/si";
import { IconContext } from "react-icons";
import { FaGolang } from "react-icons/fa6";


const Portfolio = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }
  , [])
  return (
    <main className="bg-neutral-50">
    <Nav />
    <section className="mx-4 md:mx-auto md:container max-w-6xl mt-12 ">
      <h1 className="text-5xl font-semibold text-[#6E07F3]">Portfolio</h1>
      <div className="flex flex-col lg:grid grid-cols-2 gap-6 md:gap-12 mt-12">
        {Items.map((item) => (
          <ProjectCard {...item }/>
        ))}
      </div>
    </section>
    </main>
  )
}

export default Portfolio
type ButtonsProps = {
  text: string
  link: string
}

type ProjectCardProps = {
  image: string
  key: string
  title: string
  subtitle: string
  description: string
  descriptionComponent?: ReactNode
  buttons:  ButtonsProps[]
  icons?: ReactNode
  className?: string

}




const ProjectCard = ({image, key, title, subtitle, description, descriptionComponent, buttons, icons}: ProjectCardProps) => {
  return (
    <div className="flex h-[100%] flex-col inset-0 bg-white rounded-xl">
      <img loading="lazy" className=" p-4 mx-auto w-fit h-[300px] object-cover rounded-md" src={image}/>
      <h1 className="text-3xl font-semibold p-2">{title}</h1>
      <p className="text-lg font-medium p-2">{subtitle}</p>
      <p className="text-base font-normal p-2">{description}</p>
        {descriptionComponent ?  descriptionComponent : <p className="lg:h-24"></p>} 
      <div className="flex gap-2 mx-auto">
        {icons}
      </div>
      <div className="flex flex-co md:flex-row justify-around gap-2 md:gap-4 p-2">
        {buttons?.map((button: ButtonsProps) => (
          <Link to={button.link} target="_blank">
            <Btn>{button.text}</Btn>
          </Link>
        ))}
      </div>
    </div>
  )}

type BtnProps = {children: ReactNode}
const Btn = ({children}: BtnProps) => {
  return (
    <Button className="mt-4 w-fit bg-transparent border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3]  hover:text-neutral-50" variant="outline">
      {children}
    </Button>
  )
}

const Items: ProjectCardProps[] = [
  {
    image: tasker,
    key: "tasker",
    title: "Tasker",
    subtitle: "Project Management App",
    description: `Auth handled by Amazon Cognito, front end in React, Tailwind, ShadcnUI and backend in Go and Postgress. 
    Frontend deployed in Aws Amplify and backend in Railway. You can test the app using the following credentials:`,
    descriptionComponent: (
    <div className="flex flex-col gap-2 font-semibold p-2 ">
      <p >Username: visitor Password: Visitor123 </p>
      <p>Password: Visitor123</p>
    </div>
  ),
    buttons : [{text: "Project Details", link: "/tasker"}, {text: "View Repository", link:"https://github.com/Desgue/Tasker"}, {text: "Live Demo", link: "https://production.d3ozduy4s4mqlc.amplifyapp.com/"}],
    icons: (
      <>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <FaGolang />
          </IconContext.Provider></TooltipTrigger>
        <TooltipContent>
          <p>Golang</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>                
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiReact />
          </IconContext.Provider></TooltipTrigger>
        <TooltipContent>
          <p>ReactJs</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>                
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiVite />
          </IconContext.Provider></TooltipTrigger>
        <TooltipContent>
          <p>Vite</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>                
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiPostgresql />
          </IconContext.Provider></TooltipTrigger>
        <TooltipContent>
          <p>PostgresSQL</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiAwsamplify />
          </IconContext.Provider></TooltipTrigger>
        <TooltipContent>
          <p>Aws Amplify + Aws Cognito</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </>
    )
  },
  {
    image: shooter,
    key: "wave-shooter",
    title: "Wave Shooter",
    subtitle: "Wave Shooter Game in Python",
    description: "A simple game being developed in Python to learn more about game development. The game is a simple wave shooter where the player has to survive waves of enemies.",
    buttons: [{text: "Project Details", link: "/wave-shooter"}, {text: "View Repository", link:"https://github.com/Desgue/wave-shooter"}],
    icons: (<TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiPython />
          </IconContext.Provider>
        </TooltipTrigger>
        <TooltipContent>
          <p>Pyhon + PygameCE</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>)
  },
  {
    image: pong,
    key: "pong",
    title: "Pong",
    subtitle: "Remake of Pong in Python",
    description: "My first game developed in Python to learn the basic of game development. The game is a simple pong game where the player has to hit the ball with the paddle.",
    buttons : [{text: "Project Details", link: "/pong"}, {text: "View Repository", link:"https://github.com/Desgue/Pong2"}],
    icons: (<TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiPython />
          </IconContext.Provider>
        </TooltipTrigger>
        <TooltipContent>
          <p>Pyhon + PygameCE</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>)
  },
  {
    image: portfolio,
    key: "portfolio",
    title: "Portfolio",
    subtitle: "My personal portfolio",
    description: "My personal portfolio developed to showcase my work and pratice frontend web development. The portfolio is developed in React, Tailwind and ShadcnUI. Hosted on Aws Amplify.",
    buttons: [{text: "Project Details", link: "/portfolio"}, {text: "View Repository", link:"https://github.com/Desgue/portfolio"}],
    icons: (<>
        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>                
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiReact />
          </IconContext.Provider></TooltipTrigger>
        <TooltipContent>
          <p>ReactJs</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>                
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiVite />
          </IconContext.Provider></TooltipTrigger>
        <TooltipContent>
          <p>Vite</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='hover:cursor-default '>
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiAwsamplify />
          </IconContext.Provider></TooltipTrigger>
        <TooltipContent>
          <p>Aws Amplify</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </>)
  }

]