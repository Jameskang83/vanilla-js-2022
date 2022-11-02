
const remainingTime = document.querySelector("#count_down");

function getClock() {
    const endDate = new Date("December 25, 2022 00:00:00").getTime();   
    // const endDate = new Date("November 2, 2022 00:59:00").getTime();     
    const now = new Date().getTime();

    const difference = endDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 *24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    remainingTime.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    if (difference < 0) {
        clearInterval(getClock);
        remainingTime.innerText = "Merry Crhistmas!!! ^^";
    } else {}
}

getClock();
setInterval(getClock, 1000);