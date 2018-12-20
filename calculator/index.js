const math = {
    addition: () => {
        const number1 = document.getElementById('text-input1').value
        const number2 = document.getElementById('text-input2').value

        const formatNumber1 = parseInt(number1);
        const formatNumber2 = parseInt(number2);

        const result = formatNumber1 + formatNumber2;
        document.getElementById("text-result").value = result;
    },
    substrack: () => {
        const number1 = document.getElementById('text-input1').value
        const number2 = document.getElementById('text-input2').value

        const formatNumber1 = parseInt(number1);
        const formatNumber2 = parseInt(number2);

        const result = formatNumber1 - formatNumber2;
        document.getElementById("text-result").value = result;

    },
    multiply: () => {
        const number1 = document.getElementById('text-input1').value
        const number2 = document.getElementById('text-input2').value

        const formatNumber1 = parseInt(number1);
        const formatNumber2 = parseInt(number2);

        const result = formatNumber1 * formatNumber2;
        document.getElementById("text-result").value = result;

    },

    divide: () => {
        const number1 = document.getElementById('text-input1').value
        const number2 = document.getElementById('text-input2').value

        const formatNumber1 = parseInt(number1);
        const formatNumber2 = parseInt(number2);

        const result = formatNumber1 / formatNumber2;
        document.getElementById("text-result").value = result;

    },
    modulo: () => {
        const number1 = document.getElementById('text-input1').value
        const number2 = document.getElementById('text-input2').value

        const formatNumber1 = parseInt(number1);
        const formatNumber2 = parseInt(number2);

        const result = formatNumber1 % formatNumber2;
        document.getElementById("text-result").value = result;

    },
    power: () => {
        const number1 = document.getElementById('text-input1').value
        const number2 = document.getElementById('text-input2').value

        const formatNumber1 = parseInt(number1);
        const formatNumber2 = parseInt(number2);

        const result = formatNumber1 ** formatNumber2;
        document.getElementById("text-result").value = result;

    }

}