var today = new Date()
console.log(today)

var thisyear = today.getFullYear()
console.log(thisyear)

var footer = document.querySelector("footer")
console.log (footer)

const copyright = document.createElement("p")
console.log(copyright)

copyright.innerHTML = `Tsion ${thisyear}`;

footer.appendChild(copyright)

const skills =[
    'basic computer skills',
    'basic software,word docament ,and Exel skills',
    'case mangement & creating and docmenting case note',
    'certification with typing skill'
]

const skillsSection= document.getElementById('skills')
console.log(skillsSection)

const skillsList = skillsSection.querySelector('ul')
console.log(skillsList)

for(let i=0; i< skills.length; i++) {
console.log(skillsList)
const skill = document.createElement('li')
skill.innerHTML = skills[i];

skillsList.appendChild(skill)
}