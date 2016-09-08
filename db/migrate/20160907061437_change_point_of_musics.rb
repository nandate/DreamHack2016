class ChangePointOfMusics < ActiveRecord::Migration
  def self.up
    change_column :musics,:point,:integer,:default=>0
    change_column :musics,:genre,:string
  end

  def self.down
    change_column :musics,:point,:integer
    change_column :musics,:genre,:integer
  end

end
