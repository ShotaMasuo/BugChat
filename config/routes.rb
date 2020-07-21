Rails.application.routes.draw do
  devise_for :users
  resources :troubles, only:[:index, :show, :new, :create, :edit, :update]
  root "troubles#index"
end
