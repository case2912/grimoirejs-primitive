export default class pointCloudData {
  public static Quad(x: number, y: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        array.push(i / (x - 1) - 0.5)
        array.push(j / (y - 1) - 0.5)
        array.push(0)
      }
    }
    return array;
  }
  public static Circle(n: number): number[] {
    const array: number[] = [];
    const normalize = (x: number, y: number) => Math.max(Math.abs(x), Math.abs(y))
    const distance = (x: number, y: number): number => Math.pow(x * x + y * y, 0.5)
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const d = distance((i / (n - 1) - 0.5), (j / (n - 1) - 0.5))
        const r = normalize((i / (n - 1) - 0.5), (j / (n - 1) - 0.5))
        array.push(r * (i / (n - 1) - 0.5) / d)
        array.push(r * (j / (n - 1) - 0.5) / d)
        array.push(0)
      }
    }
    return array;
  }
  public static FrameCircle(n: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      array.push(0.5 * Math.cos(2 * Math.PI * i / (n - 1)))
      array.push(0.5 * Math.sin(2 * Math.PI * i / (n - 1)))
      array.push(0)
    }
    return array;
  }
  public static Cylinder(n: number, y: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < y; j++) {
        array.push(0.5 * Math.cos(2 * Math.PI * i / (n - 1)))
        array.push(j / (y - 1) - 0.5)
        array.push(0.5 * Math.sin(2 * Math.PI * i / (n - 1)))
      }
    }
    return array;
  }
  public static FrameCube(n: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      array.push(-0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(-0.5)
      array.push(0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(-0.5)
      array.push(-0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(0.5)
      array.push(0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(0.5)

      array.push(i / (n - 1) - 0.5)
      array.push(-0.5)
      array.push(-0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(0.5)
      array.push(-0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(-0.5)
      array.push(0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(0.5)
      array.push(0.5)

      array.push(-0.5)
      array.push(-0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(0.5)
      array.push(-0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(-0.5)
      array.push(0.5)
      array.push(i / (n - 1) - 0.5)
      array.push(0.5)
      array.push(0.5)
      array.push(i / (n - 1) - 0.5)
    }
    return array;
  }
  public static Rectangle(x: number, y: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        if (i === 0 || i === (x - 1) || j === 0 || j === (y - 1)) {
          array.push(i / (x - 1) - 0.5)
          array.push(j / (y - 1) - 0.5)
          array.push(0)
        }
      }
    }
    return array;
  }
  public static XAxis(n: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      array.push(i / (n - 1) - 0.5)
      array.push(0)
      array.push(0)
    }
    return array;
  }
  public static YAxis(n: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      array.push(0)
      array.push(i / (n - 1) - 0.5)
      array.push(0)
    }
    return array;
  }

  public static ZAxis(n: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      array.push(0)
      array.push(0)
      array.push(i / (n - 1) - 0.5)
    }
    return array;
  }
  public static Sphere(n: number): number[] {
    const distance = (x: number, y: number, z: number): number => 2 * Math.pow(x * x + y * y + z * z, 0.5)
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const d = distance(i / (n - 1) - 0.5, j / (n - 1) - 0.5, -0.5)
        array.push((i / (n - 1) - 0.5) / d)
        array.push((j / (n - 1) - 0.5) / d)
        array.push(-0.5 / d)
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const d = distance(i / (n - 1) - 0.5, j / (n - 1) - 0.5, -0.5)
        array.push((i / (n - 1) - 0.5) / d)
        array.push((j / (n - 1) - 0.5) / d)
        array.push(0.5 / d)
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const d = distance(i / (n - 1) - 0.5, j / (n - 1) - 0.5, -0.5)
        array.push((i / (n - 1) - 0.5) / d)
        array.push(-0.5 / d)
        array.push((j / (n - 1) - 0.5) / d)
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const d = distance(i / (n - 1) - 0.5, j / (n - 1) - 0.5, -0.5)
        array.push((i / (n - 1) - 0.5) / d)
        array.push(0.5 / d)
        array.push((j / (n - 1) - 0.5) / d)
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const d = distance(i / (n - 1) - 0.5, j / (n - 1) - 0.5, -0.5)
        array.push(-0.5 / d)
        array.push((i / (n - 1) - 0.5) / d)
        array.push((j / (n - 1) - 0.5) / d)
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const d = distance(i / (n - 1) - 0.5, j / (n - 1) - 0.5, -0.5)
        array.push(0.5 / d)
        array.push((i / (n - 1) - 0.5) / d)
        array.push((j / (n - 1) - 0.5) / d)
      }
    }
    return array;
  }
  public static Cube(n: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        array.push((i / (n - 1) - 0.5))
        array.push((j / (n - 1) - 0.5))
        array.push(-0.5)
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        array.push((i / (n - 1) - 0.5))
        array.push((j / (n - 1) - 0.5))
        array.push(0.5)
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        array.push((i / (n - 1) - 0.5))
        array.push(-0.5)
        array.push((j / (n - 1) - 0.5))
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        array.push((i / (n - 1) - 0.5))
        array.push(0.5)
        array.push((j / (n - 1) - 0.5))
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        array.push(-0.5)
        array.push((i / (n - 1) - 0.5))
        array.push((j / (n - 1) - 0.5))
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        array.push(0.5)
        array.push((i / (n - 1) - 0.5))
        array.push((j / (n - 1) - 0.5))
      }
    }
    return array;
  }
}
