const form = document.querySelector('.form-quizz');
let tableauResults = [];
const reponses = ['b', 'c', 'b', 'b', 'c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResults = document.querySelector('.resultats h2');
const noteResults = document.querySelector('.note');
const aideResults = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block')
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }

    //console.log(tableauResults);
    verifFunc(tableauResults);
    tableauResults = [];   
})

function verifFunc(tabResults){

    for(let a = 0; a < 5; a++) {

        if(tabResults[a] === reponses[a]) {
                verifTableau.push(true);
        } else {
            verifTableau.push(false)
        }
    }
    //console.log(verifTableau);
    afficherResults(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResults(tabCheck) {

    const nbDefautes = tabCheck.filter(el => el !== true).length;
    //console.log(nbDefautes);

    switch(nbDefautes) {
        case 0:
            titreResults.innerText = `${emojis[0]} Bravo, c'est un sans faute ! ${emojis[0]}  `
            aideResults.innerText = '';
            noteResults.innerText = '5/5';
            break;
        case 1:
            titreResults.innerText = `${emojis[1]} Vous y êtes presque ! ${emojis[1]} `
            aideResults.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResults.innerText = '4/5';
            break;
        case 2:
            titreResults.innerText = `${emojis[1]} Encore un effort... ${emojis[2]}  `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez ! '
            noteResults.innerText = '3/5';
            break;
        case 3:
            titreResults.innerText = `${emojis[2]} Il reste quelques erreurs ${emojis[3]}  `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = '2/5';
            break;
        case 4:
            titreResults.innerText = `${emojis[3]} Peux mieux faire  ! ${emojis[4]}  `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = '1/5';
            break;
        case 5:
            titreResults.innerText = `${emojis[4]} Peux mieux faire ! ${emojis[5]} `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = '0/5';
            break;

        default:
            'Oops, cas innatendu.';
    }
}



function couleursFonction(tabValBool) {

    for(let j = 0; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
        
    }

}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})

