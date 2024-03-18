function getMember(nome, ruolo, foto){
    return{
        nome: nome,
        ruolo: ruolo,
        foto: foto
    }
}

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
const members = [member1, member2, member3, member4, member5, member6]
const cardsEl = document.getElementById('cards')

for (let i = 0; i < members.length; i++){
    cardsEl.innerHTML += `    
        <div class="col">
            <div class="card border-0 rounded-0">
             <img src=${members[i].foto} class="card-img-top rounded-0 ">
                <div class="card-body">
                    <h5 class="card-title text-center">${members[i].nome}</h5>
                    <p class="card-text text-center">${members[i].ruolo}</p>
                </div>
            </div>
        </div>
    `
}


