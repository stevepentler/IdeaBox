$(document).ready(function(){

  function renderIdea(idea){
    $('#ideas-index').append(
      "<div class='idea' data-id='" +
      idea.id + "'><h6>Published on: " +
      idea.created_at +
      "</h6><h6> Title: " + idea.title + "</h6>" + 
      idea.body +
      "</p>" +
      "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
      "</div>"
    );
  }

  function getIdeas(){
    console.log('steve2')
    $.getJSON('/api/v1/ideas', function(ideas){
      $.each(ideas, function(index, idea){
        renderIdea(idea);
      })
    })
  };

  getIdeas()

  $('#fetch-ideas').click(function() {
    getIdeas()
  });

})