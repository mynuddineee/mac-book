// Memory Cost function

function extraMemoryCost(isExtramemoryCost){
    const extraMemoryCost1 = document.getElementById('extra-memory-cost');
    let memoryCost = extraMemoryCost1.innerText;
    if(isExtramemoryCost == true){
        memoryCost = 0;
    }
    else{
        memoryCost = 180;
    }
    extraMemoryCost1.innerText = memoryCost;
    // const totalItemPrice = document.getElementById('total-price');
    // totalItemPrice.innerText = 1299 + memoryCost;
    calTotal();

 }

// Extra Memory Cost 8GB
document.getElementById('memory-button-8gb').addEventListener('click',function(){
    extraMemoryCost(true);
  
})

// Extra Memory Cost 16GB
document.getElementById('memory-button-16gb').addEventListener('click',function(){
    extraMemoryCost(false);

})


// Extra Storage Cost
function extraStorageCost(isExtraCost){
    const extraStorageCost1 = document.getElementById('extra-storage-cost');
    let storageCost = extraStorageCost1.innerText;
    if (isExtraCost == true){
        storageCost = 100;
    }

    else{
        storageCost = 180;
    }
    extraStorageCost1.innerText = storageCost ;
    // const totalItemPrice = document.getElementById('total-price');
    // totalItemPrice.innerText = 1299 + storageCost;
    
    calTotal();
}

// Extra storage Cost 256GB
document.getElementById('storage-button-256gb').addEventListener('click',function(){
    
    const extraStorageCost1 = document.getElementById('extra-storage-cost');
    let storageCost = extraStorageCost1.innerText;
    storageCost = 0;
    extraStorageCost1.innerText = storageCost ;
    // const totalItemPrice = document.getElementById('total-price');
    // totalItemPrice.innerText = 1299 + storageCost;
    
    calTotal();
    
})

// Extra storage Cost 512GB
document.getElementById('storage-button-512gb').addEventListener('click',function(){
    extraStorageCost(true);
})

// Extra storage Cost 1TB
document.getElementById('storage-button-1tb').addEventListener('click',function(){
    extraStorageCost(false);
})

// Delivery Charge Function

    function deliveryItemCharge(isDeliveryFree){
    const extraDeliveryCharge = document.getElementById('delivery-charge');
    let deliveryCharge = extraDeliveryCharge.innerText;
    if(isDeliveryFree == true){
        deliveryCharge = 0;
    }

    else{
        deliveryCharge = 20;
    }
    extraDeliveryCharge.innerText = deliveryCharge;
    // const totalItemPrice = document.getElementById('total-price');
    // totalItemPrice.innerText = 1299 + deliveryCharge;
    calTotal();
}
// Delivery Charge Free

document.getElementById('delivery-free-button').addEventListener('click',function(){
    deliveryItemCharge(true);
})

// Extra Delivery Charge $20

document.getElementById('delivery-charge-button').addEventListener('click',function(){
    deliveryItemCharge(false);
  
})

// Total Price
extraMemoryCost1 = document.getElementById('extra-memory-cost');
extraStorageCost1 = document.getElementById('extra-storage-cost');
extraDeliveryCharge = document.getElementById('delivery-charge');
const totalItemPrice = document.getElementById('total-price');

function calTotal(){
    let memoryCost1 = parseInt(extraMemoryCost1.innerText);
    let storageCost1 = parseInt(extraStorageCost1.innerText);
    let deliveryCharge1 = parseInt(extraDeliveryCharge.innerText);
    let subTotal = memoryCost1 + storageCost1 + deliveryCharge1 + 1299;
    totalItemPrice.innerText = subTotal;

}

// Promo code apply and grand Total

document.getElementById('promo-code-btn').addEventListener('click',function(){
    //console.log('click');
    const promoCode = document.getElementById('promo-code');
    let promoCodeInput = promoCode.value;
    let discountPrice = parseInt(totalItemPrice.innerText);
    let discountTotal = 0;
    // console.log(promoCodeInput);
    if(promoCodeInput == 'stevekaku'){
        discountTotal = discountPrice * 0.2 ;
        console.log(discountTotal);
    }
    else{
        console.log('promo code not matched');
    }

    const subGrandTotalText = document.getElementById('grand-total');
    let subGrandTotal = parseInt(subGrandTotalText.innerText);
    let grandTotal = subGrandTotal - discountTotal;
    console.log(grandTotal);
    subGrandTotalText.innerText = grandTotal;  
})















