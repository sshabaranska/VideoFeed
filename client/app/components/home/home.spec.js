describe('Controller: Home', function () {

    // Define global references for injections.
    var scope, ctrl, homeservice, q, deferred;
    beforeEach(module('app'));
    beforeEach(module('ui.router'));
    beforeEach(module('home'));
    beforeEach(module('templates'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        // Instantiate the controller with an object of the dependencies
        ctrl = $controller('HomeController', {
            '$scope': scope
        });
    }));

    describe('Home Controller - videoTypes', function () {
        it('should have videoTypes defined', function () {
            expect(scope.videoTypes).toBeDefined();
        });
    });

    describe('Home Route', function () {
        var $state,
            $rootScope,
            state = 'home';

        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;

            $templateCache.put('dev/app/components/home/home.html', '');
        }));

        it('should respond to URL', function() {
            expect($state.href(state)).toEqual('#!/');
        });

        it('should activate the state', function() {
            $state.go(state);
            $rootScope.$digest();
            expect($state.current.name).toBe(state);
        });
    });

     describe('Home Controller - get videos', function () {

        beforeEach(inject(function($controller, _$rootScope_, _$q_, _homeService_) {
            q = _$q_;
            scope = _$rootScope_.$new();
            deferred = _$q_.defer();

            spyOn(_homeService_, 'queryVideos').and.returnValue(deferred.promise);

            ctrl = $controller('HomeController', { 
                '$scope': scope,
                homeService: _homeService_
            });
        }));

        it('should resolve promise', function () {
            // Setup the data we wish to return for the .then function in the controller
            var res = {
                data: {
                    items: [
                        {
                            source: 'facebook',
                            title: 'test',
                            type: 'video',
                            videoId: '1052114818157758',
                            views: '4569654'

                        }
                    ]
                }
            }
            deferred.resolve(res);
            scope.$apply();

            expect(scope.viewVideoList.length).toBe(1);
        });

        it('should reject promise', function () {
            deferred.reject();
            scope.$apply();

            expect(scope.viewVideoList.length).toBe(0);
        });
    });
});
