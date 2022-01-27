function getAmount(){
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const ssdCost = parseFloat(document.getElementById('ssd-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    return bestPrice + memoryCost + ssdCost + deliveryCost;
};





// 16Gb memory 
document.getElementById('16gb-memory').addEventListener('click',function(){
    document.getElementById('memory-cost').innerText = 180;
    document.getElementById('16gb-memory').style.backgroundColor = '#1D6DF7';
    document.getElementById('16gb-memory').style.color = 'white';
    //-------
    const totalPrice = getAmount();
    document.getElementById('total-price').innerText = totalPrice;

    //new-total-price
    document.getElementById('new-total-price').innerText = totalPrice;
});

//8gb extra memory
document.getElementById('8gb-memory').addEventListener('click',function(){
    document.getElementById('memory-cost').innerText = 0;
    document.getElementById('16gb-memory').style.backgroundColor = 'white';
    document.getElementById('16gb-memory').style.color = 'black';
    //-------
    const totalPrice = getAmount();
    document.getElementById('total-price').innerText = totalPrice;
    //new-total-price
    document.getElementById('new-total-price').innerText = totalPrice;
});



// 256gb SSD storage
document.getElementById('512gb-ssd').addEventListener('click',function(){
    document.getElementById('ssd-cost').innerText = 100;
    document.getElementById('512gb-ssd').style.backgroundColor = '#1D6DF7';
    document.getElementById('512gb-ssd').style.color = 'white';
    document.getElementById('1tb-ssd').style.backgroundColor = 'white';
    document.getElementById('1tb-ssd').style.color = 'black';
    //-------
    const totalPrice = getAmount();
    document.getElementById('total-price').innerText = totalPrice;
    //new-total-price
    document.getElementById('new-total-price').innerText = totalPrice;
});

// 256 gb Extra Memory
document.getElementById('256gb-ssd').addEventListener('click',function(){
    document.getElementById('ssd-cost').innerText = 0;
    document.getElementById('512gb-ssd').style.backgroundColor = 'white';
    document.getElementById('512gb-ssd').style.color = 'black';
    document.getElementById('1tb-ssd').style.backgroundColor = 'white';
    document.getElementById('1tb-ssd').style.color = 'black';
    //-------
    const totalPrice = getAmount();
    document.getElementById('total-price').innerText = totalPrice;
    //new-total-price
    document.getElementById('new-total-price').innerText = totalPrice;
});

//1TB SSD Storage
document.getElementById('1tb-ssd').addEventListener('click',function(){
    document.getElementById('ssd-cost').innerText = 180;
    document.getElementById('512gb-ssd').style.backgroundColor = 'white';
    document.getElementById('512gb-ssd').style.color = 'black';
    document.getElementById('1tb-ssd').style.backgroundColor = '#1D6DF7';
    document.getElementById('1tb-ssd').style.color = 'white';
    //-------
    const totalPrice = getAmount();
    document.getElementById('total-price').innerText = totalPrice;
    //new-total-price
    document.getElementById('new-total-price').innerText = totalPrice;
});


// Cost delivery
document.getElementById('cost-delivery').addEventListener('click',function(){
    document.getElementById('delivery-cost').innerText = 20;
    document.getElementById('cost-delivery').style.backgroundColor = '#1D6DF7';
    document.getElementById('cost-delivery').style.color = 'white';
    //-------
    const totalPrice = getAmount();
    document.getElementById('total-price').innerText = totalPrice;
    //new-total-price
    document.getElementById('new-total-price').innerText = totalPrice;
});

//free delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    document.getElementById('delivery-cost').innerText = 0;
    document.getElementById('cost-delivery').style.backgroundColor = 'white';
    document.getElementById('cost-delivery').style.color = 'black';
    //-------
    const totalPrice = getAmount();
    document.getElementById('total-price').innerText = totalPrice;
    //new-total-price
    document.getElementById('new-total-price').innerText = totalPrice;
});

//add promo code
document.getElementById('code-apply').addEventListener('click',function(){
    const promoCode = document.getElementById('promo-code');
    const promoInput = promoCode.value;
    if(promoInput == 'please'){
        const promoCodeAmount = (getAmount() / 100) * 20;
        document.getElementById('new-total-price').innerText = getAmount() - promoCodeAmount;
    };
    document.getElementById('promo-code').value = '';
})




