console.log('js')
//Dichiarare la funzione per creare oggetti 
function getMember(nome, ruolo, foto){
    return{
        nome: nome,
        ruolo: ruolo,
        foto: foto
    }
}
// creare gli oggetti evocando la funzione
const member1 = getMember(
    'Wane Barnett', 
    'Founder & COE', 
    'img/wayne-barnett-founder-ceo.jpg'
)
 
const member2 = getMember(
    'Angela Caroll', 
    'Chief Editor',	        
    'img/angela-caroll-chief-editor.jpg'
)

const member3 = getMember(
    'Walter Gordon',
    'Office Manager',	        
    'img/walter-gordon-office-manager.jpg'
)

const member4 = getMember(
    'Angela Lopez',
    'Social Media Manager',
    'img/angela-lopez-social-media-manager.jpg'
)

const member5 = getMember(
    'Scott Estrada', 
    'Developer',	            
    'img/scott-estrada-developer.jpg'
)

const member6 = getMember(
    'Barbara Ramos',	
    'Graphic Designer',	   
    'img/barbara-ramos-graphic-designer.jpg'
)
// creare arrey degli oggetti
const members = [member1, member2, member3, member4, member5, member6]
const cardsEl = document.getElementById('cards')

// creare ciclo (for) per scorrere array members

for (let i = 0; i < members.length; i++){
    
    let newMember = document.createElement('div')
    newMember.classList.add('col-4')
    cardsEl.appendChild(newMember) 

    let newIMG = document.createElement('img')
    newIMG.src = members[i].foto
    newMember.appendChild(newIMG)

    let newParagraf = document.createElement('p')
    newParagraf.textContent = members[i].nome
    newMember.appendChild(newParagraf)

    let ruoloParagraf = document.createElement('p')
    ruoloParagraf.textContent = members[i].ruolo
    newMember.appendChild(ruoloParagraf)

    // creare ciclo (for in) per scorrere oggetto    
    // for(let key in members[i]){
    //     // stampare valore di ogni chiave
    //     // console.log(key +': '+ members[i][key])
    // let newParagraf = document.createElement('p') //crea un paragrafo per ogni chiave
    // newParagraf.textContent = `${key}: ${members[i][key]}` //aggiunge chiave  e valore
    // newMember.appendChild(newParagraf) // appende paragrafo a div creato nel ciclo for
    

    // }
}


