function editIdea(selector) {
  $('#ideas-index').delegate(selector, 'click', function() {
    var $idea = $(this).closest('.idea');
    var editableIdea = this;
    this.contentEditable = true;

    $(document).keypress(function(event){
      if(event.which == 13) {
        var ideaParams = {
          idea: {
            title: $idea.find('.title').text(),
            body: $idea.find('.body').text()
          }
        };
        editCall($idea, ideaParams);
        editableIdea.contentEditable = false;
      }
    });
  });
}

function editCall(idea, ideaParams) {
  $.ajax({
    type: "PUT",
    url: "/api/v1/ideas/" + idea.attr('idea-id'),
    data: ideaParams,
    success: function() {
      console.log("updated title to " + idea.find('.title').text());
    },
    error: function(xhr) {
      console.log(xhr.responseText);
    }
  });
}

editIdea('.title');
editIdea('.body');