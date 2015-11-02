(function () {
	if (typeof Asteroids === "undefined") { 
		Asteroids = {}; 
	}
	
	var menuView = Asteroids.menuView = function(ctx, height, width){ 
		this.height = height;
		this.width = width; 
		this.ctx = ctx;
		this.bg = Asteroids.Util.loadImage("./assets/title.jpg");
	};

	
	menuView.prototype.halt = function() {
		this.stop();
	};

	menuView.prototype.start = function(){ 
		ctx = this.ctx.getContext('2d'); 
		ctx.clearRect(0,0,this.width,this.height); 
		ctx.drawImage(this.bg, 0, 0, this.width, this.height); 
		ctx.font="80px Georgia";
		ctx.fillStyle="White";
		ctx.fillText("SPACE WARS", 100, 100);
		ctx.font="40px Georgia";
		ctx.fillStyle="White"; 
		ctx.fillText("Click anywhere to start", 100 , this.height/2);
		ctx.font="20px Georgia"; 
		ctx.fillStyle="White";
		ctx.fillText("Use the arrows to move, and WASD to shoot", 100, this.height/1.5); 
		$('.container').on('click', 
			this.halt.bind(this)
		)
		$();
	};

	menuView.prototype.stop = function(){
		$('.container').off('click'
		);
	
		game = new Asteroids.gameView(this.ctx, this.height, this.width);
		game.start();  
	};



})();