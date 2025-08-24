const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector("select[name='From']");
const toCurr = document.querySelector("select[name='To']");
const msg = document.querySelector(".msg");



const updateExchange = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal);
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    console.log(fromCurr.value, toCurr.value);
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    console.log(rate);
    console.log(amtVal);
    console.log(`${amtVal} ${fromCurr.value} = ${amtVal * rate} ${toCurr.value}`);
    let finalAmn = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmn} ${toCurr.value}`
}


for (let select of dropdowns) {
    for (code in countryList) {
        // console.log(code,countryList[code]);
        let newoption = document.createElement("option");
        newoption.innerText = code;
        newoption.value = code;
        if (select.name === "From" && code === "USD") {
            newoption.selected = "selected";
        } else if (select.name === "To" && code === "INR")
            newoption.selected = "selected";
        select.append(newoption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    // console.log(element);
    let code = element.value;
    // console.log(code);
    let countryCode = countryList[code];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchange();
});

window.addEventListener("load", () => {
    updateExchange();
});


