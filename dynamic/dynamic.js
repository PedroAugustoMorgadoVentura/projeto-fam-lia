document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as pessoas (IDs começam com "p") e as mensagens (IDs começam com "m")
    const pessoas = document.querySelectorAll("[id^='p']");
    const mensagens = document.querySelectorAll("[id^='m']");

    // Inicialmente, oculta todas as mensagens
    mensagens.forEach(mensagem => {
        mensagem.classList.add("hidden");
        if (mensagem.tagName === "VIDEO") {
            mensagem.pause(); // Pausa o vídeo, se estiver sendo reproduzido
            mensagem.currentTime = 0; // Reinicia o vídeo
        }
    });

    // Adiciona evento de clique a cada pessoa
    pessoas.forEach(pessoa => {
        pessoa.addEventListener("click", () => {
            // Oculta todas as mensagens
            mensagens.forEach(mensagem => {
                mensagem.classList.add("hidden");
                if (mensagem.tagName === "VIDEO") {
                    mensagem.pause(); // Pausa qualquer vídeo que esteja sendo reproduzido
                    mensagem.currentTime = 0; // Reinicia o vídeo
                }
            });

            // Exibe a mensagem correspondente à pessoa clicada
            const idPessoa = pessoa.id.replace("p", "m");  // Substitui "p" por "m" para pegar o ID da mensagem
            const mensagemCorreta = document.getElementById(idPessoa);
            if (mensagemCorreta) {
                mensagemCorreta.classList.remove("hidden");  // Mostra a mensagem
                if (mensagemCorreta.tagName === "VIDEO") {
                    mensagemCorreta.play(); // Reproduz o vídeo automaticamente
                }
            }
        });
    });
});
