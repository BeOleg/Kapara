'use strict';

describe('Controller: ChatflowCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ChatflowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatflowCtrl = $controller('ChatflowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChatflowCtrl.awesomeThings.length).toBe(3);
  });
});
