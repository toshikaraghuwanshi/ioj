const centerTop = document.getElementsByClassName("center-top")[0];
const centerLeft = document.getElementsByClassName("center-left")[0];
const centerRight = document.getElementsByClassName("center-right")[0];
const centerBottom = document.getElementsByClassName("center-bottom")[0];
const centerText = document.getElementsByClassName("center-text")[0];

const synobUp =  document.getElementById('synops-up');
const synobBottom =  document.getElementById('synops-Bottom');
synobBottom.addEventListener("mouseenter", event => {
    centerText.classList.remove("center-show");


});
synobBottom.addEventListener("mouseleave", event => {
    centerText.classList.add("center-show");


});



synobUp.addEventListener("mouseenter", event => {
    centerTop.classList.remove("center-show");
    centerLeft.classList.remove("center-show");
    centerRight.classList.remove("center-show");
    centerBottom.classList.remove("center-show");
    centerText.classList.remove("center-show");


});
synobUp.addEventListener("mouseleave", event => {
    centerTop.classList.add("center-show");
    centerTop.classList.add("center-show");
    centerLeft.classList.add("center-show");
    centerRight.classList.add("center-show");
    centerBottom.classList.add("center-show");
    centerText.classList.add("center-show");
});