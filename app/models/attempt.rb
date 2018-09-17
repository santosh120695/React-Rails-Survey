class Attempt < ApplicationRecord
  belongs_to :survey
  has_many :answers ,dependent: :destroy
  belongs_to :user ,optional: :true
end
