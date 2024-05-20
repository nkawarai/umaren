let chart; // グローバル変数としてチャートを保持する

function drawGraph() {
    const dataInput1 = document.getElementById('dataInput1').value;
    const dataInput2 = document.getElementById('dataInput2').value;

    const dataPoints1 = dataInput1.split('-').map(Number);
    const dataPoints2 = dataInput2.split('-').map(Number);
    const labels = Math.max(dataPoints1.length, dataPoints2.length);
    const labelArray = Array.from({length: labels}, (_, i) => i + 1);

    const datasets = [];
    if (dataInput1 && dataPoints1.every(n => !isNaN(n))) {
        datasets.push({
            label: 'ラップ1',
            data: dataPoints1,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        });
    }
    if (dataInput2 && dataPoints2.every(n => !isNaN(n))) {
        datasets.push({
            label: 'ラップ2',
            data: dataPoints2,
            borderColor: 'rgba(192, 75, 75, 1)',
            borderWidth: 2,
            fill: false
        });
    }

    const ctx = document.getElementById('lineChart').getContext('2d');

    // 既存のチャートがあれば破棄する
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelArray,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'black' // 凡例の色を黒に設定
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '距離',
                        color: 'black' // 軸タイトルの色を黒に設定
                    },
                    ticks: {
                        color: 'black' // 軸の目盛りの色を黒に設定
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'タイム',
                        color: 'black' // 軸タイトルの色を黒に設定
                    },
                    ticks: {
                        color: 'black' // 軸の目盛りの色を黒に設定
                    },
                    min: 10.0, // 縦軸の最小値を設定
                    max: 14.0  // 縦軸の最大値を設定
                }
            }
        }
    });
}
