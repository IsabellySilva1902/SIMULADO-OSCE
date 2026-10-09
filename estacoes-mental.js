// Estações de Saúde Mental (MEN-02 a MEN-20). MEN-01 está em estacoes.js.
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

  // ----------------------------------------------------- MEN-11 · Exame do estado mental e risco de suicídio
  {
    id: 'MEN-11', materia: 'mental',
    titulo: '"Não vejo mais sentido em nada"',
    local: 'Ambulatório de saúde mental', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Sr. Roberto, 45 anos, foi demitido há 3 meses e é trazido pela esposa, que diz que ele "não sai mais da cama". Durante a entrevista: está com a barba por fazer e a roupa amassada; mantém pouco contato visual; fala baixo, devagar, com respostas curtas; diz que se sente "vazio, um peso para a família"; tem a expressão facial pouco móvel. O discurso é organizado. Nega ouvir vozes. Está orientado no tempo e no espaço e lembra as três palavras pedidas. Diz: "Não sei se isso é doença, acho que é fraqueza minha". O pai dele se matou quando Roberto tinha 20 anos.',
    mesa: [],
    tarefas: [
      'Descreva o exame do estado mental dele, domínio por domínio.',
      'Diferencie humor de afeto e forma de conteúdo do pensamento, usando o caso.',
      'Avalie o risco de suicídio: o que perguntar e o que pesa neste caso?',
      'Qual a diferença entre anamnese e exame psíquico? Como criar vínculo com ele?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Não sei nem por que eu vim. Minha mulher que insistiu."' },
      { gatilho: 'Se perguntar sobre ideia de morrer', fala: '"Às vezes penso que todo mundo estaria melhor sem mim…"' },
      { gatilho: 'Se perguntar sobre plano', fala: '"Pensei no remédio de pressão da minha mãe, que fica lá em casa."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Aparência (descuido, pouco contato visual), comportamento/psicomotricidade (lentificado), fala (baixa, lenta, respostas curtas)', pts: 1 },
        { tarefa: 1, item: 'Sensopercepção (nega alucinações), cognição (orientado, memória preservada), insight (não reconhece o adoecimento: "fraqueza")', pts: 1 },
        { tarefa: 2, item: 'Humor: subjetivo, nas palavras dele ("vazio") · Afeto: objetivo, expressão observada (pouco móvel), congruente', pts: 1 },
        { tarefa: 2, item: 'Forma: curso e organização (organizado) · Conteúdo: ideias, delírios, ideação suicida ("peso para a família")', pts: 1 },
        { tarefa: 3, item: 'Perguntar diretamente: ideação, planejamento, acesso a meios e tentativas anteriores; perguntar não induz', pts: 1 },
        { tarefa: 3, item: 'Pesam: ideação com plano e acesso a meio (remédio da mãe) e suicídio do pai (antecedentes familiares)', pts: 1 },
        { tarefa: 4, item: 'Anamnese: o que o paciente relata · Exame psíquico: o que o examinador observa durante a entrevista', pts: 1 },
        { tarefa: 4, item: 'Técnicas de vínculo: autenticidade, empatia e conhecimento', pts: 1 },
      ],
    },
    errosCriticos: ['Não perguntar diretamente sobre ideação e plano suicida', 'Confundir humor (relatado) com afeto (observado)'],
    falaModelo: [
      { tarefa: 1, texto: 'Aparência: descuidado, barba por fazer, pouco contato visual. Comportamento: lentificado. Fala: baixa, lenta, com respostas curtas. Humor relatado "vazio", afeto pouco móvel. Pensamento organizado, com conteúdo de ruína, "peso para a família". Sensopercepção sem alucinações. Cognição: orientado e com memória preservada. Insight prejudicado: acha que é fraqueza.', tempo: '45 s' },
      { tarefa: 2, texto: 'Humor é o que ele diz sentir, de preferência com as palavras dele: "vazio". Afeto é o que eu observo: a expressão pouco móvel, congruente com o humor. A forma do pensamento é o curso e a organização, aqui organizada; o conteúdo é o que ele pensa, como a ideia de ser um peso, que já me leva a investigar ideação suicida.', tempo: '35 s' },
      { tarefa: 3, texto: 'Pergunto diretamente: "O senhor pensa em se matar? Já pensou em como? Tem acesso a algum meio? Já tentou antes?". Perguntar não induz. Aqui pesam a ideação com um plano, o acesso ao remédio da mãe e o suicídio do pai.', tempo: '30 s' },
      { tarefa: 4, texto: 'A anamnese é o que ele me conta; o exame psíquico é o que eu observo durante a conversa. Para criar vínculo, uso autenticidade, empatia e conhecimento. Seu Roberto, o que o senhor sente não é fraqueza. É como uma perna quebrada: ninguém culpa a pessoa por não conseguir andar; a gente trata. Obrigado por me contar sobre o remédio; isso é importante para cuidarmos do senhor com segurança. Posso conversar com a sua esposa junto com o senhor?', tempo: '45 s', analogia: 'Não é fraqueza: é como uma perna quebrada' },
    ],
    extra: 'Que perguntas fazer nos hábitos de vida? (Sono, alimentação, atividade física, rotina; sempre tabagismo, álcool, outras substâncias e cafeína.)',
  },

  // ----------------------------------------------------- MEN-12 · Delirium tremens e Wernicke
  {
    id: 'MEN-12', materia: 'mental',
    titulo: 'Os insetos na parede no 3º dia de internação',
    local: 'Enfermaria de ortopedia', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sr. José, 48 anos, etilista crônico, foi internado para uma cirurgia ortopédica eletiva. No 3º dia de internação, cerca de 72 horas após a última dose de álcool, está desorientado no tempo e no espaço, muito agitado, tentou arrancar o acesso venoso e diz ver "insetos andando na parede" e sentir "bichos na pele". Os sintomas pioram ao entardecer. A enfermagem quer fazer soro glicosado porque a glicemia está 58 mg/dL.\n\nFC 128 bpm · PA 168 × 100 mmHg · T 37,9 °C · sudorese intensa · tremor generalizado. Movimentos oculares normais, sem ataxia.',
    mesa: [],
    tarefas: [
      'Qual é o diagnóstico? Justifique pelo tempo e pelo quadro.',
      'Qual é o tratamento e onde ele deve ser feito? O haloperidol sozinho resolveria?',
      'A enfermagem quer fazer glicose. O que você faz antes, e por quê?',
      'Diferencie delirium tremens, encefalopatia de Wernicke e síndrome de Korsakoff.',
    ],
    ator: [
      { gatilho: 'Ao se aproximar', fala: '"Tira esses bichos de mim! Estão subindo pela parede!"' },
      { gatilho: 'Enfermagem, na tarefa 3', fala: '"Doutor(a), já posso correr o soro glicosado?"' },
      { gatilho: 'Esposa, no final', fala: '"Ele vai ficar assim pra sempre?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Delirium tremens: forma grave (nível II) da abstinência alcoólica, 48–96 h após a última dose', pts: 1 },
        { tarefa: 1, item: 'Desorientação, alucinações visuais e táteis, agitação, tremor intenso, taquicardia, hipertensão, febre baixa, sudorese, piora ao entardecer', pts: 1 },
        { tarefa: 2, item: 'Internação hospitalar; benzodiazepínico em doses maiores e horárias (primeira escolha)', pts: 1 },
        { tarefa: 2, item: 'Haloperidol isolado não trata a hiperatividade autonômica; pode ser associado se sintomas psicóticos proeminentes', pts: 1 },
        { tarefa: 3, item: 'Tiamina 300 mg IM antes (ou junto) da glicose: glicose isolada consome a tiamina residual e pode precipitar Wernicke', pts: 2 },
        { tarefa: 4, item: 'Wernicke: confusão + oftalmoparesia/nistagmo + ataxia, aguda, por falta de tiamina · Korsakoff: amnésia anterógrada e confabulação, sequela crônica', pts: 2 },
      ],
    },
    errosCriticos: ['Dar glicose antes da tiamina', 'Tratar com haloperidol isolado'],
    falaModelo: [
      { tarefa: 1, texto: 'É delirium tremens, a forma mais grave da abstinência alcoólica, nível II. Surge de 48 a 96 horas após a última dose, e ele está com 72 horas: desorientado, com alucinações visuais e táteis, agitado, com tremor, taquicardia, hipertensão, febre baixa, sudorese e piora ao entardecer.', tempo: '35 s' },
      { tarefa: 2, texto: 'O tratamento é hospitalar, com benzodiazepínico em doses maiores e horárias, que é a primeira escolha. O haloperidol sozinho não trata a hiperatividade autonômica, que é de base gabaérgica; pode ser associado se houver sintomas psicóticos muito intensos.', tempo: '30 s' },
      { tarefa: 3, texto: 'Antes da glicose, faço tiamina 300 mg intramuscular. Ele é etilista crônico e deve ter pouca tiamina; a glicose sozinha consome o que resta e pode precipitar a encefalopatia de Wernicke. A regra é tiamina antes da glicose, sempre.', tempo: '25 s' },
      { tarefa: 4, texto: 'O delirium tremens é a abstinência grave. A encefalopatia de Wernicke é aguda, por falta de tiamina, com a tríade de confusão, alteração dos movimentos dos olhos e ataxia. A síndrome de Korsakoff é a sequela crônica de um Wernicke não tratado: amnésia anterógrada e confabulação. Senhora, o cérebro dele está como um motor acostumado a funcionar com um freio puxado, o álcool; sem o freio, ele dispara. O remédio faz o papel desse freio enquanto o corpo se ajusta, e com o tratamento a maioria melhora. Ficou alguma dúvida?', tempo: '55 s', analogia: 'Motor que dispara quando tiram o freio' },
    ],
    extra: 'Qual é a mortalidade da SAA grave? (Cerca de 1%.) Em quanto tempo começa a SAA leve/moderada? (24 a 36 horas após a última dose.)',
  },

  // ----------------------------------------------------- MEN-13 · Overdose de opioides
  {
    id: 'MEN-13', materia: 'mental',
    titulo: 'Encontrado inconsciente duas semanas após a alta',
    local: 'Pronto-socorro — sala de emergência', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Marcos, 34 anos, é trazido pela família, que o encontrou inconsciente no quarto. Usa opioides ilícitos há vários anos e teve alta de uma comunidade terapêutica há 2 semanas, depois de meses sem usar.\n\nGlasgow 6 · FR 6 irpm · PA 88 × 50 mmHg · FC 52 bpm · pupilas puntiformes bilaterais · marcas de punção recentes no antebraço.',
    mesa: [],
    tarefas: [
      'Qual é o diagnóstico? Que achados o confirmam?',
      'Qual é a conduta imediata, com a dose? Por que monitorizar mesmo após melhorar?',
      'Por que o risco de overdose era maior agora, após a alta?',
      'Depois de estabilizado, quais são as opções para tratar a dependência? Explique à mãe.',
    ],
    ator: [
      { gatilho: 'Mãe, ao chegar', fala: '"Ele estava tão bem na clínica! Por que agora?"' },
      { gatilho: 'Se falar em antídoto', fala: '"Esse remédio cura ele?"' },
      { gatilho: 'Após a naloxona', fala: '(Marcos, acordando agitado) "Que dor no corpo! Me deixa ir embora!"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Overdose de opioide: tríade coma + miose puntiforme + depressão respiratória; marcas de punção', pts: 2 },
        { tarefa: 2, item: 'Garantir via aérea e ventilação; naloxona IV lenta (~0,8 mg/70 kg), repetindo a cada poucos minutos se necessário', pts: 2 },
        { tarefa: 2, item: 'A naloxona age por menos tempo que muitos opioides: risco de recorrência → monitorizar; pode precipitar abstinência aguda', pts: 1 },
        { tarefa: 3, item: 'Após período de abstinência a tolerância cai: a dose antiga pode ser fatal (alto risco de recaída e overdose)', pts: 1 },
        { tarefa: 4, item: 'Metadona (substituição, longa ação), buprenorfina (agonista parcial), clonidina (sintomas de abstinência), naltrexona (após desintoxicação, prevenir recaída)', pts: 1 },
        { tarefa: 4, item: 'Dependência como doença crônica, sem julgamento moral; recaída não é fracasso', pts: 1 },
      ],
    },
    errosCriticos: ['Usar flumazenil em vez de naloxona', 'Liberar o paciente logo após acordar com a naloxona'],
    falaModelo: [
      { tarefa: 1, texto: 'É overdose de opioide: ele tem a tríade clássica, coma, pupilas puntiformes e depressão respiratória, com frequência de 6, além das marcas de punção.', tempo: '15 s' },
      { tarefa: 2, texto: 'Garanto via aérea e ventilação e faço naloxona na veia, lentamente, cerca de 0,8 mg para 70 kg, repetindo a cada poucos minutos se precisar. Mesmo que ele acorde, mantenho monitorizado, porque a naloxona dura menos que muitos opioides e o quadro pode voltar. Ela também pode precipitar abstinência, como essa dor no corpo.', tempo: '35 s' },
      { tarefa: 3, texto: 'Depois de meses sem usar, a tolerância caiu. Se ele volta a usar a mesma dose de antes, ela pode ser fatal. Por isso o risco de overdose é alto logo depois de períodos de abstinência.', tempo: '20 s' },
      { tarefa: 4, texto: 'Para a dependência, existem a metadona, que substitui o opioide com ação longa, a buprenorfina, um agonista parcial, a clonidina para os sintomas de abstinência e a naltrexona depois da desintoxicação, para prevenir recaída. Senhora, o corpo dele é como um escalador que ficou meses fora da montanha: ele perdeu o condicionamento e tentou subir a mesma trilha de antes. A dependência é uma doença crônica, como a pressão alta, e a recaída faz parte do caminho; não é fracasso dele nem da senhora. O que a senhora gostaria de saber agora?', tempo: '55 s', analogia: 'Escalador que perdeu o condicionamento' },
    ],
    extra: 'Quando começa a abstinência de heroína/morfina e quais os sintomas? (6–8 h, pico em 2–3 dias: disforia, náusea, dores musculares, lacrimejamento, rinorreia, midríase, piloereção, sudorese, diarreia, bocejos, febre, insônia.)',
  },

  // ----------------------------------------------------- MEN-14 · Rastreio e diagnóstico do uso de álcool
  {
    id: 'MEN-14', materia: 'mental',
    titulo: '"Bebo só no fim de semana"',
    local: 'UBS — consulta de rotina', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Sr. Fábio, 41 anos, vendedor, veio por dor de estômago. Ao perguntar sobre hábitos, conta que bebe "só no fim de semana": cerca de 10 latas de cerveja no sábado e 8 no domingo. Nos últimos 12 meses: bebeu mais do que pretendia várias vezes; tentou diminuir duas vezes e não conseguiu; faltou a duas segundas-feiras no trabalho; a esposa reclama das brigas por causa da bebida, mas ele continua; e já dirigiu depois de beber. Nega tremores ou beber pela manhã. Diz: "Sei que exagero, ando pensando em diminuir, mas não agora".',
    mesa: [
      { tipo: 'tabela', titulo: 'Rastreio', linhas: [['AUDIT', '17 pontos'], ['CAGE', '2 respostas positivas']] },
    ],
    tarefas: [
      'Interprete o rastreio e o padrão de consumo.',
      'Quantos critérios do DSM-5-TR ele preenche, e qual é a gravidade? Como o DSM-5 mudou a classificação da CID-10?',
      'Em que estágio de mudança ele está, e como você conduz?',
      'Converse com ele sem julgamento.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Doutor(a), eu não sou alcoólatra. Bebo só no fim de semana."' },
      { gatilho: 'Se falar em parar', fala: '"Parar de vez? Aí não, né…"' },
      { gatilho: 'No final', fala: '"E o que o senhor(a) sugere, então?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'AUDIT ≥ 8: uso excessivo, de alto risco · CAGE ≥ 2: consumo de risco', pts: 1 },
        { tarefa: 1, item: 'Padrão de risco: 5 ou mais doses numa mesma ocasião (homem)', pts: 1 },
        { tarefa: 2, item: '5 critérios: uso maior que o pretendido, tentativas malsucedidas de reduzir, falha em obrigações, uso apesar de problemas sociais, uso em situação de risco (dirigir)', pts: 1 },
        { tarefa: 2, item: '4–5 critérios = gravidade moderada (2–3 leve; ≥ 6 grave); DSM-5 unificou uso nocivo e dependência em "transtorno por uso de substância"', pts: 2 },
        { tarefa: 3, item: 'Contemplação: reconhece o problema, ambivalente, considera mudar', pts: 1 },
        { tarefa: 3, item: 'Entrevista motivacional: conversa colaborativa, centrada no paciente, trabalhando a ambivalência conforme o estágio', pts: 1 },
        { tarefa: 4, item: 'Abordou sem rótulo nem julgamento moral, explorando ganhos e prejuízos do consumo', pts: 1 },
      ],
    },
    errosCriticos: ['Concluir que não há problema porque ele "só bebe no fim de semana"', 'Confrontar ou rotular o paciente'],
    falaModelo: [
      { tarefa: 1, texto: 'O AUDIT de 17, acima de 8, indica uso excessivo, de alto risco, e o CAGE com 2 respostas positivas indica consumo de risco. Ele bebe 10 latas numa ocasião, acima de 5 doses para homem, e cerca de 18 latas por fim de semana.', tempo: '25 s' },
      { tarefa: 2, texto: 'Ele preenche 5 critérios nos últimos 12 meses: bebe mais do que pretendia, não conseguiu diminuir, falhou no trabalho, continua apesar das brigas e dirigiu depois de beber. Com 4 a 5 critérios, a gravidade é moderada. O DSM-5 juntou o uso nocivo e a dependência da CID-10 num só diagnóstico, o transtorno por uso de substância, graduado pela contagem.', tempo: '40 s' },
      { tarefa: 3, texto: 'Ele está em contemplação: reconhece que exagera, está ambivalente e pensa em mudar, mas não agora. Uso a entrevista motivacional, uma conversa colaborativa que trabalha essa ambivalência, sem confrontar.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Fábio, não estou aqui para colocar rótulo no senhor. O que o senhor ganha com a cerveja no fim de semana? E o que ela tem custado, em casa e no trabalho? Parece uma balança: de um lado o prazer, do outro as brigas e as faltas. Quando o senhor se sentir pronto, podemos montar juntos um plano para diminuir. O que acha de conversarmos de novo daqui a duas semanas?', tempo: '40 s', analogia: 'Balança: prazer de um lado, prejuízos do outro' },
    ],
    extra: 'Quais são os estágios de Prochaska e DiClemente? (Pré-contemplação, contemplação, preparação, ação, manutenção e recaída — retorno a um estágio anterior, não fracasso.)',
  },

  // ----------------------------------------------------- MEN-15 · Retirada de benzodiazepínico
  {
    id: 'MEN-15', materia: 'mental',
    titulo: 'Quero parar o calmante de uma vez',
    local: 'UBS', papel: 'Médico(a) de família', interacao: 'paciente',
    cenario: 'Dona Ivone, 70 anos, usa alprazolam 2 mg à noite há 10 anos, "para dormir". Caiu duas vezes no último mês, à noite. Leu na internet que o remédio "vicia" e quer parar hoje mesmo, por conta própria. Tem um copo de vinho no jantar. A filha conta que, quando a mãe esquece o comprimido, "no dia seguinte fica tremendo e nervosa".',
    mesa: [
      { tipo: 'tabela', titulo: 'Meia-vida de alguns benzodiazepínicos', linhas: [['Alprazolam', '6–20 h'], ['Clonazepam', '19–42 h'], ['Diazepam', '14–61 h']] },
    ],
    tarefas: [
      'Ela pode parar de uma vez? O que pode acontecer e por quê?',
      'O que a filha descreveu? Por que com o alprazolam isso aparece tão rápido?',
      'Como fazer a retirada?',
      'Por que o vinho preocupa, e como explicar o plano à paciente?',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Quero parar hoje. Li que vicia."' },
      { gatilho: 'Se falar em trocar de remédio', fala: '"Trocar por outro calmante? Mas eu quero parar!"' },
      { gatilho: 'No final', fala: '"E um copinho de vinho, tem problema?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Nunca suspender abruptamente um benzodiazepínico de uso prolongado: risco de abstinência grave, inclusive convulsões', pts: 2 },
        { tarefa: 2, item: 'Abstinência: insônia, ansiedade, tremor, hiperatividade autonômica (semelhante à do álcool, geralmente mais branda)', pts: 1 },
        { tarefa: 2, item: 'Meia-vida curta (alprazolam): abstinência já em 24 h, mais rápida e intensa; meia-vida longa: 5–10 dias, mais branda', pts: 1 },
        { tarefa: 3, item: 'Substituir por benzodiazepínico de meia-vida longa (ex.: diazepam) e retirar gradualmente', pts: 2 },
        { tarefa: 4, item: 'Álcool e benzodiazepínico agem no receptor GABA-A: tolerância cruzada e sedação somada (quedas)', pts: 1 },
      ],
    },
    errosCriticos: ['Orientar suspensão abrupta', 'Trocar por outro benzodiazepínico de meia-vida curta'],
    falaModelo: [
      { tarefa: 1, texto: 'Não pode parar de uma vez. Depois de 10 anos de uso, a suspensão abrupta pode causar abstinência grave, inclusive com convulsões.', tempo: '15 s' },
      { tarefa: 2, texto: 'A filha descreveu abstinência: tremor e nervosismo quando esquece a dose. O alprazolam tem meia-vida curta, então a abstinência começa já em 24 horas e é mais intensa. Com os de meia-vida longa, ela aparece em 5 a 10 dias e é mais branda.', tempo: '30 s' },
      { tarefa: 3, texto: 'Faço a retirada gradual: troco o alprazolam por um benzodiazepínico de meia-vida longa, como o diazepam, que suaviza a curva, e vou reduzindo aos poucos.', tempo: '20 s' },
      { tarefa: 4, texto: 'O vinho age no mesmo receptor do calmante, o GABA-A: os dois se somam e aumentam a sonolência e o risco de queda. Dona Ivone, a senhora está certa em querer parar, e eu vou ajudar. Mas parar de uma vez é como descer uma escada pulando os degraus: a senhora cai. Vamos descer degrau por degrau, trocando por um remédio que sai do corpo mais devagar e diminuindo aos poucos. Combinado?', tempo: '45 s', analogia: 'Descer a escada degrau por degrau' },
    ],
    extra: 'Qual é o antídoto dos benzodiazepínicos e qual a cautela? (Flumazenil, reservado a intoxicações graves; risco de convulsões em uso crônico ou overdose mista.)',
  },

  // ----------------------------------------------------- MEN-16 · Maconha e psicose
  {
    id: 'MEN-16', materia: 'mental',
    titulo: 'As vozes voltaram junto com a maconha',
    local: 'Ambulatório de saúde mental', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Vítor, 24 anos, tem diagnóstico de esquizofrenia há 3 anos e vinha estável. Há 2 meses voltou a fumar maconha quase todo dia, uma variedade "bem forte" que um amigo traz, e passou a tomar o antipsicótico "só quando lembra". A mãe conta que ele voltou a se isolar, a ouvir vozes e a dizer que os vizinhos o perseguem. Ele quer parar de vir às consultas. Diz: "A maconha é natural, me acalma".',
    mesa: [],
    tarefas: [
      'Quais fatores explicam a piora?',
      'Qual é a relação da maconha (THC e CBD) com a esquizofrenia?',
      'Qual é a conduta? Existe remédio específico para o uso de maconha?',
      'Converse com Vítor, que acha a maconha inofensiva.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Maconha é natural. Me acalma mais que o seu remédio."' },
      { gatilho: 'Mãe, na tarefa 3', fala: '"Não tem um remédio pra ele parar de fumar?"' },
      { gatilho: 'No final', fala: '"Não quero mais vir aqui."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Uso frequente de maconha de alta potência e baixa adesão ao antipsicótico (principal causa de recaída)', pts: 2 },
        { tarefa: 2, item: 'Maconha: risco 4 vezes maior de esquizofrenia; exacerba sintomas positivos, agrava negativos; mais internações, pior adesão, mais risco de suicídio', pts: 1 },
        { tarefa: 2, item: 'THC: responsável pela dependência e pelos efeitos deletérios; variedades ricas em THC e pobres em CBD aumentam o risco de psicose', pts: 1 },
        { tarefa: 3, item: 'Reforçar o vínculo, psicoeducação sobre THC e psicose, reavaliar a adesão ao antipsicótico', pts: 1 },
        { tarefa: 3, item: 'Sem medicamento aprovado no Brasil para o uso de cannabis: tratamento psicossocial (TCC, manejo de contingências), integrado ao da esquizofrenia', pts: 1 },
        { tarefa: 4, item: 'Abordagem sem confronto, preservando o vínculo e o seguimento', pts: 1 },
      ],
    },
    errosCriticos: ['Confrontar ou ameaçar o paciente, rompendo o vínculo', 'Prescrever um medicamento "para parar a maconha"'],
    falaModelo: [
      { tarefa: 1, texto: 'Dois fatores: a volta ao uso diário de maconha de alta potência e a baixa adesão ao antipsicótico, que é a principal causa de recaída na esquizofrenia.', tempo: '20 s' },
      { tarefa: 2, texto: 'A maconha aumenta em 4 vezes o risco de esquizofrenia, piora os sintomas positivos, como as vozes, e os negativos, como o isolamento, e está ligada a mais internações e pior adesão. O THC é o responsável pela dependência e pelos efeitos ruins; as variedades ricas em THC e pobres em CBD aumentam o risco de psicose.', tempo: '35 s' },
      { tarefa: 3, texto: 'Reforço o vínculo, faço psicoeducação e reavalio a adesão ao antipsicótico. Não existe remédio aprovado no Brasil para o uso de maconha: o tratamento é psicossocial, com TCC e manejo de contingências, junto com o tratamento da esquizofrenia.', tempo: '30 s' },
      { tarefa: 4, texto: 'Vítor, eu entendo que a maconha te dá uma sensação de calma, e não quero brigar com você. Mas essa maconha forte é como colocar gasolina numa fogueira que estava quase apagada: as vozes e a perseguição voltaram justamente agora. Eu prefiro continuar te acompanhando, mesmo que a gente ainda não concorde em tudo. Podemos combinar de você tomar o remédio todos os dias e a gente conversar sobre a maconha na próxima consulta?', tempo: '45 s', analogia: 'Gasolina numa fogueira quase apagada' },
    ],
    extra: 'Como rastrear rapidamente o uso de maconha na emergência? (Uma única pergunta, "No ano passado, com que frequência você usou maconha?", é tão eficaz quanto instrumentos longos.)',
  },

  // ----------------------------------------------------- MEN-17 · Bulimia nervosa
  {
    id: 'MEN-17', materia: 'mental',
    titulo: 'Os calos nos dedos e o potássio baixo',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Letícia, 20 anos, universitária, veio por "cansaço e câimbras". IMC 22. Ao exame: aumento bilateral das parótidas, erosão do esmalte na face interna dos dentes e calosidades no dorso da mão direita. Depois de criar confiança, ela conta que, cerca de 3 vezes por semana, "come sem conseguir parar" — às vezes um pacote de biscoitos, um pote de sorvete e pão de uma vez — e depois provoca vômito, por medo de engordar. Sente muita vergonha.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Potássio', '2,9 mEq/L'], ['Bicarbonato', '34 mEq/L (alcalose metabólica)'], ['Amilase', 'elevada']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Diferencie da anorexia purgativa e do transtorno de compulsão alimentar.',
      'Explique os achados do exame físico e dos exames.',
      'Qual é o tratamento? Que antidepressivo é contraindicado e por quê?',
      'Converse com Letícia, que sente muita vergonha.',
    ],
    ator: [
      { gatilho: 'Ao contar', fala: '"Eu tenho muita vergonha… ninguém sabe disso."' },
      { gatilho: 'Se falar em tratamento', fala: '"Eu não estou magra. Isso é doença mesmo?"' },
      { gatilho: 'No final', fala: '"Tem algum remédio que me ajude?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Bulimia nervosa: compulsão alimentar + comportamento compensatório inadequado recorrente + sobrevalorização do peso, com peso normal', pts: 1 },
        { tarefa: 1, item: 'Anorexia purgativa: baixo peso · TCA: compulsão sem comportamento compensatório regular', pts: 1 },
        { tarefa: 2, item: 'Sinal de Russell (calos no dorso da mão), hipertrofia parotídea (sialoadenose), amilase elevada (fração salivar), erosão dentária na face lingual', pts: 1 },
        { tarefa: 2, item: 'Vômitos: hipocalemia + alcalose metabólica (perda de ácido gástrico); laxantes tenderiam à acidose', pts: 1 },
        { tarefa: 3, item: 'TCC-TA como primeira escolha; fluoxetina 60 mg/dia (único ISRS aprovado para BN)', pts: 2 },
        { tarefa: 3, item: 'Bupropiona contraindicada em transtornos alimentares com purgação (risco de convulsões)', pts: 1 },
        { tarefa: 4, item: 'Acolheu a vergonha sem julgamento e explicou que é uma doença tratável, mesmo com peso normal', pts: 1 },
      ],
    },
    errosCriticos: ['Descartar transtorno alimentar porque o peso é normal', 'Prescrever bupropiona'],
    falaModelo: [
      { tarefa: 1, texto: 'É bulimia nervosa: episódios de compulsão, com perda de controle, seguidos de vômito provocado, por medo de engordar, com peso normal. Na anorexia purgativa o peso é baixo; no transtorno de compulsão alimentar há compulsão, mas sem comportamento compensatório regular.', tempo: '30 s' },
      { tarefa: 2, texto: 'Os calos no dorso da mão são o sinal de Russell, do atrito com os dentes ao provocar o vômito. As parótidas aumentadas e a amilase alta vêm da glândula salivar. A erosão dentária na face interna vem do ácido. E os vômitos causam hipocalemia com alcalose metabólica, pela perda de ácido do estômago; se fosse por laxante, tenderia à acidose.', tempo: '40 s' },
      { tarefa: 3, texto: 'A primeira escolha é a terapia cognitivo-comportamental específica para transtornos alimentares. A fluoxetina, 60 mg por dia, é o único ISRS aprovado para bulimia. A bupropiona é contraindicada, pelo risco de convulsão em quem tem purgação.', tempo: '30 s' },
      { tarefa: 4, texto: 'Letícia, obrigada por confiar em mim. Não é falta de força de vontade: é uma doença, e tem tratamento, mesmo com o peso normal. É como um ciclo vicioso de uma roda-gigante: a restrição leva à compulsão, a compulsão à culpa, a culpa ao vômito, e tudo recomeça. O tratamento ajuda a sair dessa roda. E esse potássio baixo explica o cansaço e as câimbras. Como você se sente agora que falou sobre isso?', tempo: '45 s', analogia: 'Ciclo vicioso como uma roda-gigante' },
    ],
    extra: 'Qual é o único remédio aprovado para o transtorno de compulsão alimentar? (Lisdexanfetamina, no TCA moderado a grave.) Como se classifica a gravidade do TCA? (Episódios por semana: leve 1–3, moderado 4–7, grave 8–13, extremo ≥ 14.)',
  },

  // ----------------------------------------------------- MEN-18 · Apneia obstrutiva do sono
  {
    id: 'MEN-18', materia: 'mental',
    titulo: 'Cochilou no volante',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Sr. Rogério, 52 anos, taxista, IMC 34, pescoço largo, hipertenso com pressão difícil de controlar. Veio porque cochilou no volante parado no sinal. A esposa conta que ele ronca alto e que "para de respirar" várias vezes à noite, acordando engasgado. Ele acorda cansado, mesmo dormindo 8 horas. Toma clonazepam "para dormir melhor" e uma dose de cachaça à noite.',
    mesa: [
      { tipo: 'tabela', titulo: 'Avaliação', linhas: [['Escala de Epworth', '16'], ['Polissonografia', 'índice de apneia-hipopneia (IAH) = 38 eventos/hora; esforço respiratório mantido durante as pausas']] },
    ],
    tarefas: [
      'Qual é a hipótese? Quais perguntas de triagem são mais sensíveis e mais específicas?',
      'Interprete a escala de Epworth e a polissonografia. É obstrutiva ou central? Qual é a gravidade?',
      'Qual é o tratamento, e o que ele deve evitar?',
      'Explique ao paciente o CPAP e por que tratar.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Ronco todo mundo ronca, doutor(a)."' },
      { gatilho: 'Se falar em CPAP', fala: '"Dormir com uma máscara? Não vou conseguir."' },
      { gatilho: 'Se falar no clonazepam', fala: '"Mas é ele que me faz dormir!"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Apneia obstrutiva do sono; fatores: sexo masculino, obesidade, pescoço largo, benzodiazepínico/álcool', pts: 1 },
        { tarefa: 1, item: '"Você ronca?": maior sensibilidade · "Você para de respirar dormindo?": maior especificidade', pts: 1 },
        { tarefa: 2, item: 'Epworth ≥ 10 sugere sonolência excessiva (rastreamento, não diagnóstico); polissonografia é o padrão-ouro', pts: 1 },
        { tarefa: 2, item: 'Obstrutiva: esforço respiratório mantido (na central está reduzido/ausente); IAH 38 > 30 = grave', pts: 2 },
        { tarefa: 3, item: 'CPAP ("tala pneumática" que mantém a via aérea pérvia), com acompanhamento da adesão; perda de peso, terapia posicional', pts: 1 },
        { tarefa: 3, item: 'Evitar álcool, relaxantes musculares e benzodiazepínicos à noite (agravam a AOS); complicações: hipertensão, arritmias, DM2', pts: 1 },
        { tarefa: 4, item: 'Explicou o CPAP em linguagem simples e lidou com a resistência à máscara (adaptação acompanhada)', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o clonazepam e o álcool à noite', 'Diagnosticar apenas pela escala de Epworth'],
    falaModelo: [
      { tarefa: 1, texto: 'A hipótese é apneia obstrutiva do sono: homem, obeso, pescoço largo, ronco, pausas testemunhadas, sono que não descansa e sonolência ao dirigir. "Você ronca?" é a pergunta mais sensível; "você para de respirar dormindo?", a mais específica, geralmente respondida pelo parceiro.', tempo: '35 s' },
      { tarefa: 2, texto: 'O Epworth de 16, acima de 10, sugere sonolência excessiva, mas é só rastreio. A polissonografia, padrão-ouro, mostra IAH de 38: acima de 30, grave. Como o esforço respiratório continua durante as pausas, é obstrutiva; na central, o esforço diminui ou some.', tempo: '35 s' },
      { tarefa: 3, texto: 'O tratamento é o CPAP, com perda de peso e terapia posicional. Ele deve evitar o álcool e o clonazepam à noite, porque relaxam a via aérea e pioram a apneia. Sem tratamento, a apneia piora a pressão, causa arritmias e diabetes.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Rogério, durante o sono a sua garganta fecha, como um canudo mole que gruda quando a gente puxa o ar. O CPAP sopra um ar suave que mantém esse canudo aberto, como uma tala de ar. No começo exige adaptação, mas a gente acompanha. Com ele, o senhor dorme de verdade, fica mais seguro no volante e a pressão melhora. Topa experimentar?', tempo: '40 s', analogia: 'Garganta como um canudo mole' },
    ],
    extra: 'Quais são os critérios diagnósticos da AOS (ICSD-3)? (Pelo menos um sintoma ou condição associada, como sonolência, despertar ofegante, ronco/pausas ou hipertensão, mais 5 ou mais eventos obstrutivos por hora na polissonografia.)',
  },

  // ----------------------------------------------------- MEN-19 · TDAH no adulto
  {
    id: 'MEN-19', materia: 'mental',
    titulo: 'Perdendo prazos desde sempre',
    local: 'Ambulatório de saúde mental', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Rafael, 29 anos, programador, procura atendimento porque "não consegue terminar nada": perde prazos, esquece reuniões, começa várias tarefas e larga no meio, perde objetos. Sente uma "inquietação por dentro" e não consegue ficar parado em reuniões longas. Já bateu o carro duas vezes por distração. Fuma maconha toda noite "para desligar a cabeça". A mãe, que veio junto, conta que desde os 7 anos os professores diziam que ele "vivia no mundo da lua" e não parava sentado.',
    mesa: [
      { tipo: 'tabela', titulo: 'Avaliação', linhas: [['Desatenção', '7 sintomas atuais'], ['Hiperatividade/impulsividade', '5 sintomas atuais'], ['Contextos', 'trabalho, casa, trânsito']] },
    ],
    tarefas: [
      'Ele preenche critérios para TDAH? O que muda nos critérios do adulto?',
      'Como a hiperatividade costuma aparecer no adulto?',
      'O que você precisa investigar antes de definir a conduta, e por quê?',
      'Qual é o tratamento de primeira escolha e que cuidados ele exige? Converse com o paciente.',
    ],
    ator: [
      { gatilho: 'Ao começar', fala: '"Eu achava que TDAH era coisa de criança."' },
      { gatilho: 'Se perguntar sobre a maconha', fala: '"É o único jeito de eu desligar a cabeça."' },
      { gatilho: 'Se falar em estimulante', fala: '"Isso não vicia? Ouvi dizer que é tipo droga."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'A partir dos 17 anos bastam 5 sintomas num domínio; sintomas antes dos 12 anos, confirmados retrospectivamente com relato de terceiros (a mãe)', pts: 1 },
        { tarefa: 1, item: 'Múltiplos contextos e prejuízo funcional: preenche (apresentação combinada)', pts: 1 },
        { tarefa: 2, item: 'No adulto, a hiperatividade aparece como inquietude subjetiva, mais do que agitação motora', pts: 1 },
        { tarefa: 3, item: 'Investigar comorbidades: uso de substâncias (até 40%), depressão, transtorno bipolar, ansiedade, transtornos da personalidade (~50%)', pts: 1 },
        { tarefa: 3, item: 'As comorbidades orientam a escolha terapêutica; TDAH não tratado dobra o risco de abuso de substâncias, incluindo maconha', pts: 1 },
        { tarefa: 4, item: 'Estimulantes (metilfenidato, lisdexanfetamina) como primeira escolha; avaliar história cardiovascular; não estimulantes se contraindicação ou intolerância', pts: 1 },
        { tarefa: 4, item: 'Potencial de abuso do estimulante fora da prescrição: uso acompanhado e orientado', pts: 1 },
      ],
    },
    errosCriticos: ['Diagnosticar sem confirmar o início na infância', 'Iniciar estimulante sem investigar comorbidades e uso de substâncias'],
    falaModelo: [
      { tarefa: 1, texto: 'Sim. A partir dos 17 anos bastam 5 sintomas num domínio, e ele tem 7 de desatenção e 5 de hiperatividade. A mãe confirma sintomas desde os 7 anos, antes dos 12, e há prejuízo no trabalho, em casa e no trânsito: TDAH, apresentação combinada.', tempo: '30 s' },
      { tarefa: 2, texto: 'No adulto, a hiperatividade costuma aparecer como inquietude por dentro, mais do que correr ou subir nas coisas, como ele descreve.', tempo: '15 s' },
      { tarefa: 3, texto: 'Antes de tratar, investigo comorbidades, que são muito frequentes no adulto: uso de substâncias, até 40%, depressão, transtorno bipolar, ansiedade e transtornos da personalidade. Elas orientam a escolha do tratamento. E o TDAH sem tratamento dobra o risco de abuso de substâncias, como a maconha que ele usa.', tempo: '35 s' },
      { tarefa: 4, texto: 'A primeira escolha é o estimulante, metilfenidato ou lisdexanfetamina, depois de avaliar a história cardiovascular. Rafael, TDAH não é coisa só de criança: muita gente chega à vida adulta sem diagnóstico. O seu cérebro é como um carro com o volante solto: o motor é bom, mas é difícil manter a direção. O remédio ajusta o volante. Ele tem potencial de abuso quando usado sem receita, por isso vamos acompanhar de perto. E a gente vai conversar sobre a maconha também. O que você acha?', tempo: '50 s', analogia: 'Carro com o volante solto' },
    ],
    extra: 'Quais são as consequências do TDAH não tratado no adulto? (Acidentes de trânsito, problemas no trabalho, uso de substâncias e criminalidade, entre outras.)',
  },

  // ----------------------------------------------------- MEN-20 · Transtorno da personalidade antissocial
  {
    id: 'MEN-20', materia: 'mental',
    titulo: 'O atestado de 15 dias',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Diego, 30 anos, chega dizendo estar com "uma dor nas costas terrível" e pede um atestado de 15 dias e uma receita de clonazepam. No início é simpático, elogia você e diz que "só você entende". Ao ouvir que o exame não justifica o atestado, fica irritado, fala alto e insinua ameaças. No prontuário: três passagens pela delegacia por brigas e estelionato e vários atestados em outros serviços. A irmã, que o acompanha, conta que na adolescência ele fugia de casa, maltratava animais e roubava colegas, e "nunca se arrepende de nada".',
    mesa: [],
    tarefas: [
      'Qual é a hipótese? Quais critérios sustentam e que exigência de idade existe?',
      'Por que "psicopatia" não é sinônimo automático desse diagnóstico?',
      'Como manejar o atendimento? Que sentimento seu pode ser um sinal de manipulação?',
      'Responda ao pedido de atestado e de clonazepam.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Você é a única pessoa aqui que me entende. Só preciso do atestado e da receita."' },
      { gatilho: 'Ao ouvir "não"', fala: '"Você não sabe com quem está falando. Isso não vai ficar assim."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Transtorno da personalidade antissocial: falsidade/trapaça, impulsividade, agressividade, irresponsabilidade, ausência de remorso, desrespeito a normas', pts: 1 },
        { tarefa: 1, item: 'Diagnóstico só a partir dos 18 anos, com evidência de transtorno de conduta antes dos 15 (fugas, crueldade com animais, furtos)', pts: 2 },
        { tarefa: 2, item: '"Psicopatia" é reservada por alguns autores a traços afetivos/interpessoais específicos e associação com criminalidade; não é sinônimo automático', pts: 1 },
        { tarefa: 3, item: 'Comunicação clara, objetiva e não punitiva; limites firmes e consistentes; investigar motivações', pts: 1 },
        { tarefa: 3, item: 'Contratransferência: medo/ameaça (ou sentir-se "especial"); questionar-se sempre que a própria conduta desviar do padrão habitual', pts: 1 },
        { tarefa: 4, item: 'Negou o atestado e a receita sem indicação, sem punir nem humilhar, oferecendo o cuidado adequado à queixa', pts: 1 },
      ],
    },
    errosCriticos: ['Ceder ao atestado ou à receita por pressão', 'Responder com hostilidade ou punição'],
    falaModelo: [
      { tarefa: 1, texto: 'A hipótese é transtorno da personalidade antissocial: trapaça e estelionato, impulsividade, brigas, irresponsabilidade e ausência de remorso. O diagnóstico só pode ser feito a partir dos 18 anos e exige transtorno de conduta antes dos 15, como as fugas, a crueldade com animais e os furtos que a irmã contou.', tempo: '35 s' },
      { tarefa: 2, texto: 'Alguns autores reservam o termo psicopatia para pacientes com traços afetivos e interpessoais mais específicos, como frieza, e forte associação com criminalidade; então não é sinônimo automático de personalidade antissocial.', tempo: '25 s' },
      { tarefa: 3, texto: 'O manejo é comunicação clara, objetiva e não punitiva, com limites firmes e consistentes, investigando o que ele realmente quer. Se eu me sentir ameaçado, ou especial pelos elogios, isso é contratransferência; e se eu começar a fazer algo fora do meu padrão, como dar um atestado sem indicação, é sinal de manipulação em curso.', tempo: '35 s' },
      { tarefa: 4, texto: 'Diego, eu levo a sua dor a sério e vou examinar e tratar a sua dor nas costas. Mas o exame não justifica um atestado de 15 dias, e o clonazepam não é o tratamento para essa dor, então não vou prescrever. Isso vale para qualquer paciente que eu atender. É como um juiz de futebol: a regra é a mesma para os dois times. Posso fazer agora o que está indicado para a sua dor. Quer que eu faça?', tempo: '40 s', analogia: 'Juiz de futebol: a regra é a mesma para todos' },
    ],
    extra: 'Como manejar um paciente com transtorno da personalidade narcisista que desvaloriza a equipe? (Validar preocupações legítimas sem alimentar a grandiosidade, respostas objetivas e factuais, manter a rotina habitual e resistir ao impulso de desvalorizá-lo de volta.)',
  },

);
