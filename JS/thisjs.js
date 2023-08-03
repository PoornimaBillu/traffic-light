var person1={
    name:"Bhuvika",
    age:4,
    city:"hyderabad",
    pin:500072,
    wish:function(){
        console.log(this.city)
    }
    
}
person1.wish()
// person.wish()
var person2={
    name:"Bhuvika",
    age:4,
    city:"bangalore",
    pin:500072,
    wish1:function(){
        console.log(this.city)
    }
    
}
person2.wish1()
// console.log(this.age)//it wont work out side of the object
