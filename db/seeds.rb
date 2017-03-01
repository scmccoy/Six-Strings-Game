require 'csv'

CSV.foreach('db/data/puzzles', col_sep: ';') do |row|
  puzzle = Puzzle.create(
    words: row[0],
    clues: row[1]
  )
end
