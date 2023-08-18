(function ($) {
	$.fn.extend({
		accordionpromulti: function (options) {
			var defaults = {
				accordionpro: 'true',
				speed: 300,
				closedSign: '+',
				openedSign: '-'
			};
			var opts = $.extend(defaults, options);
			var $this = $(this);
			$this.find("li a span.menu_arrow").click(function () {
				var link = false;
				$(this).parent("a").click(function () {
					if (link == false) {
						link = true;
						return false;
					}
				});
				if ($(this).parent().parent().find("ul").size() != 0) {
					if (opts.accordionpro) {
						if (!$(this).parent().parent().find("ul").is(':visible')) {
							parents = $(this).parent().parent().parents("ul");
							visible = $this.find("ul:visible");
							visible.each(function (visibleIndex) {
								var close = true;
								parents.each(function (parentIndex) {
									if (parents[parentIndex] == visible[visibleIndex]) {
										close = false;
										return false;
									}
								});
								if (close) {
									if ($(this).parent().parent().find("ul") != visible[visibleIndex]) {
										$(visible[visibleIndex]).slideUp(opts.speed, function () {
											$(this).parent("li").find("span.menu_arrow:first").html(opts.closedSign).removeClass().addClass("menu_arrow arrow_opened");
											$(this).siblings("a").removeClass("current");
											$(this).parent("li").removeClass("active");
										});
									}
								}
							});
						}
					}
					if ($(this).parent().parent().find("ul:first").is(":visible")) {
						$(this).parent().parent().find("ul:first").slideUp(opts.speed, function () {
							$(this).parent("li").find("span.menu_arrow:first").delay(opts.speed).html(opts.closedSign).removeClass().addClass("menu_arrow arrow_opened");
							$(this).siblings("a").removeClass("current");
							$(this).parent("li").removeClass("active");
						});
					} else {
						$(this).parent().parent().find("ul:first").slideDown(opts.speed, function () {
							$(this).parent("li").find("span.menu_arrow:first").delay(opts.speed).html(opts.openedSign).removeClass().addClass("menu_arrow arrow_closed");
							$(this).siblings("a").addClass("current");
							$(this).parent("li").addClass("active");
						});
					}
				}
			});
		}
	});
})(jQuery);


(function ($) {
	$.fn.extend({
		accordionprohover: function (options) {
			var defaults = {
				accordionpro: 'true',
				speed: 300,
				closedSign: '+',
				openedSign: '-'
			};
			var opts = $.extend(defaults, options);
			var $this = $(this);
			var interval;
			var io = true;
			var events = function (o) {
				if (o.hasClass("menu_arrow")) {
					var link = false;
					var e = o;
					e.parent("a").on("click", function () {
						if (link == false) {
							link = true;
							return false;
						}
					});
				} else {
					var e = o.children(".menu_arrow")
					if (e.length == 0) {
						return false;
					}
				}
				if (!io) return false;
				if (e.parent().parent().find("ul").size() != 0) {
					if (opts.accordionpro) {
						if (!e.parent().parent().find("ul").is(':visible')) {
							parents = e.parent().parent().parents("ul");
							visible = $this.find("ul:visible");
							visible.each(function (visibleIndex) {
								var close = true;
								parents.each(function (parentIndex) {
									if (parents[parentIndex] == visible[visibleIndex]) {
										close = false;
										return false;
									}
								});
								if (close) {
									if (e.parent().parent().find("ul") != visible[visibleIndex]) {
										io = false;
										$(visible[visibleIndex]).slideUp(opts.speed, function () {
											$(this).parent("li").find("span.menu_arrow:first").html(opts.closedSign).removeClass().addClass("menu_arrow arrow_opened");
											$(this).siblings("a").removeClass("current");
											$(this).parent("li").removeClass("active");
											io = true;
										});
									}
								}
							});
						}
					}
					if (e.parent().parent().find("ul:first").is(":visible")) {
						if (o.hasClass("menu_arrow")) {
							io = false;
							e.parent().parent().find("ul:first").slideUp(opts.speed, function () {
								$(this).parent("li").find("span.menu_arrow:first").delay(opts.speed).html(opts.closedSign).removeClass().addClass("menu_arrow arrow_opened");
								$(this).siblings("a").removeClass("current");
								$(this).parent("li").removeClass("active");
								io = true;
							});
						}
					} else {
						io = false;
						e.parent().parent().find("ul:first").slideDown(opts.speed, function () {
							$(this).parent("li").find("span.menu_arrow:first").delay(opts.speed).html(opts.openedSign).removeClass().addClass("menu_arrow arrow_closed");
							$(this).siblings("a").addClass("current");
							$(this).parent("li").addClass("active");
							io = true;
						});
					}
				}
			}
			$this.find("li a").on("mouseover", function () {
				var e = $(this);
				interval = setTimeout(function () {
					events(e)
				}, 200);
			}).on("mouseout", function () {
				clearTimeout(interval);
			});
			$this.find("li a span.menu_arrow").on("click", function () {
				events($(this))
			});
		}
	});
})(jQuery);


/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}

	function c() {
		f = null
	}

	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function () {
			if (this.addEventListener)
				for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function (b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function (b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function (a) {
			return this.unbind("mousewheel", a)
		}
	})
});

(function ($) {
	$.fn.menusKeyboard =function(){
				
		var menus=$(this);
		var curr = menus.find(":focus");
		var level_1=true;
		var drop = false;
		var keyCode;
		var shiftKey;
		
		
		function menusondownkey(e,key){
			switch(key){		 			
				case 9:				
					menusonfocus("tab");
				break;
				case 13:
				case 32:
				if(curr.parent("li").hasClass("dir") && !curr.parent("li").hasClass("menu_hover")){
					e.preventDefault();
					menusonfocus("enter");
				}
				break;
				case 37:
				e.preventDefault();
				menusonfocus("left");
				break;
				case 38:
				e.preventDefault();
				menusonfocus("up");
				break;
				case 39:
				e.preventDefault();
				menusonfocus("right");
				break;
				case 40:
				e.preventDefault();
				menusonfocus("down");
				break;
				case 27:
				e.preventDefault();
				menusonfocus("end");
				break;				
			//	case 123:
				//e.preventDefault();
			//	menusonfocus("first");
			//	break;				
				
			}
	
		}
		function menusonup(){ 
			if(curr.parent("li").prev().length){
				curr.parent("li").prev().mouseenter().children("a").focus();
			}else{
				curr.parent("li").siblings().last().mouseenter().children("a").focus();
			}			
		}
		function menusondown(){
			drop=true;
			if(level_1){
				curr.parent().mouseenter();
				setTimeout(function(){
					curr.siblings("div").find("a").eq(0).focus().mouseenter();
					curr = menus.find(":focus");		
				},150);
			}else{ 
				if(curr.parent("li").next().length){
					curr.parent("li").next().mouseenter().children("a").focus();
				}else{
					curr.parent("li").siblings().first().mouseenter().children("a").focus();
				}
			}
		}
		function menusonright(){
			if(level_1){
				if(curr.parent("li").nextAll().children("a").first().length){
					drop?curr.parent("li").nextAll().children("a").first().focus().parent().mouseenter():curr.parent("li").nextAll().children("a").first().focus();
	
				}else{
					drop?curr.parent("li").siblings().prevAll().children("a").last().focus().parent().mouseenter():curr.parent("li").siblings().prevAll().children("a").last().focus();
				}
			}else{
				setTimeout(function(){
					if(curr.siblings("div").length){
						curr.siblings("div").find("a").eq(0).focus();							
					}else{
						if(curr.parents("li.dir").last().nextAll().children("a").length){
							curr.parents("li.dir").last().nextAll().children("a").first().focus().parent().mouseenter();
						
						}else{
							curr.parents("li.dir").last().prevAll().mouseenter().children("a").last().focus().parent().mouseenter();		
						}															
					}
					curr = menus.find(":focus");	
				},100);
			}
		}
		function menusonleft(){
			if(level_1){
				
				if(curr.parent("li").prevAll().children("a").first().length){
					drop?curr.parent("li").prevAll().children("a").first().focus().parent().mouseenter():curr.parent("li").prevAll().children("a").first().focus();						
				}else{
					drop?curr.parent("li").siblings().nextAll().children("a").last().focus().parent().mouseenter():curr.parent("li").siblings().nextAll().children("a").last().focus();
				}
	
			}else{
				curr.parent("li").parents("li.dir").first().mouseenter().children("a").focus();					
			}
		}
		function menusonfocus(action){
			switch(action){	
				case "first":
					menus.find("a").eq(0).focus();	
				break;
				case "down":
					menusondown();		
				break;
				case "up":
					menusonup();		
				break;
				case "right":
					if(curr.parents(".dnngo_boxslide").length){
						menusondown();
					}else{
						menusonright();	
					}
				break;
				case "left":
					if(curr.parents(".dnngo_boxslide").length){
						menusonup();
					}else{
						menusonleft();		
					}
				break;
				case "enter":				
					curr.parent().mouseenter();
				break;
				case "end":	
					if(!level_1){
						curr.parents("li.dir").last().mouseenter().children("a").focus();
					}
					curr.mouseleave();
					drop=false;	
	
				break;
				 
	
				curr = menus.find(":focus");
	
				if(curr.parents("ul").eq(0).hasClass("primary_structure")){
					curr.parent().mouseleave();
					level_1=true;
				}else{
					level_1=false;
				}
	
			}
		}
		document.onkeydown=function(e){	
			
			 keyCode = e.keyCode || e.which || e.charCode; 
			 shiftKey = e.shiftKey ;
			if(menus.find("a").is(":focus") || keyCode==123){
				//curr.mouseout();
				curr = menus.find(":focus");

				if(curr.parents("ul").eq(0).hasClass("primary_structure")){
					level_1=true;
				}else{
					level_1=false;
				}

				if(shiftKey && keyCode == 123) { 
					e.preventDefault();
					menusonfocus("first");	
				}else if(shiftKey && keyCode == 9) {
					menusonfocus("backtab");	
				}else{
					menusondownkey(e,e.keyCode);
				}	
			}
			
		};		 
		document.onkeyup=function(e){
			 
			var keyCode = e.keyCode || e.which || e.charCode;
			if(keyCode == 9) {
				curr = menus.find(":focus");
				
				if(curr.parents("ul").eq(0).hasClass("primary_structure") && drop){
	
					curr.parent().mouseenter();
				}
				if(!curr.parents("ul").eq(0).hasClass("primary_structure")){
					curr.parent().mouseenter();
				}
			}
			 
		};
	};
	})(jQuery);



(function ($) {
	$.fn.dnngomegamenu = function (m) {
		m = $.extend({
			slide_speed: 200,
			delay_show: 150,
			delay_disappear: 500,
			megamenuwidth: "box",
			WidthBoxClassName: ".dnn_layout",
			popUp: "vertical",
			direction: "ltr"
		}, m || {});
		var rtl = m.direction == "rtl" ? true : false;
		return this.each(function (index) {
			var me = $(this),
				primary = me.find(".primary_structure > li"),
				slide = ".dnngo_menuslide",
				subs = ".dnngo_submenu",
				subbox = "dnngo_boxslide",
				mlist ='dnngo_menu_list',
				hover = "menu_hover",
				slidedefault = "dnngo_slide_menu",
				interval,
				interval2;
			if (rtl) {
				me.addClass("rtl")
			}
			if (!!('ontouchstart' in window)) {
				primary.children("a").on('click', function () {
					if ($(this).siblings("div").css("display") == "none") {
						return false;
					}
				})
			}
			primary.mouseenter(function () {
				var e = $(this),
					slides = e.find(slide);
					clearTimeout(interval);
					clearTimeout(interval2);

				interval2 = setInterval(function () {
					if (slides.css('display') == 'none') {
						e.addClass("menu_hover");
						slides.attr("style", " ");
						var space = 20;
						var winwidth = $(window).width() - space,
							width = slides.width();
						var c_width = slides.data("width");
						c_width == 0 ? c_width = false : "";
						var posBox = $(m.WidthBoxClassName).last();

						if (m.popUp == "vertical") {
							var left = e.offset().left;
							if (slides.find("ul").hasClass(slidedefault)) {
								if (winwidth - left < width) {
									slides.css("left", '-' + parseInt(width + left - winwidth + 5) + 'px');
								}
							}
							if (c_width) {
								if (slides.find("div").hasClass(subbox) || slides.find("ul").hasClass(mlist)) {
									var position = slides.data("position") ? slides.data("position") : 0;
									offset = e.innerWidth() / 2;

									c_width = Math.min(c_width, winwidth);
								
									if (m.megamenuwidth == "box") {
										c_width = Math.min(c_width, parseInt(posBox.innerWidth()));
										var posleft = posBox.offset().left;
									} else {
										c_width = Math.min(c_width, winwidth);
										var posleft = space / 2;
									}

									var maxleft = left - posleft;
									var maxright = left - posleft - c_width;

									if (position == 0) {
										var cur = 0;
									} else if (position == 1) {
										var cur = c_width / 2 - offset;
									} else if (position == 2) {
										var cur = c_width - e.innerWidth();
									}
								

									var ju = cur;
									if (ju > left - posleft) {
										cur = left - posleft;
									}
									if (left + c_width - ju > posBox.innerWidth() + posleft) {
										cur = left + c_width - (posBox.innerWidth() + posleft)
									}
									slides.css({
										"width": c_width,
										"left": -cur
									})
								}
							} else {

								if (m.megamenuwidth == "full") { 
									if (slides.find("div").hasClass(subbox) || slides.children("ul").hasClass(mlist)) {
										slides.css({
											"width": winwidth,
											"max-width": winwidth,
											"left": -left + space / 2
										})
									}
								}
								if (m.megamenuwidth == "box") {
									if (slides.find("div").hasClass(subbox) || slides.children("ul").hasClass(mlist)) {
										slides.css({
											"width": posBox.innerWidth(),
											"max-width": winwidth,
											"left": posBox.offset().left - left - (Math.min(posBox.innerWidth(), winwidth) - posBox.innerWidth()) / 2
										})
									}
								}
							}
						}
						if (m.popUp == "level") {
							if (slides.find("ul").hasClass(slidedefault)) {
								if (rtl) {
									slides.css({
										"right": "100%",
										"left": "auto"
									});
								} else {
									slides.css("left", "100%");
								}
							}
							if (m.megamenuwidth == "box") {
								var subwidth = $(m.WidthBoxClassName).last().innerWidth();
							} else {
								var subwidth = $(window).width();
								if (c_width) {
									subwidth = Math.min($(window).width(), c_width);
								}
							}
							if (slides.find("div").hasClass(subbox) || slides.children("ul").hasClass(mlist)) {
								if (rtl) {
									slides.css({
										"width": subwidth,
										"max-width": slides.parent().offset().left - space / 2,
										"right": "100%",
										"left": "auto"
									})
								} else {
									slides.css({
										"width": subwidth,
										"max-width": winwidth - slides.parent().offset().left - slides.parent().innerWidth() + space / 2,
										"left": "100%"
									})
								}
							}
							var top = e.offset().top - $(window).scrollTop(),
								winheight = $(window).height(),
								height = slides.height();
							if (winheight < height + top) {
								if (winheight <= height) {
									slides.css({
										"top": -top
									})
								} else {
									slides.css({
										"top": winheight - (top + height)
									})
								}
							} else {
								slides.css({
									"top": 0
								})
							}
						}
						slides.fadeIn(m.slide_speed);
					}
					clearTimeout(interval2);
				}, m.delay_show);
				e.siblings().find(slide).fadeOut(m.slide_speed);
				e.siblings().find(subs).fadeOut(m.slide_speed);
				e.siblings().find(slide).find("li").removeClass(hover);
				e.siblings().find(subs).find("li").removeClass(hover);
				e.siblings().removeClass(hover);
			}).mouseleave(function () {
				var e = $(this);
				clearTimeout(interval2);
				interval = setInterval(function () {
					e.removeClass(hover);
					e.find("li").removeClass(hover);
					e.find(slide).fadeOut(m.slide_speed);
					e.find(subs).fadeOut(m.slide_speed);
					clearTimeout(interval);
				}, m.slide_speed > m.delay_disappear ? m.slide_speed : m.delay_disappear);
			})
			primary.find("li").mouseenter(function () {
				var subbox = $(this).find("> " + subs);
				if (subbox.css('display') == 'none') {
					$(this).addClass(hover);
					subbox.fadeIn(m.slide_speed);
					sub_l = $(this).offset().left;
					sub_left = sub_l + $(this).width(),
						winwidth = $(window).width(),
						sub_width = subbox.width();
					if (rtl) {
						if (sub_l < sub_width) {
							subbox.css({
								"left": "100%",
								"right": "auto"
							});
						} else {
							subbox.css({
								"left": "auto",
								"right": "100%"
							});
						}
					} else {
						if (winwidth - sub_left < sub_width) {
							subbox.css({
								"left": "auto",
								"right": "100%"
							});
						} else {
							subbox.css({
								"left": "100%",
								"right": "auto"
							});
						}
					}
					if (m.popUp == "level") {
						var top = $(this).offset().top - $(window).scrollTop(),
							winheight = $(window).height(),
							height = subbox.height();
						if (winheight < height + top) {
							if (winheight <= height) {
								subbox.css({
									"top": -top
								})
							} else {
								subbox.css({
									"top": winheight - (top + height)
								})
							}
						} else {
							subbox.css({
								"top": 0
							})
						}
					}
				}
				$(this).siblings().removeClass(hover);
				$(this).siblings().find(subs).fadeOut(m.slide_speed);
			})

			function roller(e, defaultTop) {
				if (e.offset().top + e.height() - $(window).scrollTop() > $(window).height()) {


					var s_top = $(window).scrollTop(),
						h = e.innerHeight(),
						w_h = $(window).height(),
						e_top = 0,
						p_height = e.parent().innerHeight(),
						n_w = false,
						min_top,
						max_top,
						rollerEv;
					e.addClass("roller");

					var up = $("<div class=\"roller-up\"></div>");
					var down = $("<div class=\"roller-down\"></div>")
					up.css({
						"width": e.width(),
						//	"left":e.offset().left
					})
					down.css({
						"width": e.width(),
						//	"left":e.offset().left
					})

					up.insertBefore(e.children("ul,div.dnngo_boxslide")).hide();
					down.insertAfter(e.children("ul,div.dnngo_boxslide"));
					if (e.hasClass("dnngo_submenu") || m.popUp == "level") {
						p_height = 0;
					}
					if (h < w_h) {
						min_top = p_height;
						max_top = -(e.offset().top - s_top - (w_h - h) - p_height);
						up.remove();
						n_w = true;
					} else {
						if (m.popUp == "level") {
							min_top = -(e.offset().top - s_top - p_height) + parseInt(defaultTop);
							max_top = -(h + e.offset().top - w_h - s_top - p_height) + parseInt(defaultTop);
						} else {
							min_top = -(e.offset().top - s_top - p_height);
							max_top = -(h + e.offset().top - w_h - s_top - p_height);
						}
					}
					var rollerEv;

					function up_d() {
						e_top = parseInt(e.css("top")) + 30;

						down.show();

						if (e_top >= min_top) {
							e.css("top", min_top)
							clearInterval(rollerEv);
							up.hide();
						} else {
							e.css("top", e_top)
						}

					}

					function down_d() {
						e_top = parseInt(e.css("top")) - 30;

						if (e_top < min_top) {
							up.show()
						} else {
							up.hide()
						}

						if (e_top <= max_top) {
							e.css("top", max_top)
							clearInterval(rollerEv);
							down.hide();
						} else {
							e.css("top", e_top)
						}
					}
					up.on("mouseenter", function () {
						rollerEv = setInterval(up_d, 100);
					}).on("mouseleave", function () {
						window.clearInterval(rollerEv);
					})
					down.on("mouseenter", function () {
						rollerEv = setInterval(down_d, 100);
					}).on("mouseleave", function () {
						window.clearInterval(rollerEv);
					})

					e.on('mousewheel', function (event) {
						e_top = parseInt(e.css("top")) + event.deltaY * 50;

						if (!n_w) {
							if (e_top > min_top) {

								if (event.deltaY < 0) {
									e.stop().css({
										"top": Math.max(e_top, min_top)
									})
									up.show();
								}

								if (event.deltaY > 0 && parseInt(e.css("top")) <= min_top) {
									e.stop().css({
										"top": min_top
									});
									down.show();
								}
								up.hide();

							} else if (e_top <= max_top) {
								e.stop().css({
									"top": max_top
								})
								down.hide();
								if (event.deltaY < 0 && parseInt(e.css("top")) >= min_top) {
									up.show();
								}

							} else {
								e.stop().css({
									"top": e_top
								})
								up.show();
								down.show();
							}
						} else {
							if (event.deltaY < 0) {
								e.stop().css({
									"top": Math.max(e_top, max_top)
								})
								if (e_top <= max_top) {
									down.hide();
								}
							}
						}
						event.stopPropagation();
						event.preventDefault();
					});

				}
			}

			function removeroller(e, defaultTop) {
				if (e.hasClass("roller")) {
					e.css("top", defaultTop);
					e.removeClass("roller");
					e.find(".roller-up , .roller-down").remove();
					e.unbind('mousewheel')
				}

			}
			me.find(".dnngo_menuslide,.dnngo_submenu").each(function (index, element) {
				var e = $(this),
					defaultTop = e.css("top"),
					rollerinterval;

				e.on("mouseenter", function () {
					if (!e.hasClass("roller")) {
						if (m.popUp == "level") {
							defaultTop = e.css("top");
						}
						roller(e, defaultTop)
					}
					clearTimeout(rollerinterval);

				})
				if (e.hasClass("dnngo_menuslide")) {
					e.on("mouseleave", function () {
						rollerinterval = setTimeout(function () {
							removeroller(e, defaultTop)
						}, m.slide_speed > m.delay_disappear ? m.slide_speed + m.slide_speed : m.delay_disappear + m.slide_speed);

					})
				}
				if (e.hasClass("dnngo_submenu")) {
					e.parent("li").on("mouseleave", function () {
						var te = $(this).children(".dnngo_submenu");
						rollerinterval = setTimeout(function () {
							removeroller(te, defaultTop)
						}, m.slide_speed > m.delay_disappear ? m.slide_speed + m.slide_speed : m.delay_disappear + m.slide_speed);

					})

				}
			});
			me.find(".dnngo_menu_list").each(function(){
				var line =$("<div class=\"line\"></div>");
				var n=$(this).parent("div").attr("class").split("numbercolumns-")[1].split(" ")[0];
				for(var i=0 ;i<n;i++){
					line.append("<span></span>")
				}
				$(this).find(".dnngo_submenu").each(function(){
					$(this).children("ul").unwrap();
				})

				$(this).after(line);

			})


		});
	};
})(jQuery);



