function agregarTarea() {
    const lista = document.getElementById('lista');    
    const tarea = document.getElementById('tarea');
    lista.innerHTML += `<li>${tarea.value}</li>`;
    lista.innerHTML += `<hr>`
}

li.onclick=function(){
    this.remove();
}
