import {carlist,carwithnest} from "./cars.js"

console.log("I have to deliver these cars to Rabbil Bhai:")
carlist.map((car,i)=>{

     var carbrand = car.brand
     var carprice = car.price
     var carcon = car.condition
     console.log(carbrand+" for "+carprice+ " at serial "+i+" with condition "+carcon)

})
console.log("Rabbil Bhai has to notice that:")
carwithnest.map((car1)=>{
       var carm= car1.carb.model
       var carc= car1.carb.condition
       var care= car1.carb.engine
       var pd= car1.priceDecrese

       console.log("The car "+carm+" is "+carc+" and "+care+" engine has price decrease of "+pd)

})