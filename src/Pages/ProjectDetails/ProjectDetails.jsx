import { useParams } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar'
import projectsData from '../../../public/projectDetails.json'

export const ProjectDetails = () => {
  const { id } = useParams()

  const projectDetails = projectsData.find(
    (project) => project.id === parseInt(id)
  )

  if (!projectDetails) {
    return (
      <main className='min-h-screen flex items-center justify-center text-white'>
        <h2 className='text-3xl font-semibold'>Project Not Found</h2>
      </main>
    )
  }

  const {
    projectName,
    image,
    mediaType = 'image',
    description,
    liveProjectLink,
    githubRepositoryLink,
    technologyStack = {},
    challengesFaced = [],
    potentialImprovementsAndFuturePlans = []
  } = projectDetails

  const {
    frontend = [],
    backend = [],
    toolsAndLibraries = []
  } = technologyStack

  const isVideo = mediaType === 'video' || image?.toLowerCase().includes('.mp4')

  const liveClient =
    typeof liveProjectLink === 'string'
      ? liveProjectLink
      : liveProjectLink?.client

  const githubClient =
    typeof githubRepositoryLink === 'string'
      ? githubRepositoryLink
      : githubRepositoryLink?.client

  const githubServer =
    typeof githubRepositoryLink === 'object'
      ? githubRepositoryLink?.server
      : null

  return (
    <>
      {/* Background */}
      <div className='fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]' />

      <main className='relative flex flex-col items-center min-h-screen'>
        <Navbar />

        <section className='my-20 w-5/6 lg:w-2/3 text-white'>
          <h2 className='my-6 lg:my-10 text-3xl lg:text-5xl'>
            Project Details
          </h2>

          {/* Project Media */}
          <div className='w-full overflow-hidden rounded-2xl bg-gray-900'>
            {isVideo ? (
              <video
                className='w-full max-h-[550px] object-contain rounded-2xl'
                controls
                playsInline
                preload='metadata'>
                <source
                  src={image}
                  type='video/mp4'
                />
                Your browser does not support HTML video.
              </video>
            ) : (
              <img
                className='w-full max-h-[550px] object-contain rounded-2xl'
                src={image}
                alt={projectName}
                loading='lazy'
              />
            )}
          </div>

          {/* Project Information */}
          <div className='mt-12'>
            <h3 className='text-3xl lg:text-4xl font-semibold'>
              {projectName}
            </h3>

            <p className='mt-3 text-gray-400 leading-relaxed'>{description}</p>

            {/* Project Links */}
            <div className='flex flex-wrap gap-6 mt-6'>
              {liveClient && (
                <a
                  href={liveClient}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline underline-offset-4 hover:text-[#A892FF]'>
                  Visit Live Website
                </a>
              )}

              {githubClient && (
                <a
                  href={githubClient}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline underline-offset-4 hover:text-[#A892FF]'>
                  Frontend Repository
                </a>
              )}

              {githubServer && (
                <a
                  href={githubServer}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline underline-offset-4 hover:text-[#A892FF]'>
                  Backend Repository
                </a>
              )}
            </div>

            {/* Technology Stack */}
            <h4 className='text-3xl font-semibold mt-10'>Technology Stack</h4>

            {[
              { title: 'Frontend', items: frontend },
              { title: 'Backend', items: backend },
              { title: 'Tools and Libraries', items: toolsAndLibraries }
            ].map(
              ({ title, items }) =>
                items.length > 0 && (
                  <div
                    className='mt-6'
                    key={title}>
                    <span className='font-medium'>{title}</span>

                    <div className='flex flex-wrap gap-3 mt-2'>
                      {items.map((item) => (
                        <span
                          key={item}
                          className='bg-[#A892FF] px-3 py-1 rounded-2xl text-sm text-black'>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
            )}

            {/* Challenges */}
            {challengesFaced.length > 0 && (
              <div className='mt-10'>
                <hr className='my-6 border-gray-700' />

                <h4 className='text-2xl font-medium'>
                  Challenges During Development
                </h4>

                <ul className='text-gray-400 list-disc list-inside space-y-2 mt-4'>
                  {challengesFaced.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Plans */}
            {potentialImprovementsAndFuturePlans.length > 0 && (
              <div className='mt-8'>
                <hr className='my-6 border-gray-700' />

                <h4 className='text-2xl font-medium'>
                  Improvement Plans for the Future
                </h4>

                <ul className='text-gray-400 list-disc list-inside space-y-2 mt-4'>
                  {potentialImprovementsAndFuturePlans.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
