/*https://www.frontendmentor.io/solutions/responsive-tip-calculator-website-using-css-grid-and-flexbox-x_mBL2hXz*/
let tip = document.querySelector('.add');
tip.addEventListener('click', calculate, {
    once: true
});
let percentTip ;

//get the tip values
let tips = document.querySelectorAll('.tipper__percval')
tips.forEach(tip => {
    tip.addEventListener('click', (e) => {
        let one = parseInt(e.target.innerText);
        percentTip = one;
    })
})

//calculate total bill + percentage
function calculate() {
    let billAmount = getBill();
    let totalValue = totalAmount(+billAmount+(+billAmount*(percentTip/100)));
    let tipValue = tipAmount(+billAmount*(percentTip/100));
}

//bill amount:
function getBill() {
    return document.querySelector('.tipper__bill-inp').value;
}

function tipAmount(tipp){
    let tipAmountValue = document.querySelector('.tip span');
    return tipAmountValue.innerHTML = `$${tipp}.00`;
}

function totalAmount(tip) {
    let totalAmountValue = document.querySelector('.total span');
    return totalAmountValue.innerHTML = `$${tip}.00`;
}
//if selected tip is clicked before bill: "you can't do this ! give me a bill first!"
// if bill input is not a number, "gimme ONLY NUMBAAS!"
//tip amount, total: regex: after the dec number write the rest
//custom make work xd
//bill when clicked hide the default value