require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  test 'quality defaults to swill' do 
    idea = Idea.create(title: "Hotdogs",
                       body: "roller")

    assert_equal "swill", idea.quality
    assert_equal "Hotdogs", idea.title
    assert_equal "roller", idea.body
  end

  
end