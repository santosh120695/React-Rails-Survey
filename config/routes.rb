Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
   resource :survey do
    member do
      get 'start_survey'
      post 'submit_survey'
      post 'user_info'
    end
  end
  root "welcome#index"
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
