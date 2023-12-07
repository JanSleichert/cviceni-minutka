
console.log('funguju!');
const alarm = document.querySelector(".alarm")
const btn = document.querySelector("#btn")


const ring = () =>{
    alarm.classList.add("alarm--ring")
    document.getElementById("audio").play()
}
const question = prompt("Za kolik vteřin má budík zazvonit?")
const timeoutId = setTimeout(ring, question*1000);


btn.addEventListener("click",() => {clearTimeout(timeoutId)})


