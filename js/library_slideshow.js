"use strict";
var createSlideshow = function() {
    // private variables and functions
    var timer, play = true, speed = 5000;
    var nodes = { image: null, caption: null };
    var img = { cache: [], counter: 0 };
    
    var stopSlideShow = function() { clearInterval( timer ); };
    var displayNextImage = function() {
        img.counter = ++img.counter % img.cache.length;
        var image = img.cache[img.counter];
        nodes.image.attr("src", image.src);
        nodes.caption.text( image.title );
    };

    // public methods that have access to private variables and functions
    return {
        loadImages: function(slides) {
            var image;
            for ( var i = 0; i < slides.length; i++ ) {
                image = new Image();
                image.src = "images2/" + slides[i].href;
                image.title = slides[i].title;
                img.cache.push( image );
            }
            return this;
        },
        startSlideShow: function() {
            if (arguments.length === 2) { 
                nodes.image = arguments[0]; 
                nodes.caption = arguments[1];
            }
            timer = setInterval(displayNextImage, speed);
            return this;
        },
//        createToggleHandler: function() {
//            var me = this;       // store 'this', which is the object literal 
//            return function() {
//                // 'this' is the clicked button; 'me' is the object literal 
//                if ( play ) { stopSlideShow(); } else { me.startSlideShow(); }
//                this.value = (play) ? "Resume" : "Pause";
//                play = ! play;   // toggle play flag
//            };
//        }
    };
};
