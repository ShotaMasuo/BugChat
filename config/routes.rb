Rails.application.routes.draw do
  devise_for :users
  resources :troubles, only:[:index, :show, :new, :create]
  root "troubles#index"
end
