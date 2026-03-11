const addbtn = document.getElementById("addbtn")
const  loadBtn = document.getElementById("loadBtn")
const input = document.getElementById("itemInput")
const display = document.getElementById('display')

let tasks = []

addbtn.addEventListener('click', ()=>{


    const inputValue = input.value

    if(inputValue == ""){
        return
    }
    const  li = document.createElement('li')
    li.textContent = inputValue
    display.append(li)

    const save = localStorage.setItem('tasks',  inputValue)
    tasks.append(save)

   

    input.value = ""
})

loadBtn.addEventListener('click', ()=>{

    const saved = localStorage.getItem('tasks')
    const li = document.createElement('li')
    li.textContent = saved
    display.append(li)

})
