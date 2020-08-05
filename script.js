const hubby = "Hero Alom";
console.log(hubby)

// hubby = "Salman Shah"
// console.log(hubby)

const girlfriendList = [12,14, 13,12,13,43]
girlfriendList.push(12,16,13)
girlfriendList.pop()

girlfriendList[0] = 13;

for (let i = 0; i < girlfriendList.length; i++) {
    const element = girlfriendList[i];
    var girlFriendListItem = console.log(element)
    
    
}

const NayokFigure = {name:"Shaharukh Khan", Age:17 ,getLoveLetter:76 , whatTheySay:"I love You"}

console.log(NayokFigure.whatTheySay)

let patientName = "Saira Khatun"
patientName = "Nazim uddin"
console.log(patientName)

// let num = 0;
// for (let i = 0; i < 10; i++) {
   
//     num = num + i;
    
// }
// console.log(i) =>> let don't leak but var leak anywhere is code & and let work withing the scope

//If a parameter not pass for not attention || Function default parameter for not provided values
function add(num1,num2){
    num2 = num2 || 20;
    return num1 + num2;
}

var addFun = add(13)
console.log(addFun)