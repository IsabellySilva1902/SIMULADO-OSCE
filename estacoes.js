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
  // ===================================================== CLÍNICA CIRÚRGICA
  {
    id: 'CIR-01', materia: 'cir', exemplo: true,
    titulo: 'Queimadura por álcool na churrasqueira',
    local: 'Pronto-socorro — sala de emergência', papel: 'Médico(a) plantonista', interacao: 'examinador',
    cenario: 'Roberto, 40 anos, 70 kg, chega 2 horas após acender a churrasqueira com álcool. Está consciente, voz normal, sem tosse, sem fuligem na boca ou no nariz. A esposa o acompanha, muito nervosa.\n\nPA 128 × 78 mmHg · FC 112 bpm · FR 20 irpm · SatO₂ 97%.\nExame: queimaduras de 2º grau profundo e 3º grau em toda a face anterior do tronco e em todo o membro superior direito; eritema sem bolhas (1º grau) na face.',
    mesa: [
      { tipo: 'tabela', titulo: 'Regra dos nove (adulto)', linhas: [['Cabeça e pescoço', '9%'], ['Cada membro superior', '9%'], ['Tronco anterior', '18%'], ['Tronco posterior', '18%'], ['Cada membro inferior', '18%'], ['Períneo', '1%']] },
    ],
    tarefas: [
      'Calcule a superfície corporal queimada (SCQ) e diga o que entra e o que não entra na conta.',
      'Calcule a reposição volêmica pela fórmula de Parkland e diga como distribuí-la, considerando que já se passaram 2 horas.',
      'Cite outras condutas imediatas e explique à esposa a gravidade e por que ele precisa de tanto soro.',
    ],
    ator: [
      { gatilho: 'Se perguntar ao examinador sobre via aérea', fala: '"Sem rouquidão, sem estridor, sem fuligem e sem queimadura de vibrissas."' },
      { gatilho: 'Se perguntar sobre vacina', fala: '"Ele não sabe se tomou a antitetânica nos últimos 10 anos."' },
      { gatilho: 'Esposa, no final', fala: '"Por que tanto soro se ele está bebendo água?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'SCQ = 27%: tronco anterior (18%) + membro superior direito (9%)', pts: 2 },
        { tarefa: 1, item: 'Não somou o 1º grau da face (só entram 2º e 3º graus)', pts: 1 },
        { tarefa: 2, item: 'Parkland: 4 mL × 70 kg × 27 = 7.560 mL de Ringer lactato em 24 h', pts: 2 },
        { tarefa: 2, item: 'Metade (3.780 mL) nas primeiras 8 h contadas da queimadura → nas próximas 6 h (≈ 630 mL/h); o restante nas 16 h seguintes (≈ 236 mL/h)', pts: 2 },
        { tarefa: 2, item: 'Guiar pela diurese: meta de 0,5 mL/kg/h (≈ 35 mL/h), com sonda vesical', pts: 1 },
        { tarefa: 3, item: 'ABCDE, analgesia EV, profilaxia antitetânica e curativo; sem antibiótico sistêmico profilático', pts: 1 },
        { tarefa: 3, item: 'Encaminhar ao centro de tratamento de queimados (grande queimado, 3º grau)', pts: 1 },
      ],
    },
    errosCriticos: ['Somar a área de 1º grau na SCQ', 'Contar as 8 horas a partir da chegada ao hospital, e não do momento da queimadura'],
    falaModelo: [
      { tarefa: 1, texto: 'Pela regra dos nove: tronco anterior 18% mais membro superior direito 9% dá 27% de superfície queimada. A face tem só 1º grau, que não entra na conta.', tempo: '20 s' },
      { tarefa: 2, texto: 'Parkland: 4 vezes 70 vezes 27 dá 7.560 mL de Ringer lactato em 24 horas. Metade, 3.780, nas primeiras 8 horas contadas da queimadura; como já passaram 2, faço em 6 horas, cerca de 630 mL por hora. O restante vai nas 16 horas seguintes, uns 236 mL por hora, ajustando pela diurese de 0,5 mL/kg/h.', tempo: '45 s' },
      { tarefa: 3, texto: 'Também faço ABCDE, analgesia na veia, antitetânica, curativo e encaminho ao centro de queimados. Senhora, a pele funciona como a lona de uma barraca que segura a água lá dentro. Com um quarto da pele queimada, o corpo vaza líquido por esses buracos, e beber água não dá conta. Por isso o soro precisa ir pela veia, na quantidade certa, e vamos acompanhar pelo xixi dele. Ficou alguma dúvida?', tempo: '45 s', analogia: 'Pele como a lona de uma barraca' },
    ],
    extra: 'Quais sinais fariam você intubar precocemente? (Rouquidão, estridor, fuligem na via aérea, queimadura de vibrissas, queimadura de face/pescoço extensa, rebaixamento.)',
  },

  // ===================================================== SAÚDE DA MULHER
  {
    id: 'MUL-01', materia: 'mulher', exemplo: true,
    titulo: 'Cefaleia e "pontinhos brilhantes" na gestação',
    local: 'Maternidade — admissão obstétrica', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Juliana, 27 anos, primigesta, 32 semanas, chega com cefaleia frontal intensa há 4 horas e vê "pontinhos brilhantes". Pré-natal sem intercorrências até a última consulta. Está acompanhada do marido.\n\nPA 168 × 112 mmHg (confirmada após 15 minutos) · FC 88 bpm · reflexos patelares vivos · BCF 140 bpm.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Proteinúria (fita)', '2+'], ['Plaquetas', '142.000/mm³'], ['TGO', '38 U/L'], ['Creatinina', '0,8 mg/dL']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Justifique com os critérios do caso.',
      'Descreva a conduta imediata, com doses.',
      'Explique ao casal o que está acontecendo e o que vai ser feito.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Minha cabeça tá explodindo… o bebê tá bem?"' },
      { gatilho: 'Se falar em medicação na veia', fala: '(Marido) "Esse remédio não vai fazer mal pro bebê?"' },
      { gatilho: 'Se falar em parto', fala: '"Mas ainda faltam dois meses! Ele vai nascer agora?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Pré-eclâmpsia com sinais de gravidade / iminência de eclâmpsia', pts: 2 },
        { tarefa: 1, item: 'Justificou: PA ≥ 160 × 110, cefaleia, escotomas e proteinúria após 20 semanas', pts: 1 },
        { tarefa: 2, item: 'Sulfato de magnésio (Zuspan: 4 g EV em 10–20 min + 1 g/h; ou Pritchard)', pts: 2 },
        { tarefa: 2, item: 'Anti-hipertensivo para PA ≥ 160 × 110 (hidralazina EV ou nifedipino VO)', pts: 1 },
        { tarefa: 2, item: 'Monitorar reflexo patelar, frequência respiratória e diurese; gluconato de cálcio como antídoto', pts: 1 },
        { tarefa: 2, item: 'Corticoide para maturação pulmonar (betametasona 12 mg IM, 2 doses com 24 h)', pts: 1 },
        { tarefa: 2, item: 'Exames de HELLP e vitalidade fetal; planejar a resolução da gestação após estabilizar', pts: 1 },
      ],
    },
    errosCriticos: ['Não prescrever sulfato de magnésio', 'Liberar para casa ou só "observar a pressão"'],
    falaModelo: [
      { tarefa: 1, texto: 'É pré-eclâmpsia com sinais de gravidade, em iminência de eclâmpsia: PA de 168 por 112 após 20 semanas, proteinúria e sintomas cerebrais, cefaleia e escotomas.', tempo: '20 s' },
      { tarefa: 2, texto: 'Faço sulfato de magnésio pelo esquema de Zuspan, 4 g na veia em 20 minutos e 1 g por hora, controlando reflexo, respiração e diurese, com gluconato de cálcio à mão. Trato a PA com hidralazina ou nifedipino, faço betametasona para o pulmão do bebê, peço exames para HELLP e avalio a vitalidade fetal. Depois de estabilizar, discuto a resolução da gestação.', tempo: '45 s' },
      { tarefa: 3, texto: 'Juliana, sua pressão subiu muito por causa da placenta. Imagina que a placenta é a raiz de uma planta que não se fixou bem: ela manda sinais que apertam os vasos do corpo inteiro, e a dor de cabeça e os pontinhos mostram que o cérebro está sofrendo. O remédio na veia protege você de ter convulsão, e a injeção ajuda o pulmão do bebê a amadurecer, caso ele precise nascer antes. Vocês ficam aqui com a gente o tempo todo. O que ficou de dúvida?', tempo: '45 s', analogia: 'Placenta como raiz mal fixada' },
    ],
    extra: 'Quais sinais de intoxicação por magnésio você monitora? (Abolição do reflexo patelar, FR < 12–16 irpm, diurese < 25–30 mL/h.)',
  },

  // ===================================================== FARMACOLOGIA
  {
    id: 'FAR-01', materia: 'farmaco', exemplo: true,
    titulo: 'Dor que não passa com codeína',
    local: 'Ambulatório de cuidados paliativos', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Seu Antônio, 66 anos, tem câncer de próstata com metástases ósseas. Usa dipirona 1 g de 6/6 h e codeína 30 mg de 6/6 h há 3 semanas, mas a dor na coluna continua em 8/10 e atrapalha o sono. Função renal e hepática normais. Está acompanhado da filha, que tem medo de que ele "fique viciado em morfina".',
    mesa: [
      { tipo: 'tabela', titulo: 'Avaliação', linhas: [['Dor (EVA)', '8/10'], ['Hábito intestinal', 'evacua a cada 3 dias'], ['Creatinina', '0,9 mg/dL']] },
    ],
    tarefas: [
      'Em que degrau da escada analgésica ele está e qual é o próximo passo?',
      'Faça a prescrição, incluindo o que deve acompanhar o opioide.',
      'Responda à preocupação da filha sobre "vício".',
    ],
    ator: [
      { gatilho: 'Filha, ao ouvir "morfina"', fala: '"Morfina? Isso não é para quem está morrendo? Ele vai ficar viciado."' },
      { gatilho: 'Se falar em efeitos adversos', fala: '"E se ele ficar muito sonolento?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Está no 2º degrau (opioide fraco + não opioide) sem controle', pts: 1 },
        { tarefa: 1, item: 'Subir para o 3º degrau: opioide forte (morfina), mantendo o não opioide', pts: 2 },
        { tarefa: 2, item: 'Morfina de liberação imediata VO em horário fixo (ex.: 5–10 mg de 4/4 h) com doses de resgate', pts: 2 },
        { tarefa: 2, item: 'Suspender a codeína (não associar dois opioides)', pts: 1 },
        { tarefa: 2, item: 'Laxante profilático junto com o opioide; antiemético se necessário', pts: 1 },
        { tarefa: 2, item: 'Reavaliar e titular a dose; conhecer a naloxona para depressão respiratória', pts: 1 },
        { tarefa: 3, item: 'Diferenciou dependência física/tolerância de "vício" e explicou que o objetivo é controlar a dor', pts: 1 },
      ],
    },
    errosCriticos: ['Associar codeína com morfina', 'Prescrever opioide sem laxante'],
    falaModelo: [
      { tarefa: 1, texto: 'Ele está no segundo degrau da escada da OMS, opioide fraco mais não opioide, sem controle. O próximo passo é o terceiro degrau: opioide forte, a morfina, mantendo a dipirona.', tempo: '20 s' },
      { tarefa: 2, texto: 'Suspendo a codeína e prescrevo morfina de liberação imediata por via oral em horário fixo, por exemplo 5 a 10 mg de 4 em 4 horas, com doses de resgate. Junto, laxante desde o início, e antiemético se tiver náusea. Reavalio em poucos dias para titular, e a naloxona é o antídoto se houver depressão respiratória.', tempo: '40 s' },
      { tarefa: 3, texto: 'Entendo o seu medo. Pense na dor como um incêndio: um extintor pequeno, que é a codeína, não está dando conta, e agora precisamos do caminhão de bombeiros. Usar a morfina com dose certa e acompanhamento não é vício: o objetivo é ele voltar a dormir e ter qualidade de vida. Ela pode prender o intestino, por isso já vai junto um laxante. O que mais preocupa a senhora?', tempo: '40 s', analogia: 'Dor como incêndio: extintor × caminhão de bombeiros' },
    ],
    extra: 'Quais efeitos adversos dos opioides não geram tolerância? (Constipação e miose.)',
  },

  // ===================================================== SAÚDE MENTAL
  {
    id: 'MEN-01', materia: 'mental', exemplo: true,
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
        { tarefa: 2, item: 'Causas: benzodiazepínico (diazepam), retenção urinária (bexigoma), hiponatremia, dor, anemia, possível infecção', pts: 2 },
        { tarefa: 2, item: 'Suspender o diazepam, sondar/aliviar a bexiga, corrigir o sódio e tratar a dor', pts: 1 },
        { tarefa: 2, item: 'Medidas não farmacológicas: reorientação, família presente, óculos/prótese auditiva, ciclo sono-vigília, evitar contenção', pts: 1 },
        { tarefa: 2, item: 'Antipsicótico (haloperidol em dose baixa) só se agitação com risco; evitar benzodiazepínico', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever mais benzodiazepínico para "acalmar"', 'Não investigar a causa orgânica'],
    falaModelo: [
      { tarefa: 1, texto: 'É delirium, do tipo misto. Pelo CAM: início agudo com curso flutuante, desatenção e alteração do nível de consciência, alternando agitação e sonolência.', tempo: '20 s' },
      { tarefa: 2, texto: 'Procuro as causas: ela começou diazepam ontem, está com bexigoma, sódio de 129, anemia e dor; investigo infecção. Suspendo o diazepam, alivio a bexiga, corrijo o sódio e trato a dor. Mantenho a família por perto, reoriento, uso óculos e aparelho auditivo, respeito o sono e evito contenção. Haloperidol em dose baixa só se a agitação colocar ela em risco.', tempo: '45 s' },
      { tarefa: 3, texto: 'A sua mãe não ficou louca e isso não é Alzheimer. O cérebro dela está como um computador que travou por excesso de programas abertos: a cirurgia, a dor, um remédio para dormir e a bexiga cheia. A demência é lenta e vai acontecendo em anos; isso começou de ontem para hoje. Quando a gente fecha esses programas, tratando cada causa, na maioria das vezes ela volta a ser como era. A sua presença ajuda muito. Ficou alguma dúvida?', tempo: '45 s', analogia: 'Cérebro como computador travado' },
    ],
    extra: 'Qual é a principal diferença entre delirium e demência no início e na atenção? (Delirium: início agudo, flutuante e com desatenção; demência: insidiosa, progressiva, atenção preservada no início.)',
  },

  // ===================================================== EPIDEMIOLOGIA
  {
    id: 'EPI-01', materia: 'epi', exemplo: true,
    titulo: 'Diarreia depois da festa da comunidade',
    local: 'Unidade Básica de Saúde', papel: 'Médico(a) da equipe de Saúde da Família', interacao: 'paciente',
    cenario: 'Após uma festa junina da comunidade, 68 pessoas procuraram a UBS com diarreia e vômitos nas 24 horas seguintes. A equipe levantou quem comeu o salpicão (com maionese caseira) e quem não comeu. A presidente da associação de moradores vem saber "o que aconteceu e se a culpa é da barraca dela".',
    mesa: [
      { tipo: 'tabela', titulo: 'Investigação', linhas: [['Comeram salpicão', '120 pessoas · 60 adoeceram'], ['Não comeram salpicão', '80 pessoas · 8 adoeceram']] },
    ],
    tarefas: [
      'Calcule a taxa de ataque em cada grupo e a medida de associação adequada, interpretando o resultado.',
      'Quais providências de vigilância a equipe deve tomar?',
      'Explique o resultado à presidente da associação, sem culpabilizar.',
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
        { tarefa: 2, item: 'Notificar o surto de doença transmitida por alimento à vigilância epidemiológica e sanitária', pts: 2 },
        { tarefa: 2, item: 'Coletar amostras (alimento e fezes) e orientar hidratação e sinais de alarme', pts: 1 },
        { tarefa: 3, item: 'Explicou sem culpar e orientou cuidados (refrigeração, maionese caseira, higiene)', pts: 1 },
      ],
    },
    errosCriticos: ['Usar odds ratio ou prevalência em vez de taxa de ataque e risco relativo', 'Não notificar o surto'],
    falaModelo: [
      { tarefa: 1, texto: 'A taxa de ataque entre quem comeu o salpicão é 60 em 120, 50%; entre quem não comeu, 8 em 80, 10%. O risco relativo é 50 dividido por 10, igual a 5: quem comeu teve cinco vezes mais risco de adoecer, uma associação forte com o salpicão.', tempo: '35 s' },
      { tarefa: 2, texto: 'Notifico o surto de doença transmitida por alimento à vigilância epidemiológica e sanitária, coleto amostras do alimento e de fezes e oriento hidratação e sinais de alarme.', tempo: '20 s' },
      { tarefa: 3, texto: 'Dona Maria, ninguém aqui está procurando culpado. Imagine duas salas: na sala de quem comeu o salpicão, metade das pessoas passou mal; na sala de quem não comeu, uma em cada dez. Isso mostra que o problema provavelmente estava no salpicão, e a maionese caseira estraga rápido fora da geladeira. Agora a vigilância vai analisar para ter certeza, e na próxima festa a gente ajuda a organizar a refrigeração. O que a senhora acha?', tempo: '45 s', analogia: 'Duas salas: metade × um em cada dez' },
    ],
    extra: 'Por que aqui se usa risco relativo e não odds ratio? (Conhecemos toda a população exposta e não exposta, como numa coorte; a OR é usada em estudos de caso-controle.)',
  },
];
