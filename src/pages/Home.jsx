import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls, useProgress } from "@react-three/drei";
import { useLocation } from "react-router-dom";

import japanesemusic from "../assets/japanesemusic.mp3";
import { HomeInfo } from "../components";
import { soundoff, soundon } from "../assets/icons";
import NewIsland from "../models/NewIsland";

// Loader component that will be rendered as a regular HTML overlay
const LoaderOverlay = ({ onLoaded }) => {
  const { progress, loaded, total } = useProgress();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animationId = requestAnimationFrame(() => {
      setRotation((prev) => (prev + 1) % 360);
    });
    return () => cancelAnimationFrame(animationId);
  }, [rotation]);

  // Check if loading is complete
  useEffect(() => {
    if (loaded === total && total > 0) {
      onLoaded();
    }
  }, [loaded, total, onLoaded]);

  // Calculate the circumference of the circle
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the stroke-dashoffset based on progress
  const dashOffset = circumference * (1 - progress / 100);

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-blue-900/80 backdrop-blur-sm">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#1a365d"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform={`rotate(-90 60 60)`}
          />
          <circle
            cx="60"
            cy="10"
            r="4"
            fill="#ffffff"
            transform={`rotate(${rotation} 60 60)`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xl font-bold">{Math.round(progress)}%</span>
        </div>
      </div>
      <p className="text-white mt-4 font-medium">Loading Island...</p>
    </div>
  );
};

const Home = () => {
  const audioRef = useRef(new Audio(japanesemusic));
  const location = useLocation();

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <section className="w-full h-screen relative">
      {/* Canvas */}
      <Canvas className="w-full h-screen" style={{ backgroundColor: "darkblue" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <hemisphereLight skyColor="#ffffff" groundColor="#000000" intensity={1} />
          <OrbitControls enableZoom enablePan enableRotate />
          <NewIsland position={[0, 0, 0]} />
        </Suspense>
      </Canvas>

      {/* Loading Overlay - appears on top of the Canvas */}
      {isLoading && <LoaderOverlay onLoaded={handleLoaded} />}

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