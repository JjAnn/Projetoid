class AddGeoToReltask < ActiveRecord::Migration
  def change
    add_column :reltasks, :ip_address, :string
    add_column :reltasks, :getlocal, :string
    add_column :reltasks, :longitude, :float
    add_column :reltasks, :latitude, :float
  end
end
