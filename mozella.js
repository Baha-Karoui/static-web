const MyHeading = document.querySelector('h1');
/*MyHeading.textContent = 'Hello World!';
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});*/
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "firefox.svg.png") {
        myImage.setAttribute("src", "firefox.png");
    }
    else {
        myImage.setAttribute("src","firefox.svg.png")
    }
}
);
let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
myButton.addEventListener("click", () => {
    setUserName();
  });