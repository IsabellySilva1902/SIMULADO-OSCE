// Estações da prova anterior (4º semestre B 25.2), no formato da prova:
// o candidato conduz a anamnese, o paciente só conta o que for perguntado
// e o avaliador mostra placas com os exames pedidos.
ESTACOES.push(
  // ----------------------------------------------------- CIR-23 · Queimadura, via aérea e monóxido de carbono
  {
    id: 'CIR-23', materia: 'cir', prova: '25.2',
    titulo: 'Queimado no incêndio da cozinha',
    local: 'Pronto-socorro — sala de emergência', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Seu Antônio, 45 anos, 80 kg, chega 1 hora depois de um incêndio na cozinha de casa. Avalie o paciente, classifique a queimadura e defina a conduta. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [
      { tipo: 'tabela', titulo: 'Inspeção das lesões', linhas: [['Tronco anterior (inteiro)', 'bolhas rotas, base rósea e úmida, muito dolorosa, empalidece à pressão'], ['Membro superior direito (inteiro)', 'pele esbranquiçada, seca, endurecida, indolor ao toque'], ['Face', 'vermelhidão e ardor, sem bolhas']] },
      { tipo: 'tabela', titulo: 'Sinais vitais', linhas: [['PA', '130 × 80 mmHg'], ['FC', '104 bpm'], ['FR', '20 irpm'], ['SatO₂', '98% em ar ambiente']] },
    ],
    tarefas: [
      'Classifique a queimadura quanto à profundidade e calcule a extensão.',
      'Onde esse paciente deve ser tratado: ambulatório, hospital ou centro especializado? Justifique.',
      'Ele está tossindo. Avalie a via aérea: há indicação de intubação? Se não houver, o que você faz?',
      'Ele refere tontura e dor de cabeça. Qual é a hipótese, e que exame você pede? A saturação normal afasta essa hipótese?',
    ],
    anamnese: [
      { tema: 'Como aconteceu', resposta: '"O botijão vazou e pegou fogo na cozinha. Fiquei uns minutos lá dentro tentando apagar, com a porta e a janela fechadas."' },
      { tema: 'Sintomas respiratórios', resposta: '"Estou tossindo desde que saí de lá. Não sinto falta de ar."' },
      { tema: 'Outros sintomas', resposta: '"Estou com tontura e uma dor de cabeça forte."' },
      { tema: 'Antecedentes, medicamentos e alergias', resposta: '"Sou saudável, não tomo remédio e não tenho alergia."' },
    ],
    placas: [
      { pedido: 'o exame da via aérea', placa: 'Voz normal, sem rouquidão e sem estridor. Sem fuligem na boca ou no nariz, sem escarro carbonáceo; sobrancelhas e vibrissas preservadas.' },
      { pedido: 'o exame do tórax', placa: 'Expansibilidade preservada; murmúrio vesicular presente nos dois lados, sem ruídos adventícios.' },
      { pedido: 'a gasometria arterial', placa: 'Carboxi-hemoglobina elevada.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), está ardendo muito o peito. E não paro de tossir."' },
      { gatilho: 'Se disser que não vai intubar', fala: '"Mas e essa tosse? Não é perigoso?"' },
      { gatilho: 'Examinador, se o candidato citar a saturação', fala: '"A saturação está 98%. Isso não afasta a intoxicação?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Tronco anterior: 2º grau superficial · membro superior direito: 3º grau · face: 1º grau', pts: 1 },
        { tarefa: 1, item: 'SCQ: tronco anterior 18% + membro superior 9% = 27%; o 1º grau da face não entra na conta', pts: 1 },
        { tarefa: 2, item: 'Grande queimado (2º grau acima de 20% no adulto): centro especializado', pts: 1 },
        { tarefa: 2, item: 'Também transfere por espessura total sobre grandes articulações (membro superior inteiro), independentemente da área', pts: 1 },
        { tarefa: 3, item: 'Procurou sinais de via aérea em risco: estridor, rouquidão, sobrancelhas chamuscadas, fuligem e escarro carbonáceo em ambiente fechado', pts: 1 },
        { tarefa: 3, item: 'Placa sem alterações: sem indicação de via aérea definitiva agora; ofertar oxigênio e reavaliar a via aérea com frequência', pts: 1 },
        { tarefa: 4, item: 'Tontura e cefaleia após incêndio em ambiente fechado: suspeita de intoxicação por monóxido de carbono', pts: 1 },
        { tarefa: 4, item: 'O oxímetro não diferencia carboxi-hemoglobina de oxi-hemoglobina: SatO₂ normal não afasta; pedir gasometria arterial', pts: 1 },
      ],
    },
    errosCriticos: ['Afastar intoxicação por CO pela saturação normal', 'Incluir o 1º grau no cálculo da SCQ'],
    falaModelo: [
      { tarefa: 1, texto: 'No tronco anterior há bolhas, base rósea, dor e empalidecimento à pressão: 2º grau superficial. O membro superior direito está seco, esbranquiçado, endurecido e indolor: 3º grau. A face tem só eritema: 1º grau, que não entra na conta. Pela regra dos nove, tronco anterior 18% mais membro superior 9%: 27% de superfície corporal queimada.', tempo: '35 s' },
      { tarefa: 2, texto: 'Ele é um grande queimado, com 2º grau acima de 20% da superfície corporal no adulto, e ainda tem espessura total sobre grandes articulações. Deve ser tratado em centro especializado de queimados.', tempo: '20 s' },
      { tarefa: 3, texto: 'Pela tosse e pelo incêndio em ambiente fechado, avalio a via aérea: procuro estridor, rouquidão, sobrancelhas chamuscadas, fuligem e escarro carbonáceo. A placa não mostra nenhum desses sinais, então não há indicação de via aérea definitiva agora. Oferto oxigênio e reavalio a via aérea com frequência, porque o edema pode evoluir.', tempo: '30 s' },
      { tarefa: 4, texto: 'Tontura e cefaleia depois de ficar num ambiente fechado com fogo me fazem pensar em intoxicação por monóxido de carbono. A saturação de 98% não afasta, porque o oxímetro lê a carboxi-hemoglobina como se fosse oxi-hemoglobina. Peço gasometria arterial. Seu Antônio, o gás da fumaça ocupa no sangue o lugar do oxigênio e engana o aparelho do dedo, como alguém sentado na cadeira de outra pessoa: o fiscal conta a sala cheia, mas falta gente. Por isso vou colher sangue da artéria. Me conta: a dor de cabeça começou depois do incêndio?', tempo: '45 s', analogia: 'Alguém sentado na cadeira do oxigênio' },
    ],
    extra: 'Quanto de Ringer lactato pela fórmula de Parkland? (4 × 80 × 27 = 8.640 mL em 24 h; metade, 4.320 mL, nas primeiras 8 h contadas a partir da queimadura.)',
  },

  // ----------------------------------------------------- MEN-21 · Transtorno bipolar tipo I, episódio maníaco
  {
    id: 'MEN-21', materia: 'mental', prova: '25.2',
    titulo: 'Ela não dorme há dias e diz que vai ficar rica',
    local: 'Pronto atendimento de saúde mental', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Mariana, 32 anos, veio ao pronto atendimento de saúde mental. Realize a anamnese, formule a hipótese diagnóstica e explique o diagnóstico à paciente e ao acompanhante.',
    mesa: [],
    tarefas: [
      'Realize a anamnese: história atual, história psiquiátrica, uso de substâncias, impacto funcional e antecedentes familiares.',
      'Descreva os achados do exame do estado mental.',
      'Qual é a hipótese diagnóstica? Justifique.',
      'Explique o diagnóstico à paciente e ao acompanhante.',
    ],
    anamnese: [
      { tema: 'Queixa e história atual', resposta: '"Estou ótima, nunca estive tão bem! Há umas duas semanas durmo duas horas por noite e acordo cheia de energia. Tenho mil ideias: vou abrir três empresas ao mesmo tempo."' },
      { tema: 'Impacto funcional', resposta: '"Pedi demissão semana passada, porque meu chefe não acompanha meu ritmo. Gastei toda a poupança em roupas e dei entrada num carro."' },
      { tema: 'História psiquiátrica', resposta: '"Nunca fiquei assim. Há uns anos tive uma fase muito triste, mas passou sozinha. Nunca tratei."' },
      { tema: 'Uso de substâncias', resposta: '"Não uso droga nenhuma. Uma cerveja no fim de semana, às vezes. Café, uns três por dia."' },
      { tema: 'Doenças e medicamentos', resposta: '"Não tenho doença nenhuma e não tomo remédio."' },
      { tema: 'Antecedentes familiares', resposta: '"Minha tia, irmã da minha mãe, tem transtorno bipolar. Ela já foi internada."' },
      { tema: 'Ideação suicida', resposta: '"Morrer? Imagina, nunca pensei nisso. Estou feliz demais!"' },
      { tema: 'Alterações de percepção', resposta: '"Vozes? Não, não ouço nada estranho."' },
      { tema: 'Acompanhante', resposta: '"Meu irmão veio comigo, está lá fora esperando." (Se pedir para chamá-lo, ninguém entra: siga explicando como se ele estivesse na sala.)' },
    ],
    placas: [
      { pedido: 'os dados do exame do estado mental', placa: 'Vestes chamativas e maquiagem carregada; inquieta, levanta-se várias vezes; fala acelerada e em volume alto, difícil de interromper; humor eufórico, com momentos de irritação; orientada; nega alterações de sensopercepção; sem insight ("não estou doente").' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Que bom te ver! Você é ótimo(a), sabia? Vamos rápido que eu tenho muita coisa para fazer hoje."' },
      { gatilho: 'Se pedir para chamar o irmão', fala: '(A paciente vai até a porta e chama; ninguém entra.) "Ele já vem!" — Examinador: oriente o candidato a seguir como se o irmão estivesse na sala.' },
      { gatilho: 'No final', fala: '"Eu não estou doente, doutor(a). Estou é feliz!"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Queixa nas palavras da paciente; início e curso (cerca de 2 semanas); sono reduzido sem cansaço, energia e planos aumentados', pts: 1 },
        { tarefa: 1, item: 'História psiquiátrica prévia, medicamentos e hábitos de vida (álcool, outras substâncias, cafeína)', pts: 1 },
        { tarefa: 1, item: 'Impacto funcional: demissão e gastos excessivos', pts: 1 },
        { tarefa: 1, item: 'Antecedentes familiares (tia com transtorno bipolar) e pergunta direta sobre ideação suicida', pts: 1 },
        { tarefa: 2, item: 'EEM: aparência, comportamento (inquietação), fala acelerada, humor eufórico/irritável, sensopercepção sem alterações, insight ausente', pts: 1 },
        { tarefa: 3, item: 'Hipótese: transtorno bipolar tipo I, episódio maníaco', pts: 1 },
        { tarefa: 3, item: 'Justificou: sintomas de mania com prejuízo funcional importante, uso de substâncias afastado, antecedente familiar', pts: 1 },
        { tarefa: 3, item: 'Não interpretou o irmão "lá fora" como alucinação: a sensopercepção está preservada', pts: 1 },
        { tarefa: 4, item: 'Explicou o diagnóstico à paciente e ao acompanhante, com linguagem acessível, sem julgamento, acolhendo a falta de insight', pts: 1 },
      ],
    },
    errosCriticos: ['Interpretar o irmão que não entrou como alucinação e errar o diagnóstico', 'Não perguntar sobre antecedentes familiares'],
    falaModelo: [
      { tarefa: 1, texto: 'Começo pela queixa nas palavras dela e pela história atual: há cerca de duas semanas dorme duas horas por noite sem cansaço, com muita energia e muitos planos. Pergunto sobre episódios anteriores, tratamentos e remédios, e sobre álcool, outras substâncias e café. Vejo o impacto na vida: pediu demissão e gastou a poupança. Pergunto diretamente sobre ideação suicida e sobre a família: há uma tia com transtorno bipolar.', tempo: '45 s' },
      { tarefa: 2, texto: 'No exame do estado mental: vestes chamativas, inquieta, fala acelerada e alta, difícil de interromper, humor eufórico com momentos de irritação, orientada, sem alteração de sensopercepção e sem insight: não reconhece que está doente.', tempo: '25 s' },
      { tarefa: 3, texto: 'A hipótese é transtorno bipolar tipo I, em episódio maníaco: sintomas de mania com prejuízo funcional importante, uso de substâncias afastado e antecedente familiar de transtorno bipolar. O irmão que "está lá fora" não é alucinação: ela não tem alteração de sensopercepção, ele só não entrou na sala.', tempo: '30 s' },
      { tarefa: 4, texto: 'Mariana, e você que veio com ela: o que está acontecendo tem nome, é o transtorno bipolar, uma doença do humor, e já existe na família, como na sua tia. Agora o humor está acelerado demais, como um carro sem freio numa descida: parece ótimo, mas é perigoso, por isso o sono sumiu e vieram os gastos e a demissão. Tem tratamento, e a família ajuda muito a perceber os sinais. Vamos cuidar disso juntos. Me contem: o que vocês entenderam?', tempo: '45 s', analogia: 'Carro sem freio numa descida' },
    ],
    extra: 'Por que perguntar sobre substâncias e medicamentos? (Para afastar causas orgânicas e induzidas por substâncias; em saúde mental, a anamnese é em grande parte a própria ferramenta diagnóstica.)',
  },

  // ----------------------------------------------------- FAR-19 · AINE: mecanismo, riscos e uso racional
  {
    id: 'FAR-19', materia: 'farmaco', prova: '25.2',
    titulo: 'Tomo o anti-inflamatório todo dia, por garantia',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Dona Vera, 62 anos, hipertensa, vem renovar a receita de ibuprofeno, que usa todos os dias há 4 meses, desde uma dor no joelho. Explique como o medicamento age, seus efeitos e riscos, e oriente o uso.',
    mesa: [],
    tarefas: [
      'Explique o mecanismo de ação dos AINEs e seus efeitos terapêuticos.',
      'Quais são os riscos do uso contínuo? Quais deles preocupam nessa paciente?',
      'Pela anamnese, ela precisa continuar o medicamento? Oriente o uso racional.',
      'Explique à paciente, em linguagem simples.',
    ],
    anamnese: [
      { tema: 'Dor atual', resposta: '"Para falar a verdade, a dor do joelho passou faz uns dois meses. Continuo tomando para não voltar."' },
      { tema: 'Como usa', resposta: '"Um comprimido de manhã e outro à noite, todo dia, às vezes com o estômago vazio."' },
      { tema: 'Sintomas digestivos', resposta: '"Às vezes sinto uma queimação no estômago."' },
      { tema: 'Outras doenças e remédios', resposta: '"Tenho pressão alta, tomo um remédio para ela e um diurético. Não uso anticoagulante."' },
      { tema: 'Coração e rins', resposta: '"Nunca tive infarto nem derrame. Problema de rim, que eu saiba, não."' },
    ],
    placas: [
      { pedido: 'exames recentes', placa: 'Creatinina 1,3 mg/dL (há 6 meses: 0,9 mg/dL).' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), só vim pegar a receita do ibuprofeno, que acabou."' },
      { gatilho: 'Se falar em suspender', fala: '"Mas e se a dor voltar?"' },
      { gatilho: 'No final', fala: '"Anti-inflamatório não é remédio fraco?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Inibem a ciclo-oxigenase (COX-1 e COX-2) e reduzem a produção de prostaglandinas', pts: 1 },
        { tarefa: 1, item: 'Efeitos analgésico, antitérmico e anti-inflamatório (analgesia em 1–2 h; efeito anti-inflamatório pleno em 2–3 semanas)', pts: 1 },
        { tarefa: 2, item: 'Gastrointestinal: menos prostaglandinas protetoras da mucosa (gastrite, úlcera, sangramento), maior nos não seletivos', pts: 1 },
        { tarefa: 2, item: 'Renal: inibição das prostaglandinas vasodilatadoras renais, somada ao diurético (creatinina subindo)', pts: 1 },
        { tarefa: 2, item: 'Cardiovascular: coxibes e alguns AINEs com perfil menos favorável; naproxeno é o mais seguro desse ponto de vista', pts: 1 },
        { tarefa: 3, item: 'Perguntou se ainda há dor: não há → suspender (sem indicação, só risco)', pts: 1 },
        { tarefa: 3, item: 'Uso racional: só com indicação e pelo tempo necessário; para dor leve a moderada, paracetamol é primeira linha; nunca "por garantia"', pts: 1 },
        { tarefa: 4, item: 'Explicou com linguagem acessível, valorizou a queimação como possível efeito adverso e verificou a compreensão', pts: 1 },
      ],
    },
    errosCriticos: ['Renovar o AINE sem perguntar se ainda há dor', 'Não citar os riscos gastrointestinais e renais'],
    falaModelo: [
      { tarefa: 1, texto: 'Os AINEs inibem a ciclo-oxigenase, a COX-1 e a COX-2, e assim reduzem a produção de prostaglandinas. Com isso têm efeito analgésico, antitérmico e anti-inflamatório. A analgesia aparece em 1 a 2 horas; o efeito anti-inflamatório pleno exige 2 a 3 semanas de uso contínuo.', tempo: '30 s' },
      { tarefa: 2, texto: 'O uso contínuo traz riscos. No estômago, as prostaglandinas protegem a mucosa: sem elas, há gastrite, úlcera e sangramento, mais com os não seletivos, como o ibuprofeno, e a queimação dela pode ser isso. No rim, os AINEs inibem as prostaglandinas vasodilatadoras e, somados ao diurético, pioram a função renal, como mostra a creatinina subindo. E há risco cardiovascular, maior com os coxibes; o naproxeno é o mais seguro desse ponto de vista.', tempo: '45 s' },
      { tarefa: 3, texto: 'Perguntando melhor, ela não tem dor há dois meses. Então não há indicação: suspendo o ibuprofeno. Uso racional é usar só quando há indicação e pelo tempo necessário; para dor leve a moderada, o paracetamol é a primeira linha.', tempo: '25 s' },
      { tarefa: 4, texto: 'Dona Vera, o anti-inflamatório desliga o alarme da dor e da inflamação, mas também desliga proteções do estômago e dos rins. Tomar sem dor é como pagar o seguro de um carro que a senhora já vendeu: só tem o custo, sem nenhum benefício. Como a dor passou, vamos parar. Se voltar, me procure, que escolhemos a melhor opção. A queimação no estômago merece atenção: me avise se piorar ou se as fezes ficarem escuras. Me conta: o que a senhora vai fazer com o remédio?', tempo: '45 s', analogia: 'Seguro de um carro que já foi vendido' },
    ],
    extra: 'Por que o paracetamol não substitui o AINE quando há sinais inflamatórios? (O paracetamol não tem ação anti-inflamatória relevante.)',
  },

  // ----------------------------------------------------- EPI-21 · Caso-controle, odds ratio e intervalo de confiança
  {
    id: 'EPI-21', materia: 'epi', prova: '25.2',
    titulo: 'A coordenadora quer entender o próprio estudo',
    local: 'Secretaria de saúde — reunião técnica', papel: 'Médico(a) da vigilância', interacao: 'paciente',
    cenario: 'A coordenadora da vigilância (atriz) vai descrever um estudo feito pela equipe dela. Identifique o tipo de estudo pela descrição, explique como ele funciona e suas vantagens, e interprete os resultados.',
    mesa: [
      { tipo: 'tabela', titulo: 'Resultado entregue pela coordenadora', linhas: [['Odds ratio', '4,0'], ['Intervalo de confiança de 95%', '2,1 a 7,6']] },
    ],
    tarefas: [
      'Identifique o desenho do estudo e justifique pela forma de seleção dos participantes.',
      'Explique como esse estudo funciona e quais são suas vantagens e limitações.',
      'O que significa a odds ratio de 4? E o intervalo de confiança?',
      'Explique o resultado à coordenadora, em linguagem simples.',
    ],
    anamnese: [
      { tema: 'Como os participantes foram escolhidos', resposta: '"Pegamos 80 crianças internadas com uma hepatite rara e 160 crianças sem a doença, do mesmo bairro e da mesma idade."' },
      { tema: 'O que foi investigado', resposta: '"Perguntamos às mães se, nos 6 meses antes, a criança tinha bebido água de poço."' },
      { tema: 'Tempo e custo', resposta: '"Fizemos tudo em 2 meses, com uma equipe pequena."' },
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Doutor(a), fizemos um estudo sobre a hepatite que apareceu nas crianças do bairro e preciso apresentar ao secretário. Que estudo é esse e o que significam esses números?"' },
      { gatilho: 'Se classificar antes de perguntar a seleção', fala: '"Mas você nem perguntou como escolhemos as crianças!"' },
      { gatilho: 'Se usar "odds ratio" sem explicar', fala: '"Odds o quê? Fala português comigo."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou como os participantes foram escolhidos antes de classificar', pts: 1 },
        { tarefa: 1, item: 'Caso-controle: seleção pela doença (casos e controles sem a doença), investigando a exposição no passado', pts: 1 },
        { tarefa: 2, item: 'Funciona de trás para frente: parte do desfecho e investiga a exposição anterior, com controles comparáveis (mesma idade e bairro)', pts: 1 },
        { tarefa: 2, item: 'Vantagens: rápido e adequado a doenças raras (parte dos casos, sem acompanhar milhares de pessoas); limitação clássica: viés de memória', pts: 1 },
        { tarefa: 3, item: 'OR = 4: a chance de exposição (água de poço) entre os casos é 4 vezes a dos controles; associação forte', pts: 1 },
        { tarefa: 3, item: 'Não se calcula risco relativo: o caso-controle não mede incidência', pts: 1 },
        { tarefa: 3, item: 'IC 95% de 2,1 a 7,6 não inclui o 1: associação estatisticamente significativa; a amplitude mostra a precisão da estimativa', pts: 1 },
        { tarefa: 4, item: 'Explicou sem jargão e sem afirmar causalidade definitiva', pts: 1 },
      ],
    },
    errosCriticos: ['Classificar como coorte por usar dados do passado ou por ter grupos de comparação', 'Interpretar o IC sem verificar se ele inclui o 1'],
    falaModelo: [
      { tarefa: 1, texto: 'Antes de classificar, pergunto como os participantes foram escolhidos. Partiram de crianças com a hepatite e de crianças sem a doença, e investigaram a exposição no passado, a água de poço. É um estudo de caso-controle.', tempo: '20 s' },
      { tarefa: 2, texto: 'Ele funciona de trás para frente: parte do desfecho e investiga a exposição anterior, comparando com controles parecidos, da mesma idade e do mesmo bairro. As vantagens são ser rápido e adequado a doenças raras, porque parte direto dos casos, sem acompanhar milhares de pessoas. A limitação clássica é o viés de memória: as mães das crianças doentes podem lembrar mais da exposição.', tempo: '35 s' },
      { tarefa: 3, texto: 'A odds ratio de 4 significa que a chance de ter bebido água de poço entre as crianças doentes é 4 vezes a das crianças sem a doença: associação forte. Não calculo risco relativo, porque o caso-controle não mede incidência. O intervalo de confiança de 95%, de 2,1 a 7,6, não inclui o 1, então a associação é estatisticamente significativa; a largura do intervalo mostra a precisão da estimativa.', tempo: '35 s' },
      { tarefa: 4, texto: 'Coordenadora, vocês olharam para trás, como um detetive que parte do crime e procura as pistas: entre as crianças doentes, beber água de poço foi bem mais comum. O intervalo é a margem de erro: mesmo no pior cenário, a chance continua cerca do dobro, então o achado dificilmente é acaso. Mas um estudo assim mostra associação; sozinho, não prova a causa. Me conta como você vai apresentar isso ao secretário?', tempo: '40 s', analogia: 'Detetive que parte do crime e procura as pistas' },
    ],
    extra: 'E se o IC fosse de 0,8 a 9,0? (Incluiria o 1: não haveria evidência de associação significativa; o intervalo largo indica estimativa imprecisa.)',
  },

  // ----------------------------------------------------- MUL-15 · Vulvovaginite: candidíase
  {
    id: 'MUL-15', materia: 'mulher', prova: '25.2',
    titulo: 'Corrimento e coceira que não passam',
    local: 'UBS — consulta de ginecologia', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Paula, 30 anos, procura a UBS com queixa de corrimento vaginal. Conduza a anamnese dirigida, formule a hipótese diagnóstica e oriente a paciente.',
    mesa: [],
    tarefas: [
      'Conduza a anamnese dirigida ao corrimento vaginal.',
      'Qual é a hipótese diagnóstica? Justifique e cite os diagnósticos diferenciais.',
      'Como tratar?',
      'Oriente a paciente: é uma IST? O parceiro precisa ser tratado?',
    ],
    anamnese: [
      { tema: 'Características do corrimento', resposta: '"É branco, grosso, em pedacinhos, parecendo leite talhado. Não tem cheiro."' },
      { tema: 'Sintomas associados', resposta: '"Coça muito, arde quando faço xixi e dói na relação."' },
      { tema: 'Desencadeantes e fatores de piora', resposta: '"Começou depois que tomei antibiótico para uma infecção de garganta. Piora com o calor."' },
      { tema: 'Antecedentes ginecológicos', resposta: '"Menstruação regular, a última foi há 10 dias. Faço o preventivo todo ano, o último foi normal. Uso anticoncepcional oral."' },
      { tema: 'Episódios, consultas e tratamentos anteriores', resposta: '"Tive uma vez, há uns 2 anos; a ginecologista passou um creme e melhorou. Desta vez ainda não usei nada."' },
      { tema: 'História sexual', resposta: '"Tenho um parceiro fixo há 5 anos. Ele não tem nenhum sintoma."' },
      { tema: 'Gestação, doenças e medicamentos', resposta: '"Não estou grávida, fiz teste semana passada. Não tenho diabetes nem outra doença. Só tomo o anticoncepcional."' },
    ],
    placas: [
      { pedido: 'o exame ginecológico', placa: 'Vulva hiperemiada e edemaciada, com fissuras. Conteúdo vaginal branco, grumoso, aderido às paredes. Colo sem alterações.' },
      { pedido: 'o pH vaginal e o teste das aminas', placa: 'pH 4,0 · teste das aminas negativo.' },
      { pedido: 'o exame a fresco', placa: 'Pseudo-hifas e leveduras.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), estou com um corrimento e uma coceira que não aguento mais."' },
      { gatilho: 'Ao ouvir o diagnóstico', fala: '"Peguei isso do meu marido? É doença sexualmente transmissível?"' },
      { gatilho: 'Variação de algumas bancas (prova 25.2)', fala: 'O ator respondeu como vaginose: corrimento acinzentado, com cheiro de peixe que piora depois da relação, sem coceira. A hipótese deve seguir as respostas do ator.' },
      { gatilho: 'No final', fala: '"Meu marido precisa tomar remédio também?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Características do corrimento: cor, odor, consistência e quantidade', pts: 1 },
        { tarefa: 1, item: 'Sintomas associados (prurido, ardor, disúria, dispareunia) e fatores de piora ou desencadeantes (antibiótico)', pts: 1 },
        { tarefa: 1, item: 'Antecedentes ginecológicos, episódios prévios, consultas e tratamentos já realizados', pts: 1 },
        { tarefa: 1, item: 'História sexual, método contraceptivo e possibilidade de gestação', pts: 1 },
        { tarefa: 2, item: 'Candidíase vulvovaginal: corrimento branco grumoso sem odor, prurido, disúria e dispareunia, após antibiótico; pH < 4,5 e aminas negativas', pts: 1 },
        { tarefa: 2, item: 'Diferenciais: vaginose bacteriana (acinzentado, odor fétido, pH > 4,5, aminas positivas) e tricomoníase (amarelo-esverdeado, bolhoso, colo em framboesa)', pts: 1 },
        { tarefa: 3, item: 'Fluconazol 150 mg VO dose única (não em gestantes), ou miconazol creme vaginal por 7 noites', pts: 1 },
        { tarefa: 4, item: 'Não é IST: vem do desequilíbrio da flora (o fungo pode viver na vagina em pequena quantidade)', pts: 1 },
        { tarefa: 4, item: 'Parceiro assintomático não precisa ser tratado; deve ser avaliado se tiver sintomas', pts: 1 },
      ],
    },
    errosCriticos: ['Dizer que é IST e tratar o parceiro assintomático', 'Fechar o diagnóstico sem perguntar as características do corrimento'],
    falaModelo: [
      { tarefa: 1, texto: 'Paula, me conta do corrimento: cor, cheiro, consistência e quantidade. Tem coceira, ardor ao urinar, dor na relação? Começou depois de algo, como antibiótico? O que piora? Pergunto da menstruação, do último preventivo, se já teve isso antes, se passou em consulta e que tratamento usou. E, sem julgamento, a história sexual, o método para evitar gravidez e se há chance de estar grávida.', tempo: '40 s' },
      { tarefa: 2, texto: 'A hipótese é candidíase vulvovaginal: corrimento branco, grumoso, como leite talhado, sem odor, com coceira intensa, ardor e dor na relação, logo depois de antibiótico. No exame, vulva vermelha e com fissuras, pH abaixo de 4,5 e aminas negativas. Os diferenciais são a vaginose bacteriana, com corrimento acinzentado, odor de peixe e pH acima de 4,5, e a tricomoníase, com corrimento amarelo-esverdeado e bolhoso.', tempo: '40 s' },
      { tarefa: 3, texto: 'Trato com fluconazol 150 mg por via oral em dose única, ou miconazol creme vaginal por 7 noites. Fluconazol não é usado em gestantes.', tempo: '15 s' },
      { tarefa: 4, texto: 'Paula, isso não é uma infecção sexualmente transmissível. Esse fungo pode viver na vagina em pequena quantidade; o antibiótico desequilibrou a flora e ele cresceu, como o mato que toma conta do jardim quando cortam as plantas que o seguravam. Seu marido não precisa tratar se não tiver sintomas; se ele tiver coceira ou vermelhidão, deve ser avaliado. Me conta como você vai usar o remédio?', tempo: '40 s', analogia: 'Mato que toma conta quando cortam as plantas que o seguravam' },
    ],
    extra: 'E se ela tivesse 4 ou mais episódios no ano? (Candidíase de repetição: confirmar laboratorialmente e fazer cultura para identificar espécies não albicans.)',
  },
);
