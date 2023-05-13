const alunos = ["aluno 1", 'aluno 2' , 'aluno 3']

const lista = document.querySelector('.aluno')
console.log(lista)

alunos.forEach(aluno => {
    lista.innerHTML += `<br> ${aluno}`
});