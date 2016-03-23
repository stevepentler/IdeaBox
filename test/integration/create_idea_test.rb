require 'test_helper'
require "selenium-webdriver"

class CreateIdeaTest < ActionDispatch::IntegrationTest
 test "create a new idea, search, and delete" do
    driver = Selenium::WebDriver.for:firefox
    driver.navigate.to "http://localhost:3000"

    title_field = driver.find_element(:id, 'idea-title')
    title_field.send_keys "Selected Title"
    body_field = driver.find_element(:id, 'idea-body')
    body_field.send_keys "Selected Body"
    driver.find_element(:id, 'submit-button').click

    title_field = driver.find_element(:id, 'idea-title')
    title_field.send_keys "Other Title"
    body_field = driver.find_element(:id, 'idea-body')
    body_field.send_keys "Other Body"
    driver.find_element(:id, 'submit-button').click

    assert driver.find_element(:id=>"ideas-index").text.include? "Selected Title"
    assert driver.find_element(:id=>"ideas-index").text.include? "Selected Body"

    assert driver.find_element(:id=>"ideas-index").text.include? "Other Title"
    assert driver.find_element(:id=>"ideas-index").text.include? "Other Body"

    search_field = driver.find_element(:id, 'search')
    search_field.send_keys "Selected Title"

    assert driver.find_element(:id=>"ideas-index").text.include? "Selected Title"
    assert driver.find_element(:id=>"ideas-index").text.include? "Selected Body"
    assert driver.find_element(:id=>"ideas-index").text.include? "swill"

    refute driver.find_element(:id=>"ideas-index").text.include? "Other Title"
    refute driver.find_element(:id=>"ideas-index").text.include? "Other Body"
  end

end