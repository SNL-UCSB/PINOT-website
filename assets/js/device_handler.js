function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const eth_mac = encodeURIComponent(getQueryParam('device_label'));

$(document).ready(function () {
    // Fetch data from the API using AJAX
    $.ajax({
        url: `https://pinot.cs.ucsb.edu/api/v1/info/wifistats_ethmac?ethernet_mac=eq.${eth_mac}&order=time.desc&limit=100`,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error fetching data:', textStatus, errorThrown);
        }
    });
});

