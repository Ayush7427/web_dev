let dishAndPrice = {
    ' pizza ': 200 , 
     'cock' : 40 ,
     'burger' : 60 ,
     'chocolate' : 120,
 }
 
 function getPrice(item){
     return dishAndPrice[item]
 }
 console.log(getPrice('cock'));
 