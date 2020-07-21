class Realize < ApplicationRecord
  validates :function, presence: true
  validates :solve_url, presence: true

  belongs_to :user
end
