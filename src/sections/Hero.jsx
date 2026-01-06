import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { D20 } from "../components/D20";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 5] }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 10, 5]} intensity={8} />
            <Float
              position={isMobile ? [0.1, -0.6, 0] : [1.5, -0.1, 0]}
              speed={3} // Animation speed (default is 1)
              rotationIntensity={5} // XYZ rotation intensity
              floatIntensity={1} // Up/down float intensity
              floatingRange={[0, 0.5]} // Range of y-axis floating
            >
              <D20 scale={isMobile ? 0.008 : 0.01}/>
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
