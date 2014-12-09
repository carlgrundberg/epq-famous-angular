'use strict';

var epServices = angular.module('epServices', ['ngResource']);
var baseUrl = 'http://api.eliteprospects.com/beta/';

epServices.factory('Player', ['$resource', function ($resource) {
  return $resource(baseUrl + 'players/:playerId', {}, {});
}]);

epServices.factory('Team', ['$resource', function ($resource) {
  var teamUrl = baseUrl + 'teams/:teamId';

  return $resource(teamUrl, {}, {
    playerStats: { url: teamUrl + '/playerstats' }
  });
}]);
