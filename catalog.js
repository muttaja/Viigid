let filterKandnud = true
let filterSaadavus = true
let figsData = []

function renderTable(data){

const body=document.getElementById("figBody")
body.innerHTML=""

data.forEach(fig=>{

if(filterKandnud && fig.kandnud !== "jah") return
if(filterSaadavus && fig.saadavus !== "jah") return

const row=document.createElement("tr")

let photoIcon = fig.image ? " 📷" : ""

row.innerHTML = `
<td><a href="variety.html?name=${encodeURIComponent(fig.name)}">${fig.name}</a>${photoIcon}</td>
<td>${fig.varasus}</td>
<td>${fig.maitsev}</td>
<td>${fig.suurus}</td>
<td>${fig.kulmakindlus}</td>
<td>${fig.varvus}</td>
<td>${fig.breba}</td>
<td>${fig.riik}</td>
<td>${fig.saadavus}</td>
`

body.appendChild(row)

})

}

fetch("figs.json")
.then(res=>res.json())
.then(data=>{

figsData = data
renderTable(figsData)

})

document.addEventListener("keydown", function(e){

if(e.key === "ArrowRight"){
nextSlide()
}

if(e.key === "ArrowLeft"){
prevSlide()
}

})
