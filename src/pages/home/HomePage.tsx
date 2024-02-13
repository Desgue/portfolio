import Hero from './Hero'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
// The component is divided in Hero section, About me section, Projects section, Contact section and Footer section.
// Each section can expand into a more detailed view when the user clicks on the section title.
// The Hero section is the first section that the user sees when the page is loaded. Its a simple view, it present my name, my role and a brief description of myself.
// The About me section is a more detailed view of myself. It presents my skills, my work experience and my education.
// The Projects section is a view of my projects. It presents a list of my projects and a brief description of each project.
// The Contact section is a view of my contact information. It presents my email, my phone number and my social media.
// The Footer section is a simple view, it presents links to my social media and my email.

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default HomePage