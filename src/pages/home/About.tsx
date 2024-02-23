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
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-100 text-center font-sans font-bold mt-8">
          Who am I?
        </h1>
        <p></p>
        <p className="text-neutral-100 font-semibold outline-8 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
        Since the begging of my journey as a Software Developer a Year ago, I've done remote work for a consulting
        agency, created several websites and worked on a few personal projects. 
        I am quietly confident, naturally curious, and perpetually working on improving my chops solving problems.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-24">
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg font-medium text-md text-pretty ">
    I'm a software developer based in Brazil. I have a passion for software development and I'm always looking for new challenges. 
    I'm a quick learner and I'm always looking for new technologies to learn.
  </div>
);

const PastExperience = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg font-medium text-md text-pretty  ">
    <ul className="flex flex-col gap-3">
      <li>Remote work for a consulting agency in Brasil </li>
      <li>Developed backend APIs in Go</li>
      <li>Developed the UI in NextJs with the help of Tailwind and ShadcnUI</li>
      <li>Integrated Aws Cognito, S3 and DynamoDB</li>
      <li>Used Docker to run Integration tests and for develop envoirement </li>
    </ul>
  </div>
);

const Expect = () => (
  <div className="flex flex-col w-full h-full min-h-[6rem] rounded-lg font-medium text-md text-pretty ">
    <p>In my free time I am exploring new concepts and technologies and I am always looking for new projects to work on. </p>
    <p>
      I find that I learn best when I am working on a project that I am passionate about.
      The process of learning and creating are a very rewarding experience and I am always looking for new challenges.
    </p>
    <p>I'm lways pushing myself to the limit and when I commit to something I give my 101%.  </p>
  

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