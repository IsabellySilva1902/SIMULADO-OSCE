// Banco de estações do Simulado OSCE.
// Cada estação: metadados, cenário, dados na mesa, tarefas (2 a 4), roteiro do ator/examinador,
// barema (conteúdo, comunicação e clareza; cada item vale "pts"), erros críticos, fala-modelo e pergunta extra.
// Os itens de comunicação e clareza que se repetem em todas as estações ficam em BAREMA_PADRAO.

const MATERIAS = [
  { key: 'cir', label: 'Clínica Cirúrgica', icon: '🔪' },
  { key: 'mulher', label: 'Saúde da Mulher', icon: '🤰' },
  { key: 'farmaco', label: 'Farmacologia', icon: '💊' },
  { key: 'mental', label: 'Saúde Mental', icon: '🧠' },
  { key: 'epi', label: 'Epidemiologia', icon: '📊' },
];

const BAREMA_PADRAO = {
  comunicacao: [
    { item: 'Apresentou-se (nome e função) e chamou o paciente pelo nome', pts: 1 },
    { item: 'Postura cordial e empática: escutou, validou sentimentos e não interrompeu', pts: 1 },
    { item: 'Linguagem acessível, sem jargão técnico, e uso de analogia', pts: 1 },
    { item: 'Verificou a compreensão ("me conta com suas palavras…") e abriu espaço para dúvidas', pts: 1 },
  ],
  clareza: [
    { item: 'Resposta organizada (hipótese → justificativa → conduta → orientação)', pts: 1 },
    { item: 'Cumpriu as tarefas dentro dos 4 minutos', pts: 1 },
  ],
};

