import { mySocials } from "../constants";

const HireMe = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}assets/CherilynJan2026.pdf`;
    link.download = "CherilynJan2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="c-space section-spacing" id="hireme">
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
        <img
          src={`${import.meta.env.BASE_URL}assets/corpocat.jpg`}
          alt="corpocat"
          className="w-full lg:w-1/2 rounded-lg"
        />
        <div className="w-full lg:w-1/2 flex flex-col justify-evenly">
          <div>
            <h2 className="text-heading">Why Hire Me?</h2>
            <ul className="mt-10 flex flex-col gap-5">
              <li className="text-2xl">✅ Quick Learner</li>
              <li className="text-2xl">✅ Collaborative</li>
              <li className="text-2xl">✅ Problem Solver</li>
              <li className="text-2xl">✅ Ambitious</li>
              <li className="text-2xl">✅ Creative</li>
            </ul>
          </div>
          <button
            onClick={handleDownloadCV}
            className="btn mt-10 bg-gradient-to-r from-royal to-lavender hover:from-lavender hover:to-royal transition-all duration-300 hover:scale-105"
          >
            Download My CV
          </button>
          <div className="flex gap-5">
            {mySocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="size-10 hover-animation"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
