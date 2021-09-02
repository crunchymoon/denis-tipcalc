/*https://www.frontendmentor.io/solutions/responsive-tip-calculator-website-using-css-grid-and-flexbox-x_mBL2hXz*/
let addTip = document.querySelector('.add');
addTip.addEventListener('click', calculate);
addTip.disabled = true;

let resetAll = document.querySelector('.reset');
resetAll.addEventListener('click', resetValues);

let warningSign = document.querySelector('.tipper__warning');

let percentTip;

//get the tip values
let tips = document.querySelectorAll('.tipper__percval')
tips.forEach(tip => {
    tip.addEventListener('click', (e) => {
        //before the select tip is clicked the user must give a bill amount that is > 0 and that is a numerical value!
        if (getBill() == 0 || getBill() < 0 || isNaN(getBill())) {
            warningSign.style.display = "block";
        } else {
            //getting the custom value
            let customVal = e.target.hasAttribute('placeholder');
            if (customVal) {
                addTip.disabled = true;
                e.target.addEventListener('change', (e) => {
                    addTip.disabled = false;
                    let customValInt = parseInt(e.target.value);
                    if (customValInt > 0) {
                        percentTip = customValInt;
                    } else {
                        let customValWarning = document.querySelector('.tipper__percval-warning');
                        customValWarning.style.display = "block";
                        addTip.disabled = true;
                    }

                })
            } else {
                //getting the other elements target value
                let one = parseInt(e.target.innerText);
                percentTip = one;
                addTip.disabled = false;
            }
        }

    })
})

//calculate total bill + percentage
function calculate() {
    let billAmount = getBill();
    let totalValue = +billAmount + (+billAmount * (percentTip / 100));
    //calculate the tipvalue
    let tipValue = +billAmount * (percentTip / 100);
    //run a regex test: at least 1 digit, then the . then max 2 digit caharcters , then join() to a string because the value is an array by default.
    let reg = /^\d+\.*\d{0,2}/gm
    let tipAmountHtml = tipAmount(String(tipValue).match(reg).join(''));
    let totalAmountHtml = totalAmount(String(totalValue).match(reg).join(''))
    
}

//bill amount:
function getBill() {
    let billVlaue = document.querySelector('.tipper__bill-inp').value;
    return billVlaue;

}

function tipAmount(tipp) {
    let tipAmountValue = document.querySelector('.tip span');
    return tipAmountValue.innerHTML = `$${tipp}`;
}

function totalAmount(tip) {
    let totalAmountValue = document.querySelector('.total span');
    return totalAmountValue.innerHTML = `$${tip}`;
}

function resetValues() {
    let bili = document.querySelector('.tipper__bill-inp');
    bili.value = "";
    tipAmount("0.00");
    totalAmount("0.00");
    addTip.disabled = true;
}