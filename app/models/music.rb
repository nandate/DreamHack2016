class Music < ActiveRecord::Base
  belongs_to :artist
  mount_uploader :image,ThumbnailUploader
  has_many :likes,dependent: :destroy
  def like_user(user_id)
    likes.find_by(user_id: user_id)
  end
end
