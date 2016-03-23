$(document).ready(function(){
  getIdeas();
  createIdea();
  deleteIdea();
  promoteIdea();
  demoteIdea();
});


  function renderIdea(idea){
    $('#ideas-index').prepend(
      "<div class='idea' idea-id='" +
      idea.id + "'><h6>Published on: " +
      idea.created_at +
      "</h6><span> Title: " + "</span><h6 class='title'>" + idea.title + "</h6><h6 class='body'>" +
      truncate(idea.body) +
      "</h6><p>Quality: " + idea.quality +
      "</p><button id='delete-button' class='btn btn-default btn-xs'>Delete</button>" +
      "<button id='promote-button' class='btn btn-default btn-xs'>Promote</button>" +
      "<button id='demote-button' class='btn btn-default btn-xs'>Demote</button>" +
      "<button id='edit-button' class='btn btn-default btn-xs'>Edit</button>" +
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
    $('#ideas-index').delegate("#promote-button", 'click', function() {
      var $idea = $(this).closest('.idea');
      var previousQuality = $idea.find('p').text().split(" ")[1];
      
console.log("previous quality = " + previousQuality);

      function updateQuality(previousQuality) {
        if (previousQuality === "swill") {
          return 'plausible';
        } else {
          return "genius";
        }
      }

      var newQuality = updateQuality(previousQuality);

console.log("new quality = " + newQuality);

      var ideaParams = {
        idea: {
          quality: newQuality
        }
      };

      $.ajax({
        type: "PUT",
        url: "/api/v1/ideas/" + $idea.attr('idea-id'),
        data: ideaParams,
        success: function() {
          quality = newQuality,
          console.log("updated quality to " + newQuality);
          $idea.find('p').text("Quality: " + newQuality);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
      
    });
  }

  function editIdea(selector) {
    $('#ideas-index').delegate(selector, 'click', function() {
      var $idea = $(this).closest('.idea');
      var editableIdea = this;
      this.contentEditable = true;
      editedTitle = this;
      console.log(editedTitle);

      $(document).keypress(function(event){
        if(event.which == 13) {
          var ideaParams = {
            idea: {
              title: $idea.find('.title').text(),
              body: $idea.find('.body').text()
            }
          };

          $.ajax({
            type: "PUT",
            url: "/api/v1/ideas/" + $idea.attr('idea-id'),
            data: ideaParams,
            success: function() {
              console.log("updated title to " + $idea.find('.title').text());
            },
            error: function(xhr) {
              console.log(xhr.responseText);
            }
          });
          editableIdea.contentEditable = false;
        }
      });
    });
  }

  editIdea('.title');
  editIdea('.body');


  function demoteIdea() {
    $('#ideas-index').delegate("#demote-button", 'click', function() {
      var $idea = $(this).closest('.idea');
      var previousQuality = $idea.find('p').text().split(" ")[1];
      
console.log("previous quality = " + previousQuality);

      function updateQuality(previousQuality) {
        if (previousQuality === "genius") {
          return 'plausible';
        } else {
          return "swill";
        }
      }

      var newQuality = updateQuality(previousQuality);

console.log("demoted quality = " + newQuality);

      var ideaParams = {
        idea: {
          quality: newQuality
        }
      };

      $.ajax({
        type: "PUT",
        url: "/api/v1/ideas/" + $idea.attr('idea-id'),
        data: ideaParams,
        success: function() {
          quality = newQuality,
          console.log("updated quality to " + newQuality);
          $idea.find('p').text("Quality: " + newQuality);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
      
    });
  }

  function truncate(string) {
    if (string.length > 100) {
      return string.substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
    } else
    return string;
  }