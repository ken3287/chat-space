class Group < ApplicationRecord
  has_many :messages
  has_many :members
  has_many :groups, through: :members
  validates :name, presence: true
end
