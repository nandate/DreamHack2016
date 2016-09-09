class Music < ActiveRecord::Base
  belongs_to :artist
  default_scope->{order(created_at: :desc)}
  mount_uploader :image,ThumbnailUploader
  has_many :likes,dependent: :destroy
  def like_user(user_id)
    likes.find_by(user_id: user_id)
  end
end
