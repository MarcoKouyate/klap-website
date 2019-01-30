var sections = [];
sections[0] = document.getElementById("ressources-presentation");
sections[1] = document.getElementById("ressources-proof");
sections[2] = document.getElementById("ressources-skills");


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
