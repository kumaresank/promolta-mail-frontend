angular.module('promoltaApp', ['ui.router', 'satellizer'])
    .config(function($stateProvider, $urlRouterProvider, $authProvider) {

        $authProvider.loginUrl = 'http://localhost:8000/api/authenticate';
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/views/login.html',
                controller: 'LoginCtrl'
            })
            .state('inbox', {
                url: '/inbox',
                templateUrl: 'app/views/inbox.html',
                controller: 'InboxCtrl'
            })
            .state('message', {
                url: '/inbox/:msgId',
                templateUrl: 'app/views/read.html',
                controller: 'ReadCtrl'
            })
            .state('sent', {
                url: '/sent',
                templateUrl: 'app/views/sent.html',
                controller: 'SentCtrl'
            })
            .state('draft', {
                url: '/draft',
                templateUrl: 'app/views/draft.html',
                controller: 'DraftCtrl'
            })
            .state('trash', {
                url: '/trash',
                templateUrl: 'app/views/trash.html',
                controller: 'TrashCtrl'
            });
    });
