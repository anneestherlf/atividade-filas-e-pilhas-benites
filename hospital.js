// Classe Fila (FIFO)
class Fila {
  constructor() {
    this.itens = [];
  }

  // Adiciona um item ao final da fila
  enfileirar(item) {
    this.itens.push(item);
    console.log(`'${item}' entrou na fila.`);
  }

  // Remove o item do início da fila
  desenfileirar() {
    if (this.estaVazia()) {
      console.log('⚠️ A fila está vazia. Nenhum aluno(a) para remover.');
      return null;
    }
    const removido = this.itens.shift();
    console.log(`🚪 '${removido}' foi atendido(a).`);
    return removido;
  }

  // Mostra o primeiro da fila
  frente() {
    return this.itens[0];
  }

  // Verifica se a fila está vazia
  estaVazia() {
    return this.itens.length === 0;
  }

  // Imprime a fila atual
  imprimir() {
    console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
  }
}

// Classe Pilha (LIFO)
class Pilha {
  constructor() {
    this.itens = [];
  }

  empilhar(item) {
    this.itens.push(item);
    console.log(`Documento '${item}' adicionado.`);
  }

  desempilhar() {
    if (this.estaVazia()) {
      console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
      return null;
    }
    const removido = this.itens.pop();
    console.log(`Documento '${removido}' removido.`);
    return removido;
  }

  topo() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }

  limpar() {
    this.itens = [];
    console.log('Lista de documentos esvaziada.');
  }

  imprimir() {
    console.log('📚 Pilha de prontuários:', this.itens.slice().reverse().join(' <- topo') || 'vazia');
  }

  // Função extra para buscar paciente na pilha de prontuários
  buscarPaciente(nome) {
    const index = this.itens.indexOf(nome);
    if (index === -1) {
      console.log(`🔍 Paciente '${nome}' não encontrado na pilha de prontuários.`);
      return null;
    } else {
      console.log(`🔍 Paciente '${nome}' encontrado na pilha de prontuários na posição ${this.itens.length - index} (de cima para baixo).`);
      return index;
    }
  }
}

// Simulador de fila de atendimento hospitalar e gerenciador de prontuários

console.log('Simulador de Fila de Atendimento Hospitalar:');
console.log('============================================');

// Instanciando fila e pilha
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// Função para iniciar a simulação com 5 pacientes
function iniciarSimulacao() {
  // Limpa estruturas para reiniciar simulação
  filaAtendimento.itens = [];
  pilhaProntuarios.limpar();

  // Adiciona 5 pacientes fictícios à fila
  const pacientes = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elisa'];
  pacientes.forEach(paciente => filaAtendimento.enfileirar(paciente));

  console.log('\nPróximo a ser atendido:', filaAtendimento.frente());

  // Simula atendimento de dois pacientes
  for (let i = 0; i < 2; i++) {
    const atendido = filaAtendimento.desenfileirar();
    if (atendido) {
      pilhaProntuarios.empilhar(atendido);
    }
  }

  // Imprime fila e pilha após atendimentos
  console.log('\nEstado final após atendimentos:');
  filaAtendimento.imprimir();
  pilhaProntuarios.imprimir();
}

// Executa a simulação
iniciarSimulacao();

// Exemplo de busca na pilha
console.log('\n--- Busca na pilha de prontuários ---');
pilhaProntuarios.buscarPaciente('Ana');  // Deve encontrar
pilhaProntuarios.buscarPaciente('Carlos'); // Não existe

// Função para reiniciar simulação com nova lista de pacientes
function reiniciarSimulacao(novosPacientes) {
  console.log('\nReiniciando simulação com nova lista de pacientes...');
  filaAtendimento.itens = [];
  pilhaProntuarios.limpar();

  novosPacientes.forEach(paciente => filaAtendimento.enfileirar(paciente));

  console.log('\nPróximo a ser atendido:', filaAtendimento.frente());
  filaAtendimento.imprimir();
  pilhaProntuarios.imprimir();
}

// Exemplo de reinício
reiniciarSimulacao(['Felipe', 'Giovana', 'Hugo']);
