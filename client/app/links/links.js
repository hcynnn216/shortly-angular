angular.module('shortly.links', [])
.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = { links: [] };
  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });

  Links.getOne().then 
});
