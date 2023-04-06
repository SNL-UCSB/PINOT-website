function bytesToMegabytes(data, type, row) {
    if (type === 'display') {
        return (data / (1024 * 1024)).toFixed(2) + ' MB';
    }
    return data;
}

function nullableDate(data, type, row) {
    if (type === 'display') {
        if (data == null) {
            return data;
        }
        return DataTable.render.datetime('MMMM dd yyyy, h:mm:ss a')(data)
    }
    return data;
}

$(document).ready(function () {
    // Fetch data from the API using AJAX
    $.ajax({
        url: 'https://pinot.cs.ucsb.edu/api/v1/info/wifi_united',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            // Initialize DataTables with the fetched data
            $('#pinotNodesStatus').DataTable({
                data: data,
                order: [[1, 'desc']],
                columns: [
                    {data: 'label', title: 'Label'},
                    {
                        data: 'last_contacted',
                        title: 'Last contacted',
                        render: nullableDate
                    },
                    {data: 'uptime', title: 'Uptime'},
                    {data: 'location', title: 'Location'},
                    {
                        data: 'wired_bytes',
                        title: 'Wired Traffic',
                        render: bytesToMegabytes
                    },
                    {
                        data: 'wireless_bytes',
                        title: 'Wireless Traffic',
                        render: bytesToMegabytes
                    },
                    {data: 'ping', title: 'Ping to UCSB border gateway'},
                    {
                        data: 'signal', title: 'Signal Strength',
                        render: (data, type, row) =>
                            type === 'display' && data !== null ? data + " dBm" : data,
                    },
                    {data: "tx_bitrate", title: "TX bitrate"},
                    {data: "rx_bitrate", title: "RX bitrate"},
                    {
                        data: "packet_loss", title: "Packet Loss",
                        render: (data, type, row) =>
                            type === 'display' && data !== null ? data + "% out of 5 packets" : data,
                    },
                    { data: "connected_time", title: "WiFi connected time" },
                ]
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error fetching data:', textStatus, errorThrown);
        }
    });
});