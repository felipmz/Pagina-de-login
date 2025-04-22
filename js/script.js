document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Pegando os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validação simples
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Simulação de autenticação
    if (username === 'admin' && password === '123456') {
        alert('Login bem-sucedido! Redirecionando...');
        // Aqui você poderia redirecionar para outra página
        // window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
    
    // Limpar os campos após o login (opcional)
    // document.getElementById('loginForm').reset();
});