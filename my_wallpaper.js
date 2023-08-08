



let rect_width = 20;
let rect_height = 20;
var eyesY = 6;
var mouthSize = 6;
var mouthSize = 6;
var bodySize = 40;
var fillSize = 5;


function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(GRID_WALLPAPER);
pWallpaper.resolution(FIT_TO_SCREEN);
pWallpaper.show_guide(false); //set this to false when you're ready to print


//Grid settings
pWallpaper.grid_settings.cell_width = 200;
pWallpaper.grid_settings.cell_height = 200;
pWallpaper.grid_settings.row_offset = 50;
}




function wallpaper_background() {
background(64, 47, 29); //light honeydew green colour
}






function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
// creeper details
var rectX = 59
var rectY =50


fill(50, 100, 200, 150);
let spacing = 50;


if(mouseX > 300){
rect(100, 100, 100, 100)
fill(0)
}
else {
ellipse(100, 100, 100, 100)
fill(0)
}
//background
for (let x = 0; x < width + spacing; x += spacing) {
for (let y = 0; y < height + spacing; y += spacing) {
fill(random(0), random(55), random(255));
rect(x, y, spacing, spacing);
}
}


// Draw the creeper body
fill(0, 150, 0); // Dark green color
rect(51, 40, 40, bodySize); // head rectangle
rect(52.5, 80, 37, 77);
// Draw the creeper face
fill(0);
rect(59, 50, 6, eyesY);
rect(78, 50, 6, eyesY);
rect(60, 65, 22, 5);
rect(65.5, 60, 12, 5);
rect(60, 70, 6, mouthSize);
rect(76, 70, 6, mouthSize);
//legs
fill(0, 150, 0); // Dark green color
rect(51, 154, 20, 20);
rect(71, 154, 20, 20);
fill(0);
rect(52, 168, 39, fillSize);


//details
//line(80, 105, 90, 100);




}


