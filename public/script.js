// console.log('chicken');
// console.log("eugene is in the browser");
console.log("these console logs are coming from the script inside the jsx file and will appear in the terminal")
// console.log("~~~~~~~~ window ~~~~~~~~~", window);
var button = document.createElement('button');
button.textContent = "REVERSE!";
button.addEventListener("click", set)
document.body.appendChild(button);

const reverseScreen = () => {
    document.body.style.backgroundColor = "#fcad03";
    var p = document.createElement('p');
    p.textContent = "ladadddeeee"
    p.style.color = "#fced03"
    document.body.appendChild(p)
}

function set() {
    setTimeout(reverseScreen, 5000)
}

// what to do when we recieve the request
var responseHandler = function () {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);

    var banner = document.createElement('h4');
    var responseObj = JSON.parse(this.responseText);
    banner.textContent = responseObj[0].name;
    document.body.appendChild(banner)

};

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
var url = "http://127.0.0.1:3000/mydata";
request.open("GET", url);

// send the request
request.send();