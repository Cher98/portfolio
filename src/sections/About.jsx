import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <h2 className="text-2xl py-5">
        Heya! I'm Cherilyn Faye. I'm a Full Stack Developer with over 5 years of
        experience who loves to turn challenges into opportunities. I've worked
        across various tech stacks, delivering high-quality web, mobile, and
        desktop applications.
      </h2>
      <h2 className="text-2xl py-2">
        My mission for 2026 is to dive into Game Dev and creative projects such as 2D, 3D animation!
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[16rem] mt-12">
        <div className="grid-default-color grid-1">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext mt-5">
              I'm well-versed in a variety of languages, frameworks, and tools,
              allowing me to create applications that are not only robust but
              also scalable.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        <div className="grid-black-color grid-2">
          <div className="z-10 w-[60%]">
            <p className="subtext text-xl! mb-5">
              I'm based in <br />
              <span className="text-white">Kuala Lumpur, Malaysia</span>.
            </p>
            <p className="subtext">Open to remote work worldwide!</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        <div className="grid-special-color grid-3">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
