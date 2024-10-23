// const date = new Date();
// console.log(date);
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const minutes =date.getMinutes()
// const seconds=date.getSeconds()
// const hour = date.getHours();

// console.log(minutes)
// console.log(month,day);
// console.log(seconds);
// console.log(hour)

const timeformat =(format)=>{
    return format < 10 ? "0" + format : format;
}

const displayTime = ()=>{
    const clock = document.getElementById("clock")
    
    const date = new Date()
    const hour =timeformat( date.getHours())
    const minutes =timeformat(date.getMinutes())
    const seconds = timeformat(date.getSeconds())

    clock.innerHTML= `${hour}:${minutes}:${seconds}`
    

}

setInterval(displayTime,1000);
displayTime();
