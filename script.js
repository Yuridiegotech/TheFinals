var personagemSelecionado;
var armaSelecionada;
var equipamentosPequeno = ["Frag Grenade", "Flashbang", "Incendiary Grenade", "Goo Grenade", "Gas Grenade", "Smoke Grenade", "Glitch Grenade", "Breaching Charge", "Proximity Sensor", "Stun Gun", "Thermal Vision"];
var equipamentosMedio = ["Frag Grenade", "Flashbang", "Incendiary Grenade", "Goo Grenade", "Gas Grenade", "Sonar Grenade", "Explosive Mine", "Gas Mine", "Glitch Trap", "Zipline", "Jump Pad", "Defibrillator", "Tracking Dart", "APS Turret", "Night Vision"];
var equipamentosGrande = ["Frag Grenade", "Flashbang", "Incendiary Grenade", "Goo Grenade", "Gas Grenade", "C4", "Explosive Mine", "Incendiary Mine", "Barricade", "RPG-7", "Dome Shield", "Night Vision"];

function sortearPersonagem() {
    var personagemSelect = document.getElementById('character');
    personagemSelecionado = Math.floor(Math.random() * 3) + 1;

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Personagem: ${personagemSelecionado === 1 ? 'Pequeno' : (personagemSelecionado === 2 ? 'Médio' : 'Grande')}`;

    // Exibir a imagem correspondente ao personagem
    var imagemPersonagem = document.getElementById('imagemPersonagem');
    imagemPersonagem.style.display = 'inline'; // ou 'block' dependendo do layout
    imagemPersonagem.src = `img/person-${personagemSelecionado === 1 ? 'pequeno' : (personagemSelecionado === 2 ? 'medio' : 'grande')}.png`;

    // Habilitar o botão de sortear arma
    document.getElementById('sortearArmaBtn').disabled = false;
    // Desabilitar o botão de sortear equipamentos
    document.getElementById('sortearEquipamentosBtn').disabled = true;
    // Limpar imagens de arma e equipamentos
    document.getElementById('imagemArma').src = "";
    document.getElementById('imagemEquipamentos').src = "";
}

function sortearArma() {
    var resultadoElement = document.getElementById('resultado');
    var armasPequeno = ["V9S", "M11", "LH1", "Sawed-Off Shotgun", ".30-06 Sniper", "Assassin's Dagger", "Sword", "Throwing Knives", "XP-54"];
    var armasMedio = ["AKM", "FCAR", "Repeater", "Pump-Action GL", "Riot Shield", "R .357"];
    var armasGrande = ["m60", "SA1216", "M32 GL", "Flamethrower", "Sledgehammer"];

    if (personagemSelecionado === 1) {
        armaSelecionada = armasPequeno[Math.floor(Math.random() * armasPequeno.length)];
    } else if (personagemSelecionado === 2) {
        armaSelecionada = armasMedio[Math.floor(Math.random() * armasMedio.length)];
    } else if (personagemSelecionado === 3) {
        armaSelecionada = armasGrande[Math.floor(Math.random() * armasGrande.length)];
    }

    resultadoElement.innerHTML += `<br>Arma: ${armaSelecionada}`;

    // Exibir a imagem correspondente à arma
    var imagemArma = document.getElementById('imagemArma');
    imagemArma.style.display = 'inline'; // ou 'block' dependendo do layout
    imagemArma.src = `img/arma-${personagemSelecionado === 1 ? 'pequeno-' : (personagemSelecionado === 2 ? 'medio-' : 'grande-')}${armaSelecionada.toLowerCase()}.png`;

    // Desabilitar o botão de sortear arma após o sorteio
    document.getElementById('sortearArmaBtn').disabled = true;
    // Habilitar o botão de sortear equipamentos
    document.getElementById('sortearEquipamentosBtn').disabled = false;
    // Limpar imagem de equipamentos
    document.getElementById('imagemEquipamentos').src = "";
}

function sortearEquipamentos() {
    var resultadoElement = document.getElementById('resultado');
    var equipamentosSorteados = [];

    if (personagemSelecionado === 1) {
        equipamentosSorteados = sortearItensAleatorios(equipamentosPequeno, 4);
    } else if (personagemSelecionado === 2) {
        equipamentosSorteados = sortearItensAleatorios(equipamentosMedio, 4);
    } else if (personagemSelecionado === 3) {
        equipamentosSorteados = sortearItensAleatorios(equipamentosGrande, 4);
    }

    resultadoElement.innerHTML += `<br>Equipamentos: ${equipamentosSorteados.join(', ')}`;

    // Exibir as imagens correspondentes aos equipamentos
    var imagemEquipamentos = document.getElementById('imagemEquipamentos');
    imagemEquipamentos.style.display = 'inline'; // ou 'block' dependendo do layout
    imagemEquipamentos.src = `img/equipamentos-${personagemSelecionado === 1 ? 'pequeno' : (personagemSelecionado === 2 ? 'medio' : 'grande')}.png`;

    // Desabilitar o botão de sortear equipamentos após o sorteio
    document.getElementById('sortearEquipamentosBtn').disabled = true;
}

function sortearItensAleatorios(array, quantidade) {
    var itensSorteados = [];

    while (itensSorteados.length < quantidade) {
        var itemSorteado = array[Math.floor(Math.random() * array.length)];
        if (!itensSorteados.includes(itemSorteado)) {
            itensSorteados.push(itemSorteado);
        }
    }

    return itensSorteados;
}

function limparTela() {
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    // Desabilitar os botões
    document.getElementById('sortearArmaBtn').disabled = true;
    document.getElementById('sortearEquipamentosBtn').disabled = true;
    // Limpar imagens de personagem, arma e equipamentos
    document.getElementById('imagemPersonagem').src = "";
    document.getElementById('imagemArma').src = "";
    document.getElementById('imagemEquipamentos').src = "";

    // Ocultar as imagens novamente
    document.getElementById('imagemPersonagem').style.display = 'none';
    document.getElementById('imagemArma').style.display = 'none';
    document.getElementById('imagemEquipamentos').style.display = 'none';
}
