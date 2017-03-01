Rails.application.routes.draw do
  resources :puzzles
  get 'puzzles/random'
  devise_for :users
  # get 'index/show'
  #
  root 'index#show'
end
