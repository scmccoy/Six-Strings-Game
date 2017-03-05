require 'csv'

CSV.foreach('db/data/puzzles.seed', quote_char: "\x00") do |row|
  puzzle = Puzzle.create(
    word1: row[0],
    word2: row[1],
    word3: row[2],
    word4: row[3],
    word5: row[4],
    word6: row[5]
  )
end
