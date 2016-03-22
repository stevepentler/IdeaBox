$(document).ready(function(){
  getIdeas();


  function renderIdea(idea){
    $('#ideas-index').append(
      "<div class='idea' data-id='" +
      idea.id + "'><h6>Published on: " +
      idea.created_at +
      "</h6><h6> Title: " + idea.title + "</h6>" + 
      truncate(idea.body) +
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

  function createIdea() {
    $("#submit-button").on('click', function(event) {
      event.preventDefault()
      var ideaParams = {
        idea: {
          title: $('#idea-title').val(),
          body: $('#idea-body').val()
        }
      }

      $.ajax({ 
        type: "POST",
        url: "/api/v1/ideas",
        data: ideaParams,
        success: function(newIdea) {
          console.log("created idea");
          renderIdea(newIdea)
        }
      })
    })

    function clearForm() {
      $("#title").val('')
      $("#body").val('')
    }
  }

  function truncate(string) {
    if (string.length > 100) {
      return string.substring(0, 100).split(" ").slice(0, -1).join(" ") + "..."
    } else
    return string
  }

});