(function ($) {
	$.fn.hoverIntent = function (f, g) {
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		cfg = $.extend(cfg, g ? {
			over: f,
			out: g
		} : f);
		var cX, cY, pX, pY;
		var track = function (ev) {
			cX = ev.pageX;
			cY = ev.pageY
		};
		var compare = function (ev, ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
				$(ob).unbind("mousemove", track);
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob, [ev])
			} else {
				pX = cX;
				pY = cY;
				ob.hoverIntent_t = setTimeout(function () {
					compare(ev, ob)
				}, cfg.interval)
			}
		};
		var delay = function (ev, ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob, [ev])
		};
		var handleHover = function (e) {
			var ev = jQuery.extend({}, e);
			var ob = this;
			if (ob.hoverIntent_t) {
				ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
			}
			if (e.type == "mouseenter") {
				pX = ev.pageX;
				pY = ev.pageY;
				$(ob).bind("mousemove", track);
				if (ob.hoverIntent_s != 1) {
					ob.hoverIntent_t = setTimeout(function () {
						compare(ev, ob)
					}, cfg.interval)
				}
			} else {
				$(ob).unbind("mousemove", track);
				if (ob.hoverIntent_s == 1) {
					ob.hoverIntent_t = setTimeout(function () {
						delay(ev, ob)
					}, cfg.timeout)
				}
			}
		};
		return this.bind('mouseenter', handleHover).bind('mouseleave', handleHover)
	}
})(jQuery);





