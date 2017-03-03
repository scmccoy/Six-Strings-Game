class ScoresController < ApplicationController
  before_action :set_score, only: [:show, :update, :destroy]

  # GET /scores
  def index
    @scores = Score.all.order('score ASC').limit(10)
    @scores = @scores.map do |score|
      { score: score.score, username: score.user.username }
    end

    render json: @scores
  end

  # GET /scores/1
  def show
    render json: @score
  end

  # POST /scores
  def create
    @score = Score.new(score_params)

    if @score.save
      @score.user.update(best_time: @score.score) if score_is_new_best?
      render json: @score, status: :created, location: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /scores/1
  def update
    if @score.update(score_params)
      render json: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # DELETE /scores/1
  def destroy
    @score.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_score
      @score = Score.find(params[:id])
    end

    def score_is_new_best?
      @score.user.best_time.nil? or @score.user.best_time > @score.score
    end

    # Only allow a trusted parameter "white list" through.
    def score_params
      params.permit(:score, :user, :user_id)
    end
end
