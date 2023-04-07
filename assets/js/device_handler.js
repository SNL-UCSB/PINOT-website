function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const eth_mac = encodeURIComponent(getQueryParam('label'));

$(document).ready(function () {
    // Fetch data from the API using AJAX
    $.ajax({
        url: `https://pinot.cs.ucsb.edu/api/v1/info/wifistats_ethmac?ethernet_mac=eq.${eth_mac}&order=time.desc&limit=200`,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            init_plot(data);
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error fetching data:', textStatus, errorThrown);
        }
    });
});

function extractAverageRTT(inputString) {
    const regex = /rtt min\/avg\/max\/mdev = [\d.]+\/([\d.]+)\/[\d.]+\/[\d.]+ ms/;
    const match = inputString.match(regex);

    if (match && match[1]) {
        return parseFloat(match[1]);
    } else {
        throw new Error('Invalid input string format');
    }
}

function init_plot(data) {

    const ctx = document.getElementById('deviceChar').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.time),
            datasets: [
                {
                    label: 'Signal Strength (dBm)',
                    data: data.map(d => d.signal),
                    borderColor: '#ff7f0e',
                    yAxisID: 'y1',
                },
                {
                    label: 'Ping to UCSB gateway (ms)',
                    data: data.map(d => extractAverageRTT(d.ping)),
                    borderColor: '#2ca02c',
                    yAxisID: 'y2',
                },

            ]
        },
        options: {
            scales: {
                y1: {
                    type: 'linear',
                    position: 'left',
                    min: -128,
                    max: 0,
                },
                y2: {
                    type: 'linear',
                    position: 'right',
                },
            },
        },
    });
}
