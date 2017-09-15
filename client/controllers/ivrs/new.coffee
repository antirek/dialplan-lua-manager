angular.module 'manager'
.controller 'IvrCreateController', [
  '$scope',
  '$state',
  'Ivr',
  ($scope, $state, Ivr)->

    $scope.ivr = new Ivr
      name: ''
      filename: ''
      extension: ''

    $scope.save = ()->
      $scope.ivr.$save ()->
        $state.go 'ivrs', {}, reload: true
   
]