class CreatePuzzles < ActiveRecord::Migration[5.0]
  def change
    create_table :puzzles do |t|
      t.string :word1
      t.string :word2
      t.string :word3
      t.string :word4
      t.string :word5
      t.string :word6

      t.timestamps
    end
  end
end
