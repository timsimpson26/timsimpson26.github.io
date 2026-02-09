
// button click example
document.getElementById("btn-show-message").onclick = () => {
    document.getElementById("p-message").innerHTML = "Hi Tim";
};

// link click example
document.getElementById("a-click").onclick = (e) => {
    e.preventDefault(); // not go to the links destination
    e.currentTarget.innerHTML = "CLICKED";
}
