import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tasker from "../../assets/projects.png";
import shooter from "../../assets/wave-shooter.png";
import taskercli from "../../assets/TaskerCLI.gif";
import {
  GoToolTip,
  ViteToolTip,
  ReactToolTip,
  PostgressToolTip,
  PythonPygameTooltip,
  AwsCognitoAmplifyToolTip,
} from "@/components/CustomTooltips";
const Projects = () => {
  return (
    <main id="projects" className="min-h-screen ">
      <div className="min-h-[480px] flex flex-col items-center text-center mx-auto pt-24 bg-[#6E07F3]">
        <h1 className="text-4xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200 pt-4">
          My Personal Projects
        </h1>
        <h2 className="text-md lg:text-xl font-semibold pt-4 px-2 text-white">
          Some of the pet projects I am currently working on.
        </h2>
        <Link to="/portfolio">
          <Button
            className="mt-4  border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white"
            variant="outline"
          >
            View All Projects
          </Button>
        </Link>
      </div>
      <div className="container border  z-999 rounded-xl  shadow-lg min-h-[640px] mx-auto w-[90%] md:w-[80%] flex flex-col lg:grid lg:grid-cols-12 gap-8 mt-[-180px] bg-white">
        <div className="lg:col-span-8 group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg pt-4">
          <Link to="/projects/tasker">
            <img
              loading="lazy"
              className="h-full w-full object-cover"
              src={tasker}
              alt="Tasker Landing Page"
            />
          </Link>
        </div>
        <div className="lg:col-span-4 min-h-[360px] flex flex-col item-center text-center pt-2 ">
          <h1 className="text-md font-bold">
            <span className="text-[#6E07F3] font-extrabold text-2xl">
              Tasker
            </span>
            <br /> Project Management App{" "}
          </h1>
          <p className="text-base font-medium pt-2">
            A project management app developed to apply and consolidate concepts
            I have been working with recently.
          </p>
          <p className="text-base font-medium pt-2">
            With Auth handled by Amazon Cognito, front end in React, Tailwind,
            ShadcnUI and backend in Go and Postgress. Frontend deployed in Aws
            Amplify and backend in Railway.
          </p>

          <p className="text-base font-medium pt-4   ">
            You can test the app using the following credentials:
          </p>
          <p className="text-base font-medium pt-2  ">Username: Visitor</p>
          <p className="text-md font-medium pt-2">Password: Visitor123</p>

          <div className="flex justify-center items-center gap-2 py-4">
            <GoToolTip />
            <ReactToolTip />
            <ViteToolTip />
            <PostgressToolTip />
            <AwsCognitoAmplifyToolTip />
          </div>
          <Link
            to="https://production.d3ozduy4s4mqlc.amplifyapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="mt-4 w-2/3 border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white"
              variant="outline"
            >
              View Demo
            </Button>
          </Link>
          <Link
            to="https://github.com/Desgue/Tasker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="mt-4 w-2/3 border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white"
              variant="outline"
            >
              View Repository
            </Button>
          </Link>
        </div>

        <div className=" order-1 lg:order-2 lg:col-span-8 group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg pt-4">
          <Link to="/projects/shooter">
            <img
              loading="lazy"
              className="h-full lg:h-[90%] lg:pl-12 w-full lg:w-[90%] object-cover"
              src={shooter}
              alt="Tasker Landing Page"
            />
          </Link>
        </div>

        <div className="order-2 lg:order-1 lg:col-span-4 min-h-[360px] flex flex-col item-center text-center pt-2 pb-4 ">
          <h1 className="text-[#6E07F3] font-extrabold text-2xl">
            {" "}
            Wave Shooter{" "}
          </h1>
          <p className="text-md font-bold pt-2 text-pretty">
            A wave shooter style game in 2D
          </p>

          <p className="text-base font-medium pt-8 text-pretty ">
            This project is still under development and its still my second
            attempt in 2d game development in Python, I can say it have been a
            challange and a thrill to delve into the world of vector math and
            OOP.
          </p>
          {/* <p className="text-base font-medium pt-2 text-pretty">Made with Python and Pygame-Ce.</p> */}
          <div className="flex justify-center items-center gap-2 py-4">
            <PythonPygameTooltip />
          </div>
          <Link
            to="https://github.com/Desgue/wave-shooter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="mt-4 w-2/3 border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white"
              variant="outline"
            >
              View Repository
            </Button>
          </Link>
        </div>

        <div className="order-4 lg:col-span-8 group relative items-center justify-center overflow-hidden cursor-pointer  py-4">
          <Link to="/projects/tasker-cli">
            <img
              loading="lazy"
              className="h-full w-full object-cover"
              src={taskercli}
              alt="Tasker Landing Page"
            />
          </Link>
        </div>
        <div className="order-5 lg:col-span-4 min-h-[360px] flex flex-col item-center text-center pt-2 ">
          <h1 className="text-md font-bold">
            <span className="text-[#6E07F3] font-extrabold text-2xl">
              Tasker CLI
            </span>
            <br /> Project Management Terminal User Interface (TUI)
          </h1>
          <p className="text-base font-medium pt-2">
            A project management app developed for the terminal users, with a focus on productivity for developers acostumed with working on the terminal.
          </p>
          <p className="text-base font-medium pt-2">
           Developed in Golang with the help of BubbleTea for stilying and manage TUI state and Sqlite for local persistance, Tasker-Cli is a perfect companion for terminal nerds to keep tabs on
           personal projects and tasks without the distraction of the web.
          </p>

          <div className="flex justify-center items-center gap-2 py-4">
            <GoToolTip />

          </div>

          <Link
            to="https://github.com/Desgue/Tasker-Cli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="mt-4 w-2/3 border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white"
              variant="outline"
            >
              View Repository
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;
