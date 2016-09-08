class ChangeGenreOfMusic < ActiveRecord::Migration
  def self.up
    change_column :musics,:genre,:string
  end

  def self.down
    change_column :musics,:genre,:integer
  end
end
