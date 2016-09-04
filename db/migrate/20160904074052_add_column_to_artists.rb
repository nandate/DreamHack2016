class AddColumnToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :name, :string
    add_column :artists, :image, :string
    add_column :artists, :intro, :string
  end
end
