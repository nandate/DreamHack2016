class ChangePointOfMusics < ActiveRecord::Migration
  def self.up
    change_column :musics,:point,:integer,:default=>0
  end

  def self.down
    change_column :musics,:point,:integer
  end

end
