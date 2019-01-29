var sections = [];
sections[0] = document.getElementById("ressources-presentation");
sections[1] = document.getElementById("ressources-proof");
sections[2] = document.getElementById("ressources-skills");

if(window.innerWidth > 1200){
  $(window).scroll(function(e){

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
