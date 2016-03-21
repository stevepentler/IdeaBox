$(document).ready(function() {
  function IdeaDisplay(idea) {
    $('#ideas-index').append(
      "<div data-id='" + idea.id +"'><h6>Published on: " +
      idea.created_at +
      "</h6><p>" +
      idea.description +
      "</p>" +
      "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>"+"</div>"
    )
  }
  $.getJSON('/api/v1/ideas', ideas) {
    $.each(ideas, function(index, idea){
      IdeaDisplay(idea)
    })
  }
  
})