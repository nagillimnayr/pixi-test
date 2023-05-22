import { Application, Graphics } from "pixi.js";

// Create application
const app = new Application({ width: 640, height: 360 });
// Append canvas to the body of the DOM
document.body.appendChild(app.view);

// Draw circle
const graphics = new Graphics();
graphics.beginFill(0xff0000); // Red
graphics.lineStyle(10, 0x000000); // Black
graphics.drawCircle(0, 0, 25);

// Add to stage
app.stage.addChild(graphics);
graphics.x = app.view.width / 2;
graphics.y = app.view.height / 2;
