Rails.application.routes.draw do
  resources :messages
  get "articles/create"
  root "messages#new"


  mount ActionCable.server => '/cable'
end