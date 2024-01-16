document.addEventListener('DOMContentLoaded', function () {
    Inputmask('9{1,3}').mask(document.getElementById('altura'));
});

function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso === '' || altura === '') {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    var imc = (peso / ((altura / 100) * (altura / 100))).toFixed(2);

    // Atualizar div "comentarios"
    var comentariosDiv = document.getElementById('comentariosTexto');
    comentariosDiv.innerHTML = 'Seu IMC é ' + imc + '.';

    // Atualizar div "result"
    var resultDiv = document.querySelector('.result');
    resultDiv.style.display = 'block';

    // Atualizar resultados específicos do IMC e classificação
    var imcResult = document.getElementById('imcResult');
    var classificacaoResult = document.getElementById('classificacaoResult');

    if (imc < 17) {
        imcResult.innerHTML = imc;
        classificacaoResult.innerHTML = 'Muito abaixo do peso';
    }
    else if (imc >= 17 && imc < 18.49) {
        imcResult.innerHTML = imc;
        classificacaoResult.innerHTML = 'Abaixo do peso';
    }
    else if (imc >= 18.5 && imc < 24.99) {
        imcResult.innerHTML = imc;
        classificacaoResult.innerHTML = 'Peso normal';
    }
    else if (imc >= 25 && imc < 29.99) {
        imcResult.innerHTML = imc;
        classificacaoResult.innerHTML = 'Acima do peso';
    }
    else if (imc >= 30 && imc < 34.99) {
        imcResult.innerHTML = imc;
        classificacaoResult.innerHTML = 'Obesidade I';
    }
    else if (imc >= 35 && imc < 39.99) {
        imcResult.innerHTML = imc;
        classificacaoResult.innerHTML = 'Obesidade II (severa)';
    }
    else {
        imcResult.innerHTML = imc;
        classificacaoResult.innerHTML = 'Obesidade III (mórbida)';
    }
}