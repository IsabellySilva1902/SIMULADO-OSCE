// Estações de Saúde da Mulher. Conteúdo restrito aos slides da disciplina.
// MUL-01 a MUL-14: Infecções genitais (vulvovaginites, cervicites e úlceras genitais).
// MUL-16 a MUL-24: Fisiologia do ciclo menstrual. MUL-15 (prova 25.2) está em estacoes-prova.js.
ESTACOES.push(
  // ----------------------------------------------------- MUL-01 · Abordagem da queixa de corrimento
  {
    id: 'MUL-01', materia: 'mulher',
    titulo: 'Estou com um corrimento diferente',
    local: 'UBS — consulta de ginecologia', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Juliana, 29 anos, procura a UBS porque há 10 dias "está com um corrimento diferente". Está envergonhada, fala baixo e diz que "nunca teve isso". Ainda não foi examinada.\n\nA sala ao lado tem maca ginecológica, espéculo, fita de pH e lâminas. O examinador pede que você conduza a investigação antes de receber qualquer resultado.',
    mesa: [
      { tipo: 'tabela', titulo: 'Ficha de acolhimento', linhas: [['PA', '112 × 70 mmHg'], ['Temperatura', '36,6 °C'], ['Doenças conhecidas', 'nenhuma registrada'], ['Última menstruação', 'há 2 semanas']] },
    ],
    tarefas: [
      'Quais perguntas da anamnese são indispensáveis nessa queixa? Justifique as principais.',
      'O que você avalia no exame ginecológico, nos genitais externos e nos internos?',
      'Explique como é o meio vaginal normal e como ele protege contra infecções. Qual a diferença entre vaginite e vaginose?',
      'Juliana pergunta, envergonhada, se "isso é falta de higiene" e se "é doença venérea". Responda.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"É um corrimento diferente... tenho vergonha de falar disso."' },
      { gatilho: 'Se perguntar sobre vida sexual e contracepção', fala: '"Tenho um namorado novo há 2 meses. Tomo pílula, mas camisinha é só às vezes."' },
      { gatilho: 'No final', fala: '"Isso é falta de higiene? É doença venérea?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Caracterizou o corrimento (aspecto, quantidade, cor, odor), a relação com o ciclo menstrual e os fatores de melhora e piora', pts: 1 },
        { tarefa: 1, item: 'Perguntou doenças sistêmicas e imunológicas (DM), medicações, método contraceptivo e possibilidade de gestação', pts: 1 },
        { tarefa: 1, item: 'História sexual: contato sexual, número de parcerias, tipo de contato, dispareunia e dor pélvica', pts: 1 },
        { tarefa: 2, item: 'Genitais externos: corrimento, hiperemia, fissuras, escoriações, verrugas e ulcerações', pts: 1 },
        { tarefa: 2, item: 'Genitais internos: conteúdo vaginal (quantidade, cor, fluidez, aspecto) e colo, em busca de cervicite', pts: 1 },
        { tarefa: 3, item: 'Flora normal com predomínio de lactobacilos (80–95%) e pH de 3,8 a 4,5: ácido lático a partir do glicogênio do epitélio e peróxido de hidrogênio (antibacteriano e antiviral)', pts: 1 },
        { tarefa: 3, item: 'Vaginite: alteração da microbiota com inflamação · vaginose: sem evidência de inflamação', pts: 1 },
        { tarefa: 4, item: 'Acolheu sem julgamento: é a queixa mais frequente no consultório de ginecologia (cerca de 40% das consultas), e a causa só se define após o exame', pts: 1 },
        { tarefa: 4, item: 'Explicou que há causas por desequilíbrio da flora e causas de transmissão sexual, e que produtos íntimos irritantes podem piorar', pts: 1 },
      ],
    },
    errosCriticos: ['Não perguntar sobre método contraceptivo e possibilidade de gestação', 'Definir diagnóstico ou tratamento antes de examinar'],
    falaModelo: [
      { tarefa: 1, texto: 'Juliana, preciso entender bem o corrimento: há quanto tempo, a cor, a quantidade, se tem cheiro, se muda com o ciclo e o que melhora ou piora. Pergunto se tem diabetes ou outra doença que baixe a imunidade, que remédios usa, qual método usa para evitar gravidez e se há chance de estar grávida. E, sem julgamento, sobre a vida sexual: se a parceria é nova ou se há mais de uma, o tipo de contato, se sente dor na relação ou dor no pé da barriga.', tempo: '40 s' },
      { tarefa: 2, texto: 'No exame, olho primeiro os genitais externos: corrimento, vermelhidão, fissuras, escoriações, verrugas e úlceras. Depois, com o espéculo, avalio o conteúdo vaginal, com quantidade, cor, fluidez e aspecto, e o colo, procurando sinais de cervicite.', tempo: '25 s' },
      { tarefa: 3, texto: 'A vagina normal é dominada por lactobacilos, 80 a 95% dos microrganismos. Eles transformam o glicogênio do epitélio em ácido lático, mantendo o pH entre 3,8 e 4,5, ácido demais para a maioria dos patógenos, e produzem peróxido de hidrogênio, que é antibacteriano e antiviral. Quando essa flora se altera com inflamação, chamamos de vaginite; sem inflamação, de vaginose.', tempo: '30 s' },
      { tarefa: 4, texto: 'Juliana, você não fez nada de errado: corrimento é a queixa mais comum no consultório de ginecologia, perto de 4 em cada 10 consultas. A vagina tem bactérias boas que funcionam como seguranças: deixam o ambiente ácido e não deixam outros microrganismos se instalarem. Quando esses seguranças diminuem, outros crescem. Algumas causas vêm só desse desequilíbrio; outras passam pela relação. Só vou saber qual é depois do exame. E sabonetes, perfumes ou desodorantes íntimos podem irritar e até piorar. Posso te examinar? Me conta o que você entendeu até aqui.', tempo: '45 s', analogia: 'Lactobacilos como seguranças do ambiente vaginal' },
    ],
    extra: 'Quais são as causas típicas e as atípicas de vulvovaginite? (Típicas: vaginose bacteriana, candidíase e tricomoníase. Atípicas: vaginose citolítica, vaginite aeróbica e vaginite inflamatória descamativa.)',
  },

  // ----------------------------------------------------- MUL-02 · Vaginose bacteriana
  {
    id: 'MUL-02', materia: 'mulher',
    titulo: 'O cheiro piora depois da relação',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Patrícia, 32 anos, não gestante, parceiro fixo, usa preservativo de forma irregular. Há 3 semanas nota um corrimento acinzentado, em pequena quantidade, com "cheiro de peixe" que fica muito pior depois da relação sexual sem preservativo e durante a menstruação. Nega coceira, ardor ou dor na relação. Teve um quadro parecido há 1 ano.\n\nExame especular: conteúdo vaginal branco-acinzentado, fino e homogêneo, recobrindo as paredes, sem hiperemia da mucosa. Colo sem alterações.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames feitos no consultório', linhas: [['pH vaginal (fita)', '5,5'], ['Teste das aminas (KOH 10%)', 'positivo: odor de peixe'], ['Exame a fresco', 'células-guia ("clue cells") presentes; raros leucócitos; sem fungos; sem parasitas móveis']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Justifique com os critérios que você usou.',
      'O que acontece na flora vaginal nessa doença? Por que o odor piora depois da relação e na menstruação?',
      'Como você trata? Cite o esquema de escolha e as alternativas.',
      'Patrícia quer saber por que "isso volta" e se pode beber no fim de semana. Oriente-a.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Tenho vergonha desse cheiro, doutor(a). Depois da relação fica muito pior."' },
      { gatilho: 'Se perguntar sobre coceira', fala: '"Não coça, nem arde. É só o corrimento e o cheiro."' },
      { gatilho: 'No final', fala: '"Já tive isso no ano passado. Por que volta? E posso tomar uma cerveja no sábado?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Vaginose bacteriana', pts: 1 },
        { tarefa: 1, item: 'Critérios de Amsel (3 de 4): corrimento branco-acinzentado, fino e homogêneo; pH > 4,5; teste das aminas positivo; clue cells (aqui, os 4 presentes)', pts: 2 },
        { tarefa: 1, item: 'Citou o escore de Nugent (bacterioscopia pelo Gram) como padrão-ouro', pts: 1 },
        { tarefa: 2, item: 'Redução dos lactobacilos e proliferação de bactérias anaeróbias (Gardnerella e outras), sem resposta inflamatória (por isso vaginose)', pts: 1 },
        { tarefa: 2, item: 'O odor se exacerba com substâncias alcalinas: sêmen e sangue menstrual', pts: 1 },
        { tarefa: 3, item: 'Metronidazol 500 mg VO de 12/12 h por 7 dias', pts: 1 },
        { tarefa: 3, item: 'Alternativas: metronidazol gel 0,75% vaginal por 5 dias; clindamicina 300 mg VO de 12/12 h ou creme 2% vaginal, por 7 dias; tinidazol', pts: 1 },
        { tarefa: 4, item: 'Recorrência de 15–30%; nas recidivas, metronidazol gel 2 vezes por semana por 4 a 6 meses', pts: 1 },
        { tarefa: 4, item: 'Sem álcool durante o metronidazol e até 24 h depois; tratar, porque a VB deixa o meio mais suscetível a HPV, HIV e outras ISTs', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar com antifúngico', 'Não orientar a abstenção de álcool com o metronidazol'],
    falaModelo: [
      { tarefa: 1, texto: 'É vaginose bacteriana. Pelos critérios de Amsel, preciso de 3 dos 4, e ela tem os 4: corrimento branco-acinzentado, fino e homogêneo; pH acima de 4,5; teste das aminas positivo; e clue cells no exame a fresco. O padrão-ouro seria o escore de Nugent, na bacterioscopia pelo Gram.', tempo: '30 s' },
      { tarefa: 2, texto: 'Os lactobacilos diminuem e as bactérias anaeróbias, como a Gardnerella, proliferam. Não há resposta inflamatória, por isso é vaginose e não vaginite, e ela não tem coceira nem vermelhidão. O odor piora com substâncias alcalinas, como o sêmen e o sangue menstrual.', tempo: '25 s' },
      { tarefa: 3, texto: 'O objetivo é eliminar os sintomas e reequilibrar a flora. Prescrevo metronidazol 500 mg por via oral de 12 em 12 horas por 7 dias. Como alternativas, metronidazol gel vaginal por 5 dias, clindamicina oral ou em creme vaginal por 7 dias, ou tinidazol.', tempo: '25 s' },
      { tarefa: 4, texto: 'Patrícia, a vagina é como um jardim cuidado pelos lactobacilos; nessa infecção eles diminuem e outras bactérias tomam o lugar, como mato que cresce quando o jardineiro se afasta. O remédio tira o mato, mas às vezes ele volta: isso acontece com 15 a 30% das mulheres, e, se voltar, temos um esquema de manutenção com gel. Vale tratar, porque esse desequilíbrio deixa a vagina mais vulnerável a HPV, HIV e outras infecções. Durante o metronidazol e por 24 horas depois, nada de álcool. Me conta como você vai tomar o remédio?', tempo: '50 s', analogia: 'Mato que cresce quando o jardineiro (lactobacilo) se afasta' },
    ],
    extra: 'E se ela estivesse grávida, por que a VB preocuparia? (Associa-se a parto prematuro, corioamnionite, endometrite pós-parto e pós-cesariana e infecção pós-aborto.)',
  },

  // ----------------------------------------------------- MUL-03 · Candidíase não complicada
  {
    id: 'MUL-03', materia: 'mulher',
    titulo: 'Coceira insuportável depois do antibiótico',
    local: 'UBS — demanda espontânea', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Larissa, 24 anos, terminou há 5 dias um tratamento com amoxicilina para sinusite. Há 3 dias tem coceira vulvar intensa, ardor ao urinar, dor na relação e um corrimento branco "em pedaços, tipo leite talhado", sem odor. Não tem doenças, usa anticoncepcional oral e teste de gravidez de farmácia negativo ontem. Costuma usar sabonete íntimo perfumado e calça jeans apertada no calor.\n\nExame: vulva hiperemiada e edemaciada, com fissuras. Conteúdo vaginal branco e grumoso, aderido às paredes.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames feitos no consultório', linhas: [['pH vaginal', '4,0'], ['Teste das aminas', 'negativo'], ['Exame a fresco com KOH 10%', 'pseudo-hifas e leveduras']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Que dados da clínica e dos exames o sustentam?',
      'Quais fatores predispuseram esse quadro?',
      'O quadro é complicado ou não complicado? Como você trata?',
      'Larissa pergunta se precisa fazer cultura e como evitar novos episódios. Oriente-a.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Não aguento mais essa coceira, doutor(a)! Começou depois do antibiótico."' },
      { gatilho: 'Se citar o fluconazol', fala: '"Minha amiga que está grávida pode tomar esse comprimido também, né?"' },
      { gatilho: 'No final', fala: '"Não precisa fazer cultura? E o que eu faço pra não voltar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Candidíase vulvovaginal', pts: 1 },
        { tarefa: 1, item: 'Clínica: prurido, corrimento esbranquiçado em leite talhado, disúria, dispareunia; hiperemia, edema e fissuras vulvares', pts: 1 },
        { tarefa: 1, item: 'Exames: pH < 4,5, teste das aminas negativo e fungo confirmado no exame a fresco com KOH', pts: 1 },
        { tarefa: 2, item: 'Antibiótico recente (desequilíbrio da microbiota), anticoncepcional oral, roupa que aumenta calor e umidade locais, produto íntimo perfumado (irritante)', pts: 1 },
        { tarefa: 3, item: 'Não complicada: Candida albicans (85–95% dos casos) em mulher sem comprometimento imunológico, episódio isolado', pts: 1 },
        { tarefa: 3, item: 'Fluconazol 150 mg VO dose única, ou miconazol creme vaginal por 7 noites (nistatina vaginal por 14 dias é outra opção)', pts: 1 },
        { tarefa: 3, item: 'Fluconazol não deve ser prescrito para gestantes', pts: 1 },
        { tarefa: 4, item: 'Exame a fresco positivo dispensa continuar a investigação; a cultura fica para a recorrência', pts: 1 },
        { tarefa: 4, item: 'Prevenção: evitar roupas que aumentem calor e umidade e produtos íntimos irritantes (perfumes, sabonetes, desodorantes, talcos)', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever fluconazol para gestante', 'Pedir cultura de rotina num primeiro episódio já confirmado no exame a fresco'],
    falaModelo: [
      { tarefa: 1, texto: 'É candidíase vulvovaginal. Ela tem prurido intenso, corrimento branco em leite talhado, ardor ao urinar e dor na relação, com a vulva vermelha, inchada e com fissuras. O pH está abaixo de 4,5, o teste das aminas é negativo, e o exame a fresco com KOH mostrou o fungo, o que confirma.', tempo: '30 s' },
      { tarefa: 2, texto: 'O principal é o antibiótico recente, que desequilibrou a microbiota. Somam-se o anticoncepcional oral, a calça apertada no calor, que aumenta a umidade e o calor locais, e o sabonete íntimo perfumado, que irrita.', tempo: '20 s' },
      { tarefa: 3, texto: 'É não complicada: episódio isolado, provavelmente por Candida albicans, que causa 85 a 95% dos casos, numa mulher sem imunossupressão. Trato com fluconazol 150 mg por via oral em dose única, ou miconazol creme vaginal por 7 noites; a nistatina vaginal por 14 dias é outra opção. Para gestante eu não prescrevo fluconazol: escolho uma das opções vaginais.', tempo: '30 s' },
      { tarefa: 4, texto: 'Larissa, como o exame já mostrou o fungo, não precisa de cultura: ela fica para quando a candidíase se repete. Esse fungo pode viver na vagina em pequena quantidade sem causar nada; ele cresce quando o ambiente muda, como o mofo que aparece num cômodo quente e úmido. O antibiótico tirou as bactérias que o seguravam, e a roupa apertada e o sabonete perfumado ajudaram. Prefira roupas mais ventiladas e evite sabonetes, perfumes e desodorantes íntimos. Me conta como você vai usar o remédio?', tempo: '45 s', analogia: 'Mofo que cresce num cômodo quente e úmido' },
    ],
    extra: 'Quando se fala em candidíase de repetição? (4 ou mais episódios ao ano, confirmados laboratorialmente; a cultura ajuda a identificar espécies não albicans.)',
  },

  // ----------------------------------------------------- MUL-04 · Candidíase de repetição e complicada
  {
    id: 'MUL-04', materia: 'mulher',
    titulo: 'É a quinta vez neste ano',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Dona Rosângela, 46 anos, diabética tipo 2 mal controlada (hemoglobina glicada de 9,8%), obesa (IMC 34). Neste ano já teve 5 episódios de coceira vulvar intensa e corrimento branco grumoso. Em todos, comprou fluconazol na farmácia por conta própria, sem exame: melhora por alguns dias e volta. Hoje está com o mesmo quadro.\n\nExame: hiperemia e fissuras vulvares, conteúdo vaginal branco e grumoso.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames feitos hoje', linhas: [['pH vaginal', '4,2'], ['Teste das aminas', 'negativo'], ['Exame a fresco (KOH 10%)', 'leveduras'], ['Cultura em meio específico', 'colhida, resultado pendente']] },
    ],
    tarefas: [
      'Esse quadro pode ser chamado de candidíase de repetição? O que é preciso para defini-la, e por que a confirmação laboratorial importa?',
      'Por que ela tem candidíase complicada? Que fatores explicam as recidivas?',
      'Como você trata o episódio atual e como previne novos episódios?',
      'A cultura identifica Candida glabrata. O que muda? Explique à paciente.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), só me passa o comprimido de sempre, eu já sei o que é."' },
      { gatilho: 'Examinador, após a tarefa 3', fala: '"A cultura identificou Candida glabrata."' },
      { gatilho: 'No final', fala: '"Então o comprimido da farmácia não adiantava?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Candidíase de repetição: 4 ou mais episódios ao ano, confirmados laboratorialmente (os dela não foram)', pts: 1 },
        { tarefa: 1, item: 'Confirmar porque outras afecções dão os mesmos sintomas (vaginose citolítica, alergias, dermatites vulvares) e para identificar espécies não albicans: cultura (Sabouraud, Nickerson)', pts: 2 },
        { tarefa: 2, item: 'Complicada: recorrente e em mulher diabética (também: severa, por não albicans, imunossupressão, debilitada ou em uso de imunossupressores)', pts: 1 },
        { tarefa: 2, item: 'Fatores: DM descompensado e obesidade; a Candida forma biofilmes, o que facilita as recidivas', pts: 1 },
        { tarefa: 3, item: 'Episódio atual: tratamento local ou oral prolongado, 7 a 14 dias, ou fluconazol 150 mg de 3/3 dias, 3 doses', pts: 1 },
        { tarefa: 3, item: 'Recorrente: supressão com fluconazol 150 mg VO 1 vez por semana por 6 meses', pts: 1 },
        { tarefa: 4, item: 'Não albicans: sem tratamento comprovadamente eficaz; tratamento prolongado (7–14 dias) com medicamento sem fluconazol, ou óvulos de ácido bórico 600 mg por 14 dias (fungicida)', pts: 1 },
        { tarefa: 4, item: 'Explicou as recidivas em linguagem simples e desestimulou a automedicação; reforçou o controle do diabetes', pts: 1 },
      ],
    },
    errosCriticos: ['Repetir fluconazol em dose única sem confirmar o diagnóstico', 'Manter fluconazol depois de identificar Candida glabrata'],
    falaModelo: [
      { tarefa: 1, texto: 'Ela relata 5 episódios no ano, mas nenhum foi confirmado. Candidíase de repetição exige 4 ou mais episódios por ano confirmados laboratorialmente. Confirmar importa porque outras afecções dão os mesmos sintomas, como a vaginose citolítica, as alergias e as dermatites vulvares, e porque preciso identificar espécies não albicans. Por isso peço cultura em meio específico, como Sabouraud ou Nickerson.', tempo: '35 s' },
      { tarefa: 2, texto: 'É complicada porque é recorrente e ela é diabética. Também seria complicada se fosse severa, por espécie não albicans, ou numa mulher imunossuprimida ou debilitada. As recidivas se explicam pelo diabetes descompensado, pela obesidade e pela capacidade da Candida de formar biofilme.', tempo: '25 s' },
      { tarefa: 3, texto: 'Na complicada o tratamento é prolongado: via local ou oral por 7 a 14 dias, ou fluconazol 150 mg de 3 em 3 dias, três doses. Depois, para prevenir, faço supressão com fluconazol 150 mg uma vez por semana por 6 meses.', tempo: '20 s' },
      { tarefa: 4, texto: 'Com Candida glabrata não há tratamento comprovadamente eficaz. Faço tratamento prolongado, de 7 a 14 dias, com medicamento sem fluconazol, ou óvulos de ácido bórico 600 mg por 14 dias. Dona Rosângela, o seu fungo não é o mais comum, e o comprimido da farmácia não é o indicado para ele. Além disso, ele forma uma película protetora, como o limo que gruda no fundo de uma caixa de água e volta se a limpeza for rápida. Por isso precisamos do remédio certo, por mais tempo, e de controlar o diabetes. Me conta o que vai mudar no seu tratamento?', tempo: '50 s', analogia: 'Biofilme como o limo no fundo da caixa de água' },
    ],
    extra: 'Quais afecções entram no diagnóstico diferencial da candidíase? (Dermatite vulvar alérgica ou de contato, vaginose citolítica, vaginite aeróbica, vaginite inflamatória descamativa, líquen escleroso e tricomoníase.)',
  },

  // ----------------------------------------------------- MUL-05 · Tricomoníase
  {
    id: 'MUL-05', materia: 'mulher',
    titulo: 'O corrimento ficou esverdeado',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Camila, 27 anos, há 1 semana tem corrimento abundante, amarelo-esverdeado e com bolhas, coceira, ardor ao urinar e dor na relação. Começou um relacionamento há 2 meses e não usam preservativo. Teste de gravidez negativo.\n\nExame: vulva edemaciada e hiperemiada, com corrimento escorrendo pela fenda vulvar. Ao especular, colo uterino com pontilhado avermelhado difuso.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames feitos no consultório', linhas: [['pH vaginal', '6,0'], ['Teste das aminas', 'positivo'], ['Exame a fresco (soro fisiológico)', 'protozoários flagelados móveis; muitos leucócitos']] },
    ],
    tarefas: [
      'Qual é o diagnóstico e o agente? Que achados do exame físico e da lâmina o sustentam?',
      'O teste das aminas veio positivo. Isso afasta o seu diagnóstico? E se o exame a fresco viesse negativo, o que você faria?',
      'Prescreva o tratamento.',
      'Camila pergunta se o namorado também precisa se tratar e se "isso é sério". Oriente-a.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Está saindo muito corrimento, e agora ficou meio verde. Estou com medo."' },
      { gatilho: 'Se falar em tratar o parceiro', fala: '"Mas ele não sente nada!"' },
      { gatilho: 'No final', fala: '"Isso é sério? Pode trazer outras doenças?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Tricomoníase, por Trichomonas vaginalis (protozoário flagelado anaeróbio, de transmissão sexual)', pts: 1 },
        { tarefa: 1, item: 'Corrimento abundante amarelo-esverdeado e bolhoso, edema vulvar, colo em framboesa (colpite tigroide); pH > 4,5; parasita em movimento no exame a fresco', pts: 1 },
        { tarefa: 2, item: 'Não afasta: o teste das aminas pode ser positivo pela presença de germes anaeróbios', pts: 1 },
        { tarefa: 2, item: 'O exame a fresco tem sensibilidade de 51–65%: com sintomas e exames negativos, cultura em meio de Diamond', pts: 1 },
        { tarefa: 3, item: 'Metronidazol 2 g VO dose única, ou 500 mg de 12/12 h por 7 dias; ou tinidazol 2 g VO dose única', pts: 2 },
        { tarefa: 4, item: 'Abstenção de álcool: 24 h com metronidazol (72 h com tinidazol)', pts: 1 },
        { tarefa: 4, item: 'Referenciar o(s) parceiro(s) para tratamento, mesmo sem sintomas (a infecção pode ser assintomática, cerca de 30%), e pesquisar outras ISTs', pts: 1 },
        { tarefa: 4, item: 'Explicou que a inflamação facilita a aquisição de outras infecções, inclusive o HIV', pts: 1 },
      ],
    },
    errosCriticos: ['Não referenciar o parceiro para tratamento', 'Não orientar a abstenção de álcool'],
    falaModelo: [
      { tarefa: 1, texto: 'É tricomoníase, causada pelo Trichomonas vaginalis, um protozoário flagelado anaeróbio transmitido pela relação sexual. Ela tem corrimento abundante, amarelo-esverdeado e bolhoso, edema vulvar e o colo em framboesa, a colpite tigroide. O pH está acima de 4,5 e o exame a fresco mostrou o parasita se movendo.', tempo: '30 s' },
      { tarefa: 2, texto: 'Não afasta: na tricomoníase o teste das aminas pode ser positivo, porque há germes anaeróbios associados. O exame a fresco é o mais usado, mas a sensibilidade é de só 51 a 65%. Se viesse negativo com esses sintomas, eu pediria a cultura em meio de Diamond.', tempo: '25 s' },
      { tarefa: 3, texto: 'Prescrevo metronidazol 2 g por via oral em dose única. Outras opções são metronidazol 500 mg de 12 em 12 horas por 7 dias, ou tinidazol 2 g em dose única.', tempo: '15 s' },
      { tarefa: 4, texto: 'Camila, essa infecção passa pela relação, então seu namorado precisa ser tratado também, mesmo sem sintomas, porque ela pode não dar sinais. Tratar só você é como apagar o fogo numa casa e deixar a brasa acesa na casa do vizinho: o fogo volta. Nada de bebida alcoólica durante o remédio e por 24 horas depois. É sério, sim, porque a inflamação facilita pegar outras infecções, inclusive o HIV; por isso vou pedir exames para outras ISTs. Me conta: como você vai conversar com ele?', tempo: '45 s', analogia: 'Brasa acesa na casa do vizinho' },
    ],
    extra: 'Por que a tricomoníase facilita infecções do trato genital superior? (O parasita fagocita fungos, bactérias e vírus e os transporta para o trato genital superior. Também se associa a complicações no ciclo gravídico-puerperal.)',
  },

  // ----------------------------------------------------- MUL-06 · Vaginose citolítica
  {
    id: 'MUL-06', materia: 'mulher',
    titulo: 'Já tratei candidíase cinco vezes e não passa',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Fernanda, 31 anos, sem doenças, não gestante. Há 1 ano tem corrimento branco e coceira vulvar que pioram sempre na semana antes da menstruação, com ardor e dor na relação. Já recebeu, em outros serviços, 5 tratamentos para "candidíase", com cremes e comprimidos, sempre sem exame e sem melhora. Está frustrada: "ninguém acerta".\n\nExame: conteúdo vaginal esbranquiçado, em grumos, aderente às paredes; sem hiperemia importante.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['pH vaginal', '3,6'], ['Teste das aminas', 'negativo'], ['Bacterioscopia (Gram)', 'aumento acentuado de lactobacilos; leucócitos raros; núcleos desnudos; ausência de hifas e de esporos']] },
    ],
    tarefas: [
      'Interprete os exames. Qual é o diagnóstico?',
      'Por que os antifúngicos não funcionaram? Explique o mecanismo da doença.',
      'Qual é o tratamento?',
      'Explique à paciente o que ela tem, acolhendo a frustração dela.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Já tratei candidíase cinco vezes. Ninguém acerta!"' },
      { gatilho: 'Se falar em bicarbonato', fala: '"Bicarbonato? Mas isso não é remédio de verdade."' },
      { gatilho: 'No final', fala: '"Então eu nunca tive candidíase?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Vaginose citolítica', pts: 1 },
        { tarefa: 1, item: 'pH < 4,0; excesso de lactobacilos, leucócitos raros, núcleos desnudos e ausência de fungos; prurido que piora no período pré-menstrual', pts: 2 },
        { tarefa: 2, item: 'Proliferação excessiva de lactobacilos, que reduz o pH e aumenta a citólise; os produtos da citólise causam os sintomas (fatores desencadeantes desconhecidos)', pts: 1 },
        { tarefa: 2, item: 'Não há fungo, então o antifúngico não age: na suspeita de candidíase, principalmente recorrente, é preciso confirmar a presença de fungos', pts: 1 },
        { tarefa: 3, item: 'Sem tratamento específico: medidas que alcalinizem temporariamente o meio vaginal, como bicarbonato de sódio periódico (óvulos ou duchas vaginais)', pts: 2 },
        { tarefa: 4, item: 'Acolheu a frustração e explicou em linguagem simples, sem desqualificar os atendimentos anteriores', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever mais um antifúngico', 'Diagnosticar candidíase sem confirmar a presença de fungos'],
    falaModelo: [
      { tarefa: 1, texto: 'É vaginose citolítica. O pH está abaixo de 4,0, mais ácido que o normal; o Gram mostra excesso de lactobacilos, poucos leucócitos, núcleos desnudos e nenhum fungo. A piora no pré-menstrual também é típica.', tempo: '25 s' },
      { tarefa: 2, texto: 'O problema é o excesso de lactobacilos: eles baixam demais o pH e aumentam a citólise, a destruição das células do epitélio, e os produtos dessa citólise causam os sintomas. Não se sabe o que desencadeia a proliferação. Como não há fungo, o antifúngico não tinha onde agir. Por isso, na suspeita de candidíase, principalmente quando recorre, é preciso confirmar o fungo antes de tratar.', tempo: '35 s' },
      { tarefa: 3, texto: 'Não existe tratamento específico. O que se recomenda é alcalinizar o meio temporariamente, com bicarbonato de sódio aplicado de forma periódica, em óvulos ou duchas vaginais.', tempo: '15 s' },
      { tarefa: 4, texto: 'Fernanda, entendo a sua frustração: você tratou várias vezes uma coisa que, pelo exame de hoje, não é fungo. Os lactobacilos são as bactérias boas da vagina, mas no seu caso estão em excesso, como um tempero bom colocado demais, que estraga a comida: o meio fica ácido demais e irrita. Por isso o tratamento é deixar o meio menos ácido, com bicarbonato, e não mais um antifúngico. Vou acompanhar de perto como você responde. Me conta com suas palavras o que você tem?', tempo: '45 s', analogia: 'Tempero bom colocado em excesso' },
    ],
    extra: 'Qual é o principal diagnóstico diferencial da vaginose citolítica? (A candidíase, principalmente a complicada: por isso, na suspeita de candidíase, confirma-se a presença de fungos.)',
  },

  // ----------------------------------------------------- MUL-07 · Vaginite aeróbica e vaginite inflamatória descamativa
  {
    id: 'MUL-07', materia: 'mulher',
    titulo: 'Corrimento amarelado que não melhora com nada',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Dona Célia, 58 anos, na menopausa há 7 anos, sem reposição hormonal. Há 4 meses tem corrimento amarelado, às vezes com aspecto de pus e odor desagradável, ardor vulvar, ardor ao urinar e dor na relação. Já usou um creme antifúngico, sem melhora.\n\nExame: vestíbulo inflamado; mucosa vaginal fina e pálida em algumas áreas e hiperemiada em outras; conteúdo vaginal amarelado. Sem petéquias ou equimoses.',
    mesa: [
      { tipo: 'tabela', titulo: 'Exames', linhas: [['Exame a fresco', 'sem parasitas móveis; sem fungos'], ['Microscopia do conteúdo vaginal', 'lactobacilos ausentes; muitas bactérias; aumento acentuado de polimorfonucleares'], ['Cultura', 'Escherichia coli e Enterococcus faecalis']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Em que ele difere da vaginose bacteriana?',
      'Que outra afecção faz parte do mesmo espectro? Como você a reconheceria, e que diagnóstico é importante afastar?',
      'Como você trata, considerando o que predomina no caso dela?',
      'Explique à paciente o tratamento e por que o creme antifúngico não resolveu.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Já passei creme de candidíase e não adiantou nada."' },
      { gatilho: 'Se falar em estrogênio', fala: '"Hormônio, na minha idade? Achei que não precisava mais."' },
      { gatilho: 'No final', fala: '"E isso vai voltar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Vaginite aeróbica: bactérias aeróbicas entéricas (E. coli, Enterococcus faecalis, S. aureus, S. epidermidis, estreptococo do grupo B), redução ou ausência de lactobacilos e inflamação', pts: 2 },
        { tarefa: 1, item: 'Difere da VB pela inflamação (aumento de polimorfonucleares, corrimento purulento); a VB é por anaeróbios e não tem resposta inflamatória', pts: 1 },
        { tarefa: 2, item: 'Vaginite inflamatória descamativa: pouco frequente e severa, considerada o espectro mais grave ou estágio final da vaginite aeróbica', pts: 1 },
        { tarefa: 2, item: 'Inflamação intensa, queixa de longa duração, eritema, petéquias e até equimoses; importante afastar tricomoníase', pts: 1 },
        { tarefa: 3, item: 'Sem normatização: excesso de bactérias → clindamicina 2% vaginal por 21 dias; predomínio de inflamação → hidrocortisona 10% vaginal por 21 dias (ou creme manipulado com ambos)', pts: 1 },
        { tarefa: 3, item: 'Predomínio de atrofia → estrogênio vaginal: melhora o trofismo e previne recorrências', pts: 1 },
        { tarefa: 4, item: 'Explicou que não é fungo e que o estrogênio local fortalece a mucosa e previne novos episódios, com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar de novo como candidíase', 'Não afastar tricomoníase numa vaginite purulenta'],
    falaModelo: [
      { tarefa: 1, texto: 'É vaginite aeróbica: os lactobacilos sumiram e foram substituídos por bactérias aeróbicas entéricas, como a Escherichia coli e o Enterococcus, com inflamação, que aparece no aumento de polimorfonucleares e no corrimento purulento. É diferente da vaginose bacteriana, em que as bactérias são anaeróbias e não há resposta inflamatória.', tempo: '30 s' },
      { tarefa: 2, texto: 'No mesmo espectro está a vaginite inflamatória descamativa, pouco frequente e severa, considerada a forma mais grave ou o estágio final da vaginite aeróbica. A inflamação é intensa, com eritema, petéquias e até equimoses na mucosa, e a queixa costuma ser longa. Nela é importante afastar a tricomoníase; aqui o exame a fresco não mostrou parasitas.', tempo: '30 s' },
      { tarefa: 3, texto: 'Não há tratamento normatizado; escolho pelo que predomina. Como há muitas bactérias e inflamação, uso um creme vaginal manipulado com clindamicina 2% e hidrocortisona 10%, por 21 dias. Como há atrofia, associo estrogênio vaginal, que melhora o trofismo e previne recorrências.', tempo: '25 s' },
      { tarefa: 4, texto: 'Dona Célia, o creme de candidíase não ajudou porque não é fungo: são bactérias do intestino que ocuparam o lugar das bactérias boas da vagina. Depois da menopausa, a parede da vagina fica mais fina, como um gramado que seca e deixa a terra exposta para as ervas daninhas. O creme com antibiótico e anti-inflamatório trata agora, e o hormônio, aplicado só no local, deixa essa parede mais forte de novo, para o problema não voltar. Me conta: como a senhora vai usar os cremes?', tempo: '45 s', analogia: 'Gramado seco que deixa a terra exposta' },
    ],
    extra: 'E se fosse vaginite inflamatória descamativa? (Clindamicina creme vaginal 2% por 21 dias, hidrocortisona 10% intravaginal por 2 a 4 semanas, ou creme combinado; estrogênio vaginal periódico pode reduzir as recidivas.)',
  },

  // ----------------------------------------------------- MUL-08 · Comparação das vulvovaginites
  {
    id: 'MUL-08', materia: 'mulher',
    titulo: 'Quatro corrimentos, quatro lâminas',
    local: 'Banca do OSCE — interpretação de exames', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador apresenta quatro mulheres atendidas na mesma manhã com queixa de corrimento e pede que você interprete os achados. Nenhuma está grávida.',
    mesa: [
      { tipo: 'texto', texto: 'Paciente A — corrimento branco-acinzentado, fino, com odor de peixe que piora após a relação; sem prurido. pH 5,0; teste das aminas positivo; exame a fresco com clue cells.\n\nPaciente B — corrimento branco em grumos, prurido intenso, vulva hiperemiada com fissuras. pH 4,0; teste das aminas negativo; KOH 10% com pseudo-hifas.\n\nPaciente C — corrimento abundante amarelo-esverdeado e bolhoso; colo com pontilhado avermelhado. pH 6,0; teste das aminas positivo; exame a fresco com microrganismos flagelados móveis.\n\nPaciente D — corrimento branco em grumos e prurido que pioram no pré-menstrual; já tratou "candidíase" várias vezes. pH 3,6; teste das aminas negativo; Gram com excesso de lactobacilos, núcleos desnudos e sem fungos.' },
    ],
    tarefas: [
      'Dê o diagnóstico de cada paciente.',
      'Como o pH vaginal e o teste das aminas ajudam a separá-las? Explique a paciente C, em que as aminas também foram positivas.',
      'Quais são vaginites e quais são vaginoses? Relacione cada uma com a flora normal.',
      'Em qual delas é obrigatório tratar a parceria? Qual seria o erro mais provável com a paciente D, e o que fazer?',
    ],
    ator: [
      { gatilho: 'Examinador, na paciente C', fala: '"As aminas deram positivo. Então é vaginose bacteriana, certo?"' },
      { gatilho: 'Examinador, na paciente D', fala: '"Prurido e corrimento branco em grumos. Não é candidíase?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'A: vaginose bacteriana · B: candidíase · C: tricomoníase · D: vaginose citolítica', pts: 2 },
        { tarefa: 2, item: 'pH > 4,5 na VB e na tricomoníase; < 4,5 na candidíase; < 4,0 na vaginose citolítica', pts: 1 },
        { tarefa: 2, item: 'Aminas positivas na VB e negativas na candidíase; na tricomoníase podem ser positivas pelos germes anaeróbios — o parasita móvel decide', pts: 1 },
        { tarefa: 3, item: 'Vaginites (com inflamação): candidíase e tricomoníase · Vaginoses (sem inflamação): VB e vaginose citolítica', pts: 1 },
        { tarefa: 3, item: 'Flora normal: lactobacilos dominantes, pH 3,8–4,5. Na VB os lactobacilos diminuem; na citolítica proliferam em excesso', pts: 1 },
        { tarefa: 4, item: 'C (tricomoníase, de transmissão sexual): referenciar a parceria para tratamento e pesquisar outras ISTs', pts: 1 },
        { tarefa: 4, item: 'D: o erro é tratar de novo como candidíase; confirmar fungos antes de tratar; tratamento é alcalinizar o meio (bicarbonato de sódio)', pts: 1 },
      ],
    },
    errosCriticos: ['Chamar C de vaginose bacteriana só pelo teste das aminas', 'Diagnosticar candidíase na paciente D'],
    falaModelo: [
      { tarefa: 1, texto: 'A tem vaginose bacteriana; B, candidíase; C, tricomoníase; e D, vaginose citolítica.', tempo: '10 s' },
      { tarefa: 2, texto: 'O pH separa bem: acima de 4,5 na vaginose bacteriana e na tricomoníase; abaixo de 4,5 na candidíase; e abaixo de 4,0, mais ácido que o normal, na citolítica. As aminas são positivas na vaginose bacteriana e negativas na candidíase. Na tricomoníase podem ser positivas, por causa dos germes anaeróbios associados; quem decide em C é o parasita se movendo no exame a fresco.', tempo: '35 s' },
      { tarefa: 3, texto: 'Candidíase e tricomoníase são vaginites, porque há inflamação. Vaginose bacteriana e citolítica são vaginoses, sem inflamação. O normal é a flora dominada por lactobacilos, com pH de 3,8 a 4,5. Penso numa balança: na vaginose bacteriana os lactobacilos caem e o pH sobe; na citolítica eles sobram e o pH desce.', tempo: '30 s', analogia: 'Balança dos lactobacilos pendendo para um lado ou para o outro' },
      { tarefa: 4, texto: 'Em C, a tricomoníase é de transmissão sexual: referencio a parceria para tratamento e pesquiso outras ISTs. Em D, o erro mais provável é tratar de novo como candidíase pelo prurido e pelo corrimento em grumos; mas não há fungo. Por isso, na suspeita de candidíase, principalmente recorrente, confirmo o fungo antes de tratar. Nela, o tratamento é alcalinizar o meio com bicarbonato de sódio.', tempo: '30 s' },
    ],
    extra: 'Qual é o padrão-ouro para o diagnóstico da vaginose bacteriana? (Escore de Nugent, na bacterioscopia pelo Gram.)',
  },

  // ----------------------------------------------------- MUL-09 · Cervicite
  {
    id: 'MUL-09', materia: 'mulher',
    titulo: 'Sangrou depois da relação',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Bianca, 20 anos, universitária, conta que nas últimas semanas teve sangramento depois da relação sexual e alguns escapes fora da menstruação. Às vezes sente dor na relação e tem ido mais vezes ao banheiro para urinar. Teve dois parceiros nos últimos 6 meses e usa preservativo "de vez em quando". Usa anticoncepcional oral sem esquecimentos.\n\nAo especular: colo edemaciado, que sangra ao toque da espátula, com secreção mucopurulenta saindo pelo orifício externo. Ao toque, dor à mobilização do colo. Paredes vaginais sem alterações.',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados', linhas: [['Temperatura', '36,7 °C'], ['Teste de gravidez', 'negativo']] },
    ],
    tarefas: [
      'Qual é o diagnóstico e quais os agentes mais prováveis?',
      'Quais fatores de risco ela tem?',
      'Que achados da história e do exame sustentam o diagnóstico? Qual é o exame padrão-ouro para confirmar o agente?',
      'Bianca diz que "não tem corrimento, então não pode ser infecção". Oriente-a.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Fiquei assustada, sangrou depois da relação."' },
      { gatilho: 'Ao ouvir a hipótese', fala: '"Mas eu não tenho corrimento nenhum! Então não pode ser infecção, né?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Cervicite', pts: 1 },
        { tarefa: 1, item: 'Agentes: Neisseria gonorrhoeae e Chlamydia trachomatis', pts: 1 },
        { tarefa: 2, item: 'Idade abaixo de 25 anos, novas ou múltiplas parcerias e uso irregular de preservativo (perguntou se alguma parceria teve IST)', pts: 2 },
        { tarefa: 3, item: 'Sangramento pós-coito e intermenstrual, dispareunia, polaciúria; colo friável, mucopus pelo orifício externo, edema cervical e dor à mobilização do colo', pts: 1 },
        { tarefa: 3, item: 'Biologia molecular é o padrão-ouro', pts: 1 },
        { tarefa: 4, item: 'De 70 a 80% das cervicites são assintomáticas e o corrimento é incomum: a ausência de corrimento não afasta', pts: 1 },
        { tarefa: 4, item: 'Orientou o uso regular do preservativo, sem julgamento sobre as parcerias', pts: 1 },
      ],
    },
    errosCriticos: ['Afastar infecção pela ausência de corrimento', 'Julgar a paciente pelo número de parceiros'],
    falaModelo: [
      { tarefa: 1, texto: 'É cervicite, uma inflamação do colo do útero, e os agentes mais prováveis são a Neisseria gonorrhoeae e a Chlamydia trachomatis.', tempo: '15 s' },
      { tarefa: 2, texto: 'Ela tem menos de 25 anos, teve duas parcerias recentes e usa preservativo de forma irregular. Também pergunto se algum parceiro teve IST.', tempo: '15 s' },
      { tarefa: 3, texto: 'Na história, sangramento depois da relação e fora da menstruação, dor na relação e polaciúria. No exame, colo edemaciado e friável, que sangra ao toque, mucopus saindo pelo orifício externo e dor à mobilização do colo. Para confirmar o agente, o padrão-ouro é a biologia molecular.', tempo: '25 s' },
      { tarefa: 4, texto: 'Bianca, não ter corrimento não afasta infecção: 70 a 80% das cervicites não dão sintoma nenhum, e o corrimento é até incomum. É como um vazamento dentro da parede: não aparece mancha, mas está lá. O sangramento depois da relação foi o sinal que apareceu. Não é questão de julgamento: o que protege é usar camisinha em todas as relações. Vamos confirmar com o exame. Me conta o que você entendeu?', tempo: '40 s', analogia: 'Vazamento dentro da parede, sem mancha aparente' },
    ],
    extra: 'Que queixas a cervicite pode dar, quando dá sintomas? (Sangramento intermenstrual ou pós-coito, dispareunia, polaciúria, dor pélvica e, raramente, corrimento.)',
  },

  // ----------------------------------------------------- MUL-10 · Herpes genital: primoinfecção
  {
    id: 'MUL-10', materia: 'mulher',
    titulo: 'Bolhinhas que viraram feridas e doem muito',
    local: 'Pronto atendimento', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Aline, 23 anos, há 4 dias teve ardor na vulva, que evoluiu para pequenas bolhas e depois para feridas muito dolorosas; dói até para urinar. Está prostrada, com febre baixa e dor no corpo. Teve relação sem preservativo com um parceiro novo há cerca de uma semana. Nunca teve nada parecido. Teste de gravidez negativo.\n\nExame: T 37,8 °C. Nos pequenos lábios, lesões em fases diferentes: vesículas agrupadas, úlceras rasas muito dolorosas e algumas crostas. Linfonodos inguinais aumentados e dolorosos dos dois lados.',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados', linhas: [['Peso', '60 kg'], ['Doenças prévias', 'nenhuma'], ['Alergias', 'nega']] },
    ],
    tarefas: [
      'Qual é o diagnóstico? Descreva a evolução das lesões e por que este é um primeiro episódio, e não uma recorrência.',
      'Prescreva o tratamento e diga quando ele pode ser prolongado.',
      'Qual é o objetivo do tratamento? Explique à paciente o que esperar da doença.',
      'Ela pergunta o que fazer "se voltar". Oriente-a.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Está doendo muito, doutor(a). Até para fazer xixi."' },
      { gatilho: 'Ao ouvir o diagnóstico', fala: '"Esse remédio cura de vez, né?"' },
      { gatilho: 'No final', fala: '"E se voltar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Herpes genital (HSV), primoinfecção', pts: 1 },
        { tarefa: 1, item: 'Evolução vesícula → úlcera (fase de maior dor) → crosta; as três fases podem coexistir na mesma paciente', pts: 1 },
        { tarefa: 1, item: 'Primoinfecção: incubação média de 6 dias, sintomas severos e sistêmicos, linfadenomegalia bilateral, 2–3 semanas (recorrência: leve, localizada, sem linfadenomegalia, 7–10 dias)', pts: 1 },
        { tarefa: 2, item: 'Aciclovir 200 mg, 2 comprimidos VO 3 vezes ao dia por 7–10 dias (ou 1 comprimido 5 vezes ao dia por 7–10 dias)', pts: 1 },
        { tarefa: 2, item: 'Iniciar o mais precocemente possível; prolongar se a cicatrização estiver incompleta após 10 dias', pts: 1 },
        { tarefa: 3, item: 'Doença recorrente e incurável; o objetivo do tratamento é acelerar a melhora dos sintomas', pts: 2 },
        { tarefa: 4, item: 'Recidiva: aciclovir por 5 dias, iniciado de preferência no pródromo (ardor, prurido, sensibilidade e hiperemia local)', pts: 1 },
        { tarefa: 4, item: 'Terapia supressiva se 6 ou mais episódios por ano', pts: 1 },
      ],
    },
    errosCriticos: ['Dizer que o tratamento cura a infecção', 'Adiar o início do tratamento'],
    falaModelo: [
      { tarefa: 1, texto: 'É herpes genital, uma primoinfecção. A lesão evolui de vesícula para úlcera, que é a fase mais dolorosa, e depois para crosta, e é comum ver as três fases ao mesmo tempo, como aqui. É primeiro episódio porque ela nunca teve antes, a exposição foi há cerca de uma semana, compatível com a incubação média de 6 dias, e há sintomas sistêmicos e linfonodos dos dois lados. A recorrência costuma ser leve, localizada, sem linfonodos, e dura 7 a 10 dias.', tempo: '40 s' },
      { tarefa: 2, texto: 'Prescrevo aciclovir 200 mg, 2 comprimidos por via oral 3 vezes ao dia, por 7 a 10 dias, ou 1 comprimido 5 vezes ao dia pelo mesmo tempo. Começo o quanto antes; se após 10 dias a cicatrização estiver incompleta, prolongo.', tempo: '20 s' },
      { tarefa: 3, texto: 'O objetivo é acelerar a melhora dos sintomas. Aline, esse remédio não elimina o vírus: o herpes fica no corpo e pode voltar. Ele funciona como baixar o volume de um rádio que não dá para desligar: as feridas saram mais rápido, mas o vírus continua lá, quieto. A primeira vez costuma ser a mais forte e dura 2 a 3 semanas; as próximas, se vierem, são mais leves.', tempo: '35 s', analogia: 'Rádio que não desliga, só baixa o volume' },
      { tarefa: 4, texto: 'Se voltar, você vai sentir antes um ardor, coceira ou sensibilidade no local. É nessa hora que o tratamento funciona melhor: aciclovir por 5 dias, começando no primeiro sinal. Se as crises forem muito frequentes, 6 ou mais por ano, existe um tratamento contínuo para preveni-las. Me conta: o que você vai fazer se sentir aquele ardor de novo?', tempo: '30 s' },
    ],
    extra: 'E se ela fosse imunossuprimida, com lesões extensas? (Aciclovir endovenoso 5–10 mg/kg de 8/8 h, por 5 a 7 dias ou até a resolução clínica.)',
  },

  // ----------------------------------------------------- MUL-11 · Herpes recorrente na gestação e supressão
  {
    id: 'MUL-11', materia: 'mulher',
    titulo: 'Grávida, e o herpes voltou de novo',
    local: 'Pré-natal — ambulatório', papel: 'Médico(a) do pré-natal', interacao: 'paciente',
    cenario: 'Tatiane, 30 anos, gestante de 30 semanas, tem herpes genital diagnosticado há 3 anos. Antes de engravidar tinha cerca de 7 crises por ano e nunca fez tratamento contínuo. Nesta gestação já teve 3 crises. Desde ontem à noite sente formigamento, ardor e coceira no mesmo local das crises anteriores, ainda sem feridas. Sem febre.\n\nExame: discreta hiperemia no grande lábio esquerdo, sem vesículas ou úlceras e sem linfonodos palpáveis.',
    mesa: [
      { tipo: 'tabela', titulo: 'Pré-natal', linhas: [['Idade gestacional', '30 semanas'], ['Crises nesta gestação', '3'], ['Crises por ano antes da gestação', 'cerca de 7']] },
    ],
    tarefas: [
      'Em que fase está o quadro? Como você trata agora, e por que agora?',
      'Antes de engravidar, com 7 crises por ano, que opção ela tinha? Que cuidados ela exige?',
      'E na gestação, qual a conduta para prevenir crises no fim da gravidez? E se fosse um primeiro episódio na gestação?',
      'Tatiane tem medo de o remédio fazer mal ao bebê. Explique o plano até o parto.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Está começando de novo, aquele formigamento. Ainda não apareceu ferida."' },
      { gatilho: 'Se falar em aciclovir', fala: '"Mas eu estou grávida. Esse remédio não faz mal ao bebê?"' },
      { gatilho: 'No final', fala: '"Vou ter que tomar remédio até quando?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Pródromo de recorrência (formigamento, ardor, prurido e hiperemia local), sem sintomas sistêmicos nem linfonodos', pts: 1 },
        { tarefa: 1, item: 'Aciclovir 200 mg, 2 comprimidos 3 vezes ao dia por 5 dias (ou 4 comprimidos 2 vezes ao dia por 5 dias), iniciado de preferência no pródromo', pts: 2 },
        { tarefa: 2, item: 'Supressão com 6 ou mais episódios por ano: aciclovir 200 mg, 2 comprimidos 2 vezes ao dia, por até 6 meses, podendo chegar a 2 anos', pts: 1 },
        { tarefa: 2, item: 'Avaliação periódica das funções renal e hepática', pts: 1 },
        { tarefa: 3, item: 'Recidivas frequentes na gestação (ou primoinfecção na gestação): supressão a partir da 36ª semana com aciclovir 400 mg 3 vezes ao dia', pts: 1 },
        { tarefa: 3, item: 'Primeiro episódio na gestação: tratar em qualquer trimestre, como o primeiro episódio fora dela', pts: 1 },
        { tarefa: 4, item: 'Acolheu o medo e explicou o plano (tratar a crise agora; supressão a partir de 36 semanas) em linguagem simples', pts: 1 },
      ],
    },
    errosCriticos: ['Esperar as lesões aparecerem para tratar', 'Não planejar a supressão a partir de 36 semanas'],
    falaModelo: [
      { tarefa: 1, texto: 'É o pródromo de uma recorrência: formigamento, ardor e coceira no mesmo local, com discreta hiperemia, sem febre nem linfonodos. É o melhor momento para tratar, porque a recidiva deve ser tratada de preferência no pródromo. Prescrevo aciclovir 200 mg, 2 comprimidos 3 vezes ao dia por 5 dias, ou 4 comprimidos 2 vezes ao dia por 5 dias.', tempo: '30 s' },
      { tarefa: 2, texto: 'Com 7 crises por ano ela já tinha indicação de terapia supressiva, que vale para 6 ou mais episódios por ano: aciclovir 200 mg, 2 comprimidos 2 vezes ao dia, por até 6 meses, podendo prolongar até 2 anos, com avaliação periódica das funções renal e hepática.', tempo: '25 s' },
      { tarefa: 3, texto: 'Na gestação, como as recidivas são frequentes, faço terapia supressiva a partir da 36ª semana, com aciclovir 400 mg 3 vezes ao dia. Se fosse um primeiro episódio na gestação, eu trataria em qualquer trimestre, como um primeiro episódio comum, e também faria a supressão a partir de 36 semanas.', tempo: '25 s' },
      { tarefa: 4, texto: 'Tatiane, esse remédio é usado na gestação, em qualquer trimestre, quando é preciso. O plano é tratar esta crise agora, nos primeiros sinais, como apagar um fósforo antes de virar incêndio. E, a partir de 36 semanas, você passa a tomar o remédio todos os dias, para diminuir a chance de crise na reta final da gravidez. Me conta com suas palavras como vai ser o tratamento?', tempo: '35 s', analogia: 'Apagar o fósforo antes de virar incêndio' },
    ],
    extra: 'Como diferenciar primoinfecção de recorrência? (Primoinfecção: incubação média de 6 dias, sintomas severos e sistêmicos, linfadenomegalia bilateral, 2–3 semanas. Recorrência: prurido e ardência, sintomas leves e localizados, sem linfadenomegalia, 7–10 dias.)',
  },

  // ----------------------------------------------------- MUL-12 · Sífilis primária
  {
    id: 'MUL-12', materia: 'mulher',
    titulo: 'Uma feridinha que não dói',
    local: 'UBS — consulta', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Vanessa, 26 anos, percebeu há 10 dias, durante o banho, uma ferida no grande lábio direito. Diz que "não dói nada, por isso nem ligou", mas a ferida ainda não fechou. Teve relação sem preservativo com um parceiro eventual há cerca de 3 semanas. Sem febre e sem outras queixas.\n\nExame: lesão ulcerada única, de cerca de 1 cm, indolor à palpação, endurecida e de fundo limpo.',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados', linhas: [['Teste de gravidez', 'negativo'], ['Alergias', 'nega'], ['Doenças prévias', 'nenhuma']] },
    ],
    tarefas: [
      'Qual é o diagnóstico mais provável? Que características da lesão e da história o sustentam?',
      'Prescreva o tratamento. Qual seria a alternativa, e em quem ela não pode ser usada?',
      'Como é feito o seguimento depois do tratamento?',
      'Vanessa diz que, "se a ferida vai sumir sozinha, não precisa de injeção". Responda.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"É só uma feridinha, nem dói."' },
      { gatilho: 'Se falar na injeção', fala: '"Injeção? Duas? Se a ferida vai sumir sozinha, pra que isso?"' },
      { gatilho: 'No final', fala: '"E se eu estivesse grávida, mudava alguma coisa?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Sífilis primária (cancro duro), por Treponema pallidum', pts: 1 },
        { tarefa: 1, item: 'Lesão única, indolor, endurecida, de fundo limpo; incubação de 10 a 90 dias (média de 21), compatível com a exposição há 3 semanas', pts: 2 },
        { tarefa: 2, item: 'Benzilpenicilina benzatina 2,4 milhões UI IM, dose única (1,2 milhão UI em cada glúteo)', pts: 2 },
        { tarefa: 2, item: 'Alternativa: doxiciclina 100 mg VO de 12/12 h por 15 dias, exceto para gestantes', pts: 1 },
        { tarefa: 3, item: 'Seguimento com teste não treponêmico trimestral', pts: 1 },
        { tarefa: 4, item: 'O cancro dura de 2 a 6 semanas e some sozinho, mas sumir não é curar: sem tratamento, a infecção continua', pts: 1 },
      ],
    },
    errosCriticos: ['Dispensar o tratamento porque a lesão é indolor ou some sozinha', 'Prescrever doxiciclina para gestante'],
    falaModelo: [
      { tarefa: 1, texto: 'O diagnóstico mais provável é sífilis primária, o cancro duro, pelo Treponema pallidum. A lesão é única, indolor, endurecida e de fundo limpo, e a exposição foi há 3 semanas: a incubação vai de 10 a 90 dias, com média de 21.', tempo: '25 s' },
      { tarefa: 2, texto: 'Trato com benzilpenicilina benzatina 2,4 milhões de unidades, intramuscular, em dose única, aplicando 1,2 milhão em cada glúteo. A alternativa é doxiciclina 100 mg de 12 em 12 horas por 15 dias, que não pode ser usada em gestantes.', tempo: '25 s' },
      { tarefa: 3, texto: 'O seguimento é feito com teste não treponêmico a cada três meses.', tempo: '10 s' },
      { tarefa: 4, texto: 'Vanessa, a ferida da sífilis some sozinha em 2 a 6 semanas, mas a infecção não vai embora com ela. É como a fumaça que some da janela enquanto o fogo continua aceso dentro de casa. Por isso precisamos tratar agora, com as duas injeções no mesmo dia, uma em cada lado do bumbum, e depois fazer o exame de sangue de 3 em 3 meses para confirmar que deu certo. Se estivesse grávida, só a injeção serviria, porque o comprimido alternativo não pode ser usado na gestação. Me conta: por que tratar mesmo com a ferida sumindo?', tempo: '50 s', analogia: 'Fumaça que some enquanto o fogo continua aceso' },
    ],
    extra: 'Que fases são agrupadas como sífilis recente e recebem o mesmo esquema? (Primária, secundária e latente recente, com até um ano de evolução.)',
  },

  // ----------------------------------------------------- MUL-13 · Úlceras genitais: comparação
  {
    id: 'MUL-13', materia: 'mulher',
    titulo: 'Cinco úlceras, cinco agentes',
    local: 'Banca do OSCE — diagnóstico diferencial', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador apresenta cinco descrições de lesões genitais em mulheres e pede que você identifique cada uma e explique o raciocínio.',
    mesa: [
      { tipo: 'texto', texto: 'Lesão A — vesículas agrupadas que evoluíram para úlceras rasas muito dolorosas e crostas; febre baixa e mialgia; linfonodos inguinais aumentados dos dois lados.\n\nLesão B — úlcera única, indolor, endurecida e de fundo limpo, surgida cerca de 3 semanas após a exposição.\n\nLesão C — várias úlceras dolorosas, de base amolecida e fundo purulento, com mau odor, contornos eritematoedematosos e sangramento à manipulação; linfonodo inguinal supurado de um lado só.\n\nLesão D — lesões indolores, de borda bem delimitada e fundo granuloso, vermelho vivo e sangrante, dispostas "em espelho" nos dois lados da vulva; sem linfonodos aumentados; evolução de meses.\n\nLesão E — pequena úlcera indolor que sumiu sozinha; semanas depois, linfonodos inguinais dolorosos que drenam por vários orifícios.' },
    ],
    tarefas: [
      'Dê o diagnóstico e o agente de cada lesão.',
      'Quais são dolorosas e quais são indolores? Como os linfonodos ajudam a diferenciá-las?',
      'Qual exame dá o diagnóstico definitivo da lesão D, e o que ele mostra? Quais as sequelas possíveis da lesão E?',
      'Uma adolescente com úlcera vulvar dolorosa nega relação sexual. O que você lembra?',
    ],
    ator: [
      { gatilho: 'Examinador, na lesão C', fala: '"Úlcera com linfonodo inguinal. Não poderia ser sífilis?"' },
      { gatilho: 'Examinador, na lesão D', fala: '"Lesões iguais dos dois lados. Por que isso acontece?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'A: herpes genital (HSV-1/HSV-2) · B: sífilis primária (Treponema pallidum) · C: cancro mole (Haemophilus ducreyi) · D: donovanose (Klebsiella granulomatis) · E: linfogranuloma venéreo (Chlamydia trachomatis L1, L2, L3)', pts: 3 },
        { tarefa: 2, item: 'Dolorosas: herpes e cancro mole · Indolores: cancro duro, donovanose e a úlcera do LGV', pts: 1 },
        { tarefa: 2, item: 'Linfonodos: bilaterais na primoinfecção herpética; adenopatia satélite supurativa (pode fistulizar) no cancro mole; ausentes na donovanose; dolorosos e drenando por múltiplos orifícios ("bico de regador") no LGV', pts: 1 },
        { tarefa: 3, item: 'Donovanose: biópsia com estudo anatomopatológico mostrando corpúsculos de Donovan; lesões em espelho por autoinoculação', pts: 1 },
        { tarefa: 3, item: 'LGV: fases de inoculação, disseminação linfática regional e sequelas (elefantíase genital, estenose retal e uretral)', pts: 1 },
        { tarefa: 4, item: 'Nem toda úlcera genital é IST: úlcera de Lipschütz, doença de Behçet, entre outras', pts: 1 },
      ],
    },
    errosCriticos: ['Confundir cancro mole (doloroso, purulento) com cancro duro (indolor, fundo limpo)', 'Afirmar que toda úlcera genital é IST'],
    falaModelo: [
      { tarefa: 1, texto: 'A é herpes genital, pelo HSV; B, sífilis primária, pelo Treponema pallidum; C, cancro mole, pelo Haemophilus ducreyi; D, donovanose, pela Klebsiella granulomatis; e E, linfogranuloma venéreo, pela Chlamydia trachomatis sorotipos L1 a L3.', tempo: '25 s' },
      { tarefa: 2, texto: 'Doem o herpes e o cancro mole; não doem o cancro duro, a donovanose e a pequena úlcera do linfogranuloma. Eu lembro assim: o cancro duro é duro e calado; o mole é mole, purulento e dolorido. Os linfonodos ajudam: no herpes primário são bilaterais; no cancro mole há adenite satélite supurativa, que pode fistulizar; na donovanose não há adenite; e no linfogranuloma a adenopatia é dolorosa e drena por vários orifícios, em bico de regador.', tempo: '40 s', analogia: 'Cancro duro: duro e calado; cancro mole: mole e dolorido' },
      { tarefa: 3, texto: 'Na donovanose, o diagnóstico definitivo é a biópsia, com estudo anatomopatológico mostrando os corpúsculos de Donovan; as lesões em espelho aparecem porque ela é autoinoculável. O linfogranuloma passa por inoculação, disseminação linfática regional e sequelas, que podem ser elefantíase genital e estenose retal e uretral.', tempo: '30 s' },
      { tarefa: 4, texto: 'Lembro que nem toda úlcera genital é IST: existem, por exemplo, a úlcera de Lipschütz e a doença de Behçet. Anamnese e exame físico são fundamentais antes de rotular.', tempo: '15 s' },
    ],
    extra: 'Qual a incubação e a duração do cancro mole? (Incubação de 3 a 7 dias e duração de cerca de 15 dias; é mais comum em homens.)',
  },

  // ----------------------------------------------------- MUL-14 · Linfogranuloma venéreo
  {
    id: 'MUL-14', materia: 'mulher',
    titulo: 'A íngua abriu em vários buraquinhos',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Michele, 28 anos, há 3 semanas notou uma "íngua" na virilha esquerda, que cresceu, ficou muito dolorida e, há 4 dias, começou a drenar secreção por vários pequenos orifícios. Teve relação sem preservativo com um parceiro novo há 2 meses. Não está grávida.\n\nExame: massa inguinal esquerda dolorosa, com vários pontos de drenagem de secreção. Vulva sem lesões no momento.',
    mesa: [
      { tipo: 'tabela', titulo: 'Dados', linhas: [['Temperatura', '37,4 °C'], ['Lesão genital atual', 'nenhuma visível'], ['Teste de gravidez', 'negativo']] },
    ],
    tarefas: [
      'Qual é a hipótese diagnóstica e o agente? Justifique pela sequência dos acontecimentos.',
      'Como diferenciar essa adenopatia da que ocorre no cancro mole, no herpes e na donovanose?',
      'Quais as sequelas se a doença evoluir? Explique à paciente por que ela precisa ser tratada.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Essa íngua abriu e está saindo secreção por vários buraquinhos."' },
      { gatilho: 'Se perguntar sobre feridas genitais anteriores', fala: '"Teve uma feridinha há uns dois meses, mas não doía e sumiu sozinha em poucos dias."' },
      { gatilho: 'No final', fala: '"Se a íngua sarar, ficou tudo bem?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Linfogranuloma venéreo, por Chlamydia trachomatis sorotipos L1, L2 e L3', pts: 1 },
        { tarefa: 1, item: 'Perguntou ativamente sobre lesão genital prévia', pts: 1 },
        { tarefa: 1, item: 'Fases: inoculação (pequena úlcera única, indolor, autolimitada) → disseminação linfática regional (linfadenopatia inguinal dolorosa, supurando por múltiplos orifícios, "bico de regador") → sequelas', pts: 2 },
        { tarefa: 2, item: 'Cancro mole: a adenite supurativa acompanha úlceras dolorosas, geralmente múltiplas, de fundo purulento', pts: 1 },
        { tarefa: 2, item: 'Herpes: lesões dolorosas, com linfadenomegalia bilateral na primoinfecção · Donovanose: não há adenite', pts: 1 },
        { tarefa: 3, item: 'Sequelas: elefantíase genital, estenose retal e uretral', pts: 1 },
        { tarefa: 3, item: 'Explicou que a doença evolui em fases e que tratar evita as sequelas, com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Não perguntar sobre lesão genital prévia', 'Atribuir a adenopatia ao cancro mole sem úlcera dolorosa'],
    falaModelo: [
      { tarefa: 1, texto: 'Pergunto se ela teve alguma ferida genital antes, e ela conta que teve uma pequena, indolor, que sumiu sozinha. A hipótese é linfogranuloma venéreo, pela Chlamydia trachomatis sorotipos L1, L2 e L3. A sequência é típica: primeiro a fase de inoculação, com essa pequena úlcera única, indolor e autolimitada; depois a disseminação linfática regional, com linfonodo inguinal doloroso que supura por vários orifícios, o bico de regador; e, se não for tratada, a fase de sequelas.', tempo: '40 s' },
      { tarefa: 2, texto: 'No cancro mole, a adenite supurativa vem junto com úlceras dolorosas, geralmente múltiplas, de fundo purulento, que ela não tem. No herpes, as lesões doem muito, e os linfonodos dos dois lados aparecem na primoinfecção. Na donovanose não há adenite.', tempo: '25 s' },
      { tarefa: 3, texto: 'As sequelas possíveis são elefantíase genital, estenose retal e estenose uretral. Michele, essa infecção anda em etapas, como uma enchente: a feridinha foi a chuva que passou rápido, a íngua é o rio que encheu, e, se a água não for tratada, ela entope os canos e deixa estrago, como inchaço crônico na região genital e estreitamento do reto e da uretra. Por isso vamos tratar agora, mesmo que a íngua melhore. Me conta o que você entendeu?', tempo: '45 s', analogia: 'Enchente que entope os canos' },
    ],
    extra: 'Quais são os agentes mais comuns de úlcera genital entre as ISTs? (HSV-1 e HSV-2, Treponema pallidum, Haemophilus ducreyi, Chlamydia trachomatis L1–L3 e Klebsiella granulomatis.)',
  },
  // ===================================================== FISIOLOGIA DO CICLO MENSTRUAL (MUL-16 a MUL-24)
  // ----------------------------------------------------- MUL-16 · Fases do ciclo e ovulação
  {
    id: 'MUL-16', materia: 'mulher',
    titulo: 'Quando é o meu dia fértil?',
    local: 'UBS — planejamento reprodutivo', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Carolina, 29 anos, quer engravidar e pede que você explique como funciona o ciclo menstrual e quando ela ovula. Colha os dados do ciclo e oriente a paciente.',
    mesa: [],
    tarefas: [
      'Como se conta o ciclo, e quais são as fases do ciclo ovariano e do endometrial? Como elas se correspondem?',
      'O que desencadeia a ovulação, e quanto tempo depois ela ocorre?',
      'Com o ciclo dela, em que dia ela provavelmente ovula? Por que não é sempre o dia 14?',
      'Explique à Carolina e diga como seria possível acompanhar a ovulação.',
    ],
    anamnese: [
      { tema: 'Duração e regularidade do ciclo', resposta: '"Meu ciclo é certinho, de 32 dias. A menstruação dura uns 5 dias."' },
      { tema: 'Data da última menstruação', resposta: '"Começou hoje."' },
      { tema: 'Tentativas e contracepção', resposta: '"Parei o anticoncepcional há 4 meses. Li que a ovulação é sempre no dia 14, então a gente tenta só nesse dia."' },
      { tema: 'Doenças e medicamentos', resposta: '"Sou saudável e não tomo nenhum remédio."' },
    ],
    placas: [
      { pedido: 'um ultrassom seriado do ciclo', placa: 'No 17º dia: folículo dominante de 19 mm no ovário esquerdo; endométrio trilaminar de 9 mm.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), a gente tenta sempre no dia 14 e nada."' },
      { gatilho: 'Se falar em fase lútea', fala: '"Por que essa segunda parte do ciclo não muda?"' },
      { gatilho: 'No final', fala: '"Tem algum exame que mostra que eu estou ovulando?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'D1 = primeiro dia da menstruação; ciclo ovariano: folicular, ovulatória e lútea; endometrial: menstrual, proliferativa e secretora', pts: 1 },
        { tarefa: 1, item: 'Correspondência: folicular ↔ proliferativa; lútea ↔ secretora', pts: 1 },
        { tarefa: 2, item: 'Estradiol acima de um limiar crítico (geralmente > 200 pg/mL) por mais de 36 a 48 h → feedback positivo → pico de LH', pts: 1 },
        { tarefa: 2, item: 'Ovulação cerca de 36 h após o início do pico de LH (~12 h após o ápice); prostaglandinas e colagenases rompem o folículo', pts: 1 },
        { tarefa: 3, item: 'Perguntou a duração do ciclo e a data da última menstruação', pts: 1 },
        { tarefa: 3, item: 'Fase lútea fixa (~14 dias, vida do corpo lúteo); a folicular é que varia → ciclo de 32 dias: ovulação por volta do 18º dia', pts: 1 },
        { tarefa: 4, item: 'Explicou em linguagem acessível; ultrassom: folículo pré-ovulatório > 18 mm e endométrio trilaminar', pts: 1 },
      ],
    },
    errosCriticos: ['Afirmar que a ovulação ocorre sempre no 14º dia', 'Contar o ciclo a partir do fim da menstruação'],
    falaModelo: [
      { tarefa: 1, texto: 'O ciclo começa no primeiro dia da menstruação, o D1. No ovário há três fases: folicular, ovulatória e lútea. No endométrio, menstrual, proliferativa e secretora. A primeira metade é folicular no ovário e proliferativa no endométrio; a segunda é lútea e secretora.', tempo: '25 s' },
      { tarefa: 2, texto: 'O folículo dominante produz estradiol. Quando ele passa de um limiar crítico, geralmente acima de 200 pg/mL, e se mantém por 36 a 48 horas, o estrogênio passa a fazer feedback positivo e gera o pico de LH. A ovulação ocorre cerca de 36 horas depois do início do pico, com prostaglandinas e colagenases rompendo o folículo.', tempo: '35 s' },
      { tarefa: 3, texto: 'O ciclo dela é de 32 dias. A fase lútea é fixa, de cerca de 14 dias, porque depende da vida do corpo lúteo; quem varia é a fase folicular. Então ela ovula por volta do 18º dia, e não do 14º.', tempo: '20 s' },
      { tarefa: 4, texto: 'Carolina, o "dia 14" só vale para quem tem ciclo de 28 dias. Depois que o óvulo sai, o ciclo corre num tempo fixo de uns 14 dias, como um cronômetro que só começa a contar na ovulação; a primeira parte é que muda de mulher para mulher. Como o seu ciclo tem 32 dias, a ovulação deve ser perto do dia 18, contando a partir do primeiro dia da menstruação. O ultrassom pode acompanhar: um folículo acima de 18 mm está pronto para ovular. Me conta: como você vai contar os dias agora?', tempo: '45 s', analogia: 'Cronômetro que só começa na ovulação' },
    ],
    extra: 'Como o GnRH muda ao longo do ciclo? (Fase folicular: pulsos de maior frequência e menor amplitude, estimulando FSH. Fase lútea: menor frequência e maior amplitude, estimulando LH.)',
  },

  // ----------------------------------------------------- MUL-17 · Amenorreia por alteração da pulsatilidade
  {
    id: 'MUL-17', materia: 'mulher',
    titulo: 'Parei de menstruar desde que comecei a treinar para a maratona',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Isadora, 24 anos, procura atendimento porque não menstrua há 5 meses. Conduza a anamnese, explique o mecanismo provável e oriente a paciente.',
    mesa: [],
    tarefas: [
      'Conduza a anamnese da amenorreia. Que fatores que modulam o eixo hipotálamo–hipófise–ovário você investiga?',
      'Qual é o mecanismo provável da amenorreia dela?',
      'Quais as consequências se a falta de estrogênio persistir?',
      'Explique à Isadora, que acha que "não menstruar é ótimo para o treino".',
    ],
    anamnese: [
      { tema: 'Padrão menstrual anterior', resposta: '"Era certinho, todo mês. Parou há 5 meses."' },
      { tema: 'Gestação', resposta: '"Fiz teste semana passada, deu negativo."' },
      { tema: 'Atividade física', resposta: '"Treino duas vezes por dia, bem pesado, para uma maratona."' },
      { tema: 'Alimentação e peso', resposta: '"Cortei muita coisa para ficar leve. Perdi 7 kg em 6 meses." (IMC atual 17,5)' },
      { tema: 'Estresse', resposta: '"Ando ansiosa com a prova, mas é normal."' },
      { tema: 'Medicamentos e doenças', resposta: '"Não tomo nenhum remédio. Nunca tive problema de tireoide."' },
    ],
    placas: [
      { pedido: 'exames', placa: 'Beta-hCG negativo; TSH e prolactina normais.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), na verdade estou achando ótimo não menstruar."' },
      { gatilho: 'Se falar em reduzir o treino', fala: '"Mas a maratona é daqui a 3 meses!"' },
      { gatilho: 'No final', fala: '"Mas eu sou nova. Osso fraco é coisa de idosa, não é?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Afastou gestação e caracterizou o padrão menstrual anterior', pts: 1 },
        { tarefa: 1, item: 'Investigou os moduladores do eixo: exercício intenso, estresse, anorexia/bulimia (alimentação e peso), hiperprolactinemia/fármacos e hipotireoidismo', pts: 1 },
        { tarefa: 2, item: 'Amenorreia por alteração da pulsatilidade gonadotrófica: o GnRH pulsátil comanda FSH e LH', pts: 1 },
        { tarefa: 2, item: 'Exercício intenso eleva as endorfinas, inibidoras do GnRH (como a dopamina); restrição alimentar também altera o eixo; sem folículo dominante, não há ovulação e o estrogênio cai', pts: 1 },
        { tarefa: 3, item: 'Deficiência estrogênica: osteoporose, aterosclerose e atrofia urogenital e mamária', pts: 1 },
        { tarefa: 4, item: 'Explicou que a menstruação é sinal de que o eixo funciona; acolheu e propôs ajustar treino e alimentação com acompanhamento', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar a amenorreia como benéfica', 'Não afastar gestação'],
    falaModelo: [
      { tarefa: 1, texto: 'Primeiro afasto gestação e pergunto como era a menstruação antes. Depois investigo o que modula o eixo: exercício intenso, estresse, alimentação e perda de peso, uso de remédios que mexem na prolactina e sintomas de tireoide. Ela treina duas vezes por dia, cortou a alimentação e perdeu 7 kg.', tempo: '30 s' },
      { tarefa: 2, texto: 'O mais provável é amenorreia por alteração da pulsatilidade do GnRH. O hipotálamo libera GnRH em pulsos, e são esses pulsos que comandam o FSH e o LH. No exercício intenso as endorfinas ficam elevadas e, como a dopamina, inibem esse comando; a restrição alimentar também altera o eixo. Sem os pulsos certos, não há folículo dominante nem ovulação, e o estrogênio cai.', tempo: '35 s' },
      { tarefa: 3, texto: 'Se a falta de estrogênio persistir, o osso perde massa, com risco de osteoporose; o sistema cardiovascular fica mais exposto à aterosclerose; e há atrofia da vagina, do útero e das mamas.', tempo: '20 s' },
      { tarefa: 4, texto: 'Isadora, a menstruação é como a luz do painel que mostra que o motor está funcionando: quando ela apaga, não é economia, é sinal de que o comando do cérebro para os ovários está desligado. Sem estrogênio, o osso enfraquece mesmo em quem é jovem. Vamos ajustar o treino e a alimentação, com acompanhamento, para o comando voltar. Me conta: o que você acha possível mudar até a prova?', tempo: '40 s', analogia: 'Luz do painel do carro' },
    ],
    extra: 'Por que a liberação contínua de GnRH não funciona? (Causa downregulation dos receptores de GnRH, bloqueando sua ação; o GnRH precisa ser pulsátil.)',
  },

  // ----------------------------------------------------- MUL-18 · Contracepção hormonal e reserva ovariana
  {
    id: 'MUL-18', materia: 'mulher',
    titulo: 'A pílula guarda os meus óvulos?',
    local: 'UBS — planejamento reprodutivo', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Marina, 23 anos, usa anticoncepcional hormonal combinado (estrogênio + progestagênio) há 5 anos. Leu que "a pílula guarda os óvulos, porque a mulher não ovula", e pensa em usar até os 40 anos para "atrasar a menopausa". Quer entender como a pílula funciona.',
    mesa: [],
    tarefas: [
      'Qual é o principal mecanismo do anticoncepcional hormonal combinado? Explique pelo eixo HHO.',
      'Como a reserva de folículos evolui ao longo da vida?',
      'A pílula preserva a reserva ovariana? Por quê?',
      'Explique à Marina e responda ao plano dela.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Se eu não ovulo, os óvulos ficam guardados, né?"' },
      { gatilho: 'Ao ouvir sobre a reserva', fala: '"Então eu perco óvulo mesmo tomando a pílula?"' },
      { gatilho: 'No final', fala: '"Então a pílula não atrasa a menopausa?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Estrogênio + progestagênio exógenos fazem feedback negativo sobre FSH e LH', pts: 1 },
        { tarefa: 1, item: 'Sem folículo dominante e sem pico de LH: suprime o eixo e impede a ovulação', pts: 1 },
        { tarefa: 2, item: 'Pico de 6 a 8 milhões de folículos com 18–20 semanas de gestação; 1–2 milhões ao nascer; 300 a 500 mil na puberdade', pts: 1 },
        { tarefa: 2, item: 'A cada ciclo, atresia de cerca de 1.000 folículos; menopausa = esgotamento da reserva', pts: 1 },
        { tarefa: 3, item: 'Não: a perda folicular ocorre principalmente por apoptose, e nenhuma intervenção a freia, nem o bloqueio da ovulação com anticoncepcional', pts: 2 },
        { tarefa: 4, item: 'Corrigiu a crença com linguagem acessível e respeito, sem desestimular o método contraceptivo', pts: 1 },
      ],
    },
    errosCriticos: ['Afirmar que a pílula preserva a reserva ovariana ou atrasa a menopausa'],
    falaModelo: [
      { tarefa: 1, texto: 'O anticoncepcional combinado traz estrogênio e progestagênio de fora. Eles fazem feedback negativo sobre o hipotálamo e a hipófise, o FSH e o LH caem, nenhum folículo vira dominante e não há pico de LH. Sem pico, não há ovulação.', tempo: '25 s' },
      { tarefa: 2, texto: 'A produção de folículos começa na vida intrauterina e chega ao máximo com 18 a 20 semanas de gestação, 6 a 8 milhões. Ao nascer restam 1 a 2 milhões; na puberdade, 300 a 500 mil. A cada ciclo, cerca de mil sofrem atresia, e a menopausa é o esgotamento dessa reserva.', tempo: '30 s' },
      { tarefa: 3, texto: 'A pílula não preserva a reserva. A perda folicular acontece principalmente por apoptose, uma morte celular programada, e até hoje nenhuma intervenção consegue freá-la, nem o bloqueio da ovulação com anticoncepcional.', tempo: '20 s' },
      { tarefa: 4, texto: 'Marina, a pílula impede que um óvulo seja liberado a cada mês, mas não para o relógio dos ovários. É como uma ampulheta: a areia continua caindo mesmo que ninguém olhe para ela. A pílula é um ótimo método para evitar gravidez, mas não guarda óvulos nem atrasa a menopausa, e isso vale para planejar quando você quer engravidar. Me conta: o que você entendeu sobre a pílula?', tempo: '40 s', analogia: 'Ampulheta que continua caindo' },
    ],
    extra: 'Qual é a sequência da foliculogênese? (Primordial, primário, secundário — com células da teca e resposta às gonadotrofinas —, terciário, com antro, e maduro de Graaf, pré-ovulatório.)',
  },

  // ----------------------------------------------------- MUL-19 · Ciclos anovulatórios
  {
    id: 'MUL-19', materia: 'mulher',
    titulo: 'A menstruação vem quando quer',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Débora, 31 anos, há 1 ano tem menstruações irregulares. Conduza a anamnese, interprete os exames e explique o que está acontecendo.',
    mesa: [],
    tarefas: [
      'Conduza a anamnese do sangramento. O que os exames sugerem?',
      'Por que, sem ovulação, o endométrio cresce demais e sangra de forma irregular?',
      'Quais são os principais riscos dos ciclos anovulatórios?',
      'Explique à Débora o que está acontecendo.',
    ],
    anamnese: [
      { tema: 'Padrão do sangramento', resposta: '"Às vezes fico 2 ou 3 meses sem menstruar, e depois vem muito, por vários dias."' },
      { tema: 'Gestação e contracepção', resposta: '"Não uso anticoncepcional. O teste de gravidez deu negativo."' },
      { tema: 'Antes do problema', resposta: '"Antes era certinho, todo mês."' },
      { tema: 'Medicamentos e doenças', resposta: '"Não tomo nenhum remédio."' },
    ],
    placas: [
      { pedido: 'o ultrassom transvaginal', placa: 'Endométrio espessado; ovários sem corpo lúteo.' },
      { pedido: 'a progesterona na segunda metade do ciclo', placa: 'Progesterona baixa.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), minha menstruação vem quando quer, e quando vem é uma hemorragia."' },
      { gatilho: 'Se falar em câncer', fala: '"Câncer? Eu tenho câncer?"' },
      { gatilho: 'No final', fala: '"Por que antes era certinho?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Caracterizou o sangramento (intervalo, duração, volume) e afastou gestação', pts: 1 },
        { tarefa: 1, item: 'Ciclos anovulatórios: sem pico efetivo de LH, não há ovulação nem corpo lúteo (principal produtor de progesterona) — por isso a progesterona baixa', pts: 1 },
        { tarefa: 2, item: 'Estrogênio sem oposição da progesterona: proliferação endometrial exacerbada (mitoses, proliferação glandular e estromal)', pts: 1 },
        { tarefa: 2, item: 'Sem fase secretora e sem a queda cíclica de progesterona e estrogênio, o endométrio não descama de forma organizada', pts: 1 },
        { tarefa: 3, item: 'Riscos: sangramento irregular, hiperplasia endometrial e câncer de endométrio', pts: 2 },
        { tarefa: 4, item: 'Explicou que é um risco a acompanhar, não um diagnóstico de câncer, com linguagem acessível', pts: 1 },
      ],
    },
    errosCriticos: ['Dizer que ela tem câncer', 'Não relacionar o sangramento irregular à falta de ovulação'],
    falaModelo: [
      { tarefa: 1, texto: 'Pergunto o intervalo, a duração e o volume do sangramento e afasto gestação: ela fica meses sem menstruar e depois sangra muito. Os exames sugerem ciclos anovulatórios: sem pico efetivo de LH não há ovulação, e sem ovulação não se forma o corpo lúteo, principal produtor de progesterona. Por isso a progesterona está baixa e o ultrassom não mostra corpo lúteo.', tempo: '35 s' },
      { tarefa: 2, texto: 'Sem progesterona, o estrogênio age sem oposição sobre o endométrio, estimulando mitoses e proliferação glandular e estromal, e o endométrio engrossa demais. Num ciclo normal, a progesterona transforma o endométrio em secretor, e a queda do estrogênio e da progesterona no fim do ciclo produz uma descamação organizada. Sem isso, ele sangra de forma irregular.', tempo: '35 s' },
      { tarefa: 3, texto: 'Os principais riscos são sangramento irregular, hiperplasia endometrial e câncer de endométrio.', tempo: '10 s' },
      { tarefa: 4, texto: 'Débora, quando o ovário libera o óvulo, ele passa a produzir progesterona, que funciona como o maestro do útero: organiza o revestimento e marca a hora da menstruação. Sem ovulação, não tem maestro; o revestimento cresce sem ordem e se solta de forma bagunçada. Isso não quer dizer que você tem câncer: é um risco que vamos acompanhar e tratar. Me conta o que você entendeu?', tempo: '40 s', analogia: 'Progesterona como maestro do útero' },
    ],
    extra: 'Que ambiente hormonal no ovário atrapalha a maturação do folículo? (Ambiente predominantemente androgênico inibe a maturação folicular e favorece a atresia.)',
  },

  // ----------------------------------------------------- MUL-20 · Teoria das duas células, duas gonadotrofinas
  {
    id: 'MUL-20', materia: 'mulher',
    titulo: 'Explique o esquema das duas células',
    local: 'Banca do OSCE — fisiologia aplicada', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador coloca na mesa um esquema com lacunas e pede que você explique a produção hormonal do folículo e a seleção do folículo dominante.',
    mesa: [
      { tipo: 'texto', texto: 'Célula da teca — receptor de [ ? ] · colesterol → pregnenolona → progesterona → [ ? ]\nCélula da granulosa — receptor de [ ? ] · enzima [ ? ] → [ ? ]\n\nE1, E2 e E3: de onde vem cada um?' },
    ],
    tarefas: [
      'Complete o esquema e explique a teoria das duas células, duas gonadotrofinas.',
      'Quais são os três estrogênios e de onde vem cada um?',
      'Como um folículo se torna dominante, e o que acontece com os demais?',
      'Por que um ambiente predominantemente androgênico prejudica o folículo?',
    ],
    ator: [
      { gatilho: 'Examinador, na tarefa 1', fala: '"Então a granulosa produz estrogênio sozinha, a partir do colesterol?"' },
      { gatilho: 'Examinador, na tarefa 3', fala: '"Se o FSH cai no meio da fase folicular, como o dominante continua crescendo?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Teca: receptor de LH; colesterol → pregnenolona → progesterona → androgênios', pts: 1 },
        { tarefa: 1, item: 'Granulosa: receptor de FSH; a aromatase (induzida pelo FSH) converte os androgênios da teca em estrogênios', pts: 1 },
        { tarefa: 1, item: 'Todos os esteroides sexuais vêm do colesterol; a granulosa depende dos androgênios da teca', pts: 1 },
        { tarefa: 2, item: 'Estradiol (E2): principal ovariano, maior atividade biológica · Estrona (E1): conversão periférica (tecido adiposo, músculo, fígado) · Estriol (E3): predomínio placentário, na gestação', pts: 1 },
        { tarefa: 3, item: '8 a 12 folículos recrutados por ciclo; 1 dominante, pela disponibilidade preferencial de FSH', pts: 1 },
        { tarefa: 3, item: 'FSH → aromatase → estrogênio → up-regulation dos receptores de FSH e LH: o dominante cresce mesmo com FSH baixo; estrogênio e inibina B fazem feedback negativo sobre o FSH; os demais sofrem atresia (antimülleriano + inibina B)', pts: 1 },
        { tarefa: 4, item: 'Ambiente androgênico inibe a maturação folicular e favorece a atresia', pts: 1 },
      ],
    },
    errosCriticos: ['Atribuir a aromatase à célula da teca', 'Dizer que a granulosa produz estrogênio sem os androgênios da teca'],
    falaModelo: [
      { tarefa: 1, texto: 'Na célula da teca, o LH estimula a conversão do colesterol em pregnenolona, progesterona e, por fim, androgênios. Esses androgênios passam para a célula da granulosa, onde o FSH induz a aromatase, que os converte em estrogênios. São duas células e duas gonadotrofinas trabalhando juntas, e todos os esteroides partem do colesterol.', tempo: '30 s' },
      { tarefa: 2, texto: 'O estradiol, E2, é o principal estrogênio ovariano e o de maior atividade biológica. A estrona, E1, vem da conversão periférica, no tecido adiposo, no músculo e no fígado. O estriol, E3, predomina na gestação, de origem placentária.', tempo: '25 s' },
      { tarefa: 3, texto: 'Por ciclo são recrutados 8 a 12 folículos, e um se torna dominante: o que tem disponibilidade preferencial de FSH. O FSH ativa a aromatase, e o estrogênio produzido aumenta os receptores de FSH e LH; com mais receptores, esse folículo continua crescendo mesmo quando o FSH cai. O estrogênio e a inibina B fazem feedback negativo sobre o FSH, e os outros folículos sofrem atresia, acelerada pelo antimülleriano e pela inibina B.', tempo: '40 s' },
      { tarefa: 4, texto: 'Se o ambiente for predominantemente androgênico, a maturação folicular é inibida e a atresia é favorecida. É como uma linha de montagem: a teca entrega a peça bruta, o androgênio, e a granulosa dá o acabamento, o estrogênio; se a peça bruta se acumula sem acabamento, a linha emperra.', tempo: '30 s', analogia: 'Linha de montagem: peça bruta e acabamento' },
    ],
    extra: 'Qual é a função do FSH e a do LH? (FSH: crescimento e desenvolvimento folicular e indução da aromatase. LH: luteinização da teca e da granulosa, produção de androgênios e, no pico, a ovulação.)',
  },

  // ----------------------------------------------------- MUL-21 · Endométrio ao ultrassom
  {
    id: 'MUL-21', materia: 'mulher',
    titulo: 'Três laudos de endométrio',
    local: 'Ambulatório de ginecologia — discussão com o interno', papel: 'Médico(a) preceptor(a)', interacao: 'interno',
    cenario: 'O interno separou três laudos de ultrassom transvaginal de pacientes com ciclos regulares de 28 dias e não entende "por que o endométrio muda tanto". Ele pede que você explique usando os laudos.',
    mesa: [
      { tipo: 'texto', texto: 'Laudo 1 — endométrio fino, linear; paciente no 2º dia da menstruação.\n\nLaudo 2 — endométrio trilaminar, com linha ecogênica central, 9 mm; folículo de 19 mm no ovário direito.\n\nLaudo 3 — endométrio hiperecogênico, sem aspecto trilaminar, 13 mm; ovário com corpo lúteo.' },
    ],
    tarefas: [
      'Em que fase do ciclo endometrial e do ovariano está cada paciente?',
      'Que hormônio comanda a fase proliferativa, e o que ele faz no endométrio?',
      'Que hormônio comanda a fase secretora, o que ele faz, e para que serve essa transformação?',
      'Explique ao interno como a menstruação acontece e como o novo ciclo começa.',
    ],
    ator: [
      { gatilho: 'Interno, no laudo 2', fala: '"Esse folículo de 19 mm significa o quê?"' },
      { gatilho: 'Interno, no final', fala: '"Então a menstruação é o endométrio morrendo por falta de sangue?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Laudo 1: menstrual (início do ciclo) · Laudo 2: proliferativa tardia/pré-ovulatória, com folículo pré-ovulatório (> 18 mm) · Laudo 3: secretora, fase lútea', pts: 2 },
        { tarefa: 2, item: 'Estrogênio: tamponamento dos vasos e efeito cicatricial; mitoses e proliferação glandular e estromal (espessamento); vasos maiores e tortuosidade glandular; mais receptores de progesterona', pts: 1 },
        { tarefa: 3, item: 'Progesterona: aumenta a tortuosidade e a secreção glandular; acúmulo de glicogênio e glicoproteínas; arteríolas espiraladas tortuosas', pts: 1 },
        { tarefa: 3, item: 'Finalidade: nutrir o blastocisto e facilitar a implantação e a invasão trofoblástica', pts: 1 },
        { tarefa: 4, item: 'Sem fecundação: luteólise em ~14 dias, queda de progesterona e estrogênio, vasoespasmo das arteríolas espiraladas, isquemia e descamação da camada funcional (a basal regenera)', pts: 1 },
        { tarefa: 4, item: 'A queda hormonal retira o feedback negativo: o FSH sobe e recruta a próxima coorte de folículos', pts: 1 },
      ],
    },
    errosCriticos: ['Atribuir a fase proliferativa à progesterona', 'Confundir o padrão trilaminar com a fase secretora'],
    falaModelo: [
      { tarefa: 1, texto: 'O laudo 1 é do início do ciclo, na menstruação, com o endométrio fino. O laudo 2 é a fase proliferativa tardia, pré-ovulatória: endométrio trilaminar de 8 a 10 mm e um folículo de 19 mm, pré-ovulatório porque passa de 18 mm. O laudo 3 é a fase secretora, já na fase lútea: endométrio hiperecogênico, sem o aspecto trilaminar, de 10 a 15 mm, e corpo lúteo no ovário.', tempo: '40 s' },
      { tarefa: 2, texto: 'A fase proliferativa é comandada pelo estrogênio. Ele tampona os vasos que sangraram e tem efeito cicatricial, aumenta as mitoses e a proliferação de glândulas e estroma, engrossando o endométrio, faz os vasos crescerem até a superfície e aumenta os receptores de progesterona, preparando a fase seguinte.', tempo: '30 s' },
      { tarefa: 3, texto: 'A fase secretora é comandada pela progesterona do corpo lúteo. Ela aumenta a tortuosidade e a secreção das glândulas, acumula glicogênio e glicoproteínas nas células e deixa as arteríolas espiraladas tortuosas. Tudo isso prepara o endométrio para nutrir o blastocisto e facilita a implantação.', tempo: '30 s' },
      { tarefa: 4, texto: 'Sem fecundação, o corpo lúteo atrofia em cerca de 14 dias. Caem a progesterona e o estrogênio, as arteríolas espiraladas entram em vasoespasmo, há isquemia e a camada funcional descama: é a menstruação, e a basal regenera tudo. Com a queda hormonal, some o feedback negativo, o FSH volta a subir e recruta os próximos folículos. É como um quarto de hóspedes arrumado todo mês: se o hóspede não chega, troca-se a roupa de cama e prepara-se tudo de novo. Ficou claro? Me explica com suas palavras.', tempo: '45 s', analogia: 'Quarto de hóspedes arrumado de novo' },
    ],
    extra: 'Qual camada do endométrio regenera após a menstruação? (A camada basal; a funcional é a que descama.)',
  },

  // ----------------------------------------------------- MUL-22 · Corpo lúteo e hCG
  {
    id: 'MUL-22', materia: 'mulher',
    titulo: 'A menstruação não veio e o teste deu positivo',
    local: 'UBS — primeira consulta de pré-natal', papel: 'Médico(a) da UBS', interacao: 'paciente',
    cenario: 'Letícia, 27 anos, ciclos regulares de 28 dias, está com 10 dias de atraso menstrual e teste de gravidez positivo, numa gestação planejada. Ela quer entender por que a menstruação "não desceu" e leu que "um tal de corpo lúteo segura a gravidez no começo".',
    mesa: [],
    tarefas: [
      'O que é o corpo lúteo, como ele se forma e o que produz?',
      'O que acontece com o corpo lúteo quando não há gravidez? Por que a menstruação vem?',
      'Por que, na gravidez, a menstruação não veio? Até quando o corpo lúteo é mantido?',
      'Explique à Letícia, em linguagem simples.',
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), por que a menstruação não desceu? É o tal corpo lúteo?"' },
      { gatilho: 'No final', fala: '"E esse corpo lúteo fica a gravidez toda?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Corpo lúteo: células foliculares remanescentes após a ovulação', pts: 1 },
        { tarefa: 1, item: 'Produz principalmente progesterona (também estrogênio e inibina A); a elevação hormonal inibe o eixo e impede novo recrutamento folicular', pts: 1 },
        { tarefa: 2, item: 'Sem gravidez: luteólise em ~14 dias (fase lútea fixa) → corpo albicans', pts: 1 },
        { tarefa: 2, item: 'Queda acentuada de progesterona e estradiol descama o endométrio funcional: menstruação', pts: 1 },
        { tarefa: 3, item: 'O hCG do sinciciotrofoblasto liga-se aos receptores de LH e mantém o corpo lúteo ativo', pts: 1 },
        { tarefa: 3, item: 'Até a 10ª–12ª semana de gestação', pts: 1 },
        { tarefa: 4, item: 'Explicou com linguagem acessível e verificou a compreensão', pts: 1 },
      ],
    },
    errosCriticos: ['Dizer que o corpo lúteo dura a gestação inteira', 'Atribuir a manutenção do corpo lúteo ao FSH'],
    falaModelo: [
      { tarefa: 1, texto: 'Depois da ovulação, as células do folículo que ficaram no ovário formam o corpo lúteo. Ele produz principalmente progesterona, e também estrogênio e inibina A; essa elevação hormonal inibe o eixo e impede o recrutamento de novos folículos.', tempo: '25 s' },
      { tarefa: 2, texto: 'Sem gravidez, o corpo lúteo atrofia em cerca de 14 dias, a luteólise, e vira o corpo albicans. A progesterona e o estradiol caem bruscamente e a camada funcional do endométrio descama: é a menstruação. Por isso a fase lútea é fixa, de cerca de 14 dias.', tempo: '25 s' },
      { tarefa: 3, texto: 'Na gravidez, o sinciciotrofoblasto produz hCG, que se liga aos receptores de LH e mantém o corpo lúteo funcionando. A progesterona não cai, e a menstruação não vem. Ele é mantido até a 10ª a 12ª semana de gestação.', tempo: '25 s' },
      { tarefa: 4, texto: 'Letícia, depois que o óvulo sai, fica no ovário uma estrutura, o corpo lúteo, que produz o hormônio que segura o revestimento do útero. Ela dura uns 14 dias, como uma vela de tempo certo. Sem gravidez, a vela apaga, o hormônio cai e a menstruação vem. Com gravidez, o embrião manda um sinal, o hormônio que o teste detecta, que mantém a vela acesa até umas 10 a 12 semanas. Por isso a menstruação não desceu. Me conta com suas palavras o que você entendeu?', tempo: '45 s', analogia: 'Vela de tempo certo' },
    ],
    extra: 'Para que serve o endométrio secretor na implantação? (O acúmulo de glicogênio e glicoproteínas nutre os estágios iniciais da implantação; as arteríolas espiraladas facilitam a invasão trofoblástica.)',
  },

  // ----------------------------------------------------- MUL-23 · Menopausa e deficiência estrogênica
  {
    id: 'MUL-23', materia: 'mulher',
    titulo: 'Calorões, insônia e desânimo aos 51 anos',
    local: 'Ambulatório de ginecologia', papel: 'Médico(a) ginecologista', interacao: 'paciente',
    cenario: 'Dona Rita, 51 anos, procura atendimento porque "o corpo mudou muito". Conduza a anamnese, interprete os exames e explique o que está acontecendo e os riscos para a saúde.',
    mesa: [],
    tarefas: [
      'Conduza a anamnese. Por que a menopausa acontece? Relacione com a reserva ovariana.',
      'Explique os exames: por que o FSH está alto se o ovário parou?',
      'Que sintomas e que consequências a longo prazo a deficiência estrogênica traz?',
      'Explique à Dona Rita.',
    ],
    anamnese: [
      { tema: 'Menstruação', resposta: '"Não menstruo há 14 meses."' },
      { tema: 'Sintomas', resposta: '"Tenho ondas de calor várias vezes por dia, acordo de madrugada e ando desanimada."' },
      { tema: 'Sintomas geniturinários', resposta: '"A vagina está seca, e a relação passou a doer."' },
      { tema: 'Doenças e medicamentos', resposta: '"Tenho pressão um pouco alta, controlada. Nunca quebrei osso."' },
    ],
    placas: [
      { pedido: 'os exames hormonais', placa: 'FSH elevado · estradiol baixo.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), parece que tem um fogo subindo pelo corpo."' },
      { gatilho: 'Se explicar o FSH alto', fala: '"Se esse hormônio está alto, por que ele não faz o ovário funcionar?"' },
      { gatilho: 'No final', fala: '"Isso traz algum perigo além dos calores?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Caracterizou a amenorreia e os sintomas (vasomotores, sono, humor, geniturinários)', pts: 1 },
        { tarefa: 1, item: 'Menopausa = esgotamento da reserva folicular (atresia contínua, cerca de 1.000 folículos por ciclo, por apoptose)', pts: 1 },
        { tarefa: 2, item: 'Sem estrogênio e inibina ovarianos, some o feedback negativo: FSH e LH sobem, mas não há folículos para responder', pts: 1 },
        { tarefa: 3, item: 'Sintomas: fogachos, insônia e depressão (com aumento de noradrenalina, dopamina e prostaglandinas)', pts: 1 },
        { tarefa: 3, item: 'Longo prazo: osteoporose, aterosclerose e atrofia de útero, vagina e mamas (secura e dor na relação)', pts: 1 },
        { tarefa: 4, item: 'Explicou com linguagem acessível e acolhimento, e verificou a compreensão', pts: 1 },
      ],
    },
    errosCriticos: ['Interpretar o FSH alto como ovário funcionando', 'Não citar os riscos ósseo e cardiovascular'],
    falaModelo: [
      { tarefa: 1, texto: 'Ela está há 14 meses sem menstruar, com ondas de calor, insônia, desânimo, secura vaginal e dor na relação. A menopausa é o esgotamento da reserva de folículos: a perda é contínua, cerca de mil por ciclo, por apoptose, até que acabam.', tempo: '25 s' },
      { tarefa: 2, texto: 'Sem folículos, o ovário deixa de produzir estradiol e inibina. Isso tira o feedback negativo sobre a hipófise, e o FSH e o LH sobem. O FSH está alto justamente porque não há mais folículos para responder.', tempo: '20 s' },
      { tarefa: 3, texto: 'A deficiência estrogênica causa ondas de calor, insônia e depressão, ligadas ao aumento de noradrenalina, dopamina e prostaglandinas. A longo prazo traz osteoporose, aterosclerose e atrofia do útero, da vagina e das mamas, que explica a secura e a dor na relação.', tempo: '30 s' },
      { tarefa: 4, texto: 'Dona Rita, os ovários nascem com um estoque de óvulos que vai sendo gasto ao longo da vida. Agora o estoque acabou e o hormônio feminino caiu. O cérebro percebe e aumenta o FSH, como alguém que toca a campainha cada vez mais forte numa casa onde não mora mais ninguém. A falta de hormônio explica os calores, o sono ruim, o desânimo e a secura; também enfraquece os ossos e favorece problemas nos vasos, por isso vamos acompanhar de perto. Me conta o que a senhora entendeu?', tempo: '45 s', analogia: 'Campainha tocada numa casa vazia' },
    ],
    extra: 'Quantos folículos há em cada fase da vida? (Pico de 6 a 8 milhões com 18–20 semanas de gestação; 1 a 2 milhões ao nascer; 300 a 500 mil na puberdade.)',
  },

  // ----------------------------------------------------- MUL-24 · Eixo hipotálamo–hipófise–ovário
  {
    id: 'MUL-24', materia: 'mulher',
    titulo: 'Quem dá a largada do ciclo?',
    local: 'Banca do OSCE — fisiologia aplicada', papel: 'Estudante', interacao: 'examinador',
    cenario: 'O examinador pergunta: "Qual estrutura dá o estímulo inicial do ciclo menstrual?" e pede que você explique o eixo hipotálamo–hipófise–ovário e seus mecanismos de controle.',
    mesa: [
      { tipo: 'texto', texto: 'Hipotálamo → (GnRH) → hipófise → (FSH e LH) → ovário → (estrogênio, progesterona, inibinas) → ?' },
    ],
    tarefas: [
      'Qual estrutura dá o estímulo inicial? Como o GnRH é liberado, e o que acontece se a liberação for contínua?',
      'Onde fica a hipófise, o que ela produz e qual a função de cada gonadotrofina?',
      'Explique os feedbacks do eixo, incluindo o feedback positivo que leva à ovulação.',
      'Que neurotransmissores modulam o GnRH, e como o padrão dos pulsos muda nas fases do ciclo?',
    ],
    ator: [
      { gatilho: 'Examinador, na tarefa 1', fala: '"Se o GnRH é tão importante, por que não dar GnRH contínuo para estimular mais?"' },
      { gatilho: 'Examinador, na tarefa 3', fala: '"O estrogênio não faz só feedback negativo?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Hipotálamo (diencéfalo, junto ao 3º ventrículo); eixo bloqueado até a puberdade; produz GnRH em liberação pulsátil', pts: 1 },
        { tarefa: 1, item: 'Liberação contínua causa downregulation dos receptores de GnRH, bloqueando sua ação', pts: 1 },
        { tarefa: 2, item: 'Adeno-hipófise, na sela túrcica, ligada pela haste e pelo sistema porta; FSH: crescimento folicular e indução da aromatase · LH: luteinização (teca e granulosa), androgênios e, no pico, ovulação', pts: 1 },
        { tarefa: 3, item: 'Estrogênio e inibina B: feedback negativo sobre o FSH na fase folicular; progesterona, estrogênio e inibina A do corpo lúteo inibem o eixo na fase lútea', pts: 1 },
        { tarefa: 3, item: 'Feedback positivo: estradiol > 200 pg/mL por mais de 36 a 48 h no fim da fase folicular → pico de LH → ovulação', pts: 1 },
        { tarefa: 4, item: 'Excitatórios: glutamato, neuropeptídeo Y e noradrenalina · inibitórios: endorfinas e dopamina', pts: 1 },
        { tarefa: 4, item: 'Fase folicular: pulsos mais frequentes e de menor amplitude (FSH) · fase lútea: menos frequentes e de maior amplitude (LH)', pts: 1 },
      ],
    },
    errosCriticos: ['Dizer que o GnRH contínuo estimula o eixo', 'Ignorar o feedback positivo do estrogênio na ovulação'],
    falaModelo: [
      { tarefa: 1, texto: 'O estímulo inicial vem do hipotálamo, no diencéfalo, junto ao terceiro ventrículo; o eixo fica bloqueado até a puberdade. O hipotálamo produz GnRH de forma pulsátil. Se a liberação for contínua, há downregulation dos receptores de GnRH na hipófise e a ação dele é bloqueada.', tempo: '30 s' },
      { tarefa: 2, texto: 'A hipófise fica na sela túrcica; a adeno-hipófise recebe o GnRH pela haste e pelo sistema porta e produz as gonadotrofinas. O FSH faz o folículo crescer e induz a aromatase. O LH luteiniza a teca e a granulosa, estimula a produção de androgênios e, no pico, desencadeia a ovulação.', tempo: '30 s' },
      { tarefa: 3, texto: 'Na fase folicular, o estrogênio e a inibina B fazem feedback negativo sobre o FSH. Mas, no fim dessa fase, quando o estradiol passa de cerca de 200 pg/mL por 36 a 48 horas, o feedback vira positivo e gera o pico de LH, que leva à ovulação. Na fase lútea, a progesterona, o estrogênio e a inibina A do corpo lúteo inibem o eixo.', tempo: '35 s' },
      { tarefa: 4, texto: 'Glutamato, neuropeptídeo Y e noradrenalina estimulam o GnRH; endorfinas e dopamina inibem. Na fase folicular, os pulsos são mais frequentes e de menor amplitude, favorecendo o FSH; na lútea, menos frequentes e de maior amplitude, favorecendo o LH. É como um código Morse: a mesma tecla, mas o ritmo dos toques muda a mensagem.', tempo: '30 s', analogia: 'Código Morse: o ritmo muda a mensagem' },
    ],
    extra: 'Que fatores podem alterar a pulsatilidade e causar amenorreia? (Exercício intenso, estresse, anorexia/bulimia, hiperprolactinemia/fármacos e hipotireoidismo.)',
  },
);
