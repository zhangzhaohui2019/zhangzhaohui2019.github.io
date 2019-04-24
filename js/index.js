$(function() {

   var qk_btn = $('#head_main span');
   var list_mian = $('section #main #left ul');
   var audio_box = $('section #main #right #audio-box');
   var audio_top = $('section #main #right #audio-box .top');
   var welcom_text = $('section #main #right p');
   var list_li = $('section #main #left ul li');
   var deg = 0;

   var voice = $('#audio');


   qk_btn.click(function() {

       
       welcom_text.animate({opacity:0},1200);

       setTimeout(function() {

          list_mian.animate({top:'30px'},600);

       },1200);

      setTimeout(function() {

          audio_box.animate({top:'50%'},600,'swing',function(){

                setInterval(function() {
                    
                    deg++;
                    audio_box.css('transform','rotate('+ deg +'deg)');
                    audio_top.css('transform','rotate('+ deg +'deg)');              

                  },60);

                list_li.eq(0).addClass('active');
                voice.attr('src','audio/1.mp3');

                qk_btn.click(function() {

                     list_li.eq(0).addClass('active').siblings().removeClass('active');

                 });
               
          });
          
       },1800);


     

   });


   $.each(list_li,function(index,value){

      $(this).click(function() {
         $(this).addClass('active').siblings().removeClass('active');
         voice.attr('src','audio/'+ (index + 1) +'.mp3');
         audio_box.css('background','url(image/'+(index+1)+'.jpg) no-repeat'); 
      });


   });





});

   






