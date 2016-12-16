angular.module('promoltaApp')
    .controller('AppCtrl', function($scope, $auth, $state, $http, $rootScope, toastr) {
        $scope.compose = {
            email: '',
            subject: '',
            body: '',
            attachment: ''
        }
        $scope.logout = function() {
            $auth.logout();
            $state.go('login');
        }
        $rootScope.getCount = function() {
            $http.get("http://localhost:8000/api/mail/count")
                .then(function(response) {
                    $scope.count = response.data;
                });
        }
        $scope.sendMail = function() {
            var fd = new FormData();
            fd.append('to', $scope.compose.to);
            fd.append('subject', $scope.compose.subject);
            fd.append('body', $scope.compose.body);
            fd.append('attachment', $scope.compose.attachment);
            $http.post('http://localhost:8000/api/compose', fd, { headers: { 'Content-Type': undefined } })
                .then(function(response) {
                    if (response.data.success) {
                        $('#composeModal').modal('toggle');
                        $rootScope.getCount();
                        toastr.success('Success', 'Mail Sent!');
                    }
                });
        }
    })
    .controller('LoginCtrl', function($scope, $auth, $state) {
        $scope.login = function() {
            var user = {
                email: $scope.email,
                password: $scope.password
            };
            $auth.login(user)
                .then(function(response) {
                    $state.go('inbox');
                })
                .catch(function(response) {
                    console.log(response);
                });
        }
    })
    .controller('InboxCtrl', function($scope, $auth, $state, $http, $rootScope) {
        $rootScope.getCount();
        $http.get("http://localhost:8000/api/inbox")
            .then(function(response) {
                $scope.inbox = response.data;
            });
    })
    .controller('SentCtrl', function($scope, $auth, $state, $http, $rootScope) {
        $rootScope.getCount();
        $http.get("http://localhost:8000/api/sent")
            .then(function(response) {
                $scope.sent = response.data;
            });
    })
    .controller('DraftCtrl', function($scope, $auth, $state, $http, $rootScope) {
        $rootScope.getCount();
        $http.get("http://localhost:8000/api/draft")
            .then(function(response) {
                $scope.draft = response.data;
            });
    })
    .controller('TrashCtrl', function($scope, $auth, $state, $http, $rootScope) {
        $rootScope.getCount();
        $http.get("http://localhost:8000/api/trash")
            .then(function(response) {
                $scope.trash = response.data;
            });
    })
    .controller('ReadInboxCtrl', function($scope, $auth, $state, $http, $stateParams, $rootScope) {
        $rootScope.getCount();
        $http.get("http://localhost:8000/api/inbox/" + $stateParams.msgId)
            .then(function(response) {
                $scope.mail = response.data;
            });
    })
    .controller('ReadSentCtrl', function($scope, $auth, $state, $http, $stateParams, $rootScope) {
        $rootScope.getCount();
        $http.get("http://localhost:8000/api/inbox/" + $stateParams.msgId)
            .then(function(response) {
                $scope.mail = response.data;
            });
    })
    .controller('ReadDraftCtrl', function($scope, $auth, $state, $http, $stateParams, $rootScope) {
        $rootScope.getCount();
        $http.get("http://localhost:8000/api/draft/" + $stateParams.msgId)
            .then(function(response) {
                $scope.mail = response.data;
            });
    })
    .controller('ReadTrashCtrl', function($scope, $auth, $state, $http, $stateParams, $rootScope) {
        $rootScope.getCount();
        $http.get("http://localhost:8000/api/trash/" + $stateParams.msgId)
            .then(function(response) {
                $scope.mail = response.data;
            });
    })
