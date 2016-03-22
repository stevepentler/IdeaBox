class DashboardController < ApplicationController
  def index
    @idea = Idea.new
  end
end