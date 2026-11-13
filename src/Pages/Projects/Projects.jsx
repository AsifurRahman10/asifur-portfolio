import { ProjectCard } from '../../Components/ProjectCard'
import project1 from '../../assets/projects/p1.png'
import project2 from '../../assets/projects/p2.png'
import project3 from '../../assets/projects/p3.png'
import project4 from '../../assets/projects/p4.png'
import hmsProject from '../../assets/projects/hmsProject.png'

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Life Hospital',
      image: hmsProject,
      description:
        'Life Hospital is a comprehensive healthcare management platform that digitizes hospital operations and connects patients, doctors, and administrators. It features role-based access control, doctor scheduling, appointment booking, Stripe payment integration, automated invoicing, digital prescription management, and email notifications.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Prisma',
        'Stripe',
        'Better Auth'
      ]
    },
    {
      id: 2,
      title: 'NextGen Hunt',
      image: project1,
      description:
        'NextGen Hunt is a platform where users can discover and share the latest technology, including web apps, AI tools, software, games, and mobile apps. It features role-based access and functionalities such as voting, reporting, product reviews, dashboard management, and coupon system integration.',
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Firebase',
        'Stripe'
      ]
    },
    {
      id: 3,
      title: 'ArtifactArcade',
      image: project2,
      description:
        'ArtifactArcade is a web application dedicated to tracking historical artifacts. Users can explore, contribute, and engage with a collection of artifacts, fostering community participation in preserving historical knowledge.',
      technologies: ['React', 'Firebase', 'Express.js']
    },
    {
      id: 4,
      title: 'VisaEase',
      image: project3,
      description:
        'VisaEase is a Visa Navigator Portal designed to simplify visa management. Travelers can check visa requirements, apply for visas online, and track applications effortlessly.',
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'Firebase',
        'Tailwind CSS'
      ]
    },
    {
      id: 5,
      title: 'Lingo-Bingo',
      image: project4,
      description:
        'Lingo-Bingo is an interactive e-learning platform designed to make learning the German language fun and accessible. With a rich vocabulary bank, expert support, and engaging lessons, users can master German at their own pace.',
      technologies: ['React', 'Firebase', 'Tailwind CSS']
    }
  ]

  return (
    <div
      className='w-full min-h-screen flex flex-col justify-center items-center'
      id='projects'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl text-white'>Projects</h2>

      <div className='space-y-14 mt-10 mx-auto w-5/6 lg:w-2/3'>
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}
