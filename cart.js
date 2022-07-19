const  fs = require('fs');


function order(){
    alert("Order placed successfully. Thank you");
    localStorage.clear();
    document.location.reload();
}



function readAndWrite(cart){
    cart.forEach(x =>{
        if(cart.length > 0){
            fs.writeFile('menu2.json', "efasefaewf");
        }

    })
}
