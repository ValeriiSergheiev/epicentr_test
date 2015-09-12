$(document).ready(function(){  

    $('.pagination ul li').click(function(){  
        $.ajax({  
            url: "http://eportal.com.ua/admin.php",
            cache: false,  
            dataType: "json";
            success: function(html){  
            $(".pagination").html(html);  
            }
        });  
    });

$('.pagination ul li').click(function(){
    $('.pagination p').text('rfrfrfrfr');
});

});  