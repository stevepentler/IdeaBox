$(document).ready(function(){
  getIdeas();
  createIdea();
  deleteIdea();
  promoteIdea();
});


  function renderIdea(idea){
    $('#ideas-index').prepend(
      "<div class='idea' idea-id='" +
      idea.id + "'><h6>Published on: " +
      idea.created_at +
      "</h6><h6> Title: " + idea.title + "</h6>" +
      truncate(idea.body) +
      "<p>Quality: " + idea.quality +
      "</p><button id='delete-button' class='btn btn-default btn-xs'>Delete</button>" +
      "<button id='promote-button' class='btn btn-default btn-xs'>Promote</button>" +
      "<button id='demote-button' class='btn btn-default btn-xs'>Demote</button>" +
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
    $("#submit-button").on('click', function() {
      var ideaParams = {
        idea: {
          title: $('#idea-title').val(),
          body: $('#idea-body').val()
        }
      };

      $.ajax({
        type: "POST",
        url: "/api/v1/ideas",
        data: ideaParams,
        success: function(newIdea) {
          renderIdea(newIdea);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });

      $("#idea-title").val("");
      $("#idea-body").val("");
    });
  }

  function deleteIdea() {
    $('#ideas-index').delegate("#delete-button", 'click', function() {
      var $idea = $(this).closest(".idea");

      $.ajax({
        type: 'DELETE',
        url: '/api/v1/ideas/' + $idea.attr('idea-id'),
        success: function() {
          $idea.remove();
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
    });
  }

  function promoteIdea() {
    console.log('got it');
    $('#ideas-index').delegate("#promote-button", 'click', function() {
      var ideaId = $(this).closest('.idea');
      var ideaQuality = ideaId.find('p').text().split(" ")[1];
      console.log(ideaQuality);

    });
  }



  function truncate(string) {
    if (string.length > 100) {
      return string.substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
    } else
    return string;
  }