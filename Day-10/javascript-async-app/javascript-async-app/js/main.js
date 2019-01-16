(function () {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function DemoController($scope) {
    let result = [];
    // Your Code Here
    $.get('https://jsonplaceholder.typicode.com/users', function (users) {
      // if we are here, which means the data is retrieved from the API
      console.log(users);
      users.forEach(user => {
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, function (usersId) {
          // console.log(usersId);
          usersId.forEach(postId => {
            $.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId.id}`, function (posts) {
              console.log(posts);
              result.push(
                {
                  id: user.id,
                  posts: [
                    {
                      userId: 1,
                      id: 10,
                      comments: {
                        commentId: 123,
                        postId: 123,
                        name: 123
                      }
                    }]
                }
              )
            })
          })
        })

      });
    })
  }
})();
