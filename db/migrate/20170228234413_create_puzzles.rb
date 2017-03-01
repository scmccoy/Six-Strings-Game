class CreatePuzzles < ActiveRecord::Migration[5.0]
  def change
    create_table :puzzles do |t|
      t.string :words
      t.string :clues

      t.timestamps
    end
  end
end
