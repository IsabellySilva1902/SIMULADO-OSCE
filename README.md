# Simulado OSCE

Simulador de estações OSCE com o tempo da prova: **4 minutos** para se apresentar, ler o caso e responder em voz alta, e, depois, o **feedback** com o barema, sem cronômetro, para ler com calma.

- **Matérias:** Clínica Cirúrgica, Saúde da Mulher, Farmacologia, Saúde Mental e Epidemiologia.
- **Barema:** cada item é marcado como fez, parcial ou não, em três blocos: conteúdo, comunicação e cordialidade, e clareza. Os erros críticos aparecem em destaque.
- **Ditado por voz (opcional):** transcreve o que você fala durante a estação, para comparar com a fala-modelo.
- **Circuito:** uma estação de cada matéria, uma atrás da outra. Na porta, dá para deixar a estação para o final da mesma rodada ou pular de vez.
- **Histórico de rodadas:** a média de cada rodada fica salva e aparece na página inicial em gráfico (últimas 15, com linha no 7,0) e em lista, com a nota de cada estação e a diferença para a rodada anterior.
- **Com tempo ou sem tempo:** o modo com tempo segue a prova (4 minutos por estação); o modo sem tempo abre a estação sem cronômetro, com um espaço de anotações, para estudar com calma.
- **Caderno de erros:** no feedback, o que faltou no barema, a anamnese que faltou, os erros críticos e as anotações vão para o caderno. Lá dá para editar as anotações, refazer as estações, ver o resumo, marcar como revisada e copiar ou baixar tudo (.txt). Fica salvo no navegador.
- **Revisão espaçada (como no Anki):** estações com nota abaixo de 7, erro crítico ou guardadas no caderno entram numa fila. Cerca de 20% de cada circuito (1 em 5) vem dessa fila, com intervalos de 1, 2, 4 e 8 circuitos; depois de 4 revisões com 7 ou mais, a estação sai da fila.
- **Treino em dupla ou trio:** com o mesmo código, na dupla um colega é o avaliador (faz o paciente, mostra as placas e marca o barema); no trio entra o ator, que tem uma tela própria com quem ele é, as falas e o que contar só se perguntarem. Os papéis podem revezar a cada estação.
- **Revisão:** as estações com nota abaixo de 7 voltam.
- **Anamnese e placas, como na prova:** nas estações com anamnese, o paciente só conta o que for perguntado e o avaliador só mostra a placa do exame pedido. No treino sozinho, cada tema da anamnese e cada exame é uma caixinha: ao marcar, aparece só aquela resposta, que guia a próxima pergunta, e o feedback mostra o que ficou faltando. Na dupla e no trio, o avaliador marca o que o candidato perguntou.
- **Prova anterior (⭐):** as estações da prova do 4º semestre B 25.2, com um botão para treinar só elas.
- **Resumo do assunto:** no fim do feedback e pelo botão 📚 do catálogo (sem cronômetro), com os pontos principais e a pegadinha do tema; o botão Copiar leva o texto para o WhatsApp.

## Estações

104 estações, escritas só com o conteúdo dos slides, do banco de questões das disciplinas e dos relatos da prova anterior:

| Matéria | Estações | Arquivo |
|---|---|---|
| Clínica Cirúrgica | 25 | `estacoes-cir.js` (CIR-01 a CIR-25, no formato da prova) e `estacoes-prova.js` (CIR-23) |
| Saúde Mental | 21 | `estacoes.js` (MEN-01), `estacoes-mental.js` e `estacoes-prova.js` (MEN-21) |
| Farmacologia | 18 (mecanismo de ação e reações adversas dos anti-histamínicos e descongestionantes; reações adversas dos antiasmáticos), mais a FAR-19 da prova anterior (AINEs), que fica só no botão ⭐ | `estacoes-farmaco.js` e `estacoes-prova.js` (FAR-19) |
| Epidemiologia | 24 | `estacoes.js` (EPI-01), `estacoes-epi.js` e `estacoes-prova.js` (EPI-21) |
| Saúde da Mulher | 15 (infecções genitais) | `estacoes-mulher.js` e `estacoes-prova.js` (MUL-15) |

Matérias, barema padrão e a primeira estação de Saúde Mental e de Epidemiologia ficam em `estacoes.js`. Os resumos ficam em `resumos.js`.
