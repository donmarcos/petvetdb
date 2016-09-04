angular.module('basketApp.services', [])
.factory('API', function ($rootScope, $http, $ionicLoading, $window) {
       // var base = "http://192.168.1.140:9804";
       // var base = "http://api.mycanasta.rcanto.com";
	   var base = "http://vetpetdb.dev/api/v1";
        $rootScope.show = function (text) {
            $rootScope.loading = $ionicLoading.show({
                content: text ? text : 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        };
 
        $rootScope.hide = function () {
            $ionicLoading.hide();
        };
 
        $rootScope.logout = function () {
            $rootScope.setToken("");
            $window.location.href = '#/auth/signin';
        };
 
        $rootScope.notify =function(text){
            $rootScope.show(text);
            $window.setTimeout(function () {
              $rootScope.hide();
            }, 1999);
        };
 
        $rootScope.doRefresh = function (tab) {
            if(tab == 1)
                $rootScope.$broadcast('fetchAll');
            else
                $rootScope.$broadcast('fetchCompleted');
            
            $rootScope.$broadcast('scroll.refreshComplete');
        };
 
        $rootScope.setToken = function (token) {
            return $window.localStorage.token = token;
        }
 
        $rootScope.getToken = function () {
            return $window.localStorage.token;
        }
 
        $rootScope.isSessionActive = function () {
            return $window.localStorage.token ? true : false;
        }
 
        return {
            signin: function (form) {
                return $http.post(base+'/login', form);
            },
            signup: function (form) {
                return $http.post(base+'/userprofile/create', form);
            },
            getAll: function (email) {
                return $http.get(base+'/api/list', {
                    method: 'GET',
                    params: {
                        token: email
                    }
                });
            },
			getProfile: function (id, email) {
                return $http.get(base+'/userprofile/getprofile/' + id, {
                    method: 'GET',
                    params: {
                        token: email
                    }
                });
            },
            getOne: function (id, email) {
                return $http.get(base+'/api/v1/uberTest/data/item/' + id, {
                    method: 'GET',
                    params: {
                        token: email
                    }
                });
            },
            saveItem: function (form, email) {
                return $http.post(base+'/api/v1/uberTest/data/item', form, {
                    method: 'POST',
                    params: {
                        token: email
                    }
                });
            },
            putItem: function (id, form, email) {
                return $http.put(base+'/api/v1/uberTest/data/item/' + id, form, {
                    method: 'PUT',
                    params: {
                        token: email
                    }
                });
            },
            deleteItem: function (id, email) {
                return $http.delete(base+'/api/v1/uberTest/data/item/' + id, {
                    method: 'DELETE',
                    params: {
                        token: email
                    }
                });
            }
        }
    });