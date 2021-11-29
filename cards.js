

export const  addCard =(country, eredmeny, selectors) =>{
    const container = document.getElementById('content');
    const zaszlo = eredmeny[6].toLowerCase();
    container.insertAdjacentHTML('afterbegin',
    `
    <div class="cards">
        <div class="title">
            <h2>${country}</h2>
        </div>
        <div class="card-content">
            <div class="card-section">
           ${selectors[0].checked ? `<div><span><h3>Lakosság:</h3>${eredmeny[0]}</span></div>` : ''}
           ${selectors[1].checked ? `<div><span><h3>Összes fertözött:</h3>${eredmeny[1]}</span></div>` : ''}
           ${selectors[2].checked ? `<div><span><h3>Elhunytak:</h3>${eredmeny[2]}</span></div>` : ''}
           
            </div>
            <div class="card-section">
           ${selectors[3].checked ? `<div><span><h3>Beadott vakcinák:</h3>${eredmeny[3]}</span></div>` : ''}
           ${selectors[4].checked ? `<div><span><h3>Teljesen oltottak:</h3>${eredmeny[4]}</span></div>` : ''}
           ${selectors[5].checked ? `<div><span><h3>Részben oltottak:</h3>${eredmeny[5]}</span></div>` : ''}
           </div>
        </div>
    </div>
    `
    
    );
}