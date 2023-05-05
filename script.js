/*

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let students = [
  {
    name: "Bernardo",
    n1: 9,
    n2: 7
  },
  {
    name: "Fernanda",
    n1: 9,
    n2: 9.5
  },
  {
    name: "Jorge",
    n1: 7,
    n2: 6
  },
  {
    name: "Miguel",
    n1: 10,
    n2: 3
  },
]

function calculateMean (a,b) {
  return (a + b)/2
}

const printStudantGrade = (studant) => {
  if(calculateMean(studant.n1,studant.n2) < 7) {
    alert(
      `O(A) aluno(a) ${studant.name} foi reprovado com média ${calculateMean(studant.n1,studant.n2)}
      \n
        Infelizmente não foi dessa vez ${studant.name}, estude mais a próxima vez!
      `)
  }
  else {
    alert(`
      O(A) aluno(a) ${studant.name} recebeu média ${calculateMean(studant.n1,studant.n2)} 
      \n
        Parabéns, ${studant.name} você foi aprovado(a) no concurso!
      `)
  }
}

for(let studant of students){
  printStudantGrade(studant)
}

