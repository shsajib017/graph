const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const p1 = new Point(100,50);
p1.draw(ctx);
const p2 = new Point(100,200);
p2.draw(ctx);

const s1 = new Segment(p1,p2);
s1.draw(ctx)