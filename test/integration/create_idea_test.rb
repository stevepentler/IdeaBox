require 'test_helper'
require "selenium-webdriver"

class CreateIdeaTest < ActionDispatch::IntegrationTest
 test "create a new idea" do
    driver = Selenium::WebDriver.for:firefox
    driver.navigate.to "http://localhost:3000"

    title_field = driver.find_element(:id, 'idea-title')
    title_field.send_keys "New Idea Title"
    body_field = driver.find_element(:id, 'idea-body')
    body_field.send_keys "New Idea Body"
    driver.find_element(:id, 'submit-button').click

    assert driver.find_element(:id=>"ideas-index").text.include? "New Idea Title"
    assert driver.find_element(:id=>"ideas-index").text.include? "New Idea Body"
    assert driver.find_element(:id=>"ideas-index").text.include? "swill"
  end

   test "search for idea" do
    idea1, idea2, idea3 = create_list(:idea, 3)
    select_idea = Idea.create(title: "New Idea Title",
                              body: "New Idea Body", 
                              quality: 0)

    driver = Selenium::WebDriver.for:firefox
    driver.navigate.to "http://localhost:3000"

    search_field = driver.find_element(:id, 'search')
    search_field.send_keys select_idea.title
    save_and_open_page
    assert driver.find_element(:id=>"ideas-index").text.include? select_idea.title
    assert driver.find_element(:id=>"ideas-index").text.include? select_idea.body
    assert driver.find_element(:id=>"ideas-index").text.include? select_idea.quality

    refute driver.find_element(:id=>"ideas-index").text.include? idea1.title
    refute driver.find_element(:id=>"ideas-index").text.include? idea1.body

    refute driver.find_element(:id=>"ideas-index").text.include? idea3.title
    refute driver.find_element(:id=>"ideas-index").text.include? idea3.body
  
  end
end