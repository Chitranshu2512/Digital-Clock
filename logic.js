const clock = document.querySelector('#clock')

setInterval(function(){
    let mydate = new Date();
    clock.innerHTML = mydate.toLocaleTimeString();
}, 1000);
