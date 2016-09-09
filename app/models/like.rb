class Like < ActiveRecord::Base
  belongs_to :music,counter_cache: :point
  belongs_to :user
end
