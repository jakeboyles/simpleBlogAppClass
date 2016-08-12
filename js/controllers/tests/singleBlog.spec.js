describe('SingleBlog', function() {
  beforeEach(module('starter'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Single Blog Testing', function() {

    var $scope = {};
      
    it('Testing calculate function from controller', function() {
      var controller = $controller('singleBlog',{$scope:$scope});
      controller.firstName = "Jarrod";
      expect(controller.fullName("Jarrod")).toEqual("Jarrod Boyles");
    });

    it('test subtraction',function(){
      var controller = $controller('singleBlog',{$scope:$scope});
      expect(controller.subtraction(10,5)).toEqual(5);
    });

    it('testing animals',function(){
      var controller = $controller('singleBlog',{$scope:$scope});
      
      var animal = {
        type:"hippo",
        name:"mr hippo",
        sound:"meow",
      };

      expect(controller.checkSound(animal)).toEqual('meow');
    })
  });
});