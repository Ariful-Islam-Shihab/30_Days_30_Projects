const inputbox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputbox.value==''){
        alert("You must write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.append(li);
        let span=document.createElement("span")
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputbox.value='';
    saveData();
}


listContainer.addEventListener('click',function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
    }
    saveData();




},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function getData(){
    listContainer.innerHTML=localStorage.getItem("data")
}
getData();