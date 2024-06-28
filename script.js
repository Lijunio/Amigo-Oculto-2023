function validarRestricoes(sorteio, sorteioId, participantes, restricoes) {
    console.log(`Sorteio: ${sorteio}, Restrições para ${sorteioId}: ${restricoes[sorteioId]}`);

    const restricoesSorteio = restricoes[sorteioId];
    if (restricoesSorteio) {
        if (Array.isArray(restricoesSorteio)) {
            return !restricoesSorteio.includes(sorteio);
        } else if (typeof restricoesSorteio === 'function') {
            return restricoesSorteio(sorteio, sorteioId, participantes, restricoes);
        }
    }

    return true;
}

function preencherCampo(sorteioId, participantes, restricoes) {
    const campoSorteio = document.getElementById(sorteioId);

    let sorteio;
    let tentativas = 0;

    do {
        sorteio = sortearParticipante(participantes);
        tentativas++;

        if (tentativas > 1000) {
            console.error('Não foi possível satisfazer as restrições.');
            break;
        }
    } while (!validarRestricoes(sorteio, sorteioId, participantes, restricoes));

    campoSorteio.value = sorteio;
    participantes = participantes.filter(nome => nome !== sorteio);
    return participantes; 
}

function sortearAmigo() {
    const participantes = [];

    for (let i = 1; i <= 34; i++) {
        participantes.push(document.getElementById(`participante${i}`).textContent);
    }

    const restricoes = {
        'sorteio1': ['Adilson', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danielle', 'Isabelle', 'Letícia', 'Izabel', 'Naena', 'Nicole', 'Nicollas', 'Pauliana', 'Pedro', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio2': ['Adilson', 'Aghata', 'Ana Flávia', 'Danilo', 'Danielle', 'Flávio', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro', 'Washington'],
        'sorteio3': ['Adilson', 'Aldeir', 'Ana Flávia', 'Danilo', 'Danielle', 'Ellen', 'Gabriel', 'Márcia', 'Maria Eduarda', 'Izabel', 'Naena', 'Nicole', 'Nicollas', 'Pauliana', 'Pedro'],
        'sorteio4': ['Aldeir', 'Aghata', 'Ana Flávia', 'Cleide', 'Danilo', 'Danielle', 'Dedé', 'Eninho', 'Gabriel', 'Isabelle', 'Juliana', 'Letícia', 'Márcia', 'Maria Eduarda', 'Naena', 'Naiara', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio5': ['Cleide', 'Adilson', 'Ana Flávia', 'Danilo', 'Danielle', 'Elias Junio', 'Gabriel', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro', 'Washington'],
        'sorteio6': ['Danilo', 'Aghata', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danielle', 'Eninho', 'Isabelle', 'Juliana', 'Letícia', 'Izabel', 'Naena', 'Naiara', 'Pauliana', 'Pedro', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio7': ['Danielle', 'Adilson', 'Aghata', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danilo', 'Dedé', 'Eloina', 'Eninho', 'Flávio', 'Gabriel', 'Isabelle', 'Juliana', 'Kelly', 'Letícia', 'Lorena', 'Márcia', 'Maria Eduarda', 'Izabel', 'Naena', 'Naiara', 'Nicole', 'Nicollas', 'Pauliana', 'Samia', 'Tawane', 'Washington', 'Yasmin'],
        'sorteio8': ['Dedé', 'Ana Flávia', 'Danielle', 'Dedé', 'Elias Junio', 'Ellen', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro'],
        'sorteio9': ['Ellen', 'Aldeir', 'Cleide', 'Danielle', 'Ellen', 'Isabelle', 'Samia'],
        'sorteio10': ['Elias', 'Aghata', 'Cleide', 'Danielle', 'Elias', 'Isabelle', 'Letícia', 'Márcia', 'Maria Eduarda', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio11': ['Adilson', 'Aghata', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danilo', 'Ellen', 'Dedé', 'Elias', 'Elias Junio', 'Eloina', 'Eninho', 'Flávio', 'Gabriel', 'Isabelle', 'Juliana', 'Kelly', 'Letícia', 'Lorena', 'Márcia', 'Maria Eduarda', 'Izabel', 'Naena', 'Naiara', 'Nicole', 'Nicollas', 'Pauliana', 'Pedro', 'Samia', 'Silvania', 'Tawane', 'Washington', 'Yasmin'],
        'sorteio12': ['Eloina', 'Danielle'],
        'sorteio13': ['Eninho', 'Ana Flávia', 'Danilo', 'Danielle', 'Ellen', 'Eninho', 'Gabriel', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro'],
        'sorteio14': ['Flávio', 'Aghata', 'Cleide', 'Danielle', 'Flávio', 'Isabelle', 'Letícia', 'Márcia', 'Maria Eduarda', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio15': ['Gabriel', 'Aghata', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danilo', 'Danielle', 'Eninho', 'Gabriel', 'Isabelle', 'Juliana', 'Letícia', 'Izabel', 'Naena', 'Naiara', 'Pauliana', 'Pedro', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio16': ['Isabelle', 'Ana Flávia', 'Danilo', 'Danielle', 'Gabriel', 'Isabelle', 'Izabel', 'Pauliana', 'Pedro', 'Samia'],
        'sorteio17': ['Juliana', 'Ana Flávia', 'Danielle', 'Márcia', 'Maria Eduarda', 'Pauliana', 'Pedro'],
        'sorteio18': ['Danielle', 'Kelly'],
        'sorteio19': ['Letícia', 'Ana Flávia', 'Danilo', 'Danielle', 'Izabel', 'Pauliana', 'Pedro'],
        'sorteio20': ['Lorena', 'Danielle', 'Lorena'],
        'sorteio21': ['Márcia', 'Aghata', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danilo', 'Danielle', 'Eninho', 'Gabriel', 'Isabelle', 'Juliana', 'Letícia', 'Márcia', 'Izabel', 'Naena', 'Naiara', 'Pauliana', 'Pedro', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio22': ['Maria Eduarda', 'Aghata', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danilo', 'Danielle', 'Eninho', 'Gabriel', 'Isabelle', 'Juliana', 'Letícia', 'Maria Eduarda', 'Izabel', 'Naena', 'Naiara', 'Pauliana', 'Pedro', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio23': ['Izabel', 'Cleide', 'Danielle', 'Eninho', 'Isabelle', 'Letícia', 'Izabel', 'Samia'],
        'sorteio24': ['Naena', 'Ana Flávia', 'Danielle', 'Naena', 'Pauliana', 'Pedro'],
        'sorteio25': ['Naiara', 'Danielle', 'Naiara'],
        'sorteio26': ['Nicole', 'Danilo', 'Danielle', 'Nicole'],
        'sorteio27': ['Nicollas', 'Danilo', 'Danielle', 'Nicollas'],
        'sorteio28': ['Pauliana', 'Cleide', 'Danilo', 'Danielle', 'Dedé', 'Eninho', 'Gabriel', 'Isabelle', 'Juliana', 'Kelly', 'Letícia', 'Márcia', 'Maria Eduarda', 'Naena', 'Naiara', 'Nicole', 'Nicollas', 'Pauliana'],
        'sorteio29': ['Pedro', 'Aghata', 'Aldeir', 'Cleide', 'Danielle', 'Dedé', 'Eninho', 'Gabriel', 'Isabelle', 'Juliana', 'Letícia', 'Márcia', 'Maria Eduarda', 'Naena', 'Naiara', 'Samia', 'Tawane', 'Yasmin'],
        'sorteio30': ['Samia', 'Adilson', 'Ana Flávia', 'Danilo', 'Danielle', 'Ellen', 'Elias', 'Elias Junio', 'Flávio', 'Gabriel', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro', 'Washington'],
        'sorteio31': ['Danielle', 'Silvania', 'Isabelle', 'Samia'],
        'sorteio32': ['Tawane', 'Adilson', 'Ana Flávia', 'Danilo', 'Danielle', 'Ellen', 'Elias', 'Elias Junio', 'Eloina', 'Flávio', 'Gabriel', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro', 'Tawane', 'Washington'],
        'sorteio33': ['Washington', 'Cleide', 'Danielle'],
        'sorteio34': ['Yasmin', 'Adilson', 'Ana Flávia', 'Danilo', 'Danielle', 'Elias', 'Elias Junio', 'Flávio', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro', 'Washington'],
    };

    let participantesCopia = [...participantes];
    preencherCampoAnimated(1, participantesCopia, restricoes);
}

function preencherCampoAnimated(i, participantes, restricoes) {
    if (i <= 34) {
        const sorteioId = `sorteio${i}`;
        participantes = preencherCampo(sorteioId, participantes, restricoes);

        setTimeout(function () {
            preencherCampoAnimated(i + 1, participantes, restricoes);
        }, 1000);
    } else {
        gerarArquivoTxt();
    }
}

function sortearParticipante(participantes) {
    return participantes[Math.floor(Math.random() * participantes.length)];
}

function gerarArquivoTxt() {
    let texto = '';

    for (let i = 1; i <= 34; i++) {
        const sorteioId = `sorteio${i}`;
        const nomeSorteado = document.getElementById(sorteioId).value;
        const nomeTirador = document.getElementById(`participante${i}`).textContent;

        texto += `${nomeTirador} tirou ${nomeSorteado}\n`;
    }

    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(texto);
    link.download = 'resultado_sorteio.txt';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}

//----------------------------------------------------------------------POP UP MUSICA------------------------------------------------\\

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var modal = document.getElementById("modalMusica");
        var btnSim = document.getElementById("btnMusicaSim");
        var btnNao = document.getElementById("btnMusicaNao");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        btnSim.onclick = function() {
            iniciarMusica();
            modal.style.display = "none";
        }

        btnNao.onclick = function() {
            modal.style.display = "none";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }, 3000); 
});

function iniciarMusica() {
    var musica = document.getElementById('musica');
    musica.play();
}
