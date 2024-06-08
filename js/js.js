function calculateRank() {
    const victories = parseInt(document.getElementById('victories').value);
    const defeats = parseInt(document.getElementById('defeats').value);
    let valid = true;

    if (isNaN(victories) || victories < 0) {
        document.getElementById('victories-error').innerText = 'Por favor, insira um valor válido para vitórias.';
        document.getElementById('victories-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('victories-error').style.display = 'none';
    }

    if (isNaN(defeats) || defeats <= 0) {
        document.getElementById('defeats-error').innerText = 'Por favor, insira um valor válido para derrotas.';
        document.getElementById('defeats-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('defeats-error').style.display = 'none';
    }

    if (!valid) return;

    const winrate = victories / defeats;
    let pontosRank = Math.round(victories * winrate);

    if (winrate < 0.5) {
        pontosRank = Math.round(pontosRank * 1.15);
    }

    let rank;
    let rankImageId;
    if (pontosRank < 25) {
        rank = "Sem rank";
        rankImageId = null;
    } else if (pontosRank < 100) {
        rank = "Bronze";
        rankImageId = "bronze";
    } else if (pontosRank < 500) {
        rank = "Prata";
        rankImageId = "prata";
    } else if (pontosRank < 1500) {
        rank = "Ouro";
        rankImageId = "ouro";
    } else if (pontosRank < 3000) {
        rank = "Safira";
        rankImageId = "safira";
    } else {
        rank = "Diamante";
        rankImageId = "diamante";
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `O herói está no rank ${rank} com ${pontosRank} pontos`;
    resultElement.classList.add('show');

    // Esconder todas as imagens
    const images = document.querySelectorAll('#rank-images img');
    images.forEach(img => img.classList.remove('show'));

    // Mostrar a imagem correspondente ao rank
    if (rankImageId) {
        document.getElementById(rankImageId).classList.add('show');
    }
}


