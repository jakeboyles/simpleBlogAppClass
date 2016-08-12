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
      expect(controller.fullName("Jarrod")).toEqual("Jarrod Boyles");

      expect(controller.subtraction(10,5)).toEqual(5);

      var animal = {
        type:"hippo",
        name:"mr hippo",
        sound:"meow",
      };

      expect(controller.checkSound(animal)).toEqual('meow');

    });
  });
});