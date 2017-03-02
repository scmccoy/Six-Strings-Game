class PuzzlesController < ApplicationController
  before_action :set_puzzle, only: [:show, :update, :destroy]

  # GET /puzzles
  def index
    @puzzles = Puzzle.all

    render json: @puzzles
  end

  # GET /puzzles/random
  def random
    @random = Puzzle.all.sample
    @words = split_clues(@random)

    render json: @words
  end

  # GET /puzzles/1
  def show
    render json: @puzzle
  end

  # POST /puzzles
  def create
    @puzzle = Puzzle.new(puzzle_params)

    if @puzzle.save
      render json: @puzzle, status: :created, location: @puzzle
    else
      render json: @puzzle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /puzzles/1
  def update
    if @puzzle.update(puzzle_params)
      render json: @puzzle
    else
      render json: @puzzle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /puzzles/1
  def destroy
    @puzzle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_puzzle
      @puzzle = Puzzle.find(params[:id])
    end

    def split_clues(puzzle)
      word1 = puzzle.word1.split ':'
      word2 = puzzle.word2.split ':'
      word3 = puzzle.word3.split ':'
      word4 = puzzle.word4.split ':'
      word5 = puzzle.word5.split ':'
      word6 = puzzle.word6.split ':'

      {
        word1[0] => word1[1], word2[0] => word2[1], word3[0] => word3[1],
        word4[0] => word4[1], word5[0] => word5[1], word6[0] => word6[1]
      }
    end

    # Only allow a trusted parameter "white list" through.
    def puzzle_params
      params.fetch(:puzzle, {})
    end
end
