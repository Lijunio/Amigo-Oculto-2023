# Sorteio de Amigo Oculto - Natal 2023

## Descrição

Este projeto foi desenvolvido para realizar o sorteio de Amigo Oculto para o Natal de 2023. Ele foi criado utilizando HTML, CSS e JavaScript, juntamente com o framework Bootstrap para garantir a responsividade do site em diferentes dispositivos. O projeto inclui uma interface para exibir os participantes e os resultados do sorteio, além de funcionalidades para tocar música de Natal e baixar os resultados do sorteio.

## Funcionalidades

- **Sorteio de Amigo Oculto**: Realiza o sorteio de forma aleatória, garantindo que cada participante tenha um amigo oculto.
- **Restrições no Sorteio**: Implementa restrições para garantir que certos participantes não tirem outros, baseado em critérios como o conhecimento mútuo.
- **Interface Responsiva**: Utiliza o Bootstrap para garantir que o site seja visualizado corretamente em diferentes tamanhos de tela.
- **Música de Natal**: Apresenta um botão para tocar música de Natal.
- **Download dos Resultados**: Permite que os usuários baixem os resultados do sorteio em um arquivo de texto.

## Estrutura do Projeto

- **HTML**: Estrutura a página e seus elementos.
- **CSS**: Estiliza a página e garante a responsividade.
- **JavaScript**: Implementa a lógica do sorteio, restrições e outras funcionalidades interativas.


## Detalhes Técnicos

### Restrições no Sorteio

As restrições no sorteio foram implementadas para garantir que certos participantes não tirem outros, baseado em critérios como o conhecimento mútuo. Isso é importante porque nem todos os participantes se conhecem bem.

O arquivo `script.js` contém a lógica das restrições. Cada participante tem um conjunto de possíveis restrições que impedem que eles tirem certos outros participantes. Isso é feito para garantir um sorteio seja agradável para todos.

### Exemplo de Restrição

```javascript
const restricoes = {
    'sorteio1': ['Adilson', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danielle', 'Isabelle', 'Letícia', 'Izabel', 'Naena', 'Nicole', 'Nicollas', 'Pauliana', 'Pedro', 'Samia', 'Tawane', 'Yasmin'],
    'sorteio2': ['Adilson', 'Aghata', 'Ana Flávia', 'Danilo', 'Danielle', 'Flávio', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro', 'Washington'],
    // ...
};
```


