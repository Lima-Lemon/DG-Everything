package atividades;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// 4.	Crie um programa que receba um nome e imprima uma saudação.
		
		Scanner sc = new Scanner(System.in);
		
		String nome, diaDaSemana, impossibilidade, carteira;
		int idade;
		
		System.out.println("Digite o seu nome:");
		nome = sc.nextLine();
		
		System.out.println("Seja Bem Vindo, " + nome + "!");
		
		// 5.	Crie um programa que receba um input do teclado com uma idade e retorne se é maior ou menor de idade.
		
		
		System.out.println("Quantos anos você tem?");
		idade = sc.nextInt();
		
		if(idade >= 18) {
			System.out.println("Ha ha, responsabilidades chegando! Você é maior de idade!");
		} else {
			System.out.println("Não tenha pressa! Você é menor de idade!");
			
		}
		
		// 6.	Crie um programa que, dado um dia da semana, verifique se é final de semana.
		
		
		
		System.out.println("Tudo bem, " + nome + ". Agora me diga que dia da semana é hoje:");
		diaDaSemana = sc.next();
		
		
		if((diaDaSemana == "Sábado") || (diaDaSemana == "Domingo")) {
			System.out.println("Uhuul, hoje é final de semana!");
		} else {
			System.out.println("Eita, hoje não é final de semana!");
			System.out.println("Imprimndo o dia recebido: "+ diaDaSemana);
		}
		
		// 7.	Crie um programa que verifique se a pessoa tem todos os requisitos para dirigir.
		
		
		
		System.out.println("Agora que já nos conhecemos, vamos ao que importa! Você tem alguma deficiência que impossibilite a direção?");
		System.out.println("[ S ] - Sim");
		System.out.println("[ N ] - Não");
		impossibilidade = sc.next();
		
		System.out.println("Você tem carteira de motorista dentro do prazo de validade?");
		System.out.println("[ S ] - Sim");
		System.out.println("[ N ] - Não");
		carteira = sc.next();
		
		if ((carteira == "S") && (impossibilidade == "N") && (idade >= 18)) {
			System.out.println("Você possui todos os requisitos para dirigir!");
		} else {
			System.out.println("Calma lá! Você ainda não pode dirigir!");
		}
		
	}
}
