function renderIdea(idea){
  $('#ideas-index').prepend(
    "<div class='idea center' idea-id='" + idea.id + "'>" +
      "<h5 class='title'>" + idea.title + "</h5>" +
      "<h6 class='body'>" + truncate(idea.body) + "</h6>" +
      "<div class='center'>" +
      "<p class='chip'>Quality: " + idea.quality + "</p>" + " " +
      "<span class='chip'>" + date(idea) + "</span>" + "<br>" +
      "<button id='promote-button' class='btn btn-default btn-xs'><i class='material-icons'>thumb_up</i></button>" +
      "<button id='demote-button' class='btn btn-default btn-xs'><i class='material-icons'>thumb_down</i></button>" +
      "<button id='delete-button' class='btn btn-default btn-xs'><i class='material-icons'>delete</i></button>" +
      "</div>" + 
      "<hr>" +
    "</div>"
  );
}

function date(idea) {
  return idea.created_at.split("T")[0];
}