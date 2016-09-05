class Music < ActiveRecord::Base
  belongs_to :artist
  default_scopr->{order(created_at: :desc)}
end
