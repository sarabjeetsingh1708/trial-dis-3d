import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useLocation } from "react-router-dom";

import japanesemusic from "../assets/japanesemusic.mp3";
import { Loader, HomeInfo } from "../components";
import { soundoff, soundon } from "../assets/icons";
import NewIsland from "../models/NewIsland"; // ✅ import corrected

const Home = () => {
  const audioRef = useRef(new Audio(japanesemusic));
  const location = useLocation();

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    isPlayingMusic ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlayingMusic]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    };
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentStage((prev) => (prev < 4 ? prev + 1 : 1));
        setVisible(true);
      }, 2000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen relative">
      {/* Canvas */}
      <Canvas className="w-full h-screen" style={{ backgroundColor: "darkblue" }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <hemisphereLight skyColor="#ffffff" groundColor="#000000" intensity={1} />
          <OrbitControls enableZoom enablePan enableRotate />
          <NewIsland position={[0, 0, 0]} />
        </Suspense>
      </Canvas>

      {/* Sound Button */}
      <div className="absolute bottom-5 left-5 z-[100] p-2 bg-white/10 backdrop-blur-sm rounded-full">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-8 h-8 cursor-pointer object-contain"
        />
      </div>

      {/* Info Overlay */}
      {visible && (
        <div className="absolute top-28 w-full flex justify-center items-center z-[100] transition-all duration-1000 ease-in-out">
          <HomeInfo currentStage={currentStage} />
        </div>
      )}
    </section>
  );
};

export default Home;
