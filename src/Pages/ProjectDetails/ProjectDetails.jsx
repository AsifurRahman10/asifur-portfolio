import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import projectsData from "../../../public/projectDetails.json";

export const ProjectDetails = () => {
  const { id } = useParams();
  const projectDetails = projectsData.find(
    (project) => project.id === parseInt(id)
  );
  const {
    projectName,
    image,
    description,
    liveProjectLink: { client },
    githubRepositoryLink,
    technologyStack: { frontend, backend, toolsAndLibraries },
    challengesFaced,
    potentialImprovementsAndFuturePlans,
  } = projectDetails;
  console.log(projectDetails);
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* The fixed background */}
      </div>

      <main className="relative flex flex-col items-center min-h-screen">
        {/* Ensure the content is on top of the background */}
        <Navbar />

        <section className="my-20 w-5/6 lg:w-2/3 text-white">
          <h2 className="my-6 lg:my-10 text-3xl lg:text-5xl">
            Project Details
          </h2>
          {/* image */}
          <div>
            <img src={image} alt={projectName} />
          </div>
          {/* text */}
          <div className="mt-10">
            <h3 className="text-3xl font-medium">{projectName}</h3>
            <p className="mt-2 text-gray-400">{description}</p>
            <div className="flex gap-6">
              <a
                href={client}
                target="_blank"
                rel="noopener noreferrer"
                className="underline block mt-4 underline-offset-2 hover:text-[#A892FF]"
              >
                Visit Live Website
              </a>
              <a
                href={githubRepositoryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline block mt-4 underline-offset-2 hover:text-[#A892FF]"
              >
                Visit Github Repository
              </a>
            </div>
            <h4 className="text-2xl font-semibold mt-4">Technology</h4>
            <p>
              <span className="font-medium">FrontEnd</span> <br />
              <span className="flex flex-wrap gap-2 text-black mt-2">
                {frontend.map((item) => (
                  <span className="bg-[#A892FF] px-2 rounded-2xl">{item}</span>
                ))}
              </span>
            </p>
            <p className="mt-4">
              <span className="font-medium">Backend</span> <br />
              <span className="flex flex-wrap gap-2 text-black mt-2">
                {backend.map((item) => (
                  <span className="bg-[#A892FF] px-2 rounded-2xl">{item}</span>
                ))}
              </span>
            </p>
            <p className="mt-4">
              <span className="font-medium">Tools and library</span> <br />
              <span className="flex flex-wrap gap-2 text-black mt-2">
                {toolsAndLibraries.map((item) => (
                  <span className="bg-[#A892FF] px-2 rounded-2xl">{item}</span>
                ))}
              </span>
            </p>

            <div className="mt-6">
              <>
                <hr className="my-4" />
              </>
              <>
                <p className="text-2xl">Challenges while development</p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mt-2">
                  {challengesFaced.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </>
              <>
                <hr className="my-4" />
              </>
              <>
                <div>
                  <p className="text-2xl">Improvement plan for future</p>
                  <ul className="text-gray-400 list-disc list-inside space-y-2 mt-2">
                    {potentialImprovementsAndFuturePlans.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
