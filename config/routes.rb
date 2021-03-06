Rails.application.routes.draw do

  get 'artists/index'

  get 'artists/show'

  get 'users/index'

  get 'users/show'

  devise_for :artists,:controller=>{
    :registrations=>'artists/registrations',
    :sessions=>'artists/sessions',
    :password=>'artists/password'
  }
  devise_for :users,:controller=>{
    :registrations=>'users/registrations',
    :sessions=>'users/sessions',
    :passwords=>'users/passwords',
    :omniauth_callbacks=> 'users/omniauth_callbacks'
  }

  root 'static_pages#home'
  get 'about'=>'static_pages#about'
  resources :users,:only=>[:index,:show]
  resources :artists,:only=>[:index,:show]
  resources :musics do
    resources :likes,only: [:create,:destroy]
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
