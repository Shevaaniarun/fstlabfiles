let tasks=[];
function addTask()
{
    const taskInput=document.getElementById("task_input");
    const taskText=taskInput.value.trim();
    const taskList=document.getElementById("TaskList")
    if(taskText==="")
    {
        alert("Please Enter Task to add");
        return;
    }
    tasks.push(taskText);
    taskInput.value="";
    taskList.innerhtml='';
    tasks.forEach(task=>{
        const li=document.createElement('li');
        li.innerHTML=`${taskText}`;
        taskList.appendChild(li);
    })
}