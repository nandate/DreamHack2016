class MusicsController < ApplicationController

  def new
    @music=Music.new
  end

  def index
    @musics=Music.all
  end

  def show
    @music=Music.find(params[:id])
  end

  def create
    @music=current_artist.musics.build(music_params)
    if @music.save
      redirect_to current_artist
    else
      render root_url
    end
  end

  private
  def music_params
    params.require(:music).permit(:name,:point,:URL,:image,:genre)
  end
end
