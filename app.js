//console.log('Hello World!');
var firstName='laya';
// console.log(firstName);
var lastName='fakher';
// console.log(lastName);
var age=19;
// console.log(age);
var x=[1,2,3,4];
// console.log('heyyyy guys');
// console.log(x[0]);
var person = {
    Name : 'laya',
    age : 19,
    creatName(){
        console.log('what????');
    }
}
// console.log(person['age']);
var address = {
    city : "l",
    street : "m" ,
    postCode :"n"
}
function printAddress(arg) {
    for (const key in arg) {
              console.log(`${key}: ${arg[key]}`);
    }
}
// printAddress(address);
function creatAddress(city ,street ,postCode) {
    return{
        city,
        street,
        postCode
    }
}
function CreateAdd(city ,street, postCode) {
    this.postCode = postCode,
    this.city = city,
    this.street = street;
    
}
// var p1=new CreateAdd("teh","es",123);
// var p2=creatAddress("r", "M","lk");
// // constructor function
// console.log(p1);
// // factory function
// console.log(p2);
var post = {
    title:"T",
    body:"B",
    views:200,
    isALive:'I',
    comment :[{author : 'ali' , body : 'heyyy'},
    {author : 'sam' , body : 'hiiii'}
]
}
function CreatePost(title ,body ,views ,comment ,isAlive ) {
    this.views = views,
    this.title = title,
    this.body = body,
    this.comment = comment,
    this.isAlive = isAlive
}
var po = new CreatePost('laya','Hello World',500,[{'mahdie':'beatiful'},{'Elham':'nice!'}]);
console.log(po);
var courses=[{id:1 ,name:'lay' ,age:19},
{id:2 , name:'moh',age:20 }];
var find = courses.findIndex(function(course) {
    return course.name==='moh'
});
// console.log(find);
// Arrow function
var find2 = courses.find((course)=>{return course.name === 'lay'});
console.log(find2);
// every & some
var numbers = [1,2,3,-1];
var every = numbers.every(function(value){
    return value>=0;
});
console.log(every);// return flase
var some = numbers.some(function(value){
    return value>=0;
});
console.log(some);//return true
//fitering arrays & objects
var arr = [1,-1,2,-5,3];
var filter1 = arr.filter(value=>{return value>=0});
console.log(filter1);//returns 1,2,3
var users = [{name :'laya', age :19},{name :'mohammad',age :16},{name :'nazanin',age:11}];
var filter2 = users.filter(user =>{return user.age>=18});
console.log(filter2);//returns {name :'laya',age:19};
//mapping an array
//***************** */
var numbers = [1 ,2 ,3 ,-4];
var map1 = numbers.map(function(number){
    return number*2;
});
console.log(map1);//return [2,4,6,-8]
var map2 = numbers.map(function(number){
    return {value : number};
});
console.log(map2);//return [{value:1},{value:2},{value:3},{value:4}];
//This
var object = {
    name :'object',
    printObject(){
        console.log(this.name);
    }
}
object.printObject();
hvbnm,nm,.gn