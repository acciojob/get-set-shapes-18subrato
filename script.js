
class Rectangle {
	private _width: number;
	  private _height: number;

  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers.");
    }
    this._width = width;
    this._height = height;
  }

  get width(): number {
    return this._width;
  }

	get height(): number {
    return this._height;
  }

  getArea(): number {
    return this._width * this._height;
  }

	
}

class Square extends Rectangle {
	constructor(side: number) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer.");
    }
    super(side, side);
  }

  getPerimeter(): number {
    return this.width * 4;
  }

}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;