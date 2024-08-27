function newOrder (product, qty){
    let totalPrice=0
    if (product === "coffee"){
        totalPrice = qty*1.50
    }
    else if(product === "water"){
        totalPrice= qty*1.00
    }else if (product==="coke"){
        totalPrice = qty*1.40
    }else if (product === "snacks"){
        totalPrice = qty*2
    }
    console.log (totalPrice.toFixed(2));
    
}
newOrder(`water`, 5)