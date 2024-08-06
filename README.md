# Sorteio de Amigo Oculto - Natal 2023

## Descrição

Este projeto foi desenvolvido para realizar o sorteio de Amigo Oculto para o Natal de 2023. Ele foi criado utilizando HTML, CSS e JavaScript, juntamente com o framework Bootstrap para garantir a responsividade do site em diferentes dispositivos. O projeto inclui uma interface para exibir os participantes e os resultados do sorteio, além de funcionalidades para tocar música de Natal e baixar os resultados do sorteio.

## Funcionalidades

- **Sorteio de Amigo Oculto**: Realiza o sorteio de forma aleatória, garantindo que cada participante tenha um amigo oculto.
- **Restrições no Sorteio**: Implementa restrições para garantir que certos participantes não tirem outros, baseado em critérios como o conhecimento mútuo.
- **Interface Responsiva**: Utiliza o Bootstrap para garantir que o site seja visualizado corretamente em diferentes tamanhos de tela.
- **Música de Natal**: Apresenta um modal para tocar música de Natal.
- **Download dos Resultados**: Permite que os usuários baixem os resultados do sorteio em um arquivo de texto.

## Estrutura do Projeto

- **HTML**: Estrutura a página e seus elementos.
- **CSS**: Estiliza a página e garante a responsividade.
- **JavaScript**: Implementa a lógica do sorteio, restrições e outras funcionalidades interativas.

## Requisitos

- Navegador web atualizado.
- Conexão com a internet para carregar o Bootstrap e fontes externas.

## Como Usar

1. **Clonar o Repositório**:
    ```sh
    git clone https://github.com/seu-usuario/sorteio-amigo-oculto.git
    cd sorteio-amigo-oculto
    ```

2. **Abrir o Arquivo `index.html`**:
    Abra o arquivo `index.html` em seu navegador web preferido.

3. **Realizar o Sorteio**:
    - Clique no botão "Sortear" para iniciar o sorteio.
    - A página exibirá os participantes e seus respectivos amigos ocultos.

4. **Música de Natal**:
    - Após alguns segundos, um modal perguntará se você deseja ouvir música de Natal.
    - Clique em "Sim" para tocar a música ou "Não" para fechar o modal.

5. **Baixar os Resultados**:
    - Após o sorteio, você terá a opção de baixar os resultados em um arquivo de texto.

## Detalhes Técnicos

### Restrições no Sorteio

As restrições no sorteio foram implementadas para garantir que certos participantes não tirem outros, baseado em critérios como o conhecimento mútuo. Isso é importante porque nem todos os participantes se conhecem bem, e queremos garantir que todos fiquem confortáveis com seus amigos ocultos.

O arquivo `script.js` contém a lógica das restrições. Cada participante tem um conjunto de possíveis restrições que impedem que eles tirem certos outros participantes. Isso é feito para garantir um sorteio justo e agradável para todos.

### Exemplo de Restrição

```javascript
const restricoes = {
    'sorteio1': ['Adilson', 'Aldeir', 'Ana Flávia', 'Cleide', 'Danielle', 'Isabelle', 'Letícia', 'Izabel', 'Naena', 'Nicole', 'Nicollas', 'Pauliana', 'Pedro', 'Samia', 'Tawane', 'Yasmin'],
    'sorteio2': ['Adilson', 'Aghata', 'Ana Flávia', 'Danilo', 'Danielle', 'Flávio', 'Márcia', 'Maria Eduarda', 'Izabel', 'Pauliana', 'Pedro', 'Washington'],
    // ...
};
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### Observações

1. Certifique-se de substituir o URL do repositório pelo seu próprio URL no GitHub.
2. Adicione ou modifique detalhes conforme necessário para refletir com precisão seu projeto e suas preferências.
