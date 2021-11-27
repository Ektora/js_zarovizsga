export const loadData = async (country) => {
    const esetek = getCases(country);
    const oltottak = getVaccines(country);
}

const getCases = async (country) => {
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`);
    const jsonResponse = await response.json(); 
    return jsonResponse;
    
}

const getVaccines = async (country) => {
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`);
    const jsonResponse = await response.json(); 
    return jsonResponse;
    
}