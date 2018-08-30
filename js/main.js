window.onload = function () { }
    //alert("It's loaded!")
    var ctx = document.getElementById("myChart").getContext('2d');
    //Chart.defaults.global.barPercentage = 0.3;
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [".com", ".org", ".net", ".int", ".edu", ".gov", ".mil"],
            datasets: [{
                label: '# de dominios registrados',
                data: [136757968, 10401816, 14038066, 203, 7424, 5718, 1611],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            barThickness: 15,
            barPercentage: 0.3, 
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    // https://namestat.org/