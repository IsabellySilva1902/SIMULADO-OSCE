// Estações de Farmacologia (FAR-02 a FAR-18). FAR-01 está em estacoes.js.
ESTACOES.push(
  // ----------------------------------------------------- FAR-02 · Prescrição racional e receita
  {
    id: 'FAR-02', materia: 'farmaco',
    titulo: 'A receita que voltou da farmácia',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Dona Lúcia, 71 anos, tem câncer de mama com metástases ósseas e dor intensa. Ontem foi ao pronto-socorro, e o plantonista prescreveu morfina e clonazepam numa folha de papel comum, à mão. Hoje ela voltou da farmácia sem os remédios: o farmacêutico recusou a receita. Ela está chorosa e cansada de "ir e voltar".\n\nEla também conta que se confunde com os horários dos remédios que já usa e que "toma quando lembra". Usa clonazepam 0,5 mg à noite há anos.',
    mesa: [
      { tipo: 'texto', texto: 'Receita recusada (papel comum, 1 via):\n\nUso oral\n1) Morfina 10 mg ........ 1 cx\n2) Clonazepam 2 mg ........ 1 cx\n\nAss.: ilegível · sem data · sem nome da paciente · sem CRM' },
    ],
    tarefas: [
      'Quais são as partes de uma receita médica? O que falta nesta, e que erro de dose você encontra?',
      'Por que o farmacêutico recusou? Qual receituário é exigido para cada medicamento e para quanto tempo?',
      'Quais são os seis passos da prescrição racional? Em qual deles está o problema de ela "tomar quando lembra"? Oriente a paciente.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), já é a segunda vez que eu vou na farmácia. Por que não aceitaram?"' },
      { gatilho: 'Se perguntar sobre o clonazepam', fala: '"Eu tomo um comprimidinho de 0,5 à noite… 2 mg? Nunca tomei isso."' },
      { gatilho: 'No final', fala: '"Eu me confundo com tanto remédio, doutor(a)."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Cabeçalho, superinscrição (paciente e via), inscrição (fármaco, forma, dose, frequência, período), subscrição (quantidade total) e adscrição (orientações de uso)', pts: 2 },
        { tarefa: 1, item: 'Faltam: nome da paciente, data, médico identificado (nome e CRM legíveis), posologia (inscrição incompleta) e adscrição', pts: 1 },
        { tarefa: 1, item: 'Erro de dose: clonazepam 2 mg em vez de 0,5 mg; legibilidade da inscrição evita erro de dose', pts: 1 },
        { tarefa: 2, item: 'Morfina (lista A1, entorpecente): receita amarela, prazo de 30 dias', pts: 1 },
        { tarefa: 2, item: 'Clonazepam (lista B1, benzodiazepínico): receita azul, prazo de 60 dias', pts: 1 },
        { tarefa: 3, item: 'Definir o problema → especificar o objetivo → verificar a adequação ao paciente → prescrever → informar, instruir e recomendar → monitorizar', pts: 1 },
        { tarefa: 3, item: 'Passo 5 (informações e instruções claras): baixa adesão e irregularidade de horários são causas de fracasso terapêutico', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o clonazepam em 2 mg', 'Prescrever morfina em receituário comum'],
    falaModelo: [
      { tarefa: 1, texto: 'A receita tem cabeçalho, com os dados do médico; superinscrição, com nome da paciente e via; inscrição, com fármaco, forma, dose, frequência e duração; subscrição, com a quantidade total; e adscrição, com as orientações de uso. Aqui faltam nome da paciente, data, médico identificado com CRM legível, a posologia e as orientações. E há um erro de dose: ela usa clonazepam 0,5 mg, não 2 mg.', tempo: '40 s' },
      { tarefa: 2, texto: 'Foi recusada porque esses remédios são controlados. A morfina é lista A1, entorpecente: exige receita amarela, com prazo de 30 dias. O clonazepam é lista B1: receita azul, com prazo de 60 dias. Não podem ir numa folha comum.', tempo: '25 s' },
      { tarefa: 3, texto: 'Os seis passos: definir o problema, especificar o objetivo, verificar se o tratamento é adequado para a paciente, prescrever, informar e instruir, e monitorizar. O problema dela está no quinto passo: ninguém explicou com clareza como tomar. Dona Lúcia, remédio tomado só quando lembra é como regar uma planta de vez em quando: ela não cresce. Vou escrever com a senhora os horários, ligados ao café, almoço e jantar. Me mostra como a senhora vai tomar amanhã?', tempo: '45 s', analogia: 'Remédio irregular como planta regada de vez em quando' },
    ],
    extra: 'Em que listas ficam a codeína e a isotretinoína? (Codeína: A2, entorpecente de concentração especial, também receita amarela; isotretinoína: C2, retinoide, receituário de controle especial.) Que siglas são aceitas na receita? (Só q.s.p.; usar a denominação comum brasileira.)',
  },

  // ----------------------------------------------------- FAR-03 · Osteoporose
  {
    id: 'FAR-03', materia: 'farmaco',
    titulo: 'Quebrou o punho ao escorregar no tapete',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Dona Célia, 66 anos, branca, magra, entrou na menopausa aos 48 anos. Há 2 meses escorregou no tapete da sala, caiu da própria altura e fraturou o punho. A filha notou que ela "ficou mais baixinha e mais curvada". Fuma 10 cigarros por dia, não faz atividade física e "quase não toma leite". A mãe dela também teve fratura de fêmur. Tem refluxo leve, controlado com dieta. Volta com a densitometria e diz: "Mas eu não sinto nada nos ossos".',
    mesa: [
      { tipo: 'tabela', titulo: 'Densitometria óssea (DEXA)', linhas: [['Laudo', 'densidade mineral óssea compatível com osteoporose em coluna lombar e colo do fêmur'], ['Altura', '3 cm menor que a registrada há 10 anos']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Que dados do caso o sustentam? Separe os fatores de risco em modificáveis e não modificáveis.',
      'Qual fármaco é a base do tratamento, como ele age e o que precisa ser associado? Por quê?',
      'Ensine a paciente a tomar o bisfosfonato e explique o motivo de cada cuidado. Se ela não tolerar, qual é a alternativa?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Mas eu não sinto nada nos ossos, doutor(a). Osteoporose dói?"' },
      { gatilho: 'Se falar em cálcio', fala: '"Então é só tomar cálcio que resolve, né?"' },
      { gatilho: 'Se orientar ficar em pé', fala: '"Eu tomo meus remédios todos juntos, deitada, antes de levantar."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Osteoporose pós-menopausa: doença silenciosa até a fratura; fratura por movimento simples, perda de altura, postura encurvada e DEXA compatível', pts: 2 },
        { tarefa: 1, item: 'Modificáveis: tabagismo, sedentarismo, baixa ingestão de cálcio · Não modificáveis: raça branca, histórico familiar de fratura; também baixo peso e deficiência estrogênica', pts: 1 },
        { tarefa: 2, item: 'Bisfosfonato (alendronato): liga-se à hidroxiapatita e inibe a aderência e a atividade dos osteoclastos', pts: 2 },
        { tarefa: 2, item: 'Associar cálcio e vitamina D: cálcio isolado tem efeito mínimo nas fraturas; a vitamina D aumenta a absorção intestinal de cálcio', pts: 1 },
        { tarefa: 2, item: 'Carbonato de cálcio com as refeições (absorção melhor em pH ácido); pode constipar', pts: 1 },
        { tarefa: 2, item: 'Exercício de força: melhora força, equilíbrio e coordenação e reduz quedas e fraturas', pts: 1 },
        { tarefa: 3, item: 'Em jejum, com água, e permanecer ereta por pelo menos 30 minutos: evita o refluxo do comprimido e a esofagite', pts: 1 },
        { tarefa: 3, item: 'Alternativa se esofagite ou dificuldade com a orientação postural: calcitonina intranasal; seguimento com DEXA, novas fraturas e sintomas digestivos', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar só com cálcio', 'Orientar tomar o bisfosfonato deitada ou junto com outros remédios'],
    falaModelo: [
      { tarefa: 1, texto: 'É osteoporose pós-menopausa. Ela fraturou o punho numa queda da própria altura, perdeu 3 cm de altura, está mais curvada e a densitometria é compatível. É uma doença silenciosa até a primeira fratura. Fatores modificáveis: cigarro, sedentarismo e pouco cálcio. Não modificáveis: raça branca e a mãe com fratura; além do baixo peso e da falta de estrogênio da menopausa.', tempo: '40 s' },
      { tarefa: 2, texto: 'A base é um bisfosfonato, o alendronato. Ele se liga à hidroxiapatita do osso e inibe os osteoclastos, que são as células que reabsorvem osso. Associo cálcio e vitamina D, porque o cálcio sozinho quase não reduz fraturas, e a vitamina D aumenta a absorção do cálcio no intestino. O carbonato de cálcio vai com as refeições, porque absorve melhor em meio ácido. E exercício de força, que reduz quedas e fraturas.', tempo: '45 s' },
      { tarefa: 3, texto: 'Dona Célia, a osteoporose não dói até quebrar, por isso tratamos agora. O osso é como uma casa em reforma permanente: uma equipe derruba paredes e outra constrói. Na menopausa, a equipe que derruba trabalha demais; o remédio diminui essa equipe. Tome em jejum, com água, sozinho, e fique sentada ou em pé por pelo menos 30 minutos, para o comprimido não voltar e machucar o esôfago. Se não tolerar, existe a calcitonina em spray nasal. Me conta como a senhora vai tomar?', tempo: '55 s', analogia: 'Osso como casa em reforma: uma equipe derruba, outra constrói' },
    ],
    extra: 'Cite medicamentos que causam osteoporose secundária. (Corticoide, heparina, levotiroxina em excesso, fenitoína e fenobarbital.) Por que o efeito do bisfosfonato persiste após a suspensão? (Fica incorporado à hidroxiapatita do osso.)',
  },

  // ----------------------------------------------------- FAR-04 · Úlcera péptica e H. pylori
  {
    id: 'FAR-04', materia: 'farmaco',
    titulo: 'Dor na boca do estômago que acorda de madrugada',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Sr. Osvaldo, 58 anos, pedreiro, tem dor em queimação no epigástrio há 2 meses, que o acorda de madrugada e melhora ao comer. Toma ibuprofeno 600 mg duas a três vezes por dia "para as dores nos joelhos". Fuma 10 cigarros por dia. Nega fezes escuras ou vômito com sangue. Já fez a endoscopia.',
    mesa: [
      { tipo: 'tabela', titulo: 'Endoscopia digestiva alta', linhas: [['Achado', 'úlcera duodenal de 8 mm, sem sangramento ativo'], ['Teste da urease', 'positivo (H. pylori)']] },
    ],
    tarefas: [
      'Quais são os fatores etiológicos da úlcera dele?',
      'Prescreva o tratamento completo.',
      'O que fazer com a dor nos joelhos? Oriente o paciente, incluindo os sinais de alarme.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), não dá pra só tomar um omeprazol? Sempre resolve."' },
      { gatilho: 'Se falar em parar o ibuprofeno', fala: '"Mas sem ele eu não consigo trabalhar!"' },
      { gatilho: 'Se falar em antibiótico', fala: '"Antibiótico pra estômago? Isso é infecção?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Duas causas: H. pylori e AINE (ibuprofeno); tabagismo como agravante', pts: 2 },
        { tarefa: 2, item: 'Erradicar H. pylori: IBP 2 vezes ao dia + 2 antimicrobianos por 10 a 14 dias (ex.: lansoprazol + claritromicina + amoxicilina)', pts: 2 },
        { tarefa: 2, item: 'Suspender o AINE e manter IBP para cicatrizar a úlcera', pts: 1 },
        { tarefa: 2, item: 'Prevenir recidiva depende de retirar o fator etiológico; não farmacológico: parar de fumar, reduzir álcool, cafeína e estresse', pts: 1 },
        { tarefa: 3, item: 'Dor nos joelhos: paracetamol, medidas não farmacológicas; se AINE for inevitável, com IBP', pts: 1 },
        { tarefa: 3, item: 'Sinais de sangramento: fezes escurecidas e vômito com sangue, mesmo sem dor intensa → procurar emergência', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar só com IBP sem erradicar o H. pylori', 'Manter o ibuprofeno sem justificativa'],
    falaModelo: [
      { tarefa: 1, texto: 'A úlcera duodenal dele tem duas causas: H. pylori, confirmado pela urease, e o uso crônico de ibuprofeno, que tira a proteção da mucosa ao inibir as prostaglandinas.', tempo: '15 s' },
      { tarefa: 2, texto: 'Faço a erradicação: IBP duas vezes ao dia com dois antimicrobianos, por exemplo lansoprazol, claritromicina e amoxicilina, por 10 a 14 dias. Suspendo o ibuprofeno e mantenho o IBP para cicatrizar. Sem retirar as causas, a úlcera volta. Também oriento parar de fumar e reduzir álcool, café e estresse.', tempo: '40 s' },
      { tarefa: 3, texto: 'Para os joelhos, troco por paracetamol, que tem menor risco para o estômago, e oriento atividade física e controle de peso. Seu Osvaldo, sua úlcera é como um buraco no asfalto aberto por dois motivos: uma bactéria que fica no estômago e o ibuprofeno, que tira a proteção da parede. Se a gente só tapa o buraco com omeprazol e deixa os dois caminhões passando, ele abre de novo. Por isso o antibiótico, de 10 a 14 dias, sem pular dose. Se as fezes ficarem escuras ou vomitar sangue, vá direto ao pronto-socorro. Ficou alguma dúvida?', tempo: '55 s', analogia: 'Buraco no asfalto com dois caminhões passando' },
    ],
    extra: 'Qual é o mecanismo do misoprostol e qual a sua principal restrição? (Análogo de prostaglandina que repõe muco e bicarbonato; causa contrações uterinas, contraindicado na gestação.)',
  },

  // ----------------------------------------------------- FAR-05 · Osteoartrite e escolha do AINE
  {
    id: 'FAR-05', materia: 'farmaco',
    titulo: 'Joelhos inchados em uma paciente hipertensa',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Dona Irene, 69 anos, IMC 32, tem osteoartrite de joelhos há 5 anos. Usa paracetamol 750 mg de 6/6 h há 3 meses, mas a dor piorou e o joelho direito está quente e inchado. Hipertensa em uso de hidroclorotiazida; teve infarto há 4 anos. Nega úlcera prévia. Creatinina 1,1 mg/dL.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exame do joelho direito', linhas: [['Derrame articular', 'moderado'], ['Calor local', 'presente'], ['Crepitação', 'presente'], ['RX', 'redução do espaço articular, osteófitos']] },
    ],
    tarefas: [
      'Ela precisa de um anti-inflamatório? Justifique.',
      'Qual AINE você escolheria (ou evitaria) para o perfil dela, e por quê?',
      'Quais riscos você monitora, e quais medidas não farmacológicas e tópicas você associa?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"A vizinha toma aquele Celebra e diz que é ótimo pro estômago."' },
      { gatilho: 'Se falar em perder peso', fala: '"Com o joelho assim, como vou fazer exercício?"' },
      { gatilho: 'Se falar em pomada', fala: '"Já passei pomada de pimenta, mas no primeiro dia não fez nada."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Sim: falha do paracetamol e sinais inflamatórios (calor, derrame); paracetamol não tem ação anti-inflamatória', pts: 1 },
        { tarefa: 2, item: 'Evitar coxibe: risco cardiovascular alto (infarto prévio, hipertensa)', pts: 2 },
        { tarefa: 2, item: 'Preferir naproxeno (perfil cardiovascular mais seguro entre os AINEs); AINE não seletivo agride a mucosa: considerar IBP', pts: 1 },
        { tarefa: 3, item: 'Monitorar função renal e edema: o AINE inibe prostaglandinas vasodilatadoras renais, efeito que se soma ao diurético', pts: 2 },
        { tarefa: 3, item: 'Perda de peso, atividade física adequada (sem alta intensidade), produtos tópicos; capsaicina exige ≥ 2 semanas de uso', pts: 1 },
        { tarefa: 3, item: 'Refratária: hialuronato intra-articular; incapacidade: artroplastia', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever coxibe a paciente com infarto prévio', 'Não avaliar a função renal com AINE + diurético'],
    falaModelo: [
      { tarefa: 1, texto: 'Sim. Ela falhou com o paracetamol e agora tem sinais inflamatórios, calor e derrame. O paracetamol é analgésico, mas não é anti-inflamatório.', tempo: '15 s' },
      { tarefa: 2, texto: 'Eu evito o coxibe: ele reduz parte do risco gastrointestinal, mas exige cautela no risco cardiovascular, e ela já infartou. Prefiro o naproxeno, o AINE descrito como mais seguro do ponto de vista cardiovascular. Como é não seletivo e agride a mucosa gástrica, considero associar um IBP.', tempo: '30 s' },
      { tarefa: 3, texto: 'Monitoro função renal e edema: o AINE inibe as prostaglandinas que dilatam os vasos do rim, e isso se soma ao diurético. E aqui entra o que mais funciona a longo prazo. Dona Irene, o joelho é como o amortecedor de um carro: cada quilo a mais é carga que ele absorve a cada passo. Perder peso e fazer atividade física adequada para a senhora, sem precisar ser intensa, alivia o amortecedor. A pomada de pimenta funciona, mas só depois de umas duas semanas usando todo dia. Se nada resolver, existe a infiltração e, no fim, a prótese. Ficou claro?', tempo: '60 s', analogia: 'Joelho como amortecedor do carro' },
    ],
    extra: 'Em quanto tempo aparecem o efeito analgésico e o anti-inflamatório dos AINEs? (Analgésico em 1–2 h; anti-inflamatório em 2–3 semanas de uso contínuo.)',
  },

  // ----------------------------------------------------- FAR-06 · Asma: controle da inflamação
  {
    id: 'FAR-06', materia: 'farmaco',
    titulo: 'A bombinha que ele usa todo dia',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Thiago, 22 anos, estudante, asmático desde a infância e com rinite alérgica. A mãe também tem asma. Usa salbutamol spray "quase todo dia", cerca de 5 vezes por semana, e nas últimas semanas acorda à noite com falta de ar e chiado 2 vezes por semana. Nunca usou outro remédio para asma. Piora com poeira e no frio. Teve duas idas ao pronto-socorro neste ano.\n\nAusculta com sibilos esparsos. SatO₂ 97%.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Espirometria', 'obstrução ao fluxo aéreo, com melhora após broncodilatador'], ['Hemograma', 'eosinofilia']] },
    ],
    tarefas: [
      'A asma dele está controlada? Por quê? Qual é a mudança no tratamento?',
      'Explique a diferença entre o salbutamol e o remédio novo: o que cada um faz na asma?',
      'Se o remédio novo não for suficiente, o que associar e como? Ele pergunta se pode trocar a bombinha por comprimido, "que é mais prático": responda.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), a bombinha resolve na hora. Pra que outro remédio?"' },
      { gatilho: 'Se falar em corticoide', fala: '"Corticoide? Vai me deixar inchado?"' },
      { gatilho: 'No final', fala: '"Não dá pra tomar isso em comprimido? É mais prático."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Não controlada: beta-2 de curta ação 4 ou mais vezes por semana e despertares noturnos', pts: 1 },
        { tarefa: 1, item: 'Iniciar corticosteroide inalatório de manutenção (ex.: budesonida), mantendo o beta-2 de curta ação para alívio', pts: 2 },
        { tarefa: 2, item: 'Asma é inflamação crônica das vias aéreas: o tratamento prioriza controlar a inflamação, prevenir sintomas e hospitalizações', pts: 1 },
        { tarefa: 2, item: 'Beta-2 de curta ação: relaxa a musculatura lisa brônquica, alívio imediato, sem tratar a inflamação; corticoide inalatório: reverte a inflamação, sem alívio imediato', pts: 1 },
        { tarefa: 3, item: 'Associar beta-2 de longa ação ao corticoide inalatório, sem aumentar a dose do corticoide (o LABA não trata a inflamação)', pts: 1 },
        { tarefa: 3, item: 'Via inalatória: maior broncosseletividade e menor risco sistêmico; via oral: taquicardia e tremores, reservada a crianças que não conseguem usar o dispositivo', pts: 2 },
      ],
    },
    errosCriticos: ['Manter só o beta-2 de curta ação', 'Prescrever beta-2 de longa ação sem corticoide inalatório'],
    falaModelo: [
      { tarefa: 1, texto: 'Não está controlada: ele usa salbutamol 5 vezes por semana, e 4 ou mais já indica tratamento anti-inflamatório, além de acordar à noite. Inicio corticoide inalatório de manutenção, como a budesonida, e mantenho o salbutamol só para as crises.', tempo: '25 s' },
      { tarefa: 2, texto: 'Thiago, o salbutamol é o bombeiro: abre os brônquios na hora, mas não impede o próximo incêndio. A asma é uma inflamação crônica que fica acesa como brasa. O corticoide inalatório apaga a brasa: não alivia na hora, mas, usado todo dia, mesmo sem sintoma, controla a inflamação e evita crises e idas ao pronto-socorro.', tempo: '40 s', analogia: 'Salbutamol é o bombeiro; corticoide apaga a brasa' },
      { tarefa: 3, texto: 'Se não controlar, associo um beta-2 de longa ação ao corticoide, sem aumentar a dose do corticoide, porque o de longa ação dilata por mais tempo mas não trata a inflamação. Sobre o comprimido: pela bombinha o remédio vai direto aos brônquios, com menos efeitos no resto do corpo; em comprimido dá mais taquicardia e tremor, e fica reservado para crianças que não conseguem usar a bombinha. Faz sentido para você?', tempo: '45 s' },
    ],
    extra: 'Na crise grave sem resposta a várias inalações de beta-2, o que associar? (Brometo de ipratrópio, anticolinérgico, sem aumentar a dose do beta-2.) Quando pensar em omalizumabe? (Anti-IgE: 11 a 50 anos, IgE elevada e asma alérgica grave não controlada com corticoide.)',
  },

  // ----------------------------------------------------- FAR-07 · Rinite alérgica
  {
    id: 'FAR-07', materia: 'farmaco',
    titulo: 'Nariz entupido há meses e o descongestionante',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Sr. Márcio, 45 anos, caminhoneiro, tem espirros em salva, coceira no nariz e nos olhos, coriza clara e nariz entupido, piores ao arrumar a cabine e em contato com poeira. Há 3 semanas usa nafazolina nasal várias vezes por dia, e o nariz "entope mais rápido a cada dia". Tomou dexclorfeniramina e quase dormiu ao volante. É hipertenso, com PA mal controlada.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exame', linhas: [['Mucosa nasal', 'pálida e edemaciada'], ['PA', '156 × 98 mmHg'], ['Teste cutâneo', 'positivo para ácaros']] },
    ],
    tarefas: [
      'Qual é o diagnóstico, e o que está acontecendo com o descongestionante?',
      'Prescreva o tratamento, justificando cada escolha pelo perfil dele.',
      'Explique ao paciente o que aconteceu com o descongestionante e oriente as medidas ambientais.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), sem o spray eu não respiro. Não me tira ele, não."' },
      { gatilho: 'Se falar em corticoide nasal', fala: '"Usei uma vez e não fez nada na hora."' },
      { gatilho: 'Se falar em antialérgico', fala: '"Aquele me deu um sono que quase saí da estrada."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Rinite alérgica persistente (mediada por IgE, ácaros) com conjuntivite associada', pts: 1 },
        { tarefa: 1, item: 'Rinite medicamentosa: uso de descongestionante tópico > 3–5 dias causa congestão rebote', pts: 2 },
        { tarefa: 2, item: 'Suspender a nafazolina; corticosteroide nasal (budesonida, fluticasona ou beclometasona) como base: age na congestão e na inflamação', pts: 2 },
        { tarefa: 2, item: 'Anti-histamínico de 2ª geração (loratadina, fexofenadina, cetirizina): menos sedação, motorista', pts: 1 },
        { tarefa: 2, item: 'Evitar descongestionante sistêmico (hipertensão mal controlada)', pts: 1 },
        { tarefa: 3, item: 'Controle ambiental para reduzir a exposição aos ácaros, complementando o remédio; corticoide nasal é de controle, não de alívio imediato', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o descongestionante tópico', 'Prescrever anti-histamínico de 1ª geração ou descongestionante oral'],
    falaModelo: [
      { tarefa: 1, texto: 'É rinite alérgica persistente, mediada por IgE, com teste positivo para ácaros e conjuntivite associada. E ele desenvolveu rinite medicamentosa: o descongestionante tópico usado por mais de 3 a 5 dias causa congestão rebote.', tempo: '25 s' },
      { tarefa: 2, texto: 'Suspendo a nafazolina e começo corticoide nasal, budesonida ou fluticasona, que é o mais eficaz para a congestão e a inflamação. Se precisar, anti-histamínico de segunda geração, como loratadina ou fexofenadina, que quase não dá sono, essencial para quem dirige. E evito descongestionante oral, porque a pressão dele está alta.', tempo: '35 s' },
      { tarefa: 3, texto: 'Seu Márcio, o spray que o senhor usa é como pegar dinheiro emprestado com juros: alivia agora, mas cobra depois com o nariz mais entupido. Por isso vamos parar com ele. O corticoide nasal é diferente: não é para aliviar na hora, é para controlar a inflamação, usado todo dia. E diminuir o contato com a poeira e os ácaros, em casa e na cabine, ajuda o remédio a funcionar melhor. O que o senhor vai mudar primeiro?', tempo: '45 s', analogia: 'Descongestionante como empréstimo com juros' },
    ],
    extra: 'Qual é o papel do montelucaste? (Antileucotrieno para terapia crônica, sem efeito na crise; útil se asma associada ou sensível a AINE; pode causar cefaleia, insônia e alterações de humor.)',
  },

  // ----------------------------------------------------- FAR-08 · Epilepsia em mulher em idade fértil
  {
    id: 'FAR-08', materia: 'farmaco',
    titulo: 'Segunda crise e o desejo de engravidar',
    local: 'Ambulatório de neurologia', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Bianca, 24 anos, teve duas crises tônico-clônicas generalizadas, uma há 3 meses e outra há 1 semana, ambas ao acordar, após noites sem dormir. Sem febre, álcool ou drogas. Exames gerais normais. Usa anticoncepcional oral combinado e pretende engravidar em 1 ou 2 anos. Uma amiga com epilepsia usa "valproato, que é ótimo".',
    mesa: [
      { tipo: 'tabela', titulo: 'Investigação', linhas: [['EEG', 'descargas generalizadas'], ['Ressonância de crânio', 'normal'], ['Glicemia, sódio, cálcio', 'normais']] },
    ],
    tarefas: [
      'Ela tem epilepsia? Justifique pelos critérios.',
      'Qual droga anticonvulsivante você escolhe, e quais você evita para ela? Justifique.',
      'Oriente a paciente sobre o tratamento, os gatilhos e o planejamento da gravidez.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Quero o mesmo remédio da minha amiga, o valproato."' },
      { gatilho: 'Se falar em gravidez', fala: '"Então eu não vou poder ter filho?"' },
      { gatilho: 'No final', fala: '"Se eu ficar um tempo sem crise, posso parar o remédio?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Sim: 2 crises não provocadas separadas por mais de 24 h (critério de epilepsia)', pts: 1 },
        { tarefa: 1, item: 'Epilepsia generalizada (crise tônico-clônica generalizada, EEG com descarga generalizada)', pts: 1 },
        { tarefa: 2, item: 'Monoterapia com DA de 2ª geração de amplo espectro: levetiracetam (níveis rápidos, poucas interações) ou lamotrigina (titulação lenta, risco de rash/SJS)', pts: 2 },
        { tarefa: 2, item: 'Evitar valproato: alta teratogenicidade (além de ganho de peso, hepatotoxicidade)', pts: 2 },
        { tarefa: 2, item: 'Evitar carbamazepina/oxcarbazepina: indutoras, reduzem o anticoncepcional; carbamazepina pode piorar crises generalizadas', pts: 1 },
        { tarefa: 3, item: 'Gatilhos: privação de sono, álcool; adesão; não suspender por conta própria', pts: 1 },
        { tarefa: 3, item: 'Potencial reprodutivo orienta a escolha: gravidez planejada com a equipe, sem trocar ou parar o remédio por conta própria', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever valproato para mulher que planeja gravidez', 'Não tratar por considerar "crises provocadas"'],
    falaModelo: [
      { tarefa: 1, texto: 'Sim, é epilepsia: duas crises não provocadas, separadas por mais de 24 horas. A privação de sono é um gatilho, não uma causa aguda que explique a crise. É uma epilepsia generalizada, pela crise e pelo EEG.', tempo: '25 s' },
      { tarefa: 2, texto: 'Começo monoterapia com uma droga de segunda geração de amplo espectro: levetiracetam, que atinge nível rápido e quase não tem interações; a lamotrigina é alternativa, mas exige titulação lenta pelo risco de rash. Evito o valproato, que é muito teratogênico, e a carbamazepina e a oxcarbazepina, que reduzem a eficácia do anticoncepcional, e a carbamazepina ainda pode piorar crises generalizadas.', tempo: '40 s' },
      { tarefa: 3, texto: 'Bianca, você pode, sim, ter filhos, com planejamento. O valproato funciona bem, mas pode causar malformações no bebê, por isso não é o melhor para você. O cérebro na epilepsia é como uma rede elétrica com um disjuntor sensível: o remédio deixa o disjuntor mais estável, e noites sem dormir e álcool são sobrecargas que fazem cair a energia. Não pare o remédio por conta própria. Quando decidir engravidar, venha antes, para planejarmos juntos. O que você entendeu sobre como tomar?', tempo: '55 s', analogia: 'Cérebro como rede elétrica com disjuntor sensível' },
    ],
    extra: 'E se fossem crises de ausência numa criança? (Etossuximida, que bloqueia canais de cálcio tipo T; a carbamazepina pode piorar as ausências.)',
  },

  // ----------------------------------------------------- FAR-09 · Neuralgia do trigêmeo e carbamazepina
  {
    id: 'FAR-09', materia: 'farmaco',
    titulo: 'Choque no rosto ao escovar os dentes',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Dona Vera, 45 anos, professora, há 2 meses tem crises de dor em choque, de segundos, no lado direito do rosto. As crises vêm com estímulos leves: escovar os dentes, mastigar, encostar a toalha no rosto e até o vento. Já tomou dipirona, paracetamol e ibuprofeno, sem melhora. Exame neurológico normal entre as crises. Usa anticoncepcional oral combinado. Está cansada, com medo de comer e de dar aula.',
    mesa: [
      { tipo: 'tabela', titulo: 'Avaliação', linhas: [['Dor (escala numérica)', '9/10 nas crises'], ['Sódio', '138 mEq/L'], ['Hemograma', 'normal']] },
    ],
    tarefas: [
      'Que tipo de dor é essa? Por que dipirona, paracetamol e ibuprofeno não funcionaram?',
      'Qual fármaco está indicado e como ele age?',
      'Quais efeitos adversos e interações você orienta, considerando que ela usa anticoncepcional?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"É como um choque elétrico, doutor(a). Tenho medo até de comer."' },
      { gatilho: 'Se falar em carbamazepina', fala: '"Remédio de epilepsia? Mas eu não tenho convulsão!"' },
      { gatilho: 'Se não falar da interação', fala: '"Eu tomo anticoncepcional. Tem algum problema?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Dor neuropática (neuralgia do trigêmeo), com alodinia: dor desencadeada por estímulos não nocivos', pts: 1 },
        { tarefa: 1, item: 'Analgésicos comuns e AINEs agem na dor nociceptiva/inflamatória; a neuropática envolve alteração da via nervosa', pts: 1 },
        { tarefa: 2, item: 'Carbamazepina: fármaco de ação central citado especificamente para a neuralgia do trigêmeo', pts: 2 },
        { tarefa: 2, item: 'Bloqueia canais de Na⁺ no estado inativado, reduzindo disparos repetitivos', pts: 1 },
        { tarefa: 3, item: 'Efeitos adversos: tontura, diplopia, hiponatremia, síndrome de Stevens-Johnson/NET, discrasias sanguíneas', pts: 1 },
        { tarefa: 3, item: 'Forte indutora enzimática: pode alterar o nível do anticoncepcional e reduzir sua eficácia → discutir o método contraceptivo', pts: 2 },
      ],
    },
    errosCriticos: ['Não orientar a interação com o anticoncepcional', 'Insistir em analgésicos comuns e AINEs na dor neuropática'],
    falaModelo: [
      { tarefa: 1, texto: 'É dor neuropática, uma neuralgia do trigêmeo, com alodinia: dor provocada por estímulos que normalmente não doem, como o vento e a toalha. Dipirona, paracetamol e ibuprofeno agem na dor nociceptiva, inflamatória; aqui o problema está na própria via nervosa, por isso não funcionaram.', tempo: '30 s' },
      { tarefa: 2, texto: 'O fármaco indicado é a carbamazepina, de ação central, citada especificamente para a neuralgia do trigêmeo. Ela bloqueia os canais de sódio no estado inativado e reduz os disparos repetitivos do nervo.', tempo: '20 s' },
      { tarefa: 3, texto: 'Oriento que pode dar tontura e visão dupla, e acompanho sódio e hemograma. Manchas, bolhas na pele ou febre exigem procurar atendimento, pelo risco de Stevens-Johnson. E ela é forte indutora enzimática: pode reduzir o efeito do anticoncepcional, então precisamos conversar sobre o método. Dona Vera, o nervo do seu rosto está como um fio desencapado: qualquer toque dá choque. Esse remédio também é usado na epilepsia porque acalma os disparos do nervo, e não porque a senhora tenha convulsão. O que a senhora entendeu dos cuidados?', tempo: '60 s', analogia: 'Nervo como fio desencapado' },
    ],
    extra: 'Qual coadjuvante central é usado de forma geral no controle da dor? (Amitriptilina.) Qual anticonvulsivante é útil na dor neuropática, apesar de fraco como anticonvulsivante? (Gabapentina.)',
  },

  // ----------------------------------------------------- FAR-10 · DRGE
  {
    id: 'FAR-10', materia: 'farmaco',
    titulo: 'Queimação depois do almoço e ao deitar',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Sr. Renato, 41 anos, motorista de aplicativo, tem queimação atrás do esterno e gosto ácido na boca há 4 meses, cerca de 4 vezes por semana. Piora depois de almoços com feijoada e frituras e quando deita logo após o jantar, que costuma ser tarde. Fuma meio maço por dia. Toma antiácido líquido "o dia inteiro". Há 2 semanas tentou mudar a alimentação, sem melhora. Nega vômitos ou sangramento e não emagreceu.',
    mesa: [],
    tarefas: [
      'Qual é o diagnóstico e quais fatores de risco ele tem? Que complicações a doença pode trazer se não for tratada?',
      'Por que o antiácido não basta? Qual classe você escolhe agora, por quê, e como ela age?',
      'Oriente as medidas não farmacológicas. Ele pergunta se pode tomar domperidona junto: responda.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"O antiácido resolve na hora, mas volta tudo depois."' },
      { gatilho: 'Se falar em parar de fumar', fala: '"O cigarro ajuda a fazer a digestão, doutor(a)."' },
      { gatilho: 'No final', fala: '"Posso tomar aquele remédio de enjoo junto, a domperidona?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Doença do refluxo gastroesofágico: pirose e regurgitação com piora pós-prandial e postural', pts: 1 },
        { tarefa: 1, item: 'Fatores de risco: dieta gordurosa, tabagismo e postura após as refeições (deitar logo depois de comer)', pts: 1 },
        { tarefa: 1, item: 'Complicações: sangramento esofágico com anemia e perda de peso; faringite, rouquidão e piora de asma', pts: 1 },
        { tarefa: 2, item: 'Antiácido: neutralização química, alívio rápido, mas não é o tratamento definitivo', pts: 1 },
        { tarefa: 2, item: 'Sintomas persistentes após 2 semanas de medidas não farmacológicas → farmacoterapia', pts: 1 },
        { tarefa: 2, item: 'IBP (ex.: omeprazol): bloqueio irreversível da bomba de prótons, inibição ácida mais acentuada que o antagonista H2', pts: 2 },
        { tarefa: 3, item: 'Medidas: evitar refeições gordurosas, parar de fumar, não deitar logo após comer', pts: 1 },
        { tarefa: 3, item: 'Procinético (antagonista dopaminérgico) não é necessário: pode causar efeitos extrapiramidais e elevar a prolactina', pts: 1 },
      ],
    },
    errosCriticos: ['Manter só antiácido como tratamento', 'Não orientar as medidas não farmacológicas'],
    falaModelo: [
      { tarefa: 1, texto: 'É doença do refluxo gastroesofágico: pirose e regurgitação, piores depois de refeição gordurosa e ao deitar. Os fatores de risco dele são a dieta gordurosa, o cigarro e deitar logo depois de comer. Sem tratamento, pode haver sangramento do esôfago, com anemia e perda de peso, além de faringite, rouquidão e piora de asma.', tempo: '35 s' },
      { tarefa: 2, texto: 'O antiácido só neutraliza o ácido que já está lá: alivia rápido, mas não trata a doença. Como as medidas por 2 semanas não bastaram, começo um inibidor da bomba de prótons, como o omeprazol, que bloqueia de forma irreversível a bomba de prótons e reduz muito mais a produção de ácido do que o antagonista H2.', tempo: '30 s' },
      { tarefa: 3, texto: 'Seu Renato, entre o estômago e o esôfago existe uma passagem que deveria ficar fechada, como a tampa de uma panela de pressão. Comida gordurosa, cigarro e deitar de estômago cheio fazem o ácido subir pela tampa. Então: refeições menos gordurosas, parar de fumar e não deitar logo depois de comer. A domperidona não é necessária e pode causar movimentos involuntários e alterar hormônios. Me conta como vai ficar o seu jantar?', tempo: '50 s', analogia: 'Válvula como a tampa da panela de pressão' },
    ],
    extra: 'Quais os efeitos dos antiácidos? (Alumínio constipa; magnésio causa diarreia osmótica.) E da supressão ácida prolongada pelo IBP? (Pode alterar a flora intestinal e favorecer diarreia.)',
  },

  // ----------------------------------------------------- FAR-11 · Escolha do analgésico
  {
    id: 'FAR-11', materia: 'farmaco',
    titulo: 'Alérgica à dipirona, com o rim fraco e com dor',
    local: 'Enfermaria de cirurgia', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Dona Beatriz, 72 anos, está no 1º dia de pós-operatório de uma herniorrafia. Refere dor moderada na ferida, que dá nota 6 de 0 a 10. Tem alergia a dipirona e a AAS (urticária e falta de ar). Tem doença renal crônica leve. Toma clonazepam à noite há anos. O interno sugere "um anti-inflamatório forte, porque é dor de cirurgia".',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados', linhas: [['Dor (escala numérica)', '6/10'], ['Creatinina', '1,6 mg/dL'], ['Alergias', 'dipirona e AAS']] },
    ],
    tarefas: [
      'Como avaliar a intensidade da dor? Que escalas existem e quando usar cada uma?',
      'Qual analgesia você prescreve? Por que não o anti-inflamatório, nem a dipirona?',
      'Quais efeitos do opioide preocupam nesta paciente idosa que usa clonazepam?',
      'Explique o plano à paciente.',
    ],
    ator: [
      { gatilho: 'Interno, ao começar', fala: '"Um anti-inflamatório forte não resolve? É dor de cirurgia."' },
      { gatilho: 'Paciente', fala: '"Doutor(a), remédio forte me deixa muito tonta."' },
      { gatilho: 'Se falar em codeína', fala: '"Codeína não é droga? Vou ficar viciada?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Escala numérica (NRS, 0 a 10), verbal (VRS, categorias) e analógica visual (VAS, marcação contínua, útil com dificuldade de comunicação verbal)', pts: 1 },
        { tarefa: 1, item: 'Dor aguda pós-operatória: função protetora, remite com a retirada do estímulo, sinais autonômicos', pts: 1 },
        { tarefa: 2, item: 'Codeína + paracetamol (dor moderada: opioide de média potência + não opioide)', pts: 2 },
        { tarefa: 2, item: 'Evitar AINE (risco renal e de sangramento) e dipirona/AAS (alergia)', pts: 1 },
        { tarefa: 3, item: 'Sedação mais fácil em idosos (sonolência, confusão), constipação (peristaltismo reduzido), depressão respiratória dose-dependente', pts: 1 },
        { tarefa: 3, item: 'Sedativo associado (clonazepam) intensifica a depressão do SNC', pts: 1 },
        { tarefa: 4, item: 'Explicou o plano e os sinais para avisar (sonolência excessiva, constipação), desfazendo o medo de vício', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever AINE na doença renal', 'Prescrever dipirona apesar da alergia'],
    falaModelo: [
      { tarefa: 1, texto: 'Uso uma escala: a numérica, de 0 a 10, como ela já deu nota 6; a verbal, por categorias como leve, moderada e intensa; ou a analógica visual, uma marcação numa linha, útil quando o paciente tem dificuldade de se comunicar. É uma dor aguda, protetora, que melhora com a cicatrização.', tempo: '30 s' },
      { tarefa: 2, texto: 'Para dor moderada, associo opioide de média potência ao não opioide: codeína com paracetamol. Evito o anti-inflamatório, pelo risco para o rim e de sangramento, e a dipirona e o AAS, pela alergia.', tempo: '25 s' },
      { tarefa: 3, texto: 'No idoso, o opioide dá sedação com mais facilidade, com sonolência e até confusão, causa constipação, porque reduz o peristaltismo, e pode deprimir a respiração de forma dose-dependente. Com o clonazepam junto, a depressão do sistema nervoso se soma, então acompanho de perto.', tempo: '30 s' },
      { tarefa: 4, texto: 'Dona Beatriz, vou usar dois remédios juntos, que funcionam como dois remadores no mesmo barco: cada um rema de um lado, e juntos levam a dor embora com doses menores. Não vou usar a dipirona, por causa da sua alergia, nem anti-inflamatório, para proteger o seu rim. Usado por poucos dias e com acompanhamento, a codeína não vai viciar a senhora. Se ficar muito sonolenta ou com o intestino preso, me avise. Ficou claro?', tempo: '40 s', analogia: 'Dois remadores no mesmo barco' },
    ],
    extra: 'Em quem o paracetamol exige cautela? (Etilistas, pelo risco hepático com elevação de transaminases.) Quanto vale a codeína em relação à morfina? (Cerca de 10%.)',
  },

  // ----------------------------------------------------- FAR-12 · AINE no paciente com risco gastrointestinal
  {
    id: 'FAR-12', materia: 'farmaco',
    titulo: 'Joelho inflamado e uma úlcera que já sangrou',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Sr. Nelson, 54 anos, motorista, tem osteoartrite de joelho e agora está com o joelho quente e inchado, sem melhora com paracetamol. Há 2 anos teve uma úlcera gástrica que sangrou e precisou de internação. Não é hipertenso, nunca teve infarto nem AVC, não fuma. A esposa dele usa varfarina e "vive tomando o ibuprofeno dele" para dor de cabeça.',
    mesa: [
      { tipo: 'tabela', titulo: 'Perfil de risco', linhas: [['Risco gastrointestinal', 'alto (úlcera com sangramento prévio)'], ['Risco cardiovascular', 'baixo'], ['Paracetamol', 'sem resposta']] },
    ],
    tarefas: [
      'Por que os AINEs lesam a mucosa gástrica? Diferencie não seletivos e seletivos da COX-2.',
      'Qual anti-inflamatório você escolhe para ele, e por quê?',
      'Em que paciente o coxibe deveria ser evitado, e o que usar nesse caso?',
      'O que dizer sobre a esposa, que usa varfarina e toma ibuprofeno?',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Doutor(a), tenho medo de sangrar de novo."' },
      { gatilho: 'Na tarefa 4', fala: '"Minha esposa toma o meu ibuprofeno quase todo dia. Tem problema?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'AINEs inibem prostaglandinas que protegem a mucosa; não seletivos (COX-1 e COX-2) têm maior risco gastrointestinal; seletivos COX-2 reduzem parte desse risco', pts: 2 },
        { tarefa: 2, item: 'Coxibe: indicado com alto risco gastrointestinal e baixo risco cardiovascular', pts: 2 },
        { tarefa: 3, item: 'Evitar coxibe em hipertenso mal controlado e com risco de AVC ou infarto; preferir naproxeno (mais seguro do ponto de vista cardiovascular)', pts: 1 },
        { tarefa: 4, item: 'AINE + anticoagulante: evitar, pelo risco de hemorragia; coxibes têm menor risco hemorrágico que os não seletivos nesse contexto', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever AINE não seletivo sem considerar a úlcera com sangramento', 'Não alertar sobre AINE com varfarina'],
    falaModelo: [
      { tarefa: 1, texto: 'Os AINEs inibem as prostaglandinas que protegem a mucosa do estômago. Os não seletivos inibem a COX-1 e a COX-2 e têm maior risco gastrointestinal; os seletivos da COX-2, os coxibes, reduzem parte desse risco.', tempo: '25 s' },
      { tarefa: 2, texto: 'Para ele, escolho um coxibe: tem alto risco gastrointestinal, pela úlcera que sangrou, e baixo risco cardiovascular, que é exatamente o perfil em que o coxibe está indicado.', tempo: '20 s' },
      { tarefa: 3, texto: 'O coxibe deve ser evitado em hipertensos mal controlados e em quem tem risco de AVC ou infarto. Nesses casos, o naproxeno é descrito como o AINE mais seguro do ponto de vista cardiovascular.', tempo: '20 s' },
      { tarefa: 4, texto: 'Seu Nelson, a sua esposa não deve tomar ibuprofeno junto com a varfarina: os dois juntos aumentam muito o risco de sangramento. É como juntar dois freios soltos na mesma ladeira. Peça para ela conversar com o médico dela sobre a dor de cabeça. E para o senhor, o remédio que vou passar protege mais o estômago. Se notar fezes escuras ou vômito com sangue, procure atendimento na hora. Ficou claro?', tempo: '40 s', analogia: 'Dois freios soltos na mesma ladeira' },
    ],
    extra: 'Em quanto tempo aparecem o efeito analgésico e o anti-inflamatório do AINE? (Analgésico em 1–2 h; anti-inflamatório em 2–3 semanas de uso contínuo.)',
  },

  // ----------------------------------------------------- FAR-13 · Crise de asma grave
  {
    id: 'FAR-13', materia: 'farmaco',
    titulo: 'Três inalações e o chiado não passa',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Júlia, 19 anos, asmática, chega com falta de ar há 6 horas, depois de limpar um quarto empoeirado. Já fez 3 inalações de salbutamol no pronto-socorro, sem melhora. Fala frases curtas, está usando a musculatura acessória. Usa só a bombinha de salbutamol, "quase todo dia", e nunca usou outro remédio. A mãe pergunta se não é melhor dobrar a dose da bombinha.\n\nFR 30 irpm · FC 120 bpm · SatO₂ 91% · sibilos difusos.',
    mesa: [],
    tarefas: [
      'O que associar agora? Por que não simplesmente aumentar a dose do salbutamol?',
      'Explique o mecanismo de cada broncodilatador.',
      'Por que a teofilina tem papel restrito?',
      'Por que essa crise aconteceu? O que muda no tratamento depois da alta? Explique à mãe.',
    ],
    ator: [
      { gatilho: 'Mãe, ao começar', fala: '"Não é melhor dobrar a dose da bombinha?"' },
      { gatilho: 'Na tarefa 4', fala: '"Ela usa a bombinha todo dia, então está tratando, né?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Broncoespasmo grave sem resposta ao beta-2: associar brometo de ipratrópio, sem aumentar a dose do beta-2', pts: 2 },
        { tarefa: 2, item: 'Beta-2 agonista: relaxa a musculatura lisa brônquica (e estabiliza mastócitos) · Ipratrópio: anticolinérgico, mecanismo distinto', pts: 1 },
        { tarefa: 3, item: 'Teofilina: baixo índice terapêutico (convulsões, palpitações, morte súbita em doses altas); restrita quando corticoide e cromoglicato são insuficientes', pts: 1 },
        { tarefa: 4, item: 'Uso de beta-2 de curta ação ≥ 4 vezes por semana indica tratamento anti-inflamatório; a inflamação crônica não tratada leva a exacerbações', pts: 1 },
        { tarefa: 4, item: 'Após a alta: corticosteroide inalatório de manutenção; salbutamol só para alívio; controle ambiental (gatilho: poeira)', pts: 1 },
      ],
    },
    errosCriticos: ['Apenas repetir ou dobrar o beta-2 de curta ação', 'Dar alta sem iniciar corticoide inalatório de manutenção'],
    falaModelo: [
      { tarefa: 1, texto: 'É um broncoespasmo grave que não respondeu a três inalações de beta-2. Associo o brometo de ipratrópio, que tem outro mecanismo, em vez de aumentar a dose do salbutamol.', tempo: '20 s' },
      { tarefa: 2, texto: 'O salbutamol, beta-2 agonista, relaxa a musculatura lisa dos brônquios. O ipratrópio é anticolinérgico: age por outra via, e por isso os dois se somam.', tempo: '20 s' },
      { tarefa: 3, texto: 'A teofilina tem baixo índice terapêutico: em doses altas pode causar convulsões, palpitações e até morte súbita. Por isso fica restrita a quando corticoide e cromoglicato não bastam.', tempo: '20 s' },
      { tarefa: 4, texto: 'A crise aconteceu porque a asma é uma inflamação crônica que nunca foi tratada: usar salbutamol 4 ou mais vezes por semana já indica tratamento anti-inflamatório. Na alta, inicio corticoide inalatório todos os dias. Mãe, a bombinha de salbutamol é como apagar o fogo com um balde; o corticoide é tirar a lenha da fogueira. Sem tirar a lenha, o fogo volta, e a poeira foi o fósforo. Vamos começar o remédio de manutenção e evitar a poeira. Ficou claro?', tempo: '45 s', analogia: 'Balde no fogo × tirar a lenha da fogueira' },
    ],
    extra: 'Quando usar o beta-2 por via oral? (Principalmente em crianças que não conseguem usar o dispositivo; dá mais taquicardia e tremores.)',
  },

  // ----------------------------------------------------- FAR-14 · Osteoporose induzida por corticoide
  {
    id: 'FAR-14', materia: 'farmaco',
    titulo: 'A fratura na coluna que não doeu',
    local: 'Ambulatório de reumatologia', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Dona Sônia, 58 anos, tem artrite reumatoide e usa prednisona 15 mg/dia há 1 ano e meio. Num raio-X de tórax feito por outro motivo, apareceu uma fratura por compressão numa vértebra, sem que ela tivesse sentido dor. Ela pergunta: "Como eu quebrei a coluna sem cair?".',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['RX de coluna', 'fratura vertebral por compressão em T12'], ['Densitometria (DEXA)', 'compatível com osteoporose']] },
    ],
    tarefas: [
      'Como o corticoide causa osteoporose? Por que a vértebra é um local típico de fratura?',
      'Qual é a conduta?',
      'Como acompanhar o tratamento?',
      'Cite outros medicamentos que causam osteoporose secundária e responda à paciente.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Como eu quebrei a coluna sem cair e sem dor?"' },
      { gatilho: 'Se falar em reduzir a prednisona', fala: '"Mas sem ela a artrite piora!"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Corticoide inibe osteoblastos e estimula osteoclastos', pts: 2 },
        { tarefa: 1, item: 'Osso trabecular (vértebras), mais poroso e metabolicamente ativo, é mais sensível à perda; cerca de 2/3 das fraturas vertebrais são assintomáticas', pts: 1 },
        { tarefa: 2, item: 'Reduzir a dose do corticoide quando possível; bisfosfonato (indicado também na osteoporose por glicocorticoide); cálcio e vitamina D; exercício', pts: 2 },
        { tarefa: 3, item: 'DEXA periódica, novas fraturas, dor óssea, sintomas gastrointestinais da medicação e adesão', pts: 1 },
        { tarefa: 4, item: 'Heparina, levotiroxina em excesso, fenitoína e fenobarbital (comprometem a vitamina D)', pts: 1 },
      ],
    },
    errosCriticos: ['Não tratar a osteoporose por a fratura ser assintomática', 'Suspender bruscamente o corticoide sem avaliar a doença de base'],
    falaModelo: [
      { tarefa: 1, texto: 'O corticoide inibe os osteoblastos, que formam osso, e estimula os osteoclastos, que reabsorvem. A vértebra é rica em osso trabecular, mais poroso e metabolicamente ativo, que sente mais a perda; e cerca de dois terços das fraturas vertebrais não dão sintomas.', tempo: '30 s' },
      { tarefa: 2, texto: 'Avalio com o reumatologista reduzir a prednisona para a menor dose possível. Associo bisfosfonato, que também é indicado na osteoporose por corticoide, cálcio e vitamina D, e exercício de força.', tempo: '25 s' },
      { tarefa: 3, texto: 'Acompanho com densitometria periódica, pergunto por novas fraturas, dor óssea, sintomas digestivos do remédio e se ela está conseguindo tomar direito.', tempo: '20 s' },
      { tarefa: 4, texto: 'Outros remédios que causam osteoporose: heparina, excesso de levotiroxina, fenitoína e fenobarbital. Dona Sônia, o corticoide é muito importante para a sua artrite, mas ele age no osso como cupim na madeira: por fora parece tudo bem, mas por dentro vai ficando oco, até que quebra sem precisar de queda. Por isso vamos reforçar o osso com o tratamento e usar a menor dose possível do corticoide. O que a senhora achou?', tempo: '45 s', analogia: 'Corticoide como cupim na madeira' },
    ],
    extra: 'Que alternativa existe para quem não tolera o bisfosfonato oral? (Calcitonina intranasal; outras: denosumabe, que bloqueia o RANKL, e raloxifeno.)',
  },

  // ----------------------------------------------------- FAR-15 · Úlcera por AINE
  {
    id: 'FAR-15', materia: 'farmaco',
    titulo: 'A úlcera do anti-inflamatório da cólica',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Adriana, 34 anos, usa naproxeno quase todos os dias há 6 meses, por dores de cabeça e cólicas. Há 1 mês tem dor epigástrica em queimação. A endoscopia mostrou uma úlcera gástrica; a pesquisa de H. pylori foi negativa. Ela quer engravidar no próximo ano e pergunta se pode continuar com o naproxeno, "porque sem ele não aguento a cólica".',
    mesa: [
      { tipo: 'tabela', titulo: 'Endoscopia', linhas: [['Achado', 'úlcera gástrica de 1 cm, sem sangramento ativo'], ['H. pylori', 'negativo']] },
    ],
    tarefas: [
      'Qual é a causa da úlcera e por que o AINE causa lesão? Qual a diferença entre gastrite e úlcera?',
      'Qual é o tratamento? Como o sucralfato se soma ao IBP?',
      'Se ela precisar continuar com o AINE, como proteger a mucosa? O misoprostol é uma boa opção para ela?',
      'Oriente os sinais de alarme e responda à pergunta sobre o naproxeno.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Sem o naproxeno eu não aguento a cólica."' },
      { gatilho: 'Se falar em misoprostol', fala: '"E esse remédio tem problema para quem quer engravidar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Úlcera por AINE: inibição das prostaglandinas que protegem a mucosa · Úlcera penetra a camada muscular da mucosa; gastrite é mais superficial', pts: 1 },
        { tarefa: 2, item: 'Retirar o fator etiológico (suspender o AINE) + IBP para cicatrização; sem retirar a causa, a úlcera recidiva', pts: 2 },
        { tarefa: 2, item: 'Sucralfato: barreira aderente sobre a mucosa lesada (citoproteção local, absorção mínima); mecanismo complementar ao IBP', pts: 1 },
        { tarefa: 3, item: 'Proteção com IBP ou misoprostol (repõe as prostaglandinas: muco e bicarbonato)', pts: 1 },
        { tarefa: 3, item: 'Misoprostol causa contrações uterinas: cautela em mulher em idade fértil que planeja gravidez', pts: 1 },
        { tarefa: 4, item: 'Sinais de sangramento: fezes escurecidas e vômito com sangue, mesmo sem dor intensa → procurar emergência', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o naproxeno sem proteção', 'Indicar misoprostol sem alertar sobre o efeito uterino'],
    falaModelo: [
      { tarefa: 1, texto: 'A causa é o naproxeno: o AINE inibe as prostaglandinas que protegem a mucosa do estômago. A úlcera é mais profunda, penetra a camada muscular da mucosa; a gastrite é uma lesão mais superficial.', tempo: '25 s' },
      { tarefa: 2, texto: 'O tratamento é retirar a causa, suspendendo o AINE, e usar IBP, que reduz muito a secreção ácida e favorece a cicatrização. Sem tirar a causa, a úlcera volta. O sucralfato pode se somar: forma uma barreira aderente sobre a lesão, quase sem ser absorvido; é outro mecanismo, complementar ao IBP.', tempo: '35 s' },
      { tarefa: 3, texto: 'Se o AINE for indispensável, protejo a mucosa com IBP ou com misoprostol, que repõe as prostaglandinas e estimula muco e bicarbonato. Mas o misoprostol provoca contrações uterinas, então não é uma boa opção para quem quer engravidar.', tempo: '30 s' },
      { tarefa: 4, texto: 'Adriana, o naproxeno é como um guarda-chuva que, ao mesmo tempo que protege da chuva da dor, fura o telhado do estômago. Por enquanto, vamos parar com ele e tratar a úlcera; para a cólica, conversamos sobre outras opções. Se as fezes ficarem escuras ou vomitar sangue, mesmo sem dor forte, vá ao pronto-socorro. Ficou alguma dúvida?', tempo: '40 s', analogia: 'Guarda-chuva que fura o telhado' },
    ],
    extra: 'Quais são as três formas comuns de úlcera péptica? (Associada ao H. pylori, aos AINEs e ao estresse.) Que medidas não farmacológicas valem para todas? (Reduzir estresse, parar de fumar, reduzir álcool e cafeína.)',
  },

  // ----------------------------------------------------- FAR-16 · Crise de ausência
  {
    id: 'FAR-16', materia: 'farmaco',
    titulo: 'A menina que "desliga" na aula',
    local: 'Ambulatório de neuropediatria', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Ana, 7 anos, é trazida pelos pais porque a professora diz que ela "desliga" várias vezes por dia: para o que está fazendo, fica com o olhar fixo por alguns segundos e depois volta à atividade como se nada tivesse acontecido, sem lembrar do episódio. A escola sugeriu que fosse "déficit de atenção". Nunca teve convulsão. O EEG confirmou crises de ausência típicas.',
    mesa: [],
    tarefas: [
      'Diferencie crise epiléptica, convulsão e epilepsia. Como se classifica a crise da Ana?',
      'Qual é o fármaco de escolha e como ele age?',
      'Que anticonvulsivante pode piorar esse tipo de crise? E qual tem amplo espectro?',
      'Explique aos pais, que acham que "epilepsia é quando a pessoa se debate".',
    ],
    ator: [
      { gatilho: 'Pai, ao começar', fala: '"Mas ela nunca se debateu. Isso é epilepsia mesmo?"' },
      { gatilho: 'Mãe', fala: '"A escola disse que é déficit de atenção."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Crise epiléptica: evento por atividade neuronal excessiva/hipersincrônica · Convulsão: só a manifestação motora · Epilepsia: predisposição persistente', pts: 1 },
        { tarefa: 1, item: 'Crise de início generalizado, não motora: ausência típica (parada breve, olhar fixo, retorno rápido)', pts: 1 },
        { tarefa: 2, item: 'Etossuximida: fármaco de escolha na ausência típica; bloqueia canais de cálcio tipo T', pts: 2 },
        { tarefa: 3, item: 'Carbamazepina pode piorar crises de ausência; valproato tem amplo espectro (focais e generalizadas)', pts: 1 },
        { tarefa: 4, item: 'Explicou que muitas crises não têm convulsão e que a classificação orienta o remédio', pts: 1 },
      ],
    },
    errosCriticos: ['Atribuir o quadro a déficit de atenção sem considerar a crise de ausência', 'Prescrever carbamazepina'],
    falaModelo: [
      { tarefa: 1, texto: 'Crise epiléptica é o evento causado por atividade neuronal excessiva e sincronizada. Convulsão é só a manifestação motora, que muitas crises não têm. Epilepsia é a predisposição persistente para ter crises. A da Ana é uma crise de início generalizado, não motora: ausência típica, com parada breve, olhar fixo e retorno rápido.', tempo: '35 s' },
      { tarefa: 2, texto: 'O fármaco de escolha na ausência típica é a etossuximida, que bloqueia os canais de cálcio tipo T.', tempo: '15 s' },
      { tarefa: 3, texto: 'A carbamazepina pode piorar as crises de ausência; por isso a classificação é tão importante. O valproato tem amplo espectro, para crises focais e generalizadas.', tempo: '20 s' },
      { tarefa: 4, texto: 'Pai e mãe, epilepsia não é só quando a pessoa se debate. No cérebro da Ana, por alguns segundos, é como se alguém apertasse o botão de pausa de um filme: ela para, e depois o filme continua. Por isso parece desatenção. O remédio certo para esse tipo de crise ajuda a evitar essas pausas, e escolher o tipo certo importa, porque alguns remédios podem piorar. O que vocês querem perguntar?', tempo: '40 s', analogia: 'Botão de pausa no filme' },
    ],
    extra: 'Quando uma única crise já permite diagnosticar epilepsia? (Crise não provocada com risco de recorrência ≥ 60% em 10 anos, ou síndrome epiléptica definida; o critério clássico é de 2 crises não provocadas separadas por mais de 24 h.)',
  },

  // ----------------------------------------------------- FAR-17 · Epilepsia sem controle
  {
    id: 'FAR-17', materia: 'farmaco',
    titulo: 'As crises continuam com a carbamazepina',
    local: 'Ambulatório de neurologia', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Sr. Wilson, 40 anos, tem epilepsia focal há 3 anos. Usa carbamazepina desde o diagnóstico, já na maior dose que tolera, e confirma que toma certinho. Ainda tem duas crises por mês. Está com tontura e visão dupla. Bebe nos fins de semana e dorme pouco por trabalhar em turnos. Pergunta se "não existe um remédio mais moderno".',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Sódio', '131 mEq/L'], ['Adesão', 'confirmada pela família'], ['Ressonância', 'lesão focal antiga']] },
    ],
    tarefas: [
      'Quais efeitos adversos da carbamazepina ele apresenta? Quais outros precisam ser lembrados?',
      'Qual é o próximo passo, segundo o algoritmo de tratamento? E se falharem duas monoterapias?',
      'Diferencie as três gerações de anticonvulsivantes e cite uma opção de 2ª geração com seu mecanismo.',
      'Quais gatilhos ele precisa evitar? Explique ao paciente.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Não existe um remédio mais moderno?"' },
      { gatilho: 'Na tarefa 4', fala: '"Mas é só uma cervejinha no fim de semana."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Tontura, diplopia e hiponatremia (Na 131); lembrar SJS/NET, discrasias sanguíneas e forte indução enzimática (interações)', pts: 1 },
        { tarefa: 2, item: 'Falha da monoterapia na maior dose tolerada → trocar por outra droga, preferindo mecanismo diferente', pts: 1 },
        { tarefa: 2, item: 'Falha de duas monoterapias → politerapia racional; farmacorresistência (20–35%) → centro especializado', pts: 1 },
        { tarefa: 3, item: '1ª geração: eficaz, mas trabalhosa (interações, índice terapêutico estreito) · 2ª: eficácia semelhante, melhor tolerabilidade, em geral primeira escolha · 3ª: uso mais seletivo', pts: 1 },
        { tarefa: 3, item: 'Ex.: levetiracetam (liga-se à SV2A, poucas interações, eliminação renal; efeitos comportamentais) ou lamotrigina (canais de Na⁺, titulação lenta, risco de rash)', pts: 1 },
        { tarefa: 4, item: 'Gatilhos: privação de sono, álcool, estresse; explicou o plano sem jargão', pts: 1 },
      ],
    },
    errosCriticos: ['Associar uma segunda droga sem antes tentar outra monoterapia', 'Não reconhecer a hiponatremia como efeito da carbamazepina'],
    falaModelo: [
      { tarefa: 1, texto: 'Ele tem tontura, visão dupla e hiponatremia, com sódio de 131, efeitos da carbamazepina. Também é preciso lembrar a síndrome de Stevens-Johnson, as alterações no sangue e que ela é forte indutora enzimática, com muitas interações.', tempo: '25 s' },
      { tarefa: 2, texto: 'Ele falhou na monoterapia, já na maior dose tolerada e com boa adesão. O próximo passo é trocar por outra droga, de preferência com mecanismo diferente. Se falharem duas monoterapias, penso em politerapia racional; e, se continuar sem controle, é farmacorresistência, que atinge 20 a 35% dos pacientes, e encaminho a um centro especializado.', tempo: '40 s' },
      { tarefa: 3, texto: 'As de 1ª geração são eficazes, mas trabalhosas, com muitas interações e faixa terapêutica estreita. As de 2ª têm eficácia parecida, são mais bem toleradas e em geral são a primeira escolha. As de 3ª têm uso mais seletivo. Uma opção é o levetiracetam, que se liga à proteína SV2A, tem poucas interações e eliminação renal, mas pode causar irritabilidade.', tempo: '40 s' },
      { tarefa: 4, texto: 'Seu Wilson, existe, sim, e vamos trocar. Mas o remédio é só parte do caminho: dormir pouco e beber funcionam como vento forte numa vela acesa, a chama apaga com mais facilidade. Tentar regular o sono e evitar o álcool ajuda o remédio a funcionar. Combinado?', tempo: '30 s', analogia: 'Vento forte numa vela acesa' },
    ],
    extra: 'Por que a lamotrigina é atrativa no idoso? (Poucos efeitos cognitivos.) Que droga de 3ª geração age na inativação lenta dos canais de sódio? (Lacosamida.)',
  },

  // ----------------------------------------------------- FAR-18 · Fracasso terapêutico no idoso polimedicado
  {
    id: 'FAR-18', materia: 'farmaco',
    titulo: 'A pressão que "não responde a nenhum remédio"',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Sr. Olavo, 78 anos, viúvo, mora sozinho. A pressão continua alta apesar de três anti-hipertensivos, e o cardiologista anterior "já ia acrescentar o quarto". Ele traz uma sacola com as caixas. Ao conversar: toma a losartana, prescrita de 12 em 12 horas, "uma vez, quando lembra"; parou a hidroclorotiazida por conta própria porque "fazia urinar muito"; e toma o anlodipino junto com o da esposa falecida, de outra dose, "para não desperdiçar". A receita anterior não tinha orientações de uso.',
    mesa: [
      { tipo: 'tabela', titulo: 'Prescrição anterior', linhas: [['Losartana 50 mg', '12/12 h'], ['Hidroclorotiazida 25 mg', '1x/dia'], ['Anlodipino 5 mg', '1x/dia']] },
    ],
    tarefas: [
      'Cite as causas clássicas de fracasso terapêutico. Quais estão presentes aqui?',
      'Quais passos da prescrição racional falharam?',
      'Qual parte da receita estava faltando, e o que ela deve conter?',
      'Antes de acrescentar o quarto remédio, o que você faz? Oriente o paciente.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Nenhum remédio funciona pra mim, doutor(a)."' },
      { gatilho: 'Se falar no diurético', fala: '"Aquele me fazia levantar toda hora pra urinar."' },
      { gatilho: 'No final', fala: '"Eu me perco com tanta caixa."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Causas: seleção imprópria, baixa adesão, dose ou intervalo impróprios, erro diagnóstico, doença simultânea, interações, fatores ambientais ou genéticos', pts: 1 },
        { tarefa: 1, item: 'Aqui: baixa adesão (intervalo irregular, interrupção não orientada) e dose imprópria (anlodipino de outra dose)', pts: 2 },
        { tarefa: 2, item: 'Passo 5 (informar, instruir e recomendar) e passo 6 (monitorizar, inclusive reavaliar antes de trocar ou acrescentar)', pts: 1 },
        { tarefa: 3, item: 'Faltava a adscrição: instruções de uso e recomendações ao paciente', pts: 1 },
        { tarefa: 4, item: 'Corrigir a adesão antes de acrescentar fármaco; instruções claras e medidas não farmacológicas favorecem a adesão', pts: 1 },
      ],
    },
    errosCriticos: ['Acrescentar um quarto anti-hipertensivo sem avaliar a adesão', 'Não investigar como o paciente toma os remédios'],
    falaModelo: [
      { tarefa: 1, texto: 'As causas clássicas de fracasso terapêutico são seleção imprópria, baixa adesão, dose ou intervalo impróprios, erro de diagnóstico, doença simultânea, interações e fatores ambientais ou genéticos. Aqui há baixa adesão, com a losartana em intervalo irregular e o diurético interrompido sem orientação, e dose imprópria, com o anlodipino da esposa, de outra dose.', tempo: '40 s' },
      { tarefa: 2, texto: 'Falharam o passo 5, fornecer informações, instruções e recomendações claras, e o passo 6, monitorizar: antes de acrescentar um quarto remédio, era preciso reavaliar como ele estava tomando.', tempo: '25 s' },
      { tarefa: 3, texto: 'Faltava a adscrição, a parte da receita com as instruções de uso e as recomendações ao paciente.', tempo: '15 s' },
      { tarefa: 4, texto: 'Antes de acrescentar outro remédio, corrijo a forma de tomar os que ele já usa. Seu Olavo, não é que os remédios não funcionem: é como uma orquestra em que cada músico toca na hora que quer; a música não sai. Vamos fazer uma tabela com os horários, separar só os seus remédios e conversar sobre o diurético que o senhor parou. Daqui a duas semanas a gente vê a pressão de novo. Me mostra como o senhor vai tomar amanhã?', tempo: '45 s', analogia: 'Orquestra em que cada músico toca na hora que quer' },
    ],
    extra: 'Em que passo da prescrição racional se verificam interações, função renal e comorbidades? (Terceiro passo: verificar a adequação do tratamento ao paciente.)',
  },

);
