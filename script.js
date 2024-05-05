function adicionarTarefa() {
    const valorInput = document.getElementById("novaTarefa").value

    if (valorInput !== "") {
        console.log("teste")
        const div = document.createElement("div")
        const p = document.createElement("p")
        const del = document.createElement("button")
        const inputCheck = document.createElement("input")
        const label = document.createElement("label")


        const listatarefas = document.getElementById("listaTarefas")

        div.className = "tarefas"
        p.className = "p"
        del.className = "del"
        inputCheck.className = "check"
        inputCheck.setAttribute("type", "checkbox")

        p.innerHTML = valorInput
        del.innerText = "Deletar"

        label.append(inputCheck)
        const div2 = document.createElement("div")
        div2.appendChild(label)
        div2.appendChild(del)


        div.appendChild(p)
        div.appendChild(div2)

        listatarefas.append(div)

        del.onclick = () => {
            div.remove()
        }

        inputCheck.addEventListener('change', function () {
            if (this.checked) {
                p.style.textDecoration = "line-through";
                div.style.backgroundColor = "green"
            } else {
                p.style.textDecoration = "none";
                div.style.backgroundColor = "rgb(65, 65, 68)"
            }
        });


        document.getElementById("novaTarefa").value = "";
    } else {
        alert("Por favor, insira uma tarefa antes de adicionar.");
    }

}