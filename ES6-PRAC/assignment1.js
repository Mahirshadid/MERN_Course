var todo = new Map()
//Todo list for a day of my life
todo.set("k1","Salatul Fajr")
todo.set("k2","Jogging")
todo.set("k3","Study")
todo.set("k4","Varsity")
todo.set("k5","Salatul Dhuhr")
todo.set("k6","Table Tennis")
todo.set("k7","MERN practice")
todo.set("k8","Salatul Asr")
todo.set("k9","Again MERN")
todo.set("k10","Salatul Magrib")
todo.set("k11","Academic Study")
todo.set("k12","Salatul Esha")
todo.set("k13","Sleep")
//printing the todo list without keys
for(let i of todo.values()){
    console.log(i)
}
//printing only keys
for(let i of todo.keys()){
    console.log(i)
}
//want to skip jogging for a day
todo.delete("k2")
//printing without jogging
for(let i of todo){
    console.log(i)
}
//checking if jogging is there
if(todo.has("k2")){
    console.log("Jogging isn't skipped")
}else{
    console.log("Jogging is skipped")
}