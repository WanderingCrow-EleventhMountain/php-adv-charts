$(document).ready(function(){

  function printFC(data) {

    var ctx = $("#linea");

    var myChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
          datasets: [{
              label: 'FUNZIONAPLS',
              data: data['data']
          }]
      }
    });
  }

  function printAgents(data) {

    var ctx = $("#torta");

    var myChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: data['labels'],
          datasets: [{
              label: 'FUNZIONAPLS',
              data: data['data']
          }]
      }
    });
  }

  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function(data){
      printFC(data['fatturato']);
      printAgents(data['fatturato_by_agent']);
    },
    error: function(error){
      alert("lolnope");
    }
  });
});
