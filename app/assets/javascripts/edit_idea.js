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