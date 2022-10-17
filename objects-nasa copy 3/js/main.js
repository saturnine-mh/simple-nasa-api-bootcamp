//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// fetch("https://api.nasa.gov/planetary/apod?api_key=aIfFuouhS6jpcYfHq33ekgfrm4EtjbevK7WNWSsy&YYYY-MM-DD")
document.querySelector('button').addEventListener('click', getDrink)


function getDrink(){
    date = document.querySelector('input').value 
    console.log(date)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=aIfFuouhS6jpcYfHq33ekgfrm4EtjbevK7WNWSsy&date=${date}`)
.then(res => res.json())      // converts response into JSON
.then(data => {
    console.log(date)
    console.log(data)
    document.querySelector('img').src = data.url
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
})

.catch(err => {
    console.log(`error ${err}`)
})

    

}

