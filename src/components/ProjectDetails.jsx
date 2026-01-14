import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm">
      <motion.div
        className={`relative border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 ${
          isMobile ? "w-full max-w-full" : "max-w-2xl"
        }`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className={`absolute p-2 rounded-sm bg-midnight hover:bg-gray-500 ${
            isMobile ? "top-3 right-3" : "top-5 right-5"
          }`}
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>
        
        <img 
          src={image} 
          alt={title} 
          className="w-full rounded-t-2xl max-h-96 object-cover" 
        />
        
        <div
          className={`p-4 overflow-y-auto ${
            isMobile ? "max-h-[60vh]" : "max-h-[70vh]"
          } [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
        >
          <h5 className={`mb-2 font-bold text-white ${
            isMobile ? "text-xl" : "text-2xl"
          }`}>{title}</h5>
          
          <p className={`mb-3 font-normal text-neutral-400 ${
            isMobile ? "text-sm" : "text-base"
          }`}>{description}</p>
          
          {subDescription.map((subDesc, index) => (
            <p key={index} className={`mb-3 font-normal text-neutral-400 ${
              isMobile ? "text-sm" : "text-base"
            }`}>{subDesc}</p>
          ))}
          
          <div className={`flex items-center justify-between mt-4 py-10 ${
            isMobile ? "flex-col gap-4" : "flex-row"
          }`}>
            <div className={`flex gap-2 ${isMobile ? "justify-center" : ""}`}>
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className={`rounded-lg hover-animation ${
                    isMobile ? "size-8" : "size-10"
                  }`}
                />
              ))}
            </div>
            
            {href && (
              <a
                className={`inline-flex items-center gap-1 font-medium cursor-pointer hover-animation ${
                  isMobile ? "text-sm" : "text-base"
                }`}
                href={href}
                target="_blank"
              >
                View Project
                <img src="assets/arrow-up.svg" className="size-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;