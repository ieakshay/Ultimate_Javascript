// VARIABLE types in javascript //

// const accountId = 46771
// var accountPassword = "8055"
// let accountEmail = "user@mail.com"
// accountCity = "Jaipur"

// // const accountId = 8055

// console.log(typeof accountCity)

// console.log(accountId)

// accountPassword = "12345"
// accountEmail = "newuser@mail.com"
// accountCity = "Mumbai"

// console.table([accountId, accountEmail, accountPassword, accountCity])

// console.log(typeof accountCity)

 
// DATATYPES in javascript //

// Conversion examples and cases (Number) //
// "33" ==>> 33
// "33abc" ==>> NaN
// null ==>> 0
// undefined ==>> NaN
// true ==>> 1 : false ==>> 0

// Boolean //
// 1 ==>> true : 0 ==>> false
// "string" ==>> true
// empty string "" ==>> false
 
// String //
// number 11 ==>> "11" string

// let age = 24
// let toString = String(24)
// console.log(toString)
// console.log(typeof toString)
// console.log(typeof age)


// OPERATIONS, conversions and comparisions  //

// always  avoid below cases  //

// null > 0 
// null == 0
//numm >= 0

//undefined == 0
//undefined > 0
//undefined < 0

// string and its methods done  //
// const name = new String("neel-nitin-mukesh")
// console.log(name)


// Numbers and Math //

// Date and Time //

// // Array and its methods
// const arr1 = [0,2,4,6]
// const arr2 = [1,3,5]

// const newArray = [...arr1, ...arr2] 
// console.log(newArray)


// const arr3 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr3.flat(Infinity))

// Object and its methods pt1  //

// const mySym = Symbol("key1")

// const JsUser = {
//     name : "User1",
//     age : 18,
//     [mySym]: "key1",     // Different syntax than other data types - steps 1)define, 2)write it as key value (key should be in square bracket), 3)then finally access it// 
//     email : "user1@mail.com",
//     isLoggedIn : true,
//     lastLoginDays : ["monday", "wedensday"]
      
// }

// console.log(JsUser.name)
//  console.log(JsUser["email"])
//  console.log(JsUser[mySym])
//  console.log(typeof mySym)

//  JsUser.name = "User2"
// //  console.log(JsUser.name)

// //  Object.freeze(JsUser)  // once object is freezed its values wont change //

//  JsUser.greeting = function(){
//     console.log("Hello")
//  }

//  JsUser.greeting2 = function(){
//     console.log(`Hello JS User, ${this.name}`)
//  }

// //  console.log(JsUser.greeting)
//  console.log(JsUser.greeting())
//  console.log(JsUser.greeting2())

// objects pt2 //

// singleton object and non-singleton object  //

// const newUser = {
//     email: "akshay@openai.com",
//     fullname: {
//         username: {
//             firstname: "akshay",
//             lastname: "shelke"
//         }       
//     }
// }

// console.log(Object.keys(newUser))
// console.log(Object.values(newUser))
// console.log(Object.entries(newUser))

// object destructuring and JSON API //

// const gameUser = {
//     username: "roboto",
//     score: 120,
//     rank: "9th"
// }
// const {username} = gameUser
// console.log(username)


// Functions in js  //

//  function loginUserMessage(username = "Sam"){ // default value incase user not proved any value sam will be considered as a default user
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
//  }

//  console.log(loginUserMessage())


// Function with objects //

// const user = {
//     username : "akshay",
//     price : 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
// }

// handleObject(user)


