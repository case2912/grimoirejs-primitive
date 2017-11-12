export default class lineData {
  public static Arc(x: number, y: number, d: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        array.push(j / (y - 1) * 0.5 * Math.cos(d / 360 * 2 * Math.PI * i / (x - 1)))
        array.push(j / (y - 1) * 0.5 * Math.sin(d / 360 * 2 * Math.PI * i / (x - 1)))
        array.push(0)
      }
    }
    return array;
  }
  public static FrameArc(x: number, y: number, d: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        if (i === 0 || i === (x - 1) || j === 0 || j === (y - 1)) {
          array.push(j / (y - 1) * 0.5 * Math.cos(d / 360 * 2 * Math.PI * i / (x - 1)))
          array.push(j / (y - 1) * 0.5 * Math.sin(d / 360 * 2 * Math.PI * i / (x - 1)))
          array.push(0)
        }

      }
    }
    return array;
  }
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
  public static Box(x: number, y: number, z: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        for (let k = 0; k < z; k++) {
          array.push(i / (x - 1) - 0.5)
          array.push(j / (y - 1) - 0.5)
          array.push(k / (z - 1) - 0.5)
        }
      }
    }
    return array;
  }
  public static Triangle(n: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i >= j) {
          array.push(i / (n - 1) - 1 + 0.5 * (1 - j / (n - 1)))
          array.push(Math.pow(3, 0.5) / 2 * (j / (n - 1) - 0.5 + 1 / 6))
          array.push(0)
        }
      }
    }
    return array;
  }
  public static Heart(n: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let x = 4 * (i / (n - 1) - 0.5);
        let y = 4 * (j / (n - 1) - 0.5);
        const f = (x: number, y: number) => Math.pow((x * x + y * y - 1), 3) - x * x * y * y * y
        if (f(x, y) <= 0) {
          array.push(0.5 * x)
          array.push(0.5 * y)
          array.push(0)
        }
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
  public static Torus(x: number, y: number, r: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        array.push(0.5 * (Math.cos(2 * Math.PI * i / (x - 1)) * r * Math.cos(2 * Math.PI * j / (y - 1)) + Math.cos(2 * Math.PI * i / (x - 1))))
        array.push(0.5 * (Math.sin(2 * Math.PI * i / (x - 1)) + Math.sin(2 * Math.PI * i / (x - 1)) * r * Math.cos(2 * Math.PI * j / (y - 1))))
        array.push(0.5 * (r * Math.sin(2 * Math.PI * j / (y - 1))))
      }
    }
    return array;
  }
  public static FrameCircle(n: number): number[] {
    const array: number[] = [];
    const normalize = (x: number, y: number) => Math.max(Math.abs(x), Math.abs(y))
    const distance = (x: number, y: number): number => Math.pow(x * x + y * y, 0.5)
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 || i === (n - 1) || j === 0 || j === (n - 1)) {
          const d = distance((i / (n - 1) - 0.5), (j / (n - 1) - 0.5))
          const r = normalize((i / (n - 1) - 0.5), (j / (n - 1) - 0.5))
          array.push(r * (i / (n - 1) - 0.5) / d)
          array.push(r * (j / (n - 1) - 0.5) / d)
          array.push(0)
        }
      }
    }
    return array;
  }
  public static Cylinder(n: number, y: number): number[] {
    const array: number[] = [];
    const normalize = (x: number, y: number) => Math.max(Math.abs(x), Math.abs(y))
    const distance = (x: number, y: number): number => Math.pow(x * x + y * y, 0.5)
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < y; j++) {
        const d = distance((i / (y - 1) - 0.5), (j / (y - 1) - 0.5))
        const r = normalize((i / (y - 1) - 0.5), (j / (y - 1) - 0.5))
        array.push(r * (i / (y - 1) - 0.5) / d)
        array.push(0.5)
        array.push(r * (j / (y - 1) - 0.5) / d)
        array.push(r * (i / (y - 1) - 0.5) / d)
        array.push(-0.5)
        array.push(r * (j / (y - 1) - 0.5) / d)
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < y; j++) {
        array.push(0.5 * Math.cos(2 * Math.PI * i / (n - 1)))
        array.push(j / (y - 1) - 0.5)
        array.push(0.5 * Math.sin(2 * Math.PI * i / (n - 1)))
      }
    }
    return array;
  }
  public static Cone(n: number, y: number): number[] {
    const array: number[] = [];
    const normalize = (x: number, y: number) => Math.max(Math.abs(x), Math.abs(y))
    const distance = (x: number, y: number): number => Math.pow(x * x + y * y, 0.5)
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < y; j++) {
        const d = distance((i / (y - 1) - 0.5), (j / (y - 1) - 0.5))
        const r = normalize((i / (y - 1) - 0.5), (j / (y - 1) - 0.5))
        array.push(r * (i / (y - 1) - 0.5) / d)
        array.push(-0.5)
        array.push(r * (j / (y - 1) - 0.5) / d)
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < y; j++) {
        array.push((1 - j / (y - 1)) * 0.5 * Math.cos(2 * Math.PI * i / (n - 1)))
        array.push(j / (y - 1) - 0.5)
        array.push((1 - j / (y - 1)) * 0.5 * Math.sin(2 * Math.PI * i / (n - 1)))
      }
    }
    return array;
  }
  public static Capsule(n: number, y: number): number[] {
    const array: number[] = [];
    const normalize = (x: number, y: number) => Math.max(Math.abs(x), Math.abs(y))
    const distance = (x: number, y: number): number => Math.pow(x * x + y * y, 0.5)
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < y; j++) {
        const d = distance((i / (y - 1) - 0.5), (j / (y - 1) - 0.5))
        const r = normalize((i / (y - 1) - 0.5), (j / (y - 1) - 0.5))
        array.push(0.5 * (0.5 * Math.cos(Math.PI * r) * (i / (y - 1) - 0.5) / d))
        array.push(0.5 * (0.5 + 0.5 * Math.sin(Math.PI * r)))
        array.push(0.5 * (0.5 * Math.cos(Math.PI * r) * (j / (y - 1) - 0.5) / d))
        array.push(0.5 * (0.5 * Math.cos(Math.PI * r) * (i / (y - 1) - 0.5) / d))
        array.push(0.5 * (-0.5 - 0.5 * Math.sin(Math.PI * r)))
        array.push(0.5 * (0.5 * Math.cos(Math.PI * r) * (j / (y - 1) - 0.5) / d))
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < y; j++) {
        array.push(0.5 * (0.5 * Math.cos(2 * Math.PI * i / (n - 1))))
        array.push(0.5 * (j / (y - 1) - 0.5))
        array.push(0.5 * (0.5 * Math.sin(2 * Math.PI * i / (n - 1))))
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
