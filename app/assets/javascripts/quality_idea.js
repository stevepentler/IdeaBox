  function qualityIdea(status) {
    $('#ideas-index').delegate(status, 'click', function() {
      var $idea = $(this).closest('.idea');
      var previousQuality = $idea.find('p').text().split(" ")[1];
      
console.log("previous quality = " + previousQuality);

    var qualityStatus = function() {
      if (status == "#demote-button") {
        return demoteQuality(previousQuality);
      } else {
        return promoteQuality(previousQuality);
      }
    };

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


      var ideaParams = {
        idea: {
          quality: qualityStatus
        }
      };

      $.ajax({
        type: "PUT",
        url: "/api/v1/ideas/" + $idea.attr('idea-id'),
        data: ideaParams,
        success: function() {
          quality = qualityStatus;
          console.log("updated quality to " + qualityStatus);
          $idea.find('p').text("Quality: " + quality());
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
      
    });
  }

  qualityIdea("#demote-button");
  qualityIdea("#promote-button");
