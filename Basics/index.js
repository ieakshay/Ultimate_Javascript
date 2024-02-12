// VARIABLE types in javascript

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


// DATATYPES in javascript

// Conversion examples and cases (Number)
// "33" ==>> 33
// "33abc" ==>> NaN
// null ==>> 0
// undefined ==>> NaN
// true ==>> 1 : false ==>> 0

// Boolean
// 1 ==>> true : 0 ==>> false
// "string" ==>> true
// empty string "" ==>> false

// String
// number 11 ==>> "11" string

// let age = 24
// let toString = String(24)
// console.log(toString)
// console.log(typeof toString)
// console.log(typeof age)


// OPERATIONS, conversions and comparisions

// always  avoid below cases 

// null > 0 
// null == 0
//numm >= 0

//undefined == 0
//undefined > 0
//undefined < 0

// string and its methods done 
// const name = new String("neel-nitin-mukesh")
// console.log(name)


// Numbers and Math

// Date and Time

// Array and its methods

// Object and its methods

const mySym = Symbol("key1")

const JsUser = {
    name : "User1",
    age : 18,
    [mySym]: "key1",     // Different syntax than other data types - steps 1)define, 2)write it as key value (key should be in square bracket), 3)then finally access it// 
    email : "user1@mail.com",
    isLoggedIn : true,
    lastLoginDays : ["monday", "wedensday"]
      
}

// console.log(JsUser.name)
//  console.log(JsUser["email"])
//  console.log(JsUser[mySym])
//  console.log(typeof mySym)

 JsUser.name = "User2"
//  console.log(JsUser.name)

//  Object.freeze(JsUser)  // once object is freezed its values wont change //

 JsUser.greeting = function(){
    console.log("Hello")
 }

 console.log(JsUser.greeting)
 console.log(JsUser.greeting())

