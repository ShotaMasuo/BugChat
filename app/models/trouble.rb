class Trouble < ApplicationRecord
  validates :content, presence: true
  validates :solve_url, presence: true

  belongs_to :user
end
