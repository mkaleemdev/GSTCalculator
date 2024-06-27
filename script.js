const inputAmount = document.querySelector('#inputAmount')
const gstSelect = document.querySelector('#gstSelect')
const taxSelect = document.querySelector('#taxSelect')
const amount = document.querySelector('#amount')
const gstAmount = document.querySelector('#gstAmount')
const totalAmount = document.querySelector('#totalAmount')


inputAmount.addEventListener('change', () => {
    gstCaluculation()
});

gstSelect.addEventListener('change', () => {
    gstCaluculation()
})

taxSelect.addEventListener('change', () => {
    gstCaluculation()
})


const gstCaluculation = () => {
    let AmountVal = inputAmount.value
    let gstValue = gstSelect.value
    let gstSelectVal = gstSelect.value

    let gstAmountVal = (AmountVal * gstSelectVal) - AmountVal

    let tatalAmountExclusive = AmountVal * gstValue;
    let tatalAmountInclusive = AmountVal / gstValue;


    if (taxSelect.value == 0) {
        totalAmount.innerHTML = (gstSelectVal == 0) ? AmountVal : tatalAmountExclusive.toFixed(2)
        amount.innerText = AmountVal
        gstAmount.innerText = (gstSelectVal == 0) ? '0' : gstAmountVal.toFixed(2)
    }
    else {
        amount.innerText = (gstSelectVal == 0) ? AmountVal : tatalAmountInclusive.toFixed(2)
        let gstValue = AmountVal - tatalAmountInclusive.toFixed(2)
        gstAmount.innerText = (gstSelectVal == 0) ? '0' : gstValue.toFixed(2)
        totalAmount.innerHTML = AmountVal
    }

}
