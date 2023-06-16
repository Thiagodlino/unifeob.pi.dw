document.addEventListener('DOMContentLoaded', function() {
  var materialSelection = document.getElementById('material-selection');
  var dimensionsInput = document.getElementById('dimensions-input');
  var btnCalcular = document.getElementById('btn-calcular');
  var preco = document.getElementById('preco');

  document.getElementById('btn-lona').addEventListener('click', function() {
    showDimensionsInput();
  });

  document.getElementById('btn-lona-promo').addEventListener('click', function() {
    showDimensionsInput();
  });

  document.getElementById('btn-adesivo-vinil').addEventListener('click', function() {
    showDimensionsInput();
  });

  document.getElementById('btn-adesivo-promo').addEventListener('click', function() {
    showDimensionsInput();
  });

  function showDimensionsInput() {
    materialSelection.style.display = 'none';
    dimensionsInput.style.display = 'block';
  }

  btnCalcular.addEventListener('click', function() {
    var largura = parseFloat(document.getElementById('largura').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var valorMetro = parseFloat(document.getElementById('valor-metro').value);

    var precoTotal = largura * altura * valorMetro;

    preco.textContent = 'Preço: R$ ' + precoTotal.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
  });
});
