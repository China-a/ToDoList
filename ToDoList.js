function todoList() {
    let newitem = document.getElementById("toDoInput").value;
    let textitem = document.createTextNode(newitem);
    let addeditem = document.createElement("li");
    addeditem.appendChild(textitem);
    document.getElementById("myList").appendChild(addeditem);
    event.preventDefault();
    document.getElementById("toDoInput").value="";
    addeditem.onclick = function() {
        this.parentNode.removeChild(this);
    }
}