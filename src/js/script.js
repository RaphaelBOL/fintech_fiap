// Função para formatar o campo "Valor"
const valorInput = document.getElementById("valor-input");

valorInput.addEventListener("input", function (e) {
  let v = e.target.value.replace(/\D/g, "");

  // Remove zeros à esquerda
  v = v.replace(/^0+/, "");

  // Se o usuário não digitou nada, não formata
  if (v.length === 0) {
    e.target.value = "";
    return;
  }

  // Limita o tamanho máximo do valor
  if (v.length > 12) {
    v = v.substring(0, 12);
  }

  // Divide por 100 para obter duas casas decimais
  let vNum = parseFloat(v) / 100;

  // Formata o número com duas casas decimais, vírgula decimal e ponto de milhares
  let formattedValue = vNum.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Adiciona o prefixo "R$ "
  e.target.value = "R$ " + formattedValue;
});

// Atualizar a cor do texto do select 'Tipo' conforme a opção selecionada
document.getElementById("tipo-select").addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex];
  this.classList.remove(
    "text-receita",
    "text-despesa",
    "text-icon-active",
    "text-placeholder"
  );
  if (selectedOption.classList.contains("text-receita")) {
    this.classList.add("text-receita");
  } else if (selectedOption.classList.contains("text-despesa")) {
    this.classList.add("text-despesa");
  } else if (selectedOption.classList.contains("text-icon-active")) {
    this.classList.add("text-icon-active");
  } else {
    this.classList.add("text-placeholder");
  }
});

// Similar script para o select 'Categoria'
document
  .getElementById("categoria-select")
  .addEventListener("change", function () {
    var selectedOption = this.options[this.selectedIndex];
    this.classList.remove("text-receita", "text-despesa", "text-placeholder");
    if (selectedOption.classList.contains("text-receita")) {
      this.classList.add("text-receita");
    } else if (selectedOption.classList.contains("text-despesa")) {
      this.classList.add("text-despesa");
    } else {
      this.classList.add("text-placeholder");
    }
  });

// Abrir o calendário ao clicar no ícone
document
  .getElementById("calendario-icone")
  .addEventListener("click", function () {
    const dateInput = document.getElementById("data-vencimento");

    // Verifica se o método showPicker está disponível
    if (dateInput.showPicker) {
      dateInput.showPicker();
    } else {
      // Fallback para navegadores que não suportam showPicker
      dateInput.focus();
      // Cria um evento de clique manualmente
      const event = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      dateInput.dispatchEvent(event);
    }
  });
