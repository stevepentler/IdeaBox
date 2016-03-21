// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function(){

  function renderIdea(idea){
    console.log('steve');
    $('#ideas-index').append(
      "<div class='idea' data-id='" +
      idea.id +
      "'><h6>Published on: " +
      idea.created_at +
      "</h6><p>" +
      idea.body +
      "</p>" +
      "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
      "</div>"
    );
  }

  function getIdeas(){
    console.log('steve2')
    $.getJSON('/api/v1/ideas', function(ideas){
      $.each(ideas, function(index, idea){
        renderIdea(idea);
      })
    })
  };

  getIdeas()

  $('#fetch-ideas').click(function() {
    getIdeas()
  });

})