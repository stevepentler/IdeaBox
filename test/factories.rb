FactoryGirl.define do 
  factory :idea do 
    title Faker::Beer.name
    body Faker::Hacker.say_something_smart
  end
end