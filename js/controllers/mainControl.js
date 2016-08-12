(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('MainController', function(API,back,fileUpload) {
       var vm = this;

       var ctx = document.getElementById("myChart");


    
      var weatherData = API.getWeatherData('cincinnati');
      weatherData.then(function(response){
        var data = response.data.list;

        var tempsMap = data.map(function(day){
          return day.temp.max;
        });

        var tempsMins = data.map(function(day){
          return day.temp.min;
        });

        var DaysMap = data.map(function(day){
          var day = moment.unix(day.dt).format("dddd");
          return day;
        })


        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: DaysMap,
                datasets: [{
                    label: 'Maxs',
                    data: tempsMap,
                    backgroundColor: 'rgba(255,0,0,.2)',
                },
                {
                    label: 'Mins',
                    data: tempsMins,
                    backgroundColor: 'rgba(0,0,255,.4)',
                }
                ]
            },
        });


      })

       var BlogData = back.getList();

       BlogData.then(function(results){
       		 vm.blogs = results.data;
       });

      vm.submit = function(){
       var loading = fileUpload.uploadImage('fileInput');
       loading.then(function(results){
        vm.url = results.data.url;
       })

      }


   });   
})();