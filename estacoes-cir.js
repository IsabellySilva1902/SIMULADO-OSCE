// Estações de Clínica Cirúrgica (CIR-02 a CIR-22). CIR-01 está em estacoes.js.
ESTACOES.push(
  // ----------------------------------------------------- CIR-02 · Risco cirúrgico
  {
    id: 'CIR-02', materia: 'cir',
    titulo: 'Preciso fazer todos os exames do coração?',
    local: 'Ambulatório de avaliação pré-operatória', papel: 'Médico(a) clínico(a) do pré-operatório', interacao: 'paciente',
    cenario: 'Sr. Valdir, 67 anos, aposentado, tem colecistectomia videolaparoscópica eletiva marcada para daqui a 2 meses, por cólicas biliares de repetição. Hipertenso e diabético, ambos controlados, sem limitação para as atividades do dia a dia. Fuma 1 maço por dia há 35 anos. Sobe dois lances de escada sem cansaço ou dor no peito. Nunca infartou, não tem insuficiência cardíaca nem teve AVC.\n\nO vizinho, que operou o joelho, fez "um monte de exames do coração", e ele quer fazer os mesmos.',
    mesa: [
      { tipo: 'tabela', titulo: 'Avaliação já registrada', linhas: [['Índice de risco cardíaco revisado (Lee)', '2 fatores'], ['Capacidade funcional', 'sobe dois lances de escada sem sintomas'], ['Creatinina (exame antigo)', '1,0 mg/dL']] },
    ],
    tarefas: [
      'Classifique o paciente pela ASA e justifique.',
      'Como o índice de Lee orienta a conduta? Ele precisa de teste cardíaco antes da cirurgia?',
      'Quais exames pré-operatórios você pede, e por que esses?',
      'Responda ao pedido de "todos os exames do coração" e aproveite para otimizar o risco dele.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), quero fazer todos os exames do coração, igual ao meu vizinho."' },
      { gatilho: 'Se falar em parar de fumar', fala: '"Parar de fumar? Mas a cirurgia é só daqui a dois meses."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'ASA II: doença sistêmica leve ou controlada, sem limitação funcional', pts: 1 },
        { tarefa: 1, item: 'Diferenciou de ASA III (doença grave com limitação funcional) e ASA IV (ameaça constante à vida)', pts: 1 },
        { tarefa: 2, item: 'Lee: 0–1 fator libera; 2 fatores avalia a capacidade funcional; 3–6 fatores indica teste cardíaco', pts: 1 },
        { tarefa: 2, item: 'Dois lances de escada sem sintomas = 4 METs ou mais → liberado sem teste cardíaco', pts: 1 },
        { tarefa: 3, item: 'Acima de 65 anos: ECG, hematócrito, ureia/creatinina, glicemia e eletrólitos', pts: 1 },
        { tarefa: 3, item: 'RX de tórax: mais de 20 maços-ano e idade acima de 65 anos', pts: 1 },
        { tarefa: 4, item: 'A avaliação pré-operatória estima e otimiza o risco; não aplica exames de forma padronizada e indiscriminada', pts: 1 },
        { tarefa: 4, item: 'Otimização: cessar o tabagismo pelo menos 4 a 8 semanas antes (dá tempo se parar agora)', pts: 1 },
      ],
    },
    errosCriticos: ['Pedir teste cardíaco sem indicação', 'Pedir exames sem relação com a idade e os fatores de risco'],
    falaModelo: [
      { tarefa: 1, texto: 'É ASA II: hipertensão e diabetes controlados, sem limitação funcional. Seria ASA III se a doença fosse grave e limitasse as atividades, e ASA IV se fosse uma ameaça constante à vida.', tempo: '20 s' },
      { tarefa: 2, texto: 'No índice de Lee ele tem 2 fatores. Com 0 ou 1 eu liberaria; com 3 a 6 pediria teste cardíaco; com 2, avalio a capacidade funcional. Ele sobe dois lances de escada sem sintomas, o que equivale a 4 METs ou mais: está liberado sem teste cardíaco.', tempo: '30 s' },
      { tarefa: 3, texto: 'Por ter mais de 65 anos: ECG, hematócrito, ureia, creatinina, glicemia e eletrólitos. E RX de tórax, porque tem 35 maços-ano e mais de 65 anos.', tempo: '20 s' },
      { tarefa: 4, texto: 'Seu Valdir, a avaliação antes da cirurgia não é fazer todos os exames possíveis: é ver o risco de cada pessoa e melhorar o que dá. É como revisar um carro antes da viagem: o mecânico olha o que aquele carro precisa, e não troca todas as peças. Pelo seu coração, o senhor está liberado. O que mais vai ajudar é parar de fumar agora: o recomendado é pelo menos 4 a 8 semanas antes, e o senhor tem tempo. Me conta: o que o senhor achou disso?', tempo: '45 s', analogia: 'Revisão do carro antes da viagem' },
    ],
    extra: 'Quais cirurgias são liberadas sem entrar no fluxo do índice de Lee? (Baixo risco: mama, tireoide, pele, oftalmologia e endoscopias.) Quando se usa o sufixo E na ASA? (Cirurgia de urgência/emergência.)',
  },

  // ----------------------------------------------------- CIR-03 · Antibioticoprofilaxia
  {
    id: 'CIR-03', materia: 'cir',
    titulo: 'Vou precisar tomar antibiótico?',
    local: 'Enfermaria de cirurgia — véspera da cirurgia', papel: 'Residente de cirurgia', interacao: 'paciente',
    cenario: 'Sr. Cláudio, 54 anos, pedreiro, tem há 1 ano um abaulamento na virilha direita que aumenta quando carrega peso e some quando deita. Foi diagnosticada hérnia inguinal, e a cirurgia eletiva está marcada para amanhã às 8h: hernioplastia inguinal à direita com colocação de tela. Hipertenso controlado, sem alergias, nunca operou.\n\nVocê passa na enfermaria para colher o consentimento. Ele está preocupado: um vizinho "pegou infecção depois de uma cirurgia" e tomou antibiótico por 10 dias. Ele pergunta: "Vou precisar tomar antibiótico? Por quantos dias?".',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados do paciente', linhas: [['Peso', '86 kg'], ['Alergias', 'nenhuma conhecida'], ['Cirurgia', 'hernioplastia inguinal direita com tela'], ['Horário previsto', '8h (indução anestésica por volta das 7h40)']] },
    ],
    tarefas: [
      'Classifique a cirurgia quanto ao potencial de contaminação. A antibioticoprofilaxia está indicada? Por quê?',
      'Qual antibiótico, em que dose e em que momento? Por que esse antibiótico?',
      'Quando a dose precisa ser repetida durante a cirurgia, e por quê?',
      'Quando suspender? Explique ao paciente por que ele não vai precisar de antibiótico por dias em casa.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Vou precisar tomar antibiótico? Por quantos dias?"' },
      { gatilho: 'Examinador, após a tarefa 2', fala: '"E se a cirurgia atrasar e durar 5 horas?"' },
      { gatilho: 'Se falar em suspender', fala: '"Se eu tomar uma semana inteira, não fico mais protegido?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Cirurgia limpa: tecido estéril, sem inflamação, sem entrada em trato colonizado', pts: 1 },
        { tarefa: 1, item: 'Limpa em geral dispensa profilaxia; a prótese (tela) é exceção, pela gravidade de uma eventual infecção', pts: 2 },
        { tarefa: 2, item: 'Cefazolina 2 g EV (3 g só acima de 120 kg)', pts: 1 },
        { tarefa: 2, item: 'Cobre a microbiota esperada do sítio: pele, com predomínio de Gram-positivos (Staphylococcus aureus)', pts: 1 },
        { tarefa: 2, item: 'Até 60 minutos antes da incisão, próximo à indução anestésica', pts: 1 },
        { tarefa: 3, item: 'Repicar quando a cirurgia ultrapassa cerca de 2 meias-vidas do antibiótico (cefazolina: 1 g a cada ~4 h) ou se houver sangramento importante', pts: 2 },
        { tarefa: 4, item: 'Suspender ao fim da cirurgia, no máximo em até 24 h: dose única resolve a maioria dos casos', pts: 1 },
        { tarefa: 4, item: 'Prolongar não tem benefício comprovado e expõe aos riscos do uso desnecessário de antibiótico', pts: 1 },
      ],
    },
    errosCriticos: ['Dar a primeira dose depois da incisão', 'Manter a profilaxia por dias após a cirurgia'],
    falaModelo: [
      { tarefa: 1, texto: 'É uma cirurgia limpa: tecido estéril, sem entrar em trato colonizado. Cirurgia limpa normalmente dispensa profilaxia, mas aqui vai uma tela, que é prótese, e uma infecção nela seria grave. Por isso a profilaxia está indicada.', tempo: '25 s' },
      { tarefa: 2, texto: 'Uso cefazolina 2 g na veia, porque ela cobre a microbiota da pele, principalmente o Staphylococcus aureus; 3 g só se ele pesasse mais de 120 kg. Faço até 60 minutos antes da incisão, perto da indução anestésica, ou seja, entre 7 e 8 horas.', tempo: '30 s' },
      { tarefa: 3, texto: 'Repito a dose quando a cirurgia passa de cerca de duas meias-vidas do antibiótico, porque o nível dele cai: para a cefazolina, 1 g a cada 4 horas. Se a cirurgia durar 5 horas, repico uma vez. Também repico se houver sangramento importante.', tempo: '25 s' },
      { tarefa: 4, texto: 'Suspendo ao fim da cirurgia, no máximo em 24 horas. Seu Cláudio, o antibiótico funciona como um guarda na porta enquanto ela está aberta: ele precisa estar lá na hora do corte. Depois que a pele foi fechada, tomar por uma semana não protege mais, só traz os riscos de um remédio que o senhor não precisa. Ficou claro? Me conta com suas palavras quando o senhor vai receber o antibiótico?', tempo: '40 s', analogia: 'Antibiótico como guarda na porta aberta' },
    ],
    extra: 'E se ele tivesse alergia grave a betalactâmico? (Clindamicina ou vancomicina, para cobertura Gram-positiva.) E numa cirurgia colorretal? (Cobrir Gram-negativos e anaeróbios: ceftriaxona + metronidazol, ou cefoxitina isolada.)',
  },

  // ----------------------------------------------------- CIR-04 · ISC superficial e cicatrização
  {
    id: 'CIR-04', materia: 'cir',
    titulo: 'A cicatriz da apendicectomia está vermelha e soltando pus',
    local: 'Ambulatório de egressos da cirurgia', papel: 'Médico(a) cirurgião(ã)', interacao: 'paciente',
    cenario: 'Sr. Edson, 49 anos, 108 kg (IMC 37), diabético com glicemias de 250 a 300 mg/dL em casa, tabagista. Fez apendicectomia por apendicite não complicada há 6 dias (incisão de McBurney). Há 2 dias a cicatriz ficou vermelha, quente e muito dolorida, e hoje começou a sair pus pelos pontos.\n\nT 37,9 °C · FC 92 bpm · PA 134 × 84 mmHg. Abdome flácido, sem dor fora da ferida. Hiperemia de 2 cm ao redor da incisão, com flutuação no subcutâneo e saída de secreção purulenta. A aponeurose está íntegra à palpação.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Leucócitos', '11.800/mm³'], ['Glicemia capilar', '286 mg/dL'], ['Albumina', '3,6 g/dL']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Classifique e justifique.',
      'Qual é a conduta? Antibiótico é obrigatório?',
      'Como essa ferida vai cicatrizar agora e quais fatores dele atrasam a cicatrização?',
      'Explique ao paciente o que aconteceu e o que ele deve fazer em casa.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Foi erro da cirurgia, né? Alguém não lavou a mão direito."' },
      { gatilho: 'Se falar em abrir a ferida', fala: '"Abrir de novo?! Não dá pra só tomar um antibiótico?"' },
      { gatilho: 'No final', fala: '"Quanto tempo vai demorar pra fechar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Infecção de sítio cirúrgico incisional superficial, dentro de 30 dias', pts: 2 },
        { tarefa: 1, item: 'Justificou: pus na incisão, sinais flogísticos, aponeurose íntegra (afasta profunda) e abdome sem sinais de cavitária', pts: 1 },
        { tarefa: 2, item: 'Drenar: retirar os pontos, abrir a ferida, lavar e fazer cuidados locais; coletar cultura', pts: 2 },
        { tarefa: 2, item: 'Antibiótico sistêmico não é automático: só se houver repercussão sistêmica ou imunossupressão', pts: 1 },
        { tarefa: 3, item: 'Ferida aberta fecha por segunda intenção (granulação, contração e epitelização a partir das bordas)', pts: 1 },
        { tarefa: 3, item: 'Fatores do paciente: diabetes descompensado, obesidade e tabagismo; controlar a glicemia (meta perioperatória 140–180 mg/dL)', pts: 1 },
        { tarefa: 4, item: 'Orientou cuidados com o curativo, higiene das mãos e sinais de alerta (febre, secreção, dor crescente)', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar só com antibiótico, sem drenar', 'Ressuturar a ferida infectada'],
    falaModelo: [
      { tarefa: 1, texto: 'É infecção de sítio cirúrgico incisional superficial: dentro de 30 dias, com pus saindo da incisão e sinais inflamatórios. A aponeurose está íntegra e o abdome está bom, o que afasta a profunda e a cavitária.', tempo: '25 s' },
      { tarefa: 2, texto: 'O tratamento é drenar: retiro os pontos, abro a ferida, lavo e faço curativo, e mando a secreção para cultura. Antibiótico sistêmico não é obrigatório: uso se houver repercussão sistêmica ou imunossupressão.', tempo: '30 s' },
      { tarefa: 3, texto: 'A ferida aberta vai fechar por segunda intenção, de dentro para fora, com tecido de granulação, contração e a pele crescendo das bordas. O diabetes descompensado, a obesidade e o cigarro atrasam esse processo; por isso a glicemia precisa ser controlada.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Edson, isso não quer dizer que alguém errou: é uma complicação que acontece, e o açúcar alto, o peso e o cigarro aumentam esse risco. Pense numa espinha inflamada: enquanto o pus está preso, o remédio não alcança; quando drena, melhora. A ferida vai fechar de dentro para fora, como um buraco que vai sendo preenchido aos poucos, mais devagar do que se estivesse costurada. Em casa, cuide do curativo com as mãos limpas; se tiver febre, secreção ou dor aumentando, volte na hora. Me conta como você vai fazer o curativo?', tempo: '55 s', analogia: 'Espinha inflamada que só melhora quando drena' },
    ],
    extra: 'E se houvesse deiscência da aponeurose com pus profundo e febre? (ISC incisional profunda: fáscia e músculo.) Se fosse com tela, até quando contaria como ISC? (Até 1 ano.)',
  },

  // ----------------------------------------------------- CIR-05 · REMIT e oligúria
  {
    id: 'CIR-05', materia: 'cir',
    titulo: 'Pouca urina no primeiro pós-operatório',
    local: 'Enfermaria de cirurgia geral', papel: 'Residente de cirurgia', interacao: 'interno',
    cenario: 'Sra. Neide, 63 anos, 70 kg, está no 1º dia de pós-operatório de colectomia aberta (5 horas de cirurgia). Recebeu 3.500 mL de cristaloide no intraoperatório. Está com sonda vesical e morfina em bomba. O interno quer fazer "2 litros de soro em bolus agora" porque a diurese caiu.\n\nPA 132 × 80 mmHg · FC 86 bpm · extremidades quentes, enchimento capilar < 2 s · mucosas úmidas · leve edema na ferida.',
    mesa: [
      { tipo: 'tabela', titulo: 'Balanço e exames', linhas: [['Diurese nas últimas 4 h', '80 mL (20 mL/h)'], ['Sódio', '134 mEq/L'], ['Potássio', '4,6 mEq/L'], ['Glicemia', '208 mg/dL (não diabética)'], ['Creatinina', '0,9 mg/dL (basal 0,8)']] },
    ],
    tarefas: [
      'Calcule a diurese em mL/kg/h. Por que ela está oligúrica sem estar hipovolêmica? Explique pela REMIT.',
      'O que você checa antes de aumentar volume, e qual é o risco do bolus de 2 litros?',
      'Por que a glicemia está alta, e o que atenua a REMIT nesse e em outros pacientes?',
    ],
    ator: [
      { gatilho: 'Interno, ao começar', fala: '"Oligúria é sempre falta de líquido, não é? Vamos encher."' },
      { gatilho: 'Se perguntar sobre a sonda', fala: '"Não olhei se está dobrada… E a bexiga eu não palpei."' },
      { gatilho: 'Se falar da glicemia', fala: '"Mas ela nem é diabética, por que 208?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: '20 mL/h ÷ 70 kg ≈ 0,29 mL/kg/h', pts: 1 },
        { tarefa: 1, item: 'REMIT: ADH ↑ retém água; aldosterona ↑ retém sódio e água (e libera K⁺ e H⁺) → oligúria sem hipovolemia real', pts: 2 },
        { tarefa: 1, item: 'Exame sem sinais de hipovolemia (PA, FC, perfusão e mucosas normais)', pts: 1 },
        { tarefa: 2, item: 'Checar sonda obstruída/dobrada, retenção por opioide, balanço intraoperatório', pts: 1 },
        { tarefa: 2, item: 'Hiperidratação: edema de ferida, íleo e deiscência; preferir fluido restritivo/guiado por meta', pts: 1 },
        { tarefa: 3, item: 'Hiperglicemia de estresse: catecolaminas, cortisol e glucagon ↑, insulina ↓ (fase ebb)', pts: 1 },
        { tarefa: 3, item: 'Atenuar: analgesia adequada (epidural bloqueia a via da dor), cirurgia menos invasiva (laparoscopia reduz a resposta imune); SG 5% (~2.000 mL) no jejum reduz proteólise', pts: 1 },
      ],
    },
    errosCriticos: ['Fazer bolus de volume sem checar sonda, opioide e balanço intraoperatório', 'Tratar a oligúria da REMIT como hipovolemia real'],
    falaModelo: [
      { tarefa: 1, texto: 'A diurese é 20 mL por hora em 70 kg, cerca de 0,29 mL/kg/h. Mas ela não está hipovolêmica: pressão, frequência, perfusão e mucosas estão normais. É a resposta endócrina ao trauma: o ADH sobe e segura água; a aldosterona segura sódio e água e solta potássio. O rim economiza de propósito.', tempo: '40 s' },
      { tarefa: 2, texto: 'Antes de dar volume, vejo se a sonda está dobrada ou obstruída, se tem globo vesical por causa da morfina, e confiro o balanço: ela já recebeu 3,5 litros. Um bolus de 2 litros num rim que está segurando água vira edema: na ferida, no intestino, com risco de íleo e deiscência.', tempo: '35 s' },
      { tarefa: 3, texto: 'A glicemia alta é hiperglicemia de estresse: catecolaminas, cortisol e glucagon sobem e a insulina cai na fase ebb. Pense na REMIT como um alarme de incêndio: ele é necessário, mas se fica tocando alto demais atrapalha. Para baixar o volume desse alarme: analgesia boa, de preferência epidural, que bloqueia a via da dor, e cirurgias menos invasivas, como a laparoscopia. Ficou claro? Vamos juntos examinar a sonda?', tempo: '40 s', analogia: 'REMIT como alarme de incêndio' },
    ],
    extra: 'Quais hormônios caem no trauma? (T3, T4 e testosterona.) Qual a ordem de mobilização das reservas? (Glicogenólise em 12–24 h → lipólise → proteólise.)',
  },

  // ----------------------------------------------------- CIR-06 · Febre pós-operatória
  {
    id: 'CIR-06', materia: 'cir',
    titulo: 'Febre no 5º dia depois da anastomose',
    local: 'Enfermaria de cirurgia geral', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sra. Aparecida, 71 anos, está no 5º dia de pós-operatório de hemicolectomia direita com anastomose por adenocarcinoma. Vinha bem, aceitando dieta. Desde ontem tem febre, a barriga está "inchada e doendo", e ela não quis comer. A filha está no quarto.\n\nT 38,7 °C · FC 108 bpm · PA 118 × 70 mmHg · FR 20 irpm · SatO₂ 96%.\nFerida operatória limpa e seca. Abdome distendido, doloroso difusamente, com defesa no flanco direito. Pulmões limpos. Panturrilhas livres. Urina clara.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Leucócitos', '18.400/mm³ (12% bastões)'], ['PCR', '24 mg/dL (subindo)'], ['Lactato', '2,4 mmol/L'], ['Urina tipo I', 'normal']] },
    ],
    tarefas: [
      'Liste as causas de febre pós-operatória conforme o tempo de pós-operatório e diga qual é a mais provável aqui.',
      'Qual é a investigação e a conduta?',
      'Explique à paciente e à filha o que está acontecendo.',
    ],
    ator: [
      { gatilho: 'Filha, ao se apresentar', fala: '"A ferida está ótima, então não pode ser infecção, né?"' },
      { gatilho: 'Se falar em tomografia', fala: '"Mas ela tomou antibiótico na cirurgia. Como pode estar com infecção?"' },
      { gatilho: 'Se perguntar sobre profilaxia de trombose', fala: '"Ela está tomando a injeção na barriga todo dia."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: '24–72 h: atelectasia e resposta ao trauma (REMIT)', pts: 1 },
        { tarefa: 1, item: 'Após 72 h: ferida, ITU, pneumonia, TVP/TEP; após 5–7 dias: abscesso, deiscência de anastomose, fístula', pts: 1 },
        { tarefa: 1, item: 'Mais provável: ISC de órgão/cavidade (abscesso ou deiscência de anastomose); ferida limpa não exclui foco profundo', pts: 2 },
        { tarefa: 2, item: 'Tomografia de abdome e pelve: exame mais adequado para identificar coleção ou deiscência', pts: 1 },
        { tarefa: 2, item: 'Infecção estabelecida: o antimicrobiano é tratamento, não profilaxia', pts: 1 },
        { tarefa: 2, item: 'Cobrir a microbiota do cólon: Gram-negativos e anaeróbios (E. coli, Bacteroides fragilis)', pts: 1 },
        { tarefa: 3, item: 'Explicou com empatia que a infecção pode estar por dentro e o plano de investigação', pts: 1 },
      ],
    },
    errosCriticos: ['Descartar infecção porque a ferida está limpa', 'Só prescrever antitérmico e observar'],
    falaModelo: [
      { tarefa: 1, texto: 'Pelo tempo: de 24 a 72 horas, atelectasia e a própria resposta ao trauma; depois de 72 horas, ferida, infecção urinária, pneumonia e trombose; e de 5 a 7 dias, abscesso, deiscência de anastomose e fístula. Ela está no 5º dia, com abdome distendido, defesa e ferida limpa: o mais provável é infecção de órgão ou cavidade, coleção ou deiscência da anastomose.', tempo: '40 s' },
      { tarefa: 2, texto: 'Peço tomografia de abdome e pelve, o exame mais adequado para achar coleção ou deiscência. Com a infecção estabelecida, o antimicrobiano deixa de ser profilaxia e passa a ser tratamento, cobrindo a microbiota do cólon: Gram-negativos e anaeróbios, como E. coli e Bacteroides fragilis.', tempo: '35 s' },
      { tarefa: 3, texto: 'Dona Aparecida, a febre e a barriga doendo nos fazem pensar que a infecção está por dentro, na emenda do intestino que foi feita na cirurgia. A ferida de fora pode estar perfeita, como a fachada bonita de uma casa com um vazamento no encanamento lá dentro. O antibiótico da cirurgia serviu para prevenir durante a operação; agora o tratamento é outro. A tomografia mostra onde está o problema, e o tratamento já começa hoje. O que mais preocupa vocês?', tempo: '45 s', analogia: 'Fachada bonita com vazamento no encanamento' },
    ],
    extra: 'Por quanto tempo essa paciente oncológica deve manter a profilaxia de TEV? (Estendida por 28 dias: cirurgia oncológica abdominal ou pélvica.)',
  },

  // ----------------------------------------------------- CIR-07 · Cirurgia segura
  {
    id: 'CIR-07', materia: 'cir',
    titulo: 'Checklist de cirurgia segura e a compressa que sumiu',
    local: 'Sala cirúrgica', papel: 'Cirurgião(ã) responsável', interacao: 'examinador',
    cenario: 'Você vai operar o Sr. Marcos, 58 anos, para uma artroplastia de joelho esquerdo. O examinador faz o papel da equipe (anestesista e enfermagem) e do paciente.\n\nAo final da cirurgia, antes de fechar a pele, a circulante avisa: "Contagem de compressas: entraram 20, contei 19".',
    mesa: [
      { tipo: 'texto', texto: 'Lista de verificação de cirurgia segura (OMS): 3 momentos — antes da indução anestésica, antes da incisão, antes de o paciente sair da sala.' },
    ],
    tarefas: [
      'Diga o nome de cada etapa do checklist, quando ela acontece e o que se confere em cada uma.',
      'Qual é a sua conduta diante da contagem divergente?',
      'O paciente, acordado no preparo, pergunta por que todo mundo pergunta o nome e o lado. Responda a ele.',
    ],
    ator: [
      { gatilho: 'Paciente, no preparo', fala: '"Já me perguntaram meu nome umas cinco vezes. Vocês não confiam uns nos outros?"' },
      { gatilho: 'Se pedir para marcar o lado', fala: '"Pode marcar, é o joelho esquerdo mesmo."' },
      { gatilho: 'Circulante, após a divergência', fala: '"Doutor(a), já procurei no chão e no hamper, não achei."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Sign in (antes da indução): identidade, sítio/lateralidade marcada, procedimento, consentimento, alergias', pts: 1 },
        { tarefa: 1, item: 'Time out (antes da incisão): confirmação verbal da equipe, eventos críticos (cirurgião: passos críticos, duração, perda sanguínea; anestesista: preocupações; enfermagem: esterilização/equipamentos) e horário do antibiótico', pts: 2 },
        { tarefa: 1, item: 'Sign out (antes de sair da sala): contagem de compressas e instrumentais, recomendações pós-operatórias', pts: 1 },
        { tarefa: 2, item: 'Não fechar: revisão sistemática do campo e da sala', pts: 1 },
        { tarefa: 2, item: 'Se não localizar: imagem intraoperatória antes de fechar', pts: 1 },
        { tarefa: 3, item: 'Explicou que é barreira de segurança, não desconfiança; marcação com o paciente acordado e participando', pts: 1 },
        { tarefa: 3, item: 'Citou o impacto do checklist (complicações de 11% para 7%; mortalidade de 1,5% para 0,8%)', pts: 1 },
      ],
    },
    errosCriticos: ['Fechar a pele com a contagem divergente', 'Marcar o sítio com o paciente já anestesiado'],
    falaModelo: [
      { tarefa: 1, texto: 'São três etapas. O sign in, antes da indução anestésica: confirmo identidade, procedimento, lado marcado, consentimento e alergias. O time out, antes da incisão: a equipe para e confirma em voz alta paciente e procedimento; eu falo os passos críticos, a duração e a perda de sangue esperada; o anestesista, as preocupações dele; a enfermagem, a esterilização e os equipamentos; e conferimos o horário do antibiótico. E o sign out, antes de sair da sala: contagem de compressas e instrumentais e recomendações pós-operatórias.', tempo: '55 s' },
      { tarefa: 2, texto: 'Com a contagem divergente eu não fecho. Faço revisão sistemática da cavidade, do campo e da sala. Se não achar, peço imagem intraoperatória antes de fechar.', tempo: '25 s' },
      { tarefa: 3, texto: 'Seu Marcos, a gente confia muito uns nos outros, e é justamente por isso que confere. É como o piloto e o copiloto, que leem a lista em voz alta antes de cada decolagem, mesmo voando há 20 anos. O senhor faz parte da equipe: por isso marcamos o joelho com o senhor acordado, confirmando com a gente. Com essa lista, as complicações caíram de 11 para 7 em cada 100 cirurgias, e as mortes quase pela metade. Faz sentido para o senhor?', tempo: '45 s', analogia: 'Piloto e copiloto lendo a lista antes da decolagem' },
    ],
    extra: 'Qual é a diferença entre imperícia, imprudência e negligência? (Falta de conhecimento técnico; agir sem cautela; omissão.) E o modelo do queijo suíço? (A maioria dos eventos adversos é falha de sistema, com barreiras falhando alinhadas.)',
  },

  // ----------------------------------------------------- CIR-08 · Melanoma
  {
    id: 'CIR-08', materia: 'cir',
    titulo: 'O resultado da pinta das costas',
    local: 'Ambulatório de cirurgia', papel: 'Médico(a) cirurgião(ã)', interacao: 'paciente',
    cenario: 'Sra. Cristina, 45 anos, pele clara, volta para buscar o resultado da biópsia excisional de uma lesão do dorso. Na primeira consulta, há 3 semanas, a lesão tinha 9 mm, era assimétrica, com bordas irregulares e tons de marrom, preto e avermelhado; segundo a paciente, tinha crescido e começado a coçar nos últimos meses. Foi retirada inteira, com margem de 2 mm.',
    mesa: [
      { tipo: 'tabela', titulo: 'Laudo anatomopatológico', linhas: [['Diagnóstico', 'Melanoma extensivo superficial'], ['Espessura de Breslow', '1,4 mm'], ['Ulceração', 'ausente'], ['Índice mitótico', '1/mm²'], ['Invasão linfovascular', 'ausente'], ['Margens', 'livres (2 mm)']] },
    ],
    tarefas: [
      'Quais critérios do ABCDE a lesão tinha, e por que a biópsia excisional foi a escolha certa?',
      'Interprete o laudo e defina a conduta cirúrgica.',
      'Comunique o diagnóstico à paciente e oriente a prevenção.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"E aí, doutor(a)? Não era nada, né? Já tiraram tudo."' },
      { gatilho: 'Ao ouvir "melanoma"', fala: '(Silêncio, olhos marejados) "Câncer? Eu vou morrer?"' },
      { gatilho: 'Se falar em linfonodo', fala: '"Vão tirar meus gânglios? Por quê, se já tiraram a pinta?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'ABCDE completo: Assimetria, Bordas irregulares, Cor variada, Diâmetro > 6 mm e Evolução (cresceu e coçou)', pts: 1 },
        { tarefa: 1, item: 'Biópsia excisional (lesão inteira, margem de 1–3 mm): permite diagnóstico e medida do Breslow', pts: 1 },
        { tarefa: 2, item: 'Breslow 1,4 mm → ampliação de margem de 1 a 2 cm', pts: 2 },
        { tarefa: 2, item: 'Pesquisa de linfonodo sentinela indicada (Breslow > 1 mm)', pts: 2 },
        { tarefa: 3, item: 'Comunicou o diagnóstico com empatia e linguagem acessível, explicando o próximo passo', pts: 1 },
        { tarefa: 3, item: 'Prevenção: proteção solar (protetor, roupas, evitar sol excessivo) e autoexame pelo ABCDE', pts: 1 },
      ],
    },
    errosCriticos: ['Dizer que "já está resolvido" porque as margens estão livres', 'Não indicar a pesquisa do linfonodo sentinela'],
    falaModelo: [
      { tarefa: 1, texto: 'A lesão tinha o ABCDE completo: assimetria, bordas irregulares, várias cores, 9 mm e evolução, porque cresceu e coçou. A biópsia excisional, com margem de 1 a 3 mm, é a preferida porque retira tudo e permite medir a espessura de Breslow, que define o tratamento.', tempo: '30 s' },
      { tarefa: 2, texto: 'O laudo é de melanoma extensivo superficial, o subtipo mais comum, com Breslow de 1,4 mm, sem ulceração. Entre 1,01 e 2 mm, amplio a margem para 1 a 2 cm. E, como passou de 1 mm, está indicada a pesquisa do linfonodo sentinela.', tempo: '30 s' },
      { tarefa: 3, texto: 'Dona Cristina, antes de eu falar, a senhora imaginava o que poderia ser? … O resultado mostrou um tipo de câncer de pele chamado melanoma. (pausa) Eu sei que é muito para ouvir. A boa notícia é que foi descoberto cedo e é fino. Pense numa erva daninha: arrancamos a planta, agora precisamos tirar um pouco mais de terra em volta, e olhar o primeiro "ralo" para onde a raiz poderia escorrer, que é o linfonodo sentinela. Daqui para frente, protetor solar, roupa e chapéu, e olhar as pintas pelo ABCDE. O que a senhora entendeu e o que quer perguntar?', tempo: '70 s', analogia: 'Erva daninha: tirar a terra em volta e olhar o primeiro ralo' },
    ],
    extra: 'Além do Breslow > 1 mm, o que indica o linfonodo sentinela? (Ulceração, alto índice mitótico ou invasão linfovascular.) Qual subtipo é mais comum em pele negra, em palmas, plantas e unhas? (Acral lentiginoso, com sinal de Hutchinson.)',
  },

  // ----------------------------------------------------- CIR-09 · CBC, CEC e lesões pré-malignas
  {
    id: 'CIR-09', materia: 'cir',
    titulo: 'Três lesões no rosto do agricultor',
    local: 'Ambulatório de cirurgia', papel: 'Médico(a) cirurgião(ã)', interacao: 'paciente',
    cenario: 'Sr. Joaquim, 72 anos, agricultor desde criança, pele clara, ex-tabagista. Veio "porque a esposa mandou". Ao exame:\n\n• Lesão 1, asa do nariz: pápula de 8 mm, brilhante, "perolada", com vasinhos na superfície e uma crosta central. Está ali há 2 anos e cresceu devagar.\n• Lesão 2, lábio inferior: ferida endurecida de 1,2 cm que sangra fácil e "não cicatriza" há 4 meses.\n• Lesão 3, testa e couro cabeludo: várias placas avermelhadas, ásperas, com escamas aderentes, que ele sente mais ao passar a mão do que ao olhar.',
    mesa: [],
    tarefas: [
      'Dê a hipótese diagnóstica de cada lesão.',
      'Qual é a conduta para cada uma, incluindo margens cirúrgicas?',
      'Qual delas é mais perigosa? Explique ao paciente sem assustá-lo e oriente a prevenção.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Isso é coisa de sol, doutor(a). Todo mundo da roça tem."' },
      { gatilho: 'Se falar em cirurgia no nariz', fala: '"Vai ficar um buraco no meu nariz?"' },
      { gatilho: 'No final', fala: '"E esse protetor aí, eu passo uma vez de manhã e pronto?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Lesão 1: carcinoma basocelular (perolada, telangiectasias, crescimento lento, 2/3 superiores da face)', pts: 1 },
        { tarefa: 1, item: 'Lesão 2: carcinoma espinocelular (lábio inferior, ulcera, sangra, não cicatriza; sol e tabaco)', pts: 1 },
        { tarefa: 1, item: 'Lesão 3: ceratoses actínicas (pré-malignas, podem progredir para CEC)', pts: 1 },
        { tarefa: 2, item: 'CBC de baixo risco: excisão com margem de 3–4 mm', pts: 1 },
        { tarefa: 2, item: 'CEC: margem maior, de 4–6 mm ou mais, pelo maior potencial invasivo e de metástase', pts: 1 },
        { tarefa: 2, item: 'Ceratose actínica: lesão pré-maligna que pode progredir para CEC invasivo; acompanhar', pts: 1 },
        { tarefa: 3, item: 'CEC é o mais perigoso: maior chance de metástase (0,5–6%) que o CBC, que raramente dá metástase', pts: 1 },
        { tarefa: 3, item: 'Prevenção: proteção à exposição solar (protetor, roupas adequadas, evitar sol excessivo)', pts: 1 },
      ],
    },
    errosCriticos: ['Considerar a ferida do lábio um "machucado" comum', 'Dizer que todas têm o mesmo risco'],
    falaModelo: [
      { tarefa: 1, texto: 'A lesão do nariz, perolada, com vasinhos e crescimento lento, é carcinoma basocelular. A do lábio inferior, que ulcera, sangra e não cicatriza, é carcinoma espinocelular, ligado ao sol e ao cigarro. As placas ásperas da testa são ceratoses actínicas, lesões pré-malignas.', tempo: '30 s' },
      { tarefa: 2, texto: 'O basocelular de baixo risco sai com margem de 3 a 4 mm. O espinocelular tem maior potencial invasivo e de metástase, por isso precisa de margem maior, de 4 a 6 mm ou mais. As ceratoses actínicas são pré-malignas e podem progredir para espinocelular, então acompanho de perto.', tempo: '35 s' },
      { tarefa: 3, texto: 'Seu Joaquim, as três são marcas do sol de uma vida inteira. A da boca é a que mais me preocupa, porque tem mais chance de se espalhar; a do nariz cresce devagar e quase nunca se espalha; e as da testa são um aviso, como a ferrugem que ainda não furou a lataria. Vamos tirar as duas e cuidar das outras. Para frente: protetor solar, roupas que cubram a pele e evitar o sol mais forte. O que o senhor vai mudar na rotina da roça?', tempo: '50 s', analogia: 'Ferrugem que ainda não furou a lataria' },
    ],
    extra: 'O que fazer num corno cutâneo? (A ponta não é diagnóstica: biopsiar a base.) E no CBC avançado em que a cirurgia não basta? (Vismodegibe.)',
  },

  // ----------------------------------------------------- CIR-10 · Queimadura pediátrica
  {
    id: 'CIR-10', materia: 'cir',
    titulo: 'A panela que caiu na perna',
    local: 'Pronto-socorro infantil', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Davi, 3 anos, 14 kg, puxou a toalha da mesa e uma panela de água fervente caiu sobre a perna direita há 1 hora. A mãe colocou gelo "para aliviar". Ele chora muito, mas está consciente, respirando bem, sem queimaduras na face.\n\nExame: bolhas rotas e íntegras em toda a perna direita, da coxa ao pé, frente e verso, com leito rosado, úmido, muito doloroso e que branqueia à digitopressão. FC 140 bpm · T 36,0 °C.',
    mesa: [
      { tipo: 'tabela', titulo: 'Regra dos nove adaptada (criança pequena)', linhas: [['Cabeça', '≈ 18%'], ['Cada membro inferior', '≈ 14%']] },
    ],
    tarefas: [
      'Classifique a profundidade da queimadura e calcule a SCQ.',
      'Ele é um grande queimado? Precisa de centro especializado? Justifique.',
      'Calcule a reposição volêmica pela fórmula de Parkland, considerando que já passou 1 hora.',
      'O que a mãe fez de errado e qual é o cuidado local? Converse com ela, que está se culpando.',
    ],
    ator: [
      { gatilho: 'Mãe, ao se apresentar', fala: '"A culpa é minha, eu virei as costas um segundo…"' },
      { gatilho: 'Se falar em transferência', fala: '"Transferir? Então é muito grave?"' },
      { gatilho: 'Se falar em antibiótico', fala: '"Não precisa de antibiótico pra não infeccionar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: '2º grau superficial: bolhas, leito rosado e úmido, muito doloroso, branqueia à digitopressão', pts: 1 },
        { tarefa: 1, item: 'SCQ ≈ 14% (membro inferior inteiro na criança pequena)', pts: 1 },
        { tarefa: 2, item: 'Grande queimado: 2º grau em mais de 10% da SCQ na criança', pts: 1 },
        { tarefa: 2, item: 'Centro especializado: pé é região nobre (transfere independentemente da área) e criança ≤ 14 anos ou < 30 kg se beneficia de avaliação especializada', pts: 1 },
        { tarefa: 3, item: 'Parkland: 4 × 14 × 14 = 784 mL de Ringer lactato em 24 h', pts: 1 },
        { tarefa: 3, item: 'Metade (392 mL) nas primeiras 8 h contadas da queimadura → em 7 h (≈ 56 mL/h); o restante nas 16 h seguintes (≈ 24,5 mL/h)', pts: 2 },
        { tarefa: 4, item: 'Gelo aprofunda a queimadura e favorece hipotermia: usar água corrente em temperatura ambiente', pts: 1 },
        { tarefa: 4, item: 'Antibiótico tópico; sem antibiótico sistêmico profilático', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever antibiótico sistêmico profilático', 'Contar as 8 horas a partir da chegada, e não do momento da queimadura'],
    falaModelo: [
      { tarefa: 1, texto: 'É queimadura de 2º grau superficial: bolhas, leito rosado e úmido, muito dolorosa e que branqueia. Pega a perna inteira; na criança pequena, cada membro inferior vale cerca de 14%, menos que no adulto, porque a cabeça é proporcionalmente maior.', tempo: '25 s' },
      { tarefa: 2, texto: 'Na criança, mais de 10% de 2º grau já é grande queimado. E ele tem indicação de centro especializado: o pé é região nobre, e criança dessa idade se beneficia de avaliação especializada.', tempo: '20 s' },
      { tarefa: 3, texto: 'Parkland: 4 vezes 14 vezes 14 dá 784 mL de Ringer lactato em 24 horas. Metade, 392 mL, nas primeiras 8 horas contadas da queimadura; como já passou 1 hora, em 7 horas, cerca de 56 mL por hora. O restante, 392 mL, nas 16 horas seguintes, cerca de 24 mL por hora.', tempo: '35 s' },
      { tarefa: 4, texto: 'O gelo aprofunda a queimadura e esfria a criança: o certo é água corrente em temperatura ambiente. No curativo, antibiótico tópico; antibiótico oral para prevenir não se faz. Mãe, acidente com criança acontece num segundo, em qualquer família, e você trouxe ele rápido. Pense na pele como uma capa de chuva: a queimadura abriu furos, e o corpo perde água por eles; por isso o soro na veia. O que mais te preocupa agora?', tempo: '50 s', analogia: 'Pele como capa de chuva furada' },
    ],
    extra: 'Qual é a reposição pré-hospitalar sem peso e SCQ calculados? (Taxa fixa: ≤ 5 anos 125 mL/h; 6–13 anos 250 mL/h; ≥ 14 anos 500 mL/h.) E na queimadura química? (Retirar a roupa, irrigar abundantemente com água, nunca neutralizar, e sempre transferir.)',
  },

  // ----------------------------------------------------- CIR-11 · Medicações no perioperatório
  {
    id: 'CIR-11', materia: 'cir',
    titulo: 'A sacola de remédios antes da cirurgia',
    local: 'Ambulatório de avaliação pré-operatória', papel: 'Médico(a) clínico(a) do pré-operatório', interacao: 'paciente',
    cenario: 'Dona Marta, 64 anos, vai fazer uma artroplastia total de quadril eletiva daqui a 10 dias. É hipertensa, diabética e tem um stent coronariano há 3 anos. Chega com uma sacola de remédios e diz: "Tenho medo de ficar sem os remédios do coração".',
    mesa: [
      { tipo: 'tabela', titulo: 'Medicações em uso', linhas: [['Atenolol 50 mg', '1x/dia'], ['Anlodipino 10 mg', '1x/dia'], ['Losartana 50 mg', '12/12 h'], ['Sinvastatina 40 mg', 'à noite'], ['Dapagliflozina 10 mg', '1x/dia'], ['Insulina NPH 24 UI', 'pela manhã'], ['Semaglutida', '1x/semana'], ['Clopidogrel 75 mg', '1x/dia'], ['Ginkgo biloba', 'por conta própria']] },
    ],
    tarefas: [
      'Quais medicamentos ela mantém, inclusive no dia da cirurgia?',
      'Quais suspende, com quanto tempo de antecedência e por quê?',
      'Como ficam a insulina e a semaglutida? Qual é a meta glicêmica perioperatória?',
      'Oriente a paciente, que tem medo de ficar sem os remédios do coração.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Tenho medo de ficar sem os remédios do coração, doutor(a)."' },
      { gatilho: 'Se falar na semaglutida', fala: '"Mas é só uma injeção por semana, que mal faz?"' },
      { gatilho: 'Se falar no ginkgo', fala: '"Ginkgo é natural, tem problema?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Manter atenolol (betabloqueador), anlodipino (bloqueador de canal de cálcio) e sinvastatina (estatina), inclusive no dia', pts: 2 },
        { tarefa: 2, item: 'Losartana (BRA): suspensão frequente no dia da cirurgia', pts: 1 },
        { tarefa: 2, item: 'Dapagliflozina (SGLT2): suspender 3 a 4 dias antes, pelo risco de cetoacidose euglicêmica', pts: 1 },
        { tarefa: 2, item: 'Clopidogrel: suspender 5 dias antes', pts: 1 },
        { tarefa: 2, item: 'Ginkgo biloba: suspender 36 h antes (interfere na agregação plaquetária e aumenta o sangramento)', pts: 1 },
        { tarefa: 3, item: 'Insulina basal: metade da dose na manhã da cirurgia (12 UI); meta glicêmica de 140 a 180 mg/dL (fora da faixa, mais risco de ISC)', pts: 1 },
        { tarefa: 3, item: 'GLP-1: esvaziamento gástrico retardado → dieta líquida 24 h antes, jejum habitual e considerar POCUS gástrico (risco de broncoaspiração)', pts: 1 },
        { tarefa: 4, item: 'Tranquilizou: os remédios do coração continuam; orientações por escrito, com as datas de suspensão', pts: 1 },
      ],
    },
    errosCriticos: ['Suspender o betabloqueador', 'Manter a dapagliflozina até a véspera'],
    falaModelo: [
      { tarefa: 1, texto: 'Ela mantém o atenolol, o anlodipino e a sinvastatina, inclusive no dia da cirurgia: betabloqueador, bloqueador de canal de cálcio e estatina são mantidos no perioperatório.', tempo: '20 s' },
      { tarefa: 2, texto: 'A losartana costuma ser suspensa no dia da cirurgia. A dapagliflozina, 3 a 4 dias antes, pelo risco de cetoacidose euglicêmica. O clopidogrel, 5 dias antes. E o ginkgo, 36 horas antes, porque interfere na agregação das plaquetas e aumenta o sangramento.', tempo: '35 s' },
      { tarefa: 3, texto: 'Da insulina basal, ela faz metade da dose na manhã da cirurgia, 12 unidades, com meta de glicemia entre 140 e 180; fora dessa faixa, aumenta o risco de infecção. A semaglutida retarda o esvaziamento do estômago: faço dieta líquida nas 24 horas antes, mantenho o jejum habitual e considero ultrassom gástrico antes da indução, pelo risco de broncoaspiração.', tempo: '40 s' },
      { tarefa: 4, texto: 'Dona Marta, os remédios que protegem o seu coração continuam: atenolol, anlodipino e sinvastatina, inclusive no dia. Os que eu vou parar são os que podem atrapalhar a cirurgia, cada um no seu tempo, e eu vou escrever tudo num papel com as datas. É como preparar a mala de uma viagem: algumas coisas vão com a senhora o tempo todo, outras ficam em casa só por uns dias. Me conta como a senhora vai organizar?', tempo: '40 s', analogia: 'Mala de viagem: o que vai junto e o que fica' },
    ],
    extra: 'E se ela usasse varfarina? (Suspender 5 dias antes, com avaliação do RNI.) E anticoncepcional oral? (Suspender 4 semanas antes.) Erva-de-são-joão e alho/ginseng? (5 e 7 dias.)',
  },

  // ----------------------------------------------------- CIR-12 · Jejum e ERAS/ACERTO
  {
    id: 'CIR-12', materia: 'cir',
    titulo: 'Jejum desde a meia-noite e sonda no nariz?',
    local: 'Enfermaria de cirurgia — véspera da cirurgia', papel: 'Residente de cirurgia', interacao: 'paciente',
    cenario: 'Sr. Ademar, 58 anos, vai fazer amanhã uma colectomia eletiva por câncer de cólon, no protocolo ERAS/ACERTO do hospital. A esposa ouviu de parentes que ele vai "ficar em jejum desde a meia-noite, sair com sonda no nariz e dreno, e só comer quando soltar gases", e os dois estão preocupados.',
    mesa: [
      { tipo: 'tabela', titulo: 'Programação', linhas: [['Cirurgia', 'colectomia eletiva às 10h'], ['Protocolo', 'ERAS/ACERTO'], ['Glicemia de jejum', '118 mg/dL']] },
    ],
    tarefas: [
      'Qual é o tempo de jejum para cada tipo de alimento? Por que não deixar em jejum prolongado?',
      'Quais cuidados do intraoperatório o protocolo recomenda quanto a volume, temperatura, glicemia e analgesia? Por quê?',
      'Como é o pós-operatório quanto a dieta, deambulação, sonda nasogástrica e dreno?',
      'Explique ao casal por que ele vai comer e andar tão cedo.',
    ],
    ator: [
      { gatilho: 'Esposa, ao começar', fala: '"Disseram que ele fica sem comer desde a meia-noite, é isso?"' },
      { gatilho: 'Se falar em comer cedo', fala: '"Mas não tem que esperar o intestino funcionar, soltar gases?"' },
      { gatilho: 'No final', fala: '"E a sonda no nariz, ele vai ter?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Líquidos claros com carboidrato (maltodextrina) até 2 h antes da indução; refeição leve até 6 h; frituras e gordura 8 h ou mais', pts: 1 },
        { tarefa: 1, item: 'Jejum prolongado consome reservas (lipólise e proteólise)', pts: 1 },
        { tarefa: 2, item: 'Fluido restritivo, guiado por meta: a sobrecarga volêmica associa-se a íleo e deiscência', pts: 1 },
        { tarefa: 2, item: 'Normotermia ≥ 36 °C (maior queda na 1ª hora; tríade letal: hipotermia, acidose, coagulopatia); glicemia 140–180 mg/dL', pts: 1 },
        { tarefa: 2, item: 'Analgesia multimodal: opioide como base causa íleo, náusea e sedação', pts: 1 },
        { tarefa: 3, item: 'Dieta precoce (< 24 h, escalonada conforme tolerância), sem esperar flatos ou ruídos hidroaéreos; deambulação no dia 0', pts: 1 },
        { tarefa: 3, item: 'Sonda nasogástrica e dreno não são de rotina: indicação individualizada', pts: 1 },
        { tarefa: 4, item: 'Explicou ao casal que comer e andar cedo aceleram a recuperação, sem jargão', pts: 1 },
      ],
    },
    errosCriticos: ['Orientar jejum absoluto desde a meia-noite', 'Condicionar a dieta à eliminação de flatos'],
    falaModelo: [
      { tarefa: 1, texto: 'Pelo protocolo, gordura e fritura até 8 horas antes; refeição leve até 6 horas; e um líquido claro com maltodextrina até 2 horas antes da anestesia. O jejum prolongado faz o corpo consumir as reservas, gordura e músculo, à toa.', tempo: '30 s' },
      { tarefa: 2, texto: 'No intraoperatório: volume restrito, guiado por meta, porque excesso de líquido leva a íleo e deiscência; temperatura de 36 graus ou mais, porque a maior queda é na primeira hora e a hipotermia faz parte da tríade letal com acidose e coagulopatia; glicemia entre 140 e 180; e analgesia multimodal, sem o opioide como base, que causa íleo, náusea e sedação.', tempo: '45 s' },
      { tarefa: 3, texto: 'No pós-operatório, dieta em menos de 24 horas, aumentando conforme ele tolera, sem esperar gases; e ele já levanta e anda no dia da cirurgia. Sonda no nariz e dreno não são de rotina, só se houver indicação.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Ademar e dona, o corpo depois da cirurgia é como um atleta depois de uma maratona: ele precisa de energia e movimento para se recuperar, e não de ficar parado e sem comer. Por isso o suco claro até 2 horas antes, comer cedo e andar no mesmo dia: tudo isso acelera a recuperação. A sonda só vai se for necessária. Ficou alguma dúvida?', tempo: '35 s', analogia: 'Corpo como atleta depois da maratona' },
    ],
    extra: 'Por quanto tempo manter a profilaxia de TEV numa cirurgia oncológica abdominal? (28 dias.) Por que controlar náuseas e vômitos no pós-operatório? (Risco de broncoaspiração, desidratação e distúrbio hidroeletrolítico.)',
  },

  // ----------------------------------------------------- CIR-13 · Prevenção e classificação da ISC
  {
    id: 'CIR-13', materia: 'cir',
    titulo: 'Como evitar a infecção da prótese',
    local: 'Ambulatório de ortopedia — consulta pré-operatória', papel: 'Médico(a) residente', interacao: 'paciente',
    cenario: 'Sr. Jorge, 63 anos, IMC 36, diabético com glicemias de 250 mg/dL, fumante, tem artroplastia total de quadril eletiva marcada para a próxima semana. Na consulta, conta que está com ardência para urinar há 3 dias; o exame de urina e a urocultura confirmam infecção urinária. A prescrição pré-operatória da enfermagem prevê "tricotomia com lâmina na véspera e banho com sabonete comum".',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Glicemia', '252 mg/dL'], ['Urocultura', 'positiva'], ['Procedimento', 'artroplastia total de quadril (prótese)']] },
    ],
    tarefas: [
      'Quais fatores de risco para infecção de sítio cirúrgico ele tem, e quais fatores dependem do procedimento?',
      'O que deve ser feito antes da cirurgia? Corrija a prescrição da enfermagem.',
      'Quais medidas de prevenção valem durante e depois da cirurgia?',
      'Como se classificam as ISC? Se ele tiver infecção na prótese daqui a 8 meses, ainda conta como ISC?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), esse ardor para urinar atrapalha a cirurgia?"' },
      { gatilho: 'Se falar em adiar', fala: '"Mas já está tudo marcado, não dá pra operar assim mesmo?"' },
      { gatilho: 'No final', fala: '"Depois que eu for pra casa, o que eu tenho que observar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Do paciente: obesidade, hiperglicemia, tabagismo, infecção a distância (urinária)', pts: 1 },
        { tarefa: 1, item: 'Do procedimento: grau de contaminação, duração, quebra de técnica, trauma/necrose, hematoma/espaço morto, hipoperfusão/hipotermia', pts: 1 },
        { tarefa: 2, item: 'Tratar a infecção remota antes da cirurgia, controlar a glicemia e cessar o tabagismo', pts: 1 },
        { tarefa: 2, item: 'Banho com clorexidina degermante; tricotomia só se necessária, próxima ao procedimento, com aparador elétrico (lâmina na véspera causa microlesões)', pts: 1 },
        { tarefa: 3, item: 'Durante: antissepsia com clorexidina alcoólica (preferível ao povidine), antibioticoprofilaxia até 60 min antes (prótese), normotermia, glicemia 140–180', pts: 1 },
        { tarefa: 3, item: 'Depois: cuidados com o curativo, higiene das mãos da equipe, do paciente e dos cuidadores, vigilância e sinais de alerta', pts: 1 },
        { tarefa: 4, item: 'Incisional superficial; incisional profunda (fáscia e músculo); órgão/cavidade (além da parede)', pts: 1 },
        { tarefa: 4, item: 'Com prótese, o prazo de ISC profunda/cavitária vai até 1 ano (sem prótese, 30 dias): sim, conta', pts: 1 },
      ],
    },
    errosCriticos: ['Manter a tricotomia com lâmina na véspera', 'Operar sem tratar a infecção urinária ativa'],
    falaModelo: [
      { tarefa: 1, texto: 'Os fatores dele, do paciente: obesidade, glicemia alta, cigarro e uma infecção a distância, a urinária. Os do procedimento são o grau de contaminação, a duração, quebras de técnica, trauma de tecido, hematoma e espaço morto, e hipoperfusão ou hipotermia.', tempo: '30 s' },
      { tarefa: 2, texto: 'Antes: trato a infecção urinária, controlo a glicemia e oriento parar de fumar. Corrijo a prescrição: banho com clorexidina degermante, e tricotomia só se for necessária, perto da cirurgia e com aparador elétrico, porque a lâmina na véspera faz microlesões que aumentam o risco de infecção.', tempo: '35 s' },
      { tarefa: 3, texto: 'Durante: antissepsia com clorexidina alcoólica, antibioticoprofilaxia até 60 minutos antes, por ser prótese, temperatura normal e glicemia entre 140 e 180. Depois: cuidado com o curativo, higiene das mãos de todos e vigilância.', tempo: '30 s' },
      { tarefa: 4, texto: 'A ISC pode ser incisional superficial, incisional profunda, na fáscia e no músculo, ou de órgão e cavidade. Com prótese, o prazo vai até 1 ano, então aos 8 meses ainda conta. Seu Jorge, a prótese é como uma casa nova: se a gente leva uma infiltração para dentro dela, depois é muito difícil tirar. Por isso vamos tratar essa infecção urinária antes. Em casa, febre, secreção na ferida ou dor aumentando são motivo para voltar. Ficou claro?', tempo: '45 s', analogia: 'Prótese como casa nova sem infiltração' },
    ],
    extra: 'Qual a diferença entre contaminação endógena e exógena? (Endógena: microbiota do próprio paciente; exógena: mãos da equipe, instrumentais e ambiente.)',
  },

  // ----------------------------------------------------- CIR-14 · Cicatrização
  {
    id: 'CIR-14', materia: 'cir',
    titulo: 'O corte da enxada',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sr. Antônio, 58 anos, lavrador, diabético, usa prednisona há 2 meses por uma doença reumatológica. Cortou a perna com a enxada há 14 horas, na roça, e só conseguiu vir agora. A ferida tem 8 cm, está suja de terra, com bordas irregulares, tecido desvitalizado e perda de tecido, e as bordas ficam sob tensão ao tentar aproximá-las. Ele pergunta se vai "ficar com queloide, como o irmão".',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Glicemia', '238 mg/dL'], ['Albumina', '1,8 g/dL']] },
    ],
    tarefas: [
      'Como essa ferida deve ser fechada? Diferencie cicatrização por primeira, segunda e terceira intenção.',
      'Por que é preciso desbridar o tecido desvitalizado?',
      'Quais fatores da ferida e do paciente atrasam a cicatrização neste caso?',
      'Responda à pergunta sobre o queloide, diferenciando queloide de cicatriz hipertrófica.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Dá pra costurar logo, doutor(a)? Preciso voltar pra roça."' },
      { gatilho: 'Se falar em fechar depois', fala: '"Deixar aberto? Não vai infeccionar?"' },
      { gatilho: 'No final', fala: '"E vai ficar aquele queloide feio, igual o do meu irmão?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Terceira intenção (fechamento primário retardado): limpar e suturar em 3 a 7 dias — ferida contaminada, com perda de tecido e tensão (risco de deiscência)', pts: 2 },
        { tarefa: 1, item: 'Primeira: sutura imediata, sem perda de tecido, infecção ou edema · Segunda: sem sutura, por granulação, contração e epitelização, mais lenta', pts: 1 },
        { tarefa: 2, item: 'Tecido necrótico favorece a proliferação bacteriana e impede a difusão de oxigênio e de células inflamatórias; desbridar devolve oxigênio ao leito', pts: 1 },
        { tarefa: 3, item: 'Da ferida: contaminação, oxigenação, necrose · Do paciente: diabetes, corticoide, albumina < 2 g/dL (risco nutricional)', pts: 1 },
        { tarefa: 3, item: 'Corticoide reduz a reação inflamatória, a epitelização e a síntese de colágeno', pts: 1 },
        { tarefa: 4, item: 'Queloide: ultrapassa as bordas, não regride, surge após 3 meses, relação com pele pigmentada · Hipertrófica: respeita os limites, pode regredir, surge a partir de 1 mês, em áreas de tensão', pts: 2 },
      ],
    },
    errosCriticos: ['Suturar de imediato uma ferida contaminada, com perda de tecido e tensão', 'Não desbridar o tecido desvitalizado'],
    falaModelo: [
      { tarefa: 1, texto: 'Por terceira intenção: limpo, desbrido e só suturo depois de 3 a 7 dias, porque a ferida está contaminada, perdeu tecido e tem tensão, e uma sutura agora poderia abrir. Primeira intenção é a sutura imediata, quando não há perda de tecido, infecção nem edema. Segunda intenção é deixar fechar sozinha, por granulação, contração e epitelização, um processo mais lento.', tempo: '40 s' },
      { tarefa: 2, texto: 'O tecido morto é ótimo para as bactérias e impede que o oxigênio e as células de defesa cheguem. Desbridar é devolver oxigênio ao leito da ferida.', tempo: '20 s' },
      { tarefa: 3, texto: 'Da ferida: contaminação com terra, tecido necrótico e pouca oxigenação. Dele: diabetes descontrolado, prednisona, que reduz a inflamação, a epitelização e a síntese de colágeno, e albumina de 1,8, abaixo de 2, um sinal de risco nutricional.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Antônio, o queloide passa das bordas do corte, aparece depois de uns 3 meses e não melhora sozinho, e é mais comum em pele mais escura. A cicatriz hipertrófica fica dentro dos limites do corte, aparece a partir de 1 mês, em lugares que esticam, e pode melhorar com o tempo. Deixar aberto agora é como esperar o cimento secar antes de assentar o tijolo: se fecha com sujeira dentro, abre de novo. Ficou alguma dúvida?', tempo: '45 s', analogia: 'Esperar o cimento secar antes de assentar o tijolo' },
    ],
    extra: 'Quais são as fases da cicatrização e suas células? (Inflamatória: vasoconstrição e trombo, neutrófilo com pico no dia 2, macrófago essencial, linfócito no dia 7; proliferativa: fibroplasia em ~48 h pelo TGF-beta, angiogênese pelo TNF-alfa, epitelização; maturação: a partir de ~1 semana, miofibroblastos e colagenase.)',
  },

  // ----------------------------------------------------- CIR-15 · Queimadura elétrica
  {
    id: 'CIR-15', materia: 'cir',
    titulo: 'O choque na rede de alta tensão',
    local: 'Pronto-socorro — sala de emergência', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Josué, 32 anos, 80 kg, eletricista, levou um choque numa rede de alta tensão (13.800 V) há 2 horas. Tem uma lesão escura de 2 cm na palma da mão direita e outra de 1 cm na sola do pé esquerdo; quase não há outra área de pele queimada. Queixa dor muito forte no antebraço direito. A esposa está com ele e pergunta "por que tanta preocupação, se a queimadura é pequenininha".\n\nFC 118 bpm · PA 130 × 80 mmHg. Antebraço direito tenso; dor intensa à extensão passiva dos dedos. A urina na sonda está escura, "cor de refrigerante de cola".',
    mesa: [],
    tarefas: [
      'Por que as lesões pequenas na pele não mostram a gravidade?',
      'O que significa a urina escura e qual é a conduta, com a meta?',
      'O que está acontecendo no antebraço e qual é a conduta? Diferencie de escarotomia.',
      'Ele precisa de centro especializado? Responda à esposa.',
    ],
    ator: [
      { gatilho: 'Esposa, ao começar', fala: '"Por que tanta preocupação, se a queimadura é pequenininha?"' },
      { gatilho: 'Se falar em cirurgia no braço', fala: '"Cortar o braço dele? Por quê?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Entrada e saída não refletem o trajeto da corrente; dano profundo (nervos, vasos, músculos) desproporcional à pele', pts: 1 },
        { tarefa: 2, item: 'Mioglobinúria por rabdomiólise (lesão muscular profunda)', pts: 1 },
        { tarefa: 2, item: 'Ringer lactato visando diurese mais alta que a meta padrão, ~100–200 mL/h no adulto, até clarear a urina (manitol e bicarbonato podem ser considerados)', pts: 2 },
        { tarefa: 3, item: 'Dor desproporcional à extensão passiva: síndrome compartimental → fasciotomia (abre a fáscia)', pts: 1 },
        { tarefa: 3, item: 'Escarotomia: incisão na escara circunferencial de espessura total, até o subcutâneo (queimadura térmica)', pts: 1 },
        { tarefa: 4, item: 'Alta voltagem (≥ 1.000 V): transferência automática; passagem de corrente pelo corpo transfere mesmo em baixa voltagem', pts: 1 },
      ],
    },
    errosCriticos: ['Julgar a gravidade pela área de pele queimada', 'Manter a meta de diurese padrão diante da urina escura'],
    falaModelo: [
      { tarefa: 1, texto: 'Na queimadura elétrica, as lesões de entrada e saída não mostram o caminho da corrente: ela atravessa nervos, vasos e músculos, e o dano por dentro pode ser muito maior do que se vê na pele.', tempo: '20 s' },
      { tarefa: 2, texto: 'A urina escura sugere mioglobinúria, por rabdomiólise: o músculo lesado libera mioglobina, que pode lesar o rim. Hidrato com Ringer lactato buscando uma diurese mais alta que a habitual, de 100 a 200 mL por hora no adulto, até a urina clarear; manitol e bicarbonato podem ser considerados.', tempo: '35 s' },
      { tarefa: 3, texto: 'O antebraço tenso, com dor desproporcional à extensão passiva, é síndrome compartimental: a conduta é a fasciotomia, que abre a fáscia. É diferente da escarotomia, que corta a escara circunferencial de uma queimadura térmica, até o subcutâneo.', tempo: '30 s' },
      { tarefa: 4, texto: 'Ele precisa de centro especializado: queimadura por alta voltagem é critério automático de transferência. Senhora, a corrente elétrica é como um vazamento num cano enterrado: na calçada aparece só uma mancha pequena, mas embaixo o estrago pode ser grande. A urina escura mostra que o músculo sofreu, e o braço inchado precisa de cirurgia para aliviar a pressão. Ele vai para um lugar preparado para isso. O que mais preocupa a senhora?', tempo: '45 s', analogia: 'Vazamento em cano enterrado' },
    ],
    extra: 'E se fosse um choque de baixa voltagem sem passagem pelo corpo? (Sem transferência automática, mas avaliar a necessidade de seguimento, por sintomas tardios e alterações visuais.)',
  },

  // ----------------------------------------------------- CIR-16 · Queimadura química
  {
    id: 'CIR-16', materia: 'cir',
    titulo: 'A cal virgem e o vinagre',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Gilson, 45 anos, pedreiro, estava preparando cal virgem quando o saco rasgou e o pó caiu nos dois antebraços e entrou pela luva e pela manga da camisa, há 30 minutos. Está com ardência intensa. Um colega jogou vinagre "para neutralizar". Ele chega ainda com a camisa e a luva sujas de pó.\n\nExame: pó branco aderido aos antebraços, áreas avermelhadas e esbranquiçadas, muito dolorosas.',
    mesa: [],
    tarefas: [
      'Qual é a primeira conduta, passo a passo?',
      'Por que não se deve neutralizar com vinagre?',
      'Qual é mais grave, queimadura por ácido ou por álcali? Por quê?',
      'Ele precisa de centro especializado? Explique ao paciente.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Joga mais vinagre, doutor(a), que alivia!"' },
      { gatilho: 'Se for molhar antes de tirar o pó', fala: '"Pode jogar água direto?"' },
      { gatilho: 'Se falar em transferir', fala: '"Transferir por causa de uma queimadura no braço?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Retirar a roupa e a luva contaminadas (fonte de exposição contínua)', pts: 1 },
        { tarefa: 1, item: 'Agente em pó: escovar a seco antes de irrigar; depois irrigar com água corrente abundante (15–20 L) até pH 7–7,5', pts: 2 },
        { tarefa: 2, item: 'Nunca neutralizar: a reação química é exotérmica e aprofunda a lesão', pts: 1 },
        { tarefa: 3, item: 'Álcali (cal): necrose de liquefação, que penetra e continua avançando, mais grave · Ácido: necrose de coagulação, autolimitada', pts: 2 },
        { tarefa: 4, item: 'Toda queimadura química é transferida para centro especializado, independentemente da extensão', pts: 1 },
      ],
    },
    errosCriticos: ['Neutralizar com vinagre ou outro agente', 'Molhar o pó antes de escová-lo'],
    falaModelo: [
      { tarefa: 1, texto: 'Primeiro tiro a camisa e a luva, que continuam encostando o pó na pele. Como é pó, escovo a seco antes de molhar, para não ativar a reação. Depois irrigo com muita água corrente, de 15 a 20 litros, até o pH da pele ficar entre 7 e 7,5.', tempo: '30 s' },
      { tarefa: 2, texto: 'Não se neutraliza, porque a reação entre o ácido e o álcali libera calor e aprofunda a queimadura.', tempo: '15 s' },
      { tarefa: 3, texto: 'O álcali é mais grave: causa necrose de liquefação, que penetra e continua avançando. O ácido causa necrose de coagulação, que tende a se limitar.', tempo: '20 s' },
      { tarefa: 4, texto: 'Toda queimadura química vai para centro especializado, qualquer que seja o tamanho. Seu Gilson, a cal é como uma ferrugem que continua corroendo enquanto está ali: por isso tiramos todo o pó e lavamos muito. O vinagre parece ajudar, mas a mistura esquenta e queima mais. O senhor vai para um serviço que cuida desse tipo de queimadura. Ficou claro?', tempo: '35 s', analogia: 'Álcali como ferrugem que continua corroendo' },
    ],
    extra: 'Quais são as zonas de Jackson? (Necrose no centro, irreversível; estase, viável mas em risco; hiperemia na periferia, que se recupera sozinha.)',
  },

  // ----------------------------------------------------- CIR-17 · Via aérea, CO e escarotomia
  {
    id: 'CIR-17', materia: 'cir',
    titulo: 'Retirada de um apartamento em chamas',
    local: 'Pronto-socorro — sala de emergência', papel: 'Médico(a) plantonista', interacao: 'examinador',
    cenario: 'Dona Lúcia, 50 anos, 60 kg, foi retirada pelos bombeiros de um incêndio em apartamento fechado há 1 hora. Está rouca, com tosse e escarro escuro, sobrancelhas chamuscadas e estridor leve. Refere dor de cabeça e está um pouco confusa. Tem queimadura de 3º grau circunferencial em todo o tórax, e a expansão do tórax está reduzida.\n\nFR 32 irpm · FC 120 bpm · PA 110 × 70 mmHg · SatO₂ 99% em ar ambiente.',
    mesa: [],
    tarefas: [
      'Qual é a prioridade? Que sinais indicam via aérea definitiva precoce?',
      'A saturação de 99% tranquiliza? Explique.',
      'O que fazer com a queimadura do tórax?',
      'Explique as zonas de Jackson e por que a reposição adequada protege parte da queimadura.',
    ],
    ator: [
      { gatilho: 'Examinador, ao começar', fala: '"Ela está saturando 99%. Dá pra esperar?"' },
      { gatilho: 'Na tarefa 3', fala: '"A respiração está cada vez mais curta."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'X-ABCDE: via aérea primeiro', pts: 1 },
        { tarefa: 1, item: 'Estridor, rouquidão, sobrancelhas chamuscadas e escarro carbonáceo em ambiente fechado → via aérea definitiva precoce', pts: 2 },
        { tarefa: 2, item: 'Não: o oxímetro lê a carboxi-hemoglobina como oxi-hemoglobina; SpO₂ normal não afasta intoxicação por CO (cefaleia, confusão)', pts: 1 },
        { tarefa: 3, item: 'Escara circunferencial de espessura total restringindo a ventilação → escarotomia torácica de emergência, incisão até o subcutâneo', pts: 1 },
        { tarefa: 4, item: 'Necrose (centro, irreversível) → estase (viável, em risco) → hiperemia (periferia, recupera sozinha)', pts: 1 },
        { tarefa: 4, item: 'Ressuscitação inadequada converte a zona de estase em necrose, aprofundando a queimadura nas primeiras horas', pts: 1 },
      ],
    },
    errosCriticos: ['Usar a SpO₂ de 99% para afastar intoxicação por CO', 'Adiar a via aérea definitiva até a paciente piorar'],
    falaModelo: [
      { tarefa: 1, texto: 'A prioridade é a via aérea, no X-ABCDE. Ela tem estridor, rouquidão, sobrancelhas chamuscadas e escarro carbonáceo, num ambiente fechado: indicação de via aérea definitiva precoce, antes que o edema feche a passagem.', tempo: '25 s' },
      { tarefa: 2, texto: 'Não tranquiliza. O oxímetro "mente" na intoxicação por monóxido de carbono, porque lê a carboxi-hemoglobina como se fosse oxi-hemoglobina. A dor de cabeça e a confusão reforçam a suspeita.', tempo: '25 s' },
      { tarefa: 3, texto: 'A queimadura de espessura total circunferencial no tórax forma uma escara rígida que impede a expansão: faço escarotomia torácica de emergência, com incisão na escara até o subcutâneo.', tempo: '20 s' },
      { tarefa: 4, texto: 'A queimadura tem três zonas: no centro, a necrose, tecido já morto, que não se recupera; ao redor, a estase, que está viva, mas em risco; e na periferia, a hiperemia, que se recupera sozinha. Se a reposição de volume for inadequada, a estase vira necrose e a queimadura fica mais profunda. É como um incêndio na floresta: o centro já queimou, mas a faixa ao redor ainda pode ser salva se chegar água a tempo.', tempo: '45 s', analogia: 'Incêndio na floresta: a faixa ao redor ainda pode ser salva' },
    ],
    extra: 'Qual a diferença entre escarotomia e fasciotomia? (Escarotomia corta a escara até o subcutâneo; fasciotomia abre a fáscia, na síndrome compartimental, típica da queimadura elétrica.)',
  },

  // ----------------------------------------------------- CIR-18 · Profilaxia de TEV
  {
    id: 'CIR-18', materia: 'cir',
    titulo: 'Injeção na barriga por um mês?',
    local: 'Enfermaria de cirurgia — véspera da cirurgia', papel: 'Residente de cirurgia', interacao: 'paciente',
    cenario: 'Dona Helena, 66 anos, vai fazer amanhã uma colectomia por adenocarcinoma de cólon. Hipertensa, com IMC 31 e varizes nas pernas. O escore de Caprini calculado pela equipe foi 7. Ao saber que vai receber "injeção na barriga" depois da cirurgia, inclusive em casa, ela pergunta: "Por quê? Eu não tenho problema de sangue".',
    mesa: [
      { tipo: 'tabela', titulo: 'Avaliação de risco', linhas: [['Escore de Caprini', '7 pontos'], ['Cirurgia', 'colectomia oncológica (abdominal)'], ['Função renal', 'normal']] },
    ],
    tarefas: [
      'Qual é o risco de TEV pelo Caprini e qual profilaxia ela precisa?',
      'Quais esquemas farmacológicos podem ser usados?',
      'Por quanto tempo manter a profilaxia, e por quê?',
      'Se o escore fosse 3, o que mudaria? Explique à paciente por que ela vai usar a injeção em casa.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Por que a injeção? Eu não tenho problema de sangue."' },
      { gatilho: 'Se falar em 28 dias', fala: '"Um mês inteiro? Mesmo já estando em casa?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Caprini ≥ 5: alto risco → profilaxia farmacológica e mecânica associadas', pts: 2 },
        { tarefa: 2, item: 'Enoxaparina 40 mg SC 1x/dia ou heparina não fracionada 5.000 UI SC a cada 8–12 h', pts: 2 },
        { tarefa: 3, item: 'Cirurgia oncológica abdominal ou pélvica: profilaxia estendida por 28 dias', pts: 1 },
        { tarefa: 4, item: 'Caprini 3–4 (moderado): farmacológica OU mecânica', pts: 1 },
      ],
    },
    errosCriticos: ['Usar só profilaxia mecânica num Caprini de 7', 'Suspender a profilaxia na alta hospitalar'],
    falaModelo: [
      { tarefa: 1, texto: 'Com Caprini de 7, ela é de alto risco, 5 ou mais: precisa de profilaxia farmacológica e mecânica associadas.', tempo: '15 s' },
      { tarefa: 2, texto: 'Na farmacológica, enoxaparina 40 mg subcutânea uma vez ao dia, ou heparina não fracionada 5.000 unidades subcutânea a cada 8 a 12 horas.', tempo: '20 s' },
      { tarefa: 3, texto: 'Por ser cirurgia oncológica abdominal, a profilaxia é estendida por 28 dias, e não só durante a internação.', tempo: '15 s' },
      { tarefa: 4, texto: 'Se o escore fosse 3 ou 4, risco moderado, bastaria a farmacológica ou a mecânica. Dona Helena, depois de uma cirurgia grande, ainda mais por câncer, o sangue fica com mais tendência a formar coágulos nas pernas, mesmo em quem nunca teve problema. A injeção é como manter o rio correndo para a água não empoçar: ela dificulta a formação desses coágulos. Por isso vai continuar em casa por 28 dias. Vamos ensinar a senhora ou alguém da família a aplicar. O que acha?', tempo: '45 s', analogia: 'Rio correndo para a água não empoçar' },
    ],
    extra: 'Se ela usasse anticoagulante em dose plena, quando suspender antes da cirurgia? (HNF IV: ~6 h; HBPM: 24 h; DOAC: 24 h, ou 48 h se doença renal crônica; varfarina: 5 dias.)',
  },

  // ----------------------------------------------------- CIR-19 · Retenção urinária e íleo
  {
    id: 'CIR-19', materia: 'cir',
    titulo: 'A barriga inchada no pós-operatório',
    local: 'Enfermaria de cirurgia geral', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sr. Paulo, 60 anos, fez colectomia aberta com raquianestesia e recebeu morfina para dor.\n\n1º pós-operatório, à noite: não urina há 8 horas, tem dor em baixo ventre e uma massa palpável acima do púbis. O ultrassom à beira do leito mostra 650 mL na bexiga.\n\n3º pós-operatório: abdome distendido, não eliminou gases, está nauseado. Sinais vitais estáveis, sem febre. RX de abdome: distensão difusa de delgado e cólon, sem níveis hidroaéreos.',
    mesa: [],
    tarefas: [
      'Qual é a causa da dor no 1º pós-operatório e qual é a conduta?',
      'No 3º dia, é íleo ou obstrução mecânica? Justifique e diga a conduta.',
      'Por que controlar as náuseas e os vômitos?',
      'Que tipo de analgesia ajuda a evitar o íleo? Explique ao paciente por que andar ajuda.',
    ],
    ator: [
      { gatilho: 'No 1º dia', fala: '"Doutor(a), parece que vou estourar, mas não sai nada."' },
      { gatilho: 'No 3º dia', fala: '"Vou ter que operar de novo? A barriga está muito inchada."' },
      { gatilho: 'Se pedir para andar', fala: '"Andar? Com essa barriga, doendo?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Retenção urinária (raquianestesia + opioide) com globo vesical sintomático', pts: 1 },
        { tarefa: 1, item: 'Cateterizar para descomprimir a bexiga e reavaliar a micção depois', pts: 1 },
        { tarefa: 2, item: 'Íleo funcional: distensão difusa de delgado e cólon, sem níveis hidroaéreos, paciente estável', pts: 1 },
        { tarefa: 2, item: 'Conduta conservadora: deambulação precoce e dieta conforme aceitação (sem reoperar)', pts: 1 },
        { tarefa: 3, item: 'Náuseas e vômitos persistentes aumentam o risco de broncoaspiração, desidratação e distúrbio hidroeletrolítico → antieméticos', pts: 1 },
        { tarefa: 4, item: 'Analgesia multimodal: opioide como base causa íleo, náusea e sedação', pts: 1 },
      ],
    },
    errosCriticos: ['Dar volume ou diurético diante do globo vesical', 'Indicar reoperação para um íleo funcional'],
    falaModelo: [
      { tarefa: 1, texto: 'No 1º dia é retenção urinária: a raquianestesia e a morfina prejudicam o esvaziamento da bexiga, e ele tem globo vesical com 650 mL e dor. Cateterizo para descomprimir e depois reavalio se ele consegue urinar sozinho.', tempo: '25 s' },
      { tarefa: 2, texto: 'No 3º dia é íleo pós-operatório, funcional: a distensão é difusa, do delgado e do cólon, sem níveis hidroaéreos, e ele está estável. Não é obstrução mecânica. A conduta é conservadora: andar e avançar a dieta conforme ele aceitar.', tempo: '30 s' },
      { tarefa: 3, texto: 'Náusea e vômito persistentes aumentam o risco de broncoaspiração, desidratação e distúrbios dos eletrólitos, então trato com antiemético.', tempo: '15 s' },
      { tarefa: 4, texto: 'A analgesia multimodal ajuda, porque usar o opioide como base causa íleo, náusea e sedação. Seu Paulo, depois da cirurgia o intestino fica como um trem parado na estação: ele não está bloqueado, só precisa de um empurrão para voltar a andar. Caminhar é esse empurrão. Não precisa operar de novo. Vamos dar uma volta no corredor juntos?', tempo: '35 s', analogia: 'Intestino como trem parado na estação' },
    ],
    extra: 'Por que as catecolaminas da REMIT contribuem para o íleo? (Causam atonia intestinal.)',
  },

  // ----------------------------------------------------- CIR-20 · Consentimento informado
  {
    id: 'CIR-20', materia: 'cir',
    titulo: '"Assinei, mas não entendi"',
    local: 'Enfermaria de cirurgia — véspera da cirurgia', papel: 'Residente de cirurgia', interacao: 'paciente',
    cenario: 'Dona Rosa, 52 anos, tem colecistectomia videolaparoscópica marcada para amanhã por cólicas de repetição causadas por cálculos na vesícula. O plantonista deixou o termo de consentimento com ela e disse "é só assinar aqui". Ela assinou. Quando você passa para conferir, ela diz: "Assinei, mas não entendi direito. Vão tirar meu fígado? E tem outro jeito sem cirurgia?".',
    mesa: [],
    tarefas: [
      'O consentimento colhido é válido? Por quê?',
      'O que precisa ser feito para que o consentimento seja adequado? Conduza a conversa.',
      'Como a autonomia da paciente participa da segurança da cirurgia?',
      'Em que momento do checklist de cirurgia segura o consentimento é conferido, e o que mais se confere ali?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Assinei, mas não entendi direito. Vão tirar meu fígado?"' },
      { gatilho: 'Se falar em alternativas', fala: '"E tem outro jeito sem cirurgia?"' },
      { gatilho: 'No final', fala: '"E se eu quiser pensar mais um pouco?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Não: consentimento exige comunicação, compreensão verificada, decisão compartilhada e registro; assinatura sem conversa compromete a validade', pts: 2 },
        { tarefa: 2, item: 'Explicar indicação, riscos e alternativas (inclusive o tratamento não cirúrgico) em linguagem acessível', pts: 1 },
        { tarefa: 2, item: 'Verificar a compreensão e documentar a decisão, respeitando o direito de pensar e decidir', pts: 1 },
        { tarefa: 3, item: 'Autonomia: participar, confirmar informações (ex.: marcação do sítio com a paciente acordada) e consentir de forma esclarecida; não ser espectadora', pts: 1 },
        { tarefa: 4, item: 'Sign in, antes da indução: identidade, sítio/lateralidade, procedimento, alergias e termo de consentimento', pts: 1 },
      ],
    },
    errosCriticos: ['Considerar válido o termo assinado sem explicação', 'Pressionar a paciente a manter a decisão'],
    falaModelo: [
      { tarefa: 1, texto: 'Não é válido como está. Consentimento não é só a assinatura: exige comunicação, compreensão verificada, decisão compartilhada e registro. Uma assinatura sem conversa compromete a validade.', tempo: '20 s' },
      { tarefa: 2, texto: 'Dona Rosa, vamos conversar com calma. A cirurgia não tira o fígado: tira a vesícula, uma bolsinha que fica embaixo dele e que está com pedras, causando as suas cólicas. Pense numa caixa-d’água com areia no fundo: de vez em quando a areia entope o cano, e por isso dói. Vou explicar por que a cirurgia está indicada, quais são os riscos e as alternativas, inclusive a de não operar. Depois, me conta com suas palavras o que entendeu? Se quiser pensar mais, tudo bem; a decisão é sua, e vamos registrar o que for decidido.', tempo: '60 s', analogia: 'Caixa-d’água com areia entupindo o cano' },
      { tarefa: 3, texto: 'A autonomia faz parte da segurança: a paciente participa, confirma as informações, como na marcação do local com ela acordada, e consente de forma esclarecida. Ela não é espectadora.', tempo: '20 s' },
      { tarefa: 4, texto: 'No sign in, antes da indução anestésica, conferimos identidade, sítio e lateralidade, procedimento, alergias e o termo de consentimento.', tempo: '15 s' },
    ],
    extra: 'Quais são as variáveis que sustentam a segurança do paciente? (Metas mensuráveis, transparência sem cultura de punição, comunicação efetiva, autonomia do paciente, profissionalismo e educação continuada.)',
  },

  // ----------------------------------------------------- CIR-21 · Evento adverso e segurança do paciente
  {
    id: 'CIR-21', materia: 'cir',
    titulo: 'Quase operamos o joelho errado',
    local: 'Reunião do núcleo de segurança do paciente', papel: 'Cirurgião(ã)', interacao: 'examinador',
    cenario: 'Na semana passada, um paciente quase foi operado no joelho direito, quando a indicação era o esquerdo. O pedido de internação estava com o lado trocado; a marcação foi feita pela equipe depois da anestesia, com base no pedido; ninguém perguntou ao paciente. No time out, o anestesista leu em voz alta o lado e a técnica de enfermagem estranhou, porque o exame de imagem era do joelho esquerdo. A cirurgia foi interrompida e feita no lado certo.\n\nO chefe do serviço (examinador) quer "descobrir o culpado e demitir".',
    mesa: [],
    tarefas: [
      'Isso foi erro de uma pessoa ou falha de sistema? Explique o modelo do queijo suíço.',
      'Quais barreiras falharam e qual funcionou?',
      'Diferencie imperícia, imprudência e negligência.',
      'Responda ao chefe: o que sustenta a segurança do paciente e por que punir não resolve?',
    ],
    ator: [
      { gatilho: 'Chefe, ao começar', fala: '"Quem marcou o joelho errado vai ser demitido hoje."' },
      { gatilho: 'Na tarefa 4', fala: '"Se ninguém for punido, ninguém aprende."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Nem todo evento adverso é erro médico: a maioria é falha de sistema, com barreiras falhando alinhadas, como os furos do queijo suíço', pts: 2 },
        { tarefa: 2, item: 'Falharam: pedido com lado trocado e marcação feita com o paciente anestesiado, sem a participação dele (deveria ser acordado, antes da indução)', pts: 1 },
        { tarefa: 2, item: 'Funcionou: o time out, com confirmação verbal da equipe antes da incisão', pts: 1 },
        { tarefa: 3, item: 'Imperícia: falta de conhecimento técnico · Imprudência: agir sem cautela · Negligência: omissão', pts: 1 },
        { tarefa: 4, item: 'Variáveis de segurança: metas mensuráveis, transparência sem cultura de punição, comunicação efetiva, autonomia do paciente, profissionalismo, educação continuada', pts: 1 },
        { tarefa: 4, item: 'Punição esconde as falhas; transparência permite corrigir o sistema', pts: 1 },
      ],
    },
    errosCriticos: ['Atribuir o evento a uma única pessoa', 'Não reconhecer a falha da marcação com o paciente anestesiado'],
    falaModelo: [
      { tarefa: 1, texto: 'Foi uma falha de sistema. Nem todo evento adverso é erro médico: em geral, várias barreiras falham ao mesmo tempo, como fatias de queijo suíço com os furos alinhados, e aí o erro passa.', tempo: '20 s' },
      { tarefa: 2, texto: 'Falharam o pedido com o lado trocado e a marcação, que foi feita com o paciente anestesiado, sem ele participar; ela deveria ser feita com ele acordado, confirmando o lado, antes da indução. A barreira que funcionou foi o time out, a confirmação em voz alta antes da incisão.', tempo: '35 s' },
      { tarefa: 3, texto: 'Imperícia é a falta de conhecimento técnico; imprudência é agir sem cautela, fazer o que não devia; negligência é a omissão, deixar de fazer o que devia.', tempo: '20 s' },
      { tarefa: 4, texto: 'Chefe, a segurança se sustenta em metas mensuráveis, transparência sem cultura de punição, comunicação na equipe, autonomia do paciente, profissionalismo e educação continuada. Se a gente demite, as pessoas passam a esconder os erros, e o furo do queijo continua lá para o próximo paciente. Foi justamente uma técnica que falou no time out e evitou o dano. O caminho é corrigir o fluxo da marcação. O senhor concorda em revisarmos isso juntos?', tempo: '45 s', analogia: 'Fatias de queijo suíço com furos alinhados' },
    ],
    extra: 'Qual foi o impacto do checklist de cirurgia segura da OMS? (Complicações de cerca de 11% para 7% e mortalidade de 1,5% para 0,8%; campanha "Cirurgia Segura Salva Vidas", 2008.)',
  },

  // ----------------------------------------------------- CIR-22 · Tumores cutâneos benignos e corno cutâneo
  {
    id: 'CIR-22', materia: 'cir',
    titulo: 'Os carocinhos do Sr. Benedito',
    local: 'Ambulatório de cirurgia', papel: 'Médico(a) cirurgião(ã)', interacao: 'paciente',
    cenario: 'Sr. Benedito, 68 anos, obeso, lavrador aposentado, de pele clara, vem "tirar umas coisinhas da pele" e mostra:\n\n1. Nódulo de 4 cm no dorso, mole, móvel, indolor, há anos.\n2. Nódulo na nuca com um pequeno orifício central; ao apertar, sai material pastoso de cheiro rançoso.\n3. Várias lesões pequenas, pedunculadas e macias nas axilas e no pescoço.\n4. Placas acastanhadas no tronco, de superfície rugosa e aspecto "graxento", que crescem devagar.\n5. Na mão, uma lesão dura em forma de chifre, com base larga, avermelhada e dolorosa. Um colega já tinha retirado só a ponta, e a biópsia mostrou "hiperceratose".',
    mesa: [],
    tarefas: [
      'Dê a hipótese diagnóstica de cada lesão.',
      'Qual delas exige investigação, e como?',
      'Diferencie a ceratose seborreica da ceratose actínica.',
      'Explique ao paciente quais lesões são benignas e qual merece atenção.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"É tudo câncer, doutor(a)? Tô cheio de caroço."' },
      { gatilho: 'Se falar da lesão da mão', fala: '"Mas já fizeram biópsia e deu que não era nada."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: '1: lipoma · 2: cisto epidermoide (sebáceo) · 3: acrocórdons (fibromas moles, associados à obesidade e síndrome metabólica) · 4: ceratose seborreica', pts: 2 },
        { tarefa: 1, item: '5: corno cutâneo', pts: 1 },
        { tarefa: 2, item: 'Corno cutâneo: a ponta não é diagnóstica; a base pode ser benigna, pré-maligna ou maligna → biopsiar a base (base larga, eritematosa e dolorosa = sinais de alerta)', pts: 2 },
        { tarefa: 3, item: 'Seborreica: benigna, pápula acastanhada graxenta, de crescimento lento no idoso · Actínica: pré-maligna, pele clara e sol, placas ásperas com escamas aderentes, pode progredir para CEC', pts: 1 },
        { tarefa: 4, item: 'Explicou que as lesões 1 a 4 são benignas e por que a base da lesão da mão precisa ser biopsiada', pts: 1 },
      ],
    },
    errosCriticos: ['Considerar o laudo da ponta suficiente para o corno cutâneo', 'Confundir ceratose seborreica com lesão pré-maligna'],
    falaModelo: [
      { tarefa: 1, texto: 'O nódulo mole e móvel do dorso é um lipoma. O da nuca, com orifício central e conteúdo pastoso de cheiro rançoso, é um cisto epidermoide, ou sebáceo. As lesões pedunculadas e macias são acrocórdons, os fibromas moles, ligados à obesidade e à síndrome metabólica. As placas acastanhadas e graxentas são ceratoses seborreicas. E a lesão em chifre da mão é um corno cutâneo.', tempo: '40 s' },
      { tarefa: 2, texto: 'O corno cutâneo exige investigação: a ponta não é diagnóstica, porque é só hiperceratose. O que define a lesão é a base, que pode ser benigna, pré-maligna ou maligna. Como a base é larga, avermelhada e dolorosa, biopsio a base.', tempo: '30 s' },
      { tarefa: 3, texto: 'A ceratose seborreica é benigna: pápula acastanhada, graxenta, que cresce devagar no idoso. A ceratose actínica é pré-maligna: aparece em pele clara exposta ao sol, como placas ásperas com escamas aderentes, e pode progredir para carcinoma espinocelular.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Benedito, quatro dessas lesões são benignas. A da mão é como a ponta de um iceberg: o que aparece em cima não diz o que está embaixo, e a biópsia anterior pegou só a ponta. Por isso precisamos tirar um pedaço da base para ter certeza. Ficou claro?', tempo: '30 s', analogia: 'Ponta do iceberg' },
    ],
    extra: 'O que é o granuloma piogênico, e por que o nome é inadequado? (Tumor vascular friável que sangra ao trauma; não há pus nem infecção.)',
  },

);
