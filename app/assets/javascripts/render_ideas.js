function renderIdea(idea){
  $('#ideas-index').prepend(
    "<div class='idea' idea-id='" + idea.id + "'>" +
      "<h5 class='title'>" + idea.title + "</h5>" +
      "<h6>Published on: " + date(idea) + "</h6>" + "<br>" +
      "<h6 class='body'>" + truncate(idea.body) + "</h6>" +
      "<p>Quality: " + idea.quality + "</p>" +
      "<button id='delete-button' class='btn btn-default btn-xs'><i class='material-icons'>delete</i></button>" +
      "<button id='promote-button' class='btn btn-default btn-xs'><i class='material-icons'>thumb_up</i></button>" +
      "<button id='demote-button' class='btn btn-default btn-xs'><i class='material-icons'>thumb_down</i></button>" +
    "</div>"
  );
}

function date(idea) {
  return idea.created_at.split("T")[0];
}