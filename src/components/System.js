//A classe do sistema de níveis
class SistemaNiveis {
  //construtor da classe, onde inicializa os valores iniciais.
    constructor() {
       this.nivelAtual = 1;  
       this.pontos = 0;
       this.pontosParaSubirNivel = 1000; //pontos necessários para subir de nível
       this.nivelMaximo = 100;
   //dificuldades do jogo, onde indicia se estão ou não desbloqueados e o  nível.
       this.dificuldades = {
         facil: { desbloqueada: true, nivelExigido: 1 },
         medio: { desbloqueada: false, nivelExigido: 25 },
         dificil: { desbloqueada: false, nivelExigido: 50 },
         pro: { desbloqueada: false, nivelExigido: 75 }
       };
   //Pontuações exigidas 
       this.pontosExigidosPorDificuldade = {
         facil: 0,
         medio: 25000,
         dificil: 50000,
         pro: 75000,
       };
    }
   //Método para simular o ganho de ponto durante a partida
    ganharPontos(duracaoDaPartida) {
       let pontosGanhos;
   //A pontuação com base na duração do tempo da partida
       if (duracaoDaPartida <= 6) {
         pontosGanhos = 600;
       } else {
         pontosGanhos = 300;
       }
   
       this.pontos += pontosGanhos;// Atualização da pontuação total do jogador
       console.log(`Você conquistou ${pontosGanhos} pontos! Total de pontos: ${this.pontos}`);
       this.verificarSubidaDeNivel();// Verifica se o jogador subiu de nível 
       this.mostrarPontosRestantes();//A quantidade de pontos que falta para o próximo nível
    }
   //Método para verifica se o jogador subiu de nível
    verificarSubidaDeNivel() {
       while (this.pontos >= this.pontosParaSubirNivel && this.nivelAtual < this.nivelMaximo) {
         this.nivelAtual++;//Incrementa o nível
         this.pontosParaSubirNivel *= 1.5;// O cálculo para ajustar dinamicamente a pontuação para subir de nível
         console.log(`Parabéns! Você subiu para o nível ${this.nivelAtual}!`);
       }
    }
   //método para mostrar a quantidade de pontos restantes para o próximo nível
    mostrarPontosRestantes() {
       const pontosRestantes = this.pontosParaSubirNivel - this.pontos;
       console.log(`Faltam ${pontosRestantes} pontos para subir de nível.`);
    }
   // Método para verificar e desbloquear dificuldades com base no nível do jogador
    verificarPontuacaoExigida() {
       for (const dificuldade in this.dificuldades) {
         if (this.nivelAtual >= this.dificuldades[dificuldade].nivelExigido) {
           this.dificuldades[dificuldade].desbloqueada = true;
           console.log(`Parabéns! Você desbloqueou a dificuldade: ${dificuldade}`);
         }
       }
    }
   //Método para exibir o status atual do jogador, nível, pontuação e estado do desbloqueio das dificuldades
    status() {
       console.log(`Nível Atual: ${this.nivelAtual}`);
       console.log(`Pontos: ${this.pontos}`);
       for (const dificuldade in this.dificuldades) {
         const status = this.dificuldades[dificuldade].desbloqueada ? "Desbloqueada" : "Bloqueada";
         console.log(`Dificuldade ${dificuldade}: ${status}`);
       }
    }
   }