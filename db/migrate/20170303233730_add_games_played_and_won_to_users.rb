class AddGamesPlayedAndWonToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :games_played, :integer
    add_column :users, :games_won, :integer
  end
end
