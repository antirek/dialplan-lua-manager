angular.module 'manager'
.config ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)->
  $urlRouterProvider.otherwise '/'

  $stateProvider
  .state
      name: 'main'
      url: '/'
  .state
      name: 'ivrs'
      url: '/ivrs'
      views:
        list:
          controller: 'IvrListController'
          templateUrl: '/partials/ivrs/list'
  .state
      name: 'ivrs.view'
      url: '/view/:id'
      views:
        'data@':
          controller: 'IvrViewController'
          templateUrl: '/partials/ivrs/view'
  .state
      name: 'ivrs.create'
      url: '/create'
      views:
        'data@':
          controller: 'IvrCreateController'
          templateUrl: '/partials/ivrs/create'
]