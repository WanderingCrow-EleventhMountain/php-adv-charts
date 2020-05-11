$(document).ready(function(){

  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data){

      var dati = data;
      console.log(dati);
      var ctx = $("#myChart");
      var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
        datasets: [{
            label: 'Grafico',
            data: dati,
            backgroundColor: [
                'rgba(0, 160, 0, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(213, 42, 24, 0.7)',
                'rgba(164, 74, 28, 0.7)',
                'rgba(231, 28, 75, 0.7)',
                'rgba(185, 85, 36, 0.7)',
                'rgba(153, 217, 225, 0.7)',
                'rgba(217, 185, 185, 0.7)',
                'rgba(53, 194, 153, 0.7)',

            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(213, 42, 24, 1)',
                'rgba(164, 74, 28, 1)',
                'rgba(231, 28, 75, 1)',
                'rgba(185, 85, 36, 1)',
                'rgba(153, 217, 225, 1)',
                'rgba(217, 185, 185, 1)',
                'rgba(53, 194, 153, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    },
    error: function(error){
      alert("nope" + error);
    },

  });
});
