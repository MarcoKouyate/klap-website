var sections = [];
sections[0] = document.getElementById("Game1-chrono");
sections[1] = document.getElementById("Game1-players");
sections[2] = document.getElementById("Game1-rules");
sections[3] = document.getElementById("Game1-debrief");


$(window).scroll(function(e){
  if(window.innerWidth > 1200){
    var scrollTop = $(this).scrollTop() + ($(window).height() / 1.5);
    for(var i in sections){
      var section = sections[i];
      if (scrollTop > section.offsetTop) {
        $("#" + section.id).addClass('apparition');
      }
      else{
        $("#" + section.id).removeClass('apparition');
      }
    }
  }
});
