import canvas from 'canvas';
import fs from 'fs';

function save(picture) {
    const buffer = picture.toBuffer();
    fs.writeFileSync('./image.png', buffer);
}

function main() {
    const picture = canvas.createCanvas(400, 400);
    const context = picture.getContext('2d');

    context.fillStyle = 'yellow';
    context.fillRect(50, 100, 100, 75);
    context.font = 'constania';
    context.fillStyle = 'red';
    context.fillText("Hello!", 85, 135);

    save(picture);
}

main();