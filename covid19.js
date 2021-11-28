export const loadData = async (country) => {
    try{
    const esetek = getCases(country);
    const oltottak = getVaccines(country);
    }catch (e){
        console.error("Hiba történt! ",e);
        throw e;
    }
}

const getCases = async (country) => {
    if(!navigator.onLine){
        throw 'Jeleneleg nincs hálózati kapcsolat!';
    }
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`);
    
    
    if (!response.ok) {
        console.log(response.status);
        throw  'Error loading getCases';
    }
    const jsonResponse = await response.json();
    return jsonResponse;
    
}

const getVaccines = async (country) => {
    if(!navigator.onLine){
        throw 'Jeleneleg nincs hálózati kapcsolat!';
    }
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`);
    if(!response.ok){
        throw 'Hiba az oltási adatok elérése közben!';
    }
    const jsonResponse = await response.json(); 
    return jsonResponse;
    
}