angular.module 'manager'
.factory 'Ivr', ['$resource', ($resource)->
  $resource '/ivrs/:id', id: '@_id'
]