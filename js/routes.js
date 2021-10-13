angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('criarConta', {
    url: '/page3',
    templateUrl: 'templates/criarConta.html',
    controller: 'criarContaCtrl'
  })

  .state('ReaInicial', {
    url: '/page4',
    templateUrl: 'templates/ReaInicial.html',
    controller: 'ReaInicialCtrl'
  })

  .state('crieSuaNovaMissO', {
    url: '/page7',
    templateUrl: 'templates/crieSuaNovaMissO.html',
    controller: 'crieSuaNovaMissOCtrl'
  })

  .state('missEs', {
    url: '/page8',
    templateUrl: 'templates/missEs.html',
    controller: 'missEsCtrl'
  })

  .state('histRicoDoJogador', {
    url: '/page9',
    templateUrl: 'templates/histRicoDoJogador.html',
    controller: 'histRicoDoJogadorCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});