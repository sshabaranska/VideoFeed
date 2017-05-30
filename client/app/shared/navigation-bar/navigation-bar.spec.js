describe('Controller: Navigation Bar', function () {

    // Define global references for injections.
    var scope, ctrl;
    beforeEach(module('navigation-bar'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        // Instantiate the controller with an object of the dependencies
        ctrl = $controller('NavigationBarController', {
            '$scope': scope
        });
    }));

    describe('NavigationBar Controller Title', function () {
        it('should have title defined', function () {
            expect(scope.title).toBeDefined();
            expect(scope.title).toEqual('VIDEO FEED');
        });
    });
});