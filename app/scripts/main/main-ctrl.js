'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function($scope, $famous, Team) {
      var Transitionable = $famous['famous/transitions/Transitionable'];
      var Timer = $famous['famous/utilities/Timer'];

      $scope.spinner = {
        speed: 55
      };

      $scope.rotateY = new Transitionable(0);

      //run function on every tick of the Famo.us engine
      Timer.every(function() {
        var adjustedSpeed = parseFloat($scope.spinner.speed) / 1200;
        $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
      }, 1);


      $scope.layoutOptions = {
      dimensions: [1,2]
    };
    $scope.answersLayoutOptions = {
      dimensions: [1,4]
    };

    $scope.sequence = [];

    Team.playerStats({teamId: 9}, function(stats) {

      var sequence = [];

      for(var i = 0; i < 4; i++) {
        var player = stats.data[Math.floor(Math.random()*stats.data.length)];
        sequence.push({id: i, bgColor: 'green', title: player.player.firstName + ' ' + player.player.lastName, height: 100});
      }

      $scope.question = 'Vem har gjort flest poäng i Modo?';
      $scope.sequence = sequence;
    });

    $scope.answer = function($event, id) {
      console.log($event);
      console.log(id);
    };
  });
