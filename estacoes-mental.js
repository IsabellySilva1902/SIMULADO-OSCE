// Estações de Saúde Mental (MEN-02 a MEN-10). MEN-01 está em estacoes.js.
ESTACOES.push(
  // ----------------------------------------------------- MEN-02 · Esquizofrenia, primeiro episódio
  {
    id: 'MEN-02', materia: 'mental',
    titulo: '"Os vizinhos colocaram câmeras no meu quarto"',
    local: 'Ambulatório de saúde mental — primeira consulta', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Lucas, 20 anos, é trazido pela mãe. Há cerca de 8 meses passou a se isolar no quarto, largou a faculdade e deixou de tomar banho. Há 2 meses diz ouvir vozes que comentam o que ele faz ("lá vai ele, o fracassado") e tem certeza de que os vizinhos instalaram câmeras para vigiá-lo. Usa maconha quase todo dia desde os 15 anos. Sem doenças clínicas.\n\nExame: vígil, orientado no tempo e no espaço, desconfiado, afeto embotado. Exame neurológico sem alterações. Nega ideação suicida no momento.',
    mesa: [
      { tipo: 'tabela', titulo: 'Linha do tempo', linhas: [['Há 8 meses', 'isolamento, queda no desempenho, descuido pessoal'], ['Há 2 meses', 'vozes comentando, delírio persecutório'], ['Uso de maconha', 'diário, desde os 15 anos']] },
    ],
    tarefas: [
      'Qual é a hipótese diagnóstica? Justifique pelos critérios e pelo tempo de evolução.',
      'O que você precisa excluir antes de fechar o diagnóstico, e como?',
      'Qual é o plano terapêutico?',
      'A mãe pergunta se ele tem "dupla personalidade". Explique o diagnóstico a ela.',
    ],
    ator: [
      { gatilho: 'Mãe, ao se apresentar', fala: '"Ele virou outra pessoa. É dupla personalidade, doutor(a)?"' },
      { gatilho: 'Lucas, se perguntado sobre as vozes', fala: '"Não são vozes da minha cabeça. Eles falam de verdade, pelas câmeras."' },
      { gatilho: 'Se falar em parar a maconha', fala: '(Lucas) "Maconha é natural, é o que me acalma."' },
      { gatilho: 'Mãe, no final', fala: '"Ele vai ter que tomar remédio a vida toda?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Esquizofrenia (primeiro episódio), subtipo descritivo paranoide', pts: 2 },
        { tarefa: 1, item: 'Critério A: ≥ 2 sintomas (alucinações + delírio + negativos), ao menos um entre delírio, alucinação ou discurso desorganizado', pts: 1 },
        { tarefa: 1, item: 'Duração > 6 meses (pródromo + fase ativa) com prejuízo funcional; diferenciou de psicótico breve (< 1 mês) e esquizofreniforme (1–6 meses)', pts: 1 },
        { tarefa: 2, item: 'Excluir ativamente causa orgânica e uso de substâncias antes de firmar diagnóstico psiquiátrico primário', pts: 1 },
        { tarefa: 2, item: 'Sinais de alerta de organicidade: idade atípica, flutuação da consciência, sinais focais, deterioração cognitiva rápida', pts: 1 },
        { tarefa: 3, item: 'Antipsicótico (antagonismo D2 na via mesolímbica; sintomas positivos respondem melhor); manter no mínimo 1 ano após a remissão do primeiro episódio', pts: 1 },
        { tarefa: 3, item: 'Cessar a maconha (piora sintomas e prognóstico, risco 4 vezes maior); abordagem psicossocial e intervenção familiar; reavaliar risco de suicídio', pts: 1 },
        { tarefa: 4, item: 'Desfez o mito da "dupla personalidade" e explicou adesão como principal fator contra recaída', pts: 1 },
      ],
    },
    errosCriticos: ['Fechar o diagnóstico sem excluir causa orgânica ou induzida por substância', 'Confirmar à mãe que é "dupla personalidade"'],
    falaModelo: [
      { tarefa: 1, texto: 'A hipótese é esquizofrenia, primeiro episódio, de predomínio paranoide. Ele tem alucinações auditivas, delírio persecutório e sintomas negativos, como isolamento, embotamento e descuido. Somando o pródromo de 8 meses com 2 meses de fase ativa, passa de 6 meses, com prejuízo funcional. Se fosse menos de 1 mês, seria psicótico breve; de 1 a 6 meses, esquizofreniforme.', tempo: '40 s' },
      { tarefa: 2, texto: 'Antes, excluo ativamente causa orgânica e o papel da maconha. Idade atípica de início, flutuação do nível de consciência, piora cognitiva rápida ou sinais neurológicos focais apontariam para uma causa orgânica; aqui ele está vígil, orientado e com exame neurológico normal.', tempo: '30 s' },
      { tarefa: 3, texto: 'Inicio antipsicótico, que bloqueia receptores D2 e controla melhor os sintomas positivos, e mantenho pelo menos 1 ano após a remissão. Oriento parar a maconha, que aumenta o risco e piora o quadro. Associo abordagens psicossociais, como a intervenção familiar, e reavalio sempre o risco de suicídio, que é maior logo após o diagnóstico.', tempo: '30 s' },
      { tarefa: 4, texto: 'Dona Márcia, não é dupla personalidade: o Lucas continua sendo o Lucas. Na esquizofrenia, o cérebro funciona como um alarme de fumaça sensível demais: ele dispara com coisas sem importância, e aí barulhos comuns viram vozes e vizinhos viram ameaça. O remédio regula a sensibilidade desse alarme. O que mais faz a doença voltar é parar o remédio por conta própria, por isso vamos cuidar juntos. O que a senhora entendeu e o que quer perguntar?', tempo: '45 s', analogia: 'Alarme de fumaça sensível demais' },
    ],
    extra: 'Quando indicar clozapina? (Esquizofrenia resistente: falha de ≥ 2 antipsicóticos diferentes, cada um por ≥ 6 semanas em dose adequada e com boa adesão.)',
  },

  // ----------------------------------------------------- MEN-03 · Borderline e risco de suicídio
  {
    id: 'MEN-03', materia: 'mental',
    titulo: 'Cortes no antebraço depois do término',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Camila, 23 anos, chega com cortes superficiais nos antebraços, feitos com lâmina há 2 horas, após o namorado terminar o relacionamento por mensagem. Os cortes já foram suturados pela enfermagem. Ela conta que "sempre foi assim": relacionamentos intensos que começam perfeitos e terminam em brigas, sensação constante de vazio, gastos impulsivos e explosões de raiva. Diz que o humor muda "do nada, várias vezes no mesmo dia". Há cicatrizes antigas nos punhos. Teve uma ingestão de comprimidos aos 19 anos.\n\nConsciente, orientada, chorosa. Sinais vitais normais.',
    mesa: [],
    tarefas: [
      'Avalie o risco de suicídio: o que você pergunta e o que pesa mais neste caso?',
      'Qual é a hipótese diagnóstica, e como diferenciá-la do transtorno bipolar?',
      'Qual é o plano de tratamento e de seguimento?',
      'Responda à fala da paciente sobre você e o plantonista anterior.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Ainda bem que é você. O médico de ontem foi um monstro, você é a única que me entende."' },
      { gatilho: 'Se perguntar sobre ideia de morrer', fala: '"Às vezes eu queria sumir… Hoje eu só queria parar de sentir."' },
      { gatilho: 'Se perguntar sobre plano e meios', fala: '"Tenho uma cartela de remédio de dormir da minha mãe em casa."' },
      { gatilho: 'No final', fala: '"Posso te mandar mensagem quando eu ficar mal?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou de forma direta: ideação, planejamento, acesso a meios e tentativas anteriores', pts: 2 },
        { tarefa: 1, item: 'Comportamento passado é o maior preditor (ingestão aos 19 anos); acesso a meio (remédios da mãe) também pesa; perguntar não induz', pts: 1 },
        { tarefa: 2, item: 'Transtorno da personalidade borderline: ≥ 5 de 9 critérios (abandono, relações instáveis, impulsividade, autolesão, instabilidade afetiva, vazio, raiva…)', pts: 2 },
        { tarefa: 2, item: 'Diferencial com bipolar: no borderline a instabilidade é reativa e dura horas; no bipolar, episódios autônomos de dias a semanas', pts: 1 },
        { tarefa: 3, item: 'Psicoterapia é o pilar (terapia comportamental dialética); medicação apenas para sintomas-alvo ou comorbidades', pts: 1 },
        { tarefa: 3, item: 'Consultas regulares e previsíveis (não só na crise), rotinas claras, limites firmes e não punitivos, equipe alinhada; interconsulta com saúde mental', pts: 1 },
        { tarefa: 4, item: 'Reconheceu o splitting: acolheu sem aceitar a idealização nem desqualificar o colega; limites claros e não punitivos', pts: 1 },
      ],
    },
    errosCriticos: ['Não perguntar diretamente sobre ideação e plano suicida', 'Aceitar o papel de "salvador exclusivo" (contato pessoal, mensagens a qualquer hora)'],
    falaModelo: [
      { tarefa: 1, texto: 'Pergunto diretamente: "Você pensou em se matar? Tem algum plano? Tem acesso a remédios ou armas? Já tentou antes?". Perguntar não induz. O que mais pesa é a tentativa aos 19 anos, porque o comportamento passado é o maior preditor, e ela tem acesso aos remédios da mãe.', tempo: '40 s' },
      { tarefa: 2, texto: 'A hipótese é transtorno da personalidade borderline: medo de abandono, relações instáveis entre idealização e desvalorização, impulsividade, autolesão, instabilidade afetiva, vazio e raiva, desde a adolescência. No bipolar, os episódios duram dias a semanas e independem de gatilho; aqui o humor muda em horas, em reação a conflitos.', tempo: '35 s' },
      { tarefa: 3, texto: 'O pilar é a psicoterapia, especialmente a terapia comportamental dialética. Remédio só para sintomas-alvo ou comorbidades, não para o transtorno em si. Peço interconsulta com saúde mental, com retornos regulares e previsíveis, não só na crise, rotinas claras e a equipe toda alinhada.', tempo: '30 s' },
      { tarefa: 4, texto: 'Camila, fico feliz que você se sinta acolhida aqui, e quero continuar te ajudando. Mas cuidar de você é trabalho de uma equipe inteira, como um time de futebol: não dá para ganhar o jogo com um jogador só. Não vou poder trocar mensagens pessoais, mas vou deixar claro como funciona o atendimento e um retorno já marcado. Combinado? O que você vai fazer se a vontade de se cortar voltar hoje?', tempo: '40 s', analogia: 'Cuidado como um time, não um jogador só' },
    ],
    extra: 'O que é contratransferência e por que ela importa aqui? (Sentimentos do médico pelo paciente — sentir-se "o único que entende" é sinal de splitting em curso.)',
  },

  // ----------------------------------------------------- MEN-04 · Abstinência alcoólica
  {
    id: 'MEN-04', materia: 'mental',
    titulo: 'Tremor e suor 36 horas depois da última dose',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sr. Jair, 52 anos, bebe cerca de 1 litro de cachaça por dia há 20 anos. Parou há 36 horas "porque acabou o dinheiro". Chega com tremor nas mãos, suor, ansiedade e insônia. Está orientado, sem alucinações, entende a situação. A esposa o acompanha.\n\nFC 108 bpm · PA 154 × 94 mmHg · T 37,2 °C. Tremor fino de extremidades. Sem nistagmo, sem ataxia.',
    mesa: [
      { tipo: 'tabela', titulo: 'Avaliação', linhas: [['CIWA-Ar', '13 pontos'], ['Glicemia capilar', '62 mg/dL'], ['CAGE', '4/4 respostas positivas']] },
    ],
    tarefas: [
      'Qual é o diagnóstico e o nível de gravidade? Justifique.',
      'Prescreva o tratamento. Há uma ordem obrigatória entre dois itens: qual e por quê?',
      'Quais sinais de alarme você orienta, e o que diferencia delirium tremens de Wernicke?',
      'Converse com o casal sobre o tratamento da dependência.',
    ],
    ator: [
      { gatilho: 'Esposa, ao se apresentar', fala: '"Ele diz que para quando quiser. É só falta de vergonha, né?"' },
      { gatilho: 'Se falar em remédio para a abstinência', fala: '(Jair) "Esse remédio não vicia também?"' },
      { gatilho: 'No final', fala: '(Jair) "Eu sei que preciso parar… mas não sei se consigo."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Síndrome de abstinência alcoólica nível I (leve/moderada): tremor, sudorese, taquicardia, orientado, juízo crítico preservado', pts: 2 },
        { tarefa: 1, item: 'CIWA-Ar < 20 (≥ 20 exigiria internação); ≥ 2 sinais após cessar uso intenso e prolongado', pts: 1 },
        { tarefa: 2, item: 'Benzodiazepínico: diazepam 20–40 mg/dia (ou clordiazepóxido 100–200 mg/dia)', pts: 1 },
        { tarefa: 2, item: 'Tiamina 300 mg IM/dia, ANTES da glicose (glicose isolada precipita Wernicke)', pts: 2 },
        { tarefa: 3, item: 'Alarme: alucinações, desorientação, convulsão, agitação; delirium tremens 48–96 h após a última dose', pts: 1 },
        { tarefa: 3, item: 'Wernicke: confusão + oftalmoparesia/nistagmo + ataxia (carência de tiamina), diferente da hiperatividade autonômica do delirium tremens', pts: 1 },
        { tarefa: 4, item: 'Dependência como doença crônica (não falta de caráter); estágio de mudança (contemplação), entrevista motivacional e TCC; naltrexona após retirar o benzodiazepínico', pts: 1 },
      ],
    },
    errosCriticos: ['Dar glicose antes da tiamina', 'Tratar abstinência com haloperidol isolado'],
    falaModelo: [
      { tarefa: 1, texto: 'É síndrome de abstinência alcoólica, nível I, leve a moderada: começou 36 horas após parar o uso pesado, com tremor, suor, taquicardia e insônia, mas ele está orientado, sem alucinações e com juízo preservado. O CIWA é 13, abaixo de 20, que indicaria internação.', tempo: '30 s' },
      { tarefa: 2, texto: 'Prescrevo diazepam, 20 a 40 mg por dia, e tiamina 300 mg intramuscular por dia. A ordem obrigatória: a glicemia está 62, mas a tiamina vem antes da glicose. Glicose sem tiamina consome o que resta da vitamina e pode precipitar Wernicke. Depois da tiamina, corrijo a glicose.', tempo: '35 s' },
      { tarefa: 3, texto: 'Oriento voltar se surgirem alucinações, confusão, convulsão ou agitação: o delirium tremens aparece entre 48 e 96 horas. Wernicke é outra coisa: confusão, alteração dos movimentos dos olhos e desequilíbrio, por falta de tiamina.', tempo: '30 s' },
      { tarefa: 4, texto: 'Dona Célia, não é falta de vergonha: a dependência é uma doença crônica, como a pressão alta, e pode ter recaídas. O cérebro do seu Jair aprendeu a funcionar com o álcool como uma muleta; tirar de uma vez faz ele tropeçar, e o diazepam é a muleta provisória, por poucos dias e com retirada programada. Seu Jair, o fato de o senhor querer parar já é um primeiro passo. Vamos seguir acompanhando o senhor, e depois existe remédio que diminui o prazer e a vontade de beber. O que o senhor acha?', tempo: '50 s', analogia: 'Álcool como muleta: trocar por uma muleta provisória' },
    ],
    extra: 'O que é o dissulfiram e quando ele é contraindicado? (Inibe a acetaldeído desidrogenase, causando reação desagradável ao beber; contraindicado em epilepsia, hepatopatia e cardiopatia grave, e exige consentimento assinado.)',
  },

  // ----------------------------------------------------- MEN-05 · Intoxicação por cocaína
  {
    id: 'MEN-05', materia: 'mental',
    titulo: 'Dor no peito depois da festa',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'interno',
    cenario: 'Rafael, 26 anos, chega com dor torácica em aperto há 40 minutos, iniciada após usar cocaína aspirada em uma festa. Está muito agitado, falando rápido, suando muito. Bebeu "umas cervejas".\n\nFC 126 bpm · PA 174 × 104 mmHg · T 37,9 °C · SatO₂ 98%. Pupilas midriáticas. ECG: taquicardia sinusal, sem supra de ST.\n\nO interno que está com você sugere: "Vamos fazer propranolol para baixar a frequência e a pressão".',
    mesa: [],
    tarefas: [
      'Qual é o diagnóstico? Cite os sinais que o sustentam.',
      'Qual é a conduta? Responda à sugestão do interno.',
      'Já estável, Rafael diz: "Eu sei que tenho que parar, mas não consigo". Em que estágio de mudança ele está e como você conduz essa conversa?',
    ],
    ator: [
      { gatilho: 'Interno, ao começar', fala: '"Betabloqueador não é o que se faz na dor torácica com taquicardia?"' },
      { gatilho: 'Se perguntar sobre outras substâncias', fala: '(Rafael) "Só cerveja. Umas cinco ou seis."' },
      { gatilho: 'Rafael, no final', fala: '"Tem algum remédio que tire a vontade?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Intoxicação aguda por cocaína (estimulante) com dor torácica: síndrome adrenérgica', pts: 1 },
        { tarefa: 1, item: 'Sinais: taquicardia, hipertensão, midríase, sudorese, hipertermia, agitação (≥ 2 sinais do critério C)', pts: 1 },
        { tarefa: 2, item: 'ECG e marcadores de lesão miocárdica seriados: risco de infarto mesmo em jovem', pts: 1 },
        { tarefa: 2, item: 'Benzodiazepínico (diazepam, lorazepam, midazolam) como primeira escolha para agitação e sintomas adrenérgicos', pts: 2 },
        { tarefa: 2, item: 'Betabloqueador CONTRAINDICADO: alfa sem oposição piora a vasoconstrição coronariana e a hipertensão', pts: 2 },
        { tarefa: 3, item: 'Contemplação: reconhece o problema, mas está ambivalente', pts: 1 },
        { tarefa: 3, item: 'Entrevista motivacional (conversa colaborativa, trabalhando a ambivalência); TCC e Narcóticos Anônimos; nenhum medicamento comprovadamente eficaz para a dependência', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever betabloqueador', 'Liberar sem ECG e marcadores de lesão miocárdica seriados'],
    falaModelo: [
      { tarefa: 1, texto: 'É intoxicação aguda por cocaína com dor torácica: síndrome adrenérgica, com taquicardia, hipertensão, midríase, sudorese, temperatura elevada e agitação.', tempo: '20 s' },
      { tarefa: 2, texto: 'Monitorizo, faço ECG e marcadores de lesão miocárdica seriados, porque a cocaína pode causar infarto mesmo em jovem. Para a agitação e os sintomas adrenérgicos, o benzodiazepínico é a primeira escolha. Sobre o propranolol: não. Na cocaína, bloquear o beta deixa o alfa sem oposição, o que fecha ainda mais as coronárias e sobe a pressão. Também investigo o álcool e outras substâncias.', tempo: '45 s' },
      { tarefa: 3, texto: 'Ele está em contemplação: reconhece o problema, mas está dividido. Uso a entrevista motivacional, uma conversa colaborativa, centrada nele: "O que a cocaína te dá? E o que ela te tira?". Rafael, parece que uma parte de você quer parar e outra ainda não, como estar parado num cruzamento com um pé no freio e outro no acelerador. Isso é normal. Não existe remédio que tire a vontade, mas a terapia e grupos como os Narcóticos Anônimos ajudam muito, e recaída não é fracasso, é parte do caminho. Qual seria um primeiro passo possível para você?', tempo: '55 s', analogia: 'Um pé no freio, outro no acelerador' },
    ],
    extra: 'Qual é a tríade da overdose de opioide e o antídoto? (Coma, miose e depressão respiratória; naloxona IV lenta, cerca de 0,8 mg/70 kg, repetindo se necessário pela meia-vida curta.)',
  },

  // ----------------------------------------------------- MEN-06 · Tabagismo
  {
    id: 'MEN-06', materia: 'mental',
    titulo: 'Quero parar de fumar de vez',
    local: 'UBS — grupo de tabagismo', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Sr. Gilberto, 47 anos, motorista, fuma 25 cigarros por dia há 30 anos e quer parar. Já tentou "na raça" três vezes e recaiu em poucos dias por irritação e ansiedade. Teve um traumatismo craniano com crise convulsiva aos 20 anos, sem crises desde então. Nega infarto. Ele já respondeu ao teste de Fagerström.',
    mesa: [
      { tipo: 'tabela', titulo: 'Respostas do teste de Fagerström', linhas: [['Primeiro cigarro após acordar', 'em até 5 minutos'], ['Difícil não fumar em locais proibidos?', 'não'], ['Cigarro mais satisfatório', 'o primeiro da manhã'], ['Cigarros por dia', '25'], ['Fuma mais pela manhã?', 'sim'], ['Fuma mesmo doente, acamado?', 'sim']] },
      { tipo: 'tabela', titulo: 'Pontuação', linhas: [['≤ 5 min / 6–30 / 31–60 / > 60 min', '3 / 2 / 1 / 0'], ['Cigarros: ≤ 10 / 11–20 / 21–30 / ≥ 31', '0 / 1 / 2 / 3'], ['Demais perguntas: sim / não', '1 / 0']] },
    ],
    tarefas: [
      'Calcule o Fagerström e interprete o grau de dependência.',
      'Ele tem indicação de remédio? Qual você escolhe e qual está contraindicado para ele?',
      'Prescreva o esquema e oriente o paciente, incluindo a abstinência.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), dessa vez eu quero mesmo. Mas vou ficar uma fera, todo mundo lá em casa já sabe."' },
      { gatilho: 'Se falar em adesivo', fala: '"Posso fumar com o adesivo, só uns dois por dia?"' },
      { gatilho: 'Se perguntar sobre comorbidades', fala: '"Eu fiquei internado depois de um acidente de moto, tive uma convulsão. Faz tempo."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Fagerström = 3 + 0 + 1 + 2 + 1 + 1 = 8', pts: 2 },
        { tarefa: 1, item: 'Dependência muito elevada (8–10)', pts: 1 },
        { tarefa: 2, item: 'Escore ≥ 5: indicação de farmacoterapia, associada à abordagem comportamental', pts: 1 },
        { tarefa: 2, item: 'Bupropiona contraindicada (convulsão e TCE prévios)', pts: 2 },
        { tarefa: 2, item: 'Terapia de reposição de nicotina (adesivo; outras formas: goma, pastilha), associada à terapia comportamental', pts: 1 },
        { tarefa: 3, item: 'Adesivo 21 mg/dia nas semanas 1–4, 14 mg nas 5–8, 7 mg nas 9–12; parar de fumar ao iniciar o adesivo', pts: 1 },
        { tarefa: 3, item: 'Explicou a abstinência (irritabilidade, ansiedade, apetite, insônia, concentração) e estratégias; recaída não é fracasso', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever bupropiona a paciente com convulsão/TCE prévios', 'Liberar fumar junto com o adesivo'],
    falaModelo: [
      { tarefa: 1, texto: 'Primeiro cigarro em até 5 minutos, 3 pontos; locais proibidos, 0; o primeiro da manhã é o melhor, 1; 25 cigarros, 2; fuma mais de manhã, 1; fuma doente, 1. Total 8: dependência muito elevada.', tempo: '25 s' },
      { tarefa: 2, texto: 'Com 5 ou mais, está indicada farmacoterapia, junto com a abordagem comportamental. A bupropiona está contraindicada para ele, porque teve TCE com convulsão. Escolho a reposição de nicotina, como o adesivo, junto com a terapia comportamental, porque a associação aumenta o sucesso.', tempo: '30 s' },
      { tarefa: 3, texto: 'Seu Gilberto, no dia em que colar o primeiro adesivo, o senhor para de fumar. São 21 mg por dia nas primeiras 4 semanas, 14 mg nas 4 seguintes e 7 mg nas últimas 4. O adesivo é como uma rampa: em vez de descer a escada pulando, o senhor desce devagar, e o corpo vai se acostumando com menos nicotina. Nas primeiras semanas pode vir irritação, ansiedade, fome e insônia: isso passa. Se escorregar, não é o fim, a gente recomeça. Me conta: qual é o cigarro mais difícil de largar no seu dia?', tempo: '60 s', analogia: 'Adesivo como rampa em vez de escada' },
    ],
    extra: 'Qual é a contraindicação comum ao adesivo e à goma de nicotina? (Infarto há menos de 15 dias e gestação; a goma também em úlcera péptica.)',
  },

  // ----------------------------------------------------- MEN-07 · TDAH
  {
    id: 'MEN-07', materia: 'mental',
    titulo: 'A professora disse que ele não para quieto',
    local: 'Ambulatório de saúde mental da infância', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Davi, 8 anos, vem com a mãe após vários bilhetes da escola. Desde os 5 anos é "elétrico": levanta da carteira, interrompe, não espera a vez. Perde material, esquece tarefas, não termina o dever, se distrai com qualquer barulho. Em casa é igual: a mãe precisa repetir tudo. Repetiu o 2º ano. Dorme das 21h às 7h, ronca pouco. Sem preocupações excessivas ou tristeza.',
    mesa: [
      { tipo: 'tabela', titulo: 'Questionário de sintomas preenchido por mãe e professora', linhas: [['Desatenção', '7 de 9 sintomas'], ['Hiperatividade/impulsividade', '7 de 9 sintomas'], ['Contextos', 'casa e escola'], ['Início', 'antes dos 12 anos (aos 5)']] },
    ],
    tarefas: [
      'Qual é o diagnóstico e a apresentação? Cite os critérios.',
      'Quais diagnósticos diferenciais você considerou?',
      'Qual é o tratamento, e o que monitorar?',
      'A mãe tem medo de "dopar o filho". Responda a ela.',
    ],
    ator: [
      { gatilho: 'Mãe, ao se apresentar', fala: '"Será que é falta de limite? Minha sogra diz que eu mimo demais."' },
      { gatilho: 'Se falar em remédio', fala: '"Ritalina? Não vai deixar ele um zumbi? E não vicia?"' },
      { gatilho: 'No final', fala: '"Ele vai ter isso pra sempre?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'TDAH, apresentação combinada', pts: 2 },
        { tarefa: 1, item: '≥ 6 sintomas em cada domínio (sem somar os domínios), antes dos 12 anos, em ≥ 2 contextos, com prejuízo funcional', pts: 1 },
        { tarefa: 2, item: 'Diferenciais: comportamento esperado para a idade, privação de sono, ansiedade, TEA', pts: 1 },
        { tarefa: 2, item: 'Investigou comorbidades (transtorno opositor desafiante, aprendizagem, tiques)', pts: 1 },
        { tarefa: 3, item: 'Estimulante (metilfenidato ou lisdexanfetamina) como primeira escolha, titulado por peso e resposta', pts: 1 },
        { tarefa: 3, item: 'Monitorar peso e altura (redução de apetite) e avaliar história cardiovascular antes de iniciar; tratamento comportamental associado beneficia quem tem comorbidades', pts: 1 },
        { tarefa: 4, item: 'Explicou que não é falta de limite (herdabilidade 70–80%, neurodesenvolvimento) e desfez mitos sobre o remédio', pts: 1 },
      ],
    },
    errosCriticos: ['Atribuir o quadro a "falta de limite" sem avaliação', 'Somar sintomas dos dois domínios para atingir o limiar'],
    falaModelo: [
      { tarefa: 1, texto: 'É TDAH, apresentação combinada: 7 sintomas de desatenção e 7 de hiperatividade e impulsividade, cada domínio passando de 6 sozinho, com início antes dos 12 anos, em casa e na escola, e com prejuízo, já que repetiu de ano.', tempo: '25 s' },
      { tarefa: 2, texto: 'Descartei comportamento normal da idade, porque é mais intenso que o esperado; privação de sono, porque ele dorme 10 horas; e ansiedade, porque não há preocupação excessiva. Também investigo comorbidades, como transtorno opositor, dificuldades de aprendizagem e tiques.', tempo: '35 s' },
      { tarefa: 3, texto: 'A primeira escolha é estimulante, metilfenidato ou lisdexanfetamina, titulado pelo peso e pela resposta. Avalio a história cardiovascular antes de iniciar e acompanho peso e altura, porque pode reduzir o apetite. O tratamento comportamental pode ser associado, principalmente se houver comorbidades.', tempo: '25 s' },
      { tarefa: 4, texto: 'Mãe, não é falta de limite nem culpa sua: o TDAH é uma diferença no desenvolvimento do cérebro, muito herdada. O remédio funciona como óculos para a atenção: quem usa óculos não fica dopado, só passa a enxergar com nitidez. Na dose certa, ele não vira zumbi; e o TDAH sem tratamento é que aumenta o risco de uso de drogas no futuro. Podemos tirar o apetite um pouco, por isso vamos pesar e medir sempre. Ficou alguma dúvida?', tempo: '50 s', analogia: 'Remédio como óculos para a atenção' },
    ],
    extra: 'O que muda no critério para adultos? (A partir dos 17 anos, bastam 5 sintomas em um domínio; o início antes dos 12 anos deve ser confirmado retrospectivamente, de preferência com relato de terceiros.)',
  },

  // ----------------------------------------------------- MEN-08 · TEA
  {
    id: 'MEN-08', materia: 'mental',
    titulo: 'Ele não atende quando chamamos o nome',
    local: 'UBS — puericultura', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Pedro, 2 anos e 2 meses, vem com os pais para consulta de rotina. A mãe acha que ele "vive no mundinho dele": não atende pelo nome, não aponta para mostrar coisas, fala só 3 palavras, quase não olha nos olhos e passa horas enfileirando carrinhos; se alguém desarruma a fila, chora muito. Balança o corpo quando fica agitado. Às vezes tapa os ouvidos com barulhos comuns. Nasceu a termo, sem intercorrências. Tem uma irmã de 6 meses.',
    mesa: [
      { tipo: 'tabela', titulo: 'Triagem', linhas: [['M-CHAT', 'positivo']] },
    ],
    tarefas: [
      'Quais sinais de alerta ele tem e qual é a hipótese? Relacione com os critérios.',
      'Qual é a investigação?',
      'Qual é a conduta, e o que fazer com a irmã?',
      'Converse com os pais, que perguntam se a culpa foi deles.',
    ],
    ator: [
      { gatilho: 'Pai, ao se apresentar', fala: '"Eu também falei tarde. Não é só esperar?"' },
      { gatilho: 'Mãe, ao ouvir a hipótese', fala: '"Foi porque eu trabalho fora e deixo ele com a TV?"' },
      { gatilho: 'No final', fala: '"Ele vai falar algum dia?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Sinais: não responde ao nome, não aponta, pouca fala, contato visual reduzido, enfileira objetos, estereotipias, hipersensibilidade sensorial', pts: 1 },
        { tarefa: 1, item: 'Hipótese de TEA: déficit de comunicação social (A1–A3) + ≥ 2 de 4 itens de comportamento restrito/repetitivo (critério B)', pts: 2 },
        { tarefa: 2, item: 'M-CHAT é triagem, não diagnóstico: encaminhar para avaliação especializada multidisciplinar (ADOS-2, ADI-R)', pts: 1 },
        { tarefa: 2, item: 'Triagem auditiva (diferencial com déficit auditivo) e investigação genética (X frágil + CGH array)', pts: 1 },
        { tarefa: 3, item: 'Intervenção assim que diagnosticado: individualizada, multidisciplinar, com família e escola, pais como mediadores (diagnóstico e intervenção aos 2–3 anos = melhor prognóstico)', pts: 1 },
        { tarefa: 3, item: 'Acompanhar de perto o desenvolvimento da irmã (risco de recorrência aumentado)', pts: 1 },
        { tarefa: 4, item: 'Desfez a culpa: origem no neurodesenvolvimento, com forte peso genético (herdabilidade ~74%), não é a criação', pts: 1 },
      ],
    },
    errosCriticos: ['Orientar "esperar para ver" se ele vai falar', 'Fechar o diagnóstico só com o M-CHAT'],
    falaModelo: [
      { tarefa: 1, texto: 'Ele tem vários sinais de alerta: não responde ao nome, não aponta, fala 3 palavras aos 2 anos, pouco contato visual, enfileira carrinhos, balança o corpo e tem hipersensibilidade a sons. A hipótese é transtorno do espectro autista: prejuízo na comunicação social e comportamentos restritos e repetitivos, mais de dois itens.', tempo: '35 s' },
      { tarefa: 2, texto: 'O M-CHAT é só triagem. Encaminho para avaliação multidisciplinar especializada, com instrumentos como ADOS-2 e ADI-R, peço triagem auditiva, para afastar déficit auditivo, e ofereço investigação genética: X frágil e CGH array.', tempo: '30 s' },
      { tarefa: 3, texto: 'Assim que o diagnóstico for feito, a intervenção começa: individualizada, multidisciplinar, com os pais como mediadores e a escola junto. Diagnóstico e intervenção entre 2 e 3 anos são o que mais melhora o prognóstico. E a irmã tem risco maior, então acompanho o desenvolvimento dela de perto.', tempo: '30 s' },
      { tarefa: 4, texto: 'Pai e mãe, não foi a TV nem o trabalho de vocês. O autismo vem da forma como o cérebro se desenvolveu, com forte peso genético. O cérebro do Pedro é como um rádio que pega as estações de um jeito diferente: ele precisa que a gente ajuste a forma de se comunicar com ele. Quanto mais cedo começa a intervenção, melhor ele se desenvolve. O que vocês entenderam e o que mais preocupa vocês?', tempo: '45 s', analogia: 'Rádio que sintoniza as estações de outro jeito' },
    ],
    extra: 'Como diferenciar TEA de déficit auditivo isolado? (A criança surda compensa com gestos, mímica e atenção ao rosto; no TEA, falta a reciprocidade social mesmo com boa audição.)',
  },

  // ----------------------------------------------------- MEN-09 · Anorexia nervosa
  {
    id: 'MEN-09', materia: 'mental',
    titulo: '"Eu só estou me cuidando"',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Yasmin, 19 anos, desmaiou na academia. Perdeu 14 kg em 6 meses. Come "uma maçã e um iogurte por dia", corre 10 km diariamente e diz que ainda precisa "secar a barriga". Nega vômitos e laxantes. Sem menstruar há 5 meses. Sente fome, mas "aguenta". A mãe está junto, assustada.\n\nAltura 1,65 m · peso 39 kg.\nFC 38 bpm · PA deitada 90 × 58 mmHg; em pé 68 × 44 mmHg · T 35,3 °C.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Potássio', '3,4 mEq/L'], ['Fósforo', '2,8 mg/dL'], ['Glicemia', '64 mg/dL'], ['ECG', 'bradicardia sinusal, QTc 480 ms']] },
    ],
    tarefas: [
      'Calcule o IMC, dê o diagnóstico, o subtipo e a gravidade.',
      'Ela precisa de internação? Justifique com critérios.',
      'Como iniciar a renutrição, e qual complicação você quer evitar?',
      'Converse com a paciente, que não acha que está doente.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Eu tô ótima. Foi só um mal-estar, posso ir pra casa?"' },
      { gatilho: 'Se falar em ganhar peso', fala: '"Se eu engordar eu não vou aguentar me olhar no espelho."' },
      { gatilho: 'Mãe, no final', fala: '"Ela sempre foi tão perfeccionista… onde eu errei?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'IMC = 39 ÷ 1,65² ≈ 14,3 kg/m²', pts: 1 },
        { tarefa: 1, item: 'Anorexia nervosa, subtipo restritivo (sem compulsão ou purgação), gravidade extrema (IMC < 15)', pts: 2 },
        { tarefa: 1, item: 'Critérios: restrição com baixo peso, medo intenso de engordar, perturbação da imagem corporal', pts: 1 },
        { tarefa: 2, item: 'Internação: FC < 40, hipotensão ortostática (queda de PA > 20 mmHg), hipotermia e perda de peso rápida', pts: 2 },
        { tarefa: 3, item: 'Iniciar com ~1.000 kcal/dia, aumentos de 500–750 kcal por semana até ~3.000 kcal/dia', pts: 1 },
        { tarefa: 3, item: 'Evitar síndrome de realimentação (hipofosfatemia grave, com risco cardiológico): monitorar eletrólitos', pts: 1 },
        { tarefa: 4, item: 'Abordagem empática, sem confronto, reconhecendo a egossintonia; envolveu a família sem culpabilizar', pts: 1 },
      ],
    },
    errosCriticos: ['Liberar a paciente para casa', 'Iniciar dieta hipercalórica plena sem monitorar fósforo'],
    falaModelo: [
      { tarefa: 1, texto: 'O IMC é 39 dividido por 1,65 ao quadrado, cerca de 14,3. É anorexia nervosa, subtipo restritivo, porque não há compulsão nem purgação, e de gravidade extrema, IMC abaixo de 15. Ela restringe a alimentação, tem medo de engordar e se vê com barriga mesmo emagrecida.', tempo: '30 s' },
      { tarefa: 2, texto: 'Sim, precisa internar: frequência cardíaca de 38, abaixo de 40; queda de 22 na pressão ao levantar; temperatura de 35,3; e perda de peso rápida, 14 kg em 6 meses. O QT prolongado também exige avaliação cardiológica.', tempo: '20 s' },
      { tarefa: 3, texto: 'Começo devagar, cerca de 1.000 calorias por dia, e aumento 500 a 750 por semana até chegar a cerca de 3.000. O risco é a síndrome de realimentação: o fósforo cai, com risco para o coração. Monitoro os eletrólitos de perto.', tempo: '30 s' },
      { tarefa: 4, texto: 'Yasmin, eu sei que para você controlar a comida parece uma conquista, e não quero brigar com você. Mas o seu coração está batendo 38 vezes por minuto: ele está como um carro andando com a luz da reserva acesa, gastando a própria lataria para continuar rodando. Por isso precisamos que você fique internada uns dias, com uma equipe que vai cuidar também da forma como você se vê. Mãe, ninguém errou aqui: é uma doença, e a família é parte do tratamento. O que te dá mais medo nisso tudo, Yasmin?', tempo: '55 s', analogia: 'Carro na reserva gastando a própria lataria' },
    ],
    extra: 'Na bulimia com vômitos, qual é o distúrbio ácido-básico e qual o único ISRS aprovado? (Hipocalemia com alcalose metabólica; fluoxetina 60 mg/dia. Bupropiona é contraindicada.)',
  },

  // ----------------------------------------------------- MEN-10 · Insônia
  {
    id: 'MEN-10', materia: 'mental',
    titulo: 'Não durmo há meses e quero um remédio forte',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Sra. Rosa, 52 anos, professora. Há 7 meses demora mais de 1 hora para pegar no sono, 4 a 5 noites por semana, desde que o filho saiu de casa. Fica na cama das 21h às 7h "tentando dormir", mexe no celular quando perde o sono, toma café às 17h e cochila 1 hora depois do almoço. Está cansada e irritada no trabalho. Tomou zolpidem da vizinha algumas vezes. Não ronca, o marido nunca viu pausas na respiração. Sem tristeza persistente ou anedonia.',
    mesa: [
      { tipo: 'tabela', titulo: 'Registro de 2 semanas (média)', linhas: [['Tempo na cama', '10 h'], ['Tempo dormindo', '5 h 30 min'], ['Latência para dormir', '70 min'], ['Escala de Epworth', '7']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Cite os critérios. Ela precisa de polissonografia?',
      'Qual é o tratamento de primeira escolha? Descreva as orientações concretas.',
      'Qual é o papel dos hipnóticos? Responda ao pedido de "remédio forte".',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), eu só quero um remédio forte que me derrube."' },
      { gatilho: 'Se falar em ficar menos tempo na cama', fala: '"Menos tempo na cama? Mas aí é que eu não durmo mesmo!"' },
      { gatilho: 'No final', fala: '"E o zolpidem da vizinha, posso continuar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Transtorno de insônia: dificuldade de iniciar o sono ≥ 3 noites/semana por ≥ 3 meses, com prejuízo, e oportunidade adequada para dormir', pts: 2 },
        { tarefa: 1, item: 'Diagnóstico clínico: polissonografia não indicada (sem ronco, pausas ou sonolência excessiva; Epworth < 10)', pts: 1 },
        { tarefa: 2, item: 'TCC-i é a primeira escolha', pts: 1 },
        { tarefa: 2, item: 'TCC-i: restrição de sono, controle de estímulos, relaxamento, reestruturação cognitiva e psicoeducação', pts: 1 },
        { tarefa: 2, item: 'Modelo 3P: precipitante (saída do filho) e perpetuador (permanência excessiva no leito: 10 h na cama para 5 h 30 de sono)', pts: 1 },
        { tarefa: 2, item: 'A TCC-i atua no perpetuador: reduzir a permanência no leito e reassociar a cama ao sono', pts: 1 },
        { tarefa: 3, item: 'Hipnótico por no máximo 2–4 semanas de uso contínuo; zolpidem age no receptor GABA-A como os benzodiazepínicos (tolerância e abstinência)', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever benzodiazepínico ou hipnótico de uso contínuo como tratamento principal', 'Pedir polissonografia de rotina para insônia'],
    falaModelo: [
      { tarefa: 1, texto: 'É transtorno de insônia: dificuldade para iniciar o sono, 4 a 5 noites por semana, há 7 meses, com cansaço e irritação, apesar de ter tempo de sobra para dormir. O diagnóstico é clínico; não peço polissonografia porque não há ronco, pausas respiratórias nem sonolência excessiva, com Epworth de 7.', tempo: '30 s' },
      { tarefa: 2, texto: 'A primeira escolha é a terapia cognitivo-comportamental para insônia: restrição de sono, controle de estímulos, relaxamento, reestruturação cognitiva e psicoeducação. Pelo modelo 3P, a saída do filho foi o fator precipitante, e o que mantém a insônia é a permanência excessiva no leito: 10 horas na cama para dormir 5 e meia. A terapia trabalha justamente isso, reduzindo o tempo na cama e fazendo a cama voltar a ser lugar de dormir.', tempo: '45 s' },
      { tarefa: 3, texto: 'Dona Rosa, o remédio forte apaga, mas não ensina o cérebro a dormir: é como empurrar um carro com a bateria fraca, ele anda enquanto alguém empurra. Remédio para dormir, se precisar, é por no máximo 2 a 4 semanas, como apoio, e nunca o da vizinha: o zolpidem age no mesmo receptor dos calmantes e causa tolerância e abstinência. A senhora topa tentar o plano e voltar em duas semanas para conversarmos?', tempo: '40 s', analogia: 'Empurrar um carro com a bateria fraca' },
    ],
    extra: 'Quando a polissonografia está indicada? (Suspeita de apneia do sono ou movimento periódico de membros, diagnóstico incerto, comportamentos violentos noturnos.) Como se classifica a apneia pelo IAH? (Leve 5–15, moderada 16–30, grave > 30.)',
  },
);
