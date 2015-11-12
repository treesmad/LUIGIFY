$('.testdiv').on('click', function(loc){
      var y = loc.pageY + $('div').offset().top;
      var x = loc.pageX + $('div').offset().left;

      $('div').append("<img src='images/luigi.png' class='leweegi' style='top:" + y +"px;left:"+ x +"px;'/>");
  });
