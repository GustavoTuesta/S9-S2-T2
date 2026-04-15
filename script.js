function agregarTarea() {
    const lista = document.getElementById('lista');    
    const tarea = document.getElementById('tarea');
    lista.innerHTML += `<li>${tarea.value}</li>`;
}

li.onclick=function(){
    this.remove();
}
