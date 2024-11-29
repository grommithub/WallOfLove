Rails.application.routes.draw do
  resources :messages
  get "articles/create"
  root "messages#index"

  resources :articles

  mount ActionCable.server => '/cable'
end