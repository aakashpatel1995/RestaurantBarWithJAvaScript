"use strict";
$( document ).ready(function() {
    // create the slideshow object 
    var slideshow = createSlideshow();
    
    var slides = [
        {href:"in1.jpg", title:"Dinning Hall"}, 
        {href:"in2.jpg", title:"Party Hall"},
        {href:"in3.jpg", title:"Splendid Outside View!"},
        {href:"in4.jpg", title:"Royality Look"} 
       
    ];
    
   // $("#play_pause").click( slideshow.createToggleHandler() );  
    
    slideshow.loadImages(slides).startSlideShow( $("#image"), $("#caption") );
});