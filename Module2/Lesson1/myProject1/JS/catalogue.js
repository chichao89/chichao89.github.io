class Product {
    constructor(id, img, name, category, currency, price) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.category = category;
        this.currency = currency;
        this.price = price;
        //default currency is USD
    }
}

class Shoe extends Product {
    constructor(id, img, name, category, currency, price) {
        super(id, img, name, category, currency, price);
    }
}

class Jersey extends Product {
    constructor(id, img, name, category, currency, price) {
        super(id, img, name, category, currency, price);
    }
}

class Currency {
    constructor(id, currency, exchangerate) {
        this.id = id;
        this.currency = currency;
        this.exchangerate = exchangerate;
    }
}

var counter = 1;
var prev = 0;
var shoeObject = {};
var currency = {};
//var url = 'http://127.0.0.1:5500/Module2/Lesson1/myProject1/json/catalogue.json';
var url = 'http://127.0.0.1:8887/catalogue.json';
var url1 ='http://127.0.0.1:8887/currency.json'
//var url1 = 'http://127.0.0.1:5500/Module2/Lesson1/myProject1/json/currency.json';

//call for xmkhttrequest object for catalogue
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("item1").innerHTML = this.responseText;
            var shoes = JSON.parse(this.responseText);
            convertObj(shoes);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
//call for currencyrequest object
function show() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//close the dropdown for any event outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function currencyDoc(clicked_id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("item1").innerHTML = this.responseText;
            var currency = JSON.parse(this.responseText);
            currencyObj(currency,clicked_id);
        }
    };
    xhttp.open("GET", url1, true);
    xhttp.send();
}
//create the structure layout
function convertObj(shoes) {
    for (keys in shoes.Shoe) {
        shoeObject[keys] = new Shoe(shoes.Shoe[keys].id, shoes.Shoe[keys].img, shoes.Shoe[keys].name, shoes.Shoe[keys].category, shoes.Shoe[keys].currency, shoes.Shoe[keys].price);
        //console.log(shoeObject);//testing the shoeObject
        var firstDiv = document.createElement('div');
        firstDiv.id = 'item' + counter;
        firstDiv.className = 'grid-item';
        firstDiv.innerHTML = "<img src=" + shoeObject[keys].img + ">";
        var secondDiv = document.createElement('div');
        secondDiv.id = 'nameItem' + counter;
        secondDiv.className = 'product-name';
        secondDiv.innerHTML = shoeObject[keys].name;
        var thirdDiv = document.createElement('div');
        thirdDiv.id = 'categoryItem' + counter;
        thirdDiv.className = 'product-category';
        thirdDiv.innerHTML = shoeObject[keys].category;
        var fourthDiv = document.createElement('div');
        fourthDiv.id = 'currencyItem' + counter;
        fourthDiv.className = 'product-currency';
        fourthDiv.innerHTML = shoeObject[keys].currency + shoeObject[keys].price;
        var button = document.createElement('button');
        button.className = 'btsubmit';
        button.disabled = true;
        button.innerHTML = 'Add To Cart';
        if (keys == 0) {
            document.getElementById('main').appendChild(firstDiv);
            document.getElementById('item' + counter).appendChild(secondDiv);
            document.getElementById('item' + counter).appendChild(thirdDiv);
            document.getElementById('item' + counter).appendChild(fourthDiv);
            document.getElementById('item' + counter).appendChild(button);
        } else {
            prev = counter - 1;
            document.getElementById('item' + prev).insertAdjacentElement('afterend', firstDiv);
            document.getElementById('item' + counter).appendChild(secondDiv);
            document.getElementById('item' + counter).appendChild(thirdDiv);
            document.getElementById('item' + counter).appendChild(fourthDiv);
            document.getElementById('item' + counter).appendChild(button);
        }
        counter++;
    }
}

//for the currency object

function currencyObj(currency,clicked_id) {
    let currValue = document.getElementById(clicked_id).textContent;
    let vCounter = 1;
    let price = 0;
    for (counter in shoeObject) {
        for (keys in currency.Currency) {
            currency[keys] = new Currency(currency.Currency[keys].id, currency.Currency[keys].currency, currency.Currency[keys].exchangerate);
            var x = true;
            switch(x)
            {
               case currency[keys].currency === currValue :
                price = shoeObject[counter].price * currency.Currency[keys].exchangerate;
                document.getElementById('currencyItem'+ vCounter).innerHTML = currency.Currency[keys].currency + Math.round(price);
                vCounter++;
                break;
            }
        }
    }
}
