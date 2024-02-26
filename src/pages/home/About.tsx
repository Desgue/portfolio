import { BentoGrid, BentoGridItem } from "@/components/bento-gird"
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";

const Contacts = () => {
  return (
    <>

<div className="h-full w-full bg-[#6E07F3] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-100 text-center font-sans font-bold pt-8">
          Who am I?
        </h1>
        <p></p>
        <p className="text-neutral-50 font-bold outline-2  my-2 text-base text-center">
          I am a self taught software developer, based in Portugal. First got in touch with programming late 2018 when I was studying Economics at the University of Aveiro.
          Since Covid hit I started to focus on studying and discovered my passion for software development. I have been learning and working on projects ever since.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>

    
    </>
  )
}

export default Contacts


/* const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
); */
const About = () => (
  <div className="w-full h-full min-h-[6rem] rounded-lg font-medium text-md text-pretty ">
      <p>First started programming with Python, then moved to JavaScript and now I am learning and working with Go. </p>
      <p>I am also learning about the cloud and how to deploy and maintain applications.</p>
  </div>
);

const PastExperience = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg font-medium text-md text-pretty  ">
    <ul className="flex flex-col gap-3">
      <li>Remote work for a consulting agency in Brasil </li>
      <li>Developed backend APIs in Go</li>
      <li>Developed the UI in NextJs with the help of Tailwind and ShadcnUI</li>
      <li>Integrated Aws Cognito, S3 and DynamoDB</li>
    </ul>
  </div>
);

const Expect = () => (
  <div className="flex flex-col w-full h-full min-h-[6rem] rounded-lg font-medium text-md text-pretty ">
    <p>In my free time I am exploring new concepts and technologies and I am always looking for new projects to work on. </p>
    <p>
      I find that I learn best when I am working on a project that I am passionate about.
    </p>
    <p>
      The process of learning and creating are a very rewarding experience and I am not afraid of tackling new challenges.
    </p>
    <p>I'm always pushing myself to the limit and when I commit to something I give my 100%.  </p>


  </div>
);

const items = [
  {
    title: "My Past Experience",
    description: "What I have done so far.",
    header: <PastExperience />,
    className: "md:col-span-2 ",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  { 
    title: "About Me ",
    description: "A little about who I am and my journey.",
    header: <About />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "What to Expect",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Expect />,
    className: "md:col-span-3",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },

];