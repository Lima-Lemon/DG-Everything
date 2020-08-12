//o jogo só pode ser jogado depois da página carregada
var rodada = 1; //variável de rodada que começa com esse valor
var matriz_jogo = Array(3); //iniciando a matriz com um array de 3 posições - [a,b,c] - para cada posição desse array, criaremos um novo array

matriz_jogo['a'] = Array(3); //[[a1,a2,a3],[b],[c]]
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0; //determinando os valores para os índices que estamos determinando - exemplok, se o cara clicar na coluna 1 e linha a a gente muda
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0; //o a, b e c é o ÍNDICE que pode ser o que quiser. existindo só os que criar, tipo a1

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function(){

    $('#btn_iniciar_jogo').click(function(){

        //valida a digitação dos players
        if($('#nick1').val() == ''){
            alert('Player 1 tá escondendo o nome porque sabe que vai perder');
            return false;
            // se quissessemos, poderíamos colocar um nome padrão por aqui.
        }

        if($('#nick2').val() == ''){
            alert('Player 2 tá escondendo o nome porque sabe que vai perder');
            return false;
            // se quissessemos, poderíamos colocar um nome padrão por aqui.
        }

        //exibir os apelidos, criar os spans
        $('#nome_jogador_1').html($('#nick1').val()); //injetando o nome digitado no span
        $('#nome2').html($('#nick2').val());

        //controlar visualização das divs
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    });

    //adicionar class jogada em cada div da tabela
    $(".jogada").click(function(){
        //criar id em cada div do jogo
        // chamaremos linha a b c e coluna 1 2 3
        var id_campo_clicado = this.id;
        $("#"+id_campo_clicado).off(); //desabilitando os eventos para o elemento - evitar que possa mudar x e bolinha
        jogada(id_campo_clicado);
    });

    function jogada(id){
        //criar variável rodada
        var icone = '';
        var ponto = 0; //se alguma linha ou diagonal ou coluna tiver soma 3 ou -3, o jogo acabou

        //a cada rodada verifica que jogador está jogando (par ou ímpar)
        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        } else {
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }

        rodada++;

        $('#'+id).css('background-image', icone); //atribuindo o valor da propriedade icone para o background-image da div com o id passado como parâmetro

        //criar arrays globalmente
        //quebrar o id para pegar linha e coluna
        var linha_coluna = id.split('-'); //quando passa o -, é exatamente a quebra -> a-1 aí vira um array de duas posições -> ['a', '1'] - posição 0 é linha

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

        //verificação se houve vencedor
        verifica_combinacao();
    }

    function verifica_combinacao(){ //pode ter jeitos melhores de fazer, esse é mais para ser didático
        //verifica na horizontal linha A - podemos acessar a matriz de qq lugar pq ela é global
        var pontos = 0;
        for(var i =1; i <= 3; i++){
            pontos += matriz_jogo['a']['i'];
        }
        ganhador(pontos);

        //verifica na horizontal linha B
        var pontos = 0;
        for(var i =1; i <= 3; i++){
            pontos += matriz_jogo['b']['i'];
        }
        ganhador(pontos);

        //verifica na horizontal linha C
        var pontos = 0;
        for(var i =1; i <= 3; i++){
            pontos += matriz_jogo['c']['i'];
        }
        ganhador(pontos);

        //verifica na vertical
        for(var l = 1; l <= 3; l++){
            pontos = 0;
            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];

            ganhador(pontos);
        }

        //verifica na diagonal
        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        
        ganhador(pontos);

        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        
        ganhador(pontos);
    }

    function ganhador(pontos){
        if(pontos == -3){
            var jogada_1 = $('#nick1').val();
            //desativar
            $('.jogada').off();
            alert(jogada_1 + ' Ganhou')
        }
        if(pontos ==3){
            var jogada_2 = $('#nick2').val();
            $('.jogada').off();
            alert(jogada_2 + ' Ganhou') //mudar para um span com innerhtml
        }
    }
});