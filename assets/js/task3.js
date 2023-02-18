
let calc = document.querySelector("#calculator");
let firstInp = calc.children[0].firstElementChild.children[0]
let secondInp = calc.children[0].firstElementChild.children[1]


let sum = calc.children[0].children[1].firstElementChild;
let minus = calc.children[0].children[1].children[1];
let multiple = calc.children[0].children[1].children[2];
let divide = calc.children[0].children[1].children[3];

let result = calc.children[0].lastElementChild.firstElementChild;

function clear() {
    firstInp.value = ""
    secondInp.value = ""
}
function showResult(res) {
    result.value = res;
}
let res = "";

sum.addEventListener("click", function () {
    

    res = ~~firstInp.value + ~~secondInp.value;
    showResult(res);
    clear();
})
minus.addEventListener("click", function () {
    res = firstInp.value - secondInp.value;
    showResult(res);
    clear();
})
multiple.addEventListener("click", function () {
    res = firstInp.value * secondInp.value;
    showResult(res);
    clear();
})
divide.addEventListener("click", function () {
    if (secondInp.value == 0) {
        result.value = "Cannot be divided by zero"
        clear();
        return;
    }
    res = firstInp.value / secondInp.value;
    showResult(res);
    clear();
})

