var app = angular.module('myApp', []);

app.controller('raiders', ['$scope', function ($scope) {
    $scope.raiders = [
        { Name: "Jedslims", Guild: "FatsharkYes", Region: "EU" }, { Name: "Brenwyn", Guild: "Solaris", Region: "EU" }, { Name: "Nerves", Guild: "Solaris", Region: "EU" },
        { Name: "Proximitynz", Guild: "One", Region: "US" }, { Name: "Daarshan", Guild: "Club Camel", Region: "US" }, { Name: "Hula", Guild: "Happy Accidents", Region: "US" },
        { Name: "Moofz", Guild: "Happy Accidents", Region: "US" }, { Name: "Dal", Guild: "Death Jesters", Region: "US" },
        { Name: "Bananbrus", Guild: "Familiar With Drama", Region: "EU" }, { Name: "Ghost", Guild: "Lol guildess", Region: "EU" }, { Name: "Putro", Guild: "Phoenix", Region: "EU" },
        { Name: "Wobberc", Guild: "Phoenix", Region: "EU" }, { Name: "Artiks", Guild: "Phoenix", Region: "EU" }, { Name: "Shizzlee", Guild: "Grave", Region: "EU" },
        { Name: "Mayco", Guild: "Washed Up", Region: "US" }, { Name: "Pudgypew", Guild: "Bad Alts", Region: "EU" }, { Name: "Gorno", Guild: "Bad Alts", Region: "EU" },
        { Name: "Faith", Guild: "Infallible", Region: "US" }, { Name: "Shyáel", Guild: "Warm", Region: "EU" }
    ];

    $scope.headers = [
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

    $scope.mythicKills = {

    };
/*$scope.mythicKills = function(){
        var _mythicKills =  {};
        for (var raider in $scope.raiders) {
            _mythicKills[raider.Name] = tosKills(raider.Name,raider.Server,raider.Region)
        }
}*/
    

}]);

/*var tosKills = function(Name,Server,Region){
    var totalkills = {
        person: name,
        gorothKilled = false,
        demonicKilled = false,
        harjatanKilled = false,
        sistersKilled = false,
        mistressKilled = false,
        hostKilled = false,
        maidenKilled = false,
        avatarKilled = false,
        kiljaedenKilled = false
    };

    var response = UrlFetchApp.fetch('https://'+Region+'.api.battle.net/wow/character/'+Server+'/'+Name+'?fields=achievements&locale=en_GB&apikey=rc8fa2wgkks6f9tffd96hmgq3qwzmuhn');
    var dataAll = JSON.parse(response);
    var data = dataAll.achievements.achievementsCompleted;
     if(isInArray(11767,data) === true){
         totalkills.gorothKilled = true;
     }
     if(isInArray(11774,data) === true){
         totalkills.demonicKilled = true;
     }
     if(isInArray(11775,data) === true){
         totalkills.harjatanKilled = true;
     }
     if(isInArray(11776,data) === true){
         totalkills.sistersKilled = true;
     }
     if(isInArray(11777,data) === true){
         totalkills.mistressKilled = true;
     }
     if(isInArray(11778,data) === true){
         totalkills.hostKilled = true;
     }
     if(isInArray(11779,data) === true){
         totalkills.maidenKilled = true;
     }
     if(isInArray(11780,data) === true){
         totalkills.avatarKilled = true;
     }
     if(isInArray(11781,data) === true){
         totalkills.kiljaedenKilled = true;
     }

     return totalkills;
}*/