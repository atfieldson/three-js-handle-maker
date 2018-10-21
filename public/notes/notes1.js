console.log('js');
// Create a WebGL Rendered
let renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas')}); 
renderer.setClearColor(0x0088ff);
renderer.setPixelRatio(window.devicePixelRatio)
// Set the size of the rendered to the inner width and inner height of the window
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a camera
	// 	Set a Field of View (FOV) of 35 degrees
	// 	Set an Apsect Ratio of the inner width divided by the inner height of the window
	//	Set the 'Near' distance at which the camera will start rendering scene objects to 2
	//	Set the 'Far' (draw distance) at which objects will not be rendered to 1000
let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 2, 1000);
// Move the camera 'out' by 10
camera.position.set(0, 0, 10);
let scene = new THREE.Scene();// Create a scene

let light = new THREE.AmbientLight(0xffffff, .5);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, .5);
scene.add(light1);

// Create a geometry
	// 	Create a box (cube) of 1 width, length, and height
let geometry=new THREE.BoxGeometry(1, 1, 1);
// Create a MeshBasicMaterial with a color white and with its wireframe turned on
let material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
// Combine the geometry and material into a mesh
let cube = new THREE.Mesh(geometry, material);
// Add the mesh to the scene
scene.add(cube);


// Call the requestAnimationFrame function on the animate function to initialize process
requestAnimationFrame(render);

function render(){
	// Rotate the x position of the mesh by 0.01
	cube.rotation.y += .01;
	// Rotate the y position of the mesh by 0.01
	cube.rotation.x += 0.01;
	// Render everything using the created renderer, scene, and camera
	renderer.render(scene, camera);
	//recall the requestAnimationFram function on our render for infinite loop
    requestAnimationFrame(render);
}

renderer.render(scene, camera);

