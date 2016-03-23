function qualityIdea(status) {
  $('#ideas-index').delegate(status, 'click', function() {
    var $idea = $(this).closest('.idea');
    var previousQuality = $idea.find('p').text().split(" ")[1];
    var newQuality = qualityStatus(status, previousQuality);
    var ideaParams = {
      idea: {
        quality: newQuality
      }
    };
    qualityCall($idea, ideaParams, newQuality);
  });
}

function qualityCall(idea, ideaParams, newQuality) {
  $.ajax({
    type: "PUT",
    url: "/api/v1/ideas/" + idea.attr('idea-id'),
    data: ideaParams,
    success: function() {
      quality = newQuality;
      idea.find('p').text("Quality: " + newQuality);
    },
    error: function(xhr) {
      console.log(xhr.responseText);
    }
  });
}

function qualityStatus(status, previousQuality) {
  if (status == "#demote-button") {
    return demoteQuality(previousQuality);
  } else {
    return promoteQuality(previousQuality);
  }
}

function demoteQuality(previousQuality) {
  if (previousQuality === "genius") {
    return 'plausible';
  } else {
    return "swill";
  }
}

function promoteQuality(previousQuality) {
  if (previousQuality === "swill") {
    return 'plausible';
  } else {
    return "genius";
  }
}

qualityIdea("#demote-button");
qualityIdea("#promote-button");
