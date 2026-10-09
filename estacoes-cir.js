// Estações de Clínica Cirúrgica (CIR-02 a CIR-10). CIR-01 está em estacoes.js.
ESTACOES.push(
  // ----------------------------------------------------- CIR-02 · Perioperatório
  {
    id: 'CIR-02', materia: 'cir',
    titulo: 'Liberação para colecistectomia: o que manter e o que suspender',
    local: 'Ambulatório de avaliação pré-operatória', papel: 'Médico(a) clínico(a) do pré-operatório', interacao: 'paciente',
    cenario: 'Sr. Valdir, 67 anos, 82 kg, tem colecistectomia videolaparoscópica eletiva marcada para daqui a 2 meses. Hipertenso e diabético, ambos controlados. Fuma 1 maço por dia há 35 anos. Sobe dois lances de escada sem cansaço ou dor no peito. Nunca infartou, não tem insuficiência cardíaca, nem AVC. Creatinina 1,0 mg/dL.\n\nMedicações em uso: losartana 50 mg 12/12 h · anlodipino 5 mg/dia · sinvastatina 20 mg/noite · dapagliflozina 10 mg/dia · insulina NPH 20 UI pela manhã · ginkgo biloba (por conta própria).',
    mesa: [
      { tipo: 'tabela', titulo: 'Avaliação já registrada', linhas: [['Índice de risco cardíaco revisado (Lee)', '2 fatores'], ['Capacidade funcional', 'sobe dois lances de escada sem sintomas'], ['Creatinina', '1,0 mg/dL']] },
    ],
    tarefas: [
      'Classifique o paciente pela ASA e estratifique o risco cardíaco. Ele precisa de teste cardíaco antes da cirurgia?',
      'Quais exames pré-operatórios você pede?',
      'Oriente o que fazer com cada medicação e com o cigarro.',
      'Explique ao paciente o jejum.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), vou ter que parar todos os meus remédios?"' },
      { gatilho: 'Se falar em parar de fumar', fala: '"Parar de fumar? Mas a cirurgia é só daqui a dois meses."' },
      { gatilho: 'Ao falar do jejum', fala: '"Então fico sem comer nem beber nada desde a noite anterior, né?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'ASA II: doenças sistêmicas controladas, sem limitação funcional', pts: 1 },
        { tarefa: 1, item: 'Lee com 2 fatores → avaliar a capacidade funcional (0–1 libera; 3–6 indica teste cardíaco)', pts: 1 },
        { tarefa: 1, item: 'Capacidade ≥ 4 METs (sobe dois lances de escada) → liberado sem teste cardíaco', pts: 1 },
        { tarefa: 2, item: '> 65 anos: ECG, hematócrito, ureia/creatinina, glicemia e eletrólitos', pts: 1 },
        { tarefa: 2, item: 'RX de tórax: tabagismo > 20 maços-ano (35 maços-ano) e idade > 65 anos', pts: 1 },
        { tarefa: 3, item: 'Manter anlodipino e sinvastatina nos horários habituais; suspender a losartana no dia da cirurgia', pts: 1 },
        { tarefa: 3, item: 'Suspender a dapagliflozina 3 a 4 dias antes (risco de cetoacidose euglicêmica)', pts: 1 },
        { tarefa: 3, item: 'Insulina NPH: metade da dose na manhã da cirurgia (10 UI); meta glicêmica de 140 a 180 mg/dL', pts: 1 },
        { tarefa: 3, item: 'Ginkgo biloba: suspender 36 h antes', pts: 1 },
        { tarefa: 3, item: 'Cessar o tabagismo pelo menos 4 a 8 semanas antes da cirurgia (dá tempo se parar agora)', pts: 1 },
        { tarefa: 4, item: 'Líquidos claros com carboidrato (maltodextrina) até 2 h antes; refeição leve até 6 h; gordura/fritura 8 h ou mais', pts: 1 },
      ],
    },
    errosCriticos: ['Pedir teste cardíaco sem indicação', 'Manter a dapagliflozina até a véspera', 'Orientar jejum absoluto desde a noite anterior'],
    falaModelo: [
      { tarefa: 1, texto: 'É ASA II: hipertensão e diabetes controlados, sem limitação. No índice de Lee ele tem 2 fatores: com 0 ou 1 eu liberaria, com 3 a 6 pediria teste cardíaco; com 2, avalio a capacidade funcional, e ele sobe dois lances de escada, ou seja, 4 METs ou mais. Está liberado sem teste cardíaco.', tempo: '35 s' },
      { tarefa: 2, texto: 'Por ter mais de 65 anos: ECG, hematócrito, ureia, creatinina, glicemia e eletrólitos. E RX de tórax, porque tem 35 maços-ano e mais de 65 anos.', tempo: '20 s' },
      { tarefa: 3, texto: 'Seu Valdir, o anlodipino e a sinvastatina o senhor toma normal, inclusive no dia. A losartana o senhor não toma no dia da cirurgia. A dapagliflozina para 3 a 4 dias antes, porque com o jejum ela pode acidificar o sangue mesmo com açúcar normal. Na manhã da cirurgia, só metade da insulina, 10 unidades. O ginkgo para pelo menos 36 horas antes, porque aumenta o sangramento. E o cigarro: o recomendado é parar pelo menos 4 a 8 semanas antes, então, se o senhor parar agora, dá tempo; isso reduz as complicações da cirurgia.', tempo: '60 s' },
      { tarefa: 4, texto: 'Não precisa ficar a noite toda sem nada. Comida pesada, com gordura, até 8 horas antes; uma refeição leve até 6 horas antes; e o suco claro de maltodextrina que vamos entregar pode ser tomado até 2 horas antes. É como abastecer o carro antes da viagem: o senhor chega com energia, sem fome e com menos risco de a glicose bagunçar. Me conta com suas palavras como vai ficar o seu dia da cirurgia?', tempo: '40 s', analogia: 'Abastecer o carro antes da viagem' },
    ],
    extra: 'Se ele usasse clopidogrel e varfarina, quando suspender? (5 dias antes, a varfarina com controle do RNI.) E a HBPM? (24 h antes.) E o DOAC? (24 h; 48 h se doença renal crônica.)',
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
);
