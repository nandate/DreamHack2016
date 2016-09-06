class ArtistsController < ApplicationController
  def index
    @artists=Artist.all
  end

  def show
    @artist=Artist.find(params[:id])
    @musics=@artist.musics.all
  end
end
