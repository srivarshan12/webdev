
$(document).ready(function(){
    // Preloader
    preloaderFadeOutTime = 5000;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
        }
    hidePreloader();

// my work -filter
    $('.individuallinks').click(function(){
        const value=$(this).attr('data-filter');
        if(value=='all'){
            $('.itembox').show('2000');
        }
        else{
            $('.itembox').not('.'+value).hide('2000');
            $('.itembox').filter('.'+value).show('2000');

        }
    })
    
// mywork link
    $('.individuallinks').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

// navbar-link 
    $('.navitems-div').click(function(){
        $(this).addClass('active-navitems').siblings().removeClass('active-navitems');
    })

})