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

// Fila de Atendimento (Queue)

console.log('Fila de Atendimento:');
console.log('===================================');
const alunos = new Fila();
alunos.enfileirar('João');
alunos.desenfileirar('João');
console.log('Próximo a ser atendido(a):', alunos.frente());
alunos.imprimir();



// Classe Pilha
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
    console.log('Documentos pendentes:', this.itens.slice().reverse().join(' <- topo'));
  }
}

// Pilha de documentos prioritários (Stack)

console.log('Pilha de Documentos Prioritários:');
console.log('===================================');
const pilhaDocumentos = new Pilha();
pilhaDocumentos.empilhar("'Relatório de Vendas'");
console.log('Documento no topo:', pilhaDocumentos.topo());
pilhaDocumentos.desempilhar();
pilhaDocumentos.imprimir();
