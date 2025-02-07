import { Link } from "react-router-dom";
import { DisplayOnScroll } from "./DisplayOnScroll";

export const ProjectCard = ({ project, id }) => {
  const { title, description, technologies, image } = project;

  return (
    <DisplayOnScroll>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        {/* image */}
        <div className="">
          <img
            className="cursor-pointer lg:w-[350px] rounded-2xl transition-all duration-300 hover:scale-105 h-full lg:h-[200px]"
            src={image}
            alt={title}
          />
        </div>

        {/* info */}
        <div className="text-white flex-1 space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-400">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((technology, idx) => (
              <span
                className="px-2 rounded-lg bg-[#A892FF] text-black"
                key={idx}
              >
                {technology}
              </span>
            ))}
          </div>
          <Link to={`/projectDetails/${id}`}>
            <button className="bg-gray-400 py-2 px-6 rounded-full mt-2 hover:bg-[#A892FF] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </DisplayOnScroll>
  );
};
