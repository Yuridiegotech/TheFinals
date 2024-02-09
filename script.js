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

    // Habilitar o botão de sortear arma
    document.getElementById('sortearArmaBtn').disabled = false;
    // Desabilitar o botão de sortear equipamentos
    document.getElementById('sortearEquipamentosBtn').disabled = true;
}

function sortearArma() {
    var resultadoElement = document.getElementById('resultado');
    var armasPequeno = ["V9S", "M11", "LH1", "Sawed-Off Shotgun", ".30-06 Sniper", "Assassin's Dagger", "Sword", "Throwing Knives"];
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

    // Desabilitar o botão de sortear arma após o sorteio
    document.getElementById('sortearArmaBtn').disabled = true;
    // Habilitar o botão de sortear equipamentos
    document.getElementById('sortearEquipamentosBtn').disabled = false;
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
}
