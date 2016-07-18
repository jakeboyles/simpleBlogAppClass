describe('SingleBlog', function() {
  beforeEach(module('starter'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Single Blog Testing', function() {
    it('Testing calculate function from controller', function() {


      var $scope = {};
      var controller = $controller('singleBlog',{$scope:$scope});

      controller.firstName = "Jarrod";
      expect(controller.fullName()).toEqual("Jarrod Boyles");

      //expect(controller.addition(2,3)).toEqual(6);

      expect(controller.subtraction(10,5)).toEqual(5);

      var animal = {
        type:"hippo",
        name:"taco",
        sound:"bark",
      }
      expect(controller.checkSound(animal)).toEqual('meow');


    });
  });


  describe('Main controller Testing', function() {
    it('Testing stuff from the main controller', function() {


      var $scope = {};
      var controller = $controller('MainController',{$scope:$scope});

      expect(controller.makeFullNames("Chuck","Norris")).toEqual("Chuck Norris");

    });
  });
});