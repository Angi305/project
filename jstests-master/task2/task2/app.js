var cardsContainer = document.querySelector('.home-blog-cards-container');

const loadMore = document.querySelector('.next-btn');
const cardType = document.querySelector('.cardType');

var cardsData = [];

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {

    loadItems();
});

function formatTime(date)
{
    return date.slice(0,4) +"-"+ date.slice(4,6) + "-" + date.slice(6);
}

function showPerson(person, id) {
    const item = person;
    var card = document.createElement('div');
    card.className = 'card';
    card.id = `card-${id}`

    card.innerHTML = `<div class="profile-image">
            
            <img id="profile_image" src="${item.id}" style="width: 8%; border-radius: 55%;margin-top: 6%; margin-left:10%;"alt="" >
            <div id="author">${item.name}</div>
            <p class="date"id="date" style="margin-left: 80%" > <b> Start date: </b> ${formatTime(item.startDate)} <b> Region: </b>  ${item.region}</p>
                    
            </div>
        </div>
            <div class="card-content-container">
        <div class="card-footer">
        <div class="code"><b> Code: </b>${item.code} </div>
        <p class="date"id="date" ><b>End date: </b> ${formatTime(item.endDate)}</p>
        </div>
        <div class="date"id="date" ></div>
        <div class="button-container">
        <button type="button" class="btn btn-success">${item.type}</button>
        </div>
     </div>
        </div>`;

    cardsContainer.appendChild(card)
};

loadMore.addEventListener("click", function() {
    loadItems();

});

cardType.addEventListener("click", function() {
    //debugger;
    cardsContainer.innerHTML = "";
    cardsData = [];
    currentItem = 0;
    loadItems();
});


function loadItems() {
    fetch("./data.json")
        .then(response => {
            response.json().then(function(data) {

                for (var i = 0; i < 4;i++ ) {
                    if (currentItem > data.length - 1) break;
                    if(cardType.value == 'all')
                    {
                        showPerson(data[currentItem], currentItem);
                    }
                    else if(cardType.value == data[currentItem].type)
                    {
                        showPerson(data[currentItem], currentItem);
                    }
                    else{
                        i--;
                    }

                    currentItem++;

                }

            })
        });
}