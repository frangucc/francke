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

phonecatApp.controller('DoubleCtrl', ['$scope', function($scope) {
    $scope.double = function(value) { return value * 2; };
}]);





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


phonecatApp.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  
  $scope.items = [
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcR1Kp2JmcnxhBOf66aN_JqMWl3h_okOQKFX_kEqwr9mRe5iPomy", "alt":"image 001"},
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcQAoT9UmjmunwFTAA19_n1auOFR_JG017_TUru-E91T7nIH8HyU", "alt":"image 002"},
    {"src":"http://t2.gstatic.com/images?q=tbn:ANd9GcTfntbVv3pl5wFCe6IdkaMVrme_Au9TD8Z_xE95Ezv6jz8oK4nT", "alt":"image 003"},
    {"src":"http://t1.gstatic.com/images?q=tbn:ANd9GcSAOralDJGSVtfirbHG5VdFqG8fTqXMh7C4Xd_aHCy176SKNQqK", "alt":"image 004"},
    {"src":"http://fc08.deviantart.net/fs70/f/2012/122/0/c/landscape_wallpaper_by_nickchoubg-d4yaep3.png", "alt":"image 005"},
  ];
  
});



phonecatApp.controller('ColorCntrl', function($scope) {

  $scope.switchTemplate = function() {

    
  };

   $scope.isMarketplaced = function (image)
  {
    return image.marketplace == -1;
  };



});


phonecatApp.controller('SpicyCtrl', ['$scope', function($scope){
    $scope.spice = 'very';
    
    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };
    
    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);

phonecatApp.controller('SpicyCtrl', ['$scope', function($scope){
    $scope.customSpice = "wasabi";
    $scope.spice = 'very';
    
    $scope.spicy = function(spice){
        $scope.spice = spice;
    };
}]);



phonecatApp.controller('FilterController', ['filterFilter', function(filterFilter) {
    this.array = [
      {name: 'Tobias'},
      {name: 'Jeff'},
      {name: 'Brian'},
      {name: 'Igor'},
      {name: 'James'},
      {name: 'Brad'}
    ];
    this.filteredArray = filterFilter(this.array, 'g');
  }]);



phonecatApp.directive('thumbnail', [function() {
  return {
    restrict: 'CA',
    replace: false,
    transclude: false,
    scope: {
            index: '=index',
            item: '=itemdata'
    },
    template: '<a href="#"><img src="{{item.src}}" alt="{{item.alt}}" /></a>',
    link: function(scope, elem, attrs) {

    if (parseInt(scope.index)==0) {
      angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
    }

      elem.bind('click', function() {

        var src = elem.find('img').attr('src');

        // call your SmoothZoom here
        angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
      });
    }
  }
}]);    