const ESTACOES = [
  // Clínica Cirúrgica: estacoes-cir.js (CIR-01 a CIR-25) e estacoes-prova.js (CIR-23).
  // ===================================================== SAÚDE MENTAL
  {
    id: 'MEN-01', materia: 'mental',
    titulo: 'A avó ficou "outra pessoa" depois da cirurgia',
    local: 'Enfermaria de ortopedia', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Dona Lurdes, 82 anos, está no 2º dia após cirurgia de fratura de fêmur. Antes, era lúcida e independente. Desde a noite passada está confusa, não sabe onde está, alterna momentos de agitação (tentou arrancar o acesso) com sonolência, e não consegue manter a atenção na conversa. A filha diz: "minha mãe ficou louca, ela está com Alzheimer?".\n\nPrescrição atual: tramadol de 8/8 h, diazepam 10 mg à noite (iniciado ontem "para dormir").\nDiurese: sem urinar há 9 horas; bexiga palpável.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Sódio', '129 mEq/L'], ['Hemoglobina', '9,8 g/dL'], ['Glicemia', '112 mg/dL']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Justifique com os critérios do CAM.',
      'Quais causas você investiga e corrige neste caso, e qual é o manejo?',
      'Explique à filha a diferença entre o que está acontecendo e demência.',
    ],
    ator: [
      { gatilho: 'Filha, ao se apresentar', fala: '"Ela nunca foi assim! É Alzheimer, né?"' },
      { gatilho: 'Se falar em remédio para acalmar', fala: '"Dá logo um calmante forte pra ela dormir a noite toda."' },
      { gatilho: 'No final', fala: '"Ela vai voltar a ser como era?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Delirium (misto: agitação alternando com sonolência)', pts: 2 },
        { tarefa: 1, item: 'CAM: início agudo e curso flutuante + desatenção + (pensamento desorganizado ou alteração do nível de consciência)', pts: 2 },
        { tarefa: 2, item: 'Causas: medicamento (diazepam), retenção urinária, distúrbio hidroeletrolítico (sódio 129), dor; investigar infecção', pts: 2 },
        { tarefa: 2, item: 'Suspender o diazepam, sondar/aliviar a bexiga, corrigir o sódio e tratar a dor', pts: 1 },
        { tarefa: 2, item: 'Medidas não farmacológicas (primeira linha): reorientação, correção de déficits sensoriais, normalizar o sono, mobilização, analgesia, família presente; evitar contenção', pts: 1 },
        { tarefa: 2, item: 'Antipsicótico (haloperidol em dose baixa) só se agitação com risco; evitar benzodiazepínico', pts: 1 },
        { tarefa: 3, item: 'Explicou à filha que delirium é agudo, flutuante e geralmente reversível, ao contrário da demência', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever mais benzodiazepínico para "acalmar"', 'Não investigar a causa orgânica'],
    falaModelo: [
      { tarefa: 1, texto: 'É delirium, do tipo misto. Pelo CAM: início agudo com curso flutuante, desatenção e alteração do nível de consciência, alternando agitação e sonolência.', tempo: '20 s' },
      { tarefa: 2, texto: 'Procuro as causas: ela começou diazepam ontem, está com retenção urinária, sódio de 129 e dor; investigo infecção. Suspendo o diazepam, alivio a bexiga, corrijo o sódio e trato a dor. Primeiro as medidas não farmacológicas: reoriento, corrijo déficits sensoriais, como óculos, normalizo o sono, mobilizo e mantenho a família por perto, evitando contenção. Haloperidol em dose baixa só se a agitação colocar ela em risco.', tempo: '45 s' },
      { tarefa: 3, texto: 'A sua mãe não ficou louca e isso não é Alzheimer. O cérebro dela está como um computador que travou por excesso de programas abertos: a cirurgia, a dor, um remédio para dormir e a bexiga cheia. A demência é lenta e vai acontecendo em anos; isso começou de ontem para hoje. Quando a gente fecha esses programas, tratando cada causa, na maioria das vezes ela volta a ser como era. A sua presença ajuda muito. Ficou alguma dúvida?', tempo: '45 s', analogia: 'Cérebro como computador travado' },
    ],
    extra: 'Qual é a principal diferença entre delirium e demência no início e na atenção? (Delirium: início agudo, flutuante e com desatenção; demência: insidiosa, progressiva, atenção preservada no início.)',
  },

  // ===================================================== EPIDEMIOLOGIA
  {
    id: 'EPI-01', materia: 'epi',
    titulo: 'Diarreia depois da festa da comunidade',
    local: 'Unidade Básica de Saúde', papel: 'Médico(a) da equipe de Saúde da Família', interacao: 'paciente',
    cenario: 'Depois da festa junina da comunidade, muitas pessoas procuraram a UBS com diarreia e vômitos. A presidente da associação de moradores vem saber "o que aconteceu e se a culpa é da barraca dela". Investigue com ela, calcule a medida adequada e oriente. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Calcule a taxa de ataque em cada grupo e a medida de associação adequada, interpretando o resultado.',
      'Quais providências de vigilância a equipe deve tomar?',
      'Explique o resultado à presidente da associação, sem culpabilizar.',
    ],
    anamnese: [
      { tema: 'Quantos adoeceram e quando', resposta: '"Foram 68 pessoas, todas nas 24 horas depois da festa."' },
      { tema: 'Quantas pessoas estavam na festa', resposta: '"Umas 200 pessoas."' },
      { tema: 'O que foi servido', resposta: '"Salpicão com maionese caseira, milho, canjica e quentão. O salpicão ficou fora da geladeira a tarde toda."' },
      { tema: 'Gravidade', resposta: '"Ninguém precisou internar, graças a Deus."' },
    ],
    placas: [
      { pedido: 'a tabela da investigação', placa: 'Comeram salpicão: 120 pessoas, 60 adoeceram · Não comeram: 80 pessoas, 8 adoeceram.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Vão fechar minha barraca? Foi tudo feito com carinho!"' },
      { gatilho: 'Se citar risco relativo', fala: '"Cinco vezes o quê? Não entendi."' },
      { gatilho: 'No final', fala: '"E o que a gente faz na próxima festa?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Taxa de ataque nos expostos: 60 ÷ 120 = 50%; nos não expostos: 8 ÷ 80 = 10%', pts: 2 },
        { tarefa: 1, item: 'Risco relativo = 50% ÷ 10% = 5', pts: 2 },
        { tarefa: 1, item: 'Interpretou: quem comeu o salpicão teve 5 vezes mais risco de adoecer; forte associação', pts: 1 },
        { tarefa: 2, item: 'Acionar a vigilância epidemiológica: detecção do excesso de casos, investigação e resposta ao surto', pts: 2 },
        { tarefa: 2, item: 'Perguntou quantos adoeceram, quando e o que foi servido; reconheceu um surto (ocorrência localizada acima do esperado)', pts: 1 },
        { tarefa: 3, item: 'Explicou o resultado sem culpar, em linguagem simples', pts: 1 },
      ],
    },
    errosCriticos: ['Usar odds ratio ou prevalência em vez de taxa de ataque e risco relativo', 'Não acionar a vigilância epidemiológica'],
    falaModelo: [
      { tarefa: 1, texto: 'A taxa de ataque entre quem comeu o salpicão é 60 em 120, 50%; entre quem não comeu, 8 em 80, 10%. O risco relativo é 50 dividido por 10, igual a 5: quem comeu teve cinco vezes mais risco de adoecer, uma associação forte com o salpicão.', tempo: '35 s' },
      { tarefa: 2, texto: 'É um surto: uma ocorrência localizada acima do esperado. Aciono a vigilância epidemiológica, que faz a investigação e a resposta ao surto.', tempo: '20 s' },
      { tarefa: 3, texto: 'Dona Maria, ninguém aqui está procurando culpado. Imagine duas salas: na sala de quem comeu o salpicão, metade das pessoas passou mal; na sala de quem não comeu, uma em cada dez. Isso mostra que o salpicão está fortemente associado à doença, mas ninguém fez nada de propósito. Agora a vigilância vai investigar para entender o que aconteceu, e a gente conta com a senhora para ajudar. O que a senhora acha?', tempo: '45 s', analogia: 'Duas salas: metade × um em cada dez' },
    ],
    extra: 'Por que aqui se usa risco relativo e não odds ratio? (Conhecemos toda a população exposta e não exposta, como numa coorte; a OR é usada em estudos de caso-controle.)',
  },
];
