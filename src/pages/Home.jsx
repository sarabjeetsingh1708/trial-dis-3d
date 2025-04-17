import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useLocation } from "react-router-dom";  // Import useLocation for route changes

import japanesemusic from "../assets/japanesemusic.mp3";
import { Loader, HomeInfo } from "../components"; // ✅ Import HomeInfo
import { soundoff, soundon } from "../assets/icons";
import { NewIsland } from "../models";


const Home = () => {
  const audioRef = useRef(new Audio(japanesemusic));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [currentStage, setCurrentStage] = useState(1); // Track stages for HomeInfo
  const [visible, setVisible] = useState(true); // Controls visibility for each stage

  const location = useLocation(); // Access the current route
  

  useEffect(() => {
    if (isPlayingMusic) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlayingMusic]);

  useEffect(() => {
    // Stop music when user navigates away from Home
    return () => {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    };
  }, [location]);

  // Stage transition with a 3-second gap before each stage change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true); // Show HomeInfo after a 2-second delay
    }, 2000);
    return () => clearTimeout(timeout);
  }, [currentStage]);

  // Cycle stages every 8 seconds (3 seconds display + 5 seconds for transition)
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Hide before transitioning
      setTimeout(() => {
        setCurrentStage((prev) => (prev < 4 ? prev + 1 : 1)); // Move to next stage
      }, 2000); // Wait for 2 seconds before changing stage
    }, 8000); // Change stage every 8 seconds (3 seconds display + 5 seconds for transition)
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen relative">
      {/* 3D Canvas */}
      <Canvas className="w-full h-screen" style={{ backgroundColor: "darkblue", zIndex: 0 }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <hemisphereLight skyColor={"#ffffff"} groundColor={"#000000"} intensity={1} />

          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          <NewIsland position={[0, 0, 0]} />
        </Suspense>
      </Canvas>

      {/* Sound Toggle Button */}
      <div className="absolute bottom-5 left-5 z-[100] p-2 bg-white/10 backdrop-blur-sm rounded-full">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-8 h-8 cursor-pointer object-contain"
        />
      </div>

      {/* HomeInfo Component with slight downward shift and delay in appearance */}
      {visible && (
        <div className="absolute top-28 w-full flex justify-center items-center z-[100] transition-all duration-1000 ease-in-out opacity-100">
          <HomeInfo currentStage={currentStage} />
        </div>
      )}
    </section>
  );
};

export default Home;
