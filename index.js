var h=document.createElement('h1')
h.setAttribute("id","title")
h.classList.add("text-center")
h.innerText="THIRUKKURAL"
document.body.append(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
// row.innerText="hello"
div1.appendChild(row)
for(let i=0;i<1330;i++){
fetch("https://api-thirukkural.vercel.app/api?num="+`${i}`).then((d)=>{
     return(d.json())
}).then((dat)=>{
    console.log(dat[i])

    //chap_eng: "The Praise of God"
// chap_tam: "கடவுள் வாழ்த்து"
// chapgrp_eng: "Prologue"
// chapgrp_tam: "பாயிரவியல்"
// eng: "That lore is vain which does not fall  At His good feet who knoweth all"
// eng_exp: "What Profit have those derived from learning, who worship not the good feet of Him who is possessed of pure knowledge ?"
// line1: "கற்றதனால் ஆய பயனென்கொல் வாலறிவன்"
// line2: "நற்றாள் தொழாஅர் எனின்."
// number: 2
// sect_eng: "Virtue"
// sect_tam: "அறத்துப்பால்"

    row.innerHTML+=
    `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
    <div class="card h-100 ">
   <div class="card-header text-center text-dark" id=${i}> ${dat.sect_tam}
   <img src="./Tiruvalluvar.jpeg" class="card-img-top"> 
    
   <div class = " card-text " >Number:${dat.number} 
   <br> Chapter Group:${dat.chapgrp_tam} 
   <br>Kural:${dat.line1}
   <br>${dat.line2}
   <br>
   <button btn btn-primary onclick="trans('${dat.eng_exp}','ans${dat.number}')">translate</button>
<div id="ans${dat.number}"></div>
   </div>
   <div>
    
  
    
    </div>
    </div>`
    
    // console.log(dat)
}).catch((er)=>{
    console.log("er")
})

function trans(a,m){
    
    // console.log(m)
    document.getElementById(m).innerHTML=a
}
}

// for(let i=0;i<1330;i++){
//     fetch("https://api-thirukkural.vercel.app/api?num="+i)
//     .then((d)=>{
//         console.log(d.Number);
//     })