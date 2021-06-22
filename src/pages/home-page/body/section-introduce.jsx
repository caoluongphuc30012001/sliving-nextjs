import React, { useEffect } from 'react';
import DataHomepage from "@query/home-page";
import CardSection from "@components/card/card-content/card-section.jsx";
//import imgProd from "@images/home-page/body-2/product-v2.svg";
import { useTranslation } from 'react-i18next';
import { ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Color3 } from "@babylonjs/core";
import SceneComponent from "@components/SceneComponent";
import "@babylonjs/loaders";
const isBrowser = typeof window !== "undefined";
const onSceneReady = (scene) => {
  //var camera = new FreeCamera("camera1", new Vector3(-25, 25, -25), scene);
  // var camera = new ArcRotateCamera("camera", Tools.ToRadians(90), Tools.ToRadians(65), 12, new Vector3(0, 25, -40), scene);
  var camera = new ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 4, 3, new Vector3(0, 60, -40), scene);
  camera.setTarget(Vector3.Zero());
  const canvas = scene.getEngine().getRenderingCanvas();
  scene.clearColor = Color3.White();
  camera.wheelPrecision = 50;
  camera.attachControl(canvas, true);
  var light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
  light.intensity = 0.7;
  if (isBrowser) {
    SceneLoader.ImportMeshAsync("", `${window.location.origin}/Villa-Floorplan-js/`, "Villa.babylon", scene, function () {
      // var dataScene = SceneSerializer.Serialize(scene);
      // dataScene = JSON.stringify(dataScene);
      // console.log("dâta", dataScene);
      // SceneLoader.Append("", "data:" + dataScene, scene, function (newScene) {
      //   console.log("Chargement de la scene avec Append", newScene);
      // });
    });
  }
};
const SectionIntroduce = () => {
  const { t } = useTranslation()
  const data = DataHomepage();
  const dataCard = {
    backgroundColor: '#ffffff',
    color: '#004BA1',
  }
  useEffect(() => {
    if (document.getElementById("my-canvas")) {
      document.getElementById("my-canvas").onwheel = function (event) {
        event.preventDefault();
      };

      document.getElementById("my-canvas").onmousewheel = function (event) {
        event.preventDefault();
      };
    }
  }, [])
  return (
    <>
      {
        dataCard && (
          <CardSection
            title={t(`Product_Application`)}
            subtitle={data.dataSectionIntroduce.edges[0].node.frontmatter.subTitle}
            description={data.dataSectionIntroduce.edges[0].node.frontmatter.description}
            backgroundColor={dataCard.backgroundColor}
            color={dataCard.color} isButton={true} />
        )
      }
      <div className="babylon-villa">
        <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
      </div>
    </>
  );
};
export default SectionIntroduce;
