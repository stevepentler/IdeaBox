require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test '#index' do 
    idea1, idea2, idea3 = create_list(:idea, 3)
    get :index, format: :json

    idea_index = JSON.parse(response.body)

    assert_response :success
    assert_equal 3, idea_index.count

    assert_equal idea1.id, idea_index.first["id"]
    assert_equal idea1.title, idea_index.first["title"]
    assert_equal idea1.body, idea_index.first["body"]
    assert_equal idea1.quality, idea_index.first["quality"]

    assert_equal idea3.id, idea_index.last["id"]
    assert_equal idea3.title, idea_index.last["title"]
    assert_equal idea3.body, idea_index.last["body"]
    assert_equal idea3.quality, idea_index.last["quality"]
  end

  test '#create' do 
    assert_difference 'Idea.count', 1 do 
      
      params = {"title"=>"new title", 
                "body"=>"new body"}
      
      post :create, format: :json, idea: params

      idea = JSON.parse(response.body)
      assert_response :success

      assert_equal params["title"], idea["title"]
      assert_equal params["body"], idea["body"]
      assert_equal "swill", idea["quality"]
    end
  end

  test '#update' do 
    assert_difference 'Idea.count', 0 do 
      idea = create(:idea)

      params = {"title"=>"updated title", 
                "body"=>"updated body"}
      
      post :update, format: :json, idea: params

      idea = JSON.parse(response.body)
      assert_response :success

      assert_equal params["title"], idea["title"]
      assert_equal params["body"], idea["body"]
      assert_equal "swill", idea["quality"]
    end
  end




end