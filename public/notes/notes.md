Here are lines of code I did not end up needing on client.js because I figured out how to change
the size of the 3d rendering with html anc css.  I am keeping these in case I run into some issues 
with JSX.  

function resize(canvas) {
	// Lookup the size the browser is displaying the canvas.
	let displayWidth  = canvas.clientWidth;
	let displayHeight = canvas.clientHeight;
   
	// Check if the canvas is not the same size.
	if (canvas.width  != displayWidth ||
		canvas.height != displayHeight) {
   
	  // Make the canvas the same size
	  canvas.width  = displayWidth;
	  canvas.height = displayHeight;
	}
  }

myCanvas.width = myCanvas.clientWidth; //new
myCanvas.height = myCanvas.clientHeight; //new

renderer.setViewport(0, 0, myCanvas.clientWidth, myCanvas.clientHeight); 
//new, replaces renderer.setSize, something to do 
//with the fact that it is now depending on the CSS and .setSize defaults to window width and height?  

functions called apon first render and recalled in render/animate function
resize(myCanvas)
gl.viewport(0, 0, myCanvas.width, myCanvas.height)



Heel canvas code, This is potentially useable now that I know how to use 
textureHeel.needsUpdate = true;


// let heelCanvas = document.getElementById('heelCanvas')
// let h = heelCanvas.getContext('2d');

// heel = function (color1, color2){
//     let bw = 400;
//     let b16 = bw / 16;
//     let pattern1 = [0, 1, 4, 5, 8, 9, 12, 13, 16];
//     let pattern2 = [0, 3, 4, 7, 8, 11, 12, 15, 16]
//     let rowPattern1 = [-12, -8, -4, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36]
//     let rowPattern2 = [-11, -7, -3, 1, 5, 9, 13, 17, 21, 25, 29, 33, 37]
//     let rowPattern3 = [-10, -6, -2, 2, 6, 10, 14, 18, 22, 26, 30, 34, 38]

//     for (j = -b16 * 22; j <= b16 * 62; j += b16 * 2) {
//         for (let i = -b16 * 11; i <= bw * 2; i += b16) {
//             console.log('hello');
//             h.beginPath();
//             h.moveTo(i, i + j + 2 * b16);
//             h.lineTo(i - b16, i + j + b16);
//             h.lineTo(i, i + j);
//             h.lineTo(i + b16, i + j + b16)
//             h.closePath();
//             h.stroke();
//             //only need 2 patterns here, but we do need four
//             //row
//             if (rowPattern1.includes(j / (b16 * 2))) {
//                 if (pattern1.includes(i / b16)) {
//                     h.fillStyle = color1;
//                 } else {
//                     h.fillStyle = color2;
//                 }
//             } else if (rowPattern2.includes(j / (b16 * 2))) {
//                 if (pattern2.includes(i / b16)) {
//                     h.fillStyle = color1;
//                 } else {
//                     h.fillStyle = color2;
//                 }
//             } else if (rowPattern3.includes(j / (b16 * 2))) {
//                 if (pattern1.includes(i / b16)) {
//                     h.fillStyle = color1;
//                 } else {
//                     h.fillStyle = color2;
//                 }
//             } else {
//                 if (pattern2.includes(i / b16)) {
//                     h.fillStyle = color1;
//                 } else {
//                     h.fillStyle = color2;
//                 }
//             }
//             h.fill();
//         };//end for i 
//     }//end for j
// }


// heel(color1, color2)
