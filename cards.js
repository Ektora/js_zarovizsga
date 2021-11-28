export const addCard = (country, eredmeny, selectors) =>{
    const container = document.getElementById('content');
    container.insertAdjacentHTML('afterbegin',
    `
    <zizi-card title="${country}">
        ${eredmeny[0]}
        ${eredmeny[1]}
        ${eredmeny[2]}
        ${eredmeny[3]}
        ${eredmeny[4]}
        ${eredmeny[5]}

    </zizi-card>
    `
    
    );
}