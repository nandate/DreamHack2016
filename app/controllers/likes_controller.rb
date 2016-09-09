class LikesController < ApplicationController
  def create
    @like=Like.create(user_id:current_user.id,music_id:params[:music_id])
    @likes=Like.where(music_id:params[:music_id])
    @musics=Music.all
  end

  def destroy
    like=Like.find_by(user_id:current_user.id,music_id:params[:music_id])
    like.destroy
    @likes=Like.where(music_id:params[:music_id])
    @musics=Music.all
  end

end
