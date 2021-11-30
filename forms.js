import { addCard } from "./cards";
import { loadData } from "./covid19";

export const initForm = () => {
    
    const form = document.getElementById('form');

    form.addEventListener('submit',async e=>{
        e.preventDefault();
        const country = document.getElementById('country').value;
        const orszagNev = countryNameValidator(country);
        const loadingIndicator = document.getElementById('loading-content');
        const submitButton = document.getElementById('submit');
        const errorMessage = document.getElementById('error-message');
        const infoMessage = document.getElementById('info-message');
        const selectors = [];
        selectors[0] = document.getElementById('population');
        selectors[1] = document.getElementById('confirmed');
        selectors[2] = document.getElementById('deaths');
        selectors[3] = document.getElementById('administered');
        selectors[4] = document.getElementById('people_vaccinated');
        selectors[5] = document.getElementById('people_partially_vaccinated');
        const cbSelected = checkBoxValidator(selectors);
        loadingIndicator.style.display='block';
        submitButton.disabled = true;
        console.log(orszagNev, cbSelected);
        try{
        if(cbSelected){
        const eredmeny = await loadData(orszagNev);
        addCard(orszagNev, eredmeny, selectors);
        form.reset();
        }
        else{
            infoMessage.style.display = 'block';
            setTimeout(()=>{
                infoMessage.style.display = 'none';
            }, 3000);
        }
        }
        catch{
            console.log('Itten vagyok!')
            errorMessage.style.display = 'block';
            setTimeout(()=>{
                errorMessage.style.display = 'none';
            }, 3000);
        }
        submitButton.disabled = false;
        loadingIndicator.style.display='none';
    });
}

const countryNameValidator = (country) => {
    const orszagNev = country;
    const seged = orszagNev[0].toUpperCase() + orszagNev.substring(1).toLowerCase();
    return seged;
}

const checkBoxValidator = (selectors) => {
    var valasz = false;
    for(var i=0; i<selectors.length;i++){
        if(selectors[i].checked)
            valasz=true;
    }
    return valasz;
}