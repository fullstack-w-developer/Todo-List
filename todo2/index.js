const btn1 = document.getElementById("btn1");
const input1 = document.getElementById("input1");
const todo_list = document.getElementById("todo_list");

btn1.onclick = ()=>{
    let input_value = input1.value;
    let getlocalStrange = localStorage.getItem("New Item");
    if(getlocalStrange == null){
        listArr = []
    }else{
        listArr = JSON.parse(getlocalStrange)
    }
    listArr.push(input_value)
    localStorage.setItem("New Item", JSON.stringify(listArr))
    renderTodo()

}
function renderTodo(){
    let getlocalStrange = localStorage.getItem("New Item");
    if(getlocalStrange == null){
        listArr = []
    }else{
        listArr = JSON.parse(getlocalStrange)
    }
    todo_list.innerHTML = ''
    for(let i = 0; i < listArr.length; i++){
        todo_list.innerHTML += "<li>" + listArr[i] + "<a href='#' onclick='deleteItem("+ i +")'>&times;</a></li>";
    }
    input1.value = ''
}
function deleteItem(index){
let getlocalStrange = localStorage.getItem("New Item");
listArr.splice(index,1);
localStorage.setItem("New Item", JSON.stringify(listArr))
renderTodo()
}