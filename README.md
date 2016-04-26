# Idea Box

[GitHub Repo](https://github.com/stevepentler/IdeaBox) || [Live Link](https://pentler-ideas.herokuapp.com/)

Rails single-page application that uses JavaScript and jQuery to set up CRUD functionality for creating and storing ideas. It relies heavily on jQuery's AJAX method to make calls internal API endpoints to get, store, update, and delete data.
## Preview
![](http://g.recordit.co/jflg8dNj6L.gif)

## Skills Utilized:
AJAX, JavaScript, jQuery, Selenium
___
## Using the App

##### Search Existing Ideas
- Enter any portion of a title or description to see all ideas that meet that criteria.

##### Add an idea
- Enter an idea title & description
- Click on the save button
- New ideas have a default level of 'swill' but can be changed to 'plausible' or 'genius' by hitting the thumbs up and thumbs down icons next to the idea.
- Additionally, if an idea's body has more than 100 characters, the body will be truncated to the closest word that is less than the 100 character limit and an ellipses will be added to the end.

##### Delete an idea
- Click on the delete button next to the idea

##### Edit an idea
- Double click on the title or body
- Edit the title and/or body
- Press enter

![](http://g.recordit.co/Ov33UONm3n.gif)

___

## Code Quality

- [qualityIdea](https://github.com/stevepentler/IdeaBox/blob/master/app/assets/javascripts/quality_idea.js#L30) :
The promote and demote methods were slightly different, but I practiced DRY principles and made the method dynamic.

- [searchIdea](https://github.com/stevepentler/IdeaBox/blob/master/app/assets/javascripts/search_idea.js#L1) : Well named, human-readable, abstracted code.
- [Controller Testing](https://github.com/stevepentler/IdeaBox/blob/master/test/controllers/ideas_controller_test.rb#L25) : 
Specific, realiable controller testing for create, update, and delete.
___

## Setup 

If you wish to download the project and set it up locally, run the following commands:

- git clone https://github.com/stevepentler/IdeaBox.git
- bundle
- Run rails s in another terminal pane to start the actual Rails server
- visit your localhost

____
