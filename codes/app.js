let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'COKE',
        image: '1.png',
        price: 68
    },
    {
        id: 2,
        name: 'SAN MIGUEL LIGHT',
        image: '2.png',
        price: 47
    },
    {
        id: 3,
        name: 'GRILLED LIEMPO',
        image: '3.png',
        price: 199
    },
    {
        id: 4,
        name: 'SPRITE',
        image: '4.png',
        price: 68
    },
    {
        id: 5,
        name: 'SAN MIGUEL PALE PILSEN',
        image: '5.png',
        price: 44
    },
    {
        id: 6,
        name: 'FRIED ONION RING',
        image: '6.png',
        price: 169
    },
    {
        id: 7,
        name: 'ROYAL    ',
        image: '7.png',
        price: 68
    },
    {
        id: 8,
        name: 'RED HORSE',
        image: '8.png',
        price: 55
    },
    {
        id: 9,
        name: 'CHICHARON BULAKLAK',
        image: '9.png',
        price: 189
    },
    {
        id: 10,
        name: 'MOUNTAIN DEW',
        image: '10.png',
        price: 76
    },
    {
        id: 11,
        name: 'EMPERADOR LIGHT ',
        image: '11.png',
        price: 164
    }
    ,{
        id: 12,
        name: 'SISIG',
        image: '12.png',
        price: 149
    }
    ,{
        id: 13,
        name: 'COKE ZERO',
        image: '13.png',
        price: 94
    }
    ,{
        id: 14,
        name: 'ALFONSO LIGHT',
        image: '14.png',
        price: 275
    }
    ,{
        id: 15,
        name: 'MIXED SEAFOOD',
        image: '15.png',
        price: 239
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="pics/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="pics/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
total.addEventListener('click', (total) => {
    document.getElementById('formContainer').classList.add('active');
});

total.addEventListener('click', showForm);
function showForm() {
    let overlay = document.querySelector('.overlay');
    overlay.classList.add('active');
    body.classList.add('active');
  }
  closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
    overlay.classList.remove('active');
  });

  document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector('.overlay');
    var openButton = document.querySelector('.open-btn');
    var closeButton = document.querySelector('.close');

    function toggleOverlay() {
        overlay.style.display = overlay.style.display === 'none' ? 'flex' : 'none';
    }

    openButton.addEventListener('click', toggleOverlay);
    closeButton.addEventListener('click', toggleOverlay);
});

        // JavaScript code here
        const showFormButton = document.getElementById('showForm');
        const popupForm = document.getElementById('popupForm');
        const closeButtons = document.querySelectorAll('.close');
        const form = document.getElementById('myForm');
        const successOverlay = document.getElementById('successOverlay');
        const errorOverlay = document.getElementById('errorOverlay');

        showFormButton.addEventListener('click', function () {
            popupForm.style.display = 'flex';
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            const firstName = document.getElementById('firstName').value;
            const address = document.getElementById('address').value;
            const number = document.getElementById('number').value;

            if (firstName === '' || address === '' || number === '') {
                // Show error overlay if any field is empty
                errorOverlay.style.visibility = 'visible';
                errorOverlay.style.opacity = '1';
            } else if (!/^\d{4}-\d{3}-\d{4}$/.test(number)) {
                // Show error overlay if number format is invalid
                errorOverlay.style.visibility = 'visible';
                errorOverlay.style.opacity = '1';
                errorOverlay.querySelector('p').textContent = 'Invalid number format. Please enter in the format: 0000-000-0000';
            } else {
                // Show success overlay
                successOverlay.style.visibility = 'visible';
                successOverlay.style.opacity = '1';
            }
        });

        for (const closeButton of closeButtons) {
            closeButton.addEventListener('click', function () {
                popupForm.style.display = 'none';

                successOverlay.style.visibility = 'hidden';
                successOverlay.style.opacity = '0';

                errorOverlay.style.visibility = 'hidden';
                errorOverlay.style.opacity = '0';
            });
        }
    
