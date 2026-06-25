const roles=[
"Digital Markerter",
"SEO Specialist"
]

let i=0
let j=0
let current=""
let deleting=false

const el=document.getElementById("typed")

function type(){

current=roles[i]

if(!deleting){
el.textContent=current.substring(0,j++)
if(j>current.length){
deleting=true
setTimeout(type,1200)
return
}
}else{
el.textContent=current.substring(0,j--)
if(j==0){
deleting=false
i=(i+1)%roles.length
}
}

setTimeout(type,deleting?40:80)

}

type()

const progressBars=document.querySelectorAll(".progress-fill")

function animateSkills(){

progressBars.forEach(bar=>{

const value=bar.dataset.progress
bar.style.width=value+"%"

})

}

window.addEventListener("scroll",()=>{

const skillsSection=document.querySelector("#skills")

const position=skillsSection.getBoundingClientRect().top
const screen=window.innerHeight

if(position<screen-100){

animateSkills()

}

})