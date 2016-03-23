function searchIdeas() {
  $("#search").keyup(function() {
    var entry = $(this).val().toLowerCase();
    var ideasIndex = $('#ideas-index').children();
    searchEntry(ideasIndex, entry);
  });
}

function searchEntry(ideasIndex, entry) {
  $.each(ideasIndex, function(index, idea){
    var title = $(idea).find('.title').text().toLowerCase();
    var body = $(idea).find('.body').text().toLowerCase();
    showIdeas(idea, title, body, entry);
  });
}

function showIdeas(idea, title, body, entry) {
  if (title.includes(entry) || body.includes(entry)) {
    $(idea).show();
  } else {
    $(idea).hide();
  }
}