$(document).ready(function(){
  getIdeas();


  function renderIdea(idea){
    $('#ideas-index').append(
      "<div class='idea' data-id='" +
      idea.id + "'><h6>Published on: " +
      idea.created_at +
      "</h6><h6> Title: " + idea.title + "</h6>" + 
      idea.body +
      "</p><p>Quality: " + idea.quality + 
      "</p><button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
      "</div>"
    );
  }

  function getIdeas(){
    $.getJSON('/api/v1/ideas', function(ideas){
      $.each(ideas, function(index, idea){
        renderIdea(idea);
      });
    });
  }

  $("#submit-button").on('click', function() {
    var ideaParams = {
      idea: {
        title: $('#idea-title').val(),
        body: $('#idea-body').val()
      }
    }

  })

});