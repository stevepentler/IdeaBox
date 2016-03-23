function createIdea() {
  $("#submit-button").on('click', function() {
    var ideaParams = {
      idea: {
        title: $('#idea-title').val(),
        body: $('#idea-body').val()
      }
    };
    createCall(ideaParams);
    clearForm();
  });
}

function createCall(ideaParams) {
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
}

function clearForm() {
  $("#idea-title").val("");
  $("#idea-body").val("");
}
