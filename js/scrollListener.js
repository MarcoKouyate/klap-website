var sections = [];
sections[0] = document.getElementById("project-presentation");
sections[1] = document.getElementById("demarche-title");
sections[2] = document.getElementById("demarche");
sections[3] = document.getElementById("demarche-picture");
sections[4] = document.getElementById("profil");
sections[5] = document.getElementById("profil-thumbnail");

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
