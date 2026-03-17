let filterKandnud = true
let filterSaadavus = true

fetch("figs.json")
.then(res => res.json())
.then(data => {

function renderTable(data){

const body = document.getElementById("figBody")
body.innerHTML = ""

data.forEach(fig => {

if(filterKandnud && fig.kandnud !== "jah") return
if(filterSaadavus && fig.saadavus !== "jah") return

const row = document.createElement("tr")

row.innerHTML = `
<td>${fig.name}</td>
<td>${fig.varasus}</td>
<td>${fig.maitsev}</td>
<td>${fig.suurus}</td>
<td>${fig.kulmakindlus}</td>
<td>${fig.varvus}</td>
<td>${fig.breba}</td>
<td>${fig.riik}</td>
<td>${fig.kandnud}</td>
<td>${fig.saadavus}</td>
`

body.appendChild(row)

})

})

})
