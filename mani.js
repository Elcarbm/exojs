const start= document.getElementById('start')
const end= document.getElementById('end')
const number= document.getElementById('number')
const button= document.getElementById('button')
button.addEventListener('click',function(){
    // Recupérer les valeurs des inputs
    const startValue = parseInt(start.value)
    const endValue = parseInt(end.value)
    const numberValue = parseInt(number.value)
    // Vider le paragraphe du resultat prévédent
    result.innerHTML = ""
    // Verification si les 3 inputs ne sont pas vide et contiennent des données
    if (!isNaN(startValue)&& !isNaN(endValue)&& !isNaN(numberValue)){
        // parcourir les valeurs entre start et end 
        for (let i= startValue; i<= endValue; i++){
             //  Vérifier si les valeurs parcourues entre start et end sont divisible par 7
            if(i % numberValue===0){
                result.innerHTML += `${i} est divisible par ${numberValue} <br>`
                
            }
        }
        
    } else{
        result.innerHTML="Veuillez entrer des nombres valides dans tousz les champs"

    }
}
)