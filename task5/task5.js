var arr = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function fillArray() {
  for (var i = 0; i < 20; i++) {
    arr.push(getRandom(-100, 100));
  }
}

function replaceFromArray() {
  for (var key in arr) {
    if (arr[key] < 0) {
      arr[key] = 0;
    }
  }
}

function addToArray() {
  var indexes = [];
  var arr2 = [];

  for (var key in arr) {
    if (key % 2 == 0 && arr[key] == 0) {
      indexes.push(key);
    }
  }

  for (var key in arr) {
    arr2.push(arr[key]);

    if (indexes.indexOf(key) > -1) {
      arr2.push(-1);
    }
  }

  arr = [...arr2];
}

function task5() {
  var resultArray = [];

  fillArray();
  resultArray.push([...arr]);

  replaceFromArray();
  resultArray.push([...arr]);

  addToArray();
  resultArray.push([...arr]);

  return resultArray;
}
