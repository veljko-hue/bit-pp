"use strict";

 gi(function () {

    function Product(name, price, exDate) {
        this.name = name;
        this.price = price;
        this.exDate = Date(exDate);
        this.id = Math.round(((99999 - 10000) * Math.random()) + 100000);
        this.getInfo = function () {
            return this.name[0] + this.name[this.name.length - 1] + this.id + ", " + this.name + ", " + this.exDate;
            ////prvo   + pslednje slovo = name stringa/////
        }
    }
    function shoppingBag() {
        this.listOfProducts = [];
        this.getMostExpensive = function () {
            var sortArray = [];
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sortArray.push(this.listOfProducts[i].price);
            }
            sortArray.sort(function (a, b) { return b - a });
            return sortArray[0].getInfo();
        }
        this.addProduct = function (product) {//////////salje neki product iz funkicje gore
            var today = new Date();
            if (product.exDate > today) {
                this.listOfProducts.push(product);///////dodaje na list od products ako je okj
            } else {
                return "The date os not valid"
            }
        }
        this.averagePrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return (sum / listOfProducts).toFixed(3)/////metoda da zaokruzi i na koliko decimala.
        }
        this.calculateTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return sum;
        }
    }

    function PaymentCard(balance, status, validation) {
        this.balance = balance.toFixed(2);//////account balance (number with 2 decimal places)
        this.status = status;
        this.validation = validation;
    }
    var createProduct = function (name, price, exDate) {
        return new Product(name, price, exDate);
    }
    var creteShoppingBag = function () {
        return new shoppingBag();
    }
    var createPaymentCard = function (balance, status, validation) {
        return new PaymentCard(balance, status, validation);
    }

    var item1 = createProduct('Neseser', 534, '12 04 2023');
    var item2 = createProduct('Banana', 139, '03 05 2020');
    var item3 = createProduct('Apple', 100, '09 05 2020');
    var cart = creteShoppingBag()
    cart.addProduct(item1);
    cart.addProduct(item2);
    cart.addProduct(item3);

    console.log(Clipboard);

})()  