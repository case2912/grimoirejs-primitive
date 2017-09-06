import Geometry from "grimoirejs-fundamental/ref/Geometry/Geometry";
import GeometryFactory from "grimoirejs-fundamental/ref/Geometry/GeometryFactory";
import pointCloudData from "./pointCloudData";
export default class defaultPrimitives {

  public static register(): void {
    this._registerPointCloud("point", [0, 0, 0]);
    this._registerPointCloud("point-quad", pointCloudData.Quad(20, 20));
    this._registerPointCloud("point-rectangle", pointCloudData.Rectangle(20, 20));
    this._registerPointCloud("point-x-axis", pointCloudData.XAxis(20));
    this._registerPointCloud("point-y-axis", pointCloudData.YAxis(20));
    this._registerPointCloud("point-z-axis", pointCloudData.ZAxis(20));
    this._registerPointCloud("point-sphere", pointCloudData.Sphere(20));
    this._registerPointCloud("point-cube", pointCloudData.Cube(20));
    this._registerPointCloud("point-frame-cube", pointCloudData.FrameCube(20));
    this._registerPointCloud("point-frame-circle", pointCloudData.FrameCircle(50));
    this._registerPointCloud("point-circle", pointCloudData.Circle(10));
    this._registerPointCloud("point-cylinder", pointCloudData.Cylinder(50,10));
  }
  private static _registerPointCloud(name: string, data: number[]): void {
    GeometryFactory.addType(name, {
    }, (gl, attrs) => {
      const indices: number[] = [];
      const geometry = new Geometry(gl);
      geometry.addAttributes(data, {
        POSITION: {
          size: 3
        }
      })
      geometry.addAttributes(data, {
        NORMAL: {
          size: 3
        }
      })
      for (let i = 0; i < data.length / 3; i++) {
        indices[i] = i;
      }
      geometry.addIndex("default", indices, WebGLRenderingContext.POINTS);
      return geometry;
    });
  }
}
