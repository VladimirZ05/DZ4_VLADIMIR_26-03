var data = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo'];

var groupedData = {};
var i = 0;
while (i < data.length) {
    var number = data[i];
    var type = typeof value;
    if (!groupedData[type]) {
        groupedData[type] = [];
    }
    groupedData[type].push(number);
    i++;
}
var arrays = Object.values(groupedData); //функция схожа с for in


arrays.sort((a, b) => b.length - a.length);

console.log(arrays);