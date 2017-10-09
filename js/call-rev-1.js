var tpj=jQuery,			
revapi4;
tpj(document).ready(function() {
if (tpj(window).width() > 1024) {
	if(tpj("#rev_slider_4_1").revolution == undefined){
	revslider_showDoubleJqueryError("#rev_slider_4_1");
}else{
	revapi4 = tpj("#rev_slider_4_1").show().revolution({
		sliderType:"standard",
		jsFileLocation:"revolution/js/",
		sliderLayout:"fullscreen",
		dottedOverlay:"none",
		delay:9000,
		particles: {startSlide: "first", endSlide: "last", zIndex: "1",
			particles: {
				number: {value: 80}, color: {value: "#000000"},
				shape: {
					type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 0.01},
					image: {src: ""}
				},
				opacity: {value: 0.3, random: false, min: 0.01, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
				size: {value: 10, random: true, min: 1, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
				line_linked: {enable: true, distance: 200, color: "#000000", opacity: 0.01, width: 1},
				move: {enable: true, speed: 3, direction: "none", random: true, min_speed: 3, straight: false, out_mode: "out"}},
			interactivity: {
				events: {onhover: {enable: true, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
				modes: {grab: {distance: 400, line_linked: {opacity: 0.01}}, bubble: {distance: 400, size: 150, opacity: 0.01}, repulse: {distance: 200}}
			}
		},
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
				mouseScrollReverse:"default",
			onHoverStop:"off",
			arrows: {
				style:"gyges",
				enable:true,
				hide_onmobile:false,
				hide_onleave:false,
				tmp:'',
				left: {
					h_align:"center",
					v_align:"bottom",
					h_offset:-20,
					v_offset:0
				},
				right: {
					h_align:"center",
					v_align:"bottom",
					h_offset:20,
					v_offset:0
				}
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1240,1024,778,480],
		gridheight:[868,768,960,720],
		lazyType:"none",
		shadow:0,
		spinner:"off",
		stopLoop:"on",
		stopAfterLoops:0,
		stopAtSlide:1,
		shuffle:"off",
		autoHeight:"off",
		fullScreenAutoWidth:"off",
		fullScreenAlignForce:"off",
		fullScreenOffsetContainer: "",
		fullScreenOffset: "0",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
RsParticlesAddOn(revapi4);
}else{
	if(tpj("#rev_slider_4_1").revolution == undefined){
	revslider_showDoubleJqueryError("#rev_slider_4_1");
}else{
	revapi4 = tpj("#rev_slider_4_1").show().revolution({
		sliderType:"standard",
		jsFileLocation:"revolution/js/",
		sliderLayout:"fullscreen",
		dottedOverlay:"none",
		delay:9000,
		particles: {startSlide: "first", endSlide: "last", zIndex: "1",
			particles: {
				number: {value: 0}, color: {value: "#000000"},
				shape: {
					type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 0},
					image: {src: ""}
				},
				opacity: {value: 0, random: false, min: 0, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
				size: {value: 0, random: true, min: 1, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
				line_linked: {enable: false, distance: 0, color: "#000000", opacity: 0, width: 1},
				move: {enable: false, speed: 3, direction: "none", random: true, min_speed: 3, straight: false, out_mode: "out"}},
			interactivity: {
				events: {onhover: {enable: false, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
				modes: {grab: {distance: 0, line_linked: {opacity: 0}}, bubble: {distance: 0, size: 0, opacity: 0}, repulse: {distance: 0}}
			}
		},
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			mouseScrollReverse:"default",
			onHoverStop:"off",
			arrows: {
				style:"gyges",
				enable:true,
				hide_onmobile:false,
				hide_onleave:false,
				tmp:'',
				left: {
					h_align:"center",
					v_align:"bottom",
					h_offset:-20,
					v_offset:0
				},
				right: {
					h_align:"center",
					v_align:"bottom",
					h_offset:20,
					v_offset:0
				}
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1240,1024,778,480],
		gridheight:[868,768,960,720],
		lazyType:"none",
		shadow:0,
		spinner:"off",
		stopLoop:"on",
		stopAfterLoops:0,
		stopAtSlide:1,
		shuffle:"off",
		autoHeight:"off",
		fullScreenAutoWidth:"off",
		fullScreenAlignForce:"off",
		fullScreenOffsetContainer: "",
		fullScreenOffset: "0",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
RsParticlesAddOn(revapi4);
};
});	/*ready*/