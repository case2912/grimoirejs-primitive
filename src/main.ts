import gr from "grimoirejs";
import MaterialFactory from "grimoirejs-fundamental/ref/Material/Materialfactory";
import PointCloudSort from "raw-loader!./PointCloud.sort";
import defaultPrimitives from "./defaultPrimitives"
export default () => {
  gr.register(async () => {
    defaultPrimitives.register();
    MaterialFactory.addSORTMaterial("point-cloud", PointCloudSort);
    gr.registerNode("point-cloud",[],{
      material:"new(point-cloud)",
      geometry:"point"
    },"mesh");
  });
};
