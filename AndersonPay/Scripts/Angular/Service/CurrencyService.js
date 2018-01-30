﻿(function () {
    'use strict';

    angular
        .module('App')
        .factory('CurrencyService', CurrencyService);

    CurrencyService.$inject = ['$http'];

    function CurrencyService($http) {
        return {
            Read: Read,
            ReadCurrencyServiceinee: ReadCurrencyServiceinee,
            ReadCurrencyForPosition: ReadCurrencyForPosition
        }

        function Read() {
            return $http({
                method: 'POST',
                url: '/Currency/Read',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }

        function ReadCurrencyServiceinee(currencyineeId) {
            return $http({
                method: 'POST',
                url: '/Currency/ReadCurrencyServiceinee/' + currencyineeId,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }

        function ReadCurrencyForPosition(positionId) {
            return $http({
                method: 'POST',
                url: '/Currency/ReadCurrencyForPosition/' + positionId,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }
    }
})();