// const users = [
//     { user: 'Jassim', pass: '123' },
//     { user: 'Abdulrahman', pass: '456' },
// ]

// const portalNav = () => {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     let valid = false

//     users.map(u => {
//         if (u.user === username && u.pass === password)
//             valid = true
//     })

//     if (valid)
//         window.location.href = "./portal-A.html"
//     else
//         window.location.href = "./portal-B.html"
// }

let pass1 = "m7md1234"
let pass2 = "ali1234"
let pass3 = "fatima1234"

function portalNav() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username, password);

if (username == "300123" && password == pass1){
    window.location.href = "./portal-A.html"
}
else if (username == "300456" && password == pass2){
    window.location.href = "./portal-B.html"
}
else if (username == "300678" && password == pass3){
    window.location.href = "./portal-F.html"
}
else {
    alert("Incorrect Password or Username")
}

// function TimeAlert(){
//     setTimeout(() => {
//         document.getElementById().href =""
//     }, timeout);
// }




    // switch (username){
    //     case "Ali": 
    //     window.location.href = "./portal-A.html"
    //         break;
        
    //     case "Ahmed": 
    //     window.location.href = "./portal-B.html"
    //         break;
    // }
}
