angular.module('promoltaApp', ['ui.router', 'satellizer', 'toastr'])
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
            .state('inboxMessage', {
                url: '/inbox/:msgId',
                templateUrl: 'app/views/readInbox.html',
                controller: 'ReadInboxCtrl'
            })
            .state('sent', {
                url: '/sent',
                templateUrl: 'app/views/sent.html',
                controller: 'SentCtrl'
            })
            .state('sentMessage', {
                url: '/sent/:msgId',
                templateUrl: 'app/views/readSent.html',
                controller: 'ReadSentCtrl'
            })
            .state('draft', {
                url: '/draft',
                templateUrl: 'app/views/draft.html',
                controller: 'DraftCtrl'
            })
            .state('draftMessage', {
                url: '/inbox/:msgId',
                templateUrl: 'app/views/readDraft.html',
                controller: 'ReadDraftCtrl'
            })
            .state('trash', {
                url: '/trash',
                templateUrl: 'app/views/trash.html',
                controller: 'TrashCtrl'
            })
            .state('trashMessage', {
                url: '/inbox/:msgId',
                templateUrl: 'app/views/readTrash.html',
                controller: 'ReadTrashCtrl'
            });
    });
