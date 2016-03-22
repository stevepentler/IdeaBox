class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def show
    respond_with Idea.find_by(id: params[:id])
  end

  def create
    @idea = Idea.create(idea_params)
    respond_with :api, :v1, @idea
  end

  def update 
    @idea = Idea.find_by(id: params[:id])
    respond_with @idea.update(idea_params)
  end

  def destroy
    respond_with Idea.delete(params[:id])
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end