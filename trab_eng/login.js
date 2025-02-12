document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let matricula = document.getElementById("matricula").value;
    let senha = document.getElementById("senha").value;
    let mensagemErro = document.getElementById("mensagemErro");

    // Simulação de login (substituir por autenticação real no backend)
    if (matricula === "12345" && senha === "senha123") {
        alert("Login realizado com sucesso!");
        window.location.href = "dashboard.html"; // Redireciona para outra página
    } else {
        mensagemErro.textContent = "Matrícula ou senha incorreta!";
    }
});
