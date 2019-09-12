var mainmenu = {
    loadmenu : function(){
        $('.goto_createuser').on('click', function(){
            $('#content_front').hide(); 
            $('#content_front_register').show();
        });
        
        $('.goto_login').on('click', function(){
            $('#content_front').show(); 
            $('#content_front_register').hide();
        })
        
        $('#menu1').on('click', function () {
            $('#content2').hide();
            $('#content1').show();
            $('#content3').hide();
            $('#search_list').show();
            $('.search_all').css('visibility', 'visible');
        });
        $('#menu2').on('click', function () {
            $('#content1').hide();
            $('#content2').show();
            $('#content3').hide();
            $('#search_list').hide();
            $('.search_all').css('visibility', 'hidden');
        });
        $('#menu3').on('click', function(){
            $('#content1').hide();
            $('#content2').hide();
            $('#content3').show();
            $('#search_list').hide();
            $('.search_all').css('visibility', 'hidden');
        });
    }
}
    
