// Estações de Farmacologia (FAR-02 a FAR-10). FAR-01 está em estacoes.js.
ESTACOES.push(
  // ----------------------------------------------------- FAR-02 · Prescrição racional e receita
  {
    id: 'FAR-02', materia: 'farmaco',
    titulo: 'A receita que voltou da farmácia',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'examinador',
    cenario: 'Dona Lúcia, 71 anos, voltou da farmácia sem os remédios. O farmacêutico recusou a receita feita pelo plantonista no pronto-socorro, escrita à mão em papel comum, numa única folha. O examinador mostra a receita e faz as perguntas.',
    mesa: [
      { tipo: 'texto', texto: 'Receita (papel comum, 1 via):\n\nUso oral\n1) Morfina 10 mg ........ 1 cx\n2) Clonazepam 2 mg ........ 1 cx\n3) Amoxicilina 500 mg — 1 cp VO 8/8h por 7 dias\n\nAss.: ilegível · sem data · sem nome do paciente · sem CRM' },
    ],
    tarefas: [
      'Cite as partes de uma receita médica e o que falta nesta.',
      'Qual é o receituário correto para cada um dos três medicamentos?',
      'Quais são os seis passos da prescrição racional? Aplique o passo 5 para a paciente.',
    ],
    ator: [
      { gatilho: 'Examinador, se perguntar sobre a morfina', fala: '"Para dor oncológica, 10 mg de 4/4 h por 30 dias."' },
      { gatilho: 'Examinador, se perguntar sobre o clonazepam', fala: '"Ela usa 0,5 mg à noite há anos. O plantonista escreveu 2 mg por engano."' },
      { gatilho: 'Paciente, no final', fala: '"Doutor(a), eu me confundo com tanto remédio, tomo quando lembro."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Cabeçalho, superinscrição (paciente e via), inscrição (fármaco, forma, dose, frequência, período), subscrição (quantidade total) e adscrição (orientações)', pts: 2 },
        { tarefa: 1, item: 'Faltam: identificação da paciente e do médico (nome, CRM legível), data, posologia da morfina e do clonazepam; dose do clonazepam errada', pts: 1 },
        { tarefa: 2, item: 'Morfina (lista A1): notificação de receita A, amarela, para até 30 dias de tratamento', pts: 1 },
        { tarefa: 2, item: 'Clonazepam (lista B1): notificação de receita B, azul, para até 60 dias de tratamento', pts: 1 },
        { tarefa: 2, item: 'Amoxicilina (antimicrobiano): receita de controle especial em 2 vias', pts: 1 },
        { tarefa: 3, item: 'Definir o problema → especificar o objetivo → verificar a adequação ao paciente → prescrever → informar e orientar → monitorizar', pts: 1 },
        { tarefa: 3, item: 'Passo 5 para a paciente: orientação clara de horários, tabela de remédios, conferir a compreensão (baixa adesão = causa de fracasso terapêutico)', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o clonazepam em 2 mg', 'Prescrever morfina em receituário comum'],
    falaModelo: [
      { tarefa: 1, texto: 'A receita tem cabeçalho, com os dados do médico; superinscrição, com nome da paciente e via; inscrição, com fármaco, forma, dose, frequência e duração; subscrição, com a quantidade total; e adscrição, com as orientações. Aqui faltam nome da paciente, data, nome e CRM legíveis, e a posologia da morfina e do clonazepam, que ainda está com dose errada: ela usa 0,5 mg.', tempo: '40 s' },
      { tarefa: 2, texto: 'A morfina é lista A1: notificação amarela, quantidade para até 30 dias. O clonazepam é lista B1: notificação azul, até 60 dias de tratamento. A amoxicilina é antimicrobiano: receita de controle especial em duas vias. Então são três documentos diferentes, não uma folha só.', tempo: '30 s' },
      { tarefa: 3, texto: 'Os seis passos: definir o problema, especificar o objetivo, verificar se o tratamento é adequado para o paciente, prescrever, informar e orientar, e monitorizar. Dona Lúcia, remédio tomado só quando lembra é como regar uma planta de vez em quando: ela não cresce. Vou montar com a senhora uma tabelinha com os horários, ligados ao café, almoço e jantar. Me mostra como a senhora vai tomar a morfina amanhã?', tempo: '45 s', analogia: 'Remédio irregular como planta regada de vez em quando' },
    ],
    extra: 'Por que se evita escrever siglas e nomes comerciais? (Risco de erro; usar a denominação comum brasileira; a única sigla aceita é q.s.p.) Atenção a mg × mcg na inscrição.',
  },

  // ----------------------------------------------------- FAR-03 · Osteoporose
  {
    id: 'FAR-03', materia: 'farmaco',
    titulo: 'Quebrou o punho ao escorregar no tapete',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Dona Célia, 66 anos, branca, magra (IMC 19), menopausa aos 48 anos sem reposição hormonal. Fraturou o punho há 2 meses ao escorregar em casa. Tabagista, sedentária, toma pouco leite. Diminuiu 3 cm de altura. Tem refluxo leve, controlado com dieta. Trouxe a densitometria.',
    mesa: [
      { tipo: 'tabela', titulo: 'Densitometria óssea (DEXA)', linhas: [['Coluna lombar (T-score)', '−2,9'], ['Colo do fêmur (T-score)', '−2,6']] },
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Cálcio', '9,2 mg/dL'], ['25-OH vitamina D', '18 ng/mL'], ['TSH', '2,1 mUI/L'], ['Creatinina', '0,8 mg/dL']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Cite os fatores de risco dela, separando modificáveis e não modificáveis.',
      'Prescreva o tratamento farmacológico e explique o mecanismo do fármaco principal.',
      'Ensine a paciente a tomar o bisfosfonato. Se ela não tolerar, qual é a alternativa?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Mas eu não sinto nada nos ossos, doutor(a). Osteoporose dói?"' },
      { gatilho: 'Se falar em cálcio', fala: '"Então é só tomar cálcio que resolve, né?"' },
      { gatilho: 'Se orientar ficar em pé', fala: '"Eu tomo meus remédios todos juntos, deitada, antes de levantar."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Osteoporose pós-menopausa com fratura por fragilidade (T-score ≤ −2,5)', pts: 2 },
        { tarefa: 1, item: 'Não modificáveis: idade, sexo feminino, raça branca, menopausa · Modificáveis: tabagismo, sedentarismo, baixo peso, baixa ingestão de cálcio, vitamina D baixa', pts: 1 },
        { tarefa: 2, item: 'Bisfosfonato (alendronato 70 mg 1 vez por semana): liga-se à hidroxiapatita e inibe os osteoclastos', pts: 2 },
        { tarefa: 2, item: 'Cálcio (carbonato, com as refeições) e vitamina D; cálcio sozinho tem efeito mínimo em fraturas', pts: 1 },
        { tarefa: 2, item: 'Exercício de força e equilíbrio, prevenção de quedas, parar de fumar', pts: 1 },
        { tarefa: 3, item: 'Em jejum, com um copo de água, sozinho, e ficar ereta por pelo menos 30 minutos antes de comer ou deitar', pts: 1 },
        { tarefa: 3, item: 'Alternativa se esofagite/intolerância: calcitonina intranasal (ou denosumabe, raloxifeno); seguimento com DEXA', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar só com cálcio', 'Orientar tomar o bisfosfonato deitada ou junto com outros remédios'],
    falaModelo: [
      { tarefa: 1, texto: 'É osteoporose pós-menopausa, com T-score abaixo de −2,5 e fratura de punho por fragilidade. Os fatores não modificáveis são idade, sexo, raça branca e menopausa; os modificáveis, tabagismo, sedentarismo, baixo peso, pouco cálcio e vitamina D baixa.', tempo: '30 s' },
      { tarefa: 2, texto: 'Prescrevo alendronato 70 mg uma vez por semana. Ele se liga à hidroxiapatita e inibe os osteoclastos, que são as células que reabsorvem osso. Associo carbonato de cálcio com as refeições e vitamina D, porque o cálcio sozinho quase não reduz fraturas. Junto: exercício de força e equilíbrio, prevenção de quedas e parar de fumar.', tempo: '40 s' },
      { tarefa: 3, texto: 'Dona Célia, a osteoporose não dói até quebrar, por isso tratamos agora. O osso é como uma casa em reforma permanente: uma equipe derruba paredes e outra constrói. Na menopausa, a equipe que derruba trabalha demais; o remédio diminui essa equipe. Uma vez por semana, ao acordar, em jejum, com um copo cheio de água, sozinho, e fica sentada ou em pé por 30 minutos antes de comer ou deitar, para não machucar o esôfago. Se não tolerar, existe a calcitonina em spray nasal. Como a senhora vai tomar na segunda-feira?', tempo: '60 s', analogia: 'Osso como casa em reforma: uma equipe derruba, outra constrói' },
    ],
    extra: 'Cite três medicamentos que causam osteoporose secundária. (Corticoide, heparina, levotiroxina em excesso, fenitoína/fenobarbital.)',
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
        { tarefa: 2, item: 'Erradicar H. pylori: IBP 2 vezes ao dia + 2 antimicrobianos por 10 a 14 dias (ex.: omeprazol 20 mg 12/12 h + amoxicilina 1 g 12/12 h + claritromicina 500 mg 12/12 h)', pts: 2 },
        { tarefa: 2, item: 'Suspender o AINE e manter IBP para cicatrizar a úlcera', pts: 1 },
        { tarefa: 2, item: 'Confirmar a erradicação depois do tratamento (suspender IBP 2 semanas antes do teste)', pts: 1 },
        { tarefa: 3, item: 'Dor nos joelhos: paracetamol, medidas não farmacológicas; se AINE for inevitável, com IBP', pts: 1 },
        { tarefa: 3, item: 'Sinais de alarme: fezes pretas (melena), vômito com sangue, tontura/desmaio → procurar emergência', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar só com IBP sem erradicar o H. pylori', 'Manter o ibuprofeno sem justificativa'],
    falaModelo: [
      { tarefa: 1, texto: 'A úlcera duodenal dele tem duas causas: H. pylori, confirmado pela urease, e o uso crônico de ibuprofeno. O cigarro piora a cicatrização.', tempo: '15 s' },
      { tarefa: 2, texto: 'Faço a erradicação: omeprazol 20 mg de 12 em 12 horas, amoxicilina 1 g de 12 em 12 e claritromicina 500 mg de 12 em 12, por 14 dias. Suspendo o ibuprofeno e mantenho o IBP para cicatrizar. Depois, confirmo a erradicação, suspendendo o IBP 2 semanas antes do teste para não dar falso negativo.', tempo: '40 s' },
      { tarefa: 3, texto: 'Para os joelhos, troco por paracetamol e oriento fortalecimento e controle de peso. Seu Osvaldo, sua úlcera é como um buraco no asfalto aberto por dois motivos: uma bactéria que fica no estômago e o ibuprofeno, que tira a proteção da parede. Se a gente só tapa o buraco com omeprazol e deixa os dois caminhões passando, ele abre de novo. Por isso o antibiótico, por 14 dias, sem pular dose. Se as fezes ficarem pretas como borra de café, vomitar sangue ou sentir tontura forte, vá direto ao pronto-socorro. Ficou alguma dúvida?', tempo: '55 s', analogia: 'Buraco no asfalto com dois caminhões passando' },
    ],
    extra: 'Qual é o mecanismo do misoprostol e qual a sua principal restrição? (Análogo de prostaglandina que repõe muco e bicarbonato; causa contrações uterinas, contraindicado na gestação.)',
  },

  // ----------------------------------------------------- FAR-05 · Osteoartrite e escolha do AINE
  {
    id: 'FAR-05', materia: 'farmaco',
    titulo: 'Joelhos inchados em uma paciente hipertensa',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Dona Irene, 69 anos, IMC 32, tem osteoartrite de joelhos há 5 anos. Usa paracetamol 750 mg de 6/6 h há 3 meses, mas a dor piorou e o joelho direito está quente e inchado. Hipertensa em uso de losartana e hidroclorotiazida; teve infarto há 4 anos e toma AAS 100 mg. Nega úlcera prévia. Creatinina 1,1 mg/dL.',
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
        { tarefa: 2, item: 'Preferir naproxeno (perfil cardiovascular mais seguro), menor dose pelo menor tempo, com IBP (associado ao AAS)', pts: 1 },
        { tarefa: 3, item: 'Monitorar função renal e PA (AINE + diurético + BRA reduz prostaglandinas renais), edema e sintomas digestivos', pts: 2 },
        { tarefa: 3, item: 'Perda de peso, atividade física adequada (sem alta intensidade), AINE tópico; capsaicina exige ≥ 2 semanas de uso', pts: 1 },
        { tarefa: 3, item: 'Refratária: hialuronato intra-articular; incapacidade: artroplastia', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever coxibe a paciente com infarto prévio', 'Não avaliar a função renal com AINE + diurético + BRA'],
    falaModelo: [
      { tarefa: 1, texto: 'Sim. Ela falhou com o paracetamol e agora tem sinais inflamatórios, calor e derrame. O paracetamol é analgésico, mas não é anti-inflamatório.', tempo: '15 s' },
      { tarefa: 2, texto: 'Eu evito o coxibe: ele protege o estômago, mas aumenta o risco cardiovascular, e ela já infartou. Prefiro o naproxeno, o AINE com perfil cardiovascular mais seguro, na menor dose e pelo menor tempo, junto com um IBP, porque ela também usa AAS.', tempo: '30 s' },
      { tarefa: 3, texto: 'Monitoro creatinina, potássio e pressão: AINE com diurético e losartana pode derrubar a função renal e reter líquido. E aqui entra o que mais funciona a longo prazo. Dona Irene, o joelho é como o amortecedor de um carro: cada quilo a mais é carga que ele absorve a cada passo. Perder peso e fazer exercício leve, como hidroginástica, alivia o amortecedor. A pomada de pimenta funciona, mas só depois de umas duas semanas usando todo dia. Se nada resolver, existe a infiltração e, no fim, a prótese. Ficou claro?', tempo: '60 s', analogia: 'Joelho como amortecedor do carro' },
    ],
    extra: 'Em quanto tempo aparecem o efeito analgésico e o anti-inflamatório dos AINEs? (Analgésico em 1–2 h; anti-inflamatório em 2–3 semanas de uso contínuo.)',
  },

  // ----------------------------------------------------- FAR-06 · Asma: escalonamento e técnica inalatória
  {
    id: 'FAR-06', materia: 'farmaco',
    titulo: 'A bombinha que ele usa todo dia',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Thiago, 22 anos, asmático desde a infância, com rinite. Usa salbutamol spray "quase todo dia", cerca de 5 vezes por semana, e acorda à noite com falta de ar 2 vezes por semana. Nunca usou outro remédio. Ao demonstrar a técnica: não agita o frasco, aciona o jato e só depois começa a inspirar, rápido, e não segura a respiração.\n\nAuscultas com sibilos esparsos. SatO₂ 97%.',
    mesa: [
      { tipo: 'tabela', titulo: 'Espirometria', linhas: [['VEF₁/CVF', '0,68'], ['Após broncodilatador', 'aumento de 15% no VEF₁']] },
    ],
    tarefas: [
      'A asma dele está controlada? Qual é a mudança no tratamento?',
      'Explique a diferença entre os dois remédios que ele vai usar.',
      'Corrija a técnica inalatória, passo a passo.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), a bombinha resolve na hora. Pra que outro remédio?"' },
      { gatilho: 'Se falar em corticoide', fala: '"Corticoide? Vai me deixar inchado, com osso fraco?"' },
      { gatilho: 'No final', fala: '"E quando eu melhorar, posso parar o de manutenção?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Não controlada: beta-2 de curta ação ≥ 4 vezes por semana e despertares noturnos', pts: 1 },
        { tarefa: 1, item: 'Iniciar corticosteroide inalatório de manutenção (ex.: budesonida), mantendo o beta-2 de curta ação para alívio', pts: 2 },
        { tarefa: 1, item: 'Sem controle: associar beta-2 de longa ação (formoterol/salmeterol) ao corticoide, sem usar LABA isolado', pts: 1 },
        { tarefa: 2, item: 'Salbutamol alivia o broncoespasmo (relaxa o músculo) mas não trata a inflamação; o corticoide trata a inflamação crônica, sem alívio imediato', pts: 1 },
        { tarefa: 3, item: 'Agitar, expirar fora do bocal, acionar no início de uma inspiração lenta e profunda, segurar a respiração ~10 s; espaçador; intervalo entre jatos', pts: 2 },
        { tarefa: 3, item: 'Enxaguar a boca após o corticoide (candidíase); trazer o dispositivo nas consultas', pts: 1 },
      ],
    },
    errosCriticos: ['Manter só o beta-2 de curta ação', 'Prescrever beta-2 de longa ação sem corticoide inalatório'],
    falaModelo: [
      { tarefa: 1, texto: 'Não está controlada: usa salbutamol 5 vezes por semana, mais que 4, e acorda à noite. Inicio corticoide inalatório de manutenção, como budesonida, e mantenho o salbutamol só para crise. Se não controlar, associo um beta-2 de longa ação ao corticoide.', tempo: '30 s' },
      { tarefa: 2, texto: 'Thiago, o salbutamol é o bombeiro: apaga o incêndio na hora, abrindo os brônquios, mas não impede o próximo. A asma é uma inflamação que fica acesa como brasa. O corticoide é quem apaga a brasa todo dia, por isso você usa mesmo sem sintoma. A dose é baixa e vai direto ao pulmão, bem diferente do comprimido.', tempo: '40 s', analogia: 'Salbutamol é o bombeiro; corticoide apaga a brasa' },
      { tarefa: 3, texto: 'Vamos corrigir: tire a tampa e agite. Solte o ar todo, longe do bocal. Coloque na boca, comece a puxar o ar devagar e, no começo da puxada, aperte o jato; continue puxando fundo. Segure a respiração por uns 10 segundos. Se for outro jato, espere um pouco. Com espaçador fica ainda melhor. Depois do corticoide, enxágue a boca e cuspa. Agora me mostra você?', tempo: '50 s' },
    ],
    extra: 'Na crise grave sem resposta a várias inalações de beta-2, o que associar? (Brometo de ipratrópio, anticolinérgico, sem aumentar a dose do beta-2.)',
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
      'Oriente as medidas ambientais e o uso do spray.',
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
        { tarefa: 3, item: 'Controle ambiental (ácaros: limpeza úmida, capas, ventilação) e uso contínuo do corticoide nasal, com efeito em dias', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o descongestionante tópico', 'Prescrever anti-histamínico de 1ª geração ou descongestionante oral'],
    falaModelo: [
      { tarefa: 1, texto: 'É rinite alérgica persistente, mediada por IgE, com teste positivo para ácaros e conjuntivite associada. E ele desenvolveu rinite medicamentosa: o descongestionante tópico usado por mais de 3 a 5 dias causa congestão rebote.', tempo: '25 s' },
      { tarefa: 2, texto: 'Suspendo a nafazolina e começo corticoide nasal, budesonida ou fluticasona, que é o mais eficaz para a congestão e a inflamação. Se precisar, anti-histamínico de segunda geração, como loratadina ou fexofenadina, que quase não dá sono, essencial para quem dirige. E evito descongestionante oral, porque a pressão dele está alta.', tempo: '35 s' },
      { tarefa: 3, texto: 'Seu Márcio, o spray que o senhor usa é como pegar dinheiro emprestado com juros: alivia agora, mas cobra depois com o nariz mais entupido. O corticoide nasal é diferente: não age na hora, leva alguns dias para fazer efeito, e tem que ser usado todo dia. Cabeça levemente para frente, bico para fora, em direção à orelha do mesmo lado, e não para o meio do nariz. Na cabine e em casa, pano úmido em vez de espanador, e capa no travesseiro. O que o senhor vai mudar primeiro?', tempo: '55 s', analogia: 'Descongestionante como empréstimo com juros' },
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
      { tipo: 'tabela', titulo: 'Investigação', linhas: [['EEG', 'descargas generalizadas de poliponta-onda'], ['Ressonância de crânio', 'normal'], ['Glicemia, sódio, cálcio', 'normais']] },
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
        { tarefa: 3, item: 'Gravidez planejada com o neurologista e ácido fólico antes de engravidar', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever valproato para mulher que planeja gravidez', 'Não tratar por considerar "crises provocadas"'],
    falaModelo: [
      { tarefa: 1, texto: 'Sim, é epilepsia: duas crises não provocadas, separadas por mais de 24 horas. A privação de sono é um gatilho, não uma causa aguda que explique a crise. É uma epilepsia generalizada, pela crise e pelo EEG.', tempo: '25 s' },
      { tarefa: 2, texto: 'Começo monoterapia com uma droga de segunda geração de amplo espectro: levetiracetam, que atinge nível rápido e quase não tem interações; a lamotrigina é alternativa, mas exige titulação lenta pelo risco de rash. Evito o valproato, que é muito teratogênico, e a carbamazepina e a oxcarbazepina, que reduzem a eficácia do anticoncepcional, e a carbamazepina ainda pode piorar crises generalizadas.', tempo: '40 s' },
      { tarefa: 3, texto: 'Bianca, você pode, sim, ter filhos, com planejamento. O valproato funciona bem, mas pode causar malformações no bebê, por isso não é o melhor para você. O cérebro na epilepsia é como uma rede elétrica com um disjuntor sensível: o remédio deixa o disjuntor mais estável, e noites sem dormir e álcool são sobrecargas que fazem cair a energia. Não pare o remédio por conta própria. Quando decidir engravidar, venha antes: ajustamos a dose e começamos ácido fólico. O que você entendeu sobre como tomar?', tempo: '55 s', analogia: 'Cérebro como rede elétrica com disjuntor sensível' },
    ],
    extra: 'E se fossem crises de ausência numa criança? (Etossuximida, que bloqueia canais de cálcio tipo T; a carbamazepina pode piorar as ausências.)',
  },

  // ----------------------------------------------------- FAR-09 · Neuralgia do trigêmeo e carbamazepina
  {
    id: 'FAR-09', materia: 'farmaco',
    titulo: 'Choque no rosto ao escovar os dentes',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Dona Vera, 62 anos, tem crises de dor em choque, de segundos, no lado direito do rosto (bochecha e mandíbula), desencadeadas ao escovar os dentes, mastigar e até com o vento. Já tomou dipirona, paracetamol e ibuprofeno, sem melhora. Exame neurológico normal entre as crises. Usa varfarina por fibrilação atrial e hidroclorotiazida.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Sódio', '136 mEq/L'], ['Hemograma', 'normal'], ['RNI', '2,4 (alvo 2–3)']] },
    ],
    tarefas: [
      'Que tipo de dor é essa, e por que os analgésicos comuns falharam?',
      'Qual fármaco você escolhe? Explique o mecanismo.',
      'Quais efeitos adversos e interações você monitora neste caso?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"É uma dor que parece um choque elétrico, doutor(a). Tenho medo até de comer."' },
      { gatilho: 'Se falar em carbamazepina', fala: '"Remédio de epilepsia? Mas eu não tenho convulsão!"' },
      { gatilho: 'Se perguntar sobre outros remédios', fala: '"Tomo o remédio que afina o sangue, faço exame todo mês."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Dor neuropática: neuralgia do trigêmeo (choques breves, gatilhos, alodinia)', pts: 1 },
        { tarefa: 1, item: 'Analgésicos comuns e AINEs agem na dor nociceptiva/inflamatória, não na alteração da via nervosa', pts: 1 },
        { tarefa: 2, item: 'Carbamazepina: coadjuvante específico da neuralgia do trigêmeo', pts: 2 },
        { tarefa: 2, item: 'Mecanismo: bloqueia canais de Na⁺ no estado inativado, reduzindo disparos repetitivos', pts: 1 },
        { tarefa: 3, item: 'Efeitos adversos: tontura, diplopia, hiponatremia (atenção: usa tiazídico), SJS/NET, discrasias sanguíneas', pts: 1 },
        { tarefa: 3, item: 'Indutora enzimática: reduz o efeito da varfarina → monitorar o RNI de perto e ajustar', pts: 2 },
      ],
    },
    errosCriticos: ['Iniciar carbamazepina sem ajustar o controle do RNI', 'Insistir em AINE ou opioide como base para dor neuropática'],
    falaModelo: [
      { tarefa: 1, texto: 'É dor neuropática, uma neuralgia do trigêmeo: choques de segundos, com gatilhos como escovar os dentes e o vento. Analgésicos comuns e AINEs agem na dor inflamatória; aqui o problema é o próprio nervo disparando, por isso não funcionaram.', tempo: '25 s' },
      { tarefa: 2, texto: 'Escolho a carbamazepina, o coadjuvante específico da neuralgia do trigêmeo. Ela bloqueia os canais de sódio no estado inativado e reduz os disparos repetitivos do nervo.', tempo: '20 s' },
      { tarefa: 3, texto: 'Monitoro tontura, visão dupla, sódio, porque ela também usa tiazídico, hemograma e lesões de pele, pelo risco de Stevens-Johnson. E o mais importante: a carbamazepina acelera o fígado e reduz o efeito da varfarina, então faço RNI semanal no início e ajusto. Dona Vera, o nervo do seu rosto está como um fio desencapado: qualquer toque dá choque. Esse remédio é usado na epilepsia porque "isola" esse fio, acalmando os disparos, e não porque a senhora tenha convulsão. Se aparecer mancha ou bolha na pele, febre ou sangramento, procure atendimento. Ficou alguma dúvida?', tempo: '60 s', analogia: 'Nervo como fio desencapado' },
    ],
    extra: 'Qual coadjuvante central é usado de forma geral na dor neuropática e na dor crônica? (Amitriptilina; a gabapentina também é útil na dor neuropática.)',
  },

  // ----------------------------------------------------- FAR-10 · DRGE
  {
    id: 'FAR-10', materia: 'farmaco',
    titulo: 'Queimação depois do almoço e ao deitar',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Sr. Renato, 41 anos, IMC 30, tem queimação retroesternal e regurgitação ácida há 4 meses, 4 vezes por semana, piores após feijoada, café e ao deitar logo depois do jantar. Fuma meio maço por dia. Toma antiácido líquido "o dia inteiro". Nega disfagia, perda de peso, vômitos ou sangramento. Já tentou mudar a dieta por 2 semanas, sem melhora.',
    mesa: [],
    tarefas: [
      'Qual é o diagnóstico? Há indicação de endoscopia agora?',
      'Prescreva o tratamento, explicando a escolha do fármaco e por que o antiácido não basta.',
      'Oriente as medidas não farmacológicas e como tomar o remédio.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"O antiácido resolve na hora, mas volta tudo depois."' },
      { gatilho: 'Se falar em parar de fumar', fala: '"O cigarro ajuda a fazer a digestão, doutor(a)."' },
      { gatilho: 'Se citar procinético', fala: '"Posso tomar aquele remédio de enjoo junto, a domperidona?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Doença do refluxo gastroesofágico (pirose e regurgitação, piora pós-prandial e postural)', pts: 1 },
        { tarefa: 1, item: 'Sem sinais de alarme (disfagia, perda de peso, sangramento, anemia): endoscopia não obrigatória de início', pts: 1 },
        { tarefa: 2, item: 'Sintomas persistentes após 2 semanas de medidas: iniciar farmacoterapia; IBP (omeprazol) bloqueia irreversivelmente a bomba de prótons', pts: 2 },
        { tarefa: 2, item: 'Antiácido apenas neutraliza o ácido já produzido: alívio rápido, mas curto e sem tratar a doença', pts: 1 },
        { tarefa: 3, item: 'Medidas: perder peso, parar de fumar, evitar refeições gordurosas e volumosas, não deitar após comer, elevar a cabeceira', pts: 1 },
        { tarefa: 3, item: 'IBP em jejum, 30 min antes do café da manhã; procinético não é rotina (efeitos extrapiramidais, prolactina)', pts: 1 },
      ],
    },
    errosCriticos: ['Manter só antiácido como tratamento', 'Não perguntar sobre sinais de alarme'],
    falaModelo: [
      { tarefa: 1, texto: 'É doença do refluxo gastroesofágico: pirose e regurgitação, piores depois de refeição gordurosa e ao deitar. Perguntei os sinais de alarme, disfagia, perda de peso, vômitos e sangramento, e ele não tem, então não preciso de endoscopia agora.', tempo: '25 s' },
      { tarefa: 2, texto: 'Como as medidas por 2 semanas não bastaram, começo omeprazol 20 mg por dia. O IBP bloqueia de forma irreversível a bomba de prótons, a última etapa da produção de ácido. O antiácido só neutraliza o ácido que já está lá: alivia rápido, mas dura pouco e não deixa a mucosa cicatrizar.', tempo: '35 s' },
      { tarefa: 3, texto: 'Seu Renato, entre o estômago e o esôfago existe uma válvula, como a tampa de uma panela de pressão. Comida gordurosa, cigarro, barriga grande e deitar de estômago cheio afrouxam essa tampa, e o ácido sobe. O omeprazol é tomado em jejum, meia hora antes do café. Jantar mais cedo e mais leve, esperar 3 horas para deitar, elevar a cabeceira da cama, emagrecer e parar de fumar. A domperidona não é necessária e pode ter efeitos no sistema nervoso. Me conta como vai ficar o seu jantar?', tempo: '55 s', analogia: 'Válvula como a tampa da panela de pressão' },
    ],
    extra: 'Quais efeitos adversos do uso prolongado de IBP? (Alteração da flora intestinal, menor absorção de B12, ferro, cálcio e magnésio.) E dos antiácidos? (Alumínio constipa; magnésio causa diarreia.)',
  },
);
