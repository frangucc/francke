var phonecatApp = angular.module('projectsApp', ['ui.bootstrap']);

 
phonecatApp.controller('ProjectCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'test project',
     'snippet': 'images/francke.png'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});

phonecatApp.controller('ProjectListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 2},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 3}
  ];

  $scope.orderProp = 'age';
});

phonecatApp.controller('UpdateFly', function ($scope) {
  
	$scope.salutation = 'This just a static binding to salutation variable';
});




phonecatApp.controller('Ctrl', function ($scope) {
  $scope.templates =
    [ { name: 'template1.html', url: 'template1.html'}
    , { name: 'template2.html', url: 'template2.html'} ];
  $scope.template = $scope.templates[0];
});




phonecatApp.controller('AccordionDemoCtrl', function ($scope) {

  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
});



phonecatApp.controller('TodoCtrl', function ($scope) {
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

  $scope.sayItBitch= function() {
       alert("holy shit it was that fucking easy");
       
    }
         


 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
});


     




