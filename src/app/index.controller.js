'use strict';

/**
 * @ngdoc function
 * @name ftwApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the ftwApp
 */
angular.module('preSite')
	.controller('IndexCtrl', function ($window, $timeout, $resource, $scope, leafletData) {
		$scope.home = true;
		$scope.$on('$stateChangeSuccess', function (event, toState) {
			if (toState.name !== 'home') {
				$scope.home = false;
			} else {
				$scope.home = true;
			}
		});
		$scope.topDirections = ['left', 'up'];
		$scope.bottomDirections = ['down', 'right'];
		$scope.isOpen = false;
		$scope.availableModes = ['md-fling', 'md-scale'];
		$scope.selectedMode = 'md-fling';
		$scope.availableDirections = ['up', 'down', 'left', 'right'];
		$scope.selectedDirection = 'up';
		$scope.tile = 'mapbox.pencil';
		$scope.url = 'http://api.tiles.mapbox.com/v4/' + $scope.tile + '/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFnbm9sbyIsImEiOiJuSFdUYkg4In0.5HOykKk0pNP1N3isfPQGTQ';
		$scope.loading = false;
		$scope.layers = {
			baselayers: {
				pencil: {
					url: $scope.url,
					name: 'mapbox.pencil',
					type: 'xyz',
					layerOptions: {
						attribution: ''
					}
				}
			}
		};
		angular.extend($scope, {
			center: {
				lat: 48.209206,
				lng: 16.372778,
				zoom: 15
			}
		});
		angular.extend($scope, {
			defaults: {
				zoomAnimationThreshold: 18,
				dragging: false,
				touchZoom: false,
				scrollWheelZoom: false,
				doubleClickZoom: false,
				keyboard: false,
				zoomControl: false,
				attributionControl: false
			}
		});
		$scope.destroy = function () {
			cancelAnimationFrame($scope.animationID);
		};
		$scope.toX = (Math.round(Math.random()) * 2 - 1); //* 10000;
		$scope.toY = (Math.round(Math.random()) * 2 - 1); //* 10000;
		$scope.animate = function () {
			if ($window.innerWidth >= 400) {
				leafletData.getMap('map').then(function (map) {
					$scope.map = map;
					$scope.map.panBy([$scope.toX, $scope.toY], {
						animate: false,
						duration: 0.1,
						easeLinearity: 1,
						noMoveStart: true
					});
					$scope.animationID = requestAnimationFrame(function () {
						$timeout(function () {
							$scope.animate();
						}, 20);
					});
				});
			}

		};
		$scope.sendReg = function () {
			$scope.center.zoom = 3;
			$scope.loading = true;
			$timeout(function () {
				$scope.center.zoom = 16;
				$scope.loading = false;
			}, 2000);
		};
		$scope.addSubscription = function (mailchimp) {
			// $scope.destroy();
			$scope.center.zoom = 3;
			$scope.loading = true;
			var actions,
				MailChimpSubscription,
				params = {},
				url;
			// Create a resource for interacting with the MailChimp API
			url = '//' + mailchimp.username + '.' + mailchimp.dc +
				'.list-manage.com/subscribe/post-json';
			var fields = Object.keys(mailchimp);
			for (var i = 0; i < fields.length; i++) {
				params[fields[i]] = mailchimp[fields[i]];
			}
			params.c = 'JSON_CALLBACK';
			actions = {
				'save': {
					method: 'jsonp'
				}
			};
			MailChimpSubscription = $resource(url, params, actions);
			// Send subscriber data to MailChimp
			MailChimpSubscription.save(
				// Successfully sent data to MailChimp.
				function (response) {
					// Define message containers.
					mailchimp.errorMessage = '';
					mailchimp.successMessage = '';

					// Store the result from MailChimp
					mailchimp.result = response.result;

					// Mailchimp returned an error.
					if (response.result === 'error') {
						if (response.msg) {
							// Remove error numbers, if any.
							var errorMessageParts = response.msg.split(' - ');
							if (errorMessageParts.length > 1) {
								errorMessageParts.shift(); // Remove the error number
							}
							mailchimp.errorMessage = errorMessageParts.join(' ');
						} else {
							mailchimp.errorMessage = 'Sorry! An unknown error occured.';
						}
					}
					// MailChimp returns a success.
					else if (response.result === 'success') {
						mailchimp.successMessage = response.msg;
						$timeout(function () {
							$scope.center.zoom = 16;
							$scope.loading = false;
							// $scope.animate();
						}, 2000);
					}
				},

				// Error sending data to MailChimp
				function (error) {
					$log.error('MailChimp Error: %o', error);
				}
			);
		};
		$scope.animate();
	});
