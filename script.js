function displayresult()
{
    var city = document.getElementById("city").value ;
    var apikey='43ef8c07aa300125810af33d0b62f0dc';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid='+apikey+'&units=metric' )
    .then(response => response.json())
    .then(data  => {
        var t= data['main']['temp']
        document.getElementById("output").innerHTML = t;

    })
}