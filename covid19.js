export const loadData = async (country) => {
    try{
    const esetek = await getCases(country);
    const oltottak = await getVaccines(country);
    const eredmeny = [esetek.All.population, esetek.All.confirmed, esetek.All.deaths, oltottak.All.administered,oltottak.All.people_vaccinated, oltottak.All.people_partially_vaccinated];
    return eredmeny;
    }catch(e){
        //console.error('Hiba történt! ',e);
        throw e;
    }
}

const getCases = async (country) => {
    //if(!navigator.onLine){
    //    throw 'Jeleneleg nincs hálózati kapcsolat!';
    //}
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`);
    if (response.status!==200) {
        throw 'Hiba az esetszámok elérésében!';
    }
    const jsonResponse = await response.json();
    return jsonResponse;
    
}

const getVaccines = async (country) => {
    //if(!navigator.onLine){
    //    throw 'Jeleneleg nincs hálózati kapcsolat!';
    //}
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`);
    if (!response.ok) {
        throw 'Hiba az oltási adatok elérése közben!';
    }
    const jsonResponse = await response.json(); 
    return jsonResponse;
    
}