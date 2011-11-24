

Timeline = {
	fps: 26,
	totalFrames: -1,
	frame: 0,
	nextFrame: function() {
		if (Timeline.frame === Timeline.totalFrames) {
			Timeline.stop();
			return;
		}
		Timeline.frame++;
		Timeline.clear();
		$(document).trigger("timeline.frame");		
	},
	clear: function() {
		Timeline.context.clearRect(0,0,Timeline.canvas.width,Timeline.canvas.height)

	},
	start: function() {
		$(document).trigger("timeline.start");
		var timeout = 1000 / Timeline.fps;

		Timeline.interval = window.setInterval("Timeline.nextFrame()",timeout)

	},
	stop: function() {
		$(document).trigger("timeline.stop");
		window.clearInterval(Timeline.interval);
	},
	init: function(id) {
		Timeline.canvas = document.getElementById(id);
		Timeline.context = Timeline.canvas.getContext('2d');
		$(document).trigger("timeline.ready");
	},
	interval: undefined,
	canvas: undefined,
	context: undefined,
}



$(document).bind("timeline.begin",function() {
	Timeline.start();
})







$(function() {
	Timeline.init('canvas');
});

