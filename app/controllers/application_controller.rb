class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken

  # protect_from_forgery with: :null_session

  before_action :update_sanitized_params, if: :devise_controller?

  def update_sanitized_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :pickone, :games_played, :games_won])
  end
end
