var myApp = angular.module("myApp", ['ui.calendar'])
var googleCalendarKey = "AIzaSyB9pEU5SROKl0zwMxa-Gv1mBjFh2mnSaVk"

myApp.controller('MyController', function($scope, $compile, uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that contains custom events on the scope */
    $scope.events = [];
    
    $scope.eventSources1 = {
            url: "en.usa#holiday@group.v.calendar.google.com",
            googleCalendarApiKey: googleCalendarKey
    };

    $scope.eventSource2 = {
            url: "uw.edu_mcctklqdrmu7jmgquutmv6p3l0@group.calendar.google.com",
            googleCalendarApiKey: googleCalendarKey
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        alert('You clicked an item!!!!');
    };
    
    
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: $scope.title,
        start: new Date($scope.year, $scope.month - 1, $scope.startDate, $scope.startHour),
        end: new Date($scope.year, $scope.month - 1, $scope.finishDate, $scope.finishHour),
        stick: true
      });
      $scope.clickDate = 0;
    };
    
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };

    
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title month agendaWeek',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick
      }
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSources1, $scope.eventSources2];
    console.log($scope.events);
});