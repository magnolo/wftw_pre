(function () {
	'use strict';

	angular
		.module('preSite')
		.controller('HomeController', HomeController);

	/** @ngInject */
	function HomeController($state, $rootScope) {
		var vm = this;
    vm.current = $state.current.name;
		$rootScope.$on('$stateChangeSuccess',
			function (event, toState, toParams, fromState, fromParams) {
				vm.current = toState.name;
			})
	}
})();
