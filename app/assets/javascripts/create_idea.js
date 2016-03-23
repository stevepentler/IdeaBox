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