class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx, color = "white", radius = 30) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
