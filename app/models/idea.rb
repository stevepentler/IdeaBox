class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true
  enum quality: [:swill, :plausible, :genius]

end