class CreateMusics < ActiveRecord::Migration
  def change
    create_table :musics do |t|
      t.string :name
      t.integer :point
      t.string :URL
      t.string :image
      t.integer :genre
      t.string :contributor
      t.references :artist, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
