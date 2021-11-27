import { loadData } from "./covid19";

export const initForm = () => {
    
    const form = document.getElementById('form');

    form.addEventListener('submit',e=>{
        e.preventDefault();
        const country = document.getElementById('country').value;
        const orszagNev = countryNameValidator(country);
        const selectors = [];
        selectors[0] = document.getElementById('population');
        selectors[1] = document.getElementById('confirmed');
        selectors[2] = document.getElementById('deaths');
        selectors[3] = document.getElementById('administered');
        selectors[4] = document.getElementById('people_vaccinated');
        selectors[5] = document.getElementById('people_partially_vaccinated');
        const cbSelected = checkBoxValidator(selectors);
        console.log(orszagNev, cbSelected);
        loadData(orszagNev);
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