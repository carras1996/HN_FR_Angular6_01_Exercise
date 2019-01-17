/*(function () {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function DemoController($scope) {
    let result = [];
    // Your Code Here
    $.get('https://jsonplaceholder.typicode.com/users', function (users) {
      // if we are here, which means the data is retrieved from the API
      // console.log(users);
      users.forEach(user => {
        result.push({id: user.id, posts: []});
        
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, function (posts) {
          // console.log(posts);
          result[user.id - 1].posts = posts;
          posts.forEach(postId => {
            $.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId.id}`, function (comments) {
              // console.log(comments);
              result[user.id - 1].posts[user.id - 1]['comments'] = comments;
            })
          })
        })

      });
    })
    console.log(result);
  }
})();*/
(function() {
  var app = angular.module("myApp", []);

  app.controller("demoCtrl", ["$scope", DemoController]);

  function DemoController($scope) {
    // Your Code Here
    // Callback
    $.get("https://jsonplaceholder.typicode.com/users", function(users) {
      users.forEach((user) => {
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, (posts) => {
          user.posts = posts;
          posts.forEach((postId) => {
            $.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId.id}`, (comments) => {
              postId.comments = comments;
              $scope.$apply(() => {
                $scope.users = users;
              })
            })
          });
        })
      })
    });
  }

  // Promise
  
})();