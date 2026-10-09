// Estações de Epidemiologia (EPI-02 a EPI-10). EPI-01 está em estacoes.js.
ESTACOES.push(
  // ----------------------------------------------------- EPI-02 · Mortalidade infantil e materna
  {
    id: 'EPI-02', materia: 'epi',
    titulo: 'A mortalidade infantil do município bateu a meta?',
    local: 'Secretaria Municipal de Saúde', papel: 'Médico(a) da vigilância epidemiológica', interacao: 'examinador',
    cenario: 'O secretário de saúde (papel do examinador) vai apresentar os indicadores de 2025 na Câmara e pede sua ajuda. A meta pactuada no plano municipal é de 12 óbitos infantis por 1.000 nascidos vivos. Em 2024, o coeficiente de mortalidade infantil foi de 18 por 1.000.',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados de 2025', linhas: [['Nascidos vivos', '4.000'], ['Óbitos em menores de 1 ano', '60'], ['  · 0 a 6 dias', '30'], ['  · 7 a 27 dias', '10'], ['  · 28 dias a < 1 ano', '20'], ['Óbitos maternos', '3']] },
    ],
    tarefas: [
      'Calcule o coeficiente de mortalidade infantil e seus componentes. A meta foi cumprida? Quanto variou em relação a 2024?',
      'Qual componente predomina, e o que isso sugere sobre onde investir?',
      'Calcule a razão de mortalidade materna e diga o que ela avalia.',
      'Explique ao secretário, em linguagem simples, por que esse indicador importa.',
    ],
    ator: [
      { gatilho: 'Secretário, ao começar', fala: '"Caiu de 18 para 15, então está ótimo, né? Posso dizer que batemos a meta?"' },
      { gatilho: 'Se citar componentes', fala: '"Mas morte de bebê não é tudo a mesma coisa?"' },
      { gatilho: 'No final', fala: '"Se eu tiver dinheiro para uma coisa só, onde eu coloco?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'CMI = 60 ÷ 4.000 × 1.000 = 15 por 1.000 nascidos vivos; meta (12) não cumprida', pts: 2 },
        { tarefa: 1, item: 'Componentes: neonatal precoce 7,5; neonatal tardio 2,5; pós-neonatal 5,0 por 1.000 NV', pts: 1 },
        { tarefa: 1, item: 'Redução de (18 − 15) ÷ 18 ≈ 16,7% em relação a 2024', pts: 1 },
        { tarefa: 2, item: 'Predomínio neonatal (10/1.000; 2/3 dos óbitos), sobretudo precoce (< 7 dias): fatores maternos e asfixia; neonatal tardio: infecções perinatais', pts: 1 },
        { tarefa: 2, item: 'Pós-neonatal (5/1.000) ligado a infecções, diarreia, desnutrição, saneamento', pts: 1 },
        { tarefa: 3, item: 'RMM = 3 ÷ 4.000 × 100.000 = 75 por 100.000 NV; avalia a qualidade da assistência ao pré-natal, ao parto e ao puerpério', pts: 1 },
        { tarefa: 4, item: 'Explicou que é indicador sensível de condições de vida e da assistência, sem jargão', pts: 1 },
      ],
    },
    errosCriticos: ['Usar a população total no denominador do CMI', 'Afirmar que a meta foi cumprida'],
    falaModelo: [
      { tarefa: 1, texto: 'O coeficiente de mortalidade infantil é 60 dividido por 4.000 nascidos vivos, vezes 1.000: 15 por 1.000. A meta era 12, então não foi cumprida. Houve redução de 18 para 15, ou seja, 3 dividido por 18, cerca de 16,7%. Os componentes: neonatal precoce 7,5, neonatal tardio 2,5 e pós-neonatal 5 por 1.000.', tempo: '40 s' },
      { tarefa: 2, texto: 'Predomina o componente neonatal, 10 por 1.000, dois terços dos óbitos, principalmente na primeira semana, o neonatal precoce, ligado a fatores maternos e asfixia; o neonatal tardio se liga a infecções perinatais. O pós-neonatal, de 5, depende mais de determinantes ambientais: infecções, diarreia e desnutrição.', tempo: '35 s' },
      { tarefa: 3, texto: 'A razão de mortalidade materna é 3 dividido por 4.000, vezes 100.000: 75 por 100.000 nascidos vivos. Ela mede a qualidade da assistência à gestante, no pré-natal, no parto e no puerpério.', tempo: '20 s' },
      { tarefa: 4, texto: 'Secretário, a mortalidade infantil é como o termômetro de uma cidade: mostra se a casa, a água, a comida e o atendimento estão funcionando. Melhoramos, mas ainda não batemos a meta. Como a maioria dos bebês está morrendo na primeira semana de vida, o foco precisa estar na gestante e no nascimento. Faz sentido para o senhor?', tempo: '35 s', analogia: 'Mortalidade infantil como termômetro da cidade' },
    ],
    extra: 'Por que o denominador do CMI são os nascidos vivos, e não a população? (Os nascidos vivos são a população exposta ao risco de morrer antes de 1 ano.)',
  },

  // ----------------------------------------------------- EPI-03 · Caso-controle e odds ratio
  {
    id: 'EPI-03', materia: 'epi',
    titulo: 'Câncer de bexiga e o corante da fábrica',
    local: 'Ambulatório de saúde do trabalhador', papel: 'Médico(a) do trabalho', interacao: 'paciente',
    cenario: 'O representante do sindicato dos trabalhadores de uma fábrica de tintas pede uma reunião. Vários colegas tiveram câncer de bexiga, e ele quer saber se o corante usado na fábrica tem relação. Uma equipe da universidade fez um estudo: selecionou pacientes com câncer de bexiga atendidos no hospital regional e pessoas sem a doença, do mesmo hospital e da mesma faixa etária, e perguntou sobre a exposição ao corante no passado.',
    mesa: [
      { tipo: 'tabela', titulo: 'Resultados do estudo', linhas: [['Casos (câncer de bexiga) expostos ao corante', '40'], ['Casos não expostos', '60'], ['Controles (sem câncer) expostos', '20'], ['Controles não expostos', '180']] },
    ],
    tarefas: [
      'Qual é o desenho do estudo? Por que ele foi escolhido para esta pergunta?',
      'Calcule a medida de associação adequada e interprete. Por que não se calcula risco relativo?',
      'Cite dois vieses ou fatores de confusão que podem distorcer esse resultado e como lidar com eles.',
      'Explique o resultado ao representante do sindicato.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Doutor(a), então está provado que o corante dá câncer?"' },
      { gatilho: 'Se citar tabagismo', fala: '"Muita gente lá fuma também, é verdade."' },
      { gatilho: 'Se usar o termo "odds ratio"', fala: '"Odds o quê? Fala português comigo."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Estudo de caso-controle: parte do desfecho e investiga a exposição no passado', pts: 1 },
        { tarefa: 1, item: 'Adequado para doença rara: parte dos casos, sem precisar acompanhar milhares de pessoas', pts: 1 },
        { tarefa: 2, item: 'OR = (40 × 180) ÷ (60 × 20) = 7.200 ÷ 1.200 = 6', pts: 2 },
        { tarefa: 2, item: 'Interpretou: a chance de exposição entre os casos é 6 vezes a dos controles; associação forte', pts: 1 },
        { tarefa: 2, item: 'Não há RR porque o caso-controle não mede incidência (o número de casos foi definido pelo pesquisador)', pts: 1 },
        { tarefa: 3, item: 'Viés de memória (casos lembram mais da exposição); viés de seleção dos controles; confusão pelo tabagismo → ajustar (análise multivariada/estratificação) ou parear', pts: 1 },
        { tarefa: 4, item: 'Explicou sem jargão, sem afirmar causalidade definitiva (um caso-controle isolado pede cautela)', pts: 1 },
      ],
    },
    errosCriticos: ['Calcular risco relativo em caso-controle', 'Afirmar causalidade comprovada a partir de um estudo observacional'],
    falaModelo: [
      { tarefa: 1, texto: 'É um estudo de caso-controle: partiram de quem já tem a doença e de quem não tem, e olharam para trás em busca da exposição. É o desenho mais eficiente para doença rara, porque parte direto dos casos, sem precisar acompanhar milhares de pessoas.', tempo: '25 s' },
      { tarefa: 2, texto: 'A medida é a odds ratio: 40 vezes 180, dividido por 60 vezes 20, dá 7.200 sobre 1.200, igual a 6. A chance de ter sido exposto ao corante entre os doentes é 6 vezes maior que entre os sem câncer: associação forte. Não calculo risco relativo porque o caso-controle não mede incidência: quem decidiu quantos doentes entrariam foi o pesquisador.', tempo: '40 s' },
      { tarefa: 3, texto: 'Pode haver viés de memória, a limitação clássica do caso-controle: quem tem a doença recorda a exposição de forma diferente. E pode haver confusão: se o tabagismo for mais comum entre os expostos e também estiver ligado à doença, ele distorce a associação. Para isso, faço análise ajustada ou estratificada.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Antônio, o estudo é como um detetive que chega depois do crime: olha para trás e procura pistas. A pista do corante apareceu 6 vezes mais entre quem teve câncer. É um sinal forte, que precisa ser levado a sério, mas ainda não é prova: esse tipo de estudo tem limitações, e outros fatores, como o cigarro, podem estar no meio. O que o senhor vai levar para os colegas?', tempo: '40 s', analogia: 'Detetive que olha para trás procurando pistas' },
    ],
    extra: 'Que critério de Bradford Hill a OR alta reforça, e qual exige que a exposição venha antes da doença? (Força da associação; temporalidade.)',
  },

  // ----------------------------------------------------- EPI-04 · Coorte, RR e risco atribuível
  {
    id: 'EPI-04', materia: 'epi',
    titulo: 'O barulho da metalúrgica e a audição',
    local: 'Serviço de saúde ocupacional', papel: 'Médico(a) do trabalho', interacao: 'paciente',
    cenario: 'Uma metalúrgica acompanhou por 5 anos todos os trabalhadores admitidos com audiometria normal, separando os que trabalhavam em setores ruidosos e os de setores silenciosos. Ao final, contou quem desenvolveu perda auditiva induzida por ruído (PAIR). O operador Carlos, que trabalha na prensa, pede para entender o resultado.',
    mesa: [
      { tipo: 'tabela', titulo: 'Resultados após 5 anos', linhas: [['Expostos ao ruído', '400 trabalhadores · 60 com PAIR'], ['Não expostos', '600 trabalhadores · 30 com PAIR'], ['Perdas de seguimento', '8% nos expostos; 2% nos não expostos']] },
    ],
    tarefas: [
      'Qual é o desenho do estudo? Calcule a incidência em cada grupo e o risco relativo.',
      'Calcule o risco atribuível e o risco atribuível percentual. Interprete.',
      'Cite duas limitações deste estudo.',
      'Explique o resultado ao Carlos e oriente-o.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Então todo mundo da prensa vai ficar surdo?"' },
      { gatilho: 'Se citar risco relativo', fala: '"Três vezes mais… mais do que o quê?"' },
      { gatilho: 'No final', fala: '"Quantos desses casos podiam ter sido evitados?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Coorte prospectiva (parte da exposição e acompanha até o desfecho)', pts: 1 },
        { tarefa: 1, item: 'Incidência: expostos 60 ÷ 400 = 15%; não expostos 30 ÷ 600 = 5%', pts: 1 },
        { tarefa: 1, item: 'RR = 15% ÷ 5% = 3', pts: 1 },
        { tarefa: 2, item: 'Risco atribuível = 15% − 5% = 10 casos por 100 expostos', pts: 1 },
        { tarefa: 2, item: 'RA% = 10 ÷ 15 ≈ 66,7% dos casos entre expostos atribuíveis ao ruído (evitáveis)', pts: 1 },
        { tarefa: 3, item: 'Perda diferencial de seguimento (8% × 2%); confusão (idade, ototóxicos, ruído fora do trabalho) → ajuste', pts: 1 },
        { tarefa: 4, item: 'Explicou RR e risco atribuível em linguagem simples: risco maior não significa que todo exposto vai adoecer; casos evitáveis', pts: 2 },
      ],
    },
    errosCriticos: ['Calcular odds ratio em vez de risco relativo numa coorte', 'Dizer que a perda auditiva já instalada regride com o protetor'],
    falaModelo: [
      { tarefa: 1, texto: 'É uma coorte prospectiva: partiu da exposição e acompanhou até o desfecho. A incidência nos expostos é 60 em 400, 15%; nos não expostos, 30 em 600, 5%. O risco relativo é 15 dividido por 5, igual a 3.', tempo: '25 s' },
      { tarefa: 2, texto: 'O risco atribuível é 15 menos 5: 10 casos a cada 100 expostos se devem ao ruído. O risco atribuível percentual é 10 dividido por 15, cerca de 67%: dois em cada três casos entre os expostos poderiam ser evitados.', tempo: '25 s' },
      { tarefa: 3, texto: 'As limitações: a perda de seguimento foi maior entre os expostos, o que pode distorcer o resultado; e pode haver confusão por idade, remédios ototóxicos ou ruído fora do trabalho, que precisam de ajuste.', tempo: '25 s' },
      { tarefa: 4, texto: 'Carlos, imagine duas filas de 100 pessoas. Na fila da prensa, 15 tiveram perda auditiva; na fila do setor silencioso, 5. São três vezes mais. Não quer dizer que todo mundo da prensa vai perder audição: 85 em cada 100 não perderam. Mas aqueles 10 a mais em cada 100 se devem ao ruído e poderiam ser evitados, e isso é dois em cada três casos entre os expostos. O que você entendeu?', tempo: '45 s', analogia: 'Duas filas de 100 pessoas' },
    ],
    extra: 'Qual a diferença entre coorte prospectiva e retrospectiva? (Na retrospectiva, exposição e desfecho já ocorreram e são reconstruídos a partir de registros; a direção continua sendo da exposição para o desfecho.)',
  },

  // ----------------------------------------------------- EPI-05 · Ensaio clínico
  {
    id: 'EPI-05', materia: 'epi',
    titulo: 'Convite para participar de uma pesquisa',
    local: 'Ambulatório de cardiologia', papel: 'Médico(a) pesquisador(a)', interacao: 'paciente',
    cenario: 'Sr. Josué, 67 anos, hipertenso, foi convidado a participar de um ensaio clínico de fase III que compara um novo medicamento com placebo, ambos somados ao tratamento habitual, para prevenir AVC. Ele está desconfiado. Depois da conversa com ele, o examinador mostra os resultados de um estudo anterior semelhante.',
    mesa: [
      { tipo: 'tabela', titulo: 'Resultados do estudo anterior (3 anos)', linhas: [['Novo medicamento', '1.000 randomizados · 20 AVC'], ['Placebo', '1.000 randomizados · 40 AVC'], ['Abandonaram o tratamento', '150 no grupo do novo medicamento']] },
    ],
    tarefas: [
      'Explique ao Sr. Josué como funciona o estudo e os direitos dele.',
      'Calcule o risco em cada grupo, o risco relativo e a redução absoluta de risco. Interprete.',
      'Os 150 que abandonaram devem ser analisados em qual grupo? Justifique.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Vou ser cobaia? E se eu cair no grupo do remédio de mentira?"' },
      { gatilho: 'Se falar em sorteio', fala: '"Por que não deixam eu escolher o remédio novo?"' },
      { gatilho: 'Se falar em cegamento', fala: '"Nem o senhor(a) vai saber o que eu estou tomando?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Randomização (sorteio) para formar grupos comparáveis; placebo como controle, mantendo o tratamento habitual', pts: 1 },
        { tarefa: 1, item: 'Mascaramento duplo: nem participante nem pesquisador sabem o grupo (protege a validade interna)', pts: 1 },
        { tarefa: 1, item: 'TCLE (decisão voluntária e informada), aprovação do Comitê de Ética, monitoramento de eventos adversos ao longo do estudo', pts: 1 },
        { tarefa: 2, item: 'Risco: novo 20 ÷ 1.000 = 2%; placebo 40 ÷ 1.000 = 4%', pts: 1 },
        { tarefa: 2, item: 'RR = 2% ÷ 4% = 0,5 (redução relativa de 50%; efeito protetor)', pts: 1 },
        { tarefa: 2, item: 'Redução absoluta de risco = 4% − 2% = 2 pontos percentuais', pts: 1 },
        { tarefa: 3, item: 'Análise por intenção de tratar: no grupo para o qual foram sorteados, preservando a randomização', pts: 2 },
      ],
    },
    errosCriticos: ['Prometer que ele vai receber o medicamento novo', 'Excluir da análise quem abandonou o tratamento'],
    falaModelo: [
      { tarefa: 1, texto: 'Seu Josué, o senhor continua com todo o seu tratamento normal. Um sorteio, como jogar uma moeda, define se o senhor recebe o remédio novo ou um comprimido igual, sem efeito. O sorteio serve para que os dois grupos sejam parecidos e a comparação seja justa. Nem o senhor nem eu saberemos o grupo, para não influenciar a avaliação. O estudo foi aprovado pelo comitê de ética, o senhor só entra se quiser, depois de entender tudo e assinar o termo de consentimento, e qualquer efeito indesejado é acompanhado de perto. Quer me perguntar alguma coisa?', tempo: '60 s', analogia: 'Sorteio como jogar uma moeda' },
      { tarefa: 2, texto: 'No grupo do novo remédio, 20 em 1.000, 2%; no placebo, 40 em 1.000, 4%. O risco relativo é 0,5: o remédio reduz o risco pela metade, uma redução relativa de 50%. Mas a redução absoluta é de 4 para 2, ou seja, 2 pontos percentuais.', tempo: '35 s' },
      { tarefa: 3, texto: 'Os 150 que abandonaram continuam no grupo do novo remédio, porque foi para lá que foram sorteados: é a análise por intenção de tratar. Tirá-los quebraria a randomização e deixaria só quem tolerou bem, superestimando o efeito.', tempo: '30 s' },
    ],
    extra: 'Qual a diferença entre fase III e fase IV? (Fase III: eficácia em grande número de participantes antes da aprovação; fase IV: monitoramento pós-comercialização.) E entre eficácia e efetividade? (Condições ideais × condições reais.)',
  },

  // ----------------------------------------------------- EPI-06 · Incidência × prevalência
  {
    id: 'EPI-06', materia: 'epi',
    titulo: 'O diabetes aumentou no bairro?',
    local: 'Unidade de Saúde da Família', papel: 'Médico(a) da equipe', interacao: 'paciente',
    cenario: 'A agente comunitária de saúde Rita está preocupada: "O número de diabéticos no nosso território não para de subir! O diabetes está piorando aqui?". Neste ano, a equipe também fez um mutirão de rastreamento com glicemia capilar e passou a acompanhar melhor os pacientes, que estão vivendo mais. Considere a população adulta estável em 8.000 pessoas.',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados do território (adultos)', linhas: [['População adulta', '8.000'], ['Diabéticos em 1º de janeiro', '640'], ['Novos diagnósticos no ano', '72'], ['Diabéticos que morreram ou se mudaram', '20']] },
    ],
    tarefas: [
      'Calcule a prevalência no início e no fim do ano e a incidência acumulada no ano.',
      'Diferencie incidência e prevalência e explique a relação entre elas.',
      'Por que a prevalência subiu? Responda à Rita.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Doutora(o), se tem mais diabético, é porque o bairro está adoecendo mais, não é?"' },
      { gatilho: 'Se falar em incidência', fala: '"Incidência e prevalência não é a mesma coisa?"' },
      { gatilho: 'No final', fala: '"Então foi bom ou ruim termos achado mais diabéticos?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Prevalência inicial = 640 ÷ 8.000 = 8%', pts: 1 },
        { tarefa: 1, item: 'Prevalência final = (640 + 72 − 20) ÷ 8.000 = 692 ÷ 8.000 ≈ 8,65%', pts: 1 },
        { tarefa: 1, item: 'Incidência acumulada = 72 ÷ (8.000 − 640) = 72 ÷ 7.360 ≈ 0,98% (≈ 9,8 por 1.000 sob risco)', pts: 2 },
        { tarefa: 2, item: 'Incidência = casos novos na população sob risco (risco, velocidade); prevalência = casos existentes (carga)', pts: 1 },
        { tarefa: 2, item: 'Prevalência ≈ incidência × duração', pts: 1 },
        { tarefa: 3, item: 'Subiu pela maior duração (pacientes vivendo mais) e pela detecção de casos antigos no rastreamento, não necessariamente por mais casos novos', pts: 1 },
        { tarefa: 3, item: 'Explicou à ACS com analogia e sem jargão', pts: 1 },
      ],
    },
    errosCriticos: ['Usar a população total (8.000) no denominador da incidência', 'Concluir que a prevalência maior significa necessariamente mais casos novos'],
    falaModelo: [
      { tarefa: 1, texto: 'A prevalência inicial é 640 em 8.000, 8%. No fim do ano são 640 mais 72 menos 20, 692 diabéticos: 692 em 8.000, cerca de 8,65%. A incidência acumulada usa só quem estava sob risco, os 7.360 não diabéticos: 72 dividido por 7.360, cerca de 0,98%, ou quase 10 casos novos por 1.000 no ano.', tempo: '40 s' },
      { tarefa: 2, texto: 'A incidência conta os casos novos e mede o risco de adoecer. A prevalência conta todos os casos existentes e mede a carga da doença. Elas se relacionam pela duração: prevalência é aproximadamente incidência vezes duração.', tempo: '25 s' },
      { tarefa: 3, texto: 'Rita, pense numa caixa-d’água: a torneira que enche são os casos novos, e o ralo são as mortes e mudanças. A água na caixa é a prevalência. Este ano a torneira não abriu muito mais, mas o ralo ficou mais fechado, porque os pacientes estão vivendo mais com o tratamento; e o mutirão achou água que já estava lá e ninguém via. Então foi bom: achamos diabéticos que estavam sem tratamento. Faz sentido?', tempo: '45 s', analogia: 'Caixa-d’água: torneira (incidência) e ralo' },
    ],
    extra: 'Uma nova terapia que cura uma doença crônica, mantida a incidência, faz o que com a prevalência? (Reduz, porque diminui a duração.)',
  },

  // ----------------------------------------------------- EPI-07 · Canal endêmico e epidemia
  {
    id: 'EPI-07', materia: 'epi',
    titulo: 'Os casos passaram do canal endêmico',
    local: 'Vigilância epidemiológica municipal', papel: 'Médico(a) da vigilância', interacao: 'paciente',
    cenario: 'Município de 50.000 habitantes. Todo inverno aumentam os casos de uma doença respiratória, e a vigilância acompanha os casos notificados por semana epidemiológica (SE), comparando com o canal endêmico construído a partir da série histórica dos últimos anos. Neste ano, as unidades de saúde estão lotadas.\n\nUm líder comunitário vem até a vigilância saber "se é epidemia mesmo ou se é exagero da televisão", porque "todo ano é assim".',
    mesa: [
      { tipo: 'tabela', titulo: 'Casos notificados × limite superior do canal endêmico', linhas: [['SE 10', '22 casos · limite 30'], ['SE 11', '28 casos · limite 32'], ['SE 12', '45 casos · limite 35'], ['SE 13', '63 casos · limite 38'], ['SE 14', '85 casos · limite 40']] },
    ],
    tarefas: [
      'Interprete o diagrama: há epidemia? A partir de quando? Calcule a incidência da SE 14 por 100.000 habitantes.',
      'Diferencie surto, epidemia, endemia e pandemia.',
      'Que tipo de vigilância atua aqui e quais são as suas ações?',
      'Explique a situação ao líder comunitário.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Todo inverno tem essa doença aqui. Por que agora virou epidemia?"' },
      { gatilho: 'Se falar em canal endêmico', fala: '"Canal? Que canal?"' },
      { gatilho: 'No final', fala: '"E se no ano que vem vier mais de novo, o canal muda?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Epidemia: casos acima do limite superior do canal endêmico de forma consistente, a partir da SE 12, com tendência crescente', pts: 2 },
        { tarefa: 1, item: 'Incidência SE 14 = 85 ÷ 50.000 × 100.000 = 170 por 100.000', pts: 1 },
        { tarefa: 2, item: 'Endemia: ocorrência constante e esperada · Epidemia: acima do esperado em população, local e período definidos · Surto: ocorrência localizada acima do esperado · Pandemia: dissemina-se por diversos países', pts: 2 },
        { tarefa: 3, item: 'Vigilância epidemiológica: monitoramento pelo canal endêmico, detecção do excesso de casos, investigação e resposta', pts: 1 },
        { tarefa: 3, item: 'Canal endêmico é ferramenta descritiva (variável tempo); a ultrapassagem não invalida a referência histórica', pts: 1 },
        { tarefa: 4, item: 'Explicou o canal endêmico com analogia e sem alarmismo; lembrou que os notificados são só a parte visível (iceberg)', pts: 1 },
      ],
    },
    errosCriticos: ['Dizer que não há epidemia porque "todo ano é assim"', 'Comparar com a média geral sem usar o limite do canal endêmico'],
    falaModelo: [
      { tarefa: 1, texto: 'Na SE 10 e 11, os casos estavam dentro do canal endêmico. A partir da SE 12 passam do limite superior, 45 contra 35, e continuam subindo até 85 contra 40 na SE 14: é epidemia. A incidência da SE 14 é 85 em 50.000, vezes 100.000: 170 por 100.000 habitantes.', tempo: '35 s' },
      { tarefa: 2, texto: 'Endemia é a ocorrência constante e esperada numa região. Epidemia é quando passa do esperado numa população, local e período definidos. Surto é uma ocorrência localizada acima do esperado. Pandemia é quando se espalha por diversos países.', tempo: '25 s' },
      { tarefa: 3, texto: 'É a vigilância epidemiológica: monitora pelo canal endêmico, detecta o excesso de casos, investiga e organiza a resposta. O canal é uma ferramenta descritiva, que olha a variável tempo, e continua valendo como referência mesmo quando é ultrapassado.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Zé, o canal endêmico é como a margem de um rio: todo inverno a água sobe um pouco, e a gente sabe, pelos anos anteriores, até onde ela costuma chegar. Desde a semana 12 o rio passou da margem e continua subindo: isso é epidemia, não é exagero. E os casos que a gente conta são só a ponta do iceberg, porque muita gente com quadro leve nem procura a unidade. O senhor pode ajudar levando essa informação para a comunidade. Ficou claro?', tempo: '45 s', analogia: 'Canal endêmico como a margem de um rio' },
    ],
    extra: 'Quais são as três variáveis clássicas da epidemiologia descritiva? (Tempo, lugar e pessoa.)',
  },

  // ----------------------------------------------------- EPI-08 · PICO, desenhos e causalidade
  {
    id: 'EPI-08', materia: 'epi',
    titulo: 'Qual estudo responde a cada pergunta?',
    local: 'Reunião científica do internato', papel: 'Médico(a) residente', interacao: 'examinador',
    cenario: 'O preceptor (examinador) traz quatro perguntas que surgiram na enfermaria e quer saber como você buscaria a resposta.\n\nPergunta 1: "Em idosos com fibrilação atrial, a anticoagulação reduz AVC em comparação com o AAS?"\nPergunta 2: "Um remédio para enxaqueca, usado por milhões de pessoas, causa uma hepatite rara (1 caso em 50.000)?"\nPergunta 3: "Qual a proporção de hipertensos na nossa área de cobertura hoje?"\nPergunta 4: Um gráfico mostra que, nos meses em que se vende mais sorvete, há mais afogamentos.',
    mesa: [],
    tarefas: [
      'Estruture a pergunta 1 no formato PICO e diga qual desenho de estudo a responde melhor.',
      'Qual desenho você usaria para as perguntas 2 e 3? Justifique.',
      'Interprete a pergunta 4 à luz dos critérios de causalidade.',
      'Qual tipo de estudo está no topo da hierarquia das evidências, e por quê? Onde ficam relatos e séries de casos?',
    ],
    ator: [
      { gatilho: 'Preceptor, na pergunta 2', fala: '"Por que não um ensaio clínico? É o padrão-ouro."' },
      { gatilho: 'Preceptor, na pergunta 4', fala: '"Então vamos proibir o sorvete no verão?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'P: idosos com FA · I: anticoagulação · C: AAS · O: AVC', pts: 1 },
        { tarefa: 1, item: 'Ensaio clínico randomizado (intervenção comparada, ética e viável)', pts: 1 },
        { tarefa: 2, item: 'Pergunta 2: caso-controle (desfecho raro; um ensaio exigiria um número inviável de pacientes) ou farmacovigilância/fase IV', pts: 2 },
        { tarefa: 2, item: 'Pergunta 3: estudo transversal (prevalência num momento)', pts: 1 },
        { tarefa: 3, item: 'Correlação ecológica espúria: confundidor (calor do verão); falta plausibilidade/coerência; falácia ecológica', pts: 2 },
        { tarefa: 4, item: 'Topo: revisão sistemática com metanálise de ECR (sintetiza vários estudos experimentais); relatos e séries de casos têm baixa capacidade de generalização e servem para gerar hipóteses', pts: 1 },
      ],
    },
    errosCriticos: ['Indicar ensaio clínico para efeito adverso raro', 'Concluir causalidade a partir da correlação sorvete–afogamento'],
    falaModelo: [
      { tarefa: 1, texto: 'PICO: paciente, idosos com fibrilação atrial; intervenção, anticoagulação; comparação, AAS; desfecho, AVC. O melhor desenho é o ensaio clínico randomizado, porque é uma intervenção que posso sortear de forma ética.', tempo: '25 s' },
      { tarefa: 2, texto: 'Para a hepatite rara, caso-controle: parto dos casos de hepatite e comparo o uso do remédio com controles. Um ensaio precisaria de centenas de milhares de pessoas para ver poucos casos. Também serve a farmacovigilância, a fase IV. Para a proporção de hipertensos hoje, um estudo transversal, que mede prevalência num momento.', tempo: '35 s' },
      { tarefa: 3, texto: 'Sorvete e afogamento andam juntos por causa de uma terceira variável, o calor do verão: é confusão. Não há plausibilidade biológica, um critério de Bradford Hill, e é um dado agregado, sujeito à falácia ecológica. Proibir sorvete não reduziria afogamentos.', tempo: '30 s' },
      { tarefa: 4, texto: 'No topo está a revisão sistemática com metanálise de ensaios clínicos randomizados, porque sintetiza vários estudos experimentais. Relatos e séries de casos ficam abaixo dos estudos com mais participantes: descrevem poucos indivíduos, generalizam pouco e servem principalmente para gerar hipóteses. A hierarquia é como uma escada de confiança. Ficou claro?', tempo: '30 s', analogia: 'Hierarquia como escada de confiança' },
    ],
    extra: 'Qual é a diferença entre validade interna e externa? (Interna: o resultado é verdadeiro para a amostra estudada, sem vieses; externa: pode ser generalizado para outras populações.)',
  },

  // ----------------------------------------------------- EPI-09 · Nelson de Moraes e padronização
  {
    id: 'EPI-09', materia: 'epi',
    titulo: 'A cidade com mais mortes é a mais saudável?',
    local: 'Diretoria regional de saúde', papel: 'Médico(a) sanitarista', interacao: 'examinador',
    cenario: 'A diretora regional (examinadora) precisa decidir para qual de dois municípios vai um recurso extra de saúde materno-infantil e saneamento. Ela acha que deve ser o Município A, "porque morre mais gente lá".\n\nMunicípio A: litorâneo, muitos aposentados.\nMunicípio B: periferia industrial, população jovem.',
    mesa: [
      { tipo: 'tabela', titulo: 'Indicadores', linhas: [['Coeficiente de mortalidade geral — A', '11 por 1.000'], ['Coeficiente de mortalidade geral — B', '6 por 1.000'], ['Óbitos em < 1 ano — A / B', '3% / 22%'], ['Óbitos de 1 a 4 anos — A / B', '1% / 6%'], ['Óbitos com 50 anos ou mais — A / B', '78% / 35%']] },
    ],
    tarefas: [
      'Por que o município A tem coeficiente de mortalidade geral maior? Como comparar os dois de forma válida?',
      'Interprete a distribuição proporcional dos óbitos de cada município (Curva de Nelson de Moraes e proporção de óbitos com 50 anos ou mais).',
      'Para qual município vai o recurso? Justifique para a diretora.',
    ],
    ator: [
      { gatilho: 'Diretora, ao começar', fala: '"11 é quase o dobro de 6. A não está pior?"' },
      { gatilho: 'Se citar padronização', fala: '"Padronizar como? Explica rápido."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'O CMG bruto é influenciado pela estrutura etária: A tem população mais velha', pts: 2 },
        { tarefa: 1, item: 'Comparar por coeficientes padronizados por idade ou específicos por faixa etária', pts: 1 },
        { tarefa: 2, item: 'A: óbitos concentrados em idades avançadas (78% com 50 anos ou mais) → perfil favorável (boas condições sanitárias, população que envelhece)', pts: 1 },
        { tarefa: 2, item: 'B: muitos óbitos em menores de 5 anos (28%) e poucos em idades avançadas (35%) → perfil desfavorável (condições sanitárias precárias)', pts: 1 },
        { tarefa: 2, item: 'Quanto maior a proporção de óbitos em idades avançadas, mais favorável o perfil sanitário', pts: 1 },
        { tarefa: 3, item: 'Recurso para B: priorizar saúde materno-infantil e saneamento; usar indicadores combinados (CMI, mortalidade proporcional)', pts: 1 },
      ],
    },
    errosCriticos: ['Comparar os municípios pelo coeficiente bruto de mortalidade geral', 'Destinar o recurso ao município A'],
    falaModelo: [
      { tarefa: 1, texto: 'O coeficiente geral é bruto: depende da idade da população. O município A tem muitos idosos, e idosos morrem mais, então o coeficiente sobe mesmo com boa saúde. Para comparar de forma válida, uso coeficientes padronizados por idade ou específicos por faixa etária.', tempo: '30 s' },
      { tarefa: 2, texto: 'Na Curva de Nelson de Moraes, A concentra os óbitos em idades avançadas, 78% com 50 anos ou mais: perfil favorável, de boas condições sanitárias e população que envelhece. B tem 22% dos óbitos em menores de 1 ano e mais 6% de 1 a 4 anos, e só 35% com 50 anos ou mais: perfil desfavorável, típico de condições sanitárias precárias.', tempo: '40 s' },
      { tarefa: 3, texto: 'Diretora, o recurso deve ir para o B. Comparar as duas cidades pelo número bruto de mortes é como comparar a quantidade de folhas caídas num pomar velho e num pomar novo: o velho perde mais folhas, mas é no novo que as mudinhas estão morrendo. Em B morrem bebês e crianças, o que aponta para pré-natal, assistência à criança e saneamento. Faz sentido para a senhora?', tempo: '40 s', analogia: 'Pomar velho × pomar novo' },
    ],
    extra: 'Por que usar vários indicadores juntos no diagnóstico situacional? (A Curva de Nelson de Moraes e o coeficiente de mortalidade infantil se complementam e dão uma leitura mais consistente do perfil sanitário.)',
  },

  // ----------------------------------------------------- EPI-10 · Letalidade × mortalidade × incidência
  {
    id: 'EPI-10', materia: 'epi',
    titulo: 'Qual doença é mais perigosa?',
    local: 'Secretaria de Saúde — entrevista à imprensa', papel: 'Médico(a) da vigilância epidemiológica', interacao: 'paciente',
    cenario: 'Uma jornalista local (papel do ator) prepara uma matéria e quer saber qual doença "é mais perigosa" na cidade, que tem 200.000 habitantes. Você tem os dados do último ano.',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados do último ano (200.000 habitantes)', linhas: [['Doença meningocócica', '40 casos · 8 óbitos'], ['Influenza (casos notificados)', '6.000 casos · 12 óbitos']] },
    ],
    tarefas: [
      'Calcule a incidência, a mortalidade e a letalidade de cada doença.',
      'Interprete: qual é mais grave para quem adoece e qual pesa mais para a população?',
      'Por que a letalidade da influenza pode estar superestimada mesmo assim? Explique à jornalista.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Morreram 12 de gripe e 8 de meningite, então gripe é pior, certo?"' },
      { gatilho: 'Se citar letalidade', fala: '"Letalidade e mortalidade não são sinônimos?"' },
      { gatilho: 'No final', fala: '"Qual manchete eu posso dar sem assustar ninguém?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Incidência: meningocócica 40 ÷ 200.000 = 20/100.000; influenza 6.000 ÷ 200.000 = 3.000/100.000', pts: 1 },
        { tarefa: 1, item: 'Mortalidade: meningocócica 8 ÷ 200.000 = 4/100.000; influenza 12 ÷ 200.000 = 6/100.000', pts: 1 },
        { tarefa: 1, item: 'Letalidade: meningocócica 8 ÷ 40 = 20%; influenza 12 ÷ 6.000 = 0,2%', pts: 2 },
        { tarefa: 2, item: 'Letalidade mede gravidade para quem adoece (denominador: doentes); mortalidade mede o impacto na população (denominador: população)', pts: 1 },
        { tarefa: 2, item: 'Meningite: 100 vezes mais letal; influenza: maior mortalidade e incidência pela quantidade de casos', pts: 1 },
        { tarefa: 3, item: 'Iceberg epidemiológico: muitos casos leves de influenza não são notificados → a letalidade real é ainda menor', pts: 1 },
        { tarefa: 3, item: 'Comunicou sem alarmismo, diferenciando gravidade para quem adoece e impacto na população', pts: 1 },
      ],
    },
    errosCriticos: ['Confundir letalidade com mortalidade', 'Usar a população no denominador da letalidade'],
    falaModelo: [
      { tarefa: 1, texto: 'Doença meningocócica: incidência de 40 em 200.000, 20 por 100.000; mortalidade de 8 em 200.000, 4 por 100.000; letalidade de 8 em 40, 20%. Influenza: incidência de 3.000 por 100.000, mortalidade de 6 por 100.000 e letalidade de 12 em 6.000, 0,2%.', tempo: '35 s' },
      { tarefa: 2, texto: 'A letalidade usa os doentes no denominador e mede a gravidade para quem adoece: a meningite mata 1 em cada 5 doentes, 100 vezes mais que a gripe. A mortalidade usa a população e mede o impacto na cidade: a gripe mata mais pessoas no total porque atinge muito mais gente.', tempo: '35 s' },
      { tarefa: 3, texto: 'E a letalidade da gripe deve ser ainda menor, porque a maioria dos casos leves nem chega ao serviço: é o iceberg epidemiológico, só vemos a ponta. Jornalista, pense em dois perigos: um raio é raro, mas quase sempre grave; uma chuva atinge todo mundo, raramente machuca, mas por ser tanta gente acaba ferindo mais pessoas. A manchete pode ser: "Meningite é rara, mas grave para quem adoece; gripe é comum e, por atingir muita gente, causa mais mortes no total". Ficou claro?', tempo: '55 s', analogia: 'Raio raro e grave × chuva comum' },
    ],
    extra: 'Como se calculam APVP e DALY? (APVP = óbitos × [expectativa padrão − idade do óbito]; DALY = APVP + anos vividos com incapacidade.)',
  },
);
