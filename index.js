var tasks = [
    
]

const displayTasks=()=>{

    var tasksDiv = document.querySelector('#tasks')

    for (let i = 0; i < tasks.length; i++) {
        
        var newDiv = document.createElement('div')  

        var newContent = document.createElement('h3')
        newContent.innerText = tasks[i].content
        if(tasks[i].checked){
            newContent.setAttribute('class','done')
        }
        var newTime = document.createElement('h4')
        newTime.innerText = tasks[i].timeDo

        var newDate = document.createElement('h4')
        newDate.innerText = tasks[i].dateDo

        var newCheck = document.createElement('button')
        newCheck.innerText = 'Check'
        newCheck.addEventListener('click',function(){
            tasks = tasks.map((el)=> el.id == tasks[i].id ? {...el,checked : !el.checked} : el)
            reCreateMainDivTask()
            displayTasks()
        })

        var newDelete = document.createElement('button')
        newDelete.innerText = 'Delete'
        newDelete.addEventListener('click',function(){
            tasks = tasks.filter((el)=> el.id != tasks[i].id)
            reCreateMainDivTask()
            displayTasks()
        })

        newDiv.appendChild(newContent)
        newDiv.appendChild(newDate)
        newDiv.appendChild(newTime)
        newDiv.appendChild(newCheck)
        newDiv.appendChild(newDelete)        
        tasksDiv.appendChild(newDiv)        
    }
}

displayTasks()

var Add = document.querySelector('#Add')

Add.addEventListener('click',function(){
    var inputAdd = document.querySelector('#inputAdd')
    var timeToDo = document.querySelector('#timeToDo')
    var dateToDo = document.querySelector('#dateToDo')
    if(inputAdd.value ==""){
        alert('Ekteb ya nour')
    }else{
        reCreateMainDivTask()   
        tasks = [...tasks,{content : inputAdd.value,checked : false, id : Math.random(),timeDo : timeToDo.value,dateDo : dateToDo.value}]
        displayTasks()
        inputAdd.value =""
    }
    
})


const reCreateMainDivTask=()=>{
    var inputAdd = document.querySelector('#inputAdd')
    var tasksDiv = document.querySelector('#tasks')
    
    tasksDiv.remove()
    var newDivTasks = document.createElement('div')
    newDivTasks.setAttribute('id','tasks')
    var body = document.querySelector('body')
    body.insertBefore(newDivTasks,inputAdd)   
}


// // Task Nour
// var currentDate = new Date()
// var currentMonth = currentDate.getMonth()
// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// console.log(months[currentMonth])
// console.log(currentDate.getUTCDate())
// console.log(currentDate.getFullYear())
// console.log(`${currentDate.getUTCDate()} ${months[currentMonth]} ${currentDate.getFullYear()}`)