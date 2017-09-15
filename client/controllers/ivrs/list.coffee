angular.module 'manager'
.controller 'IvrListController', [
  '$scope',
  'Ivr',
  ($scope, Ivr)->
    $scope.ivrs = []
    $scope.ivrs = Ivr.query()

]