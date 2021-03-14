const input1 = document.getElementById("input1")
const btn1 = document.getElementById("btn1")
const items = document.getElementById("items")
let arr = []

btn1.addEventListener("click", function(){
    let input_value = input1.value
    arr.push(input_value)
    input1.value = ""
    randerTodo()
})

function randerTodo(){
    items.innerHTML = ""
    for(let i = 0; i < arr.length; i++){
        items.innerHTML += "<li>" + arr[i] + "<a href='#' onclick='deleteItem("+ i +")'>&times;</a></li>"
    }
}
function deleteItem(index){
    arr.splice(index,1)
    randerTodo()
}