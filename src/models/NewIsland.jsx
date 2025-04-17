import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import islandScene from "../assets/3d/newisland.glb";

const NewIsland = (props) => {
  const gltf = useGLTF(islandScene);
  const { actions, mixer } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Play the first animation
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().play();

      return () => {
        firstAction.stop();
      };
    }
  }, [actions]);

  return <primitive object={gltf.scene} {...props} />;
};

export default NewIsland;
