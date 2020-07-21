class Trouble < ApplicationRecord
  validates :content, presence: true
  validates :err_screen, presence: true

  belongs_to :user
end
