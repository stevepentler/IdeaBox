ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/autorun'
require 'minitest/pride'
require 'capybara/rails'

class ActiveSupport::TestCase
  include FactoryGirl::Syntax::Methods

  def teardown 
    DatabaseCleaner.clean
  end

end

class ActionDispatch::IntegrationTest

  def teardown 
    DatabaseCleaner.clean
  end

end

class ActionController::TestCase
  include Capybara::DSL

  def teardown 
    DatabaseCleaner.clean
  end

end
