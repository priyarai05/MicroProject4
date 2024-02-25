const expression = document.querySelector('#exp')

const numbers = document.querySelectorAll('.number')

numbers.forEach(text => {
    text.addEventListener('click', function () {
        var expressionVal = expression.value;
        if (text.innerHTML === 'RESET') {
            expression.value = "";
        }
        else if (text.innerHTML === 'DEL') {
            expression.value = expressionVal.substring(0, expressionVal.length - 1)
        }
        else if (text.innerHTML === '=') {
            let myPromise = new Promise((resolve, reject) => {
                var expressionVal2 = expression.value
                if (expressionVal2.includes('x')) {
                    expressionVal2 = expressionVal2.replaceAll("x", '*')
                }
                expression.value = +eval(expressionVal2).toFixed(6)
            })
            myPromise.then().catch((e) => {
                console.log("Invalid Input");
            })
        }
        else {
            expression.value += text.innerHTML;
        }

    })
})
