let text = document.getElementById('text')
function callme () {
    let time= new Date();
    let hours = time.getHours();
    let min =time.getMinutes();
    let sec = time.getSeconds();
    let k5=document.getElementById("a5")
    if(hours>=12){
        k5.innerText= 'PM'
    }
    else{
        k5.innerText= 'AM' 
    }
    let time99 = document.getElementsByClassName("dis2")
if (hours>=6 && hours < 12){
    time99[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
} 
else if (hours>=12 && hours < 15){
    time99[0].innerText = "LET'S HAVE SOME LUNCH !!"
}
else if (hours>=15 && hours <19){
    time99[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
}
else{
    time99[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
}
if(hours>12){
    hours =hours-12;
} 
let het = document.querySelector(".hrs")
het.innerHTML = hours;
let het1 = document.querySelector(".min")
het1.innerHTML =min;
let het2 = document.querySelector(".sec")
het2.innerHTML =sec;



}

setInterval(() => {
    callme()
}, 1000);

    

 function call(){
    let imgbox = document.querySelector("#img")
    let dis1 = document.querySelector("#display")
    let date = new Date();
    let hrs =date.getHours();
    // if(hrs>12){
    //     hrs =hrs-12;
    // } 
    // console.log(hrs)

     
    if(hrs===parseInt(morning.value)){
        imgbox.src = "./Component30.svg"
        //imgbox.style.backgroudImage = "url(./Component30.svg)"
        dis1.innerText = "GOOD MORNING!! WAKE UP !!"
    }
    else if(hrs===parseInt(lunch.value)){
        imgbox.src = "./Component31.png"
       // imgbox.style.backgroudImage="url(./Component31.png)"
        dis1.innerText = "GOOD AFTERNOON!! TAKE SOME SLEEP !!"
    }
    else if(hrs===parseInt(nap.value)){
        imgbox.src = "./cup.png"
        //imgbox.style.backgroudImage="url(./cup.png)"
        dis1.innerText = "GOOD EVENING!!"
    }
    else if(hrs===parseInt(night.value)){
        imgbox.src = "./night.png"
      //imgbox.style.backgroudImage="url(./night.png)"
        dis1.innerText = "GOOD NIGHT!!"
    }


    let mornigtext = morning.options[morning.selectedIndex].textContent;
    let mornig1 =document.getElementById("1")
    mornig1.textContent = mornigtext;

    let lunchtext = lunch.options[lunch.selectedIndex].textContent;
    let lunch1 = document.getElementById("2")
    lunch1.textContent = lunchtext;

    let naptext = nap.options[nap.selectedIndex].textContent;
    let nap1 = document.getElementById("3")
    nap1.textContent = naptext;

    let nighttext =night.options[night.selectedIndex].textContent;
    let night1 = document.getElementById("4")
    night1.innerText=nighttext;

 }
