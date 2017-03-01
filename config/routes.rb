Rails.application.routes.draw do
  devise_for :users
  resources :puzzles
  # get 'index/show'
  #
  root 'index#show'
end
