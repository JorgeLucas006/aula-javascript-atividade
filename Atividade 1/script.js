function textResult(number) {
  const txt = document.getElementById("result-text");
  const value = parseFloat(txt.textContent);

  if (txt.textContent === "Infinity" || txt.textContent === "NaN") {
    txt.innerHTML = "";
  }

  if (number === "-") {
    console.log(!isNaN(value));
    if (!isNaN(value)) {
      symbols("-");
      return;
    }
    txt.innerHTML += "-";
    return;
  }

  txt.innerHTML += number;
}

function decimal() {
  const txt = document.getElementById("result-text").textContent;
  var regex = /^[0-9]/;

  if (txt.includes(".")) {
    return;
  } else if (regex.test(txt)) {
    textResult(".");
  }
}

function symbols(symbol) {
  const txt = document.getElementById("result-text");
  const txtValue = txt.textContent;
  const txtPrevious = document.getElementById("result-previous");
  const previousValue = txtPrevious.textContent;

  if (txtValue === "" && previousValue === "") {
    //Se o result e o previous estiverem vazio não fazer nada
  } else if (txtValue !== "") {
    // Se existir valor no result pega o valor e o simbolo e adicionar ao previous
    const result = eval(previousValue + txtValue);

    if (isFinite(result)) {
      txtPrevious.innerHTML = result + symbol;
      txt.innerHTML = "";
    } else {
      txt.innerHTML = result;
      txtPrevious.innerHTML = "";
    }
  } else if (txtValue === "" && previousValue !== "") {
    // Caso ja exista um valor no previous, mudar o simbolo
    const lastSymbol = previousValue[previousValue.length - 1];
    const changeSymbol = previousValue.replace(lastSymbol, symbol);
    txtPrevious.innerHTML = changeSymbol;
  } else {
    txtPrevious.innerHTML = txtValue + symbol;
    txt.innerHTML = "";
  }
}

function calc() {
  const txt = document.getElementById("result-text");
  const txtValue = txt.textContent;
  const txtPrevious = document.getElementById("result-previous");
  const previousValue = txtPrevious.textContent;

  const lastSymbol = previousValue[previousValue.length - 1];

  if (isNaN(lastSymbol) && txtValue !== "") {
    const result = eval(previousValue + txtValue);
    txt.innerHTML = result;
    txtPrevious.innerHTML = "";
  } else {
    txt.innerHTML = parseFloat(previousValue);
    txtPrevious.innerHTML = "";
  }
}

function allClear() {
  const txt = document.getElementById("result-text");
  const txtPrevious = document.getElementById("result-previous");

  txt.innerHTML = "";
  txtPrevious.innerHTML = "";
}

function backspace() {
  const txt = document.getElementById("result-text");
  const txtValue = txt.textContent;
  const newTxt = txtValue.substring(0, txtValue.length - 1);

  txt.innerHTML = newTxt;
}
