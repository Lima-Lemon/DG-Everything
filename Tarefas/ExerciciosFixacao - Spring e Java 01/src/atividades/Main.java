package atividades;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// 4.	Crie um programa que receba um nome e imprima uma sauda��o.
		
		Scanner sc = new Scanner(System.in);
		
		String nome, diaDaSemana, impossibilidade, carteira;
		int idade;
		
		System.out.println("Digite o seu nome:");
		nome = sc.nextLine();
		
		System.out.println("Seja Bem Vindo, " + nome + "!");
		
		// 5.	Crie um programa que receba um input do teclado com uma idade e retorne se � maior ou menor de idade.
		
		
		System.out.println("Quantos anos voc� tem?");
		idade = sc.nextInt();
		
		if(idade >= 18) {
			System.out.println("Ha ha, responsabilidades chegando! Voc� � maior de idade!");
		} else {
			System.out.println("N�o tenha pressa! Voc� � menor de idade!");
			
		}
		
		// 6.	Crie um programa que, dado um dia da semana, verifique se � final de semana.
		
		
		
		System.out.println("Tudo bem, " + nome + ". Agora me diga que dia da semana � hoje:");
		diaDaSemana = sc.next();
		
		
		if((diaDaSemana == "S�bado") || (diaDaSemana == "Domingo")) {
			System.out.println("Uhuul, hoje � final de semana!");
		} else {
			System.out.println("Eita, hoje n�o � final de semana!");
			System.out.println("Imprimndo o dia recebido: "+ diaDaSemana);
		}
		
		// 7.	Crie um programa que verifique se a pessoa tem todos os requisitos para dirigir.
		
		
		
		System.out.println("Agora que j� nos conhecemos, vamos ao que importa! Voc� tem alguma defici�ncia que impossibilite a dire��o?");
		System.out.println("[ S ] - Sim");
		System.out.println("[ N ] - N�o");
		impossibilidade = sc.next();
		
		System.out.println("Voc� tem carteira de motorista dentro do prazo de validade?");
		System.out.println("[ S ] - Sim");
		System.out.println("[ N ] - N�o");
		carteira = sc.next();
		
		if ((carteira == "S") && (impossibilidade == "N") && (idade >= 18)) {
			System.out.println("Voc� possui todos os requisitos para dirigir!");
		} else {
			System.out.println("Calma l�! Voc� ainda n�o pode dirigir!");
		}
		
	}
}
