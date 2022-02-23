 Visão Geral 

- A aplicação consiste em adivinhar um número escolhido aleatoriamente pela máquina;
- A cada inserção de um palpite no campo de input, o número deve ser mostrado no display de 7 segmentos;
- O palpite deve ser comparado com o número escolhido pela máquina;
- Se o palpite for menor, um aviso é mostrado para o usuário, indicando que a incógnita é maior e vice-versa...

Display de 7 segmentos

- A lógica utilizada para fazer o display foi criar três espaços (divs), que representam cada algarismo;
- Dentro de cada um desses espaços há 7 divs que representam cada segmento do display;
- A idéia consiste em pegar o valor digitado pelo usuário e representar no display, utilizando funções.

Testes End-to-end com Cypress

- Foram criados alguns testes automatizados no frontend via Cypress. 

Requisições HTTP

- Uma API foi disponibilizada para uso na aplicação;
- Para consumo da API, foi escolhido o método ".fetch()" do Javascript (Fetch API);
- A partir do dado obtido na requisição, foi possível realizar as operações de verificação e comparação dos valores.

Erro 502

- Algumas vezes a requisição HTTP retornava o erro 502 ("Bad Gateway");
- Foi criada uma operação de verificação para capturar o erro quando surgia;
- Após a captura do erro, o seu código (502) era exibido no display, finalizando a partida e disponibilizando um botão de "recomeçar".