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
    'wayne-barnett-founder-ceo.jpg'
)
 
const member2 = getMember(
    'Angela Caroll', 
    'Chief Editor',	        
    'angela-caroll-chief-editor.jpg'
)

const member3 = getMember(
    'Walter Gordon',
    'Office Manager',	        
    'walter-gordon-office-manager.jpg'
)

const member4 = getMember(
    'Angela Lopez',
    'Social Media Manager',
    'angela-lopez-social-media-manager.jpg'
)

const member5 = getMember(
    'Scott Estrada', 
    'Developer',	            
    'scott-estrada-developer.jpg'
)

const member6 = getMember(
    'Barbara Ramos',	
    'Graphic Designer',	   
    'barbara-ramos-graphic-designer.jpg'
)
// creare arrey degli oggetti
const members = [member1, member2, member3, member4, member5, member6]

console.log(members)

