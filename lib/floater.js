(function () {
	if (typeof MovingObject === "undefined") { 
		MovingObject = {}; 
	}
	
	var COLOR = 'green'; 
	var RADIUS = 6; 

	var Floater= MovingObject.Floater = function(pos, height, width, ship){
	Asteroids.MovingObject.call(this, {"position": pos, "velocity": Asteroids.Util.prototype.randomVec(RADIUS), "color": COLOR, "radius": RADIUS, "height": height, "width": width, "ship": ship,
	"url": "./assets/bitsspace.jpg", "sprite_size": [330,260], "sprite_pos": [350,60], "speed": 15, "frames": [0], "scalar": [.1,.1] });
	 }; 

	MovingObject.Floater.prototype = Object.create(Asteroids.MovingObject.prototype);

})();


