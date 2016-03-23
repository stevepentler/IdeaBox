require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  
  test 'quality' do 
    options = ["swill", "plausible", "genius"]
    
    options.each_with_index do |idea, index|
      assert_equal idea, options[index]
    end
  end
end