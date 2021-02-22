
    var item = JSON.parse(localStorage.getItem('Item'));
    var product = document.querySelector('.product');

    product.querySelector('#item-image').setAttribute('src',item.img)
    document.getElementById('item-name').textContent = item.name
    document.getElementById('price').innerHTML = "&#x20B9;"+item.price
    product.querySelector('#icon-type').setAttribute('src',item.typeicon)
    document.getElementById('category').textContent = item.category;
    document.getElementById('details').textContent = item.details;
    document.getElementById('ingredients').textContent = item.ingredients;
    document.getElementById('type').textContent = item.type;

    if(item.type === 'Non-Veg'){
        product.querySelector('#type-icon').setAttribute('src',"images/icn-non-veg.svg")
    }



