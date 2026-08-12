

function app(){


    const cities = [
        {name:"nairobi", population:123456, region:"nairobi"},
        {name:"Eloret", population:56565, region:"Uasin gishu"},
        {name:"Thika", population:654321, region:"nairobi"},

    ]

    const see = document.getElementById("see")
    const display = document.getElementById("display")

    see.addEventListener("click", ()=>{

       for(let i = 0; i<=cities.length; i++){

        const li = document.createElement("li")
        li.innerHTML = `Name:${cities[i].name}  Population:${cities[i].population}   Region:${cities[i].region}`
        display.append(li)
        
       }

    })
}

app()