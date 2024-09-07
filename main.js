document.addEventListener('DOMContentLoaded', (event) => {
    // Adiciona 10 linhas iniciais na tabela
    for (let i = 0; i < 10; i++) {
        adicionarLinha();
    }
});

function adicionarLinha() {
    const tbody = document.getElementById('despesas-tbody');
    const rowCount = tbody.rows.length;

    if (rowCount >= 15) {
        alert("Você já adicionou 15 linhas.");
        return;
    }

    const row = document.createElement('tr');

    row.innerHTML = `
        <td><input type="text" placeholder="Descrição" /></td>
        <td><input type="number" class="divida" placeholder="0.00" /></td>
    `;

    tbody.appendChild(row);
}

function calcularTotal() {
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    
    const dividas = document.querySelectorAll('.divida');
    
    let totalDivida = 0;

    dividas.forEach(divida => {
        totalDivida += parseFloat(divida.value) || 0;
    });

    const totalDisponivel = salario - totalDivida;

    document.getElementById('total').textContent = totalDisponivel.toFixed(2);
}
