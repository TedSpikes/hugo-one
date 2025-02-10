window.onload=function() {
    fetch('/greetings.txt')
    .then(response => response.text())
    .then(data => {
        data = data.split("\n");
        pick = data[Math.floor(Math.random() * data.length)]
        document.getElementById('header-greeting').innerText=pick;
    });
}