window.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById("vvod").addEventListener("click", calc);
    document.getElementById("rec").addEventListener("click", clic);
    document.getElementById("rec").addEventListener("change", calculate2);
    document.getElementById("col").addEventListener("change", calculate2);
    document.getElementById("rad1").addEventListener("change", calculate2);
    document.getElementById("rad2").addEventListener("change", calculate2);
    document.getElementById("rad3").addEventListener("change", calculate2);
    document.getElementById("rad4").addEventListener("change", calculate2);
    document.getElementById("chicken1").addEventListener("change", calculate2);
    document.getElementById("chicken2").addEventListener("change", calculate2);
    document.getElementById("chicken3").addEventListener("change", calculate2);
});
function calc() {
    let col, cen;
    col = document.getElementById('colich').value;
    cen = document.getElementById('cen').value;
    col = parseInt(col);
    cen = parseInt(cen);
    if (!(Number.isInteger(col) && Number.isInteger(cen)) || cen < 0 || col < 0) {
        alert("Error!!!");
    } else {
        var sum = cen * col;
        document.getElementById('sum').innerHTML = `Итог: ${sum} руб.`;
    }

}

function clic() {
    let type;
    type = document.getElementById('rec').value;
    switch (type) {
        case '1':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = true;
            break;
        case '2':
            document.getElementById("radio").hidden = false;
            document.getElementById("checkbox").hidden = true;
            break;
        case '3':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = false;
            break;
    }
}

function calculate2() {
    let type, col, checkbox, radio, sum1;
    var rate, chec = 0;
    type = document.getElementById('rec').value;
    col = document.getElementById('col').value;
    checkbox = document.getElementsByName('checkbox');
    radio = document.getElementsByName('radio');
    col = parseInt(col);

    if (!(Number.isInteger(type) && Number.isInteger(col)) && !(col > 0 && col < 10000)) {} else {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                rate = radio[i].value;
            }
        }
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                chec += checkbox[i].value;
            }
        }
        switch (type) {
            case '1':
                sum1 = col * 6999;
                break;
            case '2':
                if (rate == 1) {
                    sum1 = col * 1500;
                }
                if (rate == 2) {
                    sum1 = col * 1300;
                }
                if (rate == 3) {
                    sum1 = col * 1700;
                }
                if (rate == 4) {
                    sum1 = col * 1450;
                }
                break;
            case '3':
                if (chec == 0) {
                    sum1 = col * 0;
                }
                if (chec == 1) {
                    sum1 = col * 250;
                }
                if (chec == 2) {
                    sum1 = col * 200;
                }
                if (chec == 3) {
                    sum1 = col * 180;
                }
                if (chec == 12) {
                    sum1 = col * (250 + 200);
                }
                if (chec == 13) {
                    sum1 = col * (250 + 180);
                }
                if (chec == 23) {
                    sum1 = col * (200 + 180);
                }
                if (chec == 123) {
                    sum1 = col * (250 + 200 + 180);
                }
                break;
        }
        document.getElementById('produce').innerHTML = `Итог: ${sum1} руб.`;
    }

    console.log("type");
    console.log(type);
    console.log("col");
    console.log(col);
    console.log("radio");
    console.log(rate);
    console.log("checkbox");
    console.log(chec);
    console.log("sum1ult");
    console.log(sum1);
}