class Music < ActiveRecord::Base
  belongs_to :artist
  default_scope->{order(created_at: :desc)}
end
