// Estações de Farmacologia: mecanismo de ação e reações adversas dos anti-histamínicos,
// descongestionantes e reações adversas dos antiasmáticos.
// Formato da prova: reconhecer a reação, explicar o mecanismo, manejar (sem prescrever) e orientar.
// Nas estações com paciente, a anamnese é ativa: o paciente só conta o que for perguntado,
// por isso as tarefas não adiantam o que só a anamnese revela.
// Rinite: FAR-01 a 06 e FAR-20 a 23 · Asma: FAR-07 a 11 e FAR-24 a 26.
// FAR-12 a FAR-18 saíram (opioides, AINEs, alendronato, anticonvulsivantes, antiácidos).
ESTACOES.push(
  // ===================================================== RINITE: ANTI-HISTAMÍNICOS E DESCONGESTIONANTES
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
      'Pelo que ele contou, como usar melhor o anti-histamínico, e o que associar ao remédio?',
      'Explique ao Lucas o que aconteceu e oriente-o, levando em conta o que ele contou sobre a rotina.',
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
    titulo: 'Travei e precisei de sonda',
    local: 'Ambulatório de clínica médica — retorno', papel: 'Médico(a) clínico(a)', interacao: 'paciente',
    cenario: 'Seu Armando, 72 anos, foi sondado ontem no pronto-socorro porque não conseguia urinar e veio ao clínico com medo de "travar de novo". Investigue a causa, maneje e oriente o paciente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Quais reações adversas ele teve? Que propriedades do fármaco as explicam, e por que ele estava mais vulnerável?',
      'Que medida você toma com o medicamento? Que alternativa é mais segura para ele, e por quê?',
      'Além do medicamento, que medidas ajudam a controlar o problema que o levou a tomá-lo?',
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

  // ----------------------------------------------------- FAR-03 · Rinite medicamentosa
  {
    id: 'FAR-03', materia: 'farmaco',
    titulo: 'O nariz só desentope com o spray',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Márcia, 34 anos, tem rinite alérgica há anos e diz que "ficou viciada" num spray para o nariz. Identifique a reação, maneje e oriente a paciente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual reação adversa ela apresenta? Como o descongestionante age, e por que o nariz passou a entupir mais?',
      'Qual é o limite seguro de uso desse spray? Que medida você toma agora?',
      'Que classe controla melhor a congestão dela, e por quê? Que papel sobra para o anti-histamínico?',
      'Márcia tem medo de ficar "sem respirar" se parar o spray. Explique e oriente.',
    ],
    anamnese: [
      { tema: 'Qual spray e como usa', resposta: '"Oximetazolina, da farmácia. Comecei há 3 semanas. Hoje uso 5 a 6 vezes por dia."' },
      { tema: 'Evolução', resposta: '"No começo abria tudo na hora. Agora entope de novo, pior, poucas horas depois."' },
      { tema: 'Sintomas da rinite', resposta: '"O pior é o nariz entupido. Espirro e coceira, de vez em quando."' },
      { tema: 'Ambiente', resposta: '"Minha casa é úmida e tem mofo no quarto."' },
      { tema: 'Pressão, gestação e outros remédios', resposta: '"Não tenho pressão alta, não estou grávida e não tomo outro remédio."' },
    ],
    placas: [
      { pedido: 'o exame do nariz', placa: 'Mucosa nasal edemaciada e congesta.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), eu fiquei viciada no spray. Sem ele não respiro."' },
      { gatilho: 'Se falar em suspender o spray', fala: '"Se eu parar, vou ficar entupida!"' },
      { gatilho: 'No final', fala: '"Posso usar o spray de vez em quando, numa gripe?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Rinite medicamentosa com congestão rebote, pelo uso contínuo do descongestionante tópico', pts: 1 },
        { tarefa: 1, item: 'Descongestionante tópico é simpaticomimético: estimulação simpática → vasoconstrição e abertura das vias nasais; o uso contínuo leva ao rebote', pts: 1 },
        { tarefa: 2, item: 'Perguntou há quanto tempo e quantas vezes usa: o descongestionante tópico deve ficar limitado a 3 a 5 dias', pts: 1 },
        { tarefa: 2, item: 'Suspender o descongestionante tópico', pts: 1 },
        { tarefa: 3, item: 'Corticosteroide nasal (beclometasona, budesonida, fluticasona): inibe mediadores inflamatórios de forma ampla e é mais eficaz também sobre a congestão', pts: 1 },
        { tarefa: 3, item: 'Anti-histamínico bloqueia principalmente espirros, coceira e coriza, com eficácia limitada sobre a congestão; pode ser mantido junto', pts: 1 },
        { tarefa: 4, item: 'Acolheu o medo, explicou o rebote e orientou o controle ambiental (umidade, mofo, poeira)', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o descongestionante tópico', 'Tratar a congestão só com anti-histamínico'],
    falaModelo: [
      { tarefa: 1, texto: 'É rinite medicamentosa, com congestão rebote. O descongestionante tópico é simpaticomimético: provoca vasoconstrição na mucosa e abre o nariz na hora. Usado de forma contínua, por mais de 3 a 5 dias, o nariz volta a entupir, e pior, quando o efeito passa.', tempo: '30 s' },
      { tarefa: 2, texto: 'O uso desse spray deve ficar limitado a 3 a 5 dias, e ela usa há 3 semanas, várias vezes ao dia. A medida é suspender o descongestionante tópico.', tempo: '15 s' },
      { tarefa: 3, texto: 'Para a congestão, uso corticosteroide nasal, como budesonida, beclometasona ou fluticasona. Ele inibe os mediadores inflamatórios de forma ampla e atua também sobre a congestão. O anti-histamínico bloqueia principalmente espirros, coceira e coriza, com efeito limitado sobre o nariz entupido, e pode ser mantido junto para esses sintomas.', tempo: '30 s' },
      { tarefa: 4, texto: 'Márcia, o spray funciona como um empréstimo: abre o nariz agora e cobra com juros depois, entupindo mais. Por isso você precisa usar cada vez mais. Vamos parar o spray e usar o corticoide nasal, que trata a inflamação que entope o nariz. Cuidar da umidade e do mofo de casa também reduz a alergia. Numa gripe, se usar esse spray, que seja por no máximo 3 a 5 dias. Me conta como você vai fazer?', tempo: '40 s', analogia: 'Spray como empréstimo que cobra juros' },
    ],
    extra: 'Quais são os descongestionantes tópicos citados? (Fenilefrina, nafazolina e oximetazolina, simpaticomiméticos vasoconstritores.)',
  },

  // ----------------------------------------------------- FAR-04 · Descongestionante sistêmico e pressão arterial
  {
    id: 'FAR-04', materia: 'farmaco',
    titulo: 'A pressão subiu, e ele quer aumentar o remédio',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Seu Nelson, 63 anos, hipertenso, mediu a pressão na farmácia e ela está bem acima do habitual. Ele acha que precisa aumentar o remédio da pressão. Investigue, maneje e oriente o paciente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Que reação adversa ele apresenta, e qual é o mecanismo?',
      'Que medida você toma? É o caso de aumentar o remédio da pressão?',
      'Como tratar com segurança o sintoma que o levou a esse medicamento? Responda também à pergunta dele no final.',
      'Explique ao paciente e oriente sobre a automedicação.',
    ],
    anamnese: [
      { tema: 'Pressão habitual e tratamento', resposta: '"Tomo losartana há anos, e a pressão fica em 13 por 8."' },
      { tema: 'Remédios novos', resposta: '"Há 4 dias tomo um antigripal com pseudoefedrina, várias vezes ao dia, para desentupir o nariz."' },
      { tema: 'Nariz', resposta: '"Tenho rinite, e o nariz anda muito entupido."' },
      { tema: 'Sintomas de alarme', resposta: '"Não tenho dor no peito nem falta de ar. Só sinto o coração um pouco acelerado."' },
    ],
    placas: [
      { pedido: 'a pressão arterial e a frequência cardíaca', placa: 'PA 166 × 98 mmHg · FC 102 bpm.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Minha pressão sempre foi boa, doutor(a). Será que preciso aumentar o remédio dela?"' },
      { gatilho: 'Se falar em suspender o antigripal', fala: '"Mas e o nariz entupido?"' },
      { gatilho: 'No final', fala: '"Então posso usar aquele spray de nariz?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou os remédios novos: aumento da PA e da FC pela pseudoefedrina em doses elevadas (acima de 180 mg)', pts: 1 },
        { tarefa: 1, item: 'Mecanismo simpaticomimético: estimulação simpática → vasoconstrição', pts: 1 },
        { tarefa: 2, item: 'Suspender o descongestionante sistêmico: essa classe não deve ser usada em hipertensos', pts: 1 },
        { tarefa: 2, item: 'Não aumentar o anti-hipertensivo: retirar a causa e reavaliar a pressão', pts: 1 },
        { tarefa: 3, item: 'Corticosteroide nasal: atua também sobre a congestão, sem esse risco cardiovascular', pts: 1 },
        { tarefa: 3, item: 'Descongestionante tópico só por 3 a 5 dias, pelo risco de rinite medicamentosa (congestão rebote)', pts: 1 },
        { tarefa: 4, item: 'Orientou não usar antigripal ou descongestionante por conta própria, com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Aumentar o anti-hipertensivo mantendo a pseudoefedrina', 'Liberar o descongestionante tópico sem limite de dias'],
    falaModelo: [
      { tarefa: 1, texto: 'A pressão subiu por causa da pseudoefedrina, um descongestionante sistêmico. Ela é simpaticomimética: a estimulação simpática contrai os vasos, o que desentope o nariz, mas em doses acima de 180 mg aumenta a frequência cardíaca e a pressão, e ele é hipertenso.', tempo: '25 s' },
      { tarefa: 2, texto: 'Suspendo o antigripal: descongestionante sistêmico não deve ser usado em hipertensos. Não aumento o remédio da pressão; primeiro retiro a causa e reavalio a pressão depois.', tempo: '15 s' },
      { tarefa: 3, texto: 'Para a congestão, uso corticosteroide nasal, que atua também sobre o nariz entupido, sem esse risco cardiovascular. O spray descongestionante nasal, se usado, fica restrito a 3 a 5 dias, porque o uso prolongado causa rinite medicamentosa, com o nariz entupindo de novo, e pior.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Nelson, esse antigripal desentope o nariz apertando os vasos, como fechar um pouco o bico de uma mangueira: a pressão lá dentro sobe. Não foi o seu remédio da pressão que falhou. Vamos parar o antigripal, usar um spray de corticoide para o nariz e medir a pressão de novo em alguns dias. Antes de comprar remédio para gripe ou nariz entupido, me pergunte. Me conta: o que o senhor vai parar de tomar?', tempo: '40 s', analogia: 'Fechar o bico da mangueira' },
    ],
    extra: 'Qual a diferença entre o risco do descongestionante tópico e o do sistêmico? (Tópico: rinite medicamentosa se usado por mais de 3 a 5 dias. Sistêmico: alteração da pressão arterial em doses elevadas.)',
  },

  // ----------------------------------------------------- FAR-05 · Efeitos adversos do antileucotrieno
  {
    id: 'FAR-05', materia: 'farmaco',
    titulo: 'Ele mudou nos últimos meses',
    local: 'Ambulatório de pediatria', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Gabriel, 15 anos, tem asma leve e rinite alérgica. A mãe, dona Cláudia, o trouxe porque ele "mudou" nos últimos meses. Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Os sintomas novos podem ser reação adversa? Relacione com o fármaco e cite as reações descritas para essa classe.',
      'Como você maneja essa reação? Que alternativa existe para controlar a asma e a rinite dele?',
      'Esse medicamento serve para a crise? O que ele deve usar quando o chiado aparecer?',
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

  // ----------------------------------------------------- FAR-20 · Comparação: reações adversas no tratamento da rinite (anti-H1 e descongestionantes)
  {
    id: 'FAR-20', materia: 'farmaco',
    titulo: 'Quatro pacientes com rinite, quatro reações',
    local: 'Banca do OSCE — reações adversas', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador apresenta quatro pacientes com rinite alérgica que tiveram problemas com o tratamento e pede que você identifique a reação adversa, explique o mecanismo e diga a medida para cada um.',
    mesa: [
      { tipo: 'texto', texto: 'Paciente A — estudante; começou um anti-histamínico de primeira geração e está sonolento, com dificuldade de concentração.\n\nPaciente B — 70 anos, hiperplasia prostática; depois de um anti-histamínico de primeira geração, teve retenção urinária.\n\nPaciente C — usa spray de oximetazolina há 3 semanas; o nariz entope mais algumas horas depois de cada aplicação.\n\nPaciente D — hipertenso; depois de vários dias de antigripal com pseudoefedrina, a pressão subiu.' },
    ],
    tarefas: [
      'Identifique a reação adversa e o fármaco responsável em cada paciente.',
      'Explique o mecanismo de cada reação.',
      'Qual é a medida para cada paciente?',
      'Por que o anti-histamínico controla mal a congestão, e como usá-lo para render mais?',
    ],
    ator: [
      { gatilho: 'Examinador, no paciente A', fala: '"Ele pode continuar com o mesmo remédio e só tomar à noite?"' },
      { gatilho: 'Examinador, no paciente C', fala: '"Por que não aumentar a frequência do spray?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'A: sedação · B: retenção urinária (efeito anticolinérgico) — ambas por anti-H1 de 1ª geração · C: rinite medicamentosa (congestão rebote) por descongestionante tópico · D: elevação da pressão por descongestionante sistêmico', pts: 2 },
        { tarefa: 2, item: 'A e B: a 1ª geração atravessa a barreira hematoencefálica e tem efeitos anticolinérgicos · C e D: simpaticomiméticos vasoconstritores; o tópico causa rebote com uso contínuo, o sistêmico altera a pressão em doses elevadas', pts: 2 },
        { tarefa: 3, item: 'A e B: trocar por 2ª geração (cetirizina, loratadina, fexofenadina) · C: suspender o tópico (limite de 3 a 5 dias) · D: suspender o sistêmico · em C e D, corticosteroide nasal para a congestão', pts: 2 },
        { tarefa: 4, item: 'Anti-H1 bloqueia principalmente espirros, coceira e coriza; é mais eficaz preventivo; bloqueio competitivo e reversível → controle ambiental', pts: 1 },
      ],
    },
    errosCriticos: ['Manter anti-histamínico de primeira geração no paciente com hiperplasia prostática', 'Aumentar o uso do descongestionante tópico'],
    falaModelo: [
      { tarefa: 1, texto: 'A tem sedação e B tem retenção urinária, ambos pelo anti-histamínico de primeira geração. C tem rinite medicamentosa, com congestão rebote, pelo descongestionante tópico. D tem aumento da pressão pela pseudoefedrina, um descongestionante sistêmico.', tempo: '25 s' },
      { tarefa: 2, texto: 'O anti-histamínico de primeira geração atravessa a barreira hematoencefálica, por isso dá sono, e tem efeito anticolinérgico, que trava a bexiga de quem já tem a próstata aumentada. Os descongestionantes são simpaticomiméticos que contraem os vasos: o tópico, usado de forma contínua, causa rebote; o sistêmico, em doses elevadas, altera a pressão arterial.', tempo: '35 s' },
      { tarefa: 3, texto: 'Em A e B, troco por um anti-histamínico de segunda geração, como loratadina, cetirizina ou fexofenadina, que dá menos sono e não tem efeito anticolinérgico relevante. Em C, suspendo o spray, que deve ser usado por no máximo 3 a 5 dias. Em D, suspendo a pseudoefedrina. Para a congestão de C e D, uso corticosteroide nasal.', tempo: '35 s' },
      { tarefa: 4, texto: 'O anti-histamínico bloqueia principalmente a histamina, que causa espirro, coceira e coriza, e tem efeito limitado sobre o nariz entupido. Funciona melhor de forma preventiva, antes da exposição. E o bloqueio é competitivo e reversível, como uma fechadura disputada: se chega muita histamina, ela vence. Por isso reduzir a exposição ao alérgeno faz parte do tratamento.', tempo: '30 s', analogia: 'Receptor H1 como fechadura disputada' },
    ],
    extra: 'Quais são os corticosteroides nasais citados? (Beclometasona, budesonida e fluticasona.)',
  },

  // ----------------------------------------------------- FAR-21 · Anti-H1 no formato da prova: mecanismo, efeitos, riscos e uso racional
  {
    id: 'FAR-21', materia: 'farmaco',
    titulo: 'Quero renovar o antialérgico que tomo quando o nariz ataca',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Dona Célia, 58 anos, costureira, vem renovar a receita de dexclorfeniramina, que usa há 1 ano para rinite alérgica. Explique como o medicamento age, seus efeitos e riscos, e oriente o uso. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Explique o mecanismo de ação dos anti-histamínicos H1 e seus efeitos terapêuticos na rinite.',
      'Quais são as reações adversas desse grupo? Quais preocupam nessa paciente?',
      'Pela anamnese, ela precisa continuar com esse medicamento? Oriente o uso racional.',
      'Explique à paciente, em linguagem simples.',
    ],
    anamnese: [
      { tema: 'Como usa o remédio', resposta: '"Tomo um comprimido quando o nariz ataca, às vezes 3 no mesmo dia. Quando estou bem, não tomo."' },
      { tema: 'Sintomas da rinite', resposta: '"Espirro, coceira e coriza quando varro a casa. Mas o que mais me incomoda é o nariz entupido."' },
      { tema: 'Efeitos que notou', resposta: '"Fico meio sonolenta e, na máquina de costura, às vezes perco a atenção."' },
      { tema: 'Ambiente', resposta: '"A casa tem muita poeira e um tapete grande na sala."' },
      { tema: 'Outras doenças e remédios', resposta: '"Não tenho outra doença nem tomo outro remédio."' },
    ],
    placas: [
      { pedido: 'o exame do nariz', placa: 'Mucosa nasal pálida e edemaciada, com secreção clara.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), só quero renovar a receita do meu antialérgico."' },
      { gatilho: 'Se falar em trocar o remédio', fala: '"Mas esse eu já conheço. Todo antialérgico não dá sono?"' },
      { gatilho: 'No final', fala: '"E o nariz entupido, esse remédio resolve?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Antagonista H1: inibidor competitivo e reversível da histamina no receptor H1', pts: 1 },
        { tarefa: 1, item: 'Efeitos: alivia espirros, coceira e coriza; efeito limitado na congestão; sem ação imediata, mais eficaz na prevenção', pts: 1 },
        { tarefa: 2, item: 'Perguntou os efeitos: dexclorfeniramina é de 1ª geração, com sedação e redução da atenção (atravessa a barreira hematoencefálica) e efeitos anticolinérgicos (retenção urinária em quem tem hiperplasia prostática)', pts: 1 },
        { tarefa: 2, item: 'Preocupa a sonolência e a perda de atenção no trabalho com a máquina de costura, mesmo sendo das menos sedativas da 1ª geração', pts: 1 },
        { tarefa: 3, item: 'Trocar por 2ª geração (cetirizina, loratadina, fexofenadina): sem ação relevante no SNC e sem efeitos anticolinérgicos', pts: 1 },
        { tarefa: 3, item: 'Uso preventivo e regular, não só na crise; congestão predominante: associar corticosteroide nasal; controle ambiental (poeira, tapete, umidade abaixo de 50%)', pts: 1 },
        { tarefa: 4, item: 'Explicou com linguagem acessível e checou a compreensão', pts: 1 },
      ],
    },
    errosCriticos: ['Renovar o anti-histamínico de primeira geração sem avaliar a sonolência no trabalho', 'Orientar o uso só na crise'],
    falaModelo: [
      { tarefa: 1, texto: 'Os anti-histamínicos H1 são antagonistas do receptor H1: competem com a histamina pelo receptor, de forma reversível. Assim aliviam espirros, coceira e coriza. Sobre o nariz entupido o efeito é limitado, e eles não têm ação imediata: funcionam melhor de forma preventiva.', tempo: '25 s' },
      { tarefa: 2, texto: 'A dexclorfeniramina é de primeira geração: atravessa a barreira hematoencefálica, então pode dar sonolência e reduzir a atenção, e tem efeitos anticolinérgicos, que em quem tem próstata aumentada podem travar a urina. Mesmo sendo das menos sedativas da primeira geração, nela preocupa a perda de atenção na máquina de costura.', tempo: '30 s' },
      { tarefa: 3, texto: 'Pela anamnese, não precisa continuar com essa. Troco por uma de segunda geração, como loratadina, cetirizina ou fexofenadina, que quase não age no sistema nervoso central e não tem efeito anticolinérgico. Oriento usar todo dia, de forma preventiva, e não só na crise. Como o que mais incomoda é o nariz entupido, associo corticosteroide nasal, mais eficaz na congestão. E reduzir a poeira, tirar o tapete e manter a umidade abaixo de 50%.', tempo: '40 s' },
      { tarefa: 4, texto: 'Dona Célia, esse remédio funciona como um porteiro que precisa estar na porta antes de a alergia chegar: tomado só depois que a crise começou, ele chega atrasado. Por isso o novo é para tomar todo dia. O seu antigo também chega ao cérebro e dá sono, o que é perigoso na máquina de costura; o novo quase não dá sono. Para o nariz entupido, vamos usar um spray de corticoide. Me conta: como a senhora vai tomar o remédio novo?', tempo: '40 s', analogia: 'Porteiro que precisa estar na porta antes de a alergia chegar' },
    ],
    extra: 'Pela tabela dos slides, quais anti-histamínicos de 1ª geração são os menos sedativos? (Dexclorfeniramina e ciproeptadina, +; difenidramina e prometazina são os mais sedativos, +++.)',
  },

  // ----------------------------------------------------- FAR-22 · Insônia paradoxal por anti-H1 de 1ª geração
  {
    id: 'FAR-22', materia: 'farmaco',
    titulo: 'Tomei o antialérgico para dormir e passei a noite acordada',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Bruna, 31 anos, tem rinite alérgica perene. Tomou por conta própria um antialérgico "que dá sono" para dormir melhor e passou a noite agitada e acordada. Avalie a reação, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Que reação adversa ela teve? A que grupo de anti-histamínicos ela se relaciona, e por quê?',
      'Que outras reações esse grupo causa? Por que a segunda geração tem menos efeitos centrais?',
      'Que medida você toma para a rinite dela? Justifique pela farmacologia.',
      'Explique à Bruna e oriente sobre o uso de antialérgico por conta própria.',
    ],
    anamnese: [
      { tema: 'Qual remédio e por quê', resposta: '"Difenidramina, que uma amiga usa para dormir. Tomei ontem à noite."' },
      { tema: 'O que aconteceu', resposta: '"Em vez de dar sono, fiquei agitada e não consegui dormir."' },
      { tema: 'Vezes anteriores', resposta: '"Há uns anos, outro antialérgico antigo também me deixou acordada a noite toda."' },
      { tema: 'Sintomas da rinite', resposta: '"Espirro e coceira no nariz o ano todo, pior com a poeira do quarto."' },
      { tema: 'Outras doenças e remédios', resposta: '"Não tenho outra doença nem tomo outro remédio."' },
    ],
    placas: [
      { pedido: 'o exame do nariz', placa: 'Mucosa nasal pálida, com secreção clara.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), o remédio que era para dar sono me deixou ligada a noite inteira!"' },
      { gatilho: 'Se falar em segunda geração', fala: '"Mas se não dá sono, funciona menos?"' },
      { gatilho: 'No final', fala: '"Então posso tentar outro desses antigos?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou o fármaco e a história: insônia paradoxal (agitação em vez de sono) por anti-histamínico de 1ª geração (difenidramina), que já tinha ocorrido antes', pts: 1 },
        { tarefa: 1, item: 'Efeito central: a 1ª geração atravessa a barreira hematoencefálica e age no SNC', pts: 1 },
        { tarefa: 2, item: 'Outras reações da 1ª geração: sedação e redução da atenção; efeitos anticolinérgicos (retenção urinária em hiperplasia prostática)', pts: 1 },
        { tarefa: 2, item: '2ª geração não atravessa de modo apreciável a barreira hematoencefálica: sem ação relevante no SNC, com eficácia antialérgica semelhante', pts: 1 },
        { tarefa: 3, item: 'Não reintroduzir a 1ª geração, que já causou a reação; usar 2ª geração (cetirizina, loratadina, fexofenadina)', pts: 1 },
        { tarefa: 3, item: 'Uso preventivo e controle ambiental (poeira do quarto, umidade abaixo de 50%)', pts: 1 },
        { tarefa: 4, item: 'Orientou não usar antialérgico por conta própria e explicou com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Indicar outro anti-histamínico de primeira geração', 'Não relacionar a agitação ao antialérgico'],
    falaModelo: [
      { tarefa: 1, texto: 'Ela teve insônia paradoxal: em vez de sono, agitação e insônia, causadas pela difenidramina, um anti-histamínico de primeira geração. Esse grupo atravessa a barreira hematoencefálica e age no sistema nervoso central, e já tinha provocado o mesmo efeito nela antes.', tempo: '25 s' },
      { tarefa: 2, texto: 'O mesmo grupo causa sedação e redução da atenção, e tem efeitos anticolinérgicos, que podem levar à retenção urinária em quem tem próstata aumentada. A segunda geração não atravessa de modo apreciável a barreira hematoencefálica, então quase não age no sistema nervoso central, com eficácia antialérgica semelhante.', tempo: '30 s' },
      { tarefa: 3, texto: 'Não reintroduzo a primeira geração, que já causou a reação duas vezes. Para a rinite, uso um de segunda geração, como loratadina, cetirizina ou fexofenadina, de forma preventiva, e associo o controle ambiental: tirar a poeira do quarto e manter a umidade abaixo de 50%.', tempo: '25 s' },
      { tarefa: 4, texto: 'Bruna, esse antialérgico antigo entra no cérebro e, em você, funcionou ao contrário: em vez de calmante, virou café. Como isso já aconteceu duas vezes, você não deve usar esse grupo de novo. O novo trata a alergia tão bem quanto, sem mexer com o cérebro. Antes de tomar remédio por indicação de amigos, me pergunte. Me conta: qual remédio você vai evitar?', tempo: '35 s', analogia: 'Calmante que, nela, virou café' },
    ],
    extra: 'Os anti-histamínicos de 1ª e 2ª geração têm eficácia antialérgica diferente? (Não: a eficácia é semelhante; a diferença está nos efeitos centrais e anticolinérgicos, maiores na 1ª geração.)',
  },

  // ----------------------------------------------------- FAR-23 · Limite do anti-H1 na congestão: corticoide nasal e descongestionante
  {
    id: 'FAR-23', materia: 'farmaco',
    titulo: 'A loratadina resolveu o espirro, mas o nariz continua entupido',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Patrícia, 29 anos, tem rinite alérgica e usa loratadina todo dia. Os espirros e a coceira melhoraram, mas o nariz continua entupido, e ela quer dobrar a dose ou usar um spray "de desentupir" todo dia. Explique, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Por que a loratadina melhorou os espirros e a coceira, mas não a congestão? Explique pelo mecanismo.',
      'Dobrar a dose resolve? Que classe controla melhor a congestão, e como ela age?',
      'E o spray descongestionante todo dia? Qual é o risco e o limite seguro?',
      'Explique à Patrícia e oriente o tratamento.',
    ],
    anamnese: [
      { tema: 'Como usa a loratadina', resposta: '"Um comprimido por dia, todo dia, há 2 meses."' },
      { tema: 'O que melhorou', resposta: '"O espirro e a coceira melhoraram bem."' },
      { tema: 'O que continua', resposta: '"O nariz vive entupido, principalmente à noite. Acordo respirando pela boca."' },
      { tema: 'Spray nasal', resposta: '"Ainda não usei. A farmácia me ofereceu um de oximetazolina."' },
      { tema: 'Pressão e outros remédios', resposta: '"Não tenho pressão alta e não tomo outro remédio."' },
      { tema: 'Ambiente', resposta: '"Tenho um gato que dorme no meu quarto."' },
    ],
    placas: [
      { pedido: 'o exame do nariz', placa: 'Mucosa nasal pálida e muito edemaciada, com obstrução bilateral.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"A loratadina é fraca para o meu nariz. Posso tomar duas?"' },
      { gatilho: 'Se falar em corticoide nasal', fala: '"Corticoide? Isso não faz mal?"' },
      { gatilho: 'No final', fala: '"E o spray de desentupir, posso usar quando estiver muito ruim?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Anti-H1: antagonista competitivo e reversível do receptor H1', pts: 1 },
        { tarefa: 1, item: 'Bloqueia os efeitos da histamina (espirros, coceira, coriza), com eficácia limitada sobre a congestão', pts: 1 },
        { tarefa: 2, item: 'Dobrar a dose não resolve: o limite é do mecanismo, restrito à histamina', pts: 1 },
        { tarefa: 2, item: 'Corticosteroide nasal (beclometasona, budesonida, fluticasona, mometasona, triancinolona): inibe a liberação de mediadores, a quimiotaxia de neutrófilos e a permeabilidade vascular, com vasoconstrição; alivia também a congestão, com efeitos colaterais mínimos; associar mantendo a loratadina', pts: 2 },
        { tarefa: 3, item: 'Descongestionante tópico é simpaticomimético (vasoconstrição); usado por mais de 3 a 5 dias causa rinite medicamentosa, com congestão rebote; só se estritamente necessário, por no máximo 3 a 5 dias', pts: 1 },
        { tarefa: 4, item: 'Orientou controle ambiental (gato fora do quarto, poeira) e explicou com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Orientar dobrar a dose do anti-histamínico para a congestão', 'Liberar o descongestionante tópico todo dia, sem limite de dias'],
    falaModelo: [
      { tarefa: 1, texto: 'A loratadina é um antagonista H1: compete com a histamina pelo receptor, de forma reversível, e bloqueia os efeitos dela, como espirros, coceira e coriza. Sobre a congestão, porém, a eficácia do anti-histamínico é limitada.', tempo: '20 s' },
      { tarefa: 2, texto: 'Dobrar a dose não resolve, porque o limite está no mecanismo, e não na dose. Para a congestão, o corticosteroide nasal é mais eficaz: inibe a liberação de mediadores inflamatórios, a quimiotaxia de neutrófilos e a permeabilidade vascular, e causa vasoconstrição, com efeitos colaterais mínimos. Associo o corticosteroide nasal e mantenho a loratadina.', tempo: '35 s' },
      { tarefa: 3, texto: 'O spray descongestionante é simpaticomimético: contrai os vasos e abre o nariz na hora, mas, usado por mais de 3 a 5 dias, causa rinite medicamentosa, com congestão rebote. Não deve ser usado todo dia; só se estritamente necessário, por no máximo 3 a 5 dias.', tempo: '25 s' },
      { tarefa: 4, texto: 'Patrícia, a loratadina é como um guarda que segura um só ladrão, a histamina; o nariz entupido tem outros culpados, e quem cuida deles é o spray de corticoide, com efeitos colaterais mínimos. O spray de desentupir é um alívio que cobra depois: usado direto, entope mais. E tirar o gato do quarto ajuda muito. Me conta: como você vai usar cada remédio?', tempo: '35 s', analogia: 'Guarda que segura um só ladrão' },
    ],
    extra: 'Quando a associação de descongestionante sistêmico com anti-histamínico é racional, e quem não deve usá-la? (Os mecanismos são diferentes, o que torna a associação racional; a pseudoefedrina não deve ser usada em hipertensos.)',
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
      'Quais reações adversas ela apresenta? Relacione com o medicamento e a via de administração.',
      'Que medida você toma em relação à via de administração? Em quem a via oral ainda tem lugar?',
      'O que a frequência de uso do broncodilatador indica? O que precisa ser associado, e por quê?',
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
    titulo: 'Palpitações e tontura em quem tem asma há 30 anos',
    local: 'Pronto atendimento', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Dona Eunice, 66 anos, asmática há 30 anos, chega ao pronto atendimento com palpitações e tontura. Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é a hipótese? Que reações do fármaco ela apresenta, e quais ainda podem acontecer?',
      'Por que esse fármaco é tão perigoso? Qual é a medida agora?',
      'Que lugar esse fármaco ocupa hoje no tratamento da asma? O que deveria ser a base do tratamento dela?',
      'Explique à Dona Eunice o que aconteceu e oriente o novo tratamento.',
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

  // ----------------------------------------------------- FAR-09 · Asma desencadeada por AINE
  {
    id: 'FAR-09', materia: 'farmaco',
    titulo: 'Chiado e falta de ar que começaram há pouco',
    local: 'Pronto atendimento', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sandra, 41 anos, com rinite alérgica e asma, chega ao pronto atendimento com chiado e falta de ar que começaram há pouco. Investigue o desencadeante, maneje a crise e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é a reação adversa, e qual fármaco a desencadeou? Que dado da história reforça?',
      'Considerando o que ela já usou em casa, qual é a medida agora? Por que não simplesmente aumentar a dose do broncodilatador?',
      'Que medidas evitam novos episódios? Que classe de antiasmático é ativa nesse tipo de asma?',
      'Explique à Sandra o que aconteceu e o que ela deve evitar.',
    ],
    anamnese: [
      { tema: 'Início e desencadeante', resposta: '"Começou uns 40 minutos depois que tomei ibuprofeno para cólica, há 2 horas."' },
      { tema: 'Reações anteriores', resposta: '"Uma vez passei mal com AAS também."' },
      { tema: 'O que já fez', resposta: '"Fiz 3 inalações de salbutamol em casa e melhorou pouco."' },
      { tema: 'Outros sintomas', resposta: '"O nariz começou a escorrer junto."' },
    ],
    placas: [
      { pedido: 'os sinais vitais e o exame', placa: 'FR 26 irpm · SatO₂ 93% · sibilos difusos · fala frases completas.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), só tomei um remédio para cólica e fiquei assim!"' },
      { gatilho: 'Se falar na bombinha', fala: '"Não é só eu usar mais vezes a bombinha?"' },
      { gatilho: 'No final', fala: '"Então nunca mais posso tomar anti-inflamatório?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Crise de asma (broncoespasmo) desencadeada por AINE, o ibuprofeno', pts: 1 },
        { tarefa: 1, item: 'Perguntou reações anteriores: o mal-estar com AAS reforça a sensibilidade a AINEs, num quadro de rinite e asma', pts: 1 },
        { tarefa: 2, item: 'Associar brometo de ipratrópio, anticolinérgico, de mecanismo distinto do beta-2 agonista', pts: 1 },
        { tarefa: 2, item: 'Não aumentar a dose do beta-2 agonista para compensar', pts: 1 },
        { tarefa: 3, item: 'Evitar AINEs, incluindo o AAS', pts: 1 },
        { tarefa: 3, item: 'Antileucotrienos são ativos na asma desencadeada por AINEs', pts: 1 },
        { tarefa: 4, item: 'Explicou em linguagem acessível e orientou informar a sensibilidade a anti-inflamatórios em todo atendimento', pts: 1 },
      ],
    },
    errosCriticos: ['Não relacionar a crise ao AINE', 'Aumentar a dose do salbutamol em vez de associar o ipratrópio'],
    falaModelo: [
      { tarefa: 1, texto: 'É uma crise de asma desencadeada pelo AINE, o ibuprofeno. Já ter passado mal com AAS reforça a sensibilidade a anti-inflamatórios, num quadro de rinite e asma.', tempo: '20 s' },
      { tarefa: 2, texto: 'Como ela não respondeu bem a várias inalações de beta-2, associo brometo de ipratrópio, que é anticolinérgico e age por outro mecanismo. Não adianta só aumentar a dose do beta-2: somo um segundo mecanismo.', tempo: '25 s' },
      { tarefa: 3, texto: 'Para prevenir, ela deve evitar AINEs, inclusive o AAS. E, entre os antiasmáticos, os antileucotrienos são ativos justamente na asma desencadeada por AINEs.', tempo: '20 s' },
      { tarefa: 4, texto: 'Sandra, o seu pulmão tem um alarme que dispara com anti-inflamatório: o remédio para cólica acionou esse alarme e fechou os brônquios. Por isso você deve evitar anti-inflamatórios e AAS, e avisar sobre isso em toda consulta e em toda farmácia. Agora vamos usar um segundo remédio de inalação, que abre os brônquios por outro caminho. Me conta: quais remédios você vai evitar?', tempo: '40 s', analogia: 'Alarme que dispara com anti-inflamatório' },
    ],
    extra: 'Quais associações prontas contêm ipratrópio? (Ipratrópio com fenoterol e ipratrópio com salbutamol.)',
  },

  // ----------------------------------------------------- FAR-10 · Corticoide oral crônico e osteoporose
  {
    id: 'FAR-10', materia: 'farmaco',
    titulo: 'A asmática que fraturou a coluna',
    local: 'Ambulatório de pneumologia', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Dona Lúcia, 58 anos, com asma grave, vem ao ambulatório depois de uma fratura na coluna. Investigue a relação com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual reação adversa explica a fratura? Relacione com o medicamento e explique o mecanismo.',
      'Que medidas você toma em relação ao medicamento e aos ossos?',
      'Como acompanhar? Que outros medicamentos também podem causar esse problema?',
      'Explique à paciente o que aconteceu e como o tratamento da asma pode proteger os ossos.',
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

  // ----------------------------------------------------- FAR-24 · Omalizumabe: trombocitopenia
  {
    id: 'FAR-24', materia: 'farmaco',
    titulo: 'Manchinhas vermelhas depois da injeção para a asma',
    local: 'Ambulatório de pneumologia', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Sr. Henrique, 42 anos, com asma alérgica grave, faz omalizumabe há 8 meses e antecipou o retorno porque apareceram "manchinhas vermelhas" nas pernas e a gengiva sangra ao escovar. Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é a hipótese? Relacione com o fármaco e cite as reações adversas comuns e as sérias dele.',
      'Como o omalizumabe age, e para quem ele é indicado?',
      'Qual é a medida agora? Por que o efeito do fármaco não acaba logo depois da última dose?',
      'Explique ao paciente o que pode ter acontecido e o que muda no tratamento da asma.',
    ],
    anamnese: [
      { tema: 'Medicamentos da asma', resposta: '"Faço a injeção de omalizumabe a cada 15 dias e uso a bombinha de corticoide todo dia."' },
      { tema: 'Sintomas novos', resposta: '"Há 1 semana apareceram pontinhos vermelhos nas pernas, e a gengiva sangra quando escovo."' },
      { tema: 'Outros sangramentos', resposta: '"Não vi sangue na urina nem nas fezes."' },
      { tema: 'Reações anteriores à injeção', resposta: '"Sempre fica vermelho e dolorido onde aplica. Às vezes tenho dor de cabeça e de garganta."' },
      { tema: 'Outros remédios', resposta: '"Não tomo anti-inflamatório nem outro remédio."' },
      { tema: 'Controle da asma', resposta: '"A asma melhorou muito com a injeção. Quase não uso a bombinha de alívio."' },
    ],
    placas: [
      { pedido: 'os sinais vitais e o exame da pele', placa: 'PA 122 × 78 mmHg · FC 80 bpm · petéquias nos membros inferiores.' },
      { pedido: 'o hemograma', placa: 'Hemoglobina 14 g/dL · leucócitos normais · plaquetas 38.000/mm³.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), essas manchas apareceram do nada."' },
      { gatilho: 'Se falar em suspender a injeção', fala: '"Mas foi a única coisa que segurou a minha asma!"' },
      { gatilho: 'No final', fala: '"Quando eu parar, isso some no outro dia?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou medicamentos e sintomas e pediu o hemograma: trombocitopenia (petéquias, sangramento gengival, plaquetas 38.000), reação adversa séria do omalizumabe', pts: 1 },
        { tarefa: 1, item: 'Comuns: reação no local, cefaleia, faringite, sinusite, infecção respiratória e doença viral · sérias: trombocitopenia, anafilaxia e câncer', pts: 1 },
        { tarefa: 2, item: 'Anticorpo monoclonal anti-IgE', pts: 1 },
        { tarefa: 2, item: 'Indicação: IgE sérica elevada e alergia grave sem controle com corticoide, de 11 a 50 anos', pts: 1 },
        { tarefa: 3, item: 'Suspender o omalizumabe e acompanhar as plaquetas, mantendo o corticoide inalatório', pts: 1 },
        { tarefa: 3, item: 'Absorção lenta e meia-vida de cerca de 26 dias: o efeito persiste semanas após a última dose, e o acompanhamento também', pts: 1 },
        { tarefa: 4, item: 'Acolheu o medo de perder o controle da asma, explicou com linguagem acessível e orientou procurar atendimento se houver sangramento', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o omalizumabe com plaquetas baixas', 'Tratar as petéquias como a reação local esperada'],
    falaModelo: [
      { tarefa: 1, texto: 'A hipótese é trombocitopenia: petéquias, sangramento gengival e plaquetas em 38 mil, uma reação adversa séria descrita para o omalizumabe. As comuns são reação no local, cefaleia, faringite, sinusite e infecções respiratórias, que ele já tinha; as sérias são trombocitopenia, anafilaxia e câncer.', tempo: '30 s' },
      { tarefa: 2, texto: 'O omalizumabe é um anticorpo monoclonal anti-IgE. É indicado na alergia grave sem controle com corticoide, com IgE sérica elevada, de 11 a 50 anos.', tempo: '20 s' },
      { tarefa: 3, texto: 'Suspendo o omalizumabe e acompanho as plaquetas, mantendo o corticoide inalatório para a asma. O fármaco tem absorção lenta e meia-vida de cerca de 26 dias, então o efeito continua por semanas depois da última dose, e o acompanhamento também.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Henrique, esse remédio ajudou muito a asma, mas pode baixar as plaquetas, que são como uma equipe de remendo que fecha os pequenos sangramentos. Por isso vamos parar a injeção e acompanhar o exame. Ele demora a sair do corpo, então a melhora não vem no dia seguinte. A bombinha de corticoide continua todo dia. Se tiver sangramento que não para, ou sangue na urina ou nas fezes, procure o pronto-socorro. Me conta: o que o senhor vai fazer daqui para frente?', tempo: '45 s', analogia: 'Plaquetas como equipe de remendo' },
    ],
    extra: 'Por que a reação no local da injeção não dispensa a vigilância? (Porque, além das reações comuns, o omalizumabe tem reações sérias descritas, como anafilaxia, trombocitopenia e câncer.)',
  },

  // ----------------------------------------------------- FAR-25 · Antileucotrieno no formato da prova: mecanismo, efeitos, riscos e uso racional
  {
    id: 'FAR-25', materia: 'farmaco',
    titulo: 'Quero continuar o comprimido da asma, porque corticoide eu não quero',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Jéssica, 22 anos, tem asma leve e vem renovar a receita de montelucaste, que usa há 6 meses. Explique como o medicamento age, seus efeitos e riscos, e oriente o uso. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Explique o mecanismo de ação dos antileucotrienos e seus efeitos terapêuticos.',
      'Quais reações adversas você investiga e monitora nela?',
      'Pela anamnese, ela pode continuar? Oriente o uso, incluindo o que fazer na crise.',
      'Explique à paciente, em linguagem simples.',
    ],
    anamnese: [
      { tema: 'Como usa', resposta: '"Um comprimido por dia, todo dia."' },
      { tema: 'Controle da asma', resposta: '"Chiado só de vez em quando, umas 2 vezes por mês. Não acordo à noite por falta de ar."' },
      { tema: 'Bombinha de alívio', resposta: '"Tenho a de salbutamol. Na última crise, tomei mais um comprimido em vez de usar a bombinha."' },
      { tema: 'Sono, humor e dor de cabeça', resposta: '"Durmo bem, o humor está normal e não tenho dor de cabeça."' },
      { tema: 'Barriga', resposta: '"Às vezes tenho uma dorzinha na barriga."' },
      { tema: 'Por que não quer corticoide', resposta: '"Tenho medo de corticoide. Minha tia tomou comprimido por anos e ficou com os ossos fracos."' },
    ],
    placas: [
      { pedido: 'a ausculta pulmonar', placa: 'Murmúrio vesicular presente, sem sibilos.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Só preciso da receita do montelucaste. Corticoide eu não quero."' },
      { gatilho: 'Se perguntar sobre efeitos', fala: '"Tem efeito colateral? Ninguém me falou."' },
      { gatilho: 'No final', fala: '"Na crise, é só tomar mais um comprimido, né?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Antagonista dos receptores de leucotrienos: os cisteinil-leucotrienos aumentam muco, edema, recrutamento de eosinófilos e contração do músculo liso', pts: 1 },
        { tarefa: 1, item: 'Terapia crônica, opção na asma leve sem glicocorticoide; sem ação imediata', pts: 1 },
        { tarefa: 2, item: 'Na asma, poucos efeitos adversos (dor abdominal, que ela relata); perguntou sobre cefaleia, tontura, depressão e insônia, descritas para a classe', pts: 1 },
        { tarefa: 3, item: 'Asma controlada, com alívio esporádico: pode continuar, monitorando humor, sono e cefaleia', pts: 1 },
        { tarefa: 3, item: 'Não reverte crise: na crise, beta-2 agonista de curta ação inalatório; comprimido a mais não ajuda', pts: 1 },
        { tarefa: 3, item: 'Se o alívio passar a ser usado 4 ou mais vezes por semana: indicar corticoide inalatório', pts: 1 },
        { tarefa: 4, item: 'Acolheu o medo do corticoide (o inalatório age com broncosseletividade, diferente do comprimido prolongado) e checou a compreensão', pts: 1 },
      ],
    },
    errosCriticos: ['Orientar tomar mais montelucaste na crise', 'Não investigar humor, sono e cefaleia'],
    falaModelo: [
      { tarefa: 1, texto: 'O montelucaste é um antagonista dos receptores de leucotrienos. Os cisteinil-leucotrienos aumentam o muco, o edema, o recrutamento de eosinófilos e a contração do músculo liso dos brônquios; bloqueando o receptor, o fármaco reduz esses efeitos. É uma terapia crônica, opção na asma leve sem corticoide, e não tem ação imediata.', tempo: '30 s' },
      { tarefa: 2, texto: 'Na asma ele tem poucos efeitos adversos, como a dor abdominal que ela relata. Mas a classe também tem cefaleia, tontura, depressão e insônia descritas, então pergunto e monitoro o humor, o sono e a dor de cabeça.', tempo: '20 s' },
      { tarefa: 3, texto: 'A asma está controlada, com uso esporádico do alívio, então ela pode continuar, monitorando esses efeitos. Na crise, o montelucaste não ajuda: ela deve usar o salbutamol inalatório. Se precisar do alívio 4 ou mais vezes por semana, o próximo passo é o corticoide inalatório.', tempo: '30 s' },
      { tarefa: 4, texto: 'Jéssica, esse comprimido é como um muro que se constrói devagar: protege ao longo dos dias, mas não segura uma enchente que já começou. Na crise, quem resolve é a bombinha de alívio. Se o humor mudar, se você dormir mal ou tiver dor de cabeça frequente, me avise, porque pode ser o remédio. E a bombinha de corticoide age direto nos brônquios, diferente do comprimido que a sua tia tomou por anos. Me conta: o que você faz numa crise?', tempo: '45 s', analogia: 'Muro que se constrói devagar' },
    ],
    extra: 'Quais são os antileucotrienos citados, e em que tipo de asma eles são especialmente ativos? (Montelucaste e zafirlucaste; na asma relacionada ao uso de AINEs.)',
  },

  // ----------------------------------------------------- FAR-26 · Comparação: mecanismo e reação adversa de cada antiasmático
  {
    id: 'FAR-26', materia: 'farmaco',
    titulo: 'Seis antiasmáticos: como agem e o que podem causar',
    local: 'Banca do OSCE — antiasmáticos', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador apresenta seis fármacos usados na asma e pede que você explique como cada um age, diga a principal reação adversa ou o principal cuidado e o lugar de cada um no tratamento.',
    mesa: [
      { tipo: 'texto', texto: 'Salbutamol · Budesonida inalatória · Teofilina · Brometo de ipratrópio · Montelucaste · Omalizumabe' },
    ],
    tarefas: [
      'Explique o mecanismo de ação de cada um.',
      'Qual é a principal reação adversa ou o principal cuidado de cada um?',
      'Quais servem para a crise e quais para o controle? E o salmeterol?',
      'O examinador pergunta: "Por que não dobrar o salbutamol no broncoespasmo grave que não cede?" Responda.',
    ],
    ator: [
      { gatilho: 'Examinador, na tarefa 2', fala: '"E a bombinha de corticoide, também enfraquece os ossos como o comprimido?"' },
      { gatilho: 'Examinador, na tarefa 3', fala: '"O salmeterol não serve para a crise também?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Salbutamol: beta-2 agonista, relaxa o músculo liso brônquico e estabiliza mastócitos · budesonida: corticoide inalatório, reverte a inflamação crônica com broncosseletividade · teofilina: relaxa o músculo liso', pts: 1 },
        { tarefa: 1, item: 'Ipratrópio: anticolinérgico · montelucaste: antagonista dos receptores de leucotrienos · omalizumabe: anticorpo monoclonal anti-IgE', pts: 1 },
        { tarefa: 2, item: 'Beta-2 por via oral: taquicardia, tremores e cãibras (preferir aerossol) · teofilina: baixo índice terapêutico; cefaleia, tontura, hipotensão, palpitações, náuseas e, em doses elevadas, convulsões e morte súbita', pts: 1 },
        { tarefa: 2, item: 'Montelucaste: cefaleia, tontura, depressão e insônia (na asma, poucos efeitos, como dor abdominal) · omalizumabe: reação local, cefaleia, faringite, sinusite; sérias: trombocitopenia, anafilaxia e câncer', pts: 1 },
        { tarefa: 2, item: 'Osteoporose secundária é do corticoide oral de uso prolongado; o inalatório age com broncosseletividade', pts: 1 },
        { tarefa: 3, item: 'Crise: salbutamol (curta ação) e, no broncoespasmo grave, ipratrópio associado · controle: budesonida, montelucaste, omalizumabe; teofilina só quando corticoide e cromoglicato não bastam · salmeterol: longa ação (mais de 12 h), não serve para alívio, associado ao corticoide', pts: 1 },
        { tarefa: 4, item: 'Associar ipratrópio, de mecanismo diferente, em vez de aumentar a dose do beta-2', pts: 1 },
      ],
    },
    errosCriticos: ['Indicar salmeterol ou montelucaste para aliviar a crise', 'Não citar o risco de convulsões e morte súbita da teofilina'],
    falaModelo: [
      { tarefa: 1, texto: 'O salbutamol é beta-2 agonista: relaxa o músculo liso dos brônquios e estabiliza mastócitos. A budesonida é corticoide inalatório e reverte a inflamação crônica com broncosseletividade. A teofilina relaxa o músculo liso. O ipratrópio é anticolinérgico. O montelucaste bloqueia os receptores de leucotrienos. O omalizumabe é um anticorpo anti-IgE.', tempo: '35 s' },
      { tarefa: 2, texto: 'O beta-2 por via oral causa taquicardia, tremores e cãibras; por isso, aerossol. A teofilina tem baixo índice terapêutico: cefaleia, tontura, hipotensão, palpitações, náuseas e, em doses altas, convulsões e morte súbita. O montelucaste pode causar cefaleia, tontura, depressão e insônia. O omalizumabe causa reação local, cefaleia e faringite, e tem reações sérias: trombocitopenia, anafilaxia e câncer. A osteoporose secundária é do corticoide oral prolongado; o inalatório age com broncosseletividade.', tempo: '45 s' },
      { tarefa: 3, texto: 'Para a crise: salbutamol e, no broncoespasmo grave, o ipratrópio associado. Para o controle: budesonida, montelucaste e omalizumabe; a teofilina só quando corticoide e cromoglicato não bastam. O salmeterol é de longa ação, dura mais de 12 horas, não serve para alívio e entra associado ao corticoide.', tempo: '30 s' },
      { tarefa: 4, texto: 'Porque somar um mecanismo diferente funciona melhor do que forçar o mesmo, como abrir a segunda tranca de uma porta emperrada em vez de empurrar mais forte. Associo o brometo de ipratrópio, anticolinérgico, sem aumentar a dose do beta-2.', tempo: '20 s', analogia: 'Abrir a segunda tranca em vez de empurrar mais forte' },
    ],
    extra: 'Quais beta-2 agonistas de curta ação os slides citam? (Albuterol, levalbuterol, metaproterenol, terbutalina, pirbuterol e salbutamol.)',
  },
);
