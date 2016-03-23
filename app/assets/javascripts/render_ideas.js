function renderIdea(idea){
  $('#ideas-index').prepend(
    "<div class='idea' idea-id='" + idea.id + "'>" +
    
      "<h5 class='title'>" + idea.title + "</h5><h6 class='body'>" +
      "<h6>Published on: " + date(idea) + "</h6>" + "<br>" +
      truncate(idea.body) +
      "</h6><p>Quality: " + idea.quality +
      "</p><button id='delete-button' class='btn btn-default btn-xs'>Delete</button>" +
      "<button id='promote-button' class='btn btn-default btn-xs'>Promote</button>" +
      "<button id='demote-button' class='btn btn-default btn-xs'>Demote</button>" +
      "<button id='edit-button' class='btn btn-default btn-xs'>Edit</button>" +
    "</div>"
  );
}

function date(idea) {
  return idea.created_at.split("T")[0];
}