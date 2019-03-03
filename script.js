$(document).ready(function(){
// all jQuery methods go here...

	$(".dance-icon").hover(onHovered, notHovered);
	function onHovered(){
		let str = $(this)[0].src;
		let name = str.substring(0, str.length - 8);
		$(this)[0].src = name + "giphy.gif";

	}
	function notHovered (){
		let str = $(this)[0].src;
		let name = str.substring(0, str.length - 9);
		$(this)[0].src = name + "icon.png";
	}
//runningman-icon.png --->. runningman-giphy.gif






});
