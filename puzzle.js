/*https://www.frontendmentor.io/solutions/responsive-tip-calculator-website-using-css-grid-and-flexbox-x_mBL2hXz*/
let addTip = document.querySelector('.add');
addTip.addEventListener('click', calculate);
addTip.disabled = true;

let resetAll = document.querySelector('.reset');
resetAll.addEventListener('click', resetValues);

let percentTip;

//get the tip values
let tips = document.querySelectorAll('.tipper__percval')
tips.forEach(tip => {
    tip.addEventListener('click', (e) => {
        //before the select tip is clicked the user must give a bill amount that is > 0 and that is a numerical value!
        if (getBill() == 0 || getBill() < 0 || isNaN(getBill())) {
            let warningSign = document.querySelector('.tipper__warning');
            warningSign.style.display = "block";
        } else {
            //getting the custom value
            let customVal = e.target.hasAttribute('placeholder');
            if (customVal) {
                e.target.addEventListener('change', (e) => {
                    let customValInt = parseInt(e.target.value);
                    percentTip = customValInt;
                })
            }
            //getting the other elements target value
            let one = parseInt(e.target.innerText);
            percentTip = one;
            addTip.disabled = false;
        }

    })
})

//calculate total bill + percentage
function calculate() {
    let billAmount = getBill();
    let totalValue = totalAmount(+billAmount + (+billAmount * (percentTip / 100)));
    let tipValue = tipAmount(+billAmount * (percentTip / 100));
}

//bill amount:
function getBill() {
    let billVlaue = document.querySelector('.tipper__bill-inp').value;
    return billVlaue;

}

function tipAmount(tipp) {
    let tipAmountValue = document.querySelector('.tip span');
    return tipAmountValue.innerHTML = `$${tipp}.00`;
}

function totalAmount(tip) {
    let totalAmountValue = document.querySelector('.total span');
    return totalAmountValue.innerHTML = `$${tip}.00`;
}

function resetValues() {
    let bili = document.querySelector('.tipper__bill-inp');
    bili.value="";
    tipAmount(0);
    totalAmount(0);
    addTip.disabled = true;
}

//tip amount, total: regex: after the dec number write the rest
//reset button make work ... DONE
