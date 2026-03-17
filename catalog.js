let filterKandnud = true
let filterSaadavus = true

fetch("figs.json")
.then(res => res.json())
.then(data => {

const body = document.getElementById("figBody")

data.forEach(fig => {

const row = document.createElement("tr")

row.innerHTML = `
<td>${fig.name}</td>
<td>${fig.varasus}</td>
<td>${fig.maitsev}</td>
<td>${fig.suurus}</td>
<td>${fig.kulmakindlus}</td>
<td>${fig.varvus}</td>
<td>${fig.breba}</td>
<td>${fig.saadavus}</td>
<td>${fig.riik}</td>
`

body.appendChild(row)

})

})
