import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import islandScene from "../assets/3d/newisland.glb";

const NewIsland = (props) => {
  const { scene, animations } = useGLTF(islandScene);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().play();
      return () => firstAction.stop();
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
};

export default NewIsland;
