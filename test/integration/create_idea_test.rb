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
end