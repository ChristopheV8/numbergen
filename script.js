function printNumbers(n, current = 1) {
    if (current > n) return;
    const outputDiv = document.getElementById("output");
    const span = document.createElement("span");
    span.textContent = current;
    outputDiv.appendChild(span);
    printNumbers(n, current + 1);
  }

  function startPrinting() {
    const input = document.getElementById("numberInput").value;
    const n = parseInt(input);
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = ''; 
    if (!isNaN(n) && n > 0) {
      printNumbers(n);
    } else {
      outputDiv.innerText = 'Please enter a valid positive number.';
    }
  }