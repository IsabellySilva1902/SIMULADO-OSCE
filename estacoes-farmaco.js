// Estações de Farmacologia (FAR-01 a FAR-18): manejo de reações adversas.
// Formato da prova: reconhecer a reação, explicar o mecanismo, manejar (sem prescrever) e orientar.
// Nas estações com paciente, a anamnese é ativa: o paciente só conta o que for perguntado.
// FAR-01 a FAR-06: anti-histamínicos e rinite · FAR-07 a FAR-11: asma · FAR-12 a FAR-18: outros temas.
ESTACOES.push(
  // ===================================================== ANTI-HISTAMÍNICOS E RINITE
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
    titulo: 'A pressão subiu depois do antigripal',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Seu Nelson, 63 anos, hipertenso, mediu a pressão na farmácia e ela está bem acima do habitual. Ele acha que precisa aumentar o remédio da pressão. Investigue, maneje e oriente o paciente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Que reação adversa ele apresenta, e qual é o mecanismo?',
      'Que medida você toma? É o caso de aumentar o remédio da pressão?',
      'Como tratar a congestão dele com segurança? E o spray descongestionante nasal, que ele pensa em usar no lugar?',
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

  // ----------------------------------------------------- FAR-06 · Comparação: reações adversas no tratamento da rinite
  {
    id: 'FAR-06', materia: 'farmaco',
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

  // ===================================================== ASMA
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

  // ----------------------------------------------------- FAR-09 · Asma desencadeada por AINE
  {
    id: 'FAR-09', materia: 'farmaco',
    titulo: 'O chiado começou depois do comprimido para cólica',
    local: 'Pronto atendimento', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sandra, 41 anos, com rinite alérgica e asma, chega ao pronto atendimento com chiado e falta de ar que começaram há pouco. Investigue o desencadeante, maneje a crise e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é a reação adversa, e qual fármaco a desencadeou? Que dado da história reforça?',
      'Ela já fez 3 inalações de salbutamol sem boa resposta. Qual é a medida agora, e por que não simplesmente aumentar a dose do salbutamol?',
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

  // ===================================================== OUTROS TEMAS
  // ----------------------------------------------------- FAR-12 · Opioide no idoso: depressão respiratória e constipação
  {
    id: 'FAR-12', materia: 'farmaco',
    titulo: 'Sonolenta, confusa e sem evacuar desde a morfina',
    local: 'Enfermaria de clínica médica', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Dona Aurora, 81 anos, internada por dor intensa no quadril, está muito sonolenta, e a filha, Dona Fátima, está assustada. Avalie, relacione com os medicamentos e conduza. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Quais reações adversas ela apresenta, e por que ela é mais vulnerável?',
      'Qual é a medida imediata para a depressão respiratória? Que cuidado ela exige depois?',
      'Que medidas você toma em relação ao clonazepam e à constipação?',
      'Explique à filha o que aconteceu e o que muda no tratamento da dor.',
    ],
    anamnese: [
      { tema: 'Medicamentos', resposta: 'Filha: "Começaram morfina há 3 dias, porque o paracetamol não resolvia. E ela toma clonazepam à noite há anos."' },
      { tema: 'Desde quando está assim', resposta: 'Filha: "Desde ontem está sonolenta e confusa. Desde a noite passada, respira devagar."' },
      { tema: 'Intestino', resposta: 'Filha: "Não evacua há 3 dias."' },
      { tema: 'Como era antes', resposta: 'Filha: "Era lúcida e conversava normalmente."' },
    ],
    placas: [
      { pedido: 'os sinais vitais', placa: 'FR 9 irpm · SatO₂ 89% em ar ambiente · PA 98 × 60 mmHg.' },
      { pedido: 'o exame neurológico', placa: 'Pupilas mióticas. Desperta ao chamado alto, mas volta a dormir.' },
      { pedido: 'o exame do abdome', placa: 'Distendido, sem sinais de obstrução.' },
    ],
    ator: [
      { gatilho: 'Filha, ao se apresentar', fala: '"Minha mãe não acorda direito e está respirando devagar!"' },
      { gatilho: 'Filha, depois da naloxona', fala: '"Ela acordou! Já pode ir para casa?"' },
      { gatilho: 'Filha, no final', fala: '"Ela vai voltar a sentir dor?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Depressão respiratória, sedação com confusão, hipotensão e constipação pelo opioide', pts: 1 },
        { tarefa: 1, item: 'Perguntou os medicamentos: o clonazepam (sedativo) intensifica a depressão do SNC; idosos sedam com mais facilidade; constipação pela diminuição do peristaltismo', pts: 1 },
        { tarefa: 2, item: 'Garantir via aérea e ventilação; naloxona intravenosa lenta, repetindo se necessário', pts: 2 },
        { tarefa: 2, item: 'A naloxona dura menos que muitos opioides: manter monitorização, porque a depressão pode voltar', pts: 1 },
        { tarefa: 3, item: 'Rever o sedativo associado (clonazepam), que potencializa a depressão central', pts: 1 },
        { tarefa: 3, item: 'Terapia laxante para a constipação induzida pelo opioide', pts: 1 },
        { tarefa: 4, item: 'Explicou à filha em linguagem acessível, sem culpa, e garantiu que a dor continuará sendo tratada', pts: 1 },
      ],
    },
    errosCriticos: ['Não reconhecer a depressão respiratória', 'Liberar a paciente logo após a naloxona, sem monitorização'],
    falaModelo: [
      { tarefa: 1, texto: 'Ela tem depressão respiratória, sedação com confusão, hipotensão e constipação, todas reações do opioide. Idosos sedam com mais facilidade, e o clonazepam, outro depressor central, intensifica a depressão do sistema nervoso e da respiração. A constipação vem da diminuição do peristaltismo.', tempo: '30 s' },
      { tarefa: 2, texto: 'Primeiro garanto via aérea e ventilação. Depois faço naloxona intravenosa lenta, repetindo se necessário. Como a ação da naloxona é mais curta que a de muitos opioides, mantenho a paciente monitorizada, porque a depressão pode voltar.', tempo: '25 s' },
      { tarefa: 3, texto: 'Revejo o clonazepam, porque somado à morfina potencializa a depressão central. E inicio terapia laxante para a constipação induzida pelo opioide.', tempo: '15 s' },
      { tarefa: 4, texto: 'Dona Fátima, o remédio da dor e o remédio de dormir somaram forças, como dois freios puxados ao mesmo tempo, e a respiração da sua mãe ficou lenta. O antídoto age rápido, mas dura pouco, por isso ela vai ficar em observação. A dor continua sendo tratada, com mais cuidado com o remédio de dormir e com o intestino. Me conta o que a senhora entendeu?', tempo: '35 s', analogia: 'Dois freios puxados ao mesmo tempo' },
    ],
    extra: 'Por que a urticária por opioide aparece mais com a via venosa? (É reação adversa mais frequente na administração parenteral do que na oral.)',
  },

  // ----------------------------------------------------- FAR-13 · AINE: lesão renal e risco hemorrágico
  {
    id: 'FAR-13', materia: 'farmaco',
    titulo: 'Pernas inchadas e creatinina subindo',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) clínico(a)', interacao: 'paciente',
    cenario: 'Seu Raimundo, 74 anos, hipertenso, veio porque as pernas incharam e a creatinina subiu nos exames de rotina. Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Que reação adversa explica o edema e a creatinina? Qual é o mecanismo, e por que o diurético piora?',
      'Que outro risco grave a combinação de medicamentos dele traz?',
      'Que medidas você toma? Como tratar a dor do joelho?',
      'Explique ao paciente e oriente sobre o uso de anti-inflamatórios.',
    ],
    anamnese: [
      { tema: 'Medicamentos de uso contínuo', resposta: '"Tomo diurético há anos e varfarina por arritmia."' },
      { tema: 'Remédios por conta própria', resposta: '"Para a dor no joelho, tomo ibuprofeno todo dia há 2 meses. Comprei na farmácia."' },
      { tema: 'Dor', resposta: '"É a artrose do joelho. Sem o ibuprofeno, dói para andar."' },
      { tema: 'Sangramentos', resposta: '"Às vezes a gengiva sangra quando escovo os dentes."' },
      { tema: 'Falta de ar', resposta: '"Não sinto falta de ar, nem para deitar."' },
    ],
    placas: [
      { pedido: 'os exames', placa: 'Creatinina 1,8 mg/dL (há 6 meses: 1,0 mg/dL).' },
      { pedido: 'o exame físico', placa: 'Edema de membros inferiores 2+/4+. PA 148 × 88 mmHg. Ausculta pulmonar limpa.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), as pernas incharam. É o coração?"' },
      { gatilho: 'Se falar em parar o ibuprofeno', fala: '"Mas é o único que tira a dor do joelho!"' },
      { gatilho: 'No final', fala: '"E se eu tomar só de vez em quando?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou a automedicação: comprometimento renal pelo ibuprofeno (inibição das prostaglandinas vasodilatadoras renais)', pts: 1 },
        { tarefa: 1, item: 'Efeito somado ao do diurético, explicando a piora do edema e a elevação da creatinina', pts: 1 },
        { tarefa: 2, item: 'AINE + anticoagulante (varfarina): maior risco de hemorragia; associação a evitar', pts: 1 },
        { tarefa: 3, item: 'Suspender o AINE e monitorizar a função renal', pts: 1 },
        { tarefa: 3, item: 'Priorizar o paracetamol para a dor (sem risco de sangramento gastrointestinal)', pts: 1 },
        { tarefa: 3, item: 'Medidas não farmacológicas: atividade física adequada ao perfil dele', pts: 1 },
        { tarefa: 4, item: 'Orientou não usar anti-inflamatório por conta própria, com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o AINE com a creatinina em elevação', 'Não reconhecer o risco de hemorragia com a varfarina'],
    falaModelo: [
      { tarefa: 1, texto: 'É comprometimento renal pelo AINE. Os AINEs inibem as prostaglandinas vasodilatadoras dos rins; somado ao diurético, isso piora a função renal, o edema e eleva a creatinina.', tempo: '20 s' },
      { tarefa: 2, texto: 'Ele também usa varfarina, e AINE com anticoagulante aumenta o risco de hemorragia. É uma associação a evitar.', tempo: '15 s' },
      { tarefa: 3, texto: 'Suspendo o ibuprofeno e acompanho a função renal. Para a dor do joelho, priorizo o paracetamol, que não tem risco de sangramento gastrointestinal, e associo atividade física adequada ao perfil dele.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Raimundo, o anti-inflamatório fecha um pouco a torneira que leva sangue aos rins; junto com o diurético, os rins trabalharam menos e as pernas incharam. Com o remédio que afina o sangue, ele ainda aumenta o risco de sangramento. Vamos parar o ibuprofeno, tratar a dor com paracetamol e exercícios, e repetir os exames. Não tome anti-inflamatório por conta própria, nem de vez em quando. Me conta o que o senhor vai mudar?', tempo: '45 s', analogia: 'Torneira que leva sangue aos rins' },
    ],
    extra: 'E se ele fosse etilista? (O paracetamol exige cautela: há risco de comprometimento hepático, com elevação de transaminases.)',
  },

  // ----------------------------------------------------- FAR-14 · AINE: úlcera e sangramento
  {
    id: 'FAR-14', materia: 'farmaco',
    titulo: 'Fezes escuras depois do remédio da cólica',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) clínico(a)', interacao: 'paciente',
    cenario: 'Juliana, 27 anos, vem ao ambulatório com queimação no estômago e o resultado da endoscopia feita ontem. Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual reação adversa ela apresenta? Por que o AINE lesa a mucosa gástrica?',
      'Que medidas você toma agora? Como o sucralfato pode somar ao tratamento?',
      'Se ela precisar de anti-inflamatório no futuro, como reduzir o risco gástrico? O misoprostol é uma boa opção para ela?',
      'Explique à paciente e oriente os sinais de alarme.',
    ],
    anamnese: [
      { tema: 'Medicamentos', resposta: '"Tomo naproxeno quase todo dia há 3 meses, para cólica e dor nas costas."' },
      { tema: 'Sintomas', resposta: '"Há 2 semanas tenho queimação na boca do estômago. Há 2 dias as fezes ficaram escuras."' },
      { tema: 'Sinais de gravidade', resposta: '"Não vomitei sangue nem desmaiei."' },
      { tema: 'Planos de gravidez', resposta: '"Quero engravidar no ano que vem."' },
      { tema: 'Outros remédios', resposta: '"Não tomo anticoagulante nem outro remédio."' },
    ],
    placas: [
      { pedido: 'os sinais vitais', placa: 'PA 116 × 72 mmHg · FC 86 bpm.' },
      { pedido: 'a endoscopia e a pesquisa de H. pylori', placa: 'Úlcera gástrica sem sangramento ativo; H. pylori negativo.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Achei que anti-inflamatório era remédio leve, doutor(a)."' },
      { gatilho: 'Se citar o misoprostol', fala: '"Esse remédio tem algum problema para quem quer engravidar?"' },
      { gatilho: 'No final', fala: '"E se as fezes ficarem pretas de novo?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Úlcera gástrica por AINE, com sinal de sangramento (fezes escurecidas)', pts: 1 },
        { tarefa: 1, item: 'AINE inibe as prostaglandinas que protegem a mucosa; os não seletivos (COX-1 e COX-2) têm maior risco gastrointestinal', pts: 1 },
        { tarefa: 2, item: 'Suspender o AINE (retirar o fator etiológico): sem isso, a úlcera recidiva', pts: 1 },
        { tarefa: 2, item: 'IBP para reduzir a secreção ácida e cicatrizar; sucralfato forma barreira aderente sobre a lesão (citoproteção local), complementar ao IBP', pts: 1 },
        { tarefa: 3, item: 'Seletivo da COX-2 reduz parte da toxicidade gastrointestinal (cautela se houver risco cardiovascular); proteção com IBP', pts: 1 },
        { tarefa: 3, item: 'Perguntou os planos de gravidez: o misoprostol provoca contrações uterinas, cautela em quem planeja engravidar', pts: 1 },
        { tarefa: 4, item: 'Sinais de alarme: fezes escurecidas e vômito com sangue, mesmo sem dor intensa → procurar a emergência', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o AINE', 'Indicar misoprostol sem considerar o desejo de gravidez'],
    falaModelo: [
      { tarefa: 1, texto: 'É uma úlcera gástrica causada pelo AINE, já com sinal de sangramento, as fezes escurecidas. O AINE inibe as prostaglandinas que protegem a mucosa do estômago; os não seletivos, como o naproxeno, bloqueiam COX-1 e COX-2 e têm maior risco gastrointestinal.', tempo: '30 s' },
      { tarefa: 2, texto: 'Suspendo o naproxeno, porque sem retirar a causa a úlcera volta. Uso inibidor da bomba de prótons, que reduz a secreção ácida e permite a cicatrização. O sucralfato pode somar: forma uma barreira aderente sobre a lesão, uma proteção local que complementa o IBP.', tempo: '30 s' },
      { tarefa: 3, texto: 'Se ela precisar de anti-inflamatório no futuro, um seletivo da COX-2 reduz parte do risco gástrico, com cautela se houver risco cardiovascular, e posso proteger com IBP. O misoprostol eu evitaria: ele provoca contrações uterinas, e ela quer engravidar.', tempo: '25 s' },
      { tarefa: 4, texto: 'Juliana, o anti-inflamatório tira a camada de proteção do estômago, como tirar o verniz de uma mesa: o ácido passa a corroer a madeira. Vamos parar o naproxeno e usar um remédio que diminui o ácido até a ferida fechar. Se as fezes ficarem pretas de novo, ou se vomitar sangue, mesmo sem dor, vá à emergência. Me conta: quais sinais fazem você procurar ajuda?', tempo: '40 s', analogia: 'Verniz que protege a madeira' },
    ],
    extra: 'Qual a diferença entre gastrite e úlcera? (A gastrite é mais superficial; a úlcera penetra a camada muscular da mucosa.)',
  },

  // ----------------------------------------------------- FAR-15 · Alendronato: esofagite; cálcio: constipação
  {
    id: 'FAR-15', materia: 'farmaco',
    titulo: 'Queimação no peito desde o remédio do osso',
    local: 'Ambulatório de clínica médica', papel: 'Médico(a) clínico(a)', interacao: 'paciente',
    cenario: 'Dona Cida, 69 anos, com osteoporose, sente queimação no peito desde que começou o remédio para os ossos. Investigue como ela usa os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual reação adversa explica a queimação e a dor ao engolir? Por que ela aconteceu?',
      'Ensine a paciente a tomar o alendronato, explicando o motivo dos cuidados.',
      'E o cálcio? Como manejar a constipação e como tomá-lo?',
      'Se a esofagite fosse grave, ou se ela tivesse úlcera péptica, qual seria a alternativa? Explique o plano à paciente.',
    ],
    anamnese: [
      { tema: 'Remédios para o osso', resposta: '"Há 2 meses tomo alendronato uma vez por semana e carbonato de cálcio."' },
      { tema: 'Como toma o alendronato', resposta: '"Tomo com café com leite, junto com os outros remédios, e volto a deitar."' },
      { tema: 'Como toma o cálcio', resposta: '"O cálcio eu tomo em jejum, ao acordar."' },
      { tema: 'Sintomas', resposta: '"Queimação atrás do peito e dor para engolir. E o intestino está preso."' },
      { tema: 'Úlcera e estômago', resposta: '"Nunca tive úlcera."' },
    ],
    placas: [],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), desde esse remédio do osso parece que engoli fogo."' },
      { gatilho: 'Se explicar como tomar', fala: '"Mas eu tomo todos os remédios juntos com o café, para não esquecer."' },
      { gatilho: 'No final', fala: '"Não posso só parar esse remédio?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou como ela toma: esofagite pelo alendronato por uso incorreto (com café com leite e deitando em seguida)', pts: 1 },
        { tarefa: 2, item: 'Em jejum, só com água, e permanecer ereta por pelo menos 30 minutos', pts: 1 },
        { tarefa: 2, item: 'Ficar ereta evita o refluxo do comprimido e a esofagite', pts: 1 },
        { tarefa: 3, item: 'Carbonato de cálcio com as refeições: absorção melhor em pH ácido', pts: 1 },
        { tarefa: 3, item: 'Constipação é reação adversa conhecida do cálcio: aumentar a ingestão de água e fibras', pts: 1 },
        { tarefa: 4, item: 'Alternativa sem passar pelo esôfago: calcitonina intranasal (inibe os osteoclastos)', pts: 1 },
        { tarefa: 4, item: 'Explicou que o problema está na forma de tomar, não na necessidade de tratar, com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Suspender o tratamento da osteoporose sem orientar o uso correto', 'Não orientar a posição ereta após o comprimido'],
    falaModelo: [
      { tarefa: 1, texto: 'É esofagite pelo alendronato. Ela toma com café com leite e volta a deitar, e o comprimido acaba irritando o esôfago.', tempo: '15 s' },
      { tarefa: 2, texto: 'O alendronato deve ser tomado em jejum, só com água, e ela deve ficar em pé ou sentada por pelo menos 30 minutos. Ficar ereta evita o refluxo do comprimido e a esofagite.', tempo: '20 s' },
      { tarefa: 3, texto: 'O carbonato de cálcio é absorvido melhor em meio ácido, então deve ser tomado com as refeições, e não em jejum. A constipação é uma reação adversa conhecida: oriento mais água e mais fibras.', tempo: '25 s' },
      { tarefa: 4, texto: 'Se a esofagite fosse grave, ou se ela tivesse úlcera péptica, eu usaria calcitonina intranasal, que inibe os osteoclastos sem passar pelo esôfago. Dona Cida, o remédio é bom para os ossos; o problema está no jeito de tomar. Ele precisa descer direto, como um elevador sem paradas, e não ficar parado no meio do caminho. Por isso: só com água, em jejum, e sem deitar por meia hora. O cálcio, junto com o almoço. Me conta como a senhora vai tomar cada um?', tempo: '45 s', analogia: 'Elevador sem paradas' },
    ],
    extra: 'O que acompanhar no seguimento? (DEXA, novas fraturas, dor óssea e sintomas gastrointestinais associados à medicação.)',
  },

  // ----------------------------------------------------- FAR-16 · Carbamazepina: efeitos adversos e interação com anticoncepcional
  {
    id: 'FAR-16', materia: 'farmaco',
    titulo: 'Visão dupla e medo de a pílula falhar',
    local: 'Ambulatório de neurologia', papel: 'Médico(a)', interacao: 'paciente',
    cenario: 'Renata, 26 anos, tem epilepsia focal em tratamento e veio com visão dupla e uma dúvida sobre a pílula. Investigue, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Quais reações adversas da carbamazepina ela apresenta? Que reações graves você precisa lembrar e vigiar?',
      'Ela tem razão sobre a pílula? Explique o mecanismo e a medida.',
      'Se for trocar o anticonvulsivante, que opção de 2ª geração tem bom perfil para ela? Que trocas seriam ruins, e por quê?',
      'Explique à Renata e responda à preocupação dela.',
    ],
    anamnese: [
      { tema: 'Tratamento da epilepsia', resposta: '"Uso carbamazepina há 6 meses, sem crises. Aumentaram a dose há 2 semanas."' },
      { tema: 'Sintomas novos', resposta: '"Desde o aumento, vejo tudo dobrado e fico tonta."' },
      { tema: 'Contracepção', resposta: '"Tomo anticoncepcional oral. Li na internet que o remédio da epilepsia corta o efeito da pílula."' },
      { tema: 'Planos de gravidez', resposta: '"Não quero engravidar agora."' },
      { tema: 'Pele', resposta: '"Não apareceu mancha nem bolha na pele."' },
    ],
    placas: [
      { pedido: 'o exame neurológico', placa: 'Sem déficits focais.' },
      { pedido: 'os exames', placa: 'Sódio 129 mEq/L · hemograma normal.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Estou vendo tudo dobrado, doutor(a). E li que esse remédio corta a pílula."' },
      { gatilho: 'Se falar em trocar o remédio', fala: '"Mas estou sem crises! Não é arriscado trocar?"' },
      { gatilho: 'No final', fala: '"Posso parar o remédio por conta própria até a consulta?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou desde quando: diplopia, tontura e hiponatremia surgidas após o aumento da dose', pts: 1 },
        { tarefa: 1, item: 'Vigiar reações graves: síndrome de Stevens-Johnson / necrólise epidérmica tóxica e discrasias sanguíneas', pts: 1 },
        { tarefa: 2, item: 'Sim: a carbamazepina é forte indutora enzimática e reduz os níveis do anticoncepcional', pts: 1 },
        { tarefa: 2, item: 'Orientar que a pílula pode falhar e discutir a contracepção junto com a escolha do anticonvulsivante', pts: 1 },
        { tarefa: 3, item: 'Levetiracetam: amplo espectro, poucas interações, eliminação renal (limitação típica: irritabilidade)', pts: 1 },
        { tarefa: 3, item: 'Trocas ruins: oxcarbazepina (também causa hiponatremia e reduz a eficácia do anticoncepcional) e valproato (alta teratogenicidade)', pts: 1 },
        { tarefa: 4, item: 'Orientou não suspender o anticonvulsivante por conta própria e procurar atendimento se surgirem lesões de pele', pts: 1 },
      ],
    },
    errosCriticos: ['Dizer que a pílula continua segura com a carbamazepina', 'Trocar por oxcarbazepina para resolver a hiponatremia'],
    falaModelo: [
      { tarefa: 1, texto: 'Ela tem diplopia, tontura e hiponatremia, efeitos da carbamazepina que apareceram depois do aumento da dose. Preciso lembrar e vigiar as reações graves: síndrome de Stevens-Johnson e necrólise epidérmica tóxica, que aparecem na pele, e discrasias sanguíneas.', tempo: '30 s' },
      { tarefa: 2, texto: 'Ela tem razão. A carbamazepina é uma forte indutora enzimática: acelera o metabolismo de outros fármacos e reduz os níveis do anticoncepcional, que pode falhar. A contracepção precisa ser discutida junto com o anticonvulsivante.', tempo: '25 s' },
      { tarefa: 3, texto: 'Uma boa opção de segunda geração é o levetiracetam: amplo espectro, poucas interações e eliminação renal; a limitação típica é a irritabilidade. Seriam trocas ruins a oxcarbazepina, que também causa hiponatremia e pode reduzir a eficácia do anticoncepcional, e o valproato, pela alta teratogenicidade numa mulher jovem.', tempo: '35 s' },
      { tarefa: 4, texto: 'Renata, esse remédio acelera a "fábrica" do fígado que desmancha outros remédios, e a pílula é desmanchada antes de fazer efeito; por isso ela pode falhar. A visão dupla, a tontura e o sódio baixo vieram do aumento da dose. Não pare o remédio por conta própria: vamos planejar a troca por um com menos interações e conversar sobre a contracepção. Se aparecerem manchas ou bolhas na pele, procure atendimento na hora. Me conta o que você entendeu?', tempo: '45 s', analogia: 'Fábrica do fígado que desmancha a pílula antes do efeito' },
    ],
    extra: 'Que tipo de crise a carbamazepina pode piorar? (Crises de ausência e algumas epilepsias generalizadas.)',
  },

  // ----------------------------------------------------- FAR-17 · Comparação: reações adversas dos anticonvulsivantes
  {
    id: 'FAR-17', materia: 'farmaco',
    titulo: 'Cinco anticonvulsivantes, cinco reações',
    local: 'Banca do OSCE — reações adversas', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador apresenta cinco pacientes em uso de anticonvulsivantes, cada um com uma reação adversa, e pede que você identifique o fármaco provável e diga como prevenir ou manejar.',
    mesa: [
      { tipo: 'texto', texto: 'Paciente A — gengiva crescida, aumento de pelos no rosto, nistagmo e marcha instável.\n\nPaciente B — mulher de 24 anos com ganho de peso, náusea e enzimas hepáticas elevadas; planeja engravidar.\n\nPaciente C — manchas avermelhadas na pele 3 semanas após iniciar um anticonvulsivante, com titulação rápida e uso associado de valproato.\n\nPaciente D — idoso sonolento, lentificado e com piora da memória desde que começou um anticonvulsivante antigo e barato.\n\nPaciente E — criança com crises de ausência, em uso do fármaco de escolha, com náusea, dor abdominal e cansaço.' },
    ],
    tarefas: [
      'Qual fármaco provavelmente causou cada quadro?',
      'Quais reações são graves ou exigem decisão imediata? Que outras reações de A e D você lembra?',
      'Que medidas previnem ou manejam cada uma?',
      'Por que os de 2ª geração são, em geral, a primeira escolha?',
    ],
    ator: [
      { gatilho: 'Examinador, no paciente C', fala: '"É só uma alergia de pele, pode manter, não?"' },
      { gatilho: 'Examinador, no paciente E', fala: '"Vale trocar a etossuximida por causa da náusea?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'A: fenitoína · B: valproato · C: lamotrigina · D: fenobarbital · E: etossuximida', pts: 2 },
        { tarefa: 2, item: 'Graves: rash da lamotrigina (risco de SJS); hepatotoxicidade e pancreatite do valproato; alta teratogenicidade do valproato em quem planeja engravidar', pts: 1 },
        { tarefa: 2, item: 'Fenitoína: também doença óssea (compromete a vitamina D) · Fenobarbital: tolerância, dependência e depressão respiratória', pts: 1 },
        { tarefa: 3, item: 'C: lesão de pele exige avaliação imediata; prevenção com titulação lenta, risco maior com valproato · B: rever o valproato antes da gravidez', pts: 1 },
        { tarefa: 3, item: 'D: sedação e prejuízo cognitivo limitam o uso crônico; lamotrigina tem poucos efeitos cognitivos (atrativa em idosos) · A: monitorização sérica · E: RAMs comuns; continua sendo o fármaco de escolha na ausência típica', pts: 1 },
        { tarefa: 4, item: '2ª geração: eficácia semelhante, farmacocinética mais simples, faixa terapêutica mais ampla, menos interações e menor incidência global de RAMs', pts: 1 },
      ],
    },
    errosCriticos: ['Manter a lamotrigina sem avaliação diante de lesão de pele', 'Não considerar a teratogenicidade do valproato na paciente B'],
    falaModelo: [
      { tarefa: 1, texto: 'A é fenitoína; B, valproato; C, lamotrigina; D, fenobarbital; e E, etossuximida.', tempo: '10 s' },
      { tarefa: 2, texto: 'Exigem decisão imediata o rash da lamotrigina, pelo risco de Stevens-Johnson, e, no valproato, a hepatotoxicidade e a pancreatite, além da alta teratogenicidade numa mulher que quer engravidar. Lembro também que a fenitoína causa doença óssea, porque compromete a vitamina D, e que o fenobarbital pode causar tolerância, dependência e depressão respiratória.', tempo: '35 s' },
      { tarefa: 3, texto: 'Na lamotrigina, a lesão de pele precisa de avaliação imediata; a prevenção é a titulação lenta, e o risco é maior com valproato associado. Na paciente B, revejo o valproato antes da gravidez. No idoso, a sedação e o prejuízo cognitivo do fenobarbital limitam o uso crônico; a lamotrigina, com poucos efeitos cognitivos, é atrativa em idosos. A fenitoína tem farmacocinética complexa e precisa de monitorização sérica. E a etossuximida tem efeitos comuns, mas continua sendo o fármaco de escolha para ausência típica.', tempo: '50 s' },
      { tarefa: 4, texto: 'Os de segunda geração têm eficácia semelhante, farmacocinética mais simples, faixa terapêutica mais ampla, menos interações e menor incidência global de reações adversas. Os de primeira geração são como um carro potente que vive na oficina; os de segunda, tão bons quanto e mais fáceis de manter.', tempo: '25 s', analogia: 'Carro potente que vive na oficina' },
    ],
    extra: 'Qual é a limitação típica do levetiracetam? (Irritabilidade e outros efeitos comportamentais.)',
  },

  // ----------------------------------------------------- FAR-18 · Antiácidos e IBP: alterações do hábito intestinal
  {
    id: 'FAR-18', materia: 'farmaco',
    titulo: 'O intestino desandou com os remédios do estômago',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Seu Jorge, 58 anos, com doença do refluxo, vem com diarreia há 3 semanas. A esposa, Dona Neide, veio junto e também tem uma queixa. Investigue, relacione com os medicamentos, maneje e oriente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Que reações adversas explicam o quadro de cada um? Qual é o mecanismo da diarreia dele?',
      'O omeprazol também pode contribuir para a diarreia? Como?',
      'Que medida você toma? Qual é o papel do antiácido para quem já usa IBP?',
      'Explique ao casal a diferença entre os remédios.',
    ],
    anamnese: [
      { tema: 'Remédios do Seu Jorge', resposta: '"Tomo omeprazol há 2 meses e a queimação melhorou muito. Mesmo assim, tomo um antiácido de magnésio 4 a 5 vezes ao dia, por garantia."' },
      { tema: 'Diarreia', resposta: '"São 3 a 4 evacuações líquidas por dia, sem febre e sem sangue."' },
      { tema: 'Queixa da Dona Neide', resposta: 'Dona Neide: "Eu uso um antiácido de alumínio e estou com o intestino preso."' },
      { tema: 'Alimentação e contatos', resposta: '"Não comi nada diferente e ninguém em casa teve diarreia."' },
    ],
    placas: [
      { pedido: 'o exame físico do Seu Jorge', placa: 'Hidratado, afebril, abdome indolor, ruídos hidroaéreos aumentados.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), o refluxo melhorou, mas agora vivo no banheiro."' },
      { gatilho: 'Se falar em parar o antiácido', fala: '"Mas é a minha garantia, e se a queimação voltar?"' },
      { gatilho: 'Dona Neide, no final', fala: '"E o meu, que prende o intestino?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou todos os remédios: diarreia osmótica do Seu Jorge pelo antiácido à base de magnésio', pts: 1 },
        { tarefa: 1, item: 'Dona Neide: constipação pelo antiácido à base de alumínio', pts: 1 },
        { tarefa: 2, item: 'IBP, ao reduzir a secreção ácida, pode alterar a flora intestinal e favorecer diarreia em alguns pacientes', pts: 1 },
        { tarefa: 3, item: 'Antiácido neutraliza o ácido já presente: alívio imediato, mas não é o tratamento definitivo; com o IBP funcionando, suspender o uso contínuo "por garantia"', pts: 1 },
        { tarefa: 3, item: 'O IBP bloqueia a bomba de prótons e controla a secreção ácida: é ele que trata o refluxo', pts: 1 },
        { tarefa: 4, item: 'Explicou com linguagem acessível a diferença entre o remédio de alívio e o de tratamento', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar a diarreia sem relacioná-la ao antiácido de magnésio', 'Manter o antiácido em uso contínuo "por garantia"'],
    falaModelo: [
      { tarefa: 1, texto: 'No Seu Jorge, a diarreia vem do antiácido à base de magnésio, que causa diarreia osmótica, puxando água para o intestino. Na Dona Neide, o antiácido à base de alumínio causa constipação.', tempo: '20 s' },
      { tarefa: 2, texto: 'Pode. O IBP reduz a secreção ácida e, com isso, pode alterar a flora intestinal e favorecer diarreia em alguns pacientes. Aqui, porém, o principal suspeito é o magnésio, usado várias vezes ao dia.', tempo: '20 s' },
      { tarefa: 3, texto: 'O antiácido só neutraliza o ácido que já está no estômago: dá alívio imediato, mas não trata o refluxo. Quem trata é o omeprazol, que bloqueia a bomba de prótons. Como ele está bem com o IBP, suspendo o antiácido de uso contínuo e reavalio a diarreia.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Jorge, o omeprazol é como fechar a torneira do ácido; o antiácido é um pano para enxugar o que já caiu. Com a torneira fechada, o senhor não precisa ficar enxugando, e esse pano, à base de magnésio, solta o intestino. Dona Neide, o seu é à base de alumínio, que costuma prender. Me contem: quem vai mudar o quê?', tempo: '35 s', analogia: 'Torneira fechada × pano para enxugar' },
    ],
    extra: 'Qual é o alvo do antiácido, do procinético e do IBP? (Antiácido neutraliza o ácido já secretado; procinético estimula a motilidade por receptores dopaminérgicos; IBP bloqueia irreversivelmente a bomba de prótons.)',
  },
);
