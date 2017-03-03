Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'users'

  resources :puzzles, except: :show
  get 'puzzles/random'
  # get 'index/show'
  #
  root 'index#show'
end
