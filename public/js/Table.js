
var raiders =[
{ Name:"Jedslims", Guild:"FatsharkYes", Region:"EU" },{Name:"Brenwyn",Guild:"Solaris",Region:"EU"},{Name:"Nerves",Guild:"Solaris",Region:"EU"},
{ Name:"Jedslims", Guild:"FatsharkYes", Region:"EU" },{Name:"Brenwyn",Guild:"Solaris",Region:"EU"},{Name:"Nerves",Guild:"Solaris",Region:"EU"},
{ Name:"Proximitynz", Guild:"One", Region:"US" },{Name:"Daarshan",Guild:"Club Camel",Region:"US"},{Name:"Hula",Guild:"Happy Accidents",Region:"US"},
{ Name:"Moofz", Guild:"Happy Accidents", Region:"US" },{Name:"Dal",Guild:"Death Jesters",Region:"US"},
{Name:"Bananbrus",Guild:"Familiar With Drama",Region:"EU"},{ Name:"Ghost", Guild:"Lol guildess", Region:"EU" },{Name:"Putro",Guild:"Phoenix",Region:"EU"},
{Name:"Wobberc",Guild:"Phoenix",Region:"EU"},{ Name:"Artiks", Guild:"Phoenix", Region:"EU" },{Name:"Shizzlee",Guild:"Grave",Region:"EU"},
{Name:"Mayco",Guild:"Washed Up",Region:"US"},{ Name:"Pudgypew", Guild:"Bad Alts", Region:"EU" },{ Name:"Gorno", Guild:"Bad Alts", Region:"EU" },
{ Name:"Faith", Guild:"Infallible", Region:"US" },{ Name:"Shyáel", Guild:"Warm", Region:"EU" },
];


var app = angular.module('generateRaiders',[]);
generateRaiders.controller('raiders'), function($scope){
    $scope = raiders;
}