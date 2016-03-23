function searchIdeas() {
  $("#search").keyup(function() {
    var entry = $(this).val().toLowerCase();
    var ideasIndex = $('#ideas-index').children();
    $.each(ideasIndex, function(index, idea){
      var title = $(idea).find('.title').text().toLowerCase();
      var body = $(idea).find('.body').text().toLowerCase();
      if (title.includes(entry) || body.includes(entry)) {
        $(idea).show();
      } else {
        $(idea).hide();
      }
    });
  });
}