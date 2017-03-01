Rails.application.routes.draw do
  resources :puzzles
  # get 'index/show'
  #
  root 'index#show'
end
