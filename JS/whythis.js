var person1 = {
    name:"praveen",
    age:30,
    city:"bangalore",
    wish:function(){
        console.log(person1.city)

    },
    education:"MTech"
}
var person2 = {
    name:"Bhuvika",
    age:4,
    city:"Bangalore",
    education: 1,
    compare:function(two){
        if(this.age > two.age){
            console.log(this)

        }
        else{
            console.log(two)

        }

    }
}

person2.compare(person1)

