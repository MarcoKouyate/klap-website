var sections = [];
sections[0] = document.getElementById("Game1-presentation");
sections[1] = document.getElementById("Game1-chrono");
sections[2] = document.getElementById("Game1-players");
sections[3] = document.getElementById("Game1-rules");
sections[4] = document.getElementById("Game1-debrief");

if(window.innerWidth > 1200){
  $(window).scroll(function(e){

    var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
    for(var i in sections){
      var section = sections[i];
      if (scrollTop > section.offsetTop) {
        $("#" + section.id).addClass('apparition');
      }
      else{
        $("#" + section.id).removeClass('apparition');
      }
    }
  });
}
else{
  for(var i in sections){
    var section = sections[i];
    $("#" + section.id).removeClass("vanishedL");
    $("#" + section.id).removeClass("vanishedR");
    $("#" + section.id).removeClass("vanishedRT");
    $("#" + section.id).removeClass("vanishedT");
  }
}
