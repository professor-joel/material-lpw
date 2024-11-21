// Definindo as perguntas e respostas
const questions = [
    {
        question: "Qual é o planeta mais próximo do sol?",
        answers: ["Terra", "Vênus", "Mercúrio", "Marte"],
        correct: 2
    },
    {
        question: "O que é um Pokémon?",
        answers: ["Um tipo de fruta", "Uma rede social", "Um animal fictício", "Uma marca de roupas"],
        correct: 2
    },
    {
        question: "Quantos estados tem o Brasil?",
        answers: ["24", "25", "26", "27"],
        correct: 3
    },
    {
        question: "Quem pintou a Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2
    },
    {
        question: "O que é a aurora boreal?",
        answers: ["Uma estrela cadente", "Um fenômeno meteorológico", "Um tipo de planta", "Um fenômeno natural de luzes no céu"],
        correct: 3
    },
    {
        question: "Qual é o animal mais rápido do mundo?",
        answers: ["Leão", "Guepardo", "Águia", "Golfinho"],
        correct: 1
    },
    {
        question: "Em que país está a Grande Muralha?",
        answers: ["Índia", "China", "Japão", "Coreia do Norte"],
        correct: 1
    },
    {
        question: "Quantos continentes existem?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Qual é a capital da França?",
        answers: ["Londres", "Paris", "Roma", "Madri"],
        correct: 1
    },
    {
        question: "Qual o nome do autor de Harry Potter?",
        answers: ["George R.R. Martin", "J.R.R. Tolkien", "J.K. Rowling", "Suzanne Collins"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

// Inicia o quiz
function startQuiz() {
    document.querySelector("button").style.display = "none"; // Esconde o botão de iniciar
    document.getElementById("question-container").classList.add("active"); // Exibe as perguntas
    showQuestion();
}

// Exibe a pergunta atual
function showQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";
    questionData.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.textContent = answer;
        li.onclick = () => checkAnswer(index);
        answersList.appendChild(li);
    });
}

// Verifica a resposta selecionada
function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestion];
    if (selectedIndex === questionData.correct) {
        score++;
    }
    document.querySelectorAll("#answers li").forEach((li, index) => {
        li.style.pointerEvents = "none"; // Desativa a interação com as respostas após selecionar uma
        if (index === questionData.correct) {
            li.style.backgroundColor = "#28a745"; // Resposta correta
        } else {
            li.style.backgroundColor = "#dc3545"; // Resposta errada
        }
    });
}

// Avança para a próxima pergunta ou exibe o resultado
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Exibe o resultado final
function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}
