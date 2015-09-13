$(document).ready(function(){  
  
    $('.menu ul li').click(function(){
        $('.menu ul li').removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $('.circles').click(function(){
        $('.circles-click').removeClass('circles-click');
        $(this).addClass('circles-click');
        
        $.get( "/epik.json", function( data ) {
            var data=JSON.parse(data);
            console.log(data[8].DESCRIPTION);
        });

    });
});  