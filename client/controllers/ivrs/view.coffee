angular.module 'manager'
.controller 'IvrViewController', [
  '$scope',
  '$state',
  '$stateParams',
  'Ivr',
  ($scope, $state, $stateParams, Ivr)->
    
    $scope.ivr = Ivr.get id: $stateParams.id

    $scope.save = ()->
      $scope.ivr.$save ()->
        $state.go 'ivrs', {}, reload: true

    $scope.switchStatus = ()->
      $scope.ivr.status = !$scope.ivr.status
      $scope.ivr.$save()

    $scope.delete = ()->
      $scope.ivr.$delete ()->
        $state.go 'ivrs', {}, reload: true

]