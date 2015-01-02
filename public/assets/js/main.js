(function() {

	//variables Declaration
    var bodyEl = document.body,
		wrap = bodyEl.querySelector('.wrap'), 
		head = bodyEl.querySelector('.head > span.menu-button > i'),
		zeMenu = bodyEl.querySelector('.ze-menu'),
        content = bodyEl.querySelector('.wrap-cover'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false,
		boxy = bodyEl.querySelector('.box');

	// svg
	// var svgMenu = Snap('#hamburger'),
	// 	topBar = svgMenu.select('#_x33_'),
	// 	middleBar = svgMenu.select('#_x32_'),
	// 	botBar = svgMenu.select('#_x31_');

	//hammer
	var openMenuz = new Hammer(openbtn);
	var closeMenuz = new Hammer(closebtn);
	var contentz = new Hammer(content);
	var bodyz = new Hammer(bodyEl);

	//functions
    function initEvents() {

		openMenuz.on("tap press", toggleMenu);
		bodyz.on('swiperight', toggleMenu);

		if (closebtn) {
			closeMenuz.on('tap press', toggleMenu);
		}

		contentz.on("tap press swipeleft", function(ev){
			var target = ev.target;
			if (isOpen && target !== openbtn){
				toggleMenu();
			}
		});
    }

    function toggleMenu() {
        if (isOpen) {
			openMenu();
            // classie.remove(bodyEl, 'showmenu');
        } else {
            // classie.add(bodyEl, 'showmenu');
			closeMenu();
        }
        isOpen = !isOpen;
    }

	//animations
	function openMenu() {
		// topBar.animate({
		// 	path: "M56.2,47.1H3.8c-1.5,0-2.7-1.2-2.7-2.7s1.2-2.7,2.7-2.7h52.3c1.5,0,2.7,1.2,2.7,2.7S57.7,47.1,56.2,47.1"
		// }, 400, mina.elastic);
		// middleBar.animate({
		// 	fill: '#FF302C',
		// 	opacity: 1
		// }, 400, mina.elastic);
		// botBar.animate({
		// 	path: 'M56.2,18.3H3.8c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7h52.3c1.5,0,2.7,1.2,2.7,2.7C58.9,17.1,57.7,18.3,56.2,18.3'
		// }, 400, mina.elastic);
		TweenLite.to(wrap, 1, {x:10});
	}

	function closeMenu() {
		// topBar.animate({
		// 	path: "M46.6,50.4l-37-37c-1.1-1.1-1.1-2.8,0-3.8c1.1-1.1,2.8-1.1,3.8,0l37,37c1.1,1.1,1.1,2.8,0,3.8C49.4,51.5,47.7,51.5,46.6,50.4"
		// }, 400, mina.elastic);
		// middleBar.animate({
		// 	fill: 'none',
		// 	opacity: 0
		// },400,mina.elastic);
		// botBar.animate({
		// 	path: 'M50.4,13.4l-37,37c-1.1,1.1-2.8,1.1-3.8,0c-1.1-1.1-1.1-2.8,0-3.8l37-37c1.1-1.1,2.8-1.1,3.8,0C51.5,10.6,51.5,12.3,50.4,13.4'
		// }, 400, mina.elastic);
		TweenLite.to(wrap, 1, { x:0  });
 	}

	function svgAnims() {
		if (boxy) {
			var waypoint = new Waypoint({
				element: boxy,
				handler: function(direction) {
				var desklap = document.querySelector('svg#desktop_laptop');
				var tabphone = document.querySelector('svg#tab_phone');
				var graphic = document.querySelector('svg#graphic');
					classie.toggle(desklap, 'animd');
					classie.toggle(tabphone, 'animd');
					classie.toggle(graphic, 'animd');
				},
				offset: 500
			});
		}
	}

	function init() {
		initEvents();
		svgAnims();
	}

	// run functions

		init();

})();
