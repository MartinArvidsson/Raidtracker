'use strict'
const app = angular.module('myApp', []);
const _mythicKills = {};
var achievementsCompletedTimestamp;
var achievementsCompleted;

app.controller('raidController', ['$scope', '$http', 'apiService', function ($scope, $http, apiService) {
    $scope.raiders = [
        { Name: "Jedslims", Character: "Jedslims", Guild: "FatsharkYes", Region: "EU", Realm: "Kazzak" },
        { Name: "Brenwyn", Character: "Brenwyn", Guild: "Solaris", Region: "EU", Realm: "Ragnaros" },
        { Name: "Nerves", Character: "Neerves", Guild: "Solaris", Region: "EU", Realm: "Ragnaros" },
        { Name: "Proximitynz", Character: "Proximitynz", Guild: "One", Region: "US", Realm: "Frostmourne" },
        { Name: "Daarshan", Character: "Daarshan", Guild: "Happy Accidents", Region: "US", Realm: "Area-52" },
        { Name: "Hula", Character: "Hulamom", Guild: "Happy Accidents", Region: "US", Realm: "Area-52" },
        { Name: "Moofz", Character: "Moofz", Guild: "Happy Accidents", Region: "US", Realm: "Area-52" },
        { Name: "Dal", Character: "Delcenti", Guild: "Death Jesters", Region: "US", Realm: "Stormrage" },
        { Name: "Bananbrus", Character: "Bananbrus", Guild: "Familiar With Drama", Region: "EU", Realm: "Ravencrest" },
        { Name: "Ghost", Character: "Ghosteld", Guild: "Lol guildless", Region: "EU", Realm: "Sunstrider" },
        { Name: "Putro", Character: "Putrohunt", Guild: "Phoenix", Region: "EU", Realm: "Silvermoon" },
        { Name: "Wobberc", Character: "Wobberc", Guild: "Phoenix", Region: "EU", Realm: "Silvermoon" },
        { Name: "Artiks", Character: "Artiks", Guild: "Phoenix", Region: "EU", Realm: "Silvermoon" },
        { Name: "Shizzlee", Character: "Shizzlee", Guild: "Grave", Region: "EU", Realm: "Draenor" },
        { Name: "Mayco", Character: "Emlis", Guild: "Washed Up", Region: "US", Realm: "Saurfang" },
        { Name: "Pudgypew", Character: "Pudgypew", Guild: "Bad Alts", Region: "EU", Realm: "Silvermoon" },
        { Name: "Gorno", Character: "Gorno", Guild: "Bad Alts", Region: "EU", Realm: "Silvermoon" },
        { Name: "Faith", Character: "Wrekedrood", Guild: "Infallible", Region: "US", Realm: "Whisperwind" },
        { Name: "Shyáel", Character: "Shyáel", Guild: "Warm", Region: "EU", Realm: "Silvermoon" }
    ];

    $scope.headers = [
        " ",
        "Name",
        "Guild",
        "Region",
        "Goroth",
        "Demonic Duo",
        "Harjatan",
        "Sisters",
        "Mistress",
        "Host",
        "Maiden",
        "Avatar",
        "Kil'jaeden",
        "Total kills:"
    ];

    $scope.calcKills = function (responseData) {
        achievementsCompleted = responseData.achievements.achievementsCompleted;
        achievementsCompletedTimestamp = responseData.achievements.achievementsCompletedTimestamp;
        for (var i = 0; i < $scope.raiders.length; i++) {
            if (responseData.name === $scope.raiders[i].Character) {
                $scope.raiders[i]["totalkills"] = 0;

                if (achievementsCompleted.includes(11767)) {
                    $scope.raiders[i]["goroth"] = getAchivementDate(11767);
                    $scope.raiders[i]["totalkills"] = 1;
                }
                if (achievementsCompleted.includes(11774)) {
                    $scope.raiders[i]["demonic"] = getAchivementDate(11774);
                    $scope.raiders[i].totalkills += 1;
                }
                if (achievementsCompleted.includes(11775)) {
                    $scope.raiders[i]["harjatan"] = getAchivementDate(11775);
                    $scope.raiders[i].totalkills += 1;
                }
                if (achievementsCompleted.includes(11776)) {
                    $scope.raiders[i]["mistress"] = getAchivementDate(11776);
                    $scope.raiders[i].totalkills += 1;
                }
                if (achievementsCompleted.includes(11777)) {
                    $scope.raiders[i]["sisters"] = getAchivementDate(11777);
                    $scope.raiders[i].totalkills += 1;
                }
                if (achievementsCompleted.includes(11778)) {
                    $scope.raiders[i]["host"] = getAchivementDate(11778);
                    $scope.raiders[i].totalkills += 1;
                }
                if (achievementsCompleted.includes(11779)) {
                    $scope.raiders[i]["maiden"] = getAchivementDate(11779);
                    $scope.raiders[i].totalkills += 1;
                }
                if (achievementsCompleted.includes(11780)) {
                    $scope.raiders[i]["avatar"] = getAchivementDate(11780);
                    $scope.raiders[i].totalkills += 1;
                    
                }
                if (achievementsCompleted.includes(11781)) {
                    $scope.raiders[i]["kj"] = getAchivementDate(11781);
                    $scope.raiders[i].totalkills += 1;
                }
            }
        }
    };

    const getAchivementDate = function(achivementID){
        var regex = /(..[A-z]\s[0-9].)/;
        var pos = achievementsCompleted.indexOf(achivementID);
                    var dateOfKill = achievementsCompletedTimestamp[pos];
                    var date = new Date(dateOfKill);
                    var dateToString = date.toString();
                    var dateValue = dateToString.match(regex);
                    return dateValue[0];
    }

    const init = function () {
        for (var i = 0; i < $scope.raiders.length; i++) {
            apiService.getAchivements($scope.raiders[i].Character, $scope.raiders[i].Realm, $scope.raiders[i].Region).then(function (data) {
                $scope.calcKills(data)
            }), function (error) {
                console.log(error);
            }
        }
    };
    init();
}]);

app.factory('apiService', function ($http, $q) {
    return {
        getAchivements: function (Character, Realm, Region) {
            // the $http API is based on the deferred/promise APIs exposed by the $q service
            // so it returns a promise for us by default
            return $http.get('https://' + Region + '.api.battle.net/wow/character/' + Realm + '/' +
                Character + '?fields=achievements&locale=en_GB&apikey=rc8fa2wgkks6f9tffd96hmgq3qwzmuhn')
                .then(function (response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function (response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        }
    };
});