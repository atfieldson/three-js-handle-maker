console.log('js');

let app = angular.module('HandleDesignApp', []);

let renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });
let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 2, 1000);
controls = new THREE.OrbitControls(camera, renderer.domElement);

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(0, 0, 100);
let scene = new THREE.Scene();

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0)

//lights
let light = new THREE.AmbientLight(0xffffff, .3);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, .6);
light1.position.set(-50, -15, 15)
scene.add(light1);

let light2 = new THREE.PointLight(0xffffff, .6);
light2.position.set(50, 15, 15)
scene.add(light2);

//WhipWorks logo
let WWLogo = new THREE.TextureLoader().load("ww.jpg");

//Backgrounds
let geoLeftWW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
let matLeftWW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: WWLogo });
let plane = new THREE.Mesh(geoLeftWW, matLeftWW);
plane.position.set(-35, 0, -15)
plane.rotation.y = -12;

let geoRightWW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
let matRightWW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: WWLogo });
let plane1 = new THREE.Mesh(geoRightWW, matRightWW);
plane1.position.set(35, 0, -15)
plane1.rotation.y = 12;

let geoFloor = new THREE.PlaneBufferGeometry(800, 500, 8, 8);
let matFloor = new THREE.MeshPhongMaterial({ color: 0xffffff, map: WWLogo });
let floor = new THREE.Mesh(geoFloor, matFloor);
floor.position.set(-0, -20, -400)
// floor.rotation.x= -1;

scene.add(plane, plane1, floor);



// //initial creation of handle, now in controller
// let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
// let geometry = new THREE.CylinderGeometry(4, 4, 200, 16);
// let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });

requestAnimationFrame(render);

function render() {
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}


app.controller('HandleDesignController', [function () {
	console.log('in HandleDesignController');
	let vm = this;
	vm.color1 = '';
	vm.color2 = '';
	
	//handle
	let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));

	let geometry = new THREE.CylinderGeometry(4, 4, 80, 16);
	let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture, bumpMap : texture, roughness: 1 });
	handle = new THREE.Mesh(geometry, material);
	handle.rotation.y = Math.PI;
	scene.add(handle);
	
	//Accent Knots
	// HEEL
	
	let textureHeel = new THREE.CanvasTexture(canvas, document.getElementById('heelCanvas'));

	let geoHeel = new THREE.CylinderGeometry(5.4, 5.4, 10, 16);
	let matHeel = new THREE.MeshBasicMaterial({ color: 0xffffff, map: textureHeel, bumpMap: textureHeel });
	heel = new THREE.Mesh(geoHeel, matHeel);
	heel.position.y = -44;
	scene.add(heel)

	// let cubedude = new THREE.BoxGeometry(50, 50, 50);
	// cube = new THREE.Mesh(cubedude, matHeel)
	// scene.add(cube)

	let geoHeelTop = new THREE.TorusGeometry(4.4, 1, 16, 16);
	let matHeelTop = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture});
	heelTop = new THREE.Mesh(geoHeelTop, matHeelTop);
	heelTop.rotation.x = Math.PI/2;
	heelTop.position.y = -39.1;
	scene.add(heelTop)

	let geoHeelBottom = new THREE.TorusGeometry(4.4, 1, 16, 16);
	let matHeelBottom = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture});
	let heelBottom = new THREE.Mesh(geoHeelBottom, matHeelBottom);
	heelBottom.rotation.x = Math.PI/2;
	heelBottom.position.y = -49.1;
	scene.add(heelBottom)
	//END HEEL 
	
	//MID
	let geoMid = new THREE.CylinderGeometry(5.4, 5.4, 6, 16);
	let matMid = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture});
	mid = new THREE.Mesh(geoMid, matMid);
	mid.position.y = 40;
	scene.add(mid)
	
	let geoMidTop = new THREE.TorusGeometry(4.4, 1, 16, 16);
	let matMidTop = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture});
	midTop = new THREE.Mesh(geoMidTop, matMidTop);
	midTop.rotation.x = Math.PI/2;
	midTop.position.y = 43;
	scene.add(midTop)

	let geoMidBottom = new THREE.TorusGeometry(4.4, 1, 16, 16);
	let matMidBottom = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture});
	midBottom = new THREE.Mesh(geoMidBottom, matMidBottom);
	midBottom.rotation.x = Math.PI/2;
	midBottom.position.y = 37;
	scene.add(midBottom)
	//END MID

	
	
	//initial render
	renderer.render(scene, camera);

	vm.boxPattern = function (color1, color2) {
		//render canvas
		boxPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.accentPattern = function (color1, color2) {
		//render canvas
		accentPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.egyptianEyePattern = function (color1, color2) {
		//render canvas
		egyptianEyePattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.verticalStripPattern = function (color1, color2) {
		//render canvas
		verticalStripPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.emeraldPattern = function (color1, color2) {
		//render canvas
		emeraldPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.celticPattern = function (color1, color2) {
		//render canvas
		celticPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

}]);
