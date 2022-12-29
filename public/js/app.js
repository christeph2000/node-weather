console.log("Cleint side js file")

const weatherForm = document.querySelector("form")

const search = document.querySelector("input")

const firstPara = document.querySelector("#firstpara")
const secondPara = document.querySelector("#secondpara")




weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = search.value

    firstPara.textContent = "Loading.."
    secondPara.textContent = ""

    fetch("/weather?address=" + location).then((response) => {
        response.json().then((parseData) => {
            firstPara.textContent = parseData.location
            secondPara.textContent = parseData.foreCastData
        })
    })

})
