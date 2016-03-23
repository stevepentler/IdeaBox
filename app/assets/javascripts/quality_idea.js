function qualityIdea(status) {
  $('#ideas-index').delegate(status, 'click', function() {
    var $idea = $(this).closest('.idea');
    var previousQuality = $idea.find('p').text().split(" ")[1];

    var qualityStatus = function() {
      if (status == "#demote-button") {
        return demoteQuality(previousQuality);
      } else {
        return promoteQuality(previousQuality);
      }
    };

    var ideaParams = {
      idea: {
        quality: qualityStatus
      }
    };

    qualityCall($idea, ideaParams, qualityStatus);

  });
}

function qualityCall(idea, ideaParams, qualityStatus) {
  $.ajax({
    type: "PUT",
    url: "/api/v1/ideas/" + idea.attr('idea-id'),
    data: ideaParams,
    success: function() {
      quality = qualityStatus;
      idea.find('p').text("Quality: " + quality());
    },
    error: function(xhr) {
      console.log(xhr.responseText);
    }
  });
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