(function ($) {
	$.fn.mobile_menu = function (op) {
		var sf = $.fn.mobile_menu,
			c = sf.c,
			$arrow = $(['<span class="', c.arrowClass, '"> &#187;</span>'].join('')),
			over = function () {
				var $$ = $(this),
					menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showmobile_menuUl().siblings().hidemobile_menuUl();
			},
			out = function () {
				var $$ = $(this),
					menu = getMenu($$),
					o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer = setTimeout(function () {
					o.retainPath = ($.inArray($$[0], o.$path) > -1);
					$$.hidemobile_menuUl();
					if (o.$path.length && $$.parents(['li.', o.hoverClass].join('')).length < 1) {
						over.call(o.$path);
					}
				}, o.delay);
			},
			getMenu = function ($menu) {
				var menu = $menu.parents(['ul.', c.menuClass, ':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function ($a) {
				$a.addClass(c.anchorClass).append($arrow.clone());
			};
		return this.each(function () {
			var s = this.serial = sf.o.length;
			var o = $.extend({}, sf.defaults, op);
			o.$path = $('li.' + o.pathClass, this).slice(0, o.pathLevels).each(function () {
				$(this).addClass([o.hoverClass, c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			$('li:has(ul)', this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over, out).each(function () {
				if (o.autoArrows) addArrow($('>a:first-child', this));
			}).not('.' + c.bcClass).hidemobile_menuUl();
			var $a = $('a', this);
			$a.each(function (i) {
				var $li = $a.eq(i).parents('li');
			});
			o.onInit.call(this);
		}).each(function () {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};
	var sf = $.fn.mobile_menu;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function () {
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity != undefined)
			this.toggleClass(sf.c.shadowClass + '-off');
	};
	sf.c = {
		bcClass: 'sf-breadcrumb',
		menuClass: 'sf-js-enabled',
		anchorClass: 'sf-with-ul',
		arrowClass: 'sf-sub-indicator',
		shadowClass: 'sf-shadow'
	};
	sf.defaults = {
		hoverClass: 'sfHover',
		pathClass: 'overideThisToUse',
		pathLevels: 2,
		delay: 1000,
		animation: {
			height: 'show'
		},
		speed: 'normal',
		autoArrows: false,
		dropShadows: false,
		disableHI: false,
		onInit: function () {},
		onBeforeShow: function () {},
		onShow: function () {},
		onHide: function () {}
	};
	$.fn.extend({
		hidemobile_menuUl: function () {
			var o = sf.op,
				not = (o.retainPath === true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.', o.hoverClass].join(''), this).add(this).not(not).removeClass(o.hoverClass).find('>ul').hide();
			o.onHide.call($ul);
			return this;
		},
		showmobile_menuUl: function () {
			var o = sf.op,
				sh = sf.c.shadowClass + '-off',
				$ul = this.not('.accorChild').addClass(o.hoverClass).find('>ul:hidden');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation, o.speed, function () {
				sf.IE7fix.call($ul);
				o.onShow.call($ul);
			});
			return this;
		}
	});
})(jQuery);

/*---------------------*/
jQuery(function ($) {
	if ($('.sf-menu').length != 0) {
		$('.sf-menu').mobile_menu()
	}
});


//pictab.js--------------------------

(function ($) {
	$.fn.phototabs = function (options) {
		var el = $(this);
		el.each(function () {
			var m = {
				'switchtime': 2000,
				'animationtime': 1000,
				'startpic': 0,
				'autoPaly': true,
				'showArrow': true
			};
			if (el.find("li").length == 0) {
				return false
			};
			if (options) {
				$.extend(m, options)
			};
			var l = 1;
			var pic_tab = function (n) {
				var current = parseInt(m['startpic'] + n);
				if (current > el.find("li").length - 1) {
					current = 0
				} else if (current < 0) {
					current = el.find("li").length - 1
				};
				el.find("li").css("opacity", "0").stop(true);
				el.addClass("preloader");
				l++;
				$('<img alt=' + l + ' src=' + el.find("li").eq(current).css("backgroundImage").slice(4, el.find("li").eq(current).css("backgroundImage").length - 1) + ' />').on('load', function () {
					if (l == $(this).attr("alt")) {
						el.removeClass("preloader");
						el.find("li").eq(current).addClass("selected").css("display", "block").animate({
							"opacity": 1
						}, m["animationtime"])
					};
					$(this).remove()
				});
				if (current != m['startpic']) {
					el.find("li").eq(m['startpic']).css("opacity", 1).animate({
						"opacity": 0
					}, m["animationtime"]).removeClass("selected")
				};
				m['startpic'] = current
			};
			if (el.find("li").length > 1) {
				if (m["autoPaly"]) {
					var pic_play = setInterval(function () {
						pic_tab(1)
					}, m['switchtime'])
				};
				if (m["showArrow"]) {
					el.append("<div class='pic_tab_arrow'><a  href='javascript:;' class='last_page'><</a><a  href='javascript:;' class='next_page'>></a></div>");
					el.find(".next_page").click(function () {
						clearTimeout(pic_play);
						pic_tab(1);
						if (m["autoPaly"]) {
							pic_play = setInterval(function () {
								pic_tab(1)
							}, m['switchtime'])
						}
					});
					el.find(".last_page").click(function () {
						clearTimeout(pic_play);
						pic_tab(-1);
						if (m["autoPaly"]) {
							pic_play = setInterval(function () {
								pic_tab(1)
							}, m['switchtime'])
						}
					})
				}
			}
		})
	}
})(jQuery);





/*! iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
	var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60)
	};
	var utils = (function () {
		var me = {};
		var _elementStyle = document.createElement("div").style;
		var _vendor = (function () {
			var vendors = ["t", "webkitT", "MozT", "msT", "OT"],
				transform, i = 0,
				l = vendors.length;
			for (; i < l; i++) {
				transform = vendors[i] + "ransform";
				if (transform in _elementStyle) {
					return vendors[i].substr(0, vendors[i].length - 1)
				}
			}
			return false
		})();

		function _prefixStyle(style) {
			if (_vendor === false) {
				return false
			}
			if (_vendor === "") {
				return style
			}
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1)
		}
		me.getTime = Date.now || function getTime() {
			return new Date().getTime()
		};
		me.extend = function (target, obj) {
			for (var i in obj) {
				target[i] = obj[i]
			}
		};
		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture)
		};
		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture)
		};
		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ? "MSPointer" + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent
		};
		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination, duration;
			deceleration = deceleration === undefined ? 0.0006 : deceleration;
			destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
			duration = speed / deceleration;
			if (destination < lowerMargin) {
				destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed
			} else {
				if (destination > 0) {
					destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
					distance = Math.abs(current) + destination;
					duration = distance / speed
				}
			}
			return {
				destination: Math.round(destination),
				duration: duration
			}
		};
		var _transform = _prefixStyle("transform");
		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle("perspective") in _elementStyle,
			hasTouch: "ontouchstart" in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent),
			hasTransition: _prefixStyle("transition") in _elementStyle
		});
		me.isBadAndroid = (function () {
			var appVersion = window.navigator.appVersion;
			if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if (safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19
				} else {
					return true
				}
			} else {
				return false
			}
		})();
		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle("transitionTimingFunction"),
			transitionDuration: _prefixStyle("transitionDuration"),
			transitionDelay: _prefixStyle("transitionDelay"),
			transformOrigin: _prefixStyle("transformOrigin"),
			touchAction: _prefixStyle("touchAction")
		});
		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className)
		};
		me.addClass = function (e, c) {
			if (me.hasClass(e, c)) {
				return
			}
			var newclass = e.className.split(" ");
			newclass.push(c);
			e.className = newclass.join(" ")
		};
		me.removeClass = function (e, c) {
			if (!me.hasClass(e, c)) {
				return
			}
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
			e.className = e.className.replace(re, " ")
		};
		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop
			}
			return {
				left: left,
				top: top
			}
		};
		me.preventDefaultException = function (el, exceptions) {
			for (var i in exceptions) {
				if (exceptions[i].test(el[i])) {
					return true
				}
			}
			return false
		};
		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,
			mousedown: 2,
			mousemove: 2,
			mouseup: 2,
			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,
			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});
		me.extend(me.ease = {}, {
			quadratic: {
				style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				fn: function (k) {
					return k * (2 - k)
				}
			},
			circular: {
				style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
				fn: function (k) {
					return Math.sqrt(1 - (--k * k))
				}
			},
			back: {
				style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
				fn: function (k) {
					var b = 4;
					return (k = k - 1) * k * ((b + 1) * k + b) + 1
				}
			},
			bounce: {
				style: "",
				fn: function (k) {
					if ((k /= 1) < (1 / 2.75)) {
						return 7.5625 * k * k
					} else {
						if (k < (2 / 2.75)) {
							return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75
						} else {
							if (k < (2.5 / 2.75)) {
								return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375
							} else {
								return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375
							}
						}
					}
				}
			},
			elastic: {
				style: "",
				fn: function (k) {
					var f = 0.22,
						e = 0.4;
					if (k === 0) {
						return 0
					}
					if (k == 1) {
						return 1
					}
					return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1)
				}
			}
		});
		me.tap = function (e, eventName) {
			var ev = document.createEvent("Event");
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev)
		};
		me.click = function (e) {
			var target = e.target,
				ev;
			if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
				ev = document.createEvent(window.MouseEvent ? "MouseEvents" : "Event");
				ev.initEvent("click", true, true);
				ev.view = e.view || window;
				ev.detail = 1;
				ev.screenX = target.screenX || 0;
				ev.screenY = target.screenY || 0;
				ev.clientX = target.clientX || 0;
				ev.clientY = target.clientY || 0;
				ev.ctrlKey = !!e.ctrlKey;
				ev.altKey = !!e.altKey;
				ev.shiftKey = !!e.shiftKey;
				ev.metaKey = !!e.metaKey;
				ev.button = 0;
				ev.relatedTarget = null;
				ev._constructed = true;
				target.dispatchEvent(ev)
			}
		};
		me.getTouchAction = function (eventPassthrough, addPinch) {
			var touchAction = "none";
			if (eventPassthrough === "vertical") {
				touchAction = "pan-y"
			} else {
				if (eventPassthrough === "horizontal") {
					touchAction = "pan-x"
				}
			}
			if (addPinch && touchAction != "none") {
				touchAction += " pinch-zoom"
			}
			return touchAction
		};
		me.getRect = function (el) {
			if (el instanceof SVGElement) {
				var rect = el.getBoundingClientRect();
				return {
					top: rect.top,
					left: rect.left,
					width: rect.width,
					height: rect.height
				}
			} else {
				return {
					top: el.offsetTop,
					left: el.offsetLeft,
					width: el.offsetWidth,
					height: el.offsetHeight
				}
			}
		};
		return me
	})();

	function IScroll(el, options) {
		this.wrapper = typeof el == "string" ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;
		this.options = {
			resizeScrollbars: true,
			mouseWheelSpeed: 20,
			snapThreshold: 0.334,
			disablePointer: !utils.hasPointer,
			disableTouch: utils.hasPointer || !utils.hasTouch,
			disableMouse: utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,
			bounce: true,
			bounceTime: 600,
			bounceEasing: "",
			preventDefault: true,
			preventDefaultException: {
				tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
			},
			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};
		for (var i in options) {
			this.options[i] = options[i]
		}
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? " translateZ(0)" : "";
		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;
		this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
		this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
		this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
		if (this.options.tap === true) {
			this.options.tap = "tap"
		}
		if (!this.options.useTransition && !this.options.useTransform) {
			if (!(/relative|absolute/i).test(this.scrollerStyle.position)) {
				this.scrollerStyle.position = "relative"
			}
		}
		if (this.options.shrinkScrollbars == "scale") {
			this.options.useTransition = false
		}
		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};
		this._init();
		this.refresh();
		this.scrollTo(this.options.startX, this.options.startY);
		this.enable()
	}
	IScroll.prototype = {
		version: "5.2.0-snapshot",
		_init: function () {
			this._initEvents();
			if (this.options.scrollbars || this.options.indicators) {
				this._initIndicators()
			}
			if (this.options.mouseWheel) {
				this._initWheel()
			}
			if (this.options.snap) {
				this._initSnap()
			}
			if (this.options.keyBindings) {
				this._initKeys()
			}
		},
		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
			this.resizeTimeout = null;
			this._execEvent("destroy")
		},
		_transitionEnd: function (e) {
			if (e.target != this.scroller || !this.isInTransition) {
				return
			}
			this._transitionTime();
			if (!this.resetPosition(this.options.bounceTime)) {
				this.isInTransition = false;
				this._execEvent("scrollEnd")
			}
		},
		_start: function (e) {
			if (utils.eventType[e.type] != 1) {
				var button;
				if (!e.which) {
					button = (e.button < 2) ? 0 : ((e.button == 4) ? 1 : 2)
				} else {
					button = e.button
				}
				if (button !== 0) {
					return
				}
			}
			if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
				return
			}
			if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault()
			}
			var point = e.touches ? e.touches[0] : e,
				pos;
			this.initiated = utils.eventType[e.type];
			this.moved = false;
			this.distX = 0;
			this.distY = 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;
			this.startTime = utils.getTime();
			if (this.options.useTransition && this.isInTransition) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent("scrollEnd")
			} else {
				if (!this.options.useTransition && this.isAnimating) {
					this.isAnimating = false;
					this._execEvent("scrollEnd")
				}
			}
			this.startX = this.x;
			this.startY = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX = point.pageX;
			this.pointY = point.pageY;
			this._execEvent("beforeScrollStart")
		},
		_move: function (e) {
			if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
				return
			}
			if (this.options.preventDefault) {
				e.preventDefault()
			}
			var point = e.touches ? e.touches[0] : e,
				deltaX = point.pageX - this.pointX,
				deltaY = point.pageY - this.pointY,
				timestamp = utils.getTime(),
				newX, newY, absDistX, absDistY;
			this.pointX = point.pageX;
			this.pointY = point.pageY;
			this.distX += deltaX;
			this.distY += deltaY;
			absDistX = Math.abs(this.distX);
			absDistY = Math.abs(this.distY);
			if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
				return
			}
			if (!this.directionLocked && !this.options.freeScroll) {
				if (absDistX > absDistY + this.options.directionLockThreshold) {
					this.directionLocked = "h"
				} else {
					if (absDistY >= absDistX + this.options.directionLockThreshold) {
						this.directionLocked = "v"
					} else {
						this.directionLocked = "n"
					}
				}
			}
			if (this.directionLocked == "h") {
				if (this.options.eventPassthrough == "vertical") {
					e.preventDefault()
				} else {
					if (this.options.eventPassthrough == "horizontal") {
						this.initiated = false;
						return
					}
				}
				deltaY = 0
			} else {
				if (this.directionLocked == "v") {
					if (this.options.eventPassthrough == "horizontal") {
						e.preventDefault()
					} else {
						if (this.options.eventPassthrough == "vertical") {
							this.initiated = false;
							return
						}
					}
					deltaX = 0
				}
			}
			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;
			newX = this.x + deltaX;
			newY = this.y + deltaY;
			if (newX > 0 || newX < this.maxScrollX) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX
			}
			if (newY > 0 || newY < this.maxScrollY) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY
			}
			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
			if (!this.moved) {
				this._execEvent("scrollStart")
			}
			this.moved = true;
			this._translate(newX, newY);
			if (timestamp - this.startTime > 300) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y
			}
		},
		_end: function (e) {
			if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
				return
			}
			if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault()
			}
			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX, momentumY, duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = "";
			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();
			if (this.resetPosition(this.options.bounceTime)) {
				return
			}
			this.scrollTo(newX, newY);
			if (!this.moved) {
				if (this.options.tap) {
					utils.tap(e, this.options.tap)
				}
				if (this.options.click) {
					utils.click(e)
				}
				this._execEvent("scrollCancel");
				return
			}
			if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
				this._execEvent("flick");
				return
			}
			if (this.options.momentum && duration < 300) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
					destination: newX,
					duration: 0
				};
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
					destination: newY,
					duration: 0
				};
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1
			}
			if (this.options.snap) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
				newX = snap.x;
				newY = snap.y;
				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing
			}
			if (newX != this.x || newY != this.y) {
				if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
					easing = utils.ease.quadratic
				}
				this.scrollTo(newX, newY, time, easing);
				return
			}
			this._execEvent("scrollEnd")
		},
		_resize: function () {
			var that = this;
			clearTimeout(this.resizeTimeout);
			this.resizeTimeout = setTimeout(function () {
				that.refresh()
			}, this.options.resizePolling)
		},
		resetPosition: function (time) {
			var x = this.x,
				y = this.y;
			time = time || 0;
			if (!this.hasHorizontalScroll || this.x > 0) {
				x = 0
			} else {
				if (this.x < this.maxScrollX) {
					x = this.maxScrollX
				}
			}
			if (!this.hasVerticalScroll || this.y > 0) {
				y = 0
			} else {
				if (this.y < this.maxScrollY) {
					y = this.maxScrollY
				}
			}
			if (x == this.x && y == this.y) {
				return false
			}
			this.scrollTo(x, y, time, this.options.bounceEasing);
			return true
		},
		disable: function () {
			this.enabled = false
		},
		enable: function () {
			this.enabled = true
		},
		refresh: function () {
			utils.getRect(this.wrapper);
			this.wrapperWidth = this.wrapper.clientWidth;
			this.wrapperHeight = this.wrapper.clientHeight;
			var rect = utils.getRect(this.scroller);
			this.scrollerWidth = rect.width;
			this.scrollerHeight = rect.height;
			this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
			this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
			if (!this.hasHorizontalScroll) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth
			}
			if (!this.hasVerticalScroll) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight
			}
			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;
			if (utils.hasPointer && !this.options.disablePointer) {
				this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, true);
				if (!this.wrapper.style[utils.style.touchAction]) {
					this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, false)
				}
			}
			this.wrapperOffset = utils.offset(this.wrapper);
			this._execEvent("refresh");
			this.resetPosition()
		},
		on: function (type, fn) {
			if (!this._events[type]) {
				this._events[type] = []
			}
			this._events[type].push(fn)
		},
		off: function (type, fn) {
			if (!this._events[type]) {
				return
			}
			var index = this._events[type].indexOf(fn);
			if (index > -1) {
				this._events[type].splice(index, 1)
			}
		},
		_execEvent: function (type) {
			if (!this._events[type]) {
				return
			}
			var i = 0,
				l = this._events[type].length;
			if (!l) {
				return
			}
			for (; i < l; i++) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1))
			}
		},
		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;
			this.scrollTo(x, y, time, easing)
		},
		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;
			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if (!time || transitionType) {
				if (transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time)
				}
				this._translate(x, y)
			} else {
				this._animate(x, y, time, easing.fn)
			}
		},
		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);
			if (!el) {
				return
			}
			var pos = utils.offset(el);
			pos.left -= this.wrapperOffset.left;
			pos.top -= this.wrapperOffset.top;
			var elRect = utils.getRect(el);
			var wrapperRect = utils.getRect(this.wrapper);
			if (offsetX === true) {
				offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2)
			}
			if (offsetY === true) {
				offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2)
			}
			pos.left -= offsetX || 0;
			pos.top -= offsetY || 0;
			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
			time = time === undefined || time === null || time === "auto" ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
			this.scrollTo(pos.left, pos.top, time, easing)
		},
		_transitionTime: function (time) {
			if (!this.options.useTransition) {
				return
			}
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			if (!durationProp) {
				return
			}
			this.scrollerStyle[durationProp] = time + "ms";
			if (!time && utils.isBadAndroid) {
				this.scrollerStyle[durationProp] = "0.0001ms";
				var self = this;
				rAF(function () {
					if (self.scrollerStyle[durationProp] === "0.0001ms") {
						self.scrollerStyle[durationProp] = "0s"
					}
				})
			}
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].transitionTime(time)
				}
			}
		},
		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].transitionTimingFunction(easing)
				}
			}
		},
		_translate: function (x, y) {
			if (this.options.useTransform) {
				this.scrollerStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.translateZ
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + "px";
				this.scrollerStyle.top = y + "px"
			}
			this.x = x;
			this.y = y;
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].updatePosition()
				}
			}
		},
		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;
			eventType(window, "orientationchange", this);
			eventType(window, "resize", this);
			if (this.options.click) {
				eventType(this.wrapper, "click", this, true)
			}
			if (!this.options.disableMouse) {
				eventType(this.wrapper, "mousedown", this);
				eventType(target, "mousemove", this);
				eventType(target, "mousecancel", this);
				eventType(target, "mouseup", this)
			}
			if (utils.hasPointer && !this.options.disablePointer) {
				eventType(this.wrapper, utils.prefixPointerEvent("pointerdown"), this);
				eventType(target, utils.prefixPointerEvent("pointermove"), this);
				eventType(target, utils.prefixPointerEvent("pointercancel"), this);
				eventType(target, utils.prefixPointerEvent("pointerup"), this)
			}
			if (utils.hasTouch && !this.options.disableTouch) {
				eventType(this.wrapper, "touchstart", this);
				eventType(target, "touchmove", this);
				eventType(target, "touchcancel", this);
				eventType(target, "touchend", this)
			}
			eventType(this.scroller, "transitionend", this);
			eventType(this.scroller, "webkitTransitionEnd", this);
			eventType(this.scroller, "oTransitionEnd", this);
			eventType(this.scroller, "MSTransitionEnd", this)
		},
		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;
			if (this.options.useTransform) {
				matrix = matrix[utils.style.transform].split(")")[0].split(", ");
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5])
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, "");
				y = +matrix.top.replace(/[^-\d.]/g, "")
			}
			return {
				x: x,
				y: y
			}
		},
		_initIndicators: function () {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != "string",
				indicators = [],
				indicator;
			var that = this;
			this.indicators = [];
			if (this.options.scrollbars) {
				if (this.options.scrollY) {
					indicator = {
						el: createDefaultScrollbar("v", interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator)
				}
				if (this.options.scrollX) {
					indicator = {
						el: createDefaultScrollbar("h", interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator)
				}
			}
			if (this.options.indicators) {
				indicators = indicators.concat(this.options.indicators)
			}
			for (var i = indicators.length; i--;) {
				this.indicators.push(new Indicator(this, indicators[i]))
			}

			function _indicatorsMap(fn) {
				if (that.indicators) {
					for (var i = that.indicators.length; i--;) {
						fn.call(that.indicators[i])
					}
				}
			}
			if (this.options.fadeScrollbars) {
				this.on("scrollEnd", function () {
					_indicatorsMap(function () {
						this.fade()
					})
				});
				this.on("scrollCancel", function () {
					_indicatorsMap(function () {
						this.fade()
					})
				});
				this.on("scrollStart", function () {
					_indicatorsMap(function () {
						this.fade(1)
					})
				});
				this.on("beforeScrollStart", function () {
					_indicatorsMap(function () {
						this.fade(1, true)
					})
				})
			}
			this.on("refresh", function () {
				_indicatorsMap(function () {
					this.refresh()
				})
			});
			this.on("destroy", function () {
				_indicatorsMap(function () {
					this.destroy()
				});
				delete this.indicators
			})
		},
		_initWheel: function () {
			utils.addEvent(this.wrapper, "wheel", this);
			utils.addEvent(this.wrapper, "mousewheel", this);
			utils.addEvent(this.wrapper, "DOMMouseScroll", this);
			this.on("destroy", function () {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
				utils.removeEvent(this.wrapper, "wheel", this);
				utils.removeEvent(this.wrapper, "mousewheel", this);
				utils.removeEvent(this.wrapper, "DOMMouseScroll", this)
			})
		},
		_wheel: function (e) {
			if (!this.enabled) {
				return
			}
			e.preventDefault();
			var wheelDeltaX, wheelDeltaY, newX, newY, that = this;
			if (this.wheelTimeout === undefined) {
				that._execEvent("scrollStart")
			}
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				if (!that.options.snap) {
					that._execEvent("scrollEnd")
				}
				that.wheelTimeout = undefined
			}, 400);
			if ("deltaX" in e) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY
				}
			} else {
				if ("wheelDeltaX" in e) {
					wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
					wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed
				} else {
					if ("wheelDelta" in e) {
						wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed
					} else {
						if ("detail" in e) {
							wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed
						} else {
							return
						}
					}
				}
			}
			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;
			if (!this.hasVerticalScroll) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0
			}
			if (this.options.snap) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;
				if (wheelDeltaX > 0) {
					newX--
				} else {
					if (wheelDeltaX < 0) {
						newX++
					}
				}
				if (wheelDeltaY > 0) {
					newY--
				} else {
					if (wheelDeltaY < 0) {
						newY++
					}
				}
				this.goToPage(newX, newY);
				return
			}
			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
			this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
			this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
			if (newX > 0) {
				newX = 0
			} else {
				if (newX < this.maxScrollX) {
					newX = this.maxScrollX
				}
			}
			if (newY > 0) {
				newY = 0
			} else {
				if (newY < this.maxScrollY) {
					newY = this.maxScrollY
				}
			}
			this.scrollTo(newX, newY, 0)
		},
		_initSnap: function () {
			this.currentPage = {};
			if (typeof this.options.snap == "string") {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap)
			}
			this.on("refresh", function () {
				var i = 0,
					l, m = 0,
					n, cx, cy, x = 0,
					y, stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el, rect;
				this.pages = [];
				if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
					return
				}
				if (this.options.snap === true) {
					cx = Math.round(stepX / 2);
					cy = Math.round(stepY / 2);
					while (x > -this.scrollerWidth) {
						this.pages[i] = [];
						l = 0;
						y = 0;
						while (y > -this.scrollerHeight) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};
							y -= stepY;
							l++
						}
						x -= stepX;
						i++
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;
					for (; i < l; i++) {
						rect = utils.getRect(el[i]);
						if (i === 0 || rect.left <= utils.getRect(el[i - 1]).left) {
							m = 0;
							n++
						}
						if (!this.pages[m]) {
							this.pages[m] = []
						}
						x = Math.max(-rect.left, this.maxScrollX);
						y = Math.max(-rect.top, this.maxScrollY);
						cx = x - Math.round(rect.width / 2);
						cy = y - Math.round(rect.height / 2);
						this.pages[m][n] = {
							x: x,
							y: y,
							width: rect.width,
							height: rect.height,
							cx: cx,
							cy: cy
						};
						if (x > this.maxScrollX) {
							m++
						}
					}
				}
				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
				if (this.options.snapThreshold % 1 === 0) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
				}
			});
			this.on("flick", function () {
				var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
				this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time)
			})
		},
		_nearestSnap: function (x, y) {
			if (!this.pages.length) {
				return {
					x: 0,
					y: 0,
					pageX: 0,
					pageY: 0
				}
			}
			var i = 0,
				l = this.pages.length,
				m = 0;
			if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
				return this.currentPage
			}
			if (x > 0) {
				x = 0
			} else {
				if (x < this.maxScrollX) {
					x = this.maxScrollX
				}
			}
			if (y > 0) {
				y = 0
			} else {
				if (y < this.maxScrollY) {
					y = this.maxScrollY
				}
			}
			for (; i < l; i++) {
				if (x >= this.pages[i][0].cx) {
					x = this.pages[i][0].x;
					break
				}
			}
			l = this.pages[i].length;
			for (; m < l; m++) {
				if (y >= this.pages[0][m].cy) {
					y = this.pages[0][m].y;
					break
				}
			}
			if (i == this.currentPage.pageX) {
				i += this.directionX;
				if (i < 0) {
					i = 0
				} else {
					if (i >= this.pages.length) {
						i = this.pages.length - 1
					}
				}
				x = this.pages[i][0].x
			}
			if (m == this.currentPage.pageY) {
				m += this.directionY;
				if (m < 0) {
					m = 0
				} else {
					if (m >= this.pages[0].length) {
						m = this.pages[0].length - 1
					}
				}
				y = this.pages[0][m].y
			}
			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			}
		},
		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;
			if (x >= this.pages.length) {
				x = this.pages.length - 1
			} else {
				if (x < 0) {
					x = 0
				}
			}
			if (y >= this.pages[x].length) {
				y = this.pages[x].length - 1
			} else {
				if (y < 0) {
					y = 0
				}
			}
			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;
			time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};
			this.scrollTo(posX, posY, time, easing)
		},
		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
			x++;
			if (x >= this.pages.length && this.hasVerticalScroll) {
				x = 0;
				y++
			}
			this.goToPage(x, y, time, easing)
		},
		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
			x--;
			if (x < 0 && this.hasVerticalScroll) {
				x = 0;
				y--
			}
			this.goToPage(x, y, time, easing)
		},
		_initKeys: function (e) {
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;
			if (typeof this.options.keyBindings == "object") {
				for (i in this.options.keyBindings) {
					if (typeof this.options.keyBindings[i] == "string") {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0)
					}
				}
			} else {
				this.options.keyBindings = {}
			}
			for (i in keys) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i]
			}
			utils.addEvent(window, "keydown", this);
			this.on("destroy", function () {
				utils.removeEvent(window, "keydown", this)
			})
		},
		_key: function (e) {
			if (!this.enabled) {
				return
			}
			var snap = this.options.snap,
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.25,
				pos;
			if (this.options.useTransition && this.isInTransition) {
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false
			}
			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
			switch (e.keyCode) {
				case this.options.keyBindings.pageUp:
					if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
						newX += snap ? 1 : this.wrapperWidth
					} else {
						newY += snap ? 1 : this.wrapperHeight
					}
					break;
				case this.options.keyBindings.pageDown:
					if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
						newX -= snap ? 1 : this.wrapperWidth
					} else {
						newY -= snap ? 1 : this.wrapperHeight
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length - 1 : this.maxScrollX;
					newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
					break;
				default:
					return
			}
			if (snap) {
				this.goToPage(newX, newY);
				return
			}
			if (newX > 0) {
				newX = 0;
				this.keyAcceleration = 0
			} else {
				if (newX < this.maxScrollX) {
					newX = this.maxScrollX;
					this.keyAcceleration = 0
				}
			}
			if (newY > 0) {
				newY = 0;
				this.keyAcceleration = 0
			} else {
				if (newY < this.maxScrollY) {
					newY = this.maxScrollY;
					this.keyAcceleration = 0
				}
			}
			this.scrollTo(newX, newY, 0);
			this.keyTime = now
		},
		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;

			function step() {
				var now = utils.getTime(),
					newX, newY, easing;
				if (now >= destTime) {
					that.isAnimating = false;
					that._translate(destX, destY);
					if (!that.resetPosition(that.options.bounceTime)) {
						that._execEvent("scrollEnd")
					}
					return
				}
				now = (now - startTime) / duration;
				easing = easingFn(now);
				newX = (destX - startX) * easing + startX;
				newY = (destY - startY) * easing + startY;
				that._translate(newX, newY);
				if (that.isAnimating) {
					rAF(step)
				}
			}
			this.isAnimating = true;
			step()
		},
		handleEvent: function (e) {
			switch (e.type) {
				case "touchstart":
				case "pointerdown":
				case "MSPointerDown":
				case "mousedown":
					this._start(e);
					break;
				case "touchmove":
				case "pointermove":
				case "MSPointerMove":
				case "mousemove":
					this._move(e);
					break;
				case "touchend":
				case "pointerup":
				case "MSPointerUp":
				case "mouseup":
				case "touchcancel":
				case "pointercancel":
				case "MSPointerCancel":
				case "mousecancel":
					this._end(e);
					break;
				case "orientationchange":
				case "resize":
					this._resize();
					break;
				case "transitionend":
				case "webkitTransitionEnd":
				case "oTransitionEnd":
				case "MSTransitionEnd":
					this._transitionEnd(e);
					break;
				case "wheel":
				case "DOMMouseScroll":
				case "mousewheel":
					this._wheel(e);
					break;
				case "keydown":
					this._key(e);
					break;
				case "click":
					if (this.enabled && !e._constructed) {
						e.preventDefault();
						e.stopPropagation()
					}
					break
			}
		}
	};

	function createDefaultScrollbar(direction, interactive, type) {
		var scrollbar = document.createElement("div"),
			indicator = document.createElement("div");
		if (type === true) {
			scrollbar.style.cssText = "position:absolute;z-index:9999";
			indicator.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
		}
		indicator.className = "iScrollIndicator";
		if (direction == "h") {
			if (type === true) {
				scrollbar.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
				indicator.style.height = "100%"
			}
			scrollbar.className = "iScrollHorizontalScrollbar"
		} else {
			if (type === true) {
				scrollbar.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
				indicator.style.width = "100%"
			}
			scrollbar.className = "iScrollVerticalScrollbar"
		}
		scrollbar.style.cssText += ";overflow:hidden";
		if (!interactive) {
			scrollbar.style.pointerEvents = "none"
		}
		scrollbar.appendChild(indicator);
		return scrollbar
	}

	function Indicator(scroller, options) {
		this.wrapper = typeof options.el == "string" ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;
		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};
		for (var i in options) {
			this.options[i] = options[i]
		}
		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;
		if (this.options.interactive) {
			if (!this.options.disableTouch) {
				utils.addEvent(this.indicator, "touchstart", this);
				utils.addEvent(window, "touchend", this)
			}
			if (!this.options.disablePointer) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
				utils.addEvent(window, utils.prefixPointerEvent("pointerup"), this)
			}
			if (!this.options.disableMouse) {
				utils.addEvent(this.indicator, "mousedown", this);
				utils.addEvent(window, "mouseup", this)
			}
		}
		if (this.options.fade) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			var durationProp = utils.style.transitionDuration;
			if (!durationProp) {
				return
			}
			this.wrapperStyle[durationProp] = utils.isBadAndroid ? "0.0001ms" : "0ms";
			var self = this;
			if (utils.isBadAndroid) {
				rAF(function () {
					if (self.wrapperStyle[durationProp] === "0.0001ms") {
						self.wrapperStyle[durationProp] = "0s"
					}
				})
			}
			this.wrapperStyle.opacity = "0"
		}
	}
	Indicator.prototype = {
		handleEvent: function (e) {
			switch (e.type) {
				case "touchstart":
				case "pointerdown":
				case "MSPointerDown":
				case "mousedown":
					this._start(e);
					break;
				case "touchmove":
				case "pointermove":
				case "MSPointerMove":
				case "mousemove":
					this._move(e);
					break;
				case "touchend":
				case "pointerup":
				case "MSPointerUp":
				case "mouseup":
				case "touchcancel":
				case "pointercancel":
				case "MSPointerCancel":
				case "mousecancel":
					this._end(e);
					break
			}
		},
		destroy: function () {
			if (this.options.fadeScrollbars) {
				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null
			}
			if (this.options.interactive) {
				utils.removeEvent(this.indicator, "touchstart", this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
				utils.removeEvent(this.indicator, "mousedown", this);
				utils.removeEvent(window, "touchmove", this);
				utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
				utils.removeEvent(window, "mousemove", this);
				utils.removeEvent(window, "touchend", this);
				utils.removeEvent(window, utils.prefixPointerEvent("pointerup"), this);
				utils.removeEvent(window, "mouseup", this)
			}
			if (this.options.defaultScrollbars && this.wrapper.parentNode) {
				this.wrapper.parentNode.removeChild(this.wrapper)
			}
		},
		_start: function (e) {
			var point = e.touches ? e.touches[0] : e;
			e.preventDefault();
			e.stopPropagation();
			this.transitionTime();
			this.initiated = true;
			this.moved = false;
			this.lastPointX = point.pageX;
			this.lastPointY = point.pageY;
			this.startTime = utils.getTime();
			if (!this.options.disableTouch) {
				utils.addEvent(window, "touchmove", this)
			}
			if (!this.options.disablePointer) {
				utils.addEvent(window, utils.prefixPointerEvent("pointermove"), this)
			}
			if (!this.options.disableMouse) {
				utils.addEvent(window, "mousemove", this)
			}
			this.scroller._execEvent("beforeScrollStart")
		},
		_move: function (e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX, deltaY, newX, newY, timestamp = utils.getTime();
			if (!this.moved) {
				this.scroller._execEvent("scrollStart")
			}
			this.moved = true;
			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;
			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;
			newX = this.x + deltaX;
			newY = this.y + deltaY;
			this._pos(newX, newY);
			e.preventDefault();
			e.stopPropagation()
		},
		_end: function (e) {
			if (!this.initiated) {
				return
			}
			this.initiated = false;
			e.preventDefault();
			e.stopPropagation();
			utils.removeEvent(window, "touchmove", this);
			utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
			utils.removeEvent(window, "mousemove", this);
			if (this.scroller.options.snap) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
				var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);
				if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing)
				}
			}
			if (this.moved) {
				this.scroller._execEvent("scrollEnd")
			}
		},
		transitionTime: function (time) {
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			if (!durationProp) {
				return
			}
			this.indicatorStyle[durationProp] = time + "ms";
			if (!time && utils.isBadAndroid) {
				this.indicatorStyle[durationProp] = "0.0001ms";
				var self = this;
				rAF(function () {
					if (self.indicatorStyle[durationProp] === "0.0001ms") {
						self.indicatorStyle[durationProp] = "0s"
					}
				})
			}
		},
		transitionTimingFunction: function (easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing
		},
		refresh: function () {
			this.transitionTime();
			if (this.options.listenX && !this.options.listenY) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none"
			} else {
				if (this.options.listenY && !this.options.listenX) {
					this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none"
				} else {
					this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"
				}
			}
			if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
				utils.addClass(this.wrapper, "iScrollBothScrollbars");
				utils.removeClass(this.wrapper, "iScrollLoneScrollbar");
				if (this.options.defaultScrollbars && this.options.customStyle) {
					if (this.options.listenX) {
						this.wrapper.style.right = "8px"
					} else {
						this.wrapper.style.bottom = "8px"
					}
				}
			} else {
				utils.removeClass(this.wrapper, "iScrollBothScrollbars");
				utils.addClass(this.wrapper, "iScrollLoneScrollbar");
				if (this.options.defaultScrollbars && this.options.customStyle) {
					if (this.options.listenX) {
						this.wrapper.style.right = "2px"
					} else {
						this.wrapper.style.bottom = "2px"
					}
				}
			}
			utils.getRect(this.wrapper);
			if (this.options.listenX) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if (this.options.resize) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + "px"
				} else {
					this.indicatorWidth = this.indicator.clientWidth
				}
				this.maxPosX = this.wrapperWidth - this.indicatorWidth;
				if (this.options.shrink == "clip") {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX
				}
				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX))
			}
			if (this.options.listenY) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if (this.options.resize) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + "px"
				} else {
					this.indicatorHeight = this.indicator.clientHeight
				}
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				if (this.options.shrink == "clip") {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY
				}
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY))
			}
			this.updatePosition()
		},
		updatePosition: function () {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
			if (!this.options.ignoreBoundaries) {
				if (x < this.minBoundaryX) {
					if (this.options.shrink == "scale") {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + "px"
					}
					x = this.minBoundaryX
				} else {
					if (x > this.maxBoundaryX) {
						if (this.options.shrink == "scale") {
							this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
							this.indicatorStyle.width = this.width + "px";
							x = this.maxPosX + this.indicatorWidth - this.width
						} else {
							x = this.maxBoundaryX
						}
					} else {
						if (this.options.shrink == "scale" && this.width != this.indicatorWidth) {
							this.width = this.indicatorWidth;
							this.indicatorStyle.width = this.width + "px"
						}
					}
				}
				if (y < this.minBoundaryY) {
					if (this.options.shrink == "scale") {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + "px"
					}
					y = this.minBoundaryY
				} else {
					if (y > this.maxBoundaryY) {
						if (this.options.shrink == "scale") {
							this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
							this.indicatorStyle.height = this.height + "px";
							y = this.maxPosY + this.indicatorHeight - this.height
						} else {
							y = this.maxBoundaryY
						}
					} else {
						if (this.options.shrink == "scale" && this.height != this.indicatorHeight) {
							this.height = this.indicatorHeight;
							this.indicatorStyle.height = this.height + "px"
						}
					}
				}
			}
			this.x = x;
			this.y = y;
			if (this.scroller.options.useTransform) {
				this.indicatorStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.scroller.translateZ
			} else {
				this.indicatorStyle.left = x + "px";
				this.indicatorStyle.top = y + "px"
			}
		},
		_pos: function (x, y) {
			if (x < 0) {
				x = 0
			} else {
				if (x > this.maxPosX) {
					x = this.maxPosX
				}
			}
			if (y < 0) {
				y = 0
			} else {
				if (y > this.maxPosY) {
					y = this.maxPosY
				}
			}
			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
			this.scroller.scrollTo(x, y)
		},
		fade: function (val, hold) {
			if (hold && !this.visible) {
				return
			}
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
			var time = val ? 250 : 500,
				delay = val ? 0 : 300;
			val = val ? "1" : "0";
			this.wrapperStyle[utils.style.transitionDuration] = time + "ms";
			this.fadeTimeout = setTimeout((function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val
			}).bind(this, val), delay)
		}
	};
	IScroll.utils = utils;
	if (typeof module != "undefined" && module.exports) {
		module.exports = IScroll
	} else {
		if (typeof define == "function" && define.amd) {
			define(function () {
				return IScroll
			})
		} else {
			window.IScroll = IScroll
		}
	}
})(window, document, Math);




;(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
	  define(['jquery'], factory);
	} else if (typeof exports === 'object') {
	  module.exports = factory(require('jquery'));
	} else {
	  root.jquery_mmenu_all_js = factory(root.jQuery);
	}
  }(this, function(jQuery) {
  /*
   * jQuery mmenu v6.1.8
   * @requires jQuery 1.7.0 or later
   *
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   * www.frebsite.nl
   *
   * License: CC-BY-NC-4.0
   * http://creativecommons.org/licenses/by-nc/4.0/
   */
  !function(e){function t(){e[n].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},s={},a={},o={},e.each([s,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,i=e.length;n<i;n++)t[e[n]]=t.mm(e[n])}}),s.mm=function(e){return"mm-"+e},s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"),s.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=s,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",i="6.1.8";if(!(e[n]&&e[n].version>i)){e[n]=function(e,t,n){return this.$menu=e,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initAddons(),this._initExtensions(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=i,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={getInstance:function(){return this},initPanels:function(e){this._initPanels(e)},openPanel:function(t,i){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+s.panel)||(t=t.closest("."+s.panel)),t.is("."+s.panel))){var o=this;if("boolean"!=typeof i&&(i=!0),t.hasClass(s.vertical))t.add(t.parents("."+s.vertical)).removeClass(s.hidden).parent("li").addClass(s.opened),this.openPanel(t.parents("."+s.panel).not("."+s.vertical).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(s.opened))return;var r=this.$pnls.children("."+s.panel),l=r.filter("."+s.opened);if(!e[n].support.csstransitions)return l.addClass(s.hidden).removeClass(s.opened),t.removeClass(s.hidden).addClass(s.opened),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);r.not(t).removeClass(s.subopened);for(var d=t.data(a.parent);d;)d=d.closest("."+s.panel),d.is("."+s.vertical)||d.addClass(s.subopened),d=d.data(a.parent);r.removeClass(s.highest).not(l).not(t).addClass(s.hidden),t.removeClass(s.hidden),this.openPanelStart=function(){l.removeClass(s.opened),t.addClass(s.opened),t.hasClass(s.subopened)?(l.addClass(s.highest),t.removeClass(s.subopened)):(l.addClass(s.subopened),t.addClass(s.highest)),this.trigger("openPanel:start",t)},this.openPanelFinish=function(){l.removeClass(s.highest).addClass(s.hidden),t.removeClass(s.highest),this.trigger("openPanel:finish",t)},i&&!t.hasClass(s.noanimation)?setTimeout(function(){o.__transitionend(t,function(){o.openPanelFinish.call(o)},o.conf.transitionDuration),o.openPanelStart.call(o)},o.conf.openingInterval):(this.openPanelStart.call(this),this.openPanelFinish.call(this))}this.trigger("openPanel:after",t)}},closePanel:function(e){this.trigger("closePanel:before",e);var t=e.parent();t.hasClass(s.vertical)&&(t.removeClass(s.opened),this.trigger("closePanel",e)),this.trigger("closePanel:after",e)},closeAllPanels:function(e){this.trigger("closeAllPanels:before"),this.$pnls.find("."+s.listview).children().removeClass(s.selected).filter("."+s.vertical).removeClass(s.opened);var t=this.$pnls.children("."+s.panel),n=e&&e.length?e:t.first();this.$pnls.children("."+s.panel).not(n).removeClass(s.subopened).removeClass(s.opened).removeClass(s.highest).addClass(s.hidden),this.openPanel(n,!1),this.trigger("closeAllPanels:after")},togglePanel:function(e){var t=e.parent();t.hasClass(s.vertical)&&this[t.hasClass(s.opened)?"closePanel":"openPanel"](e)},setSelected:function(e){this.trigger("setSelected:before",e),this.$menu.find("."+s.listview).children("."+s.selected).removeClass(s.selected),e.addClass(s.selected),this.trigger("setSelected:after",e)},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var i=0,s=this.cbck[n].length;i<s;i++)this.cbck[n][i].apply(e,t)},matchMedia:function(e,t,n){var i={yes:t,no:n};this.mtch[e]=this.mtch[e]||[],this.mtch[e].push(i)},_initAddons:function(){this.trigger("initAddons:before");var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var t in this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?"mm-"+this.opts.extensions[t].join(" mm-"):"",this.opts.extensions[t]&&!function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",s.mm(e(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);var t=[s.menu];this.opts.slidingSubmenus||t.push(s.vertical),this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var n=e(),i=this,a=function(t){t.filter(this.conf.panelNodetype).each(function(){var t=i._initPanel(e(this));if(t){i._initNavbar(t),i._initListview(t),n=n.add(t);var o=t.children("."+s.listview).children("li").children(i.conf.panelNodeType).add(t.children("."+i.conf.classNames.panel));o.length&&a.call(i,o)}})};a.call(this,t),this.opts.initPanels.call(this,n),this.trigger("initPanels:after",n)},_initPanel:function(e){this.trigger("initPanel:before",e);if(e.hasClass(s.panel))return e;if(this.__refactorClass(e,this.conf.classNames.panel,"panel"),this.__refactorClass(e,this.conf.classNames.nopanel,"nopanel"),this.__refactorClass(e,this.conf.classNames.vertical,"vertical"),this.__refactorClass(e,this.conf.classNames.inset,"inset"),e.filter("."+s.inset).addClass(s.nopanel),e.hasClass(s.nopanel))return!1;var t=e.hasClass(s.vertical)||!this.opts.slidingSubmenus;e.removeClass(s.vertical);var n=e.attr("id")||this.__getUniqueId();e.removeAttr("id"),e.is("ul, ol")&&(e.wrap("<div />"),e=e.parent()),e.addClass(s.panel+" "+s.hidden).attr("id",n);var i=e.parent("li");return t?e.add(i).addClass(s.vertical):e.appendTo(this.$pnls),i.length&&(i.data(a.child,e),e.data(a.parent,i)),this.trigger("initPanel:after",e),e},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+s.navbar).length){var i=t.data(a.parent),o=e('<div class="'+s.navbar+'" />'),r=e[n].i18n(this.opts.navbar.title),l="";if(i&&i.length){if(i.hasClass(s.vertical))return;if(i.parent().is("."+s.listview))var d=i.children("a, span").not("."+s.next);else var d=i.closest("."+s.panel).find('a[href="#'+t.attr("id")+'"]');d=d.first(),i=d.closest("."+s.panel);var c=i.attr("id");switch(r=d.text(),this.opts.navbar.titleLink){case"anchor":l=d.attr("href");break;case"parent":l="#"+c}o.append('<a class="'+s.btn+" "+s.prev+'" href="#'+c+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(s.hasnavbar),o.append('<a class="'+s.title+'"'+(l.length?' href="'+l+'"':"")+">"+r+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var n=this.__childAddBack(t,"ul, ol");this.__refactorClass(n,this.conf.classNames.nolistview,"nolistview"),n.filter("."+this.conf.classNames.inset).addClass(s.nolistview);var i=n.not("."+s.nolistview).addClass(s.listview).children();this.__refactorClass(i,this.conf.classNames.selected,"selected"),this.__refactorClass(i,this.conf.classNames.divider,"divider"),this.__refactorClass(i,this.conf.classNames.spacer,"spacer");var o=t.data(a.parent);if(o&&o.parent().is("."+s.listview)&&!o.children("."+s.next).length){var r=o.children("a, span").first(),l=e('<a class="'+s.next+'" href="#'+t.attr("id")+'" />').insertBefore(r);r.is("span")&&l.addClass(s.fullsubopen)}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var e=this.$pnls.find("."+s.listview).children("."+s.selected).removeClass(s.selected).last().addClass(s.selected),t=e.length?e.closest("."+s.panel):this.$pnls.children("."+s.panel).first();this.openPanel(t,!1),this.trigger("initOpened:after")},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(i){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+s.panel)&&(o=!0,t[a.parent().hasClass(s.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(o&&i.preventDefault(),!o&&r&&a.is("."+s.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(i.target).parent());var f=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));f&&i.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,f)&&t.opts.offCanvas&&"function"==typeof t.close&&t.close()}})},_initMatchMedia:function(){var e=this;this._fireMatchMedia(),r.$wndw.on(o.resize,function(t){e._fireMatchMedia()})},_fireMatchMedia:function(){for(var e in this.mtch)for(var t=window.matchMedia&&window.matchMedia(e).matches?"yes":"no",n=0;n<this.mtch[e].length;n++)this.mtch[e][n][t].call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return this.conf.clone&&e&&e.length&&(e=s.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var i=this;n[i]=function(){var e=t[i].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(s[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__childAddBack:function(e,t){return e.children(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+s.divider).not("."+s.hidden)},__filterListItemAnchors:function(e){return this.__filterListItems(e).children("a").not("."+s.next)},__transitionend:function(e,t,n){var i=!1,s=function(n){"undefined"!=typeof n&&n.target!=e[0]||(i||(e.off(o.transitionend),e.off(o.webkitTransitionEnd),t.call(e[0])),i=!0)};e.on(o.transitionend,s),e.on(o.webkitTransitionEnd,s),setTimeout(s,1.1*n)},__getUniqueId:function(){return s.mm(e[n].uniqueId++)}},e.fn[n]=function(i,s){t(),i=e.extend(!0,{},e[n].defaults,i),s=e.extend(!0,{},e[n].configuration,s);var a=e();return this.each(function(){var t=e(this);if(!t.data(n)){var o=new e[n](t,i,s);o.$menu.data(n,o.__api()),a=a.add(o.$menu)}}),a},e[n].i18n=function(){var t={};return function(n){switch(typeof n){case"object":return e.extend(t,n),t;case"string":return t[n]||n;case"undefined":default:return t}}}(),e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransitions||Modernizr.csstransitions}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,o,r}}(jQuery),/*
   * jQuery mmenu offCanvas add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var s=this,a=this.opts[n],r=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof a&&(a={}),"top"!=a.position&&"bottom"!=a.position||(a.zposition="front"),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),"string"!=typeof r.pageSelector&&(r.pageSelector="> "+r.pageNodetype),this.vars.opened=!1;var l=[i.offcanvas];"left"!=a.position&&l.push(i.mm(a.position)),"back"!=a.zposition&&l.push(i.mm(a.zposition)),e[t].support.csstransforms||l.push(i["no-csstransforms"]),e[t].support.csstransforms3d||l.push(i["no-csstransforms3d"]),this.bind("initMenu:after",function(){var e=this;this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu.addClass(l.join(" ")).parent("."+i.wrapper).removeClass(i.wrapper),this.$menu[r.menuInsertMethod](r.menuInsertSelector);var t=window.location.hash;if(t){var s=this._getOriginalMenuId();s&&s==t.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("initExtensions:after",function(){for(var e=[i.mm("widescreen"),i.mm("iconbar")],t=0;t<e.length;t++)for(var n in this.opts.extensions)if(this.opts.extensions[n].indexOf(e[t])>-1){!function(t,n){s.matchMedia(t,function(){o.$html.addClass(e[n])},function(){o.$html.removeClass(e[n])})}(n,t);break}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),s.add("style")},clickAnchor:function(e,t){var s=this;if(this.opts[n]){var a=this._getOriginalMenuId();if(a&&e.is('[href="#'+a+'"]')){if(t)return!0;var r=e.closest("."+i.menu);if(r.length){var l=r.data("mmenu");if(l&&l.close)return l.close(),s.__transitionend(r,function(){s.open()},s.conf.transitionDuration),!0}return this.open(),!0}if(o.$page)return a=o.$page.first().attr("id"),a&&e.is('[href="#'+a+'"]')?(this.close(),!0):void 0}}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},e[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(s.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[i.opened];r.blockUI&&l.push(i.blocking),"modal"==r.blockUI&&l.push(i.modal),r.moveBackground&&l.push(i.background),"left"!=r.position&&l.push(i.mm(this.opts[n].position)),"back"!=r.zposition&&l.push(i.mm(this.opts[n].zposition)),o.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(i.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),o.$html.addClass(i.opening)},e[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(i.opened);var a=[i.opened,i.blocking,i.modal,i.background,i.mm(t.opts[n].position),i.mm(t.opts[n].zposition)];o.$html.removeClass(a.join(" ")),o.$page.each(function(){e(this).attr("style",e(this).data(s.style))}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),o.$html.removeClass(i.opening),this.trigger("close:after")}},e[t].prototype.closeAllOthers=function(){o.$body.find("."+i.menu+"."+i.offcanvas).not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){this.trigger("setPage:before",t);var s=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||s.__getUniqueId())}),t.addClass(i.page+" "+i.slideout),o.$page=t,this.trigger("setPage:after",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){if(o.$html.hasClass(i.opened)&&9==e.keyCode)return e.preventDefault(),!1});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(i.opened))){var s=o.$wndw.height();(n||s!=e)&&(e=s,o.$page.css("minHeight",s))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+i.blocker+'" class="'+i.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(i.modal)||(t.closeAllOthers(),t.close())}))};var i,s,a,o}(jQuery),/*
   * jQuery mmenu scrollBugFix add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="scrollBugFix";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof s&&(s={fix:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.fix&&(this.bind("open:start",function(){this.$pnls.children("."+i.opened).scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+n]()})))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={fix:!0},e[t].prototype["_initWindow_"+n]=function(){var t=this;o.$docu.off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,function(e){o.$html.hasClass(i.opened)&&e.preventDefault()});var s=!1;o.$body.off(a.touchstart+"-"+n).on(a.touchstart+"-"+n,"."+i.panels+"> ."+i.panel,function(e){o.$html.hasClass(i.opened)&&(s||(s=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),s=!1))}).off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,"."+i.panels+"> ."+i.panel,function(t){o.$html.hasClass(i.opened)&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()}),o.$wndw.off(a.orientationchange+"-"+n).on(a.orientationchange+"-"+n,function(){t.$pnls.children("."+i.opened).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})};var i,s,a,o}(jQuery),/*
   * jQuery mmenu screenReader add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="screenReader";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n],l=this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={aria:r,text:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),r.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("open:finish",function(){this.trigger("open:finish:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+i.listview).children().each(function(){a.__sr_aria(e(this),"hidden",e(this).is("."+i.hidden))})}),this.bind("openPanel:start",function(e){var t=this.$menu.find("."+i.panel).not(e).not(e.parents("."+i.panel)),n=e.add(e.find("."+i.vertical+"."+i.opened).children("."+i.panel));this.__sr_aria(t,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(e){this.__sr_aria(e,"hidden",!0)}),this.bind("initPanels:after",function(t){var n=t.find("."+i.prev+", ."+i.next).each(function(){a.__sr_aria(e(this),"owns",e(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(e){var t=e.children("."+i.navbar);this.__sr_aria(t,"hidden",!e.hasClass(i.hasnavbar))}),r.text&&(this.bind("initlistview:after",function(e){var t=e.find("."+i.listview).find("."+i.fullsubopen).parent().children("span");this.__sr_aria(t,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(e){var t=e.children("."+i.navbar),n=!!t.children("."+i.prev).length;this.__sr_aria(t.children("."+i.title),"hidden",n)}))),r.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var s=n.children("."+i.navbar),a=s.children("."+i.title).text(),o=e[t].i18n(l.text.closeSubmenu);a&&(o+=" ("+a+")"),s.children("."+i.prev).html(this.__sr_text(o))}),this.bind("initListview:after",function(n){var o=n.data(s.parent);if(o&&o.length){var r=o.children("."+i.next),d=r.nextAll("span, a").first().text(),c=e[t].i18n(l.text[r.parent().is("."+i.vertical)?"toggleSubmenu":"openSubmenu"]);d&&(c+=" ("+d+")"),r.html(a.__sr_text(c))}}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("sronly")},clickAnchor:function(e,t){}},e[t].defaults[n]={aria:!0,text:!0},e[t].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},e[t].prototype.__sr_aria=function(e,t,n){e.prop("aria-"+t,n)[n?"attr":"removeAttr"]("aria-"+t,n)},e[t].prototype.__sr_text=function(e){return'<span class="'+i.sronly+'">'+e+"</span>"};var i,s,a,o}(jQuery),/*
   * jQuery mmenu autoHeight add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="autoHeight";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof s&&s&&(s={height:"auto"}),"string"==typeof s&&(s={height:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),"auto"==s.height||"highest"==s.height){this.bind("initMenu:after",function(){this.$menu.addClass(i.autoheight)});var a=function(t){if(!this.opts.offCanvas||this.vars.opened){var n=Math.max(parseInt(this.$pnls.css("top"),10),0)||0,a=Math.max(parseInt(this.$pnls.css("bottom"),10),0)||0,o=0;this.$menu.addClass(i.measureheight),"auto"==s.height?(t=t||this.$pnls.children("."+i.opened),t.is("."+i.vertical)&&(t=t.parents("."+i.panel).not("."+i.vertical)),t.length||(t=this.$pnls.children("."+i.panel)),o=t.first().outerHeight()):"highest"==s.height&&this.$pnls.children().each(function(){var t=e(this);t.is("."+i.vertical)&&(t=t.parents("."+i.panel).not("."+i.vertical).first()),o=Math.max(o,t.outerHeight())}),this.$menu.height(o+n+a).removeClass(i.measureheight)}};this.opts.offCanvas&&this.bind("open:start",a),"highest"==s.height&&this.bind("initPanels:after",a),"auto"==s.height&&(this.bind("updateListview",a),this.bind("openPanel:start",a),this.bind("closePanel",a))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(e,t){}},e[t].defaults[n]={height:"default"};var i,s,a,o}(jQuery),/*
   * jQuery mmenu backButton add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="backButton";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var s=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={close:a}),"object"!=typeof a&&(a={}),a=e.extend(!0,{},e[t].defaults[n],a),a.close){var r="#"+s.$menu.attr("id");this.bind("open:finish",function(e){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){o.$html.hasClass(i.opened)?(e.stopPropagation(),s.close()):location.hash==r&&(e.stopPropagation(),s.open())})}}},add:function(){return window.history&&window.history.pushState?(i=e[t]._c,s=e[t]._d,void(a=e[t]._e)):void(e[t].addons[n].setup=function(){})},clickAnchor:function(e,t){}},e[t].defaults[n]={close:!1};var i,s,a,o}(jQuery),/*
   * jQuery mmenu counters add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="counters";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,update:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initListview:after",function(t){this.__refactorClass(e("em",t),this.conf.classNames[n].counter,"counter")}),r.add&&this.bind("initListview:after",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.each(function(){var t=e(this).data(s.parent);t&&(t.children("em."+i.counter).length||t.prepend(e('<em class="'+i.counter+'" />')))})}),r.update){var l=function(t){t=t||this.$pnls.children("."+i.panel),t.each(function(){var t=e(this),n=t.data(s.parent);if(n){var o=n.children("em."+i.counter);o.length&&(t=t.children("."+i.listview),t.length&&o.html(a.__filterListItems(t.children()).length))}})};this.bind("initListview:after",l),this.bind("updateListview",l)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("counter search noresultsmsg")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,addTo:"panels",count:!1},e[t].configuration.classNames[n]={counter:"Counter"};var i,s,a,o}(jQuery),/*
   * jQuery mmenu columns add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="columns";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof s&&(s={add:s}),"number"==typeof s&&(s={add:!0,visible:s}),"object"!=typeof s&&(s={}),"number"==typeof s.visible&&(s.visible={min:s.visible,max:s.visible}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.add){s.visible.min=Math.max(1,Math.min(6,s.visible.min)),s.visible.max=Math.max(s.visible.min,Math.min(6,s.visible.max));for(var a=this.opts.offCanvas?this.$menu.add(o.$html):this.$menu,r="",l=0;l<=s.visible.max;l++)r+=" "+i.columns+"-"+l;r.length&&(r=r.slice(1));var d=function(e){var t=this.$pnls.children("."+i.subopened).length;e&&!e.hasClass(i.subopened)&&t++,t=Math.min(s.visible.max,Math.max(s.visible.min,t)),a.removeClass(r).addClass(i.columns+"-"+t)},c=function(t){t=t||this.$pnls.children("."+i.opened),this.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).add(t).slice(-s.visible.max).each(function(t){e(this).addClass(i.columns+"-"+t)})};this.bind("initMenu:after",function(){this.$menu.addClass(i.columns)}),this.bind("openPanel:start",d),this.bind("openPanel:start",c)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("columns")},clickAnchor:function(t,s){if(!this.opts[n].add)return!1;if(s){var a=t.attr("href");if(a.length>1&&"#"==a.slice(0,1))try{var o=e(a,this.$menu);if(o.is("."+i.panel))for(var r=parseInt(t.closest("."+i.panel).attr("class").split(i.columns+"-")[1].split(" ")[0],10)+1;r>0;){var l=this.$pnls.children("."+i.columns+"-"+r);if(!l.length){r=-1;break}r++,l.removeClass(i.subopened).removeClass(i.opened).removeClass(i.highest).addClass(i.hidden)}}catch(d){}}}},e[t].defaults[n]={add:!1,visible:{min:1,max:3}};var i,s,a,o}(jQuery),/*
   * jQuery mmenu dividers add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="dividers";e[t].addons[n]={setup:function(){var s=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,fixed:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initListview:after",function(e){this.__refactorClass(e.find("li"),this.conf.classNames[n].collapsed,"collapsed")}),r.add&&this.bind("initListview:after",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.length&&n.find("."+i.listview).find("."+i.divider).remove().end().each(function(){var t="";s.__filterListItems(e(this).children()).each(function(){var n=e.trim(e(this).children("a, span").text()).slice(0,1).toLowerCase();n!=t&&n.length&&(t=n,e('<li class="'+i.divider+'">'+n+"</li>").insertBefore(this))})})}),r.collapse&&this.bind("initListview:after",function(t){t.find("."+i.divider).each(function(){var t=e(this),n=t.nextUntil("."+i.divider,"."+i.collapsed);n.length&&(t.children("."+i.next).length||(t.wrapInner("<span />"),t.prepend('<a href="#" class="'+i.next+" "+i.fullsubopen+'" />')))})}),r.fixed){this.bind("initPanels:after",function(){"undefined"==typeof this.$fixeddivider&&(this.$fixeddivider=e('<ul class="'+i.listview+" "+i.fixeddivider+'"><li class="'+i.divider+'"></li></ul>').prependTo(this.$pnls).children())});var l=function(t){if(t=t||this.$pnls.children("."+i.opened),!t.is(":hidden")){var n=t.children("."+i.listview).children("."+i.divider).not("."+i.hidden),s=t.scrollTop()||0,a="";n.each(function(){e(this).position().top+s<s+1&&(a=e(this).text())}),this.$fixeddivider.text(a),this.$pnls[a.length?"addClass":"removeClass"](i.hasdividers)}};this.bind("open:start",l),this.bind("openPanel:start",l),this.bind("updateListview",l),this.bind("initPanel:after",function(e){e.off(a.scroll+"-"+n+" "+a.touchmove+"-"+n).on(a.scroll+"-"+n+" "+a.touchmove+"-"+n,function(t){l.call(s,e)})})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("collapsed uncollapsed fixeddivider hasdividers"),a.add("scroll")},clickAnchor:function(e,t){if(this.opts[n].collapse&&t){var s=e.parent();if(s.is("."+i.divider)){var a=s.nextUntil("."+i.divider,"."+i.collapsed);return s.toggleClass(i.opened),a[s.hasClass(i.opened)?"addClass":"removeClass"](i.uncollapsed),!0}}return!1}},e[t].defaults[n]={add:!1,addTo:"panels",fixed:!1,collapse:!1},e[t].configuration.classNames[n]={collapsed:"Collapsed"};var i,s,a,o}(jQuery),/*
   * jQuery mmenu drag add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){function t(e,t,n){return e<t&&(e=t),e>n&&(e=n),e}function n(n,i,s){var r,l,d,c=this,h={events:"panleft panright",typeLower:"x",typeUpper:"X",open_dir:"right",close_dir:"left",negative:!1},f="width",u=h.open_dir,p=function(e){e<=n.maxStartPos&&(m=1)},v=function(){return e("."+o.slideout)},m=0,b=0,g=0;switch(this.opts.offCanvas.position){case"top":case"bottom":h.events="panup pandown",h.typeLower="y",h.typeUpper="Y",f="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":h.negative=!0,p=function(e){e>=s.$wndw[f]()-n.maxStartPos&&(m=1)}}switch(this.opts.offCanvas.position){case"left":break;case"right":h.open_dir="left",h.close_dir="right";break;case"top":h.open_dir="down",h.close_dir="up";break;case"bottom":h.open_dir="up",h.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":v=function(){return this.$menu}}var _=this.__valueOrFn(n.node,this.$menu,s.$page);"string"==typeof _&&(_=e(_));var y=new Hammer(_[0],this.opts[a].vendors.hammer);y.on("panstart",function(e){p(e.center[h.typeLower]),s.$slideOutNodes=v(),u=h.open_dir}),y.on(h.events+" panend",function(e){m>0&&e.preventDefault()}),y.on(h.events,function(e){if(r=e["delta"+h.typeUpper],h.negative&&(r=-r),r!=b&&(u=r>=b?h.open_dir:h.close_dir),b=r,b>n.threshold&&1==m){if(s.$html.hasClass(o.opened))return;m=2,c._openSetup(),c.trigger("open:start"),s.$html.addClass(o.dragging),g=t(s.$wndw[f]()*i[f].perc,i[f].min,i[f].max)}2==m&&(l=t(b,10,g)-("front"==c.opts.offCanvas.zposition?g:0),h.negative&&(l=-l),d="translate"+h.typeUpper+"("+l+"px )",s.$slideOutNodes.css({"-webkit-transform":"-webkit-"+d,transform:d}))}),y.on("panend",function(e){2==m&&(s.$html.removeClass(o.dragging),s.$slideOutNodes.css("transform",""),c[u==h.open_dir?"_openFinish":"close"]()),m=0})}function i(e,t,n,i){var s=this,l=e.data(r.parent);if(l){l=l.closest("."+o.panel);var d=new Hammer(e[0],s.opts[a].vendors.hammer),c=null;d.on("panright",function(e){c||(s.openPanel(l),c=setTimeout(function(){clearTimeout(c),c=null},s.conf.openingInterval+s.conf.transitionDuration))})}}var s="mmenu",a="drag";e[s].addons[a]={setup:function(){if(this.opts.offCanvas){var t=this.opts[a],o=this.conf[a];d=e[s].glbl,"boolean"==typeof t&&(t={menu:t,panels:t}),"object"!=typeof t&&(t={}),"boolean"==typeof t.menu&&(t.menu={open:t.menu}),"object"!=typeof t.menu&&(t.menu={}),"boolean"==typeof t.panels&&(t.panels={close:t.panels}),"object"!=typeof t.panels&&(t.panels={}),t=this.opts[a]=e.extend(!0,{},e[s].defaults[a],t),t.menu.open&&this.bind("setPage:after",function(){n.call(this,t.menu,o.menu,d)}),t.panels.close&&this.bind("initPanel:after",function(e){i.call(this,e,t.panels,o.panels,d)})}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?(e[s].addons[a].add=function(){},void(e[s].addons[a].setup=function(){})):(o=e[s]._c,r=e[s]._d,l=e[s]._e,void o.add("dragging"))},clickAnchor:function(e,t){}},e[s].defaults[a]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},e[s].configuration[a]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}};var o,r,l,d}(jQuery),/*
   * jQuery mmenu dropdown add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="dropdown";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var r=this,l=this.opts[n],d=this.conf[n];if(o=e[t].glbl,"boolean"==typeof l&&l&&(l={drop:l}),"object"!=typeof l&&(l={}),"string"==typeof l.position&&(l.position={of:l.position}),l=this.opts[n]=e.extend(!0,{},e[t].defaults[n],l),l.drop){var c;this.bind("initMenu:after",function(){if(this.$menu.addClass(i.dropdown),l.tip&&this.$menu.addClass(i.tip),"string"!=typeof l.position.of){var t=this._getOriginalMenuId();t&&t.length&&(l.position.of='[href="#'+t+'"]')}"string"==typeof l.position.of&&(c=e(l.position.of),l.event=l.event.split(" "),1==l.event.length&&(l.event[1]=l.event[0]),"hover"==l.event[0]&&c.on(a.mouseenter+"-"+n,function(){r.open()}),"hover"==l.event[1]&&this.$menu.on(a.mouseleave+"-"+n,function(){r.close()}))}),this.bind("open:start",function(){this.$menu.data(s.style,this.$menu.attr("style")||""),o.$html.addClass(i.dropdown)}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(s.style)),o.$html.removeClass(i.dropdown)});var h=function(e,t){var n=t[0],s=t[1],a="x"==e?"scrollLeft":"scrollTop",r="x"==e?"outerWidth":"outerHeight",h="x"==e?"left":"top",f="x"==e?"right":"bottom",u="x"==e?"width":"height",p="x"==e?"maxWidth":"maxHeight",v=null,m=o.$wndw[a](),b=c.offset()[h]-=m,g=b+c[r](),_=o.$wndw[u](),y=d.offset.button[e]+d.offset.viewport[e];if(l.position[e])switch(l.position[e]){case"left":case"bottom":v="after";break;case"right":case"top":v="before"}null===v&&(v=b+(g-b)/2<_/2?"after":"before");var C,w;return"after"==v?(C="x"==e?b:g,w=_-(C+y),n[h]=C+d.offset.button[e],n[f]="auto",s.push(i["x"==e?"tipleft":"tiptop"])):(C="x"==e?g:b,w=C-y,n[f]="calc( 100% - "+(C-d.offset.button[e])+"px )",n[h]="auto",s.push(i["x"==e?"tipright":"tipbottom"])),n[p]=Math.min(d[u].max,w),[n,s]},f=function(e){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(s.style));var t=[{},[]];t=h.call(this,"y",t),t=h.call(this,"x",t),this.$menu.css(t[0]),l.tip&&this.$menu.removeClass(i.tipleft+" "+i.tipright+" "+i.tiptop+" "+i.tipbottom).addClass(t[1].join(" "))}};this.bind("open:start",f),o.$wndw.on(a.resize+"-"+n,function(e){f.call(r)}),this.opts.offCanvas.blockUI||o.$wndw.on(a.scroll+"-"+n,function(e){f.call(r)})}}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("dropdown tip tipleft tipright tiptop tipbottom"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(e,t){}},e[t].defaults[n]={drop:!1,event:"click",position:{},tip:!0},e[t].configuration[n]={offset:{button:{x:-10,y:10},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var i,s,a,o}(jQuery),/*
   * jQuery mmenu fixedElements add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="fixedElements";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var s=(this.opts[n],this.conf[n]);o=e[t].glbl;var a=function(t){var a=this.conf.classNames[n].fixed,r=t.find("."+a);this.__refactorClass(r,a,"slideout"),r[s.elemInsertMethod](s.elemInsertSelector);var l=this.conf.classNames[n].sticky,d=t.find("."+l);this.__refactorClass(d,l,"sticky"),d=t.find("."+i.sticky),d.length&&(this.bind("open:before",function(){var t=o.$wndw.scrollTop()+s.sticky.offset;d.each(function(){e(this).css("top",parseInt(e(this).css("top"),10)+t)})}),this.bind("close:finish",function(){d.css("top","")}))};this.bind("setPage:after",a)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("sticky")},clickAnchor:function(e,t){}},e[t].configuration[n]={sticky:{offset:0},elemInsertMethod:"appendTo",elemInsertSelector:"body"},e[t].configuration.classNames[n]={fixed:"Fixed",sticky:"Sticky"};var i,s,a,o}(jQuery),/*
   * jQuery mmenu iconPanels add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="iconPanels";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={add:a}),"number"==typeof a&&(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),a.visible++,a.add){for(var r="",l=0;l<=a.visible;l++)r+=" "+i.iconpanel+"-"+l;r.length&&(r=r.slice(1));var d=function(t){t.hasClass(i.vertical)||s.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).removeClass(i.hidden).add(t).not("."+i.vertical).slice(-a.visible).each(function(t){e(this).addClass(i.iconpanel+"-"+t)})};this.bind("initMenu:after",function(){this.$menu.addClass(i.iconpanel)}),this.bind("openPanel:start",d),this.bind("initPanels:after",function(e){d.call(s,s.$pnls.children("."+i.opened))}),this.bind("initListview:after",function(e){e.hasClass(i.vertical)||e.children("."+i.subblocker).length||e.prepend('<a href="#'+e.closest("."+i.panel).attr("id")+'" class="'+i.subblocker+'" />')})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("iconpanel subblocker")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,visible:3};var i,s,a,o}(jQuery),/*
   * jQuery mmenu keyboardNavigation add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){function t(t,n){t=t||this.$pnls.children("."+a.opened);var i=e(),s=this.$menu.children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar);s.find(d).filter(":focus").length||("default"==n&&(i=t.children("."+a.listview).find("a[href]").not("."+a.hidden),i.length||(i=t.find(d).not("."+a.hidden)),i.length||(i=s.find(d).not("."+a.hidden))),i.length||(i=this.$menu.children("."+a.tabstart)),i.first().focus())}function n(e){e||(e=this.$pnls.children("."+a.opened));var t=this.$pnls.children("."+a.panel),n=t.not(e);n.find(d).attr("tabindex",-1),e.find(d).attr("tabindex",0),e.find("."+a.mm("toggle")+", ."+a.mm("check")).attr("tabindex",-1),e.children("."+a.navbar).children("."+a.title).attr("tabindex",-1)}var i="mmenu",s="keyboardNavigation";e[i].addons[s]={setup:function(){if(!e[i].support.touch){var o=this.opts[s];this.conf[s];if(l=e[i].glbl,"boolean"!=typeof o&&"string"!=typeof o||(o={enable:o}),"object"!=typeof o&&(o={}),o=this.opts[s]=e.extend(!0,{},e[i].defaults[s],o),o.enable){var r=e('<button class="'+a.tabstart+'" tabindex="0" type="button" />'),d=e('<button class="'+a.tabend+'" tabindex="0" type="button" />');this.bind("initMenu:after",function(){o.enhance&&this.$menu.addClass(a.keyboardfocus),this["_initWindow_"+s](o.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(r).append(d).children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar).children("a."+a.title).attr("tabindex",-1)}),this.bind("open:start",function(){n.call(this)}),this.bind("open:finish",function(){t.call(this,null,o.enable)}),this.bind("openPanel:start",function(e){n.call(this,e)}),this.bind("openPanel:finish",function(e){t.call(this,e,o.enable)}),this.bind("initOpened:after",function(){this.__sr_aria(this.$menu.children("."+a.mm("tabstart")+", ."+a.mm("tabend")),"hidden",!0)})}}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e,a.add("tabstart tabend keyboardfocus"),r.add("focusin keydown")},clickAnchor:function(e,t){}},e[i].defaults[s]={enable:!1,enhance:!1},e[i].configuration[s]={},e[i].prototype["_initWindow_"+s]=function(t){l.$wndw.off(r.keydown+"-offCanvas"),l.$wndw.off(r.focusin+"-"+s).on(r.focusin+"-"+s,function(t){if(l.$html.hasClass(a.opened)){var n=e(t.target);n.is("."+a.tabend)&&n.parent().find("."+a.tabstart).focus()}}),l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){i.data("mmenu");if(n.is("input, textarea"));else switch(t.keyCode){case 13:(n.is(".mm-toggle")||n.is(".mm-check"))&&n.trigger(r.click);break;case 32:case 37:case 38:case 39:case 40:t.preventDefault()}}}),t&&l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){var s=i.data("mmenu");if(n.is("input, textarea"))switch(t.keyCode){case 27:n.val("")}else switch(t.keyCode){case 8:var r=n.closest("."+a.panel).data(o.parent);r&&r.length&&s.openPanel(r.closest("."+a.panel));break;case 27:i.hasClass(a.offcanvas)&&s.close()}}})};var a,o,r,l,d="input, select, textarea, button, label, a[href]"}(jQuery),/*
   * jQuery mmenu lazySubmenus add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="lazySubmenus";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof s&&(s={load:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.load&&(this.bind("initMenu:after",function(){this.$pnls.find("li").children(this.conf.panelNodetype).not("."+i.inset).not("."+i.nolistview).not("."+i.nopanel).addClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel)}),this.bind("initPanels:before",function(e){e=e||this.$pnls.children(this.conf.panelNodetype),this.__findAddBack(e,"."+i.lazysubmenu).not("."+i.lazysubmenu+" ."+i.lazysubmenu).removeClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel)}),this.bind("initOpened:before",function(){var e=this.$pnls.find("."+this.conf.classNames.selected).parents("."+i.lazysubmenu);e.length&&(e.removeClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel),this.initPanels(e.last()))}),this.bind("openPanel:before",function(e){var t=this.__findAddBack(e,"."+i.lazysubmenu).not("."+i.lazysubmenu+" ."+i.lazysubmenu);t.length&&this.initPanels(t)}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("lazysubmenu"),s.add("lazysubmenu")},clickAnchor:function(e,t){}},e[t].defaults[n]={load:!1},e[t].configuration[n]={};var i,s,a,o}(jQuery),/*
   * jQuery mmenu navbar add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n],r=this.conf[n];if(o=e[t].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var l={},d={};a.length&&(e.each(a,function(o){var c=a[o];"boolean"==typeof c&&c&&(c={}),"object"!=typeof c&&(c={}),"undefined"==typeof c.content&&(c.content=["prev","title"]),c.content instanceof Array||(c.content=[c.content]),c=e.extend(!0,{},s.opts.navbar,c);var h=e('<div class="'+i.navbar+'" />'),f=c.height;"number"!=typeof f&&(f=1),f=Math.min(4,Math.max(1,f)),h.addClass(i.navbar+"-size-"+f);var u=c.position;"bottom"!=u&&(u="top"),l[u]||(l[u]=0),l[u]+=f,d[u]||(d[u]=e('<div class="'+i.navbars+"-"+u+'" />')),d[u].append(h);for(var p=0,v=0,m=c.content.length;v<m;v++){var b=e[t].addons[n][c.content[v]]||!1;b?p+=b.call(s,h,c,r):(b=c.content[v],b instanceof e||(b=e(c.content[v])),h.append(b))}p+=Math.ceil(h.children().not("."+i.btn).length/f),p>1&&h.addClass(i.navbar+"-content-"+p),h.children("."+i.btn).length&&h.addClass(i.hasbtns)}),this.bind("initMenu:after",function(){for(var e in l)this.$menu.addClass(i.hasnavbar+"-"+e+"-"+l[e]),this.$menu["bottom"==e?"append":"prepend"](d[e])}))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("navbars close hasbtns")},clickAnchor:function(e,t){}},e[t].configuration[n]={breadcrumbSeparator:"/"},e[t].configuration.classNames[n]={};var i,s,a,o}(jQuery),/*
   * jQuery mmenu navbar add-on breadcrumbs content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",i="breadcrumbs";e[t].addons[n][i]=function(n,i,s){var a=this,o=e[t]._c,r=e[t]._d;o.add("breadcrumbs separator");var l=e('<span class="'+o.breadcrumbs+'" />').appendTo(n);return this.bind("initNavbar:after",function(t){t.removeClass(o.hasnavbar);for(var n=[],i=e('<span class="'+o.breadcrumbs+'"></span>'),a=t,l=!0;a&&a.length;){if(a.is("."+o.panel)||(a=a.closest("."+o.panel)),!a.hasClass(o.vertical)){var d=a.children("."+o.navbar).children("."+o.title).text();n.unshift(l?"<span>"+d+"</span>":'<a href="#'+a.attr("id")+'">'+d+"</a>"),l=!1}a=a.data(r.parent)}i.append(n.join('<span class="'+o.separator+'">'+s.breadcrumbSeparator+"</span>")).appendTo(t.children("."+o.navbar))}),this.bind("openPanel:start",function(e){l.html(e.children("."+o.navbar).children("."+o.breadcrumbs).html()||"")}),this.bind("initNavbar:after:sr-aria",function(t){t.children("."+o.navbar).children("."+o.breadcrumbs).children("a").each(function(){a.__sr_aria(e(this),"owns",e(this).attr("href").slice(1))})}),0}}(jQuery),/*
   * jQuery mmenu navbar add-on close content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",i="close";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=(e[t].glbl,e('<a class="'+s.close+" "+s.btn+'" href="#" />').appendTo(n));return this.bind("setPage:after",function(e){a.attr("href","#"+e.attr("id"))}),this.bind("setPage:after:sr-text",function(n){a.html(this.__sr_text(e[t].i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(a,"owns",a.attr("href").slice(1))}),-1}}(jQuery),/*
   * jQuery mmenu navbar add-on next content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",i="next";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.next+" "+l.btn+'" href="#" />').appendTo(i);return this.bind("openPanel:start",function(e){a=e.find("."+this.conf.classNames[n].panelNext),o=a.attr("href"),r=a.html(),o?d.attr("href",o):d.removeAttr("href"),d[o||r?"removeClass":"addClass"](l.hidden),d.html(r)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(d,"hidden",d.hasClass(l.hidden)),this.__sr_aria(d,"owns",(d.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelNext="Next"}(jQuery),/*
   * jQuery mmenu navbar add-on prev content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",i="prev";e[t].addons[n][i]=function(i,s){var a=e[t]._c,o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(i);this.bind("initNavbar:after",function(e){e.removeClass(a.hasnavbar)});var r,l,d;return this.bind("openPanel:start",function(e){e.hasClass(a.vertical)||(r=e.find("."+this.conf.classNames[n].panelPrev),r.length||(r=e.children("."+a.navbar).children("."+a.prev)),l=r.attr("href"),d=r.html(),l?o.attr("href",l):o.removeAttr("href"),o[l||d?"removeClass":"addClass"](a.hidden),o.html(d))}),this.bind("initNavbar:after:sr-aria",function(e){var t=e.children("."+a.navbar);this.__sr_aria(t,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(o,"hidden",o.hasClass(a.hidden)),this.__sr_aria(o,"owns",(o.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelPrev="Prev"}(jQuery),/*
   * jQuery mmenu navbar add-on searchfield content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",i="searchfield";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=e('<div class="'+s.search+'" />').appendTo(n);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=a,0}}(jQuery),/*
   * jQuery mmenu navbar add-on title content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",i="title";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.title+'" />').appendTo(i);this.bind("openPanel:start",function(e){e.hasClass(l.vertical)||(r=e.find("."+this.conf.classNames[n].panelTitle),r.length||(r=e.children("."+l.navbar).children("."+l.title)),a=r.attr("href"),o=r.html()||s.title,a?d.attr("href",a):d.removeAttr("href"),d[a||o?"removeClass":"addClass"](l.hidden),d.html(o))});var c;return this.bind("openPanel:start:sr-aria",function(e){if(this.opts.screenReader.text&&(c||(c=this.$menu.children("."+l.navbars+"-top, ."+l.navbars+"-bottom").children("."+l.navbar).children("."+l.prev)),c.length)){var t=!0;"parent"==this.opts.navbar.titleLink&&(t=!c.hasClass(l.hidden)),this.__sr_aria(d,"hidden",t)}}),0},e[t].configuration.classNames[n].panelTitle="Title"}(jQuery),/*
   * jQuery mmenu pageScroll add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){function t(e){d&&d.length&&d.is(":visible")&&l.$html.add(l.$body).animate({scrollTop:d.offset().top+e}),d=!1}function n(e){try{return!("#"==e||"#"!=e.slice(0,1)||!l.$page.find(e).length)}catch(t){return!1}}var i="mmenu",s="pageScroll";e[i].addons[s]={setup:function(){var o=this,d=this.opts[s],c=this.conf[s];if(l=e[i].glbl,"boolean"==typeof d&&(d={scroll:d}),d=this.opts[s]=e.extend(!0,{},e[i].defaults[s],d),d.scroll&&this.bind("close:finish",function(){t(c.scrollOffset)}),d.update){var o=this,h=[],f=[];o.bind("initListview:after",function(t){o.__filterListItemAnchors(t.find("."+a.listview).children("li")).each(function(){var t=e(this).attr("href");n(t)&&h.push(t)}),f=h.reverse()});var u=-1;l.$wndw.on(r.scroll+"-"+s,function(t){for(var n=l.$wndw.scrollTop(),i=0;i<f.length;i++)if(e(f[i]).offset().top<n+c.updateOffset){u!==i&&(u=i,o.setSelected(o.__filterListItemAnchors(o.$pnls.children("."+a.opened).find("."+a.listview).children("li")).filter('[href="'+f[i]+'"]').parent()));break}})}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e},clickAnchor:function(i,o){if(d=!1,o&&this.opts[s].scroll&&this.opts.offCanvas&&l.$page&&l.$page.length){var r=i.attr("href");n(r)&&(d=e(r),l.$html.hasClass(a.mm("widescreen"))&&t(this.conf[s].scrollOffset))}}},e[i].defaults[s]={scroll:!1,update:!1},e[i].configuration[s]={scrollOffset:0,updateOffset:50};var a,o,r,l,d=!1}(jQuery),/*
   * jQuery mmenu RTL add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="rtl";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,"object"!=typeof s&&(s={use:s}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),"boolean"!=typeof s.use&&(s.use="rtl"==(o.$html.attr("dir")||"").toLowerCase()),s.use&&this.bind("initMenu:after",function(){this.$menu.addClass(i.rtl)})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("rtl")},clickAnchor:function(e,t){}},e[t].defaults[n]={use:"detect"};var i,s,a,o}(jQuery),/*
   * jQuery mmenu searchfield add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){function t(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var n="mmenu",i="searchfield";e[n].addons[i]={setup:function(){var l=this,d=this.opts[i],c=this.conf[i];r=e[n].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),"boolean"==typeof d.resultsPanel&&(d.resultsPanel={add:d.resultsPanel}),d=this.opts[i]=e.extend(!0,{},e[n].defaults[i],d),c=this.conf[i]=e.extend(!0,{},e[n].configuration[i],c),this.bind("close:start",function(){this.$menu.find("."+s.search).find("input").blur()}),this.bind("initPanels:after",function(r){if(d.add){var h;switch(d.addTo){case"panels":h=r;break;default:h=this.$menu.find(d.addTo)}if(h.each(function(){var t=e(this);if(!t.is("."+s.panel)||!t.is("."+s.vertical)){if(!t.children("."+s.search).length){var i=l.__valueOrFn(c.clear,t),a=l.__valueOrFn(c.form,t),r=l.__valueOrFn(c.input,t),h=l.__valueOrFn(c.submit,t),f=e("<"+(a?"form":"div")+' class="'+s.search+'" />'),u=e('<input placeholder="'+e[n].i18n(d.placeholder)+'" type="text" autocomplete="off" />');f.append(u);var p;if(r)for(p in r)u.attr(p,r[p]);if(i&&e('<a class="'+s.btn+" "+s.clear+'" href="#" />').appendTo(f).on(o.click+"-searchfield",function(e){e.preventDefault(),u.val("").trigger(o.keyup+"-searchfield")}),a){for(p in a)f.attr(p,a[p]);h&&!i&&e('<a class="'+s.btn+" "+s.next+'" href="#" />').appendTo(f).on(o.click+"-searchfield",function(e){e.preventDefault(),f.submit()})}t.hasClass(s.search)?t.replaceWith(f):t.prepend(f).addClass(s.hassearch)}if(d.noResults){var v=t.closest("."+s.panel).length;if(v||(t=l.$pnls.children("."+s.panel).first()),!t.children("."+s.noresultsmsg).length){var m=t.children("."+s.listview).first(),b=e('<div class="'+s.noresultsmsg+" "+s.hidden+'" />');b.append(e[n].i18n(d.noResults))[m.length?"insertAfter":"prependTo"](m.length?m:t)}}}}),d.search){if(d.resultsPanel.add){d.showSubPanels=!1;var f=this.$pnls.children("."+s.resultspanel);f.length||(f=e('<div class="'+s.resultspanel+" "+s.noanimation+" "+s.hidden+'" />').appendTo(this.$pnls).append('<div class="'+s.navbar+" "+s.hidden+'"><a class="'+s.title+'">'+e[n].i18n(d.resultsPanel.title)+"</a></div>").append('<ul class="'+s.listview+'" />').append(this.$pnls.find("."+s.noresultsmsg).first().clone()),this._initPanel(f))}this.$menu.find("."+s.search).each(function(){var n,r,c=e(this),h=c.closest("."+s.panel).length;h?(n=c.closest("."+s.panel),r=n):(n=l.$pnls.find("."+s.panel),r=l.$menu),d.resultsPanel.add&&(n=n.not(f));var u=c.children("input"),p=l.__findAddBack(n,"."+s.listview).children("li"),v=p.filter("."+s.divider),m=l.__filterListItems(p),b="a",g=b+", span",_="",y=function(){var t=u.val().toLowerCase();if(t!=_){if(_=t,d.resultsPanel.add&&f.children("."+s.listview).empty(),n.scrollTop(0),m.add(v).addClass(s.hidden).find("."+s.fullsubopensearch).removeClass(s.fullsubopen+" "+s.fullsubopensearch),m.each(function(){var t=e(this),n=b;(d.showTextItems||d.showSubPanels&&t.find("."+s.next))&&(n=g);var i=t.data(a.searchtext)||t.children(n).not("."+s.next).text();i.toLowerCase().indexOf(_)>-1&&t.add(t.prevAll("."+s.divider).first()).removeClass(s.hidden)}),d.showSubPanels&&n.each(function(t){var n=e(this);l.__filterListItems(n.find("."+s.listview).children()).each(function(){var t=e(this),n=t.data(a.child);t.removeClass(s.nosubresults),n&&n.find("."+s.listview).children().removeClass(s.hidden)})}),d.resultsPanel.add)if(""===_)this.closeAllPanels(this.$pnls.children("."+s.subopened).last());else{var i=e();n.each(function(){var t=l.__filterListItems(e(this).find("."+s.listview).children()).not("."+s.hidden).clone(!0);t.length&&(d.resultsPanel.dividers&&(i=i.add('<li class="'+s.divider+'">'+e(this).children("."+s.navbar).children("."+s.title).text()+"</li>")),t.children("."+s.mm("toggle")+", ."+s.mm("check")).remove(),i=i.add(t))}),i.find("."+s.next).remove(),f.children("."+s.listview).append(i),this.openPanel(f)}else e(n.get().reverse()).each(function(t){var n=e(this),i=n.data(a.parent);i&&(l.__filterListItems(n.find("."+s.listview).children()).length?(i.hasClass(s.hidden)&&i.children("."+s.next).not("."+s.fullsubopen).addClass(s.fullsubopen).addClass(s.fullsubopensearch),i.removeClass(s.hidden).removeClass(s.nosubresults).prevAll("."+s.divider).first().removeClass(s.hidden)):h||((n.hasClass(s.opened)||n.hasClass(s.subopened))&&setTimeout(function(){l.openPanel(i.closest("."+s.panel))},(t+1)*(1.5*l.conf.openingInterval)),i.addClass(s.nosubresults)))});r.find("."+s.noresultsmsg)[m.not("."+s.hidden).length?"addClass":"removeClass"](s.hidden),this.trigger("updateListview")}};u.off(o.keyup+"-"+i+" "+o.change+"-"+i).on(o.keyup+"-"+i,function(e){t(e.keyCode)||y.call(l)}).on(o.change+"-"+i,function(e){y.call(l)});var C=c.children("."+s.btn);C.length&&u.on(o.keyup+"-"+i,function(e){C[u.val().length?"removeClass":"addClass"](s.hidden)}),u.trigger(o.keyup+"-"+i)})}}})},add:function(){s=e[n]._c,a=e[n]._d,o=e[n]._e,s.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"),a.add("searchtext"),o.add("change keyup")},clickAnchor:function(e,t){}},e[n].defaults[i]={add:!1,addTo:"panels",placeholder:"Search",noResults:"No results found.",resultsPanel:{add:!1,dividers:!0,title:"Search results"},search:!0,showTextItems:!1,showSubPanels:!0},e[n].configuration[i]={clear:!1,form:!1,input:!1,submit:!1};var s,a,o,r}(jQuery),/*
   * jQuery mmenu sectionIndexer add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="sectionIndexer";e[t].addons[n]={setup:function(){var s=this,r=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initPanels:after",function(t){if(r.add){var o;switch(r.addTo){case"panels":o=t;break;default:o=e(r.addTo,this.$menu).filter("."+i.panel)}o.find("."+i.divider).closest("."+i.panel).addClass(i.hasindexer),this.$indexer||(this.$indexer=e('<div class="'+i.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),this.$indexer.children().on(a.mouseover+"-"+n+" "+a.touchstart+"-"+n,function(t){var n=e(this).attr("href").slice(1),a=s.$pnls.children("."+i.opened),o=a.find("."+i.listview),r=-1,l=a.scrollTop();a.scrollTop(0),o.children("."+i.divider).not("."+i.hidden).each(function(){r<0&&n==e(this).text().slice(0,1).toLowerCase()&&(r=e(this).position().top)}),a.scrollTop(r>-1?r:l)}));var l=function(e){e=e||this.$pnls.children("."+i.opened),this.$menu[(e.hasClass(i.hasindexer)?"add":"remove")+"Class"](i.hasindexer)};this.bind("openPanel:start",l),this.bind("initPanels:after",l)}})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("indexer hasindexer"),a.add("mouseover")},clickAnchor:function(e,t){if(e.parent().is("."+i.indexer))return!0}},e[t].defaults[n]={add:!1,addTo:"panels"};var i,s,a,o}(jQuery),/*
   * jQuery mmenu setSelected add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="setSelected";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={hover:r,parent:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),"detect"==r.current){var l=function(e){e=e.split("?")[0].split("#")[0];var t=a.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');t.length?a.setSelected(t.parent(),!0):(e=e.split("/").slice(0,-1),e.length&&l(e.join("/")))};this.bind("initMenu:after",function(){l(window.location.href)})}else r.current||this.bind("initListview:after",function(e){this.$pnls.find("."+i.listview).children("."+i.selected).removeClass(i.selected)});r.hover&&this.bind("initMenu:after",function(){this.$menu.addClass(i.hoverselected)}),r.parent&&(this.bind("openPanel:finish",function(e){this.$pnls.find("."+i.listview).find("."+i.next).removeClass(i.selected);for(var t=e.data(s.parent);t;)t.not("."+i.vertical).children("."+i.next).addClass(i.selected),t=t.closest("."+i.panel).data(s.parent)}),this.bind("initMenu:after",function(){this.$menu.addClass(i.parentselected)}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("hoverselected parentselected")},clickAnchor:function(e,t){}},e[t].defaults[n]={current:!0,hover:!1,parent:!1};var i,s,a,o}(jQuery),/*
   * jQuery mmenu toggles add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="toggles";e[t].addons[n]={setup:function(){var s=this;this.opts[n],this.conf[n];o=e[t].glbl,this.bind("initListview:after",function(t){this.__refactorClass(t.find("input"),this.conf.classNames[n].toggle,"toggle"),this.__refactorClass(t.find("input"),this.conf.classNames[n].check,"check"),t.find("input."+i.toggle+", input."+i.check).each(function(){var t=e(this),n=t.closest("li"),a=t.hasClass(i.toggle)?"toggle":"check",o=t.attr("id")||s.__getUniqueId();n.children('label[for="'+o+'"]').length||(t.attr("id",o),n.prepend(t),e('<label for="'+o+'" class="'+i[a]+'"></label>').insertBefore(n.children("a, span").last()))})})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("toggle check")},clickAnchor:function(e,t){}},e[t].configuration.classNames[n]={toggle:"Toggle",check:"Check"};var i,s,a,o}(jQuery);
  return true;
  }));


function isPassive() {
	var supportsPassiveOption = false;
	try {
		addEventListener("test", null, Object.defineProperty({}, 'passive', {
			get: function () {
				supportsPassiveOption = true;
			}
		}));
	} catch (e) {}
	return supportsPassiveOption;
}

(function (e) {
	e.fn.mobile_menu = function (op) {
		
		op = jQuery.extend({
				slidingSubmenus: true,
				counters: true,
				navbartitle: "Menu",
				headerbox: ".menu_header",
				footerbox: ".menu_footer"
			},
			op || {});
		var nav = jQuery(this);
		nav.find(".current-menu-item").addClass("mm-selected");

			if(typeof ThemeOptionsMmenu!="undefined"){
				nav.mmenu(ThemeOptionsMmenu,{})
			}else{
				nav.mmenu({
					extensions: ["shadow-panels", "fx-panels-slide-100", "border-none", "fullscreen"],
					navbar: {
						title: "<span class=\"fa fa-bars\"></span>"+op.navbartitle
					},
					navbars: [{
						content: ["prev", "title", "close"]
					}],
					setSelected: true,
					searchfield: {
						resultsPanel: true
					}
				}, {});
			}

		nav.find('.mm-listview a[href="#"],.mm-listview a[href^="javascript:"]').on("click", function () {
			if (jQuery(this).siblings(".mm-next").length != 0) {
				jQuery(this).siblings(".mm-next").click();
				return false;
			}
		})

		if (nav.find("li").length == 0) {
			nav.find(".mm-navbars-top").hide();
		}

		nav.find('a[href*="#"]:not(.mm-btn):not(.mm-next):not(.mm-title):not(.mm-subblocker)').on("click", function () {
			
			if (jQuery(this.hash).length) {
				closeMobileMenu(jQuery(".mobile-menu-icon,.mobile_menu_close"));
			}
		})

		//  jQuery(".mm-close.mm-btn").on("click",function(){
		//     jQuery("html").removeClass("mobile_menu_show");
		//   })

		//var myScroll;

		nav.find(".mm-listview").each(function () {
			jQuery(this).wrap("<div class=\"panel-wrap\"></div>")
		})


		function bodyScroll(event) {
			event.preventDefault();
		}

		function closeMobileMenu(e) {
			jQuery("html").toggleClass("mobile_menu_show");
			e.children(".dg-menu-anime").toggleClass("active");
			if (jQuery("html").hasClass("mobile_menu_show")) {
				document.addEventListener('touchmove', bodyScroll, isPassive() ? {
					capture: false,
					passive: false
				} : false);
			} else {
				document.removeEventListener("touchmove", bodyScroll);
			}
		}


		jQuery(".mobile-menu-icon,.mobile_menu_close").on("click", function () {
			closeMobileMenu(jQuery(this));
		});

		nav.on("click", ".mm-close", function () {
			document.removeEventListener("touchmove", bodyScroll);
			jQuery("html").removeClass("mobile_menu_show");
			jQuery(".mobile-menu-icon,.mobile_menu_close").children(".dg-menu-anime").removeClass("active");
		});



		function toreturn() {
			(function (ns) {
				// holds all iScroll objects


				var _iScroll = [];

				// iScroll settings
				var _iScrollSettings = {
					mouseWheel: true,
					click: true
				}

				ns.init_iScroll = function (str) {
					var len = _iScroll.length;

					_iScroll.push(new IScroll(str, _iScrollSettings));
					_iScroll[len].on('scrollStart', function () {
						_isScrolling = true;
					});
					_iScroll[len].on('scrollEnd', function (e) {
						setTimeout(function () {
							_isScrolling = false;
						}, 500);
					});
				}

				ns.destroy_iScroll = function () {
					while (_iScroll.length != 0) {
						_iScroll[0].destroy();
						_iScroll[0] = null;
						_iScroll.splice(0, 1);
					}
				}



				jQuery(".panel-wrap").each(function (index) {
					jQuery(this).attr("id", "panel-wrap-" + index)
				})

				var api = jQuery(".mobile_menu").data("mmenu");

				ns.init_iScroll("#" + jQuery(".mobile_menu .mm-opened .panel-wrap").attr("id"))

				api.bind("openPanel:after", function ($panel) {
					ns.destroy_iScroll();
					ns.init_iScroll("#" + $panel.find(".panel-wrap").attr("id"))
				});


			})(this.app = this.app || {});

			var startx;
			var endx;
			var el = document.getElementsByClassName('mobile_menu')[0];

			function cons() {
				if (startx - 80 > endx) {}
				if (startx + 80 < endx) {
					jQuery(".mobile_menu .mm-hasbtns .mm-title").click();
				}
			}

			el.addEventListener('touchstart', function (e) {
				var touch = e.changedTouches;
				startx = touch[0].clientX;
				starty = touch[0].clientY;
				el.focus();

			});
			el.addEventListener('touchend', function (e) {
				var touch = e.changedTouches;
				endx = touch[0].clientX;
				endy = touch[0].clientY;
				cons();
				return false;
			});

		}

		if (jQuery(".mobile_menu li").length !== 0) {
				toreturn();
		}



	}
})(jQuery);




jQuery(document).ready(function ($) {
	$("#dng-megamenu").each(function () {
		var dnngomegamenu_default = {
			slide_speed: 200,
			delay_disappear: 500,
			popUp: "vertical",
			delay_show: 150,
			direction: "ltr",
			megamenuwidth: "box",
			WidthBoxClassName: $(this).parents(".container")
		};
		var e = $(this);
		for (var i in dnngomegamenu_default) {
			if (e.data(i) !== undefined) {
				dnngomegamenu_default[i] = e.data(i)
			} else {
				if (e.data(i.toLowerCase()) !== undefined) {
					dnngomegamenu_default[i] = e.data(i.toLowerCase())
				}
			}
		}
		e.dnngomegamenu(dnngomegamenu_default);
		e.find(".mega-menu").each(function () {
			if ($(this).attr("class").split("columns-")[1]) {
				var col = Math.min($(this).find(".boxslide > ul >li").length, $(this).attr("class").split("columns-")[1].substring(0, 1))
			}
			if (e.data("line") === "on") {
				var line = $('<div class="line"></div>');
				for (var i = 0; i < col; i++) {
					line.append("<span></span>")
				}
				$(this).find(".boxslide").append(line)
			}
		})
	});
	
	
	$(".dng-mobilemenu").each(function(){
		if(!$(this).parent(".overlay-menu").length){

			$(this).find(".dir.mm-selected").removeClass("mm-selected").parent().parent().addClass("mm-selected");

			var navbartitle =$(this).siblings(".mobile-menu-icon").data("navbartitle");

			$(this).mobile_menu({
				slidingSubmenus: true,
				counters: false,
				navbartitle: navbartitle?navbartitle:" ",
				headerbox: ".menu_header",
				footerbox: ".menu_footer"
			});
		}else{
			var e = $(this);
			var btn = e.parent().siblings(".overlay-button");
			var html = e.parent().siblings(".overlay-menu-html");
			var Ali = e.find('li.menu-item');
			var id =e.parent(".overlay-menu").data("id"); 
			e.find(".current-menu-item").addClass("mm-selected");
			e.removeClass("dng-mobilemenu mobile_menu").addClass("overlay-menu");
			
			e.mmenu({
				navbar: {
					title: false
				},
			}); 
			
			e.wrap('<div class="dng-overlay" id="dng-overlay'+id+'"></div>');
			e.parent().before('<div class="dng-overlay-reveal" id="dng-overlay-reveal'+id+'"></div>'); 
			e.find(".mm-listview").css({
				"max-height": $(window).height() - 60
			});
			$(window).resize(function () {
				e.find(".mm-listview").css({
					"max-height": $(window).height() - 60
				})
			});
			e.find('.mm-listview a[href="#"],.mm-listview a[href^="javascript:"]').on("click", function () {
				if (jQuery(this).siblings(".mm-next").length != 0) {
					jQuery(this).siblings(".mm-next").click();
					return false
				}
			});
			e.parent().append(html);
	
			function mmlistview() {
				e.find(".mm-opened > .mm-listview").addClass("visibility-hidden").each(function () {
					$(this).menuanimate({
						children: "li",
						class: "animatebottom",
						delay: 25,
						state: 'getin',
						CallBack: function () {
							e.siblings('.overlay-menu-html').menuanimate({
								children: ".widget",
								class: "animatebottom",
								delay: 50,
								state: 'getin'
							})
						}
					})
				})
			}
	
			btn.on("click", function () { 
				e.parent().addClass("loaded");
				e.find(".mm-opened").addClass("visibility-hidden");
				// $("body").addClass("overflow-hidden");
				btn.addClass("active");
				e.css("bottom", html.innerHeight());
				e.parent().toggleClass("active");
				e.stop().delay(400).queue(function () {
					if (e.find(".mm-opened .mm-navbar").length) {
						e.find(".mm-opened .mm-navbar").each(function () {
							$(this).menuanimate({
								children: ".mm-title",
								class: "animatebottom",
								delay: 25,
								state: 'getin',
								CallBack: function () {
									e.siblings(".overlay-close").toggleClass("active");
									mmlistview();
								}
							})
						})
					} else {
						e.siblings(".overlay-close").toggleClass("active");
						mmlistview();
					}
	
					e.dequeue();
				});	
			});
			e.parent().append('<div class="overlay-close"><span class="lnr lnr-cross"></span></div>');
			e.siblings(".overlay-close").on("click", function () {
				e.siblings(".overlay-close").removeClass("active");
	
				// $("body").removeClass("overflow-hidden");
	
				btn.removeClass("active");
				e.parent().removeClass("active");
	
				setTimeout(function () {
					e.parent().removeClass("animateleft");
					e.parent().find(".mm-title").removeClass("animatebottom");
					e.parent().find(".mm-listview li").removeClass("animatebottom");
					e.parent().find(".overlay-menu-html .widget").removeClass("animatebottom");
					e.parent().css("display", "block");
					e.find(".visibility-hidden").removeClass("visibility-hidden")
				}, 200);
	
				e.parent().siblings('.dng-overlay-reveal').fadeOut(0, function () {
					$(this).removeClass("animateleft");
					$(this).css("display", "block");
				})
	
			})
			

		}
	})

	$(".dng-mobilemenu").find("a[href='javascript:;']").on("click", function () {
		$(this).siblings(".mm-next").click()
	})

	
});

(function ($) {
	$.fn.menuanimate = function (options) {
		var defaults = {
			children: "li",
			class: "animatebottom",
			delay: 200,
			state: 'getin',
			CallBack: function () {}
		}
		var opts = $.extend(defaults, options);

		var e = $(this);

		if (opts.state == 'getin') {
			var item = e.children(opts.children).eq(0).addClass(opts.class);

			function addClass(e) {
				if (item.next(opts.children).length == 0) {
					clearTimeout(step);
					return opts.CallBack();
				}
				item = item.next(opts.children);
				item.addClass(opts.class);
			}
			var step = setInterval(function () {
				addClass(item)
			}, opts.delay);

		} else if (opts.state == 'getout') {
			var item = e.children(opts.children).eq(0).removeClass(opts.class);

			function removeClass(e) {
				if (item.next(opts.children).length == 0) {
					clearTimeout(step);
					return opts.CallBack();
				}
				item = item.next(opts.children);
				item.removeClass(opts.class);
			}
			var step = setInterval(function () {
				removeClass(item)
			}, opts.delay);
		}


	}
})(jQuery);


$(document).ready(function() { 
	$(".primary_structure").menusKeyboard();
})
