class AddPickoneToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :pickone, :string
  end
end
