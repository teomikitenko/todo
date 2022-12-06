let name=document.querySelector("input");
let crBtn=document.querySelector("#create");
let showAll=document.querySelector("#show-all")
let notDone=document.querySelector("#not-done")
let tasklist=document.querySelector("#tasklist")
let message=document.querySelector("p")
let delAll=document.querySelector("#one")

let tasks=[]

notDone.addEventListener("click",showNotDone)
showAll.addEventListener("click",showAllTasks)
function showAllTasks(){
 tasklist.innerHTML=""
 tasks
 .forEach(task=>task.createTask(tasklist))
}
 function showNotDone(){
   tasklist.innerHTML=""
 tasks
 .filter(task=>task.isDone==false)
 .forEach(data=>data.createTask(tasklist))
}  
delAll.addEventListener("click",function(){
 tasklist.innerHTML=""
 message.style.display="block"
})

crBtn.addEventListener("click",addHandler)
function addHandler(){
 if(!name.value){
   alert("Введіть задачу")
 }
 else{
   let newTask=new Todo(name.value);
   name.value=""
   newTask.createTask(tasklist)
    tasks.push(newTask)
    
 }
}

class Todo{
 constructor(text){
 this.isDone=false;
 this.div=null;
 this.text=text;
 }

 createTask(element){

 
  message.style.display="none"
  

    this.div=document.createElement("div")
   
  
   
    let p=document.createElement("p");
       p.textContent=this.text; 
  
     let input=document.createElement("input")
     input.type="checkbox";

     input.addEventListener("click",()=> this.changeState())

  
    
   
    let del=document.createElement("div")
    del.classList.add("del")
    del.textContent="x"

    del.addEventListener("click",function(e){
     e.target.parentElement.remove()
    })
    this.div.classList.add("ex")
   this.div.append(input)
  this.div.append(p)
  
 
   this.div.append(del)
 
   element.append(this.div)
   console.log(tasks)
 }
 changeState(){
this.isDone=!this.isDone
this.div.classList.toggle("check")
}
}
 
