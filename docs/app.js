

function display(){


    const cities = [
        {name:"nairobi", population:123456, region:"nairobi"},
        {name:"nairobi", population:123456, region:"nairobi"},
        {name:"nairobi", population:123456, region:"nairobi"},

    ]

    const see = document.getElementById("see")
    const display = document.getElementById("display")

    see.addEventListener("click", ()=>{

        cities.forEach((city)=>{
            display.innerHTML = `${city.name}:${city.population}:${city.region}`
        })

    })
}


display()