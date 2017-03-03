var rodada = 1;
var matriz_game = Array(3);

matriz_game['a'] = Array(3);
matriz_game['b'] = Array(3);
matriz_game['c'] = Array(3);

matriz_game['a']['1'] = 0;
matriz_game['a']['2'] = 0;
matriz_game['a']['3'] = 0;

matriz_game['b']['1'] = 0;
matriz_game['b']['2'] = 0;
matriz_game['b']['3'] = 0;

matriz_game['c']['1'] = 0;
matriz_game['c']['2'] = 0;
matriz_game['c']['3'] = 0;

$(document).ready( function(){
	
	$('#btn_iniciar').click(function(){
		//Valida a digitação dos nicknames
		if($('#input_player1').val() == "" ){
			alert('Cadê o nome, seu porra!');
			return false;
		}
		if($('#input_player2').val() == "" ){
			alert('Cadê o nome, seu porra!');
			return false;
		}
		
		//Exibi os nicknames
		$('#output_player1').html($('#input_player1').val());
		$('#output_player2').html($('#input_player2').val());
		//Visualizão do game.
		$('#menu').hide();
		$('#palco').show();
	});
		//Jogada
		$('.jogada').click(function(){
			
			var cordenada_jogo = this.id;
			$('#'+cordenada_jogo).off();
			jogada(cordenada_jogo);
		});
			function jogada(id){
				var icone = '';
				var ponto = 0;
				
				if((rodada % 2) == 1){
					icone = 'url("imagens/marcacao_1.png")';
					ponto = -1;
				}else{
					icone = 'url("imagens/marcacao_2.png")';
					ponto = 1;
				}
				rodada++;  
				
				$('#'+id).css('background-image', icone);
				
				//var linha_coluna = id;
				matriz_game[id[0]] [id[1]] = ponto;
				analise_combinacao();
			}
			
			function analise_combinacao() {
			//Verifica na horizontal
			var pontos = 0;
				for(var i = 1; i <= 3; i++){
					pontos = pontos + matriz_game['a'][i];
				}
				winner(pontos);
				
				 pontos = 0;
				for(var i = 1; i <= 3; i++){
					pontos = pontos + matriz_game['b'][i];
				}
				winner(pontos);
				
				 pontos = 0;
				for(var i = 1; i <= 3; i++){
					pontos = pontos + matriz_game['c'][i];
				}
				winner(pontos);
				
				//Verificação vertical
				for(var l = 1; l <= 3; l++){
					pontos = 0;
					pontos += matriz_game['a'] [l];
					pontos += matriz_game['b'] [l];
					pontos += matriz_game['c'] [l];
					winner(pontos);
				}
				
				//Verificação na diagonal
				pontos = 0;
				pontos = matriz_game ['a'][1] + matriz_game['b'][2]+matriz_game['c'][3];
				
				winner(pontos);
				pontos = 0;
				pontos = matriz_game ['a'][3] + matriz_game['b'][2]+matriz_game['c'][1];
				winner(pontos);
				
			}
			//Vencedor
			function winner(pontos){
				if(pontos == -3){
					var jogador1 = $('#input_player1').val();
					alert(jogador1+' venceu!');
					$('.jogada').off();
				} 
				if(pontos == 3){
					var jogador2 = $('#input_player2').val();
					alert(jogador2+' venceu!');
					$('.jogada').off();
				}
			}	
});

















