require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  test 'quality defaults to swill' do 
    idea = create(:idea)

    assert_equal "swill", idea.quality
  end

  test 'lists in descending order by updated_at' do 
    idea1, idea2, idea3 = create_list(:idea, 3)

    assert_equal idea3, Idea.all.last

  end


end