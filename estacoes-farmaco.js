// Estações de Farmacologia: o que cai no OSCE é mecanismo de ação e reações adversas dos
// anti-histamínicos e reações adversas dos antiasmáticos.
// Formato da prova: reconhecer a reação, explicar o mecanismo, manejar (sem prescrever) e orientar.
// Nas estações com paciente, a anamnese é ativa: o paciente só conta o que for perguntado.
// FAR-01, 02, 05 e 06: anti-histamínicos (e antileucotrieno) · FAR-07, 08, 10 e 11: antiasmáticos.
// FAR-03, 04, 09 e 12 a 18 saíram (descongestionantes, AINEs e outros temas fora do OSCE).
ESTACOES.push(
  // ===================================================== ANTI-HISTAMÍNICOS
  // ----------------------------------------------------- FAR-01 · Sedação por anti-H1 de 1ª geração
  {
    id: 'FAR-01', materia: 'farmaco',
    titulo: 'Dormi em cima do livro depois do antialérgico',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Lucas, 20 anos, estudante de engenharia, tem rinite alérgica e veio porque o antialérgico que começou por conta própria "resolveu o espirro, mas deu muito sono". Avalie a reação, maneje e oriente o paciente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual reação adversa ele apresenta, e por que ela acontece com esse grupo de anti-histamínicos?',
      'Que medida você toma em relação ao medicamento? Justifique pela farmacologia.',
      'Ele toma o remédio só depois que os espirros começam, e piora quando mexe na poeira. Como usar melhor o anti-histamínico, e o que associar?',
      'Explique ao Lucas o que aconteceu e oriente-o, considerando a moto e a prova.',
    ],
    anamnese: [
      { tema: 'Qual remédio e como usa', resposta: '"É a prometazina que a minha avó usava. Tomo 3 vezes ao dia, quando os espirros começam."' },
      { tema: 'Sintomas da rinite', resposta: '"Espirro, coceira no nariz e coriza, sempre que mexo na poeira do quarto."' },
      { tema: 'Sono e atenção', resposta: '"Fico com a cabeça lenta nas aulas. Ontem cochilei pilotando a moto na volta da faculdade."' },
      { tema: 'Rotina', resposta: '"Tenho prova na semana que vem e estudo à noite."' },
      { tema: 'Ambiente', resposta: '"Meu quarto tem muita poeira e é úmido."' },
      { tema: 'Outras doenças e remédios', resposta: '"Não tenho outra doença nem tomo outro remédio."' },
    ],
    placas: [
      { pedido: 'o exame do nariz', placa: 'Mucosa nasal pálida e edemaciada, com secreção clara.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), o remédio resolveu o espirro, mas eu viro um zumbi. Quase caí da moto."' },
      { gatilho: 'Se falar em trocar o remédio', fala: '"Mas antialérgico não dá sono em todo mundo?"' },
      { gatilho: 'No final', fala: '"Posso tomar só quando estiver espirrando muito?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou o fármaco e o impacto: sedação pela prometazina, anti-H1 de primeira geração muito sedativo (+++), com risco ao pilotar', pts: 1 },
        { tarefa: 1, item: 'Primeira geração tem maior penetração no SNC (atravessa a barreira hematoencefálica) e mais efeitos anticolinérgicos', pts: 1 },
        { tarefa: 2, item: 'Trocar por anti-histamínico de segunda geração (cetirizina, loratadina ou fexofenadina)', pts: 1 },
        { tarefa: 2, item: 'Segunda geração não atravessa facilmente a barreira hematoencefálica: menos sedação, atenção preservada', pts: 1 },
        { tarefa: 3, item: 'Anti-H1 é mais eficaz de forma preventiva, antes da exposição, do que na crise já instalada', pts: 1 },
        { tarefa: 3, item: 'Bloqueio H1 competitivo e reversível: muita exposição libera mais histamina e supera o bloqueio; controle ambiental (poeira, umidade) complementa o remédio', pts: 1 },
        { tarefa: 4, item: 'Orientou não pilotar enquanto estiver sonolento e explicou a troca com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o anti-histamínico de primeira geração em quem dirige e precisa de atenção', 'Não relacionar a sonolência ao fármaco'],
    falaModelo: [
      { tarefa: 1, texto: 'É sedação causada pela prometazina, um anti-histamínico de primeira geração dos mais sedativos. Esses fármacos penetram mais no sistema nervoso central, porque atravessam a barreira hematoencefálica, e por isso dão sonolência e lentidão; também têm mais efeitos anticolinérgicos.', tempo: '25 s' },
      { tarefa: 2, texto: 'Troco por um anti-histamínico de segunda geração, como cetirizina, loratadina ou fexofenadina. Eles não atravessam facilmente a barreira hematoencefálica, então dão menos sedação e preservam a atenção, que é o que ele precisa para estudar e pilotar.', tempo: '25 s' },
      { tarefa: 3, texto: 'O anti-histamínico funciona melhor de forma preventiva, antes da exposição, do que depois que a crise começou. E o bloqueio do receptor H1 é competitivo e reversível: quando ele mexe na poeira, libera muita histamina, que vence o bloqueio. Por isso associo o controle do ambiente: limpar a poeira e controlar a umidade.', tempo: '30 s' },
      { tarefa: 4, texto: 'Lucas, esse antialérgico mais antigo entra no cérebro e dá sono, como um remédio para dormir disfarçado. Os mais novos agem no nariz quase sem chegar ao cérebro, por isso dão muito menos sono. Enquanto estiver sonolento, não pilote a moto. Use o novo todo dia, antes de se expor à poeira, e não só quando a crise começar, e cuide da poeira do quarto. Me conta como você vai tomar o remédio novo?', tempo: '40 s', analogia: 'Antialérgico antigo como um remédio para dormir disfarçado' },
    ],
    extra: 'Por que o anti-histamínico controla mal o nariz entupido? (Ele bloqueia principalmente os efeitos da histamina, como espirros, coceira e coriza; a congestão responde melhor ao corticosteroide nasal, de ação anti-inflamatória mais ampla.)',
  },

  // ----------------------------------------------------- FAR-02 · Retenção urinária por efeito anticolinérgico
  {
    id: 'FAR-02', materia: 'farmaco',
    titulo: 'Não consegui urinar depois do remédio da alergia',
    local: 'Ambulatório de clínica médica — retorno', papel: 'Médico(a) clínico(a)', interacao: 'paciente',
    cenario: 'Seu Armando, 72 anos, foi sondado ontem no pronto-socorro porque não conseguia urinar e veio ao clínico com medo de "travar de novo". Investigue a causa, maneje e oriente o paciente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Quais reações adversas ele teve? Que propriedades do fármaco as explicam, e por que ele estava mais vulnerável?',
      'Que medida você toma com o antialérgico? Que alternativa é mais segura para ele, e por quê?',
      'Além do medicamento, que medidas ajudam a controlar a rinite dele?',
      'Explique ao Seu Armando o que aconteceu e o que ele deve fazer daqui para frente.',
    ],
    anamnese: [
      { tema: 'Problemas urinários', resposta: '"Tenho a próstata aumentada há anos, o jato é fraco. Mas nunca tinha travado."' },
      { tema: 'Remédios novos', resposta: '"Há 5 dias comecei um antialérgico que o vizinho indicou, a difenidramina, por coceira no nariz e espirros."' },
      { tema: 'Outros sintomas', resposta: '"Ando sonolento e com a boca seca."' },
      { tema: 'Outras doenças e remédios', resposta: '"Tenho pressão alta e tomo anlodipino."' },
    ],
    placas: [
      { pedido: 'o resumo do pronto-socorro', placa: 'Retenção urinária aguda com globo vesical, aliviada com sondagem (900 mL).' },
      { pedido: 'o exame atual', placa: 'Bexiga não palpável. Mucosas secas.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), nunca tinha travado assim. Foi a próstata que piorou?"' },
      { gatilho: 'Se falar em suspender o antialérgico', fala: '"Mas o meu vizinho toma esse e não tem nada!"' },
      { gatilho: 'No final', fala: '"Posso tomar qualquer antialérgico da farmácia?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou os remédios novos: retenção urinária pelo efeito anticolinérgico da difenidramina (anti-H1 de primeira geração); sonolência pela penetração no SNC', pts: 2 },
        { tarefa: 1, item: 'A hiperplasia prostática o torna mais vulnerável ao efeito anticolinérgico sobre a bexiga', pts: 1 },
        { tarefa: 2, item: 'Suspender o anti-histamínico de primeira geração', pts: 1 },
        { tarefa: 2, item: 'Se precisar, segunda geração (cetirizina, loratadina, fexofenadina): sem efeitos anticolinérgicos relevantes e com menos sedação', pts: 1 },
        { tarefa: 3, item: 'Uso preventivo do anti-histamínico, antes da exposição, e controle ambiental para reduzir o contato com o alérgeno', pts: 1 },
        { tarefa: 4, item: 'Explicou que foi o remédio somado à próstata, orientou evitar antialérgicos de primeira geração e voltar ao pronto-socorro se não conseguir urinar', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o anti-histamínico de primeira geração', 'Atribuir a retenção só à próstata, sem investigar o medicamento novo'],
    falaModelo: [
      { tarefa: 1, texto: 'Ele começou difenidramina há 5 dias e teve retenção urinária pelo efeito anticolinérgico desse anti-histamínico de primeira geração, e a sonolência vem da maior penetração desse grupo no sistema nervoso central. Como ele tem hiperplasia prostática, já tem dificuldade para esvaziar a bexiga, e o efeito anticolinérgico foi o que faltava para travar.', tempo: '30 s' },
      { tarefa: 2, texto: 'Suspendo esse antialérgico. Se ele precisar de anti-histamínico, uso um de segunda geração, como loratadina, cetirizina ou fexofenadina, que não têm efeitos anticolinérgicos relevantes e dão menos sono.', tempo: '20 s' },
      { tarefa: 3, texto: 'O anti-histamínico funciona melhor de forma preventiva, antes da exposição. E reduzir o contato com o alérgeno, limpando a poeira e controlando a umidade, complementa o tratamento.', tempo: '20 s' },
      { tarefa: 4, texto: 'Seu Armando, a próstata aumentada já deixa a saída da bexiga apertada, como uma mangueira meio dobrada. Esse antialérgico antigo também dificulta o esvaziamento da bexiga; os dois juntos fecharam a passagem. O seu vizinho não tem a próstata aumentada, por isso não sentiu nada. Vamos parar esse remédio. Se precisar de antialérgico, use só o que eu indicar, dos mais novos, que não têm esse efeito. Se voltar a não conseguir urinar, vá ao pronto-socorro na hora. Me conta: qual remédio o senhor vai deixar de tomar?', tempo: '50 s', analogia: 'Mangueira meio dobrada' },
    ],
    extra: 'Quais são os anti-histamínicos de segunda geração citados, e por que dão menos sono? (Cetirizina, loratadina e fexofenadina; não atravessam facilmente a barreira hematoencefálica.)',
  },

  // ----------------------------------------------------- FAR-05 · Efeitos adversos do antileucotrieno
  {
    id: 'FAR-05', materia: 'farmaco',
    titulo: 'Desde o remédio novo, ele não dorme e anda triste',
    local: 'Ambulatório de pediatria', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Gabriel, 15 anos, tem asma leve e rinite alérgica. A mãe, dona Cláudia, o trouxe porque ele "mudou" nos últimos meses. Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Os sintomas novos podem ser reação adversa? Relacione com o fármaco e cite as reações descritas para essa classe.',
      'Como você maneja essa reação? Que alternativa existe para controlar a asma e a rinite dele?',
      'Por que o montelucaste não resolveu a crise? O que ele deveria usar na crise?',
      'Explique ao Gabriel e à mãe, acolhendo a preocupação com o humor.',
    ],
    anamnese: [
      { tema: 'Medicamentos', resposta: '"Há 2 meses tomo montelucaste, um comprimido por dia. Corticoide, não uso."' },
      { tema: 'Sintomas novos', resposta: 'Mãe: "Desde então tem dor de cabeça quase todo dia, tontura, não dorme direito e anda triste e isolado. Isso não é dele."' },
      { tema: 'Controle da asma', resposta: '"O chiado melhorou com o remédio."' },
      { tema: 'Última crise', resposta: '"Na última crise tomei dois comprimidos de montelucaste para passar mais rápido. Não passou."' },
      { tema: 'Uso de substâncias', resposta: '"Não uso nada e não bebo."' },
      { tema: 'Ideação suicida', resposta: '"Não, nunca pensei em me machucar."' },
    ],
    placas: [
      { pedido: 'o exame físico', placa: 'Ausculta pulmonar sem sibilos. Mucosa nasal pálida.' },
    ],
    ator: [
      { gatilho: 'Mãe, ao se apresentar', fala: '"Ele mudou, doutor(a). Está triste, não dorme, vive com dor de cabeça."' },
      { gatilho: 'Gabriel, se perguntar da crise', fala: '"Tomei dois comprimidos e o chiado não passou."' },
      { gatilho: 'Mãe, no final', fala: '"E agora, como ele fica sem esse remédio?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou medicamentos e início: os sintomas começaram depois do montelucaste (antileucotrieno); perguntou sobre ideação suicida', pts: 1 },
        { tarefa: 1, item: 'Antileucotrienos: cefaleia, tontura, depressão e insônia entre os efeitos adversos descritos', pts: 1 },
        { tarefa: 2, item: 'Reação a manejar: suspender o antileucotrieno e acompanhar o humor e o sono', pts: 1 },
        { tarefa: 2, item: 'Alternativa: corticoide inalatório para a asma (reverte a inflamação crônica, com broncosseletividade) e corticosteroide nasal para a rinite', pts: 1 },
        { tarefa: 3, item: 'Antileucotrieno não tem ação imediata nem reverte crise instalada; tomar a mais não ajuda', pts: 1 },
        { tarefa: 3, item: 'Na crise: beta-2 agonista de curta ação inalatório, de alívio rápido do broncoespasmo', pts: 1 },
        { tarefa: 4, item: 'Acolheu a preocupação, explicou com linguagem acessível e combinou retorno próximo para reavaliar humor e sono', pts: 1 },
      ],
    },
    errosCriticos: ['Atribuir a mudança de humor à adolescência sem considerar o fármaco', 'Orientar tomar mais antileucotrieno na crise'],
    falaModelo: [
      { tarefa: 1, texto: 'Sim. Os sintomas começaram depois do montelucaste, um antileucotrieno, e cefaleia, tontura, depressão e insônia estão entre os efeitos adversos descritos para essa classe. É uma reação adversa provável.', tempo: '20 s' },
      { tarefa: 2, texto: 'Como os sintomas afetam o humor e o sono, suspendo o antileucotrieno e acompanho de perto. Para controlar a asma, uso corticoide inalatório, que reverte a inflamação crônica das vias aéreas com broncosseletividade; para a rinite, corticosteroide nasal.', tempo: '30 s' },
      { tarefa: 3, texto: 'O montelucaste não tem ação imediata e não reverte crise já instalada; por isso tomar dois comprimidos não adiantou. Na crise, ele precisa do beta-2 agonista de curta ação inalatório, a bombinha de alívio, que abre os brônquios rapidamente.', tempo: '25 s' },
      { tarefa: 4, texto: 'Gabriel, dona Cláudia, esse remédio ajudou a respiração, mas pode mexer com o sono e com o humor, e foi isso que provavelmente aconteceu. Ele é como um vigia que trabalha devagar, ao longo dos dias, e não serve para emergência. Vamos trocá-lo por uma bombinha de corticoide, que cuida da inflamação, e manter a bombinha de alívio para as crises. Quero ver vocês de novo em breve para saber do sono e do humor. Me contem: o que vai mudar?', tempo: '45 s', analogia: 'Vigia que trabalha devagar e não serve para emergência' },
    ],
    extra: 'Em que asmático o antileucotrieno é especialmente útil? (Na asma desencadeada por AINEs, em que os antileucotrienos são ativos.)',
  },

  // ----------------------------------------------------- FAR-06 · Mecanismo de ação dos anti-histamínicos e gerações
  {
    id: 'FAR-06', materia: 'farmaco',
    titulo: 'Como o antialérgico age, e por que uns dão sono',
    local: 'Banca do OSCE — mecanismo de ação', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador pede que você explique o mecanismo de ação dos anti-histamínicos H1 e compare os de primeira geração pela tabela da mesa. Depois apresenta dois pacientes com rinite alérgica.',
    mesa: [
      { tipo: 'tabela', titulo: 'Anti-histamínicos de 1ª geração', linhas: [['Difenidramina (etanolamina)', 'sedação +++ · anticolinérgico +++ · antiemético ++ a +++'], ['Clemastina e dimenidrato (etanolaminas)', 'sedação ++ · anticolinérgico +++ · antiemético ++ a +++'], ['Prometazina (fenotiazínico)', 'sedação +++ · anticolinérgico +++ · antiemético ++++'], ['Dexclorfeniramina (alquilamina)', 'sedação + · anticolinérgico ++ · antiemético –'], ['Ciproeptadina (piperidínico)', 'sedação + · anticolinérgico ++ · antiemético –']] },
      { tipo: 'texto', texto: 'Paciente A — motorista de ônibus; quer um antialérgico "que não dê sono". O vizinho indicou prometazina.\n\nPaciente B — toma loratadina só quando os espirros já começaram, depois de faxinar a casa, e diz que "demora e quase não resolve".' },
    ],
    tarefas: [
      'Explique o mecanismo de ação dos anti-histamínicos H1. Que sintomas da rinite eles controlam bem, e qual controlam mal?',
      'Pela tabela, em que os de primeira geração diferem entre si? O que muda na segunda geração, e por quê?',
      'Paciente A: a prometazina é uma boa escolha? O que você indica?',
      'Paciente B: por que o remédio "quase não resolve"? Como orientar o uso?',
    ],
    ator: [
      { gatilho: 'Examinador, na tarefa 1', fala: '"Então o anti-histamínico desentope o nariz?"' },
      { gatilho: 'Examinador, no paciente B', fala: '"Não é só dobrar a dose quando a crise vier?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Antagonistas H1: inibidores competitivos e reversíveis da histamina no receptor H1', pts: 1 },
        { tarefa: 1, item: 'Controlam bem espirros, coceira e coriza; efeito limitado sobre a congestão, em que o corticosteroide nasal é mais eficaz', pts: 1 },
        { tarefa: 2, item: 'Na 1ª geração variam sedação, efeito anticolinérgico e antiemético: prometazina é das mais sedativas e a mais antiemética; dexclorfeniramina e ciproeptadina sedam menos', pts: 1 },
        { tarefa: 2, item: '2ª geração (cetirizina, loratadina, fexofenadina) não atravessa de modo apreciável a barreira hematoencefálica: sem ação relevante no SNC e sem efeitos anticolinérgicos', pts: 1 },
        { tarefa: 3, item: 'Prometazina é inadequada para quem dirige (sedação e efeito anticolinérgico +++): indicar 2ª geração', pts: 1 },
        { tarefa: 4, item: 'Sem ação imediata, mais eficaz na prevenção: tomada depois da exposição, a histamina já liberada vence o bloqueio competitivo; dobrar a dose não resolve', pts: 1 },
        { tarefa: 4, item: 'Orientou uso preventivo, antes da exposição, e controle ambiental (poeira, umidade do quarto abaixo de 50%)', pts: 1 },
      ],
    },
    errosCriticos: ['Indicar prometazina ou outro anti-histamínico de primeira geração ao motorista', 'Orientar dobrar a dose na crise em vez do uso preventivo'],
    falaModelo: [
      { tarefa: 1, texto: 'Os anti-histamínicos H1 são antagonistas do receptor H1: competem com a histamina pelo receptor, de forma reversível. Assim bloqueiam o que a histamina faz no nariz: espirros, coceira e coriza. Sobre o nariz entupido o efeito é limitado; na congestão, o corticosteroide nasal é mais eficaz.', tempo: '25 s' },
      { tarefa: 2, texto: 'Na primeira geração, os fármacos variam em sedação, efeito anticolinérgico e efeito antiemético. A prometazina é das mais sedativas e a mais antiemética; dexclorfeniramina e ciproeptadina sedam menos. A segunda geração, como cetirizina, loratadina e fexofenadina, não atravessa de modo apreciável a barreira hematoencefálica, então quase não age no sistema nervoso central e não tem efeitos anticolinérgicos.', tempo: '35 s' },
      { tarefa: 3, texto: 'Para o motorista, a prometazina é má escolha: é muito sedativa e muito anticolinérgica, e sonolência ao volante é risco de acidente. Indico um de segunda geração, como loratadina, cetirizina ou fexofenadina.', tempo: '20 s' },
      { tarefa: 4, texto: 'O anti-histamínico não tem ação imediata e funciona melhor na prevenção. O bloqueio é competitivo, como uma fechadura disputada: o remédio precisa ocupar a fechadura antes de a histamina chegar. Tomado depois da faxina, a histamina já foi liberada em grande quantidade e vence a disputa, e dobrar a dose não muda isso. A orientação é usar antes da exposição e reduzir o alérgeno: limpar a poeira e manter a umidade do quarto abaixo de 50%.', tempo: '35 s', analogia: 'Fechadura disputada: chegar antes da histamina' },
    ],
    extra: 'Quais anti-histamínicos existem para uso tópico? (Azelastina, em solução nasal, e levocabastina, em spray nasal e colírio.)',
  },

  // ===================================================== ANTIASMÁTICOS
  // ----------------------------------------------------- FAR-07 · Beta-2 agonista por via oral
  {
    id: 'FAR-07', materia: 'farmaco',
    titulo: 'Tremendo e com o coração disparado',
    local: 'UBS — demanda espontânea', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Roberta, 38 anos, asmática, procura a UBS porque está "tremendo toda e com o coração disparado". Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Quais reações adversas ela apresenta, e por que a via oral as favorece?',
      'Que medida você toma em relação à via de administração? Em quem a via oral ainda tem lugar?',
      'O uso quase diário do broncodilatador indica o quê? O que precisa ser associado, e por quê?',
      'Explique à Roberta e oriente o uso de cada bombinha.',
    ],
    anamnese: [
      { tema: 'Remédios da asma', resposta: '"Troquei a bombinha de salbutamol pelo salbutamol em comprimido, que é mais prático. Não uso outro remédio para asma."' },
      { tema: 'Frequência de uso', resposta: '"Tomo o comprimido quase todo dia."' },
      { tema: 'Controle da asma', resposta: '"Tenho chiado e falta de ar quase todo dia e acordo à noite 2 a 3 vezes por semana."' },
      { tema: 'Sintomas novos', resposta: '"Há 1 semana tenho tremor nas mãos, coração acelerado e cãibras nas pernas."' },
      { tema: 'Outras doenças', resposta: '"Não tenho problema de tireoide nem de coração."' },
    ],
    placas: [
      { pedido: 'os sinais vitais e a ausculta', placa: 'FC 108 bpm · PA 124 × 78 mmHg · SatO₂ 96% · sibilos esparsos.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), estou tremendo toda e com o coração disparado."' },
      { gatilho: 'Se falar em voltar à bombinha', fala: '"Mas o comprimido é mais prático!"' },
      { gatilho: 'No final', fala: '"Se eu usar a bombinha de alívio todo dia, resolve?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Tremores, taquicardia e cãibras: efeitos sistêmicos do beta-2 agonista', pts: 1 },
        { tarefa: 1, item: 'A via oral tem mais efeitos sistêmicos; em aerossol há maior broncosseletividade', pts: 1 },
        { tarefa: 2, item: 'Voltar à via inalatória (aerossol)', pts: 1 },
        { tarefa: 2, item: 'Via oral reservada principalmente a crianças que não conseguem usar dispositivos inalatórios', pts: 1 },
        { tarefa: 3, item: 'Perguntou a frequência de uso e o controle: beta-2 de curta ação 4 ou mais vezes por semana indica iniciar terapia anti-inflamatória', pts: 1 },
        { tarefa: 3, item: 'Corticoide inalatório de manutenção (controla a inflamação crônica), com o beta-2 de curta ação só para alívio', pts: 1 },
        { tarefa: 4, item: 'Explicou com linguagem acessível a diferença entre a bombinha de alívio e a de controle', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o beta-2 agonista por via oral', 'Tratar só o broncoespasmo, sem iniciar terapia anti-inflamatória'],
    falaModelo: [
      { tarefa: 1, texto: 'Ela tem tremor, taquicardia e cãibras, efeitos sistêmicos do beta-2 agonista. Por via oral o remédio se espalha pelo corpo; em aerossol ele age de forma mais seletiva nos brônquios, com menos efeitos sistêmicos.', tempo: '25 s' },
      { tarefa: 2, texto: 'Volto para a via inalatória. A via oral fica reservada principalmente às crianças que não conseguem usar os dispositivos inalatórios.', tempo: '15 s' },
      { tarefa: 3, texto: 'Ela usa o broncodilatador quase todo dia e acorda à noite; o uso de beta-2 de curta ação 4 ou mais vezes por semana já indica terapia anti-inflamatória. Inicio corticoide inalatório de manutenção, que trata a inflamação crônica, e mantenho o salbutamol inalatório só para alívio.', tempo: '30 s' },
      { tarefa: 4, texto: 'Roberta, o comprimido espalha o remédio pelo corpo todo, por isso o tremor e o coração acelerado; a bombinha entrega o remédio direto no pulmão, como uma carta com endereço certo em vez de panfletos jogados pela cidade. Você vai ter duas bombinhas: a de corticoide, todo dia, mesmo sem sintomas, para tratar a inflamação; e a de alívio, só na falta de ar. Se precisar da de alívio muitas vezes por semana, me procure. Me conta como você vai usar cada uma?', tempo: '45 s', analogia: 'Carta com endereço certo × panfletos pela cidade' },
    ],
    extra: 'E se o corticoide inalatório sozinho não controlar? (Associar beta-2 agonista de longa ação, sem aumentar a dose do corticoide; o de longa ação não serve para alívio imediato.)',
  },

  // ----------------------------------------------------- FAR-08 · Toxicidade da teofilina
  {
    id: 'FAR-08', materia: 'farmaco',
    titulo: 'Palpitações e tontura com o remédio antigo da asma',
    local: 'Pronto atendimento', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Dona Eunice, 66 anos, asmática há 30 anos, chega ao pronto atendimento com palpitações e tontura. Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual a hipótese? Que reações da teofilina ela apresenta, e quais ainda podem acontecer?',
      'Por que a teofilina é tão perigosa quando a dose sobe? Qual é a medida agora?',
      'Que lugar a teofilina ocupa hoje no tratamento da asma? O que deveria ser a base do tratamento dela?',
      'Dona Eunice tem medo de corticoide. Explique e oriente.',
    ],
    anamnese: [
      { tema: 'Remédios da asma', resposta: '"Uso teofilina há muitos anos. A bombinha de corticoide eu não uso: tenho medo de corticoide."' },
      { tema: 'Mudança recente', resposta: '"Semana passada eu estava com mais falta de ar e dobrei a teofilina por conta própria."' },
      { tema: 'Sintomas', resposta: '"Coração disparado, tontura, dor de cabeça e sensação de desmaio quando levanto."' },
      { tema: 'Convulsão e desmaio', resposta: '"Não desmaiei nem tive convulsão."' },
    ],
    placas: [
      { pedido: 'os sinais vitais', placa: 'PA 96 × 58 mmHg · FC 118 bpm · consciente e orientada.' },
      { pedido: 'a ausculta pulmonar', placa: 'Sibilos esparsos.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Dobrei o remédio porque estava com mais falta de ar."' },
      { gatilho: 'Se falar em corticoide inalatório', fala: '"Corticoide? Deus me livre, enfraquece os ossos."' },
      { gatilho: 'No final', fala: '"Então eu vou parar a teofilina?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou mudanças na dose: toxicidade da teofilina pela dose dobrada (palpitações, tontura, cefaleia e hipotensão)', pts: 1 },
        { tarefa: 1, item: 'Em doses elevadas pode causar convulsões e até morte súbita', pts: 1 },
        { tarefa: 2, item: 'Baixo índice terapêutico: a dose que trata fica perto da que intoxica', pts: 1 },
        { tarefa: 2, item: 'Suspender a teofilina e manter a paciente monitorizada', pts: 1 },
        { tarefa: 3, item: 'Papel restrito: só quando corticoide e cromoglicato são insuficientes', pts: 1 },
        { tarefa: 3, item: 'Base: corticoide inalatório (controle da inflamação crônica) e beta-2 de curta ação para alívio', pts: 1 },
        { tarefa: 4, item: 'Explicou que o corticoide inalatório age nos brônquios com broncosseletividade, diferente do corticoide oral de uso prolongado', pts: 1 },
      ],
    },
    errosCriticos: ['Manter ou aumentar a teofilina', 'Não reconhecer o risco de convulsão e morte súbita'],
    falaModelo: [
      { tarefa: 1, texto: 'A hipótese é toxicidade da teofilina, porque ela dobrou a dose. Já tem palpitações, tontura, cefaleia e hipotensão, e em doses elevadas a teofilina pode causar convulsões e até morte súbita.', tempo: '20 s' },
      { tarefa: 2, texto: 'A teofilina tem baixo índice terapêutico: a dose que trata fica muito perto da que intoxica, então dobrar a dose é perigoso. Suspendo a teofilina e mantenho a paciente monitorizada.', tempo: '20 s' },
      { tarefa: 3, texto: 'Hoje a teofilina tem papel restrito, para quando corticoide e cromoglicato não bastam. A base do tratamento dela deveria ser o corticoide inalatório, que controla a inflamação crônica, com o beta-2 de curta ação para alívio.', tempo: '25 s' },
      { tarefa: 4, texto: 'Dona Eunice, esse remédio antigo é como andar na beirada de um barranco: um passo a mais e a senhora cai, e dobrar a dose foi esse passo. O corticoide da bombinha é diferente do comprimido tomado por anos: vai direto aos brônquios, com ação mais seletiva, e trata a inflamação que causa a falta de ar. Vamos parar a teofilina e começar a bombinha. Me conta: o que a senhora entendeu sobre os dois remédios?', tempo: '40 s', analogia: 'Andar na beirada de um barranco' },
    ],
    extra: 'E se, numa crise grave, várias inalações de beta-2 não resolverem? (Associar brometo de ipratrópio, anticolinérgico, sem aumentar a dose do beta-2.)',
  },

  // ----------------------------------------------------- FAR-10 · Corticoide oral crônico e osteoporose
  {
    id: 'FAR-10', materia: 'farmaco',
    titulo: 'Anos de corticoide em comprimido e uma fratura na coluna',
    local: 'Ambulatório de pneumologia', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Dona Lúcia, 58 anos, com asma grave, vem ao ambulatório depois de uma fratura na coluna. Investigue a relação com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual reação adversa explica a fratura? Como o corticoide causa esse efeito?',
      'Que medidas você toma em relação ao corticoide e à osteoporose?',
      'Como acompanhar? Que outros medicamentos também causam osteoporose secundária?',
      'Explique à paciente por que a bombinha de corticoide é diferente do comprimido.',
    ],
    anamnese: [
      { tema: 'Remédios da asma', resposta: '"Tomo prednisona todo dia há 4 anos, porque é o único que segura. A bombinha de corticoide uso de vez em quando: esqueço e acho fraca."' },
      { tema: 'Como foi a fratura', resposta: '"Há 2 semanas senti uma dor forte nas costas só de levantar uma sacola de compras."' },
      { tema: 'Menopausa', resposta: '"Entrei na menopausa aos 50 anos."' },
      { tema: 'Outros remédios', resposta: '"Não uso heparina nem remédio para convulsão."' },
    ],
    placas: [
      { pedido: 'a radiografia da coluna', placa: 'Fratura por compressão de L2.' },
      { pedido: 'a densitometria', placa: 'Osteoporose.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Só levantei uma sacola e quebrou a coluna, doutor(a)."' },
      { gatilho: 'Se falar em reduzir a prednisona', fala: '"Mas sem ela eu não respiro!"' },
      { gatilho: 'No final', fala: '"Então o corticoide da bombinha também vai quebrar meus ossos?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou o uso de corticoide: osteoporose secundária à prednisona oral contínua, com fratura por fragilidade', pts: 1 },
        { tarefa: 1, item: 'Corticosteroides inibem a ação osteoblástica e aumentam a ação osteoclástica', pts: 1 },
        { tarefa: 2, item: 'Reduzir a dose de prednisona quando possível, otimizando o corticoide inalatório (controle da inflamação com broncosseletividade)', pts: 1 },
        { tarefa: 2, item: 'Associar bisfosfonato (alendronato, risedronato), indicado também na osteoporose por glicocorticoide', pts: 1 },
        { tarefa: 3, item: 'Monitorização periódica da densidade óssea (a cada 6 meses nesse contexto)', pts: 1 },
        { tarefa: 3, item: 'Outros: heparina e anticonvulsivantes (fenitoína e fenobarbital comprometem a vitamina D)', pts: 1 },
        { tarefa: 4, item: 'Explicou com linguagem acessível que o inalatório age direto nos brônquios e reforçou o uso regular', pts: 1 },
      ],
    },
    errosCriticos: ['Manter a prednisona sem tentar reduzir a dose', 'Não associar tratamento para a osteoporose'],
    falaModelo: [
      { tarefa: 1, texto: 'É osteoporose secundária ao corticosteroide, com fratura por fragilidade: a vértebra quebrou com um esforço pequeno. O corticoide inibe os osteoblastos, que formam osso, e estimula os osteoclastos, que reabsorvem.', tempo: '25 s' },
      { tarefa: 2, texto: 'Tento reduzir a dose de prednisona sempre que possível e, para isso, otimizo o corticoide inalatório, que controla a inflamação dos brônquios com broncosseletividade. Para o osso, associo um bisfosfonato, como alendronato ou risedronato, indicado também na osteoporose por glicocorticoide.', tempo: '30 s' },
      { tarefa: 3, texto: 'Acompanho com densitometria periódica, a cada seis meses nesse contexto. Outros fármacos que causam osteoporose secundária são a heparina e anticonvulsivantes como fenitoína e fenobarbital, que comprometem a vitamina D.', tempo: '25 s' },
      { tarefa: 4, texto: 'Dona Lúcia, o comprimido de corticoide espalha o remédio pelo corpo inteiro, inclusive pelos ossos, como uma chuva que molha a cidade toda. A bombinha é como um regador: leva o corticoide direto aos brônquios. Usando a bombinha todo dia, conseguimos diminuir o comprimido e proteger os seus ossos. Me conta: como a senhora vai usar a bombinha?', tempo: '35 s', analogia: 'Chuva na cidade toda × regador' },
    ],
    extra: 'Por que fenitoína e fenobarbital podem causar doença óssea? (Comprometem o metabolismo da vitamina D, inibindo a formação da forma ativa, o que pode levar a osteomalácia.)',
  },

  // ----------------------------------------------------- FAR-11 · Comparação: reações adversas dos fármacos da asma
  {
    id: 'FAR-11', materia: 'farmaco',
    titulo: 'Cinco remédios da asma, cinco reações',
    local: 'Banca do OSCE — reações adversas', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador apresenta cinco pacientes asmáticos com queixas ligadas aos medicamentos e pede que você identifique a reação adversa, explique o mecanismo e diga a medida.',
    mesa: [
      { tipo: 'texto', texto: 'Paciente A — salbutamol em comprimido todo dia: tremor, taquicardia e cãibras.\n\nPaciente B — teofilina com dose aumentada: palpitações, tontura e hipotensão.\n\nPaciente C — montelucaste há 2 meses: cefaleia, insônia e humor deprimido.\n\nPaciente D — omalizumabe: dor e vermelhidão no local da injeção e dor de garganta.\n\nPaciente E — prednisona oral contínua há anos: fratura vertebral com esforço mínimo.' },
    ],
    tarefas: [
      'Identifique a reação adversa e sua relação com o fármaco em cada paciente.',
      'Quais reações são potencialmente graves? Que reações graves do omalizumabe justificam vigilância?',
      'Qual é a medida para cada paciente?',
      'Por que a via inalatória é preferida para o beta-2 agonista e para o corticoide?',
    ],
    ator: [
      { gatilho: 'Examinador, no paciente B', fala: '"É só um pouco de palpitação, não é?"' },
      { gatilho: 'Examinador, no paciente D', fala: '"Se a reação no local é comum, por que ficar de olho?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'A: efeitos sistêmicos do beta-2 oral · B: toxicidade da teofilina (baixo índice terapêutico) · C: efeitos adversos do antileucotrieno · D: reações comuns do omalizumabe (local, cefaleia, faringite, sinusite) · E: osteoporose secundária ao corticoide', pts: 2 },
        { tarefa: 2, item: 'Teofilina: risco de convulsões e morte súbita em doses elevadas', pts: 1 },
        { tarefa: 2, item: 'Omalizumabe: reações sérias descritas — anafilaxia, trombocitopenia e câncer', pts: 1 },
        { tarefa: 3, item: 'A: voltar à via inalatória · B: suspender a teofilina e monitorizar · C: suspender o antileucotrieno e acompanhar humor e sono · D: manter com vigilância · E: reduzir a prednisona quando possível e associar bisfosfonato', pts: 2 },
        { tarefa: 4, item: 'Aerossol: broncosseletividade, menos efeitos sistêmicos; o corticoide inalatório reverte a inflamação com broncosseletividade', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar a toxicidade da teofilina como efeito leve', 'Não citar a anafilaxia entre as reações graves do omalizumabe'],
    falaModelo: [
      { tarefa: 1, texto: 'A tem efeitos sistêmicos do beta-2 agonista por via oral; B, toxicidade da teofilina, que tem baixo índice terapêutico; C, efeitos adversos do antileucotrieno, que incluem cefaleia, insônia e depressão; D, reações comuns do omalizumabe, como reação local e faringite; e E, osteoporose secundária ao corticoide oral.', tempo: '30 s' },
      { tarefa: 2, texto: 'A da teofilina é potencialmente grave, porque pode evoluir para convulsões e morte súbita. No omalizumabe, a reação local é comum, mas há reações sérias descritas, como anafilaxia, trombocitopenia e câncer, e por isso a vigilância continua.', tempo: '25 s' },
      { tarefa: 3, texto: 'Em A, volto à via inalatória. Em B, suspendo a teofilina e monitorizo. Em C, suspendo o antileucotrieno e acompanho o humor e o sono. Em D, mantenho com vigilância. Em E, reduzo a prednisona quando possível e associo bisfosfonato.', tempo: '30 s' },
      { tarefa: 4, texto: 'Pela via inalatória o remédio chega direto aos brônquios, com broncosseletividade, e o resto do corpo recebe muito menos. É como usar colírio em vez de comprimido para tratar o olho. Por isso o beta-2 em aerossol dá menos tremor e taquicardia, e o corticoide inalatório controla a inflamação com menos efeito no corpo todo.', tempo: '30 s', analogia: 'Colírio em vez de comprimido para o olho' },
    ],
    extra: 'Para quem o omalizumabe é indicado? (Anticorpo anti-IgE para asma alérgica grave, com IgE sérica elevada, não controlada com corticosteroide, de 11 a 50 anos.)',
  },
);
