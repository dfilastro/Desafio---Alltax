function random() {
  let value = document.getElementById('level1').value;

  if (value === 'computer') {
    var level2 = ['Select a Type', 'Desktop', 'Laptop', '2-in-1'];
  } else if (value === 'TV') {
    var level2 = ['Select a Type', '32-inch', '50-inch', '75-inch'];
  } else if (value === 'tablet') {
    var level2 = ['Select a Type', 'Kids', 'e-Readers', 'Regular'];
  } else {
    var level2 = [];
  }

  let string = '';
  for (let i = 0; i < level2.length; i++) {
    string += '<option>' + level2[i] + '</option>';
  }

  string = '<select name="lol">' + string + '</select>';
  document.getElementById('level2').innerHTML = string;
  document.getElementById('level3').innerHTML = '';

  myChart.data.datasets[0].data = [];
  myChart.update();
}

function random2() {
  let value2 = document.getElementById('level2').value;

  if (value2 === 'Desktop') {
    var level3 = ['Select a Brand', 'Dell', 'Microsoft', 'Positivo'];
  } else if (value2 === 'Laptop') {
    var level3 = ['Select a Brand', 'Dell', 'Apple', 'Lenovo'];
  } else if (value2 === '2-in-1') {
    var level3 = ['Select a Brand', 'Dell', 'Apple', 'Microsoft'];
  } else if (value2 === '32-inch') {
    var level3 = ['Select a Brand', 'Sony', 'LG', 'Samsung'];
  } else if (value2 === '50-inch') {
    var level3 = ['Select a Brand', 'Sony', 'LG', 'Samsung'];
  } else if (value2 === '75-inch') {
    var level3 = ['Select a Brand', 'Sony', 'LG', 'Samsung'];
  } else if (value2 === 'Kids') {
    var level3 = ['Select a Brand', 'Amazon', 'Kurio', 'Samsung'];
  } else if (value2 === 'e-Readers') {
    var level3 = ['Select a Brand', 'Amazon', 'BOOX', 'OGIO'];
  } else if (value2 === 'Regular') {
    var level3 = ['Select a Brand', 'Apple', 'Microsoft', 'Samsung'];
  } else {
    var level3 = [];
  }

  let string = '';
  for (let i = 0; i < level3.length; i++) {
    string += '<option>' + level3[i] + '</option>';
  }

  string = '<select name="lol">' + string + '</select>';
  document.getElementById('level3').innerHTML = string;

  myChart.data.datasets[0].data = [];
  myChart.update();
}

function setValues() {
  let value2 = document.getElementById('level2').value;
  let value3 = document.getElementById('level3').value;

  if (value2 === 'Desktop' && value3 === 'Dell') {
    myChart.data.datasets[0].data = [15, 17, 16, 19];
    myChart.update();
  } else if (value2 === 'Desktop' && value3 === 'Microsoft') {
    myChart.data.datasets[0].data = [12, 10, 8, 11];
    myChart.update();
  } else if (value2 === 'Desktop' && value3 === 'Positivo') {
    myChart.data.datasets[0].data = [11, 11, 13, 15];
    myChart.update();
  } else if (value2 === 'Laptop' && value3 === 'Dell') {
    myChart.data.datasets[0].data = [33, 31, 32, 27];
    myChart.update();
  } else if (value2 === 'Laptop' && value3 === 'Apple') {
    myChart.data.datasets[0].data = [45, 48, 44, 52];
    myChart.update();
  } else if (value2 === 'Laptop' && value3 === 'Lenovo') {
    myChart.data.datasets[0].data = [10, 13, 8, 6];
    myChart.update();
  } else if (value2 === '2-in-1' && value3 === 'Dell') {
    myChart.data.datasets[0].data = [4, 3, 3, 5];
    myChart.update();
  } else if (value2 === '2-in-1' && value3 === 'Apple') {
    myChart.data.datasets[0].data = [5, 5, 3, 2];
    myChart.update();
  } else if (value2 === '2-in-1' && value3 === 'Microsoft') {
    myChart.data.datasets[0].data = [2, 3, 4, 6];
    myChart.update();
  } else if (value2 === '32-inch' && value3 === 'Sony') {
    myChart.data.datasets[0].data = [10, 13, 8, 6];
    myChart.update();
  } else if (value2 === '32-inch' && value3 === 'LG') {
    myChart.data.datasets[0].data = [11, 11, 13, 15];
    myChart.update();
  } else if (value2 === '32-inch' && value3 === 'Samsung') {
    myChart.data.datasets[0].data = [9, 9, 10, 13];
    myChart.update();
  } else if (value2 === '50-inch' && value3 === 'Sony') {
    myChart.data.datasets[0].data = [15, 18, 13, 11];
    myChart.update();
  } else if (value2 === '50-inch' && value3 === 'LG') {
    myChart.data.datasets[0].data = [16, 15, 19, 19];
    myChart.update();
  } else if (value2 === '50-inch' && value3 === 'Samsung') {
    myChart.data.datasets[0].data = [13, 16, 8, 7];
    myChart.update();
  } else if (value2 === '75-inch' && value3 === 'Sony') {
    myChart.data.datasets[0].data = [20, 23, 28, 26];
    myChart.update();
  } else if (value2 === '75-inch' && value3 === 'LG') {
    myChart.data.datasets[0].data = [21, 21, 23, 25];
    myChart.update();
  } else if (value2 === '75-inch' && value3 === 'Samsung') {
    myChart.data.datasets[0].data = [19, 19, 20, 23];
    myChart.update();
  } else if (value2 === 'Kids' && value3 === 'Amazon') {
    myChart.data.datasets[0].data = [2, 3, 2, 1];
    myChart.update();
  } else if (value2 === 'Kids' && value3 === 'Kurio') {
    myChart.data.datasets[0].data = [1, 2, 2, 1];
    myChart.update();
  } else if (value2 === 'Kids' && value3 === 'Samsung') {
    myChart.data.datasets[0].data = [3, 2, 3, 4];
    myChart.update();
  } else if (value2 === 'e-Readers' && value3 === 'Amazon') {
    myChart.data.datasets[0].data = [1, 0.75, 0.5, 0.8];
    myChart.update();
  } else if (value2 === 'e-Readers' && value3 === 'BOOX') {
    myChart.data.datasets[0].data = [0.23, 0.13, 0.2, 0.1];
    myChart.update();
  } else if (value2 === 'e-Readers' && value3 === 'OGIO') {
    myChart.data.datasets[0].data = [0.4, 0.3, 0.2, 0.1];
    myChart.update();
  } else if (value2 === 'Regular' && value3 === 'Apple') {
    myChart.data.datasets[0].data = [5, 7, 8, 8];
    myChart.update();
  } else if (value2 === 'Regular' && value3 === 'Microsoft') {
    myChart.data.datasets[0].data = [2, 3, 2, 4];
    myChart.update();
  } else if (value2 === 'Regular' && value3 === 'Samsung') {
    myChart.data.datasets[0].data = [4, 3, 5, 5];
    myChart.update();
  }
}

const labels = ['January', 'February', 'March', 'April'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Monthly Sells x 1000 [US$]',
      backgroundColor: '#234a75',
      data: [],
    },
  ],
};

const config = {
  type: 'bar',
  data: data,
  options: { type: 'scale' },
};

random();
random2();
