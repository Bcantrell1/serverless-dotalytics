export let ChartData = {
    type: 'line',
    data: {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
      datasets: [
        { // one line graph
          label: 'GPM',
          data: [0,
            98,
            -215,
            78,
            -357,
            -530,
            -646,
            -775,
            -994,
            -1238,
            -1115,
            -1061,
            -396,
            -639,
            -1276,
            -1449,
            1131,
            921,
            -271,
            -2265,
            -3500,
            -7329,
            -8824,
            -9333,
            -7662,
            -8229,
            -10610,
            -12900],
          backgroundColor: [
            'rgba(54,73,93,.5)', // Blue
          ],
          borderColor: [
            '#36495d',
          ],
          borderWidth: 3
        },
        { // another line graph
          label: 'XPM',
          data: [0,
            88,
            -44,
            109,
            105,
            -237,
            -1700,
            -1899,
            -2387,
            -2667,
            -2886,
            -2771,
            -2300,
            -2703,
            -3038,
            -3749,
            -3740,
            -3402,
            -3990,
            -4648,
            -6462,
            -9692,
            -12975,
            -14036,
            -9219,
            -9453,
            -12033,
            -15101],
          backgroundColor: [
            'rgba(71, 183,132,.5)', // Green
          ],
          borderColor: [
            '#47b784',
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }
  
  export default ChartData;