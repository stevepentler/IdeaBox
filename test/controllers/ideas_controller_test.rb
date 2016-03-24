require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test '#index' do 
    idea1, idea2, idea3 = create_list(:idea, 3)
    get :index, format: :json

    idea_index = JSON.parse(response.body)

    assert_response :success
    assert_response 200, response.status
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

  test '#create and clear text areas' do 
    assert_difference 'Idea.count', 1 do 
      
      params = {"title"=>"new title", 
                "body"=>"new body"}
      
      post :create, idea: params, format: :json

      idea = JSON.parse(response.body)
      assert_response :success
      assert_response 201, response.status

      assert_equal params["title"], idea["title"]
      assert_equal params["body"], idea["body"]
      assert_equal "swill", idea["quality"]

      visit root_path

      within("#idea-title") do 
        assert page.has_content?("")
      end

      within("#idea-body") do 
        assert page.has_content?("")
      end
    end
  end

  test '#create unsuccesfully without title' do 
    assert_difference 'Idea.count', 0 do 
      
      params = {"body"=>"new body"}
      
      post :create, idea: params, format: :json

      idea = JSON.parse(response.body)

      assert_response 422, response.status
    end
  end

  test '#create unsuccesfully without body' do 
    assert_difference 'Idea.count', 0 do 
      
      params = {"title"=>"new title"}
      
      post :create, idea: params, format: :json

      idea = JSON.parse(response.body)

      assert_response 422, response.status
    end
  end

  test '#update title and body' do 
    idea = create(:idea)
    params = {"title" => 'updated title',
              "body"  => 'updated body'}

    put :update, id: idea.id, idea: params, format: :json
    
    assert_response :success
    assert_response 204, response.status

    updated_idea = Idea.last
    assert_equal params["title"], updated_idea["title"]
    assert_equal params["body"], updated_idea["body"]
    assert_equal 0, updated_idea["quality"]
  end

  test '#update promote quality to plausible' do 
    idea = create(:idea)
    params = {"quality" => 'plausible'}

    put :update, id: idea.id, idea: params, format: :json
    
    assert_response :success
    assert_response 204, response.status

    updated_idea = Idea.last
    assert_equal idea.title, updated_idea["title"]
    assert_equal idea.body, updated_idea["body"]
    assert_equal 1, updated_idea["quality"]
  end 

  test '#update promote quality to genius' do 
    idea = create(:idea)
    idea.quality = "plausible"
    params = {"quality" => 'genius'}

    put :update, id: idea.id, idea: params, format: :json
    
    assert_response :success
    assert_response 204, response.status

    updated_idea = Idea.last
    assert_equal idea.title, updated_idea["title"]
    assert_equal idea.body, updated_idea["body"]
    assert_equal 2, updated_idea["quality"]
  end 

  test '#update demote quality to plausible' do 
    idea = create(:idea)
    idea.quality = "genius"
    params = {"quality" => 'plausible'}

    put :update, id: idea.id, idea: params, format: :json
    
    assert_response :success
    assert_response 204, response.status

    updated_idea = Idea.last
    assert_equal idea.title, updated_idea["title"]
    assert_equal idea.body, updated_idea["body"]
    assert_equal 1, updated_idea["quality"]
  end 

  test '#update demote quality to swill' do 
    idea = create(:idea)
    idea.quality = "plausible"
    params = {"quality" => 'swill'}

    put :update, id: idea.id, idea: params, format: :json
    
    assert_response :success
    assert_response 204, response.status

    updated_idea = Idea.last
    assert_equal idea.title, updated_idea["title"]
    assert_equal idea.body, updated_idea["body"]
    assert_equal 0, updated_idea["quality"]
  end 

  test '#destroy' do
    idea = create(:idea)
    
    assert_difference 'Idea.count', -1 do 
      delete :destroy, id: idea.id, format: :json

      assert_response :success
      assert_response 204, response.status
    end
  end

end