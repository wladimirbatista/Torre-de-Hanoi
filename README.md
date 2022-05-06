<article>
        <h1>Torre de hanoi.</h1>
        <h2>Introdução.</h2>
        <p>A Torre de Hanoi é um quebra-cabeças que consiste de três varetas e um número de discos de diferentes tamanhos que podem ser encaixados em qualquer                vareta. O jogo começa com todos os discos empilhados em uma vareta, do maior (embaixo) para o menor (no topo).</p>
        <figure>
          <img
            src="https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo1/sprint4/img/torre-de-hanoi-example.png"
            alt="Torre de hanoi example."
            rel="noopener noreferrer"
          />
          <figcaption>Exemplo: Torre de hanoi.</figcaption>
        </figure>
        <p>O envio deve ser o trabalho realizado por você - (não copiem a solução escrita por outra pessoa).</p>
        <section class="hilightedContet hilightedContet--warning">
          <header>
            <strong>Aviso!</strong>
          </header>
        </section>
        <h2>Tarefa</h2>
        <p>
          O objetivo do quebra-cabeças é mover toda a pilha para outra vareta
          obedecendo às seguintes regras:
        </p>
        <ol>
          <li>
            <p>Apenas um disco pode ser movido por vez.</p>
          </li>
          <li>
            <p>
              Cada movimento consiste em pegar o disco de cima de uma das pilhas
              e movê-lo para o topo de outra pilha.
            </p>
          </li>
          <li>
            <p>Nenhum disco pode ser colocado no topo de um disco menor.</p>
          </li>
        </ol>
        <h2>Passo a Passo</h2>
      <p>
        Exemplo visual para ajudá-lo a entender
        melhor o funcionamento.
      </p>
      <figure>
        <img
          src="https://media.giphy.com/media/rutTKcoKSCSYM/giphy.gif"
          alt="Exemplo da torre em hanoi funcionando"
        />
        <figcaption>
          Se quiser saber mais sobre o jogo pode
          <a
            href="https://pt.wikipedia.org/wiki/Torre_de_Han%C3%B3i"
            target="_blank"
            >Acessar esse link</a
          >
        </figcaption>
        </figure>
        <h2>Funcionalidades do Jogo</h2>
      <ol>
        <li>
          O jogador deve clicar duas vezes para cada movimento:
          primeiro para selecionar a torre de origem, e depois para selecionar a
          torre de destino. Use uma variável para registrar qual modo o jogador
          está.
        </li>
        <li>
          Adicionar um handler de clique em cada uma das três torres. Use
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget"
            target="_blank"
            rel="noopener noreferrer"
            >event.currentTarget</a
          >
          dentro do handler de evento para determinar qual torre foi clicada.
        </li>
        <li>
          Use a propriedade DOM
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/childElementCount"
            target="_blank"
            rel="noopener noreferrer"
          >
            childElementCount</a
          >
          para saber quantos discos estão em uma torre.
        </li>
        <li>
          Usar a propriedade DOM
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild"
            target="_blank"
            rel="noopener noreferrer"
            >lastElementChild</a
          >
          para saber qual é o disco no topo da torre.
        </li>
        <li>
          Usar o método DOM
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild"
            target="_blank"
            rel="noopener noreferrer"
            >appendChild()</a
          >
          para adicionar um disco a uma torre . Observe que quando você usa
          appendChild em um elemento que já tem um pai, ele é automaticamente
          removido do pai anterior e adicionado no novo.
        </li>
        <li>
          Usar a propriedade
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth"
            target="_blank"
            rel="noopener noreferrer"
            >Element.clientWidth</a
          >
          para pegar o tamanho dos discos.
        </li>
      </ol>
      <section>
        
