preloaderFadeOutTime = 2000;
function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }

window.addEventListener("load", event => {
    // var image = document.getElementById("initial");
    var image = document.querySelectorAll(".initial");
        
    // console.log(image);
    var isLoaded = image[0].complete && image[1].complete &&image[2].complete && image[3].complete && image[4].complete 
    &&image[5].complete && image[6].complete && image[7].complete  &&  image.naturalHeight !== 0;
    
    if(isLoaded==true){
        console.log("completed");
        hidePreloader();

    }
});

window.addEventListener("load", function(){

    
    $('.button').click(function(){
        $('.button').removeClass('active');
        $(this).addClass('active');

        var selector=$(this).attr('data-filter');
        console.log(selector)

        $('.middle').isotope({
            filter:selector  
        });
        
        console.log("hdsld"); 
        return false;
    });


    // $('.loadbutton').click(function(){
    //     $('.loadbutton').removeClass('active');
    //     $(this).css("display","none");
    
   
    //     var $newItems = $('<div class="item" /><div class="item" /><div class="item" />');
    //     $('.grid').append( $newItems ).isotope( 'addItems', $newItems );

    // })



// init Isotope
var initial_items = 8;
var next_items = 4; 
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    transitionDuration:1500,  
    // stamp: '.grid-item--static'
});
 

function showNextItems(pagination) {
    var itemsMax = $('.visible_item').length;
    var itemsCount = 0;
    $('.visible_item').each(function () {
        if (itemsCount < pagination) 
            { 
                $(this).removeClass('visible_item');
                itemsCount++;
            } 
        });
        if (itemsCount >= itemsMax) 
        {
            $('.gallery-icon').css("display","none");
            $('.loadbutton').html('THATS ALL <span class="alert-icon"><i class="fas fa-exclamation-triangle"></i></span> ' );
            console.log("gallery icon changed to alert icon ");    
         }
    $grid.isotope('layout');
}


// function that hides items when page is loaded
function hideItems(pagination) {
    var itemsMax = $('.grid-item').length;
    var itemsCount = 0;
    $('.grid-item').each(function () {
        if (itemsCount >= pagination) {
            $(this).addClass('visible_item');
        }
        itemsCount++;
    });
    if (itemsCount < itemsMax || initial_items >= itemsMax) {
        $('.gallery-icon').css("display","none");
        $('.loadbutton').html('THATS ALL <span class="alert-icon"><i class="fas fa-exclamation-triangle"></i></span> ' );
        console.log("gallery icon changed to alert icon ");

    }
    $grid.isotope('layout');
}

$('.loadbutton').on('click', function (e) {
    e.preventDefault();
    showNextItems(next_items);
});
hideItems(initial_items);


})