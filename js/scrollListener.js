var sections = [];
sections[0] = document.getElementById("project-presentation");
sections[1] = document.getElementById("demarche-title");
sections[2] = document.getElementById("demarche");
sections[3] = document.getElementById("demarche-picture");
sections[4] = document.getElementById("profil");
sections[5] = document.getElementById("profil-thumbnail");
sections[6] = document.getElementById("profil-thumbnail2");


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
