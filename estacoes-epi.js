// Estações de Epidemiologia (EPI-02 a EPI-24). EPI-01 está em estacoes.js e EPI-21 em estacoes-prova.js.
// Nas estações com ator, a anamnese é ativa: o candidato pergunta como o estudo foi feito e pede os dados.
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
    cenario: 'O representante do sindicato de uma fábrica de tintas pede uma reunião: vários colegas tiveram câncer de bexiga, e uma equipe da universidade fez um estudo sobre o corante usado na fábrica. Pergunte como o estudo foi feito, interprete o resultado e explique. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é o desenho do estudo? Por que ele foi escolhido para esta pergunta?',
      'Calcule a medida de associação adequada e interprete. Por que não se calcula risco relativo?',
      'Cite dois vieses ou fatores de confusão que podem distorcer esse resultado e como lidar com eles.',
      'Explique o resultado ao representante do sindicato.',
    ],
    anamnese: [
      { tema: 'Como os participantes foram escolhidos', resposta: '"Pegaram 100 pacientes com câncer de bexiga atendidos no hospital regional e 200 pessoas sem a doença, do mesmo hospital e da mesma idade."' },
      { tema: 'O que foi investigado', resposta: '"Perguntaram a todos se tinham trabalhado com o corante no passado."' },
      { tema: 'Hábitos dos trabalhadores', resposta: '"Muita gente lá fuma, inclusive eu."' },
    ],
    placas: [
      { pedido: 'a tabela de resultados', placa: 'Casos expostos ao corante: 40 · casos não expostos: 60 · controles expostos: 20 · controles não expostos: 180.' },
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Doutor(a), então está provado que o corante dá câncer?"' },
      { gatilho: 'Se citar tabagismo', fala: '"Muita gente lá fuma também, é verdade."' },
      { gatilho: 'Se usar o termo "odds ratio"', fala: '"Odds o quê? Fala português comigo."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou como os participantes foram escolhidos: caso-controle, que parte do desfecho e investiga a exposição no passado', pts: 1 },
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
    cenario: 'Carlos, operador da prensa de uma metalúrgica, recebeu o relatório de um estudo da empresa sobre perda auditiva induzida por ruído (PAIR) e pede para entender o resultado. Pergunte como o estudo foi feito, calcule e explique. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é o desenho do estudo? Calcule a incidência em cada grupo e o risco relativo.',
      'Calcule o risco atribuível e o risco atribuível percentual. Interprete.',
      'Cite duas limitações deste estudo.',
      'Explique o resultado ao Carlos e oriente-o.',
    ],
    anamnese: [
      { tema: 'Como o estudo foi feito', resposta: '"A empresa pegou todo mundo que entrou com audiometria normal, separou quem trabalha em setor barulhento e quem trabalha em setor silencioso, e acompanhou por 5 anos."' },
      { tema: 'Quem saiu do estudo', resposta: '"Alguns colegas saíram da empresa antes do fim, mais gente do setor barulhento."' },
      { tema: 'Outros fatores', resposta: '"Tenho 50 anos e, no fim de semana, toco bateria numa banda."' },
      { tema: 'Uso de protetor', resposta: '"Uso o protetor de vez em quando. Incomoda."' },
    ],
    placas: [
      { pedido: 'a tabela de resultados', placa: 'Expostos ao ruído: 400 trabalhadores, 60 com PAIR · Não expostos: 600 trabalhadores, 30 com PAIR · Perdas de seguimento: 8% nos expostos e 2% nos não expostos.' },
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Então todo mundo da prensa vai ficar surdo?"' },
      { gatilho: 'Se citar risco relativo', fala: '"Três vezes mais… mais do que o quê?"' },
      { gatilho: 'No final', fala: '"Quantos desses casos podiam ter sido evitados?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou como o estudo foi feito: coorte prospectiva (parte da exposição e acompanha até o desfecho)', pts: 1 },
        { tarefa: 1, item: 'Incidência: expostos 60 ÷ 400 = 15%; não expostos 30 ÷ 600 = 5%', pts: 1 },
        { tarefa: 1, item: 'RR = 15% ÷ 5% = 3', pts: 1 },
        { tarefa: 2, item: 'Risco atribuível = 15% − 5% = 10 casos por 100 expostos', pts: 1 },
        { tarefa: 2, item: 'RA% = 10 ÷ 15 ≈ 66,7% dos casos entre expostos atribuíveis ao ruído (evitáveis)', pts: 1 },
        { tarefa: 3, item: 'Perguntou quem saiu e outros fatores: perda diferencial de seguimento (8% × 2%); confusão (idade, ototóxicos, ruído fora do trabalho, como a bateria) → ajuste', pts: 1 },
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
    cenario: 'Sr. Josué, 67 anos, hipertenso, foi convidado a participar de um ensaio clínico de fase III que compara um novo medicamento com placebo, ambos somados ao tratamento habitual, para prevenir AVC. Ele está desconfiado. Converse com ele e, depois, peça ao avaliador os resultados de um estudo anterior semelhante.',
    mesa: [],
    tarefas: [
      'Explique ao Sr. Josué como funciona o estudo e os direitos dele.',
      'Calcule o risco em cada grupo, o risco relativo e a redução absoluta de risco. Interprete.',
      'Os 150 que abandonaram devem ser analisados em qual grupo? Justifique.',
    ],
    anamnese: [
      { tema: 'Medos e dúvidas', resposta: '"Tenho medo de ser cobaia. E se eu cair no grupo do remédio de mentira, fico sem tratamento?"' },
      { tema: 'Tratamento atual', resposta: '"Tomo losartana e hidroclorotiazida todo dia, e a pressão está controlada."' },
      { tema: 'O que espera do estudo', resposta: '"Queria receber o remédio novo, se for melhor."' },
    ],
    placas: [
      { pedido: 'os resultados do estudo anterior', placa: 'Novo medicamento: 1.000 randomizados, 20 AVC em 3 anos · Placebo: 1.000 randomizados, 40 AVC · 150 pacientes do grupo do novo medicamento abandonaram o tratamento.' },
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
    cenario: 'A agente comunitária de saúde Rita está preocupada: "O número de diabéticos no nosso território não para de subir! O diabetes está piorando aqui?". Converse com ela, calcule as medidas e responda à pergunta. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Calcule a prevalência no início e no fim do ano e a incidência acumulada no ano.',
      'Diferencie incidência e prevalência e explique a relação entre elas.',
      'Por que a prevalência subiu? Responda à Rita.',
    ],
    anamnese: [
      { tema: 'População do território', resposta: '"São 8.000 adultos, a população é estável."' },
      { tema: 'Diabéticos no começo do ano', resposta: '"Em 1º de janeiro eram 640 no cadastro."' },
      { tema: 'Casos novos', resposta: '"Tivemos 72 diagnósticos novos no ano, muitos no mutirão de glicemia capilar."' },
      { tema: 'Saídas', resposta: '"20 diabéticos morreram ou se mudaram."' },
      { tema: 'Mudanças no cuidado', resposta: '"Agora acompanhamos melhor, e eles estão vivendo mais."' },
    ],
    placas: [],
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
        { tarefa: 3, item: 'Perguntou o que mudou no território: subiu pela maior duração (pacientes vivendo mais) e pela detecção de casos antigos no mutirão, não necessariamente por mais casos novos', pts: 1 },
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
    cenario: 'Todo inverno aumentam os casos de uma doença respiratória no município, e a vigilância acompanha os casos notificados por semana epidemiológica (SE). Um líder comunitário vem saber "se é epidemia mesmo ou se é exagero da televisão". Converse com ele, interprete os dados e explique. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Interprete o diagrama: há epidemia? A partir de quando? Calcule a incidência da SE 14 por 100.000 habitantes.',
      'Diferencie surto, epidemia, endemia e pandemia.',
      'Que tipo de vigilância atua aqui e quais são as suas ações?',
      'Explique a situação ao líder comunitário.',
    ],
    anamnese: [
      { tema: 'O que ele percebe', resposta: '"As unidades estão lotadas. Mas todo inverno é assim, não é?"' },
      { tema: 'População do município', resposta: '"Somos uns 50.000 habitantes."' },
      { tema: 'Casos leves', resposta: '"Muita gente com gripe leve fica em casa e nem procura o posto."' },
    ],
    placas: [
      { pedido: 'os casos por semana e o canal endêmico', placa: 'Casos notificados × limite superior do canal endêmico (série histórica): SE 10: 22 × 30 · SE 11: 28 × 32 · SE 12: 45 × 35 · SE 13: 63 × 38 · SE 14: 85 × 40.' },
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

  // ----------------------------------------------------- EPI-08 · PICO, hierarquia e validade
  {
    id: 'EPI-08', materia: 'epi',
    titulo: 'Qual evidência vale mais?',
    local: 'Enfermaria de clínica médica — visita', papel: 'Interno(a)', interacao: 'examinador',
    cenario: 'Na visita, o preceptor (examinador) discute o caso do Sr. Aurélio, 74 anos, com fibrilação atrial, que toma AAS por conta própria. A equipe quer saber se anticoagular reduziria o risco de AVC em comparação com o AAS. Na busca, foram encontrados cinco estudos sobre essa pergunta.',
    mesa: [
      { tipo: 'tabela', titulo: 'Estudos encontrados', linhas: [['1', 'Relato de caso: um idoso que teve AVC usando AAS'], ['2', 'Série de 40 casos de AVC em idosos com fibrilação atrial'], ['3', 'Coorte de 8.000 idosos, com análise ajustada para confundidores'], ['4', 'Ensaio clínico randomizado que recrutou só metade da amostra planejada e excluiu os pacientes de maior risco'], ['5', 'Revisão sistemática com metanálise de 12 ensaios clínicos randomizados']] },
    ],
    tarefas: [
      'Estruture a pergunta clínica no formato PICO.',
      'Qual desenho de estudo responde melhor a essa pergunta, e por quê?',
      'Ordene a força das evidências encontradas. O ensaio (4) é automaticamente melhor que a coorte (3)?',
      'Explique o que é validade interna e validade externa, usando o ensaio (4) como exemplo.',
    ],
    ator: [
      { gatilho: 'Preceptor, ao começar', fala: '"Achei um relato de caso de AVC com AAS. Já basta para mudar a conduta?"' },
      { gatilho: 'Preceptor, na tarefa 3', fala: '"Mas o ensaio 4 é randomizado. Então ganha da coorte, certo?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'P: idosos com fibrilação atrial · I: anticoagulação · C: AAS · O: AVC', pts: 1 },
        { tarefa: 2, item: 'Ensaio clínico randomizado: intervenção que pode ser alocada de forma ética', pts: 1 },
        { tarefa: 2, item: 'A randomização distribui igualmente características conhecidas e desconhecidas, controlando o confundimento', pts: 1 },
        { tarefa: 3, item: 'Topo: revisão sistemática com metanálise de ECR (sintetiza vários experimentos); relato de caso é a evidência mais frágil, série de casos é intermediária', pts: 1 },
        { tarefa: 3, item: 'A posição do desenho não garante a validade do estudo: ensaio subdimensionado e que excluiu os de maior risco é inconclusivo, mesmo diante de coorte maior e ajustada', pts: 2 },
        { tarefa: 4, item: 'Validade interna: resultado não distorcido por vieses ou confundimento dentro da amostra · Validade externa: possibilidade de generalizar para outras populações', pts: 1 },
        { tarefa: 4, item: 'Critérios de elegibilidade restritivos podem favorecer a validade interna, mas limitam a externa', pts: 1 },
      ],
    },
    errosCriticos: ['Considerar o relato ou a série de casos suficientes para mudar a conduta', 'Aceitar o ensaio (4) como conclusivo só por ser randomizado'],
    falaModelo: [
      { tarefa: 1, texto: 'P: idosos com fibrilação atrial; I: anticoagulação; C: AAS; O: AVC.', tempo: '10 s' },
      { tarefa: 2, texto: 'O melhor desenho é o ensaio clínico randomizado: é uma intervenção que posso sortear de forma ética, e o sorteio distribui igualmente entre os grupos tanto as características que conheço quanto as que não conheço, controlando o confundimento.', tempo: '25 s' },
      { tarefa: 3, texto: 'No topo, a revisão sistemática com metanálise dos 12 ensaios, porque sintetiza vários estudos experimentais. O relato de caso é a evidência mais frágil, e a série de casos é intermediária. Mas o ensaio 4 não ganha automaticamente da coorte: recrutou só metade da amostra e excluiu os pacientes de maior risco, então sozinho é inconclusivo. A posição do desenho na hierarquia não garante a qualidade de um estudo específico.', tempo: '45 s' },
      { tarefa: 4, texto: 'Validade interna é a confiança de que o resultado não foi distorcido por vieses ou confundimento dentro da própria amostra. Validade externa é poder generalizar para outras populações. Ao excluir os de maior risco, o ensaio pode ganhar em validade interna, mas perde a externa: não sei se o resultado vale para alguém como o Sr. Aurélio. É como testar um carro só numa pista lisa: o resultado é confiável para a pista, mas não sei como ele anda na estrada de terra.', tempo: '45 s', analogia: 'Carro testado só na pista lisa' },
    ],
    extra: 'Que diretriz orienta o relato de ensaios randomizados? (CONSORT.) O que é um desfecho substituto? (Mais rápido de medir, como o LDL, mas sua melhora nem sempre se traduz em benefício clínico.)',
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
    cenario: 'Uma jornalista local quer saber qual doença "é mais perigosa" na cidade e vai publicar a matéria hoje. Converse com ela, calcule as medidas adequadas e responda. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Calcule a incidência, a mortalidade e a letalidade de cada doença.',
      'Interprete: qual é mais grave para quem adoece e qual pesa mais para a população?',
      'Por que a letalidade da influenza pode estar superestimada mesmo assim? Explique à jornalista.',
    ],
    anamnese: [
      { tema: 'Tamanho da cidade', resposta: '"A cidade tem 200.000 habitantes."' },
      { tema: 'O que ela já ouviu', resposta: '"Me disseram que morreram 12 de gripe e 8 de meningite no ano passado."' },
    ],
    placas: [
      { pedido: 'os dados do último ano', placa: 'Doença meningocócica: 40 casos e 8 óbitos · Influenza (casos notificados): 6.000 casos e 12 óbitos.' },
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

  // ----------------------------------------------------- EPI-11 · Coorte × caso-controle
  {
    id: 'EPI-11', materia: 'epi',
    titulo: 'Coorte ou caso-controle?',
    local: 'Núcleo de vigilância em saúde do trabalhador', papel: 'Médico(a) epidemiologista', interacao: 'examinador',
    cenario: 'Numa região agrícola, a secretaria de saúde quer estudar o efeito da exposição a agrotóxicos. A coordenadora (examinadora) traz duas perguntas e quer saber qual desenho usar em cada uma, antes de pedir o financiamento.\n\nPergunta 1: "A exposição a agrotóxicos está associada a um tipo raro de câncer hematológico (cerca de 3 casos por 100.000 habitantes por ano)?"\nPergunta 2: "Entre trabalhadores que começam agora a aplicar agrotóxicos, quantos vão desenvolver intoxicação, dermatite ou alterações respiratórias nos próximos anos?"',
    mesa: [],
    tarefas: [
      'Qual desenho você escolhe para cada pergunta? Justifique.',
      'Compare coorte e caso-controle: ponto de partida, direção da investigação e medida de associação.',
      'Compare as vantagens e as limitações de cada um.',
      'Os dois estudos podem ser apresentados numa tabela 2×2 parecida. Que pergunta você faz para não confundir os desenhos?',
    ],
    ator: [
      { gatilho: 'Examinadora, na pergunta 1', fala: '"Por que não acompanhar a região inteira por 10 anos e ver quem tem câncer?"' },
      { gatilho: 'Examinadora, na tarefa 2', fala: '"E por que no caso-controle não dá para calcular o risco relativo?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Pergunta 1: caso-controle (desfecho raro: parte dos casos, sem acompanhar um contingente enorme)', pts: 1 },
        { tarefa: 1, item: 'Pergunta 2: coorte (parte da exposição, acompanha até o desfecho, permite estudar vários desfechos e calcular incidência)', pts: 1 },
        { tarefa: 2, item: 'Coorte: parte da exposição e segue até o desfecho → incidência e risco relativo', pts: 1 },
        { tarefa: 2, item: 'Caso-controle: parte do desfecho (casos e controles) e investiga a exposição passada → odds ratio (a incidência não é obtida diretamente)', pts: 1 },
        { tarefa: 3, item: 'Coorte: garante a temporalidade; limitações: alto custo, longo seguimento, perdas de seguimento, inadequada para doença rara', pts: 1 },
        { tarefa: 3, item: 'Caso-controle: rápido, barato, ideal para doença rara; limitações: viés de memória, escolha dos controles, necessidade de definição clara de caso', pts: 1 },
        { tarefa: 4, item: '"Por qual critério os participantes foram selecionados: pela exposição ou pela doença?"', pts: 2 },
      ],
    },
    errosCriticos: ['Indicar coorte para o câncer raro', 'Calcular risco relativo no caso-controle'],
    falaModelo: [
      { tarefa: 1, texto: 'Para o câncer raro, caso-controle: parto dos casos e de controles sem a doença e investigo a exposição passada, sem precisar acompanhar milhares de pessoas para ver três casos. Para a pergunta 2, coorte: parto dos trabalhadores expostos e não expostos e acompanho até os desfechos, que são comuns e podem ser vários.', tempo: '35 s' },
      { tarefa: 2, texto: 'A coorte parte da exposição e caminha para o desfecho: como acompanho os grupos, consigo calcular incidência e risco relativo. O caso-controle parte do desfecho e olha para trás, para a exposição: como fui eu quem escolheu quantos casos e controles entrariam, não tenho incidência, e a medida é a odds ratio.', tempo: '35 s' },
      { tarefa: 3, texto: 'A coorte garante a temporalidade, mas é cara, demorada, sofre com perdas de seguimento e não serve para doença rara. O caso-controle é rápido, barato e ideal para doença rara, mas tem viés de memória, depende de uma boa escolha dos controles e de uma definição clara de caso.', tempo: '35 s' },
      { tarefa: 4, texto: 'A pergunta-chave é: por qual critério os participantes foram selecionados, pela exposição ou pela doença? Se foi pela exposição, é coorte; se foi pela doença, é caso-controle. É como um detetive: a coorte acompanha os suspeitos para ver quem comete o crime; o caso-controle chega depois do crime e procura as pistas.', tempo: '30 s', analogia: 'Detetive antes e depois do crime' },
    ],
    extra: 'Qual a diferença entre coorte fechada e aberta? (Fechada: recrutamento único no início; aberta ou dinâmica: entrada e saída contínuas de participantes.)',
  },

  // ----------------------------------------------------- EPI-12 · A pegadinha: coorte retrospectiva × caso-controle × randomizado
  {
    id: 'EPI-12', materia: 'epi',
    titulo: 'A pegadinha dos quatro resumos',
    local: 'Banca do OSCE — leitura crítica', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador entrega quatro resumos de estudos sobre gestação e pede que você classifique cada um e explique o raciocínio. Todos falam de "dados do passado" ou de "comparação de grupos".',
    mesa: [
      { tipo: 'texto', texto: 'Resumo A — Foram levantados os prontuários de todos os recém-nascidos de uma maternidade entre 2015 e 2018. As gestantes foram separadas em fumantes e não fumantes, conforme registrado no pré-natal, e verificou-se nos mesmos registros a ocorrência de baixo peso ao nascer. Calculou-se o risco relativo.\n\nResumo B — Mães de bebês com uma malformação rara e mães de bebês sem malformação, do mesmo hospital, foram entrevistadas sobre o uso de um medicamento durante a gestação.\n\nResumo C — Gestantes foram sorteadas para receber um suplemento ou placebo, sem que elas ou os médicos soubessem o grupo, e foram acompanhadas até o parto.\n\nResumo D — Em 2024, um programa de suplementação foi oferecido a todas as gestantes do município. Os desfechos foram comparados com os de 2022, antes do programa. Não houve sorteio.' },
    ],
    tarefas: [
      'Classifique os quatro estudos.',
      'A e B usam informações do passado. O que torna A uma coorte e B um caso-controle? Quais as vantagens e limitações da coorte retrospectiva?',
      'C e D têm intervenção. O que os diferencia? O que diferencia C de A?',
      'Por que a randomização dá ao estudo C uma evidência mais forte? Qual medida de associação cabe em A, B e C?',
    ],
    ator: [
      { gatilho: 'Examinador, no resumo A', fala: '"Se os dados são do passado, não é caso-controle?"' },
      { gatilho: 'Examinador, no resumo D', fala: '"Teve intervenção e comparação. Então é ensaio clínico randomizado, certo?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'A: coorte retrospectiva (histórica) · B: caso-controle · C: ensaio clínico randomizado duplo-cego · D: ensaio não randomizado (quase-experimento)', pts: 2 },
        { tarefa: 2, item: 'O critério de seleção decide: A selecionou pela exposição (tabagismo) e verificou o desfecho depois; B selecionou pela doença e investigou a exposição', pts: 2 },
        { tarefa: 2, item: 'Coorte retrospectiva: resultados mais rápidos, mas depende da qualidade dos registros; a prospectiva dá mais controle, porém exige mais tempo', pts: 1 },
        { tarefa: 3, item: '"Quem decidiu quem recebeu a intervenção, e de que forma?" C: pesquisador, por sorteio; D: intervenção aplicada a todos, sem sorteio, comparada a período histórico', pts: 1 },
        { tarefa: 3, item: 'A é observacional: o pesquisador só observa uma exposição já existente, sem alocá-la', pts: 1 },
        { tarefa: 4, item: 'Randomização: mesma chance de alocação, equilibrando características conhecidas e desconhecidas (controla o confundimento)', pts: 1 },
        { tarefa: 4, item: 'A: risco relativo · B: odds ratio · C: risco relativo entre os grupos sorteados', pts: 1 },
      ],
    },
    errosCriticos: ['Classificar A como caso-controle por usar dados do passado', 'Classificar D como ensaio randomizado'],
    falaModelo: [
      { tarefa: 1, texto: 'A é uma coorte retrospectiva; B, um caso-controle; C, um ensaio clínico randomizado duplo-cego; e D, um ensaio não randomizado, um quase-experimento.', tempo: '15 s' },
      { tarefa: 2, texto: 'O que decide não é se os dados são do passado, e sim por qual critério os participantes foram selecionados. Em A, as gestantes foram separadas pela exposição, o tabagismo, e o desfecho foi verificado depois: é coorte, só que reconstruída a partir de registros. Em B, a seleção foi pela doença, a malformação, e depois se investigou a exposição: é caso-controle. A coorte retrospectiva dá resultado rápido, porque o desfecho já aconteceu, mas depende da qualidade dos registros; a prospectiva dá mais controle, mas demora.', tempo: '50 s' },
      { tarefa: 3, texto: 'A pergunta aqui é: quem decidiu quem recebeu a intervenção, e de que forma? Em C, o pesquisador decidiu por sorteio; em D, a intervenção foi dada a todos, sem sorteio, e comparada com um período anterior. Já em A ninguém alocou nada: o pesquisador só observou quem fumava. Por isso A é observacional.', tempo: '35 s' },
      { tarefa: 4, texto: 'A randomização dá a cada gestante a mesma chance de cair em qualquer grupo, e isso equilibra até as características que eu nem medi, como numa moeda jogada para cada uma. Em A e C, a medida é o risco relativo; em B, a odds ratio.', tempo: '30 s', analogia: 'Sorteio como moeda jogada para cada participante' },
    ],
    extra: 'O que é análise por intenção de tratar? (Analisar cada participante no grupo para o qual foi sorteado, mesmo que não tenha completado o tratamento, preservando a randomização.)',
  },

  // ----------------------------------------------------- EPI-13 · Estudo transversal e causalidade reversa
  {
    id: 'EPI-13', materia: 'epi',
    titulo: 'O sedentarismo causa dor nas costas?',
    local: 'Empresa de logística — saúde ocupacional', papel: 'Médico(a) do trabalho', interacao: 'paciente',
    cenario: 'A gerente de recursos humanos de uma empresa de logística leu o relatório de uma pesquisa de saúde ocupacional e quer "obrigar todo mundo a fazer academia, já que o sedentarismo causa dor nas costas". Pergunte como a pesquisa foi feita, interprete e oriente. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é o desenho do estudo? O que o caracteriza?',
      'Calcule a medida de frequência e a medida de associação adequadas e interprete.',
      'Dê duas explicações alternativas para essa associação, além de "o sedentarismo causa dor".',
      'Que desenho responderia melhor se o sedentarismo vem antes da dor? Explique à gerente.',
    ],
    anamnese: [
      { tema: 'Como a pesquisa foi feita', resposta: '"Aplicamos um questionário a todos os 700 funcionários administrativos, numa mesma semana, uma vez só."' },
      { tema: 'Acompanhamento', resposta: '"Não acompanhamos ninguém depois."' },
      { tema: 'Perfil dos funcionários', resposta: '"Os sedentários são, em geral, os mais velhos da empresa."' },
    ],
    placas: [
      { pedido: 'a tabela de resultados', placa: 'Sedentários: 300 funcionários, 90 com dor lombar crônica · Fisicamente ativos: 400 funcionários, 40 com dor lombar crônica.' },
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Está provado, né? Vou colocar academia obrigatória."' },
      { gatilho: 'Se falar em causalidade reversa', fala: '"Como assim, a dor pode ter vindo antes?"' },
      { gatilho: 'No final', fala: '"Então essa pesquisa não serviu para nada?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou como e quando os dados foram coletados: estudo transversal, com exposição e desfecho medidos no mesmo momento, sem acompanhamento', pts: 1 },
        { tarefa: 2, item: 'Prevalência: sedentários 90 ÷ 300 = 30%; ativos 40 ÷ 400 = 10%', pts: 1 },
        { tarefa: 2, item: 'Razão de prevalência = 30% ÷ 10% = 3: prevalência três vezes maior entre os sedentários', pts: 2 },
        { tarefa: 3, item: 'Causalidade reversa: a dor lombar pode levar ao sedentarismo (o transversal não mostra o que veio antes)', pts: 1 },
        { tarefa: 3, item: 'Confundimento: uma terceira variável associada à exposição e ao desfecho (ex.: a idade, já que os sedentários são os mais velhos)', pts: 1 },
        { tarefa: 4, item: 'Coorte: acompanha os ativos e os sedentários sem dor até o surgimento da dor, garantindo a temporalidade', pts: 1 },
        { tarefa: 4, item: 'Valorizou o transversal: descreve a prevalência e identifica grupos de risco, com baixo custo', pts: 1 },
      ],
    },
    errosCriticos: ['Calcular risco relativo ou incidência num estudo transversal', 'Afirmar que o estudo prova que o sedentarismo causa a dor'],
    falaModelo: [
      { tarefa: 1, texto: 'É um estudo transversal: uma única coleta, na mesma semana, em que exposição e desfecho foram medidos ao mesmo tempo, sem acompanhamento.', tempo: '15 s' },
      { tarefa: 2, texto: 'A medida de frequência é a prevalência: 90 em 300 sedentários, 30%; 40 em 400 ativos, 10%. A medida de associação é a razão de prevalência: 30 dividido por 10, igual a 3. A dor lombar é três vezes mais prevalente entre os sedentários.', tempo: '30 s' },
      { tarefa: 3, texto: 'Primeira explicação: causalidade reversa. Como medi tudo junto, pode ser que a dor tenha levado a pessoa a parar de se exercitar, e não o contrário. Segunda: confundimento, uma terceira variável, como a idade, que pode estar ligada tanto ao sedentarismo quanto à dor.', tempo: '35 s' },
      { tarefa: 4, texto: 'Para saber o que vem antes, eu precisaria de uma coorte: acompanhar pessoas sem dor, ativas e sedentárias, e ver quem desenvolve dor ao longo do tempo. A pesquisa serviu, sim: mostrou quantos têm dor e que grupo concentra mais casos. É como uma fotografia: mostra quem está junto no mesmo momento, mas não conta quem chegou primeiro; para isso, precisamos de um filme. Faz sentido?', tempo: '45 s', analogia: 'Fotografia × filme' },
    ],
    extra: 'Por que o transversal não serve para doença rara? (Precisaria de amostras enormes; doença rara pede caso-controle.) E o viés de prevalência-incidência? (Os casos mais graves podem já ter saído da população estudada, mascarando a associação.)',
  },

  // ----------------------------------------------------- EPI-14 · Estudo ecológico e falácia ecológica
  {
    id: 'EPI-14', materia: 'epi',
    titulo: 'O gráfico do vereador',
    local: 'Câmara Municipal — audiência pública', papel: 'Médico(a) sanitarista', interacao: 'paciente',
    cenario: 'Numa audiência pública, um vereador apresenta um gráfico sobre esgoto e internações de crianças por diarreia e quer anunciar: "Cada criança que mora numa casa com esgoto tem 60% menos chance de internar por diarreia". Pergunte como o gráfico foi feito, classifique o estudo e responda. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é o desenho do estudo, qual é a unidade de análise e qual o subtipo?',
      'O que está errado na frase do vereador? Explique o conceito.',
      'Quais são as vantagens desse desenho?',
      'Compare com um estudo transversal e com uma coorte: qual desses daria evidência mais robusta para decidir a política, e por quê?',
    ],
    anamnese: [
      { tema: 'De onde vêm os dados', resposta: '"Peguei dos sistemas de informação: cobertura de esgoto e internações de crianças por diarreia."' },
      { tema: 'O que é cada ponto', resposta: '"Cada ponto é um município. São os 40 da região."' },
      { tema: 'Dados de cada criança', resposta: '"Não sei quais crianças tinham esgoto em casa. Só tenho o número de cada cidade."' },
    ],
    placas: [
      { pedido: 'o gráfico', placa: 'Dispersão: eixo X = cobertura de esgoto por município (%); eixo Y = internações por diarreia em menores de 5 anos por 10.000 (por município). Correlação negativa forte.' },
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"A correlação é fortíssima! Isso não prova?"' },
      { gatilho: 'Se falar em falácia ecológica', fala: '"Falácia? Mas os números são verdadeiros."' },
      { gatilho: 'No final', fala: '"Então o que eu posso dizer sem errar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou o que é cada ponto e de onde vêm os dados: estudo ecológico, com o agregado (município) como unidade de análise, sem dados individuais', pts: 1 },
        { tarefa: 1, item: 'Subtipo espacial (territorial): compara indicadores entre unidades geográficas no mesmo período', pts: 1 },
        { tarefa: 2, item: 'Falácia ecológica: transferir uma associação vista entre municípios para o nível do indivíduo, independentemente da força da correlação', pts: 2 },
        { tarefa: 3, item: 'Usa dados secundários já existentes: rápido, barato; útil para gerar hipóteses', pts: 1 },
        { tarefa: 4, item: 'Transversal: unidade de análise é o indivíduo, mas sem temporalidade', pts: 1 },
        { tarefa: 4, item: 'Coorte: vincula exposição e desfecho no mesmo indivíduo e garante a temporalidade → evidência mais robusta para a política', pts: 1 },
      ],
    },
    errosCriticos: ['Concluir sobre o risco individual a partir de dados agregados', 'Classificar o estudo como transversal'],
    falaModelo: [
      { tarefa: 1, texto: 'É um estudo ecológico: cada ponto é um município, e não uma pessoa. A unidade de análise é o agregado. Como compara municípios no mesmo período, é do tipo espacial, ou territorial.', tempo: '20 s' },
      { tarefa: 2, texto: 'A frase do vereador comete a falácia ecológica: ele pega uma associação vista entre municípios e afirma sobre cada criança. Dentro do mesmo município moram crianças com e sem esgoto, e o gráfico não mostra quais delas internaram. Por mais forte que seja a correlação, ela é do coletivo.', tempo: '35 s' },
      { tarefa: 3, texto: 'As vantagens: usa dados secundários que já existem, é rápido e barato, e é ótimo para gerar hipóteses.', tempo: '15 s' },
      { tarefa: 4, texto: 'Um transversal olharia cada criança, mas tudo no mesmo momento, sem saber o que veio antes. Uma coorte acompanharia as crianças com e sem esgoto em casa até as internações, ligando exposição e desfecho na mesma pessoa e garantindo a temporalidade: é a evidência mais robusta. Vereador, é como olhar a média de notas de duas escolas: a escola com média maior não garante que cada aluno dela seja melhor. O senhor pode dizer que os municípios com mais esgoto têm menos internações, e que isso merece investigação. Ficou claro?', tempo: '55 s', analogia: 'Média da escola × nota de cada aluno' },
    ],
    extra: 'Quais são os outros subtipos de estudo ecológico? (Série temporal: um indicador agregado ao longo dos anos na mesma área; agregados institucionais: compara serviços de uma mesma instituição.)',
  },

  // ----------------------------------------------------- EPI-15 · Estudos descritivos
  {
    id: 'EPI-15', materia: 'epi',
    titulo: 'Seis pacientes com o mesmo quadro estranho',
    local: 'Hospital regional — comissão de controle de infecção', papel: 'Médico(a) epidemiologista', interacao: 'examinador',
    cenario: 'Em 3 semanas, a neurologia de um hospital regional atendeu 6 adultos com um quadro neurológico incomum, todos moradores de dois bairros vizinhos. A equipe primeiro publicou o caso do primeiro paciente e, depois, um relato reunindo os 6, com idade, sexo, bairro, profissão, data de início dos sintomas e evolução. Não há grupo de comparação. O diretor clínico (examinador) quer entender o que esses estudos podem e o que não podem dizer.',
    mesa: [
      { tipo: 'tabela', titulo: 'O que foi descrito', linhas: [['Pessoa', 'idade 34–61 anos, 4 homens, 3 trabalham na mesma feira'], ['Lugar', 'dois bairros vizinhos, perto de um córrego'], ['Tempo', 'início dos sintomas concentrado em 3 semanas']] },
    ],
    tarefas: [
      'Classifique as duas publicações. Qual é a diferença entre elas?',
      'São estudos descritivos ou analíticos? O que diferencia os dois tipos?',
      'Quais são as três variáveis da epidemiologia descritiva aplicadas a esse caso, e qual é o papel desses estudos?',
      'Eles permitem concluir a causa? Qual seria o próximo passo?',
    ],
    ator: [
      { gatilho: 'Diretor, ao começar', fala: '"Seis casos já não provam que é algo do córrego?"' },
      { gatilho: 'Na tarefa 4', fala: '"E se eu quiser testar se foi a feira?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Primeira: relato de caso (um único paciente) · Segunda: série de casos (vários pacientes com quadro semelhante); ambos sem grupo controle', pts: 1 },
        { tarefa: 2, item: 'Descritivos: descrevem frequência e características, sem testar hipótese de associação · Analíticos: testam hipótese comparando grupos', pts: 2 },
        { tarefa: 3, item: 'Tempo (3 semanas), lugar (bairros vizinhos, córrego), pessoa (idade, sexo, profissão na feira)', pts: 1 },
        { tarefa: 3, item: 'Papel: alerta precoce de agravo emergente e geração de hipóteses', pts: 1 },
        { tarefa: 4, item: 'Não permitem inferência causal (sem comparação); relato é a evidência mais frágil, série é intermediária', pts: 1 },
        { tarefa: 4, item: 'Próximo passo: estudo analítico; para casos raros, caso-controle comparando a exposição (feira, córrego) entre casos e controles', pts: 1 },
      ],
    },
    errosCriticos: ['Concluir a causa a partir da série de casos', 'Chamar a série de casos de estudo analítico'],
    falaModelo: [
      { tarefa: 1, texto: 'A primeira é um relato de caso, porque descreve um único paciente. A segunda é uma série de casos, porque reúne vários pacientes com quadro parecido. Nenhuma tem grupo de comparação.', tempo: '20 s' },
      { tarefa: 2, texto: 'São descritivos: descrevem a frequência e as características do evento, sem testar uma hipótese de associação. Um estudo analítico compara grupos para testar se uma exposição está associada ao desfecho.', tempo: '25 s' },
      { tarefa: 3, texto: 'As três variáveis são tempo, lugar e pessoa: os casos se concentraram em 3 semanas, em dois bairros perto de um córrego, em adultos, a maioria homens, metade trabalhando na mesma feira. O papel desses estudos é dar o alerta de algo novo e gerar hipóteses: o córrego e a feira.', tempo: '35 s' },
      { tarefa: 4, texto: 'Eles não provam a causa, porque não há comparação: o relato é a evidência mais frágil e a série é intermediária. Diretor, a série de casos é como o detetive que encontra várias vítimas com o mesmo detalhe: aponta um suspeito, mas não condena. O próximo passo é um estudo analítico; como os casos são raros, um caso-controle, comparando a frequência de ida à feira e de contato com o córrego entre os doentes e pessoas sem a doença.', tempo: '45 s', analogia: 'Pista que aponta o suspeito, mas não condena' },
    ],
    extra: 'Um mesmo estudo pode ser descritivo e analítico? (Sim: numa coorte, a caracterização basal é descritiva e a comparação da incidência com risco relativo é analítica.)',
  },

  // ----------------------------------------------------- EPI-16 · Eficácia × efetividade, tipos de ensaio
  {
    id: 'EPI-16', materia: 'epi',
    titulo: 'Funcionou no estudo, não funcionou na UBS',
    local: 'Secretaria Municipal de Saúde', papel: 'Médico(a) da gestão', interacao: 'paciente',
    cenario: 'A secretária de saúde implantou um programa de acompanhamento de hipertensos baseado num ensaio clínico e acha que "o estudo estava errado", porque o resultado no município foi bem menor. Pergunte como foi o estudo e como foi a implantação, e responda. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Diferencie eficácia de efetividade e explique o resultado do município.',
      'O estudo estava errado? Explique validade interna e externa e o papel dos critérios de elegibilidade.',
      'Diferencie ensaio explicativo de pragmático. Qual responderia melhor à pergunta da secretaria?',
      'Se a intervenção fosse alocada por UBS inteiras, e não por paciente, como se chamaria o ensaio? E se testasse uma vacina em pessoas saudáveis?',
    ],
    anamnese: [
      { tema: 'Como foi o estudo original', resposta: '"Um ensaio clínico randomizado, num centro acadêmico de excelência, com enfermeiro dedicado só ao programa. Reduziu muito as internações."' },
      { tema: 'Quem participou do estudo', resposta: '"Só pacientes de 40 a 60 anos, sem outras doenças, com boa escolaridade."' },
      { tema: 'Como foi a implantação aqui', resposta: '"Colocamos em todas as UBS. Nossos hipertensos são mais velhos, muitos com diabetes, e falta enfermeiro."' },
      { tema: 'Resultado no município', resposta: '"Um ano depois, a redução das internações foi bem menor."' },
    ],
    placas: [],
    ator: [
      { gatilho: 'Ao começar', fala: '"Gastamos com um programa que não funciona. O estudo mentiu?"' },
      { gatilho: 'Se falar em validade externa', fala: '"Mas se o estudo foi bem feito, por que não vale para nós?"' },
      { gatilho: 'No final', fala: '"E como eu testo se funciona aqui?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Eficácia: desempenho em condições ideais e controladas · Efetividade: desempenho em condições reais, geralmente menor', pts: 2 },
        { tarefa: 2, item: 'O estudo pode ter boa validade interna (sem vieses e confundimento na amostra) e ainda assim limitada validade externa (generalização)', pts: 1 },
        { tarefa: 2, item: 'Perguntou quem participou: critérios de elegibilidade restritivos favorecem a validade interna, mas limitam a generalização para os excluídos (idosos, com comorbidades)', pts: 1 },
        { tarefa: 3, item: 'Explicativo: condições ideais, mede eficácia · Pragmático: condições próximas da prática real, mede efetividade → o pragmático responde à pergunta da secretaria', pts: 2 },
        { tarefa: 4, item: 'Alocação por agrupamento (UBS): ensaio comunitário · Intervenção preventiva em saudáveis (vacina): ensaio de campo', pts: 1 },
      ],
    },
    errosCriticos: ['Afirmar que o estudo estava errado só porque o resultado no município foi menor', 'Confundir eficácia com efetividade'],
    falaModelo: [
      { tarefa: 1, texto: 'Eficácia é o resultado em condições ideais e controladas, como no centro de excelência. Efetividade é o resultado em condições reais, como nas nossas UBS, e costuma ser menor. Foi o que aconteceu aqui.', tempo: '25 s' },
      { tarefa: 2, texto: 'O estudo não estava necessariamente errado. Ele pode ter boa validade interna, ou seja, o resultado não foi distorcido por vieses dentro da amostra. O problema é a validade externa: os critérios eram tão restritos, sem idosos e sem comorbidades, que o resultado não se generaliza para os nossos pacientes. Critérios rígidos ajudam a validade interna, mas limitam a externa.', tempo: '40 s' },
      { tarefa: 3, texto: 'O ensaio explicativo testa em condições ideais e mede eficácia; o pragmático testa em condições próximas da prática real e mede efetividade. Secretária, para saber se funciona nas nossas UBS, o ideal é um ensaio pragmático. É como uma receita de bolo testada na cozinha de um chef: dá certo lá, mas na cozinha de casa, com outro forno, o resultado muda; por isso testamos na nossa cozinha.', tempo: '45 s', analogia: 'Receita testada na cozinha do chef × na de casa' },
      { tarefa: 4, texto: 'Se o sorteio fosse por UBS inteiras, seria um ensaio comunitário, porque a unidade de alocação é o agrupamento. Se testasse uma vacina em pessoas saudáveis, seria um ensaio de campo.', tempo: '20 s' },
    ],
    extra: 'O que é um ensaio de não inferioridade? (Mostra que a nova intervenção não é significativamente pior que a padrão, útil quando tem outra vantagem, como menor custo.) E o crossover? (Cada participante recebe as intervenções em sequência e é o seu próprio controle.)',
  },

  // ----------------------------------------------------- EPI-17 · Densidade de incidência
  {
    id: 'EPI-17', materia: 'epi',
    titulo: 'Cada um foi acompanhado por um tempo diferente',
    local: 'Hospital universitário — grupo de pesquisa', papel: 'Médico(a) pesquisador(a)', interacao: 'examinador',
    cenario: 'Uma coorte acompanhou profissionais de enfermagem sem hipertensão para avaliar se o trabalho em plantão noturno aumenta o risco de desenvolver hipertensão. Ao longo de 8 anos, novos profissionais entraram no estudo, alguns saíram do hospital e outros se aposentaram, então cada participante foi acompanhado por um tempo diferente. A orientadora (examinadora) pede a análise.',
    mesa: [
      { tipo: 'tabela', titulo: 'Resultados', linhas: [['Plantão noturno', '45 casos novos · 9.000 pessoas-ano de acompanhamento'], ['Plantão diurno', '20 casos novos · 10.000 pessoas-ano de acompanhamento']] },
    ],
    tarefas: [
      'Por que a incidência acumulada não é a melhor medida aqui? Qual medida usar?',
      'Calcule essa medida nos dois grupos e a razão entre elas. Interprete.',
      'Calcule o risco atribuível e o risco atribuível percentual. Interprete.',
      'Esta coorte é aberta ou fechada? Cite duas limitações típicas de uma coorte.',
    ],
    ator: [
      { gatilho: 'Orientadora, ao começar', fala: '"Por que não dividir os casos pelo número de pessoas, como sempre?"' },
      { gatilho: 'Na tarefa 3', fala: '"Qual a diferença entre dizer 2,5 vezes e dizer 3 casos a mais?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Tempos de acompanhamento diferentes (entradas, saídas, perdas): usar densidade de incidência, com pessoas-tempo no denominador', pts: 1 },
        { tarefa: 2, item: 'Noturno: 45 ÷ 9.000 = 5 por 1.000 pessoas-ano · Diurno: 20 ÷ 10.000 = 2 por 1.000 pessoas-ano', pts: 2 },
        { tarefa: 2, item: 'Razão das densidades = 5 ÷ 2 = 2,5 (análoga ao risco relativo): risco 2,5 vezes maior no plantão noturno', pts: 1 },
        { tarefa: 3, item: 'Risco atribuível = 5 − 2 = 3 casos a mais por 1.000 pessoas-ano (medida de diferença, impacto absoluto)', pts: 1 },
        { tarefa: 3, item: 'RA% = 3 ÷ 5 = 60% dos casos entre os expostos atribuíveis ao plantão noturno', pts: 1 },
        { tarefa: 4, item: 'Coorte aberta (dinâmica), com entradas e saídas · Limitações: perdas de seguimento, mudança de exposição ao longo do tempo, custo, confundimento', pts: 1 },
      ],
    },
    errosCriticos: ['Dividir os casos pelo número de participantes ignorando o tempo de acompanhamento', 'Confundir risco atribuível (diferença) com risco relativo (razão)'],
    falaModelo: [
      { tarefa: 1, texto: 'Como cada pessoa foi acompanhada por um tempo diferente, com entradas e saídas, a incidência acumulada distorce. Uso a densidade de incidência, que coloca no denominador a soma das pessoas-tempo sob risco.', tempo: '20 s' },
      { tarefa: 2, texto: 'No plantão noturno, 45 casos em 9.000 pessoas-ano: 5 por 1.000 pessoas-ano. No diurno, 20 em 10.000: 2 por 1.000 pessoas-ano. A razão é 5 dividido por 2, igual a 2,5: quem faz plantão noturno tem risco 2,5 vezes maior de desenvolver hipertensão.', tempo: '35 s' },
      { tarefa: 3, texto: 'O risco atribuível é a diferença: 5 menos 2, 3 casos a mais por 1.000 pessoas-ano. O percentual é 3 dividido por 5, 60%: seis em cada dez casos entre os do plantão noturno seriam atribuíveis a ele. A razão diz quantas vezes maior; a diferença diz quantos casos a mais. É como comparar dois carros: um gasta o dobro do outro, mas a diferença em reais é o que pesa no bolso.', tempo: '45 s', analogia: 'Quantas vezes × quantos reais a mais' },
      { tarefa: 4, texto: 'É uma coorte aberta, ou dinâmica, porque entram e saem participantes ao longo do tempo. Duas limitações típicas: perda de seguimento, que pode distorcer a comparação, e a mudança de exposição, como alguém que passa do noturno para o diurno.', tempo: '25 s' },
    ],
    extra: 'Qual a diferença entre incidência e densidade de incidência? (A incidência acumulada usa as pessoas sob risco no início; a densidade usa o tempo que cada uma ficou sob risco, em pessoas-tempo.)',
  },

  // ----------------------------------------------------- EPI-18 · Risco atribuível e prioridade em saúde pública
  {
    id: 'EPI-18', materia: 'epi',
    titulo: 'Onde investir a campanha?',
    local: 'Secretaria Municipal de Saúde', papel: 'Médico(a) da vigilância', interacao: 'examinador',
    cenario: 'O município tem 100.000 adultos e recurso para uma única campanha de prevenção de uma doença crônica. Dois fatores de risco foram estudados em coortes locais. O secretário (examinador) quer escolher "o fator com o maior risco relativo".',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados (incidência em 10 anos)', linhas: [['Exposição X (ocupacional rara)', '1.000 expostos · incidência 100 por 1.000'], ['Exposição Y (comum)', '50.000 expostos · incidência 20 por 1.000'], ['Não expostos a X nem a Y', 'incidência 10 por 1.000']] },
    ],
    tarefas: [
      'Calcule o risco relativo de cada exposição.',
      'Calcule o risco atribuível e o risco atribuível percentual de cada uma. O que cada medida informa?',
      'Quantos casos seriam evitados na população eliminando cada exposição? Onde investir?',
      'Explique ao secretário a diferença entre medidas de razão e de diferença.',
    ],
    ator: [
      { gatilho: 'Secretário, ao começar', fala: '"O X tem risco relativo 10! É óbvio que é ali que eu invisto."' },
      { gatilho: 'Na tarefa 3', fala: '"Mas o Y nem é tão perigoso assim…"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'RR X = 100 ÷ 10 = 10 · RR Y = 20 ÷ 10 = 2', pts: 1 },
        { tarefa: 2, item: 'RA X = 90 por 1.000 (RA% = 90%) · RA Y = 10 por 1.000 (RA% = 50%)', pts: 2 },
        { tarefa: 2, item: 'RA%: fração evitável dentro do grupo exposto; não mede o impacto na população', pts: 1 },
        { tarefa: 3, item: 'Casos evitáveis: X = 1.000 × 90/1.000 = 90 · Y = 50.000 × 10/1.000 = 500 → investir em Y', pts: 2 },
        { tarefa: 3, item: 'Para priorizar, considerar também a prevalência da exposição', pts: 1 },
        { tarefa: 4, item: 'Razão (RR, OR): quantas vezes maior, força da associação · Diferença (risco atribuível): impacto absoluto, casos a mais', pts: 1 },
      ],
    },
    errosCriticos: ['Priorizar apenas pelo risco relativo', 'Usar o RA% como se fosse o impacto populacional'],
    falaModelo: [
      { tarefa: 1, texto: 'Risco relativo de X: 100 dividido por 10, igual a 10. De Y: 20 dividido por 10, igual a 2.', tempo: '15 s' },
      { tarefa: 2, texto: 'O risco atribuível de X é 100 menos 10, 90 por 1.000, e o percentual, 90 sobre 100, 90%. De Y: 20 menos 10, 10 por 1.000, e 50%. O RA% mostra quanto do risco dos expostos é evitável, mas só dentro do grupo exposto.', tempo: '30 s' },
      { tarefa: 3, texto: 'Na população: X tem só 1.000 expostos, então evitaria 90 casos. Y tem 50.000 expostos: 50.000 vezes 10 por 1.000, 500 casos. Investo em Y, porque, além da força da associação, conta a prevalência da exposição.', tempo: '30 s' },
      { tarefa: 4, texto: 'Secretário, o risco relativo diz quantas vezes maior é o risco: é a força da associação. O risco atribuível diz quantos casos a mais: é o impacto. É como dois vazamentos: um cano estourado num quarto vazio vaza muito, mas molha pouca gente; uma goteira em cada casa do bairro parece pouca coisa, mas no total alaga mais. O Y é a goteira em 50 mil casas. Faz sentido?', tempo: '45 s', analogia: 'Cano estourado × goteira em cada casa' },
    ],
    extra: 'Como se calcula o risco atribuível populacional pelo conceito do banco? (Diferença entre a incidência observada na população e a esperada na ausência da exposição: estima os casos evitáveis com uma política.)',
  },

  // ----------------------------------------------------- EPI-19 · Confundimento e variável intermediária
  {
    id: 'EPI-19', materia: 'epi',
    titulo: '"Café causa infarto", diz a manchete',
    local: 'Ambulatório de cardiologia', papel: 'Médico(a) assistente', interacao: 'paciente',
    cenario: 'Sr. Wagner, 55 anos, chega assustado com uma reportagem: "Estudo mostra que café aumenta em 80% o risco de infarto". Converse com ele, interprete o estudo e oriente. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'O que é confundimento? Por que o tabagismo é um confundidor aqui?',
      'Interprete a análise bruta e a ajustada. O que o intervalo de confiança da ajustada mostra?',
      'Qual a diferença entre um confundidor e uma variável intermediária? Por que não se deve ajustar para uma intermediária?',
      'Explique ao paciente o que o estudo realmente mostra e o que mais pesa no risco dele.',
    ],
    anamnese: [
      { tema: 'Hábitos', resposta: '"Tomo 6 xícaras de café por dia. E fumo um maço por dia há 30 anos."' },
      { tema: 'Doenças', resposta: '"Tenho pressão alta, tomo remédio."' },
      { tema: 'O que ele espera', resposta: '"Vou ter que parar o café?"' },
    ],
    placas: [
      { pedido: 'o artigo da reportagem', placa: 'Coorte de 20.000 adultos. Entre os que tomam muito café, a proporção de fumantes era bem maior. Análise bruta: RR = 1,8 (IC95% 1,4–2,3). Análise ajustada para tabagismo: RR = 1,1 (IC95% 0,9–1,4).' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), vou ter que parar o café? Saiu na televisão!"' },
      { gatilho: 'Se falar em tabagismo', fala: '"Mas o cigarro eu fumo há 30 anos e nunca deu nada…"' },
      { gatilho: 'No final', fala: '"Então posso continuar com o meu cafezinho?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Confundidor: terceira variável, causa comum, associada à exposição e ao desfecho, que distorce a associação', pts: 1 },
        { tarefa: 1, item: 'Tabagismo: mais frequente entre quem toma muito café e associado ao infarto', pts: 1 },
        { tarefa: 2, item: 'A associação bruta (1,8) quase desaparece após ajuste (1,1): grande parte era efeito do tabagismo', pts: 1 },
        { tarefa: 2, item: 'IC95% da ajustada inclui 1: associação não estatisticamente significativa', pts: 1 },
        { tarefa: 3, item: 'Confundidor é causa comum, anterior à exposição e ao desfecho; a intermediária é um elo no caminho causal entre eles', pts: 1 },
        { tarefa: 3, item: 'Ajustar para uma intermediária mascara parte do efeito real que se quer medir; a randomização é o que controla confundidores conhecidos e desconhecidos', pts: 1 },
        { tarefa: 4, item: 'Perguntou os hábitos; explicou sem jargão que o estudo não mostra que o café causa infarto e destacou o tabagismo como fator de risco dele', pts: 1 },
      ],
    },
    errosCriticos: ['Interpretar a análise bruta como efeito do café', 'Ajustar para variável intermediária como se fosse confundidor'],
    falaModelo: [
      { tarefa: 1, texto: 'Confundimento é quando uma terceira variável, ligada tanto à exposição quanto ao desfecho, distorce a associação. Aqui, quem toma mais café fuma mais, e o cigarro está ligado ao infarto: o tabagismo é o confundidor.', tempo: '25 s' },
      { tarefa: 2, texto: 'Na análise bruta, o risco parecia 80% maior. Quando se ajusta para o tabagismo, cai para 1,1, e o intervalo de confiança inclui 1, então não há associação estatisticamente significativa. Quase todo o efeito era do cigarro.', tempo: '30 s' },
      { tarefa: 3, texto: 'O confundidor é uma causa comum, que vem antes da exposição e do desfecho. A variável intermediária fica no meio do caminho causal: a exposição causa a intermediária, que causa o desfecho. Se eu ajustar para ela, apago parte do efeito que quero medir. E o único jeito de controlar até os confundidores que não conheço é a randomização.', tempo: '35 s' },
      { tarefa: 4, texto: 'Seu Wagner, a manchete pegou o número errado. É como achar que guarda-chuva causa trânsito, porque nos dias de muito guarda-chuva tem muito engarrafamento: quem causa os dois é a chuva. No seu caso, a chuva é o cigarro. O estudo, depois de considerar o cigarro, não mostrou que o café aumente o infarto. O que mais pesa no seu risco é o cigarro, e é aí que eu gostaria de ajudar o senhor. O que acha?', tempo: '50 s', analogia: 'Guarda-chuva e trânsito: a causa é a chuva' },
    ],
    extra: 'O que é causalidade reversa? (O desfecho influenciando a exposição; aparece sobretudo em estudos transversais.) Qual critério de Bradford Hill a correlação sorvete–afogamento viola? (Plausibilidade biológica/coerência: o calor do verão explica os dois.)',
  },

  // ----------------------------------------------------- EPI-20 · APVP e DALY
  {
    id: 'EPI-20', materia: 'epi',
    titulo: 'Poucas mortes, muitos anos perdidos',
    local: 'Secretaria Estadual de Saúde — planejamento', papel: 'Médico(a) sanitarista', interacao: 'examinador',
    cenario: 'O conselho de saúde vai decidir entre dois programas. A conselheira (examinadora) argumenta que "a doença B mata cinco vezes mais, então é óbvio que é a prioridade". Os dados do último ano estão na mesa. Considere a expectativa de vida padrão de 75 anos.',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados do último ano', linhas: [['Agravo A (acidentes de moto)', '40 óbitos · idade média 22 anos · 2.000 sobreviventes com sequela (peso de incapacidade 0,3) por 1 ano'], ['Agravo B (doença crônica de idosos)', '200 óbitos · idade média 70 anos · sem dados de incapacidade']] },
    ],
    tarefas: [
      'Calcule os anos potenciais de vida perdidos (APVP) de cada agravo.',
      'Calcule os anos vividos com incapacidade (YLD) e o DALY do agravo A.',
      'Interprete: por que um agravo com menos mortes pode ter carga maior?',
      'Responda à conselheira, explicando o que o DALY acrescenta ao número de óbitos.',
    ],
    ator: [
      { gatilho: 'Conselheira, ao começar', fala: '"200 mortes contra 40. Não tem discussão."' },
      { gatilho: 'Na tarefa 4', fala: '"Mas morte é morte, não importa a idade."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'APVP = óbitos × (expectativa padrão − idade do óbito)', pts: 1 },
        { tarefa: 1, item: 'A: 40 × (75 − 22) = 2.120 · B: 200 × (75 − 70) = 1.000', pts: 2 },
        { tarefa: 2, item: 'YLD A = prevalência × peso de incapacidade × duração = 2.000 × 0,3 × 1 = 600', pts: 1 },
        { tarefa: 2, item: 'DALY A = APVP + YLD = 2.120 + 600 = 2.720 anos de vida saudável perdidos', pts: 1 },
        { tarefa: 3, item: 'A atinge jovens (mortalidade prematura) e deixa sequelas: mais anos perdidos com menos óbitos', pts: 1 },
        { tarefa: 4, item: 'DALY mede a carga total da doença, somando mortalidade prematura e incapacidade; complementa o número de óbitos', pts: 1 },
      ],
    },
    errosCriticos: ['Priorizar só pelo número absoluto de óbitos', 'Somar os óbitos com os anos de incapacidade'],
    falaModelo: [
      { tarefa: 1, texto: 'APVP é o número de óbitos vezes a diferença entre a expectativa padrão e a idade do óbito. Agravo A: 40 vezes 75 menos 22, 40 vezes 53, 2.120 anos. Agravo B: 200 vezes 5, 1.000 anos.', tempo: '30 s' },
      { tarefa: 2, texto: 'YLD do A: prevalência vezes peso de incapacidade vezes duração, 2.000 vezes 0,3 vezes 1, 600 anos. O DALY soma os dois: 2.120 mais 600, 2.720 anos de vida saudável perdidos.', tempo: '25 s' },
      { tarefa: 3, texto: 'O A mata menos, mas mata jovens, que perderiam muitos anos de vida, e ainda deixa milhares com sequela. Por isso perde mais anos de vida saudável.', tempo: '20 s' },
      { tarefa: 4, texto: 'Conselheira, toda morte importa, mas o número de óbitos não mostra tudo. É como comparar duas lojas pelo número de clientes perdidos: perder um cliente que compraria por 50 anos pesa mais do que perder um que compraria por 5. O DALY soma os anos perdidos por morte precoce e os anos vividos com incapacidade e mostra a carga total. Por ele, o agravo A pesa mais que o dobro do B. Faz sentido?', tempo: '45 s', analogia: 'Clientes perdidos por 50 anos × por 5 anos' },
    ],
    extra: 'O que é mortalidade proporcional, e qual o erro comum? (A fração dos óbitos que ocorreu num grupo; não é o risco de morrer dentro do grupo.)',
  },

  // ----------------------------------------------------- EPI-22 · Sistemas de informação e notificação compulsória
  {
    id: 'EPI-22', materia: 'epi',
    titulo: 'Notificação fica para segunda-feira?',
    local: 'Pronto atendimento — fim do plantão', papel: 'Médico(a) plantonista', interacao: 'interno',
    cenario: 'No fim do plantão de sexta-feira, o interno mostra três atendimentos da noite e pergunta o que precisa ser notificado. Ele preencheu uma das fichas "só com o essencial, porque depois a vigilância completa". Oriente o interno. Pergunte o que precisar sobre os casos.',
    mesa: [],
    tarefas: [
      'Quais desses atendimentos devem ser notificados, e com que urgência?',
      'Em qual sistema de informação entra cada informação gerada nesses atendimentos?',
      'Quem é responsável por notificar? Corrija a ficha do interno, explicando os atributos de qualidade dos dados.',
      'Por que o número registrado no sistema não é necessariamente o número real de casos? Explique ao interno.',
    ],
    anamnese: [
      { tema: 'Caso 1', resposta: '"Criança de 6 anos mordida por um cão de rua no braço. Lavei a ferida e encaminhei para a vacina."' },
      { tema: 'Caso 2', resposta: '"Adolescente de 16 anos que tomou vários comprimidos dizendo que queria morrer. Ficou em observação e está estável."' },
      { tema: 'Caso 3', resposta: '"Senhor de 58 anos com dengue grave, que morreu na madrugada."' },
      { tema: 'O que ele preencheu', resposta: '"Só nome e diagnóstico. Endereço, raça/cor e data de início dos sintomas deixei em branco."' },
      { tema: 'Quando pretende enviar', resposta: '"Pensei em deixar as fichas para segunda-feira."' },
    ],
    placas: [
      { pedido: 'a ficha de notificação do interno', placa: 'Ficha do SINAN com nome e agravo preenchidos; endereço, raça/cor, escolaridade e data de início dos sintomas em branco.' },
      { pedido: 'a documentação do caso 3', placa: 'Declaração de óbito ainda não preenchida.' },
    ],
    ator: [
      { gatilho: 'Interno, ao começar', fala: '"Preciso notificar tudo isso? Notificação não é coisa da vigilância?"' },
      { gatilho: 'Interno, na tarefa 3', fala: '"Se faltar um campo, a vigilância completa depois, não?"' },
      { gatilho: 'Interno, no final', fala: '"Se o sistema mostra poucas tentativas de suicídio aqui, é porque o problema é pequeno, né?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou os detalhes dos casos: os três estão na lista de notificação compulsória (atendimento antirrábico, tentativa de suicídio, óbito por dengue)', pts: 1 },
        { tarefa: 1, item: 'Óbito suspeito ou confirmado de dengue: aviso em até 24 h; violência sexual e tentativa de suicídio: atenção prioritária em até 24 h; não deixar para segunda-feira', pts: 1 },
        { tarefa: 2, item: 'SINAN: agravos de notificação (dengue, atendimento antirrábico, tentativa de suicídio) · SIM: o óbito, pela declaração de óbito', pts: 1 },
        { tarefa: 2, item: 'Outros sistemas: SINASC (nascidos vivos), SIH (internações), SIA (produção ambulatorial), SI-PNI (doses de vacina aplicadas), CNES (estabelecimentos)', pts: 1 },
        { tarefa: 3, item: 'Notificam os profissionais de saúde ou os responsáveis pelo estabelecimento, conforme o fluxo da vigilância: aqui, a própria equipe', pts: 1 },
        { tarefa: 3, item: 'Qualidade: completude (campos em branco), consistência, cobertura, oportunidade (dado a tempo), validade e confiabilidade → completar a ficha agora', pts: 1 },
        { tarefa: 4, item: 'Subnotificação: número registrado ≠ número real; outras limitações: duplicidade, erro de preenchimento, ausência de informação, atraso, diferenças de acesso', pts: 1 },
        { tarefa: 4, item: 'Explicou o fluxo dado → informação → indicador → decisão: dado ruim gera decisão ruim', pts: 1 },
      ],
    },
    errosCriticos: ['Deixar a notificação do óbito por dengue para depois do prazo', 'Considerar que notificar é tarefa só da vigilância'],
    falaModelo: [
      { tarefa: 1, texto: 'Os três estão na lista de notificação compulsória: o atendimento antirrábico pela mordedura de cão, a tentativa de suicídio e o óbito por dengue. O óbito por dengue exige aviso à autoridade de saúde em até 24 horas, e a tentativa de suicídio tem atenção prioritária em até 24 horas. Nada fica para segunda-feira.', tempo: '35 s' },
      { tarefa: 2, texto: 'A dengue, o atendimento antirrábico e a tentativa de suicídio entram no SINAN, o sistema de agravos de notificação. O óbito entra no SIM, pela declaração de óbito. Se fossem um parto, uma internação ou uma vacina, entrariam no SINASC, no SIH e no SI-PNI.', tempo: '30 s' },
      { tarefa: 3, texto: 'Quem notifica são os profissionais de saúde ou os responsáveis pelo estabelecimento, conforme o fluxo da vigilância: aqui, nós. E a ficha precisa estar completa: completude é não deixar campo em branco, oportunidade é o dado chegar a tempo de ser usado, além de consistência, cobertura, validade e confiabilidade. O endereço e a data de início dos sintomas são o que permite à vigilância agir no bairro.', tempo: '40 s' },
      { tarefa: 4, texto: 'O número no sistema não é o número real: há subnotificação, além de duplicidade, erro de preenchimento, campos vazios e atraso. Pense no fluxo: o evento vira registro, o registro vira banco de dados, o banco vira indicador, e o indicador vira decisão. É como uma receita: se o ingrediente chega estragado, o bolo sai ruim, por melhor que seja o cozinheiro. Poucas tentativas de suicídio no sistema podem significar que estamos notificando pouco. Ficou claro?', tempo: '45 s', analogia: 'Ingrediente estragado, bolo ruim' },
    ],
    extra: 'Onde se acessam esses dados? (No DATASUS, pelo TABNET.) Quais são as fontes de dados dos sistemas? (Hospitais, UBS, laboratórios, vigilância, cartórios, profissionais, declarações de óbito e de nascido vivo, notificações e registros administrativos.)',
  },

  // ----------------------------------------------------- EPI-23 · Medidas de tendência central e de dispersão
  {
    id: 'EPI-23', materia: 'epi',
    titulo: 'O paciente típico fica 9 dias internado?',
    local: 'Hospital — reunião da diretoria', papel: 'Médico(a) da comissão de qualidade', interacao: 'examinador',
    cenario: 'O diretor do hospital (examinador) quer divulgar que "o paciente típico da enfermaria fica 9 dias internado" e pede sua análise do tempo de permanência de uma amostra de pacientes deste mês. Peça ao avaliador os dados de que precisar.',
    mesa: [
      { tipo: 'tabela', titulo: 'Tempo de permanência (dias) de 9 pacientes, ordenado', linhas: [['Este mês', '2 · 3 · 3 · 4 · 4 · 4 · 5 · 6 · 50']] },
    ],
    tarefas: [
      'Classifique a variável "tempo de permanência" e calcule a média, a mediana e a moda.',
      'Qual medida representa melhor o "paciente típico", e por quê? O que o paciente de 50 dias faz com cada medida?',
      'Calcule a amplitude. Que medida de dispersão resiste a valores extremos, e o que ela representa?',
      'Responda ao diretor. E se a pressão sistólica dos pacientes tem média de 120 mmHg e desvio-padrão de 10, como interpretar?',
    ],
    anamnese: [],
    placas: [
      { pedido: 'a história do paciente de 50 dias', placa: 'Complicação grave após cirurgia; caso isolado no mês.' },
      { pedido: 'os dados do mês anterior', placa: 'Mês anterior: 2 · 3 · 3 · 4 · 4 · 4 · 5 · 6 · 14 dias.' },
    ],
    ator: [
      { gatilho: 'Diretor, ao começar', fala: '"A média deu 9. A conta não mente, certo?"' },
      { gatilho: 'Diretor, na tarefa 2', fala: '"Mas nenhum paciente ficou 9 dias. Isso é um problema?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Quantitativa contínua (tempo de internação)', pts: 1 },
        { tarefa: 1, item: 'Média = 81 ÷ 9 = 9 dias · mediana = 5º valor = 4 dias · moda = 4 dias', pts: 2 },
        { tarefa: 2, item: 'A média é sensível a valores extremos: um único paciente a puxou para 9 (no mês anterior, com o maior tempo de 14 dias, era 5)', pts: 1 },
        { tarefa: 2, item: 'A mediana (4 dias) representa melhor o centro: resistente a extremos, divide os dados em 50% e 50%; uma medida-resumo não precisa coincidir com uma observação', pts: 1 },
        { tarefa: 3, item: 'Amplitude = 50 − 2 = 48 dias: depende só do mínimo e do máximo, sensível a extremos', pts: 1 },
        { tarefa: 3, item: 'Intervalo interquartil (Q3 − Q1): dispersão dos 50% centrais, resistente a extremos', pts: 1 },
        { tarefa: 4, item: 'Distribuição aproximadamente normal: cerca de 68% entre 110 e 130 mmHg (±1 DP) e 95% entre 100 e 140 mmHg (±2 DP)', pts: 1 },
      ],
    },
    errosCriticos: ['Divulgar a média de 9 dias como o paciente típico', 'Usar a amplitude como se fosse resistente a extremos'],
    falaModelo: [
      { tarefa: 1, texto: 'O tempo de permanência é uma variável quantitativa contínua. A média é a soma, 81, dividida por 9: 9 dias. A mediana é o valor do meio dos dados ordenados, o quinto: 4 dias. A moda, o valor mais frequente, também é 4 dias.', tempo: '30 s' },
      { tarefa: 2, texto: 'A média é sensível a valores extremos: no mês anterior, com o maior tempo de 14 dias, ela era 5; um único paciente de 50 dias, com complicação grave, a puxou para 9. A mediana quase não muda e representa melhor o paciente típico, porque divide os dados ao meio. E nenhuma medida-resumo precisa coincidir com um paciente real.', tempo: '35 s' },
      { tarefa: 3, texto: 'A amplitude é 50 menos 2, 48 dias: depende só do mínimo e do máximo, por isso é sensível ao extremo. Mais resistente é o intervalo interquartil, Q3 menos Q1, que mostra a dispersão dos 50% centrais e ignora os 25% menores e os 25% maiores.', tempo: '30 s' },
      { tarefa: 4, texto: 'Diretor, a média é como a altura média de um time de basquete em que joga um gigante: um só jogador muda a média, mas não o time. O paciente típico fica 4 dias. E, se a pressão sistólica tem média de 120 e desvio-padrão de 10, numa distribuição aproximadamente normal cerca de 68% dos pacientes estão entre 110 e 130, e 95% entre 100 e 140. Faz sentido divulgarmos a mediana?', tempo: '45 s', analogia: 'Time de basquete com um gigante' },
    ],
    extra: 'Como se calcula a variância amostral, e por que usar o desvio-padrão? (s² = soma dos desvios ao quadrado ÷ (n − 1), em unidade ao quadrado; o desvio-padrão é a raiz e volta à unidade original. Ex.: 2, 4 e 6 kg: s² = 8 ÷ 2 = 4 kg²; s = 2 kg.)',
  },

  // ----------------------------------------------------- EPI-24 · Números absolutos × relativos e transição demográfica
  {
    id: 'EPI-24', materia: 'epi',
    titulo: 'Morre mais gente, então a saúde piorou?',
    local: 'Conselho Municipal de Saúde', papel: 'Médico(a) da vigilância', interacao: 'paciente',
    cenario: 'Uma conselheira de saúde está preocupada: "Morre muito mais gente hoje do que em 2010. A saúde do município piorou!". Ela trouxe os dados do município. Converse com ela, analise a situação e oriente. Peça os dados de que precisar.',
    mesa: [],
    tarefas: [
      'O número de óbitos basta para dizer que a saúde piorou? Calcule o coeficiente de mortalidade geral de 2010 e de 2025.',
      'Que fenômeno demográfico os dados mostram? Que forma a pirâmide etária está assumindo?',
      'Relacione com a transição epidemiológica. Que cuidado ter ao comparar o coeficiente geral de populações com idades diferentes?',
      'Como deve mudar a demanda para o SUS? Explique à conselheira.',
    ],
    anamnese: [
      { tema: 'Óbitos', resposta: '"Em 2010 foram 1.200 óbitos. Em 2025, 1.650."' },
      { tema: 'População', resposta: '"Em 2010 éramos 120 mil habitantes. Hoje somos 150 mil."' },
      { tema: 'Nascimentos', resposta: '"Nasciam uns 2.400 bebês por ano. Em 2025 foram 1.800."' },
      { tema: 'Principais causas de morte', resposta: '"Hoje é coração, AVC e câncer. Antigamente era muita diarreia e infecção."' },
    ],
    placas: [
      { pedido: 'a população por faixa etária', placa: 'Menores de 5 anos: 12.000 (2010) → 9.000 (2025) · 20 a 59 anos: 72.000 → 87.000 · 60 anos ou mais: 12.000 → 30.000.' },
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Foram 450 mortes a mais! Precisa de explicação?"' },
      { gatilho: 'Se pedir a população', fala: '"E o que a população tem a ver com as mortes?"' },
      { gatilho: 'No final', fala: '"Então onde o município precisa investir agora?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Número absoluto não basta: perguntou a população para relacionar os óbitos ao tamanho da população', pts: 1 },
        { tarefa: 1, item: 'CMG 2010 = 1.200 ÷ 120.000 × 1.000 = 10 por 1.000 · 2025 = 1.650 ÷ 150.000 × 1.000 = 11 por 1.000', pts: 2 },
        { tarefa: 2, item: 'Pediu a faixa etária: envelhecimento populacional (idosos de 10% para 20%, +150%); menores de 5 anos −25%; menos nascimentos', pts: 1 },
        { tarefa: 2, item: 'Transição demográfica: queda da natalidade e da fecundidade; pirâmide estreitando na base, rumo à regressiva', pts: 1 },
        { tarefa: 3, item: 'Transição epidemiológica: das doenças infecciosas para as crônicas não transmissíveis e as causas externas', pts: 1 },
        { tarefa: 3, item: 'O CMG bruto depende da estrutura etária: com mais idosos, sobe; para comparar, usar coeficientes por faixa etária', pts: 1 },
        { tarefa: 4, item: 'Mais demanda por doenças crônicas, acompanhamento de idosos, prevenção de quedas, reabilitação, cuidados de longa duração e paliativos; reorganizar a APS', pts: 1 },
      ],
    },
    errosCriticos: ['Concluir que a saúde piorou pelo número absoluto de óbitos', 'Ignorar o envelhecimento da população ao interpretar o coeficiente geral'],
    falaModelo: [
      { tarefa: 1, texto: 'O número de óbitos sozinho não basta: preciso saber de quantas pessoas eles vieram. Em 2010, 1.200 óbitos em 120 mil habitantes: 10 por 1.000. Em 2025, 1.650 em 150 mil: 11 por 1.000. O risco de morrer subiu um pouco, mas bem menos do que os números absolutos sugerem.', tempo: '35 s' },
      { tarefa: 2, texto: 'Os dados mostram envelhecimento: os idosos passaram de 12 para 30 mil, de 10% para 20% da população, enquanto as crianças menores de 5 anos caíram 25% e os nascimentos caíram de 2.400 para 1.800. É a transição demográfica: queda da natalidade e da fecundidade, com a pirâmide estreitando na base e se aproximando da regressiva.', tempo: '35 s' },
      { tarefa: 3, texto: 'Junto vem a transição epidemiológica: saem as infecções e a diarreia, entram coração, AVC e câncer. E, como idosos morrem mais, uma população mais velha tem coeficiente geral mais alto mesmo com boa saúde: para comparar 2010 e 2025 de forma justa, uso coeficientes por faixa etária.', tempo: '35 s' },
      { tarefa: 4, texto: 'Conselheira, a cidade é como uma família em que os filhos cresceram e os avós vivem mais: a casa precisa de menos berço e de mais corrimão. O SUS vai precisar de mais cuidado com hipertensão, diabetes e câncer, acompanhamento de idosos, prevenção de quedas, reabilitação, cuidados de longa duração e paliativos, com a atenção primária organizada para isso. O que a senhora acha?', tempo: '45 s', analogia: 'Menos berço, mais corrimão' },
    ],
    extra: 'Como se calculam o crescimento vegetativo e o saldo migratório? (Vegetativo = nascimentos − óbitos; saldo migratório = imigração − emigração; crescimento populacional = vegetativo + migratório.) O que é o índice de Swaroop-Uemura? (Óbitos com 50 anos ou mais ÷ total de óbitos × 100.)',
  },

);
