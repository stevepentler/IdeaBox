ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/autorun'
require 'minitest/pride'

class ActiveSupport::TestCase
  include FactoryGirl::Syntax::Methods

  def teardown 
    DatabaseCleaner.clean
  end

end
