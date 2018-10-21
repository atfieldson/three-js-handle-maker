# three-js-handle-maker



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
