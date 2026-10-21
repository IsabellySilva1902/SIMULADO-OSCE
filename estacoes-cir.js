// Estações de Clínica Cirúrgica (CIR-01 a CIR-25). CIR-23 está em estacoes-prova.js.
// Formato da prova: o candidato conduz a anamnese (o paciente só conta o que for perguntado)
// e pede ao avaliador os exames, que aparecem como placas.
ESTACOES.push(
  // ----------------------------------------------------- CIR-01 · Queimadura térmica: SCQ, reposição pelo ATLS e transferência
  {
    id: 'CIR-01', materia: 'cir',
    titulo: 'Queimadura por álcool na churrasqueira',
    local: 'Pronto-socorro — sala de emergência', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Roberto, 40 anos, chega 2 horas depois de se queimar ao acender a churrasqueira com álcool. A esposa o acompanha, muito nervosa. Avalie a queimadura, defina a reposição volêmica e o local de tratamento. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [
      { tipo: 'tabela', titulo: 'Inspeção das lesões', linhas: [['Tronco anterior (inteiro)', 'bolhas rotas, leito pálido e seco, pouca dor'], ['Membro superior direito (inteiro, com a mão)', 'pele esbranquiçada, seca, inelástica, aspecto de couro, indolor'], ['Face', 'vermelhidão e ardor, sem bolhas']] },
      { tipo: 'tabela', titulo: 'Sinais vitais', linhas: [['PA', '128 × 78 mmHg'], ['FC', '112 bpm'], ['FR', '20 irpm'], ['SatO₂', '97% em ar ambiente']] },
    ],
    tarefas: [
      'Classifique a profundidade de cada área e calcule a superfície corporal queimada (SCQ).',
      'Calcule a reposição volêmica inicial no hospital e diga como você vai ajustá-la.',
      'Ele deve ser tratado em centro especializado? Que outras medidas não podem faltar?',
      'Explique à esposa por que ele precisa de tanto soro.',
    ],
    anamnese: [
      { tema: 'Como aconteceu', resposta: '"Joguei álcool na churrasqueira ainda acesa e o fogo voltou em mim. Foi no quintal, ao ar livre."' },
      { tema: 'Peso', resposta: '"Uns 70 quilos."' },
      { tema: 'Sintomas respiratórios', resposta: '"Não estou com tosse nem falta de ar. A voz está normal."' },
      { tema: 'Cuidados antes de chegar', resposta: 'Esposa: "Joguei água da torneira e viemos de carro. Ninguém colocou soro."' },
      { tema: 'Vacina antitetânica', resposta: '"Não lembro a última vez que tomei."' },
      { tema: 'Doenças, medicamentos e alergias', resposta: '"Sou saudável, não tomo remédio, não tenho alergia."' },
    ],
    placas: [
      { pedido: 'o exame da via aérea', placa: 'Sem rouquidão e sem estridor; sobrancelhas e vibrissas preservadas; sem fuligem na boca e sem escarro carbonáceo.' },
      { pedido: 'a diurese depois da primeira hora de reposição', placa: 'Sonda vesical: 20 mL na última hora, urina concentrada.' },
    ],
    ator: [
      { gatilho: 'Esposa, ao começar', fala: '"Ele vai ficar bom? Está ardendo muito."' },
      { gatilho: 'Examinador, depois da placa da diurese', fala: '"E agora, o que você faz com o soro?"' },
      { gatilho: 'Esposa, no final', fala: '"Por que tanto soro, se ele pode beber água?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Tronco anterior: 2º grau profundo · membro superior direito: 3º grau · face: 1º grau', pts: 1 },
        { tarefa: 1, item: 'SCQ = tronco anterior 18% + membro superior 9% = 27%; o 1º grau da face não entra', pts: 1 },
        { tarefa: 2, item: 'Perguntou o peso e calculou pelo ATLS: 2 mL × 70 kg × 27 ÷ 16 ≈ 236 mL/h de Ringer lactato aquecido', pts: 2 },
        { tarefa: 2, item: 'Titulou pela diurese: meta de 0,5 mL/kg/h (≈ 35 mL/h), reavaliada de hora em hora; com 20 mL/h, aumentou a taxa', pts: 1 },
        { tarefa: 3, item: 'Centro especializado (ABA): espessura total, espessura parcial de 10% ou mais da SCQ e queimadura na mão (região nobre)', pts: 1 },
        { tarefa: 3, item: 'Perguntou a vacina e indicou profilaxia antitetânica; analgesia e prevenção de hipotermia; sem antibiótico sistêmico profilático', pts: 1 },
        { tarefa: 4, item: 'Explicou à esposa a perda de líquido pela pele queimada e o controle pela diurese, em linguagem simples', pts: 1 },
      ],
    },
    errosCriticos: ['Somar a área de 1º grau na SCQ', 'Manter a mesma taxa de soro com a diurese abaixo da meta', 'Prescrever antibiótico sistêmico profilático'],
    falaModelo: [
      { tarefa: 1, texto: 'No tronco anterior há bolhas com leito pálido, seco e pouco doloroso: 2º grau profundo. O membro superior direito está esbranquiçado, seco, inelástico e indolor, com aspecto de couro: 3º grau. A face tem só eritema: 1º grau, que não entra na conta. Pela regra dos nove, tronco anterior 18% mais membro superior 9%: 27% de superfície queimada.', tempo: '35 s' },
      { tarefa: 2, texto: 'Ele pesa 70 kg. No hospital, pelo ATLS, calculo a taxa por hora: 2 mL vezes 70 vezes 27, dividido por 16, dá cerca de 236 mL por hora de Ringer lactato aquecido. A fórmula é só o ponto de partida: quem manda é a diurese, com meta de 0,5 mL/kg/h, uns 35 mL por hora. Com 20 mL na primeira hora, aumento a taxa e reavalio de hora em hora.', tempo: '40 s' },
      { tarefa: 3, texto: 'Ele vai para centro especializado: tem espessura total, 10% ou mais de espessura parcial e queimadura na mão, que é região nobre. Não posso esquecer a profilaxia antitetânica, porque ele não lembra da vacina, a analgesia e a prevenção da hipotermia. Antibiótico sistêmico profilático não se faz.', tempo: '30 s' },
      { tarefa: 4, texto: 'Senhora, a pele funciona como a lona de uma barraca, que segura a água lá dentro. Com um quarto da pele queimada, o corpo vaza líquido por esses buracos, e beber água não dá conta. Por isso o soro vai pela veia, e quem diz se a quantidade está certa é o xixi dele, que vamos medir de hora em hora. O que mais preocupa a senhora?', tempo: '40 s', analogia: 'Pele como a lona de uma barraca' },
    ],
    extra: 'E pela fórmula de Parkland, que aparece em muitas questões? (4 mL × 70 × 27 = 7.560 mL em 24 h; metade nas primeiras 8 h contadas a partir da queimadura, descontando o que já correu no pré-hospitalar.) Qual é a taxa pré-hospitalar, antes de qualquer conta? (14 anos ou mais: 500 mL/h; 6 a 13 anos: 250 mL/h; até 5 anos: 125 mL/h.)',
  },

  // ----------------------------------------------------- CIR-02 · Avaliação pré-operatória: ASA, risco cardiovascular e exames
  {
    id: 'CIR-02', materia: 'cir',
    titulo: 'Preciso fazer todos os exames do coração?',
    local: 'Ambulatório de avaliação pré-operatória', papel: 'Médico(a) clínico(a) do pré-operatório', interacao: 'paciente',
    cenario: 'Sr. Valdir, 67 anos, vem à avaliação pré-operatória de uma prostatectomia radical eletiva por câncer de próstata, marcada para daqui a 6 semanas. Avalie o risco cirúrgico, defina os exames e oriente o paciente. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Faça a anamnese dirigida ao risco cirúrgico e classifique o paciente pela ASA.',
      'Siga os três degraus da avaliação cardiovascular. Ele precisa de teste cardíaco antes da cirurgia?',
      'Quais exames pré-operatórios você pede, e por quê?',
      'Responda ao pedido de "todos os exames do coração" e aproveite para otimizar o risco dele.',
    ],
    anamnese: [
      { tema: 'Doenças conhecidas', resposta: '"Tenho pressão alta e diabetes. A pressão fica controlada com o remédio."' },
      { tema: 'Tratamento do diabetes', resposta: '"Uso insulina de manhã e à noite há 5 anos. A glicose fica boa."' },
      { tema: 'Coração, AVC e rins', resposta: '"Nunca tive infarto, dor no peito, insuficiência cardíaca nem derrame. Problema de rim, nunca me falaram."' },
      { tema: 'Capacidade funcional', resposta: '"Moro no segundo andar e subo os dois lances de escada sem parar, sem cansaço e sem dor no peito."' },
      { tema: 'Tabagismo e álcool', resposta: '"Fumo um maço por dia há 35 anos. Bebida, só socialmente."' },
      { tema: 'Alergias e cirurgias anteriores', resposta: '"Nunca operei e não tenho alergia."' },
    ],
    placas: [
      { pedido: 'o exame físico', placa: 'PA 132 × 82 mmHg, FC 76 bpm. Ausculta cardíaca e pulmonar sem alterações. Sem edema.' },
      { pedido: 'exames anteriores', placa: 'Creatinina 1,0 mg/dL (há 3 meses).' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), quero fazer todos os exames do coração, igual ao meu vizinho que operou o joelho."' },
      { gatilho: 'Se falar em parar de fumar', fala: '"Parar de fumar? Mas a cirurgia é só daqui a mais de um mês."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou doenças e tratamento (diabetes em insulina), eventos cardiovasculares, capacidade funcional e tabagismo', pts: 1 },
        { tarefa: 1, item: 'ASA II: doença sistêmica leve, controlada, sem limitação funcional', pts: 1 },
        { tarefa: 2, item: '1º degrau: prostatectomia não é de baixo nem de alto risco → índice de Lee', pts: 1 },
        { tarefa: 2, item: '2º degrau: Lee com 2 fatores (diabetes com insulina e operação de grande porte) → avaliar capacidade funcional', pts: 1 },
        { tarefa: 2, item: '3º degrau: dois lances de escada sem sintomas = 4 METs ou mais → liberado, sem teste cardíaco', pts: 1 },
        { tarefa: 3, item: 'Acima de 65 anos: ECG, hematócrito, ureia/creatinina, glicemia e eletrólitos; RX de tórax por mais de 20 maços-ano e idade acima de 65', pts: 1 },
        { tarefa: 4, item: 'Explicou que a avaliação estima e otimiza o risco, sem exames indiscriminados', pts: 1 },
        { tarefa: 4, item: 'Otimização: parar de fumar já, pelo menos 4 a 8 semanas antes da cirurgia', pts: 1 },
      ],
    },
    errosCriticos: ['Pedir teste cardíaco sem indicação', 'Não perguntar a capacidade funcional'],
    falaModelo: [
      { tarefa: 1, texto: 'Pergunto as doenças e o tratamento: ele é hipertenso e diabético em insulina, os dois controlados. Nunca teve infarto, insuficiência cardíaca, derrame ou doença renal. Sobe dois lances de escada sem sintomas e fuma um maço por dia há 35 anos. É ASA II: doença sistêmica leve, controlada, sem limitação.', tempo: '35 s' },
      { tarefa: 2, texto: 'No primeiro degrau, a prostatectomia não é de baixo nem de alto risco, então vou para o índice de Lee. Ele tem dois fatores: diabetes com insulina e operação de grande porte. Com dois fatores, avalio a capacidade funcional: dois lances de escada sem sintomas são 4 METs ou mais. Está liberado, sem teste cardíaco.', tempo: '35 s' },
      { tarefa: 3, texto: 'Por ter mais de 65 anos, peço ECG, hematócrito, ureia, creatinina, glicemia e eletrólitos. E RX de tórax, porque tem 35 maços-ano e mais de 65 anos.', tempo: '20 s' },
      { tarefa: 4, texto: 'Seu Valdir, a avaliação antes da cirurgia não é fazer todos os exames possíveis: é ver o risco de cada pessoa e melhorar o que dá. É como revisar o carro antes da viagem: o mecânico olha o que aquele carro precisa, e não troca todas as peças. Pelo seu coração, o senhor está liberado. O que mais vai ajudar é parar de fumar agora: o ideal é pelo menos 4 a 8 semanas antes, e ainda dá tempo. O que o senhor acha?', tempo: '45 s', analogia: 'Revisão do carro antes da viagem' },
    ],
    extra: 'Quais cirurgias são liberadas já no primeiro degrau? (Baixo risco: mama, tireoide, pele, oftalmologia e endoscopias.) E quais vão direto para teste cardíaco? (Alto risco: aorta, pâncreas, fígado, vias biliares, esôfago, pulmão, adrenal e transplantes.) Quando se usa o sufixo E na ASA? (Operação de emergência.)',
  },

  // ----------------------------------------------------- CIR-03 · Antibioticoprofilaxia na cirurgia limpa com prótese
  {
    id: 'CIR-03', materia: 'cir',
    titulo: 'Vou precisar tomar antibiótico?',
    local: 'Enfermaria de cirurgia — véspera da cirurgia', papel: 'Residente de cirurgia', interacao: 'paciente',
    cenario: 'Sr. Cláudio, 54 anos, pedreiro, vai fazer amanhã às 8h uma hernioplastia inguinal direita com colocação de tela. Você passa para conversar com ele sobre a cirurgia, e ele pergunta: "Vou precisar tomar antibiótico? Por quantos dias?". Defina a antibioticoprofilaxia e oriente o paciente.',
    mesa: [],
    tarefas: [
      'Classifique a cirurgia quanto ao potencial de contaminação. A antibioticoprofilaxia está indicada? Por quê?',
      'Qual antibiótico, em que dose e em que momento? Justifique a escolha.',
      'Quando repetir a dose durante a cirurgia, e quando suspender?',
      'Explique ao paciente por que ele não vai precisar de antibiótico por dias em casa.',
    ],
    anamnese: [
      { tema: 'Alergias', resposta: '"Sou alérgico a Benzetacil. Da última vez que tomei, o corpo inteiro empolou, a garganta fechou e fui parar no hospital."' },
      { tema: 'Peso', resposta: '"Uns 86 quilos."' },
      { tema: 'Doenças e medicamentos', resposta: '"Tenho pressão alta, controlada com remédio."' },
      { tema: 'Infecções atuais', resposta: '"Não estou com gripe, ferida nem ardência para urinar."' },
      { tema: 'Cirurgias anteriores', resposta: '"Nunca operei."' },
    ],
    placas: [
      { pedido: 'o exame da região inguinal', placa: 'Abaulamento redutível na região inguinal direita, que aumenta à manobra de Valsalva. Pele íntegra, sem sinais de infecção.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Vou precisar tomar antibiótico? Por quantos dias? Meu vizinho tomou por dez."' },
      { gatilho: 'Examinador, depois da tarefa 2', fala: '"E se a cirurgia atrasar e durar 5 horas?"' },
      { gatilho: 'Se falar em suspender', fala: '"Se eu tomar uma semana inteira, não fico mais protegido?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Cirurgia limpa: sem entrada em trato colonizado, sem inflamação, técnica asséptica', pts: 1 },
        { tarefa: 1, item: 'Limpa em geral dispensa profilaxia; a tela (prótese) justifica a profilaxia pela consequência de uma infecção', pts: 1 },
        { tarefa: 2, item: 'Perguntou sobre alergias e identificou alergia grave a betalactâmico (anafilaxia à penicilina)', pts: 2 },
        { tarefa: 2, item: 'Trocou a cefazolina por clindamicina ou vancomicina, que cobrem principalmente Gram-positivos, a microbiota da pele', pts: 1 },
        { tarefa: 2, item: 'Na indução anestésica, até 60 minutos antes da incisão', pts: 1 },
        { tarefa: 3, item: 'Repique durante a cirurgia: a cada cerca de 2 meias-vidas do antibiótico ou se houver sangramento importante', pts: 1 },
        { tarefa: 3, item: 'Suspender em até 24 h; prolongar não traz benefício e expõe aos riscos do antibiótico', pts: 1 },
        { tarefa: 4, item: 'Explicou com analogia que a profilaxia protege durante a cirurgia, e não depois de fechada a pele', pts: 1 },
      ],
    },
    errosCriticos: ['Prescrever cefazolina sem perguntar sobre alergias', 'Manter a profilaxia por dias após a cirurgia'],
    falaModelo: [
      { tarefa: 1, texto: 'É uma cirurgia limpa: não entra em trato colonizado e não há inflamação. Cirurgia limpa normalmente dispensa profilaxia, mas aqui vai uma tela, que é prótese, e uma infecção nela seria grave. Por isso a profilaxia está indicada.', tempo: '25 s' },
      { tarefa: 2, texto: 'Antes de escolher, pergunto sobre alergias: ele teve anafilaxia com penicilina, uma alergia grave a betalactâmico. Então não uso a cefazolina, que seria a referência: uso clindamicina ou vancomicina, que cobrem principalmente os Gram-positivos da pele. Faço na indução anestésica, até 60 minutos antes da incisão.', tempo: '35 s' },
      { tarefa: 3, texto: 'Repito a dose se a cirurgia passar de cerca de duas meias-vidas do antibiótico, porque o nível no sangue cai, ou se houver sangramento importante. Se a cirurgia durar 5 horas, provavelmente vou repicar. E suspendo em até 24 horas.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Cláudio, o antibiótico funciona como um guarda na porta enquanto ela está aberta: ele precisa estar lá na hora do corte. Depois que a pele foi fechada, tomar por uma semana não protege mais, só traz os riscos de um remédio desnecessário. E, por causa da sua alergia, vamos usar um antibiótico diferente do comum. Me conta com suas palavras quando o senhor vai receber o antibiótico?', tempo: '40 s', analogia: 'Antibiótico como guarda na porta aberta' },
    ],
    extra: 'Se ele não fosse alérgico? (Cefazolina 2 g EV; 3 g acima de 120 kg.) E numa cirurgia colorretal? (Ceftriaxona + metronidazol; alternativa em monoterapia: cefoxitina.)',
  },

  // ----------------------------------------------------- CIR-04 · ISC incisional superficial
  {
    id: 'CIR-04', materia: 'cir',
    titulo: 'A cicatriz da apendicectomia está vermelha e soltando pus',
    local: 'Ambulatório de egressos da cirurgia', papel: 'Médico(a) cirurgião(ã)', interacao: 'paciente',
    cenario: 'Sr. Edson, 49 anos, operou uma apendicite há 6 dias e voltou porque a cicatriz está vermelha e "soltando pus". Avalie, faça o diagnóstico, defina a conduta e oriente o paciente. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é o diagnóstico? Classifique e justifique com a anamnese e o exame.',
      'Qual é a conduta? Antibiótico é obrigatório?',
      'Como essa ferida vai cicatrizar agora, e quais fatores dele atrasam a cicatrização?',
      'Explique ao paciente o que aconteceu e o que ele deve fazer em casa.',
    ],
    anamnese: [
      { tema: 'Cirurgia e evolução', resposta: '"Operei de apendicite, foi sem complicação. Há dois dias a cicatriz ficou vermelha, quente e muito dolorida. Hoje começou a sair pus pelos pontos."' },
      { tema: 'Febre e dor abdominal', resposta: '"Senti um pouco de febre ontem. A barriga não dói, só o corte. Estou comendo e indo ao banheiro normal."' },
      { tema: 'Diabetes', resposta: '"Tenho diabetes. A glicose em casa dá 250, 300. Às vezes esqueço o remédio."' },
      { tema: 'Tabagismo', resposta: '"Fumo meio maço por dia."' },
      { tema: 'Imunidade e medicamentos', resposta: '"Não uso corticoide nem outro remédio forte. Não tenho outra doença."' },
    ],
    placas: [
      { pedido: 'os sinais vitais', placa: 'T 37,9 °C · FC 92 bpm · PA 134 × 84 mmHg. Peso 108 kg, IMC 37.' },
      { pedido: 'o exame da ferida', placa: 'Incisão de McBurney com hiperemia de 2 cm ao redor, calor, flutuação no subcutâneo e saída de secreção purulenta pelos pontos. Aponeurose íntegra à palpação.' },
      { pedido: 'o exame do abdome', placa: 'Abdome flácido, indolor fora da ferida, ruídos hidroaéreos presentes, sem sinais de irritação peritoneal.' },
      { pedido: 'a glicemia capilar', placa: '286 mg/dL.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Foi erro da cirurgia, né? Alguém não lavou a mão direito."' },
      { gatilho: 'Se falar em abrir a ferida', fala: '"Abrir de novo?! Não dá para só tomar um antibiótico?"' },
      { gatilho: 'No final', fala: '"Quanto tempo vai demorar para fechar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'ISC incisional superficial: pele e subcutâneo, dentro de 30 dias, com drenagem purulenta e sinais flogísticos', pts: 1 },
        { tarefa: 1, item: 'Afastou profunda e cavitária: aponeurose íntegra, abdome sem dor e trânsito intestinal normal', pts: 1 },
        { tarefa: 2, item: 'Drenar: retirar os pontos, abrir a ferida, lavar e fazer curativo; colher cultura da secreção', pts: 2 },
        { tarefa: 2, item: 'Antibiótico não é automático: considerar se repercussão sistêmica, imunossupressão, necrose ou risco de sequela', pts: 1 },
        { tarefa: 3, item: 'Ferida aberta cicatriza por segunda intenção (granulação, contração e epitelização)', pts: 1 },
        { tarefa: 3, item: 'Perguntou e apontou os fatores: diabetes descompensado, obesidade e tabagismo; controlar a glicemia (meta 140–180 mg/dL)', pts: 1 },
        { tarefa: 4, item: 'Orientou curativo, higiene das mãos e sinais de alerta (febre, secreção, dor crescente)', pts: 1 },
      ],
    },
    errosCriticos: ['Tratar só com antibiótico, sem drenar', 'Ressuturar a ferida infectada'],
    falaModelo: [
      { tarefa: 1, texto: 'É infecção de sítio cirúrgico incisional superficial: dentro de 30 dias, com pus saindo da incisão, calor, rubor e flutuação no subcutâneo. A aponeurose está íntegra, a barriga não dói e ele come e evacua normalmente, o que afasta a profunda e a cavitária.', tempo: '30 s' },
      { tarefa: 2, texto: 'O tratamento é drenar: retiro os pontos, abro a ferida, lavo, faço curativo e mando a secreção para cultura. Antibiótico não é obrigatório: considero se houver repercussão sistêmica, imunossupressão, necrose ou risco de sequela.', tempo: '30 s' },
      { tarefa: 3, texto: 'Aberta, a ferida vai cicatrizar por segunda intenção, de dentro para fora, com tecido de granulação, contração e a pele crescendo das bordas. O diabetes descompensado, o peso e o cigarro atrasam esse processo; por isso a glicemia precisa ficar entre 140 e 180.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Edson, isso não quer dizer que alguém errou: é uma complicação que acontece, e o açúcar alto, o peso e o cigarro aumentam esse risco. Pense numa espinha inflamada: enquanto o pus está preso, não melhora; quando drena, alivia. A ferida vai fechar de dentro para fora, mais devagar do que costurada. Em casa, cuide do curativo com as mãos limpas; se tiver febre, secreção ou dor aumentando, volte na hora. Me conta como você vai fazer o curativo?', tempo: '55 s', analogia: 'Espinha inflamada que só melhora quando drena' },
    ],
    extra: 'E se houvesse deiscência da aponeurose com pus profundo e febre acima de 38 °C? (ISC incisional profunda: fáscia e músculo; drenagem + antibiótico.) Se houvesse tela, até quando contaria como ISC? (Até 1 ano.)',
  },

  // ----------------------------------------------------- CIR-05 · REMIT no pós-operatório
  {
    id: 'CIR-05', materia: 'cir',
    titulo: 'Sem fome, sem urina e com o coração acelerado',
    local: 'UTI cirúrgica', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sr. Alberto, 25 anos, está no 1º dia de pós-operatório de laparotomia exploradora por trauma de baço: caiu e foi pisoteado na fuga de um incêndio numa boate. Ele está consciente e estável, mas alguns sinais chamaram a sua atenção. Avalie o paciente, explique os achados e defina a conduta. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Explique, pela resposta endócrino-metabólica ao trauma (REMIT), a falta de apetite, a ausência de dejeções, a oligúria e a taquicardia.',
      'O que você checa antes de atribuir tudo à REMIT?',
      'Como você ajuda esse paciente? Atue nos gatilhos da resposta.',
      'Explique ao paciente o que está acontecendo com o corpo dele.',
    ],
    anamnese: [
      { tema: 'Dor', resposta: '"Dói muito no corte. Me dão dipirona de 6 em 6 horas, mas quase não resolve."' },
      { tema: 'Alimentação', resposta: '"Estou sem fome nenhuma. Ontem comi só um pouquinho da sopa."' },
      { tema: 'Evacuação e gases', resposta: '"Não evacuei desde a cirurgia. Gases, quase nada."' },
      { tema: 'Urina', resposta: '"Estou com a sonda, não sei dizer."' },
      { tema: 'Falta de ar, tosse e dor nas pernas', resposta: '"Nada disso."' },
    ],
    placas: [
      { pedido: 'os sinais vitais', placa: 'FC 112 bpm (taquicardia sinusal no monitor desde a admissão) · PA 124 × 78 mmHg · T 37,8 °C · FR 18 irpm · SatO₂ 97%.' },
      { pedido: 'a diurese e a sonda vesical', placa: 'Sonda pérvia, sem dobras, urina amarelo-escura. Diurese de 20 mL/h nas últimas 4 h (peso 70 kg). Já recebeu 500 mL de Ringer lactato em expansão.' },
      { pedido: 'o exame físico', placa: 'Mucosas úmidas, enchimento capilar < 2 s. Abdome levemente distendido, ruídos hidroaéreos diminuídos. Ferida operatória limpa, sem sinais flogísticos; leve edema de bordas. Panturrilhas livres.' },
      { pedido: 'os exames e o balanço da cirurgia', placa: 'Intraoperatório: 3.000 mL de cristaloide e 2 concentrados de hemácias. Hb 10,2 g/dL, estável em relação ao pós-operatório imediato. Glicemia 196 mg/dL (não é diabético). Sódio 136 · potássio 4,4 · creatinina 0,9 mg/dL.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), estou bem, só sem fome e com essa dor."' },
      { gatilho: 'Enfermeira, depois da placa da diurese', fala: '"Quer que eu faça mais 2 litros de soro para ele urinar?"' },
      { gatilho: 'No final', fala: '"Isso é normal ou deu algo errado na cirurgia?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Anorexia: citocinas (TNF-α) desviam sangue para órgãos nobres; o trato gastrointestinal não é prioridade', pts: 1 },
        { tarefa: 1, item: 'Sem dejeções: catecolaminas e opioides endógenos causam atonia intestinal', pts: 1 },
        { tarefa: 1, item: 'Oligúria (≈ 0,29 mL/kg/h): ADH retém água; aldosterona retém sódio e água e elimina potássio', pts: 1 },
        { tarefa: 1, item: 'Taquicardia: catecolaminas, muitas vezes pela dor; hiperglicemia e 37,8 °C também são esperados', pts: 1 },
        { tarefa: 2, item: 'Checou sonda obstruída, retenção, hidratação intraoperatória, perfusão e sangramento (Hb estável); vigia infecção e deiscência', pts: 1 },
        { tarefa: 3, item: 'Otimizar a analgesia: a dor perpetua a ativação do sistema nervoso autônomo', pts: 1 },
        { tarefa: 3, item: 'Suporte nutricional: cerca de 2.000 mL de SG 5% no jejum reduz lipólise e proteólise', pts: 1 },
        { tarefa: 3, item: 'Recusou a hiperidratação: no oligúrico por REMIT, o excesso de volume causa edema de ferida', pts: 1 },
        { tarefa: 4, item: 'Explicou a REMIT como resposta necessária do corpo, que precisa ser modulada', pts: 1 },
      ],
    },
    errosCriticos: ['Fazer 2 litros de soro para tratar a oligúria sem avaliar o paciente', 'Atribuir a taquicardia à REMIT sem tratar a dor'],
    falaModelo: [
      { tarefa: 1, texto: 'Tudo isso cabe na resposta ao trauma. A falta de fome vem das citocinas, como o TNF-alfa: o sangue vai para os órgãos nobres, e o intestino não é prioridade. A falta de dejeções é a atonia intestinal causada pelas catecolaminas e pelos opioides endógenos. A diurese de 20 mL por hora, cerca de 0,29 mL/kg/h, vem do ADH, que segura água, e da aldosterona, que segura sódio e água. A taquicardia vem das catecolaminas, muitas vezes pela dor; a glicemia de 196 e o 37,8 °C também são esperados.', tempo: '50 s' },
      { tarefa: 2, texto: 'Antes de atribuir à REMIT, confiro a sonda, que está pérvia, se houve opioide ou retenção, e se o anestesista hidratou bem: recebeu 3 litros e duas bolsas de sangue. Ele está perfundido e a hemoglobina está estável, sem sinal de sangramento. E sigo vigiando infecção e deiscência, que também dão febre e taquicardia.', tempo: '35 s' },
      { tarefa: 3, texto: 'Atuo nos gatilhos: otimizo a analgesia, porque a dor perpetua a resposta de luta e fuga; ofereço cerca de 2.000 mL de soro glicosado a 5% para poupar as reservas no jejum; e não faço os 2 litros de soro, porque hiperidratar um oligúrico por REMIT leva a edema da ferida.', tempo: '30 s' },
      { tarefa: 4, texto: 'Seu Alberto, a cirurgia é um trauma, e o corpo reage como um alarme de incêndio: segura água, acelera o coração e desliga o intestino para se concentrar em sarar. Esse alarme é necessário, mas, se toca alto demais, atrapalha. Vamos baixar o volume: tirar a sua dor, dar energia pela veia e acompanhar de perto. O que o senhor entendeu?', tempo: '40 s', analogia: 'REMIT como alarme de incêndio' },
    ],
    extra: 'Quais são as fases da REMIT? (Ebb, de baixo fluxo, por 2 a 3 dias, com hipometabolismo; flow, hiperdinâmica, com hipermetabolismo, lipólise e proteólise.) Qual citocina é anti-inflamatória por excelência? (IL-10.)',
  },

  // ----------------------------------------------------- CIR-06 · Febre pós-operatória e ISC de órgão/cavidade
  {
    id: 'CIR-06', materia: 'cir',
    titulo: 'Febre no 5º dia depois da anastomose',
    local: 'Enfermaria de cirurgia geral', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Dona Aparecida, 71 anos, está no 5º dia de pós-operatório de hemicolectomia direita com anastomose, por adenocarcinoma. A enfermagem chamou porque ela está com febre. A filha está no quarto. Avalie a paciente, defina a investigação e a conduta. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Liste as causas de febre pós-operatória conforme o tempo de pós-operatório e diga qual é a mais provável aqui.',
      'Qual é a investigação e a conduta?',
      'Explique à paciente e à filha o que está acontecendo.',
    ],
    anamnese: [
      { tema: 'Início e evolução', resposta: '"Vinha bem, comendo. Desde ontem à tarde estou com febre e a barriga inchada e doendo, cada vez pior."' },
      { tema: 'Alimentação, gases e evacuação', resposta: '"Parei de comer, estou enjoada. Não solto gases desde ontem."' },
      { tema: 'Urina', resposta: '"Estou urinando normal, sem ardor."' },
      { tema: 'Respiração', resposta: '"Sem tosse e sem falta de ar."' },
      { tema: 'Pernas', resposta: '"Não sinto dor nem inchaço nas pernas."' },
    ],
    placas: [
      { pedido: 'os sinais vitais', placa: 'T 38,7 °C · FC 108 bpm · PA 118 × 70 mmHg · FR 20 irpm · SatO₂ 96%.' },
      { pedido: 'o exame da ferida', placa: 'Ferida operatória limpa e seca, sem hiperemia nem secreção.' },
      { pedido: 'o exame do abdome', placa: 'Distendido, doloroso difusamente, com defesa no flanco direito. Ruídos hidroaéreos diminuídos.' },
      { pedido: 'o exame do tórax e das pernas', placa: 'Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. Panturrilhas livres.' },
      { pedido: 'os exames laboratoriais', placa: 'Leucócitos 18.400/mm³ (12% bastões) · PCR 24 mg/dL, subindo · lactato 2,4 mmol/L · urina tipo I normal.' },
      { pedido: 'a tomografia de abdome e pelve', placa: 'Coleção de 6 cm, com gás, junto à anastomose.' },
    ],
    ator: [
      { gatilho: 'Filha, ao se apresentar', fala: '"A ferida está ótima, então não pode ser infecção, né?"' },
      { gatilho: 'Se falar em infecção', fala: '"Mas ela tomou antibiótico na cirurgia. Como pode estar com infecção?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: '24–72 h: REMIT (febre baixa), atelectasia, reação a medicamento ou transfusão, infecção preexistente', pts: 1 },
        { tarefa: 1, item: 'Após 72 h: ISC, infecção urinária, pneumonia, TVP/TEP, flebite · após 5–7 dias: abscessos, coleções, deiscências e fístulas', pts: 1 },
        { tarefa: 1, item: 'Investigou os focos na anamnese e no exame (urina, pulmão, pernas, ferida) e concluiu: ISC de órgão/cavidade; ferida limpa não exclui foco profundo', pts: 2 },
        { tarefa: 2, item: 'Pediu tomografia de abdome e pelve para localizar coleção ou deiscência', pts: 1 },
        { tarefa: 2, item: 'Coleção: drenagem percutânea ou cirúrgica + antibioticoterapia, cobrindo Gram-negativos e anaeróbios do cólon (E. coli, Bacteroides fragilis)', pts: 2 },
        { tarefa: 3, item: 'Explicou com empatia que a profilaxia não impede toda infecção e o plano de tratamento', pts: 1 },
      ],
    },
    errosCriticos: ['Descartar infecção porque a ferida está limpa', 'Prescrever só antitérmico e observar'],
    falaModelo: [
      { tarefa: 1, texto: 'Pelo tempo: de 24 a 72 horas, a própria REMIT, atelectasia, reação a medicamento ou transfusão; depois de 72 horas, ferida, infecção urinária, pneumonia, trombose e flebite; e de 5 a 7 dias, abscessos, coleções, deiscências e fístulas. Ela está no 5º dia, sem queixa urinária, com pulmões limpos e panturrilhas livres, ferida limpa, mas abdome distendido e com defesa: o mais provável é infecção de órgão ou cavidade, uma coleção ou deiscência da anastomose.', tempo: '45 s' },
      { tarefa: 2, texto: 'Peço tomografia de abdome e pelve, que mostra uma coleção junto à anastomose. A conduta é drenar, por punção guiada ou cirurgia, e tratar com antibiótico, agora como tratamento, cobrindo a microbiota do cólon: Gram-negativos e anaeróbios, como E. coli e Bacteroides fragilis.', tempo: '35 s' },
      { tarefa: 3, texto: 'Dona Aparecida, a febre e a barriga doendo mostram que a infecção está por dentro, perto da emenda do intestino. A ferida de fora pode estar perfeita, como a fachada bonita de uma casa com um vazamento no encanamento lá dentro. O antibiótico da cirurgia serviu para prevenir durante a operação; agora vamos drenar esse acúmulo e tratar. O que mais preocupa vocês?', tempo: '40 s', analogia: 'Fachada bonita com vazamento no encanamento' },
    ],
    extra: 'Por quanto tempo essa paciente oncológica deve manter a profilaxia de TEV? (Estendida por 28 dias: cirurgia oncológica abdominal ou pélvica.) Quais são as duas formas de confirmar a ISC? (Cultura positiva ou diagnóstico do cirurgião.)',
  },

  // ----------------------------------------------------- CIR-07 · Checklist de cirurgia segura
  {
    id: 'CIR-07', materia: 'cir',
    titulo: 'Checklist de cirurgia segura e a compressa que sumiu',
    local: 'Sala cirúrgica', papel: 'Cirurgião(ã) responsável', interacao: 'examinador',
    cenario: 'Você vai operar o Sr. Marcos, 58 anos, para uma artroplastia de joelho esquerdo. O examinador faz o papel da equipe (anestesista e enfermagem) e do paciente. Conduza a lista de verificação de cirurgia segura do começo ao fim.',
    mesa: [
      { tipo: 'texto', texto: 'Lista de verificação de cirurgia segura (OMS): 3 momentos — antes da indução anestésica, antes da incisão e antes de o paciente sair da sala.' },
    ],
    tarefas: [
      'Conduza a primeira etapa do checklist com o paciente acordado: o que você confere?',
      'Diga o que se confere nas outras duas etapas e quando cada uma acontece.',
      'Ao final, a circulante avisa que a contagem de compressas não fecha. Qual é a sua conduta?',
      'O paciente pergunta por que todo mundo pergunta o nome e o lado. Responda a ele.',
    ],
    anamnese: [
      { tema: 'Identidade e procedimento', resposta: '"Marcos Pereira. Vou operar o joelho esquerdo para colocar a prótese."' },
      { tema: 'Lado e marcação', resposta: '"É o esquerdo, sim. Pode marcar."' },
      { tema: 'Consentimento', resposta: '"Conversei com o doutor e assinei o papel ontem."' },
      { tema: 'Alergias', resposta: '"Tenho alergia a luva de borracha: a mão incha e coça. Remédio, não."' },
      { tema: 'Jejum', resposta: '"Comi pela última vez ontem às 22h. Só tomei água às 5h."' },
    ],
    placas: [
      { pedido: 'a contagem de compressas', placa: 'Entraram 20 compressas; contadas 19. A circulante já procurou no chão e no hamper.' },
      { pedido: 'a radiografia intraoperatória', placa: 'Marcador radiopaco de compressa no campo operatório, junto à face posterior do joelho.' },
    ],
    ator: [
      { gatilho: 'Paciente, no preparo', fala: '"Já me perguntaram meu nome umas cinco vezes. Vocês não confiam uns nos outros?"' },
      { gatilho: 'Circulante, depois da contagem', fala: '"Doutor(a), já procurei no chão e no hamper, não achei."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Sign in, antes da indução: identidade, procedimento, lado com marcação feita com o paciente acordado, consentimento e alergias', pts: 1 },
        { tarefa: 1, item: 'Perguntou as alergias e identificou a alergia ao látex: avisar a equipe e garantir sala e material sem látex', pts: 2 },
        { tarefa: 2, item: 'Time out, antes da incisão: confirmação verbal da equipe; cirurgião (passos críticos, duração, perda sanguínea), anestesista (preocupações), enfermagem (esterilização, equipamentos) e horário do antibiótico', pts: 1 },
        { tarefa: 2, item: 'Sign out, antes de sair da sala: contagem de compressas e instrumentais e recomendações pós-operatórias', pts: 1 },
        { tarefa: 3, item: 'Não fechar: revisão sistemática do campo e da sala; se não localizar, imagem intraoperatória antes de fechar', pts: 1 },
        { tarefa: 4, item: 'Explicou que é barreira de segurança, não desconfiança, e que o paciente participa da confirmação', pts: 1 },
      ],
    },
    errosCriticos: ['Fechar a pele com a contagem divergente', 'Não perguntar sobre alergias no sign in'],
    falaModelo: [
      { tarefa: 1, texto: 'No sign in, antes da indução, com ele acordado: confirmo o nome, o procedimento e o lado, e marco o joelho esquerdo com ele participando. Confiro o consentimento e pergunto as alergias: ele tem alergia a luva de borracha. Aviso a equipe, porque o látex é uma das causas frequentes de anafilaxia no centro cirúrgico, e garantimos sala e material sem látex.', tempo: '40 s' },
      { tarefa: 2, texto: 'No time out, antes da incisão, a equipe para e confirma em voz alta paciente, procedimento e lado; eu falo os passos críticos, a duração e a perda de sangue esperada; o anestesista, as preocupações dele; a enfermagem, a esterilização e os equipamentos; e conferimos o horário do antibiótico. No sign out, antes de sair da sala, contamos compressas e instrumentais e passamos as recomendações do pós-operatório.', tempo: '45 s' },
      { tarefa: 3, texto: 'Com a contagem divergente, não fecho. Reviso o campo e a sala de forma sistemática; se não achar, peço radiografia intraoperatória antes de fechar. A imagem mostrou a compressa atrás do joelho: retiro e recontamos.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Marcos, a gente confia muito uns nos outros, e é justamente por isso que confere. É como o piloto e o copiloto, que leem a lista em voz alta antes de cada decolagem, mesmo voando há 20 anos. O senhor faz parte da equipe: foi perguntando que descobrimos a sua alergia a borracha. Faz sentido para o senhor?', tempo: '35 s', analogia: 'Piloto e copiloto lendo a lista antes da decolagem' },
    ],
    extra: 'Qual foi o impacto do checklist da OMS? (Complicações de cerca de 11% para 7% e mortalidade de 1,5% para 0,8%.) Quais agentes mais causam anafilaxia no perioperatório? (Bloqueadores neuromusculares, látex e agentes de indução anestésica.)',
  },

  // ----------------------------------------------------- CIR-08 · Melanoma: ABCDE, Breslow e linfonodo sentinela
  {
    id: 'CIR-08', materia: 'cir',
    titulo: 'O resultado da pinta das costas',
    local: 'Ambulatório de cirurgia', papel: 'Médico(a) cirurgião(ã)', interacao: 'paciente',
    cenario: 'Dona Cristina, 45 anos, volta para buscar o resultado da biópsia excisional de uma lesão pigmentada do dorso, retirada inteira há 3 semanas. Investigue a história, interprete o laudo, defina a conduta e comunique o diagnóstico. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Quais critérios do ABCDE a lesão tinha, e por que a biópsia excisional foi a escolha certa?',
      'Interprete o laudo e defina a conduta cirúrgica.',
      'Quais fatores de risco ela tem? Oriente a prevenção.',
      'Comunique o diagnóstico à paciente.',
    ],
    anamnese: [
      { tema: 'Como era a lesão', resposta: '"Era uma pinta de uns 9 mm, meio torta, com a borda irregular, marrom, preta e avermelhada. Nos últimos meses cresceu e começou a coçar."' },
      { tema: 'Exposição solar', resposta: '"Tenho a pele bem clara. Na infância, nas férias na praia, eu me queimava muito. Já fiz bronzeamento artificial."' },
      { tema: 'Outras pintas e história familiar', resposta: '"Tenho muitas pintas pelo corpo. Meu pai teve um melanoma."' },
      { tema: 'Caroços', resposta: '"Não notei nenhum caroço no corpo."' },
      { tema: 'O que espera do resultado', resposta: '"Acho que não era nada, já tiraram tudo."' },
    ],
    placas: [
      { pedido: 'o laudo anatomopatológico', placa: 'Melanoma disseminativo superficial · espessura de Breslow 1,4 mm · sem ulceração · índice mitótico 1/mm² · sem invasão linfovascular · margens livres (2 mm).' },
      { pedido: 'o exame dos linfonodos', placa: 'Linfonodos axilares e inguinais não palpáveis. Cicatriz da biópsia no dorso em bom estado.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"E aí, doutor(a)? Não era nada, né? Já tiraram tudo."' },
      { gatilho: 'Ao ouvir "melanoma"', fala: '(Silêncio, olhos marejados) "Câncer? Eu vou morrer?"' },
      { gatilho: 'Se falar em linfonodo', fala: '"Vão tirar meus gânglios? Por quê, se já tiraram a pinta?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'ABCDE completo: Assimetria, Bordas irregulares, Cores variadas, Diâmetro > 6 mm e Evolução (cresceu e coçou)', pts: 1 },
        { tarefa: 1, item: 'Biópsia excisional, com margem de 1–3 mm: diagnóstico e medida do Breslow; incisional ou punch é exceção', pts: 1 },
        { tarefa: 2, item: 'Breslow 1,4 mm (1,01–2,00 mm) → ampliação de margem de 1 a 2 cm', pts: 1 },
        { tarefa: 2, item: 'Linfonodo sentinela indicado (Breslow > 1 mm); linfonodos normais ao exame (se alterados: PAAF ou core biopsy)', pts: 1 },
        { tarefa: 3, item: 'Perguntou e identificou os fatores: queimaduras solares na infância, bronzeamento artificial, pele clara, muitos nevos, pai com melanoma', pts: 1 },
        { tarefa: 3, item: 'Prevenção: proteção à exposição solar e autoexame das pintas pelo ABCDE', pts: 1 },
        { tarefa: 4, item: 'Perguntou o que ela esperava antes de dar a notícia, comunicou com pausa e empatia e explicou o próximo passo', pts: 2 },
      ],
    },
    errosCriticos: ['Dizer que "já está resolvido" porque as margens estão livres', 'Não indicar a pesquisa do linfonodo sentinela'],
    falaModelo: [
      { tarefa: 1, texto: 'A lesão tinha o ABCDE completo: assimetria, bordas irregulares, várias cores, 9 mm e evolução, porque cresceu e coçou. A biópsia excisional, com margem de 1 a 3 mm, é a escolha porque retira a lesão inteira e permite medir a espessura de Breslow, que define o tratamento.', tempo: '30 s' },
      { tarefa: 2, texto: 'O laudo é de melanoma disseminativo superficial, o subtipo mais comum, com Breslow de 1,4 mm e sem ulceração. Entre 1,01 e 2 mm, amplio a margem para 1 a 2 cm. Como passou de 1 mm, indico a pesquisa do linfonodo sentinela; os linfonodos estão normais ao exame.', tempo: '30 s' },
      { tarefa: 3, texto: 'Ela tem vários fatores: pele clara, queimaduras de sol na infância, bronzeamento artificial, muitas pintas e o pai com melanoma. A principal prevenção é a proteção solar, e ela deve olhar as pintas pelo ABCDE.', tempo: '25 s' },
      { tarefa: 4, texto: 'Dona Cristina, antes de eu falar, a senhora imaginava o que poderia ser? … O resultado mostrou um tipo de câncer de pele chamado melanoma. (pausa) Eu sei que é muito para ouvir. A boa notícia é que foi descoberto cedo e é fino. Pense numa erva daninha: arrancamos a planta, agora precisamos tirar um pouco mais de terra em volta e olhar o primeiro "ralo" para onde a raiz poderia escorrer, que é o linfonodo sentinela. O que a senhora entendeu e o que quer perguntar?', tempo: '60 s', analogia: 'Erva daninha: tirar a terra em volta e olhar o primeiro ralo' },
    ],
    extra: 'Além do Breslow > 1 mm, o que indica o linfonodo sentinela? (Ulceração, alto índice mitótico ou invasão linfovascular.) Qual subtipo cresce rápido e nem sempre segue o ABCDE? (Nodular.) E qual aparece em palmas, plantas e unhas, com sinal de Hutchinson? (Acral lentiginoso.)',
  },

  // ----------------------------------------------------- CIR-09 · CBC, CEC e ceratose actínica
  {
    id: 'CIR-09', materia: 'cir',
    titulo: 'Três lesões no rosto do agricultor',
    local: 'Ambulatório de cirurgia', papel: 'Médico(a) cirurgião(ã)', interacao: 'paciente',
    cenario: 'Sr. Joaquim, 72 anos, agricultor, veio "porque a esposa mandou" e mostra três lesões no rosto. Investigue a história, examine cada lesão, dê as hipóteses, defina a conduta e oriente o paciente. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Dê a hipótese diagnóstica de cada lesão.',
      'Qual é a conduta para cada uma, incluindo margens cirúrgicas?',
      'Qual delas é mais perigosa? Explique ao paciente sem assustá-lo e oriente a prevenção.',
    ],
    anamnese: [
      { tema: 'Exposição ao sol', resposta: '"Trabalho na roça desde os 8 anos, de sol a sol, quase nunca de chapéu. Protetor, nunca usei."' },
      { tema: 'Tabagismo', resposta: '"Fumei cigarro de palha por 40 anos. Parei faz 5."' },
      { tema: 'Lesão do nariz', resposta: '"Está aí faz uns 2 anos, cresce devagar. Forma uma casquinha, eu arranco e ela volta. Não dói."' },
      { tema: 'Lesão do lábio', resposta: '"Apareceu há uns 4 meses. Sangra quando encosto e não sara de jeito nenhum."' },
      { tema: 'Lesões da testa', resposta: '"São umas manchas ásperas. Sinto mais passando a mão do que olhando. Têm aumentado com os anos."' },
      { tema: 'Imunidade e medicamentos', resposta: '"Não tenho outra doença e não tomo remédio."' },
    ],
    placas: [
      { pedido: 'o exame da lesão do nariz', placa: 'Asa nasal direita: pápula de 8 mm, brilhante, perolada, com telangiectasias na superfície e crosta central.' },
      { pedido: 'o exame da lesão do lábio', placa: 'Lábio inferior: lesão endurecida de 1,2 cm, ulcerada, que sangra ao toque.' },
      { pedido: 'o exame das lesões da testa', placa: 'Testa e couro cabeludo: várias placas eritematosas, ásperas, com escamas aderentes, sobre pele com dano solar.' },
      { pedido: 'o exame dos linfonodos', placa: 'Linfonodos cervicais e submandibulares não palpáveis.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Isso é coisa de sol, doutor(a). Todo mundo da roça tem."' },
      { gatilho: 'Se falar em cirurgia no nariz', fala: '"Vai ficar um buraco no meu nariz?"' },
      { gatilho: 'No final', fala: '"E esse protetor aí, eu passo uma vez de manhã e pronto?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou exposição solar, tabagismo e evolução de cada lesão', pts: 1 },
        { tarefa: 1, item: 'Nariz: carcinoma basocelular (perolado, telangiectasias, crescimento lento, crosta que o paciente arranca, 2/3 superiores da face)', pts: 1 },
        { tarefa: 1, item: 'Lábio inferior: carcinoma espinocelular (endurecido, ulcera, sangra, não cicatriza; sol e tabaco)', pts: 1 },
        { tarefa: 1, item: 'Testa: ceratoses actínicas (pré-malignas, escamas aderentes, podem progredir para CEC invasivo)', pts: 1 },
        { tarefa: 2, item: 'Excisão cirúrgica é o padrão-ouro: CBC de baixo risco com margem de 3–4 mm; CEC com 4–6 mm ou mais', pts: 2 },
        { tarefa: 2, item: 'Ceratose actínica: lesão pré-maligna, tratar e acompanhar pelo risco de CEC', pts: 1 },
        { tarefa: 3, item: 'CEC é o mais perigoso (metástase em 0,5–6%); CBC raramente dá metástase', pts: 1 },
        { tarefa: 3, item: 'Prevenção: proteção à exposição solar (protetor, chapéu, roupas, evitar o sol mais forte)', pts: 1 },
      ],
    },
    errosCriticos: ['Considerar a ferida do lábio um "machucado" comum', 'Dizer que as três lesões têm o mesmo risco'],
    falaModelo: [
      { tarefa: 1, texto: 'Ele tem uma vida inteira de sol e 40 anos de tabaco. A lesão do nariz, perolada, com vasinhos, que cresce devagar e forma uma crosta que ele arranca, é carcinoma basocelular. A do lábio inferior, endurecida, que sangra e não cicatriza há 4 meses, é carcinoma espinocelular, ligado ao sol e ao cigarro. As placas ásperas com escamas aderentes da testa são ceratoses actínicas, lesões pré-malignas.', tempo: '40 s' },
      { tarefa: 2, texto: 'O tratamento padrão-ouro dos dois carcinomas é a excisão cirúrgica. O basocelular de baixo risco sai com margem de 3 a 4 mm. O espinocelular, com margem maior, de 4 a 6 mm ou mais, pelo maior potencial de invasão e metástase. As ceratoses actínicas são tratadas e acompanhadas, porque podem virar espinocelular.', tempo: '35 s' },
      { tarefa: 3, texto: 'Seu Joaquim, as três são marcas do sol de uma vida inteira. A da boca é a que mais me preocupa, porque tem mais chance de se espalhar; a do nariz cresce devagar e quase nunca se espalha; e as da testa são um aviso, como a ferrugem que ainda não furou a lataria. Vamos tirar as duas e tratar as outras. Daqui para a frente: chapéu, roupa que cubra a pele, protetor repassado ao longo do dia e evitar o sol mais forte. O que o senhor vai mudar na rotina da roça?', tempo: '50 s', analogia: 'Ferrugem que ainda não furou a lataria' },
    ],
    extra: 'O que fazer num corno cutâneo? (A ponta não é diagnóstica: biopsiar a base.) E no CBC avançado em que a cirurgia não basta? (Terapia sistêmica com vismodegibe.) O que é a doença de Bowen? (CEC intraepitelial, in situ: placa eritematosa bem delimitada, que simula psoríase e eczema.)',
  },

  // ----------------------------------------------------- CIR-10 · Queimadura na criança
  {
    id: 'CIR-10', materia: 'cir',
    titulo: 'A panela que caiu na perna',
    local: 'Pronto-socorro infantil', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Davi, 3 anos, chega no colo da mãe 1 hora depois de uma panela de água fervente cair sobre a perna direita. Ele chora muito, mas está consciente e respirando bem. Avalie a queimadura, defina o local de tratamento e a reposição, e converse com a mãe. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Classifique a profundidade da queimadura e calcule a SCQ.',
      'Ele é um grande queimado? Precisa de centro especializado? Justifique.',
      'Calcule a reposição volêmica inicial e diga a meta de diurese.',
      'O que a mãe fez de errado e qual é o cuidado local? Converse com ela, que está se culpando.',
    ],
    anamnese: [
      { tema: 'Como aconteceu', resposta: '"Ele puxou a toalha da mesa e a panela de água fervendo virou na perna dele."' },
      { tema: 'Primeiros cuidados', resposta: '"Coloquei gelo direto, enrolado num pano, para aliviar. Ficou uns 20 minutos."' },
      { tema: 'Peso', resposta: '"Na última consulta, ele tinha 14 quilos."' },
      { tema: 'Outras áreas atingidas', resposta: '"Só a perna. O rosto e a barriga não pegaram."' },
      { tema: 'Vacinas', resposta: '"A carteirinha está em dia."' },
    ],
    placas: [
      { pedido: 'o exame da queimadura', placa: 'Perna direita inteira, da coxa ao pé, frente e verso: bolhas rotas e íntegras, leito rosado e úmido, muito doloroso, que branqueia à digitopressão.' },
      { pedido: 'os sinais vitais', placa: 'FC 140 bpm · FR 28 irpm · SatO₂ 99% · T 35,6 °C (axilar).' },
    ],
    ator: [
      { gatilho: 'Mãe, ao se apresentar', fala: '"A culpa é minha, eu virei as costas um segundo…"' },
      { gatilho: 'Se falar em transferência', fala: '"Transferir? Então é muito grave?"' },
      { gatilho: 'Se falar em antibiótico', fala: '"Não precisa de antibiótico para não infeccionar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: '2º grau superficial: bolhas, leito rosado e úmido, muito doloroso, branqueia à digitopressão', pts: 1 },
        { tarefa: 1, item: 'SCQ ≈ 14%: na criança, cada membro inferior vale cerca de 14% e a cabeça cerca de 18%', pts: 1 },
        { tarefa: 2, item: 'Grande queimado: 2º grau em mais de 10% da SCQ na criança', pts: 1 },
        { tarefa: 2, item: 'Centro especializado: espessura parcial ≥ 10%, pé (região nobre) e idade pediátrica', pts: 1 },
        { tarefa: 3, item: 'Perguntou o peso; ATLS na criança: 3 mL × 14 kg × 14 ÷ 16 ≈ 37 mL/h de Ringer lactato aquecido', pts: 1 },
        { tarefa: 3, item: 'Meta de diurese na criança: 1 mL/kg/h (≈ 14 mL/h), titulando a taxa de hora em hora', pts: 1 },
        { tarefa: 4, item: 'Perguntou os primeiros cuidados: gelo aprofunda a lesão e causou hipotermia (35,6 °C); o certo é água corrente em temperatura ambiente; aquecer a criança', pts: 1 },
        { tarefa: 4, item: 'Antibiótico tópico e curativo; sem antibiótico sistêmico profilático; acolheu a culpa da mãe', pts: 1 },
      ],
    },
    errosCriticos: ['Usar os valores do adulto na regra dos nove da criança', 'Prescrever antibiótico sistêmico profilático', 'Não perceber a hipotermia'],
    falaModelo: [
      { tarefa: 1, texto: 'É queimadura de 2º grau superficial: bolhas, leito rosado e úmido, muito dolorosa, e branqueia à pressão. Pega a perna inteira; na criança pequena, cada membro inferior vale cerca de 14%, menos que no adulto, porque a cabeça é proporcionalmente maior, cerca de 18%.', tempo: '25 s' },
      { tarefa: 2, texto: 'Na criança, mais de 10% de 2º grau já é grande queimado. Ele tem indicação de centro especializado: espessura parcial acima de 10%, queimadura no pé, que é região nobre, e idade pediátrica.', tempo: '20 s' },
      { tarefa: 3, texto: 'Ele pesa 14 kg. Pelo ATLS, na criança o coeficiente é 3: 3 vezes 14 vezes 14, dividido por 16, dá cerca de 37 mL por hora de Ringer lactato aquecido. A meta de diurese na criança é 1 mL/kg/h, uns 14 mL por hora, e ajusto a taxa de hora em hora.', tempo: '30 s' },
      { tarefa: 4, texto: 'O gelo aprofunda a queimadura e esfriou o Davi: ele está com 35,6 graus, então vou aquecê-lo. O certo é água corrente em temperatura ambiente. No curativo, antibiótico tópico; antibiótico oral para prevenir não se faz. Mãe, acidente com criança acontece num segundo, em qualquer família, e você o trouxe rápido. Pense na pele como uma capa de chuva: a queimadura abriu furos, e o corpo perde água por eles; por isso o soro na veia. O que mais te preocupa agora?', tempo: '50 s', analogia: 'Pele como capa de chuva furada' },
    ],
    extra: 'Qual é a taxa pré-hospitalar, sem peso e SCQ calculados? (Até 5 anos: 125 mL/h; 6 a 13 anos: 250 mL/h; 14 anos ou mais: 500 mL/h.) Qual é o método padrão-ouro para calcular a SCQ na criança? (Tabela de Lund-Browder.)',
  },

  // ----------------------------------------------------- CIR-11 · Medicações no perioperatório
  {
    id: 'CIR-11', materia: 'cir',
    titulo: 'A sacola de remédios antes da cirurgia',
    local: 'Ambulatório de avaliação pré-operatória', papel: 'Médico(a) clínico(a) do pré-operatório', interacao: 'paciente',
    cenario: 'Dona Marta, 64 anos, vai fazer uma artroplastia total de quadril eletiva daqui a 10 dias. Chega com uma sacola de remédios e diz: "Tenho medo de ficar sem os remédios do coração". Oriente o que manter, ajustar e suspender.',
    mesa: [
      { tipo: 'tabela', titulo: 'Remédios da sacola', linhas: [['Atenolol 50 mg', '1x/dia'], ['Anlodipino 10 mg', '1x/dia'], ['Losartana 50 mg', '12/12 h'], ['Sinvastatina 40 mg', 'à noite'], ['AAS 100 mg', '1x/dia'], ['Dapagliflozina 10 mg', '1x/dia'], ['Insulina NPH 24 UI', 'pela manhã'], ['Semaglutida', '1x/semana']] },
    ],
    tarefas: [
      'Quais medicamentos ela mantém, inclusive no dia da cirurgia?',
      'Quais suspende, com quanto tempo de antecedência e por quê?',
      'Como ficam a insulina e a semaglutida? Qual é a meta glicêmica perioperatória?',
      'Oriente a paciente, que tem medo de ficar sem os remédios do coração.',
    ],
    anamnese: [
      { tema: 'Doenças', resposta: '"Tenho pressão alta e diabetes. E coloquei um stent no coração há 3 anos, depois de um infarto."' },
      { tema: 'Remédios por conta própria e produtos naturais', resposta: '"Ah, tomo ginkgo biloba para a memória. Não trouxe, achei que não era remédio."' },
      { tema: 'Controle do diabetes', resposta: '"A glicose de jejum fica entre 120 e 140."' },
      { tema: 'Sangramentos', resposta: '"Nunca tive sangramento importante."' },
      { tema: 'Alergias', resposta: '"Não tenho alergia."' },
    ],
    placas: [
      { pedido: 'a função renal', placa: 'Creatinina 0,9 mg/dL.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Tenho medo de ficar sem os remédios do coração, doutor(a)."' },
      { gatilho: 'Se falar na semaglutida', fala: '"Mas é só uma injeção por semana, que mal faz?"' },
      { gatilho: 'Se falar no ginkgo', fala: '"Ginkgo é natural, tem problema?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Manter atenolol (betabloqueador), anlodipino (bloqueador de canal de cálcio) e sinvastatina (estatina), inclusive no dia', pts: 1 },
        { tarefa: 1, item: 'Manter o AAS: stent e doença coronariana, risco aterotrombótico maior que o de sangramento', pts: 1 },
        { tarefa: 2, item: 'Losartana (BRA): suspender no dia da cirurgia (ponto polêmico)', pts: 1 },
        { tarefa: 2, item: 'Dapagliflozina (SGLT2): suspender 3 a 4 dias antes', pts: 1 },
        { tarefa: 2, item: 'Perguntou sobre produtos naturais e suspendeu o ginkgo biloba 36 h antes (sangramento)', pts: 1 },
        { tarefa: 3, item: 'Insulina: metade da dose pela manhã (12 UI); meta glicêmica de 140 a 180 mg/dL', pts: 1 },
        { tarefa: 3, item: 'GLP-1: dieta líquida 24 h antes + jejum de 8 h + considerar POCUS gástrico (risco de broncoaspiração)', pts: 1 },
        { tarefa: 4, item: 'Tranquilizou: os remédios do coração continuam; orientações por escrito, com as datas de suspensão', pts: 1 },
      ],
    },
    errosCriticos: ['Suspender o betabloqueador', 'Suspender o AAS de paciente com stent sem avaliar o risco', 'Manter a dapagliflozina até a véspera'],
    falaModelo: [
      { tarefa: 1, texto: 'Ela mantém atenolol, anlodipino e sinvastatina, inclusive no dia: betabloqueador, bloqueador de canal de cálcio e estatina são mantidos. E mantenho o AAS: ela tem stent por infarto, e o risco de um evento coronariano é maior do que o de sangramento nessa cirurgia.', tempo: '30 s' },
      { tarefa: 2, texto: 'A losartana eu suspendo no dia da cirurgia, que é um ponto polêmico. A dapagliflozina, 3 a 4 dias antes. Perguntando, ela contou que toma ginkgo biloba: suspendo 36 horas antes, porque aumenta o sangramento.', tempo: '30 s' },
      { tarefa: 3, texto: 'Da insulina NPH, ela faz metade da dose na manhã da cirurgia, 12 unidades, com meta de glicemia entre 140 e 180. A semaglutida retarda o esvaziamento do estômago: dieta líquida nas 24 horas antes, jejum de 8 horas e, se possível, ultrassom gástrico antes da indução, pelo risco de broncoaspiração.', tempo: '35 s' },
      { tarefa: 4, texto: 'Dona Marta, os remédios que protegem o seu coração continuam, inclusive o AAS do stent. Os que eu vou parar são os que podem atrapalhar a cirurgia, cada um no seu tempo, e vou escrever tudo num papel com as datas. É como arrumar a mala de uma viagem: algumas coisas vão com a senhora o tempo todo, outras ficam em casa só por uns dias. Me conta como a senhora vai organizar?', tempo: '40 s', analogia: 'Mala de viagem: o que vai junto e o que fica' },
    ],
    extra: 'E se ela usasse clopidogrel ou varfarina? (Suspender 5 dias antes; varfarina com controle do RNI.) Anticoncepcional oral? (4 semanas.) Erva-de-são-joão e alho/ginseng? (5 e 7 dias.) Metformina e sulfonilureia? (Metformina na manhã, 24 h ou 48 h; sulfonilureia 24 h antes.)',
  },

  // ----------------------------------------------------- CIR-12 · Jejum e ERAS/ACERTO
  {
    id: 'CIR-12', materia: 'cir',
    titulo: 'Jejum desde a meia-noite e sonda no nariz?',
    local: 'Enfermaria de cirurgia — véspera da cirurgia', papel: 'Residente de cirurgia', interacao: 'paciente',
    cenario: 'Sr. Ademar, 58 anos, vai fazer amanhã às 10h uma colectomia eletiva no protocolo ERAS/ACERTO do hospital. A esposa ouviu de parentes que ele vai "ficar em jejum desde a meia-noite, sair com sonda no nariz e dreno, e só comer quando soltar gases". Oriente o casal.',
    mesa: [],
    tarefas: [
      'Oriente o jejum com horários, conforme a rotina dele. Por que não fazer jejum prolongado?',
      'Quais cuidados do intraoperatório o protocolo recomenda quanto a volume, temperatura, glicemia e analgesia?',
      'Como é o pós-operatório quanto a dieta, deambulação, sonda nasogástrica e dreno?',
      'Explique ao casal por que ele vai comer e andar tão cedo.',
    ],
    anamnese: [
      { tema: 'Jantar', resposta: '"Costumo jantar às 20h: arroz, feijão e carne."' },
      { tema: 'Café da manhã', resposta: '"Tomo café com leite e pão às 6h, todo dia."' },
      { tema: 'Doenças e remédios', resposta: '"Não tenho diabetes nem outra doença. Não tomo remédio."' },
      { tema: 'Medos', resposta: 'Esposa: "Ele tem pavor de sonda no nariz. O tio dele ficou dias com uma."' },
    ],
    placas: [
      { pedido: 'a glicemia de jejum', placa: '96 mg/dL.' },
    ],
    ator: [
      { gatilho: 'Esposa, ao começar', fala: '"Disseram que ele fica sem comer desde a meia-noite, é isso?"' },
      { gatilho: 'Se falar em comer cedo', fala: '"Mas não tem que esperar o intestino funcionar, soltar gases?"' },
      { gatilho: 'No final', fala: '"E a sonda no nariz, ele vai ter?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Jejum: 8 h ou mais para carne e gordura; 6 h para refeição leve ou leite não humano; 2 h para líquidos claros', pts: 1 },
        { tarefa: 1, item: 'Perguntou a rotina e adaptou: jantar normal; o café com leite das 6h não pode (só até as 4h); líquido claro com maltodextrina até as 8h', pts: 1 },
        { tarefa: 1, item: 'Jejum prolongado causa desidratação, hipoglicemia e consumo das reservas; o carboidrato até 2 h atenua a resistência à insulina', pts: 1 },
        { tarefa: 2, item: 'Fluido restritivo, guiado por meta (sobrecarga leva a íleo e deiscência); glicemia de 140 a 180 mg/dL', pts: 1 },
        { tarefa: 2, item: 'Normotermia (36,5–37,5 °C): monitorar temperatura, limitar exposição, cobertores, aquecimento ativo; a maior queda é na 1ª hora', pts: 1 },
        { tarefa: 2, item: 'Analgesia multimodal: opioide como base causa íleo, náusea e sedação', pts: 1 },
        { tarefa: 3, item: 'Dieta precoce (em menos de 24 h), sem esperar gases; deambulação no dia da cirurgia; sonda nasogástrica e dreno não são de rotina', pts: 1 },
        { tarefa: 4, item: 'Explicou ao casal, acolhendo o medo da sonda, sem jargão', pts: 1 },
      ],
    },
    errosCriticos: ['Orientar jejum absoluto desde a meia-noite', 'Liberar o café com leite das 6h para uma cirurgia às 10h', 'Condicionar a dieta à eliminação de gases'],
    falaModelo: [
      { tarefa: 1, texto: 'O jantar das 20h, com carne, está liberado, porque faltam mais de 8 horas. O café com leite das 6h não pode: leite precisa de 6 horas, então só até as 4h. Em vez dele, um líquido claro com maltodextrina até as 8h, duas horas antes. Jejum longo desidrata, dá hipoglicemia e faz o corpo gastar as reservas; o carboidrato antes da cirurgia diminui a resistência à insulina.', tempo: '40 s' },
      { tarefa: 2, texto: 'No intraoperatório: volume restrito, guiado por meta, porque excesso de líquido leva a íleo e deiscência; glicemia entre 140 e 180; temperatura entre 36,5 e 37,5 graus, com monitorização, cobertores e aquecimento ativo, porque a maior queda é na primeira hora; e analgesia multimodal, sem o opioide como base.', tempo: '40 s' },
      { tarefa: 3, texto: 'Depois, dieta em menos de 24 horas, aumentando conforme ele tolera, sem esperar gases. Ele levanta e anda no mesmo dia. Sonda no nariz e dreno não são de rotina, só com indicação.', tempo: '20 s' },
      { tarefa: 4, texto: 'Seu Ademar e senhora, o corpo depois da cirurgia é como um atleta depois de uma maratona: precisa de energia e de movimento para se recuperar, e não de ficar parado e sem comer. Por isso o suco claro até 2 horas antes, comer cedo e andar no mesmo dia. E a sonda no nariz não é de rotina: só se for necessária. Ficou alguma dúvida?', tempo: '35 s', analogia: 'Corpo como atleta depois da maratona' },
    ],
    extra: 'Por que controlar náuseas e vômitos no pós-operatório? (Risco de broncoaspiração, desidratação e distúrbio hidroeletrolítico.) Preparo intestinal e tricotomia são de rotina? (Não: só com indicação; tricotomia, se necessária, perto da cirurgia e com aparador elétrico.)',
  },

  // ----------------------------------------------------- CIR-13 · Prevenção da ISC na cirurgia com prótese
  {
    id: 'CIR-13', materia: 'cir',
    titulo: 'Como evitar a infecção da prótese',
    local: 'Ambulatório de ortopedia — consulta pré-operatória', papel: 'Médico(a) residente', interacao: 'paciente',
    cenario: 'Sr. Jorge, 63 anos, tem artroplastia total de quadril eletiva marcada para a próxima semana. A prescrição pré-operatória da enfermagem prevê "tricotomia com lâmina na véspera e banho com sabonete comum". Avalie o risco de infecção, corrija o preparo e oriente o paciente. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Quais fatores de risco para infecção de sítio cirúrgico ele tem, e quais dependem do procedimento?',
      'O que deve ser feito antes da cirurgia? Corrija a prescrição da enfermagem.',
      'Quais medidas de prevenção valem durante e depois da cirurgia?',
      'Como se classificam as ISC? Se ele tiver infecção na prótese daqui a 8 meses, ainda conta como ISC?',
    ],
    anamnese: [
      { tema: 'Diabetes', resposta: '"Tenho diabetes. A glicose anda alta, uns 250."' },
      { tema: 'Tabagismo', resposta: '"Fumo um maço por dia."' },
      { tema: 'Sintomas urinários', resposta: '"Agora que o senhor perguntou: estou com ardência para urinar há uns 3 dias."' },
      { tema: 'Feridas e outras infecções', resposta: '"Não tenho ferida na pele nem dente doendo."' },
      { tema: 'Imunidade e medicamentos', resposta: '"Não uso corticoide."' },
    ],
    placas: [
      { pedido: 'peso e altura', placa: 'IMC 36 kg/m².' },
      { pedido: 'a glicemia', placa: '252 mg/dL.' },
      { pedido: 'urina tipo I e urocultura', placa: 'Leucocitúria e nitrito positivo; urocultura positiva.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Doutor(a), está tudo certo para a semana que vem?"' },
      { gatilho: 'Se falar em adiar', fala: '"Mas já está tudo marcado, não dá para operar assim mesmo?"' },
      { gatilho: 'No final', fala: '"Depois que eu for para casa, o que eu tenho que observar?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Do paciente: obesidade, hiperglicemia, tabagismo e infecção ativa à distância (urinária, descoberta na anamnese)', pts: 1 },
        { tarefa: 1, item: 'Do procedimento: contaminação e duração, quebra de técnica, trauma tecidual e necrose, hematoma e espaço morto, hipoperfusão e hipotermia', pts: 1 },
        { tarefa: 2, item: 'Tratar a infecção urinária antes de operar (adiar se preciso), controlar a glicemia e orientar parar de fumar', pts: 1 },
        { tarefa: 2, item: 'Banho e higiene da área; tricotomia só se necessária, próxima ao procedimento e com aparador elétrico', pts: 1 },
        { tarefa: 3, item: 'Durante: antissepsia, técnica, antibioticoprofilaxia no tempo correto (prótese), normotermia e controle glicêmico', pts: 1 },
        { tarefa: 3, item: 'Depois: curativo, higiene das mãos, vigilância e orientação sobre sinais de alerta', pts: 1 },
        { tarefa: 4, item: 'Superficial (pele e subcutâneo), profunda (fáscia e músculo) e órgão/cavidade; com prótese, profunda e cavitária contam até 1 ano: sim, conta', pts: 1 },
      ],
    },
    errosCriticos: ['Manter a tricotomia com lâmina na véspera', 'Operar com a infecção urinária ativa'],
    falaModelo: [
      { tarefa: 1, texto: 'Do paciente: obesidade, glicemia alta, cigarro e, perguntando, descobri uma infecção urinária ativa, que é infecção à distância. Do procedimento: o grau de contaminação e a duração, quebras de técnica, trauma de tecido, hematoma e espaço morto, hipoperfusão e hipotermia.', tempo: '30 s' },
      { tarefa: 2, texto: 'Antes: trato a infecção urinária, mesmo que seja preciso adiar, controlo a glicemia e oriento parar de fumar. Corrijo a prescrição: banho e higiene da área, e tricotomia só se necessária, perto da cirurgia e com aparador elétrico, porque a lâmina na véspera faz microlesões na pele.', tempo: '35 s' },
      { tarefa: 3, texto: 'Durante: antissepsia, boa técnica, antibioticoprofilaxia no tempo certo, por ser prótese, temperatura normal e glicemia controlada. Depois: curativo, higiene das mãos de todos, vigilância e orientação sobre os sinais de alerta.', tempo: '30 s' },
      { tarefa: 4, texto: 'A ISC pode ser superficial, profunda, na fáscia e no músculo, ou de órgão e cavidade. Com prótese, a profunda e a cavitária contam até 1 ano, então aos 8 meses ainda conta. Seu Jorge, a prótese é como uma casa nova: se a gente leva uma infiltração para dentro dela, depois é muito difícil tirar. Por isso vamos tratar essa infecção urinária antes. Em casa, febre, secreção ou dor aumentando na ferida são motivo para voltar. Ficou claro?', tempo: '45 s', analogia: 'Prótese como casa nova sem infiltração' },
    ],
    extra: 'Qual é a principal fonte da ISC? (A microbiota do próprio paciente, endógena: pele, mucosas e trato aberto; a exógena vem das mãos da equipe, dos instrumentais e do ambiente.)',
  },

  // ----------------------------------------------------- CIR-14 · Ferida traumática e cicatrização
  {
    id: 'CIR-14', materia: 'cir',
    titulo: 'O corte da enxada',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sr. Antônio, 58 anos, lavrador, chega com um corte na perna feito pela enxada. Pede para "costurar logo, que precisa voltar para a roça". Avalie a ferida, defina como fechá-la e oriente o paciente. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Classifique a ferida e diga como ela deve ser fechada, diferenciando primeira, segunda e terceira intenção.',
      'Por que é preciso desbridar o tecido desvitalizado?',
      'Quais fatores da ferida e do paciente atrasam a cicatrização neste caso?',
      'Responda à pergunta sobre o queloide, diferenciando queloide de cicatriz hipertrófica.',
    ],
    anamnese: [
      { tema: 'Quando aconteceu', resposta: '"Foi ontem no fim da tarde, há umas 14 horas. Só consegui vir agora."' },
      { tema: 'Doenças', resposta: '"Tenho diabetes e uma doença reumática."' },
      { tema: 'Medicamentos', resposta: '"Tomo prednisona há 2 meses, por causa da doença reumática."' },
      { tema: 'Alimentação', resposta: '"Ando comendo pouco, perdi uns quilos."' },
      { tema: 'Cicatrizes na família', resposta: '"Meu irmão tem um queloide enorme na orelha."' },
    ],
    placas: [
      { pedido: 'o exame da ferida', placa: 'Ferida de 8 cm na perna, suja de terra, bordas irregulares, tecido desvitalizado e perda de tecido; as bordas ficam sob tensão ao tentar aproximá-las. Sem pus.' },
      { pedido: 'os exames laboratoriais', placa: 'Glicemia 238 mg/dL · albumina 1,8 g/dL.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Dá para costurar logo, doutor(a)? Preciso voltar para a roça."' },
      { gatilho: 'Se falar em fechar depois', fala: '"Deixar aberto? Não vai infeccionar?"' },
      { gatilho: 'No final', fala: '"E vai ficar aquele queloide feio, igual o do meu irmão?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou há quanto tempo: trauma com mais de 6 h, terra e tecido desvitalizado → ferida infectada; o antimicrobiano é tratamento', pts: 1 },
        { tarefa: 1, item: 'Terceira intenção (fechamento primário retardado): limpar, desbridar e suturar em 3 a 7 dias (contaminação, perda de tecido, tensão)', pts: 1 },
        { tarefa: 1, item: 'Primeira: sutura imediata, sem perda de tecido, infecção ou edema · Segunda: sem sutura, por granulação, mais lenta', pts: 1 },
        { tarefa: 2, item: 'Tecido necrótico favorece a proliferação bacteriana e impede a difusão de oxigênio e de células inflamatórias', pts: 1 },
        { tarefa: 3, item: 'Da ferida: contaminação, necrose e hipóxia · Do paciente: diabetes, corticoide, desnutrição (albumina < 2 g/dL)', pts: 1 },
        { tarefa: 3, item: 'Corticoide reduz a reação inflamatória, a epitelização e a síntese de colágeno', pts: 1 },
        { tarefa: 4, item: 'Queloide: ultrapassa as bordas, não regride, surge após 3 meses, mais em pele pigmentada · Hipertrófica: respeita os limites, pode regredir, surge após 1 mês, em áreas de tensão', pts: 2 },
      ],
    },
    errosCriticos: ['Suturar de imediato uma ferida de 14 horas, suja, com perda de tecido e tensão', 'Não desbridar o tecido desvitalizado'],
    falaModelo: [
      { tarefa: 1, texto: 'A ferida tem 14 horas, terra e tecido desvitalizado: mais de 6 horas de trauma com tecido morto é ferida infectada, e o antibiótico aqui é tratamento. Fecho por terceira intenção: limpo, desbrido e só suturo depois de 3 a 7 dias, porque há contaminação, perda de tecido e tensão. Primeira intenção é a sutura imediata, quando não há perda de tecido, infecção nem edema. Segunda intenção é deixar fechar sozinha, por granulação, um processo mais lento.', tempo: '45 s' },
      { tarefa: 2, texto: 'O tecido morto é ótimo para as bactérias e impede que o oxigênio e as células de defesa cheguem. Desbridar devolve oxigênio ao leito da ferida.', tempo: '15 s' },
      { tarefa: 3, texto: 'Da ferida: contaminação, necrose e pouca oxigenação. Dele: diabetes descontrolado, prednisona, que reduz a inflamação, a epitelização e a síntese de colágeno, e desnutrição, com albumina de 1,8, abaixo de 2.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Antônio, o queloide passa das bordas do corte, aparece depois de uns 3 meses, não melhora sozinho e é mais comum em pele mais escura. A cicatriz hipertrófica fica dentro dos limites do corte, aparece depois de 1 mês, em lugares que esticam, e pode melhorar com o tempo. Deixar aberto agora é como esperar o cimento secar antes de assentar o tijolo: se fecha com sujeira dentro, abre de novo. Ficou alguma dúvida?', tempo: '45 s', analogia: 'Esperar o cimento secar antes de assentar o tijolo' },
    ],
    extra: 'Quais são as fases da cicatrização? (Inflamatória: vasoconstrição e trombo, neutrófilo primeiro e substituível, macrófago essencial, linfócito tardio; proliferativa: angiogênese pelo TNF-alfa, granulação, epitelização e fibroplasia em ~48 h pelo TGF-beta; maturação: a partir de ~1 semana, miofibroblastos e colagenase.)',
  },

  // ----------------------------------------------------- CIR-15 · Queimadura elétrica
  {
    id: 'CIR-15', materia: 'cir',
    titulo: 'O choque na rede de alta tensão',
    local: 'Pronto-socorro — sala de emergência', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Josué, 32 anos, eletricista, levou um choque numa rede elétrica há 2 horas. Tem uma lesão escura de 2 cm na palma da mão direita e outra de 1 cm na sola do pé esquerdo. A esposa pergunta "por que tanta preocupação, se a queimadura é pequenininha". Avalie e defina a conduta. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Por que as lesões pequenas na pele não mostram a gravidade?',
      'O que significa a urina escura e qual é a conduta, com a meta?',
      'O que está acontecendo no antebraço e qual é a conduta? Diferencie de escarotomia.',
      'Ele precisa de centro especializado e de monitorização? Responda à esposa.',
    ],
    anamnese: [
      { tema: 'Como foi o choque', resposta: '"Encostei na rede de alta tensão, de 13.800 volts, e fiquei preso uns segundos. Estava no cesto do caminhão, não caí."' },
      { tema: 'Dor', resposta: '"O antebraço direito dói demais, uma dor que não passa com nada."' },
      { tema: 'Palpitações e desmaio', resposta: '"O coração ficou disparado. Não desmaiei."' },
      { tema: 'Peso', resposta: '"80 quilos."' },
      { tema: 'Doenças e medicamentos', resposta: '"Sou saudável."' },
    ],
    placas: [
      { pedido: 'o exame do antebraço', placa: 'Antebraço direito tenso; dor intensa e desproporcional à extensão passiva dos dedos. Pulso radial presente; mão corada.' },
      { pedido: 'a urina na sonda vesical', placa: 'Urina escura, "cor de refrigerante de cola". Fita: sangue +++; sedimento sem hemácias.' },
      { pedido: 'os exames laboratoriais', placa: 'CPK 18.000 U/L · potássio 5,9 mEq/L · creatinina 1,1 mg/dL.' },
      { pedido: 'o eletrocardiograma', placa: 'Taquicardia sinusal, 118 bpm.' },
    ],
    ator: [
      { gatilho: 'Esposa, ao começar', fala: '"Por que tanta preocupação, se a queimadura é pequenininha?"' },
      { gatilho: 'Examinador, se o candidato citar o pulso', fala: '"O pulso radial está presente. Isso afasta a síndrome compartimental?"' },
      { gatilho: 'Se falar em cirurgia no braço', fala: '"Cortar o braço dele? Por quê?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'A corrente percorre o trajeto de menor resistência e queima de dentro para fora; entrada e saída pequenas com destruição muscular extensa; a SCQ visível subestima', pts: 1 },
        { tarefa: 2, item: 'Mioglobinúria por rabdomiólise: fita positiva para sangue sem hemácias, CPK muito elevada e hipercalemia; risco de necrose tubular e lesão renal', pts: 1 },
        { tarefa: 2, item: 'Ringer lactato com meta de diurese de 1–1,5 mL/kg/h (80–120 mL/h) até a urina clarear; considerar manitol e bicarbonato', pts: 2 },
        { tarefa: 3, item: 'Dor desproporcional, pior à extensão passiva: síndrome compartimental (diagnóstico clínico) → fasciotomia, que abre a fáscia', pts: 1 },
        { tarefa: 3, item: 'Pulso presente não afasta: redução de pulso, palidez e cianose são tardios · escarotomia corta a escara de espessura total até o subcutâneo', pts: 1 },
        { tarefa: 4, item: 'Alta voltagem (≥ 1.000 V): transferência para centro especializado, com ECG e monitorização pelo risco de arritmia', pts: 1 },
        { tarefa: 4, item: 'Explicou à esposa por que a lesão de pele pequena não reflete o dano interno', pts: 1 },
      ],
    },
    errosCriticos: ['Julgar a gravidade pela área de pele queimada', 'Esperar o pulso sumir para indicar fasciotomia', 'Manter a meta de diurese padrão diante da urina escura'],
    falaModelo: [
      { tarefa: 1, texto: 'Na queimadura elétrica, a corrente segue o caminho de menor resistência e queima de dentro para fora: as lesões de entrada e saída são pequenas, mas a destruição muscular pode ser extensa. A área de pele visível subestima a gravidade.', tempo: '25 s' },
      { tarefa: 2, texto: 'A urina escura, com fita positiva para sangue e sedimento sem hemácias, é mioglobinúria: rabdomiólise, confirmada pela CPK de 18 mil e pelo potássio alto, com risco de lesão renal. Hidrato com Ringer lactato buscando diurese de 1 a 1,5 mL/kg/h, de 80 a 120 mL por hora, até a urina clarear; manitol e bicarbonato podem ser considerados.', tempo: '40 s' },
      { tarefa: 3, texto: 'O antebraço tenso, com dor desproporcional que piora à extensão passiva, é síndrome compartimental, um diagnóstico clínico: indico fasciotomia, que abre a fáscia. O pulso presente não afasta, porque perda de pulso, palidez e cianose são sinais tardios. É diferente da escarotomia, que corta a escara de espessura total até o subcutâneo.', tempo: '35 s' },
      { tarefa: 4, texto: 'Alta voltagem é critério de transferência para centro especializado, com ECG e monitorização pelo risco de arritmia. Senhora, a corrente elétrica é como um vazamento num cano enterrado: na calçada aparece só uma mancha pequena, mas embaixo o estrago pode ser grande. A urina escura mostra que o músculo sofreu, e o braço precisa de cirurgia para aliviar a pressão. O que mais preocupa a senhora?', tempo: '40 s', analogia: 'Vazamento em cano enterrado' },
    ],
    extra: 'E se fosse um choque de baixa voltagem? (Avaliar a necessidade de seguimento, por sintomas tardios e alterações visuais.) Por que o coeficiente da reposição na queimadura elétrica é 4? (A necrose muscular sequestra mais volume.)',
  },

  // ----------------------------------------------------- CIR-16 · Queimadura química
  {
    id: 'CIR-16', materia: 'cir',
    titulo: 'A cal virgem e o vinagre',
    local: 'Pronto-socorro', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Gilson, 45 anos, pedreiro, chega com ardência intensa nos dois antebraços depois de um acidente com cal virgem na obra. Ainda está com a camisa e a luva da obra. Avalie e conduza o atendimento. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é a primeira conduta, passo a passo?',
      'Por que não se deve neutralizar com vinagre?',
      'Qual é mais grave, queimadura por ácido ou por álcali? Por quê?',
      'Ele precisa de centro especializado? Explique ao paciente.',
    ],
    anamnese: [
      { tema: 'O que aconteceu', resposta: '"O saco de cal virgem rasgou e o pó caiu nos meus braços. Entrou pela luva e pela manga. Faz uns 30 minutos."' },
      { tema: 'O que foi feito', resposta: '"Um colega jogou vinagre para neutralizar. Ardeu ainda mais."' },
      { tema: 'Olhos e rosto', resposta: '"Estava de óculos, não caiu no olho nem no rosto."' },
      { tema: 'Doenças e alergias', resposta: '"Sou saudável, sem alergia."' },
    ],
    placas: [
      { pedido: 'o exame dos antebraços', placa: 'Pó branco aderido aos dois antebraços, áreas avermelhadas e esbranquiçadas, muito dolorosas.' },
      { pedido: 'o pH da pele depois de 5 litros de irrigação', placa: 'pH 9.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Joga mais vinagre, doutor(a), que alivia!"' },
      { gatilho: 'Se for molhar antes de tirar o pó', fala: '"Pode jogar água direto?"' },
      { gatilho: 'Se falar em transferir', fala: '"Transferir por causa de uma queimadura no braço?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Retirar a roupa e a luva contaminadas (exposição contínua)', pts: 1 },
        { tarefa: 1, item: 'Agente em pó: escovar a seco antes; depois irrigar com água corrente abundante (15–20 L) até pH 7–7,5', pts: 1 },
        { tarefa: 1, item: 'Com pH 9 após 5 L, continuou irrigando: a meta é o pH, não o volume', pts: 1 },
        { tarefa: 2, item: 'Nunca neutralizar: a reação é exotérmica e aprofunda a lesão', pts: 1 },
        { tarefa: 3, item: 'Álcali (cal): necrose de liquefação, que penetra e continua avançando, mais grave · Ácido: necrose de coagulação, que forma barreira e se autolimita', pts: 2 },
        { tarefa: 4, item: 'Toda queimadura química é transferida para centro especializado, independentemente da extensão', pts: 1 },
      ],
    },
    errosCriticos: ['Neutralizar com vinagre ou outro agente', 'Molhar o pó antes de escová-lo', 'Parar a irrigação com o pH ainda alcalino'],
    falaModelo: [
      { tarefa: 1, texto: 'Primeiro tiro a camisa e a luva, que continuam encostando o pó na pele. Como é pó, escovo a seco antes de molhar. Depois irrigo com muita água corrente, de 15 a 20 litros, até o pH da pele ficar entre 7 e 7,5. Com pH 9 depois de 5 litros, sigo irrigando: quem manda é o pH, não o volume.', tempo: '35 s' },
      { tarefa: 2, texto: 'Não se neutraliza, porque a reação entre ácido e álcali libera calor e aprofunda a queimadura.', tempo: '15 s' },
      { tarefa: 3, texto: 'O álcali é mais grave: causa necrose de liquefação, que penetra e continua avançando. O ácido causa necrose de coagulação, que forma uma barreira e tende a se limitar.', tempo: '20 s' },
      { tarefa: 4, texto: 'Toda queimadura química vai para centro especializado, qualquer que seja o tamanho. Seu Gilson, a cal é como uma ferrugem que continua corroendo enquanto está ali: por isso tiramos todo o pó e lavamos muito, até a pele voltar ao normal. O vinagre parece ajudar, mas a mistura esquenta e queima mais. O senhor vai para um serviço que cuida desse tipo de queimadura. Ficou claro?', tempo: '35 s', analogia: 'Álcali como ferrugem que continua corroendo' },
    ],
    extra: 'Quais são as zonas de Jackson? (Necrose no centro, irreversível; estase ao redor, viável mas em risco, onde a reposição de volume age; hiperemia na periferia, que se recupera sozinha.)',
  },

  // ----------------------------------------------------- CIR-17 · Grande queimado em ambiente fechado: X-ABCDE
  {
    id: 'CIR-17', materia: 'cir',
    titulo: 'O incêndio na boate',
    local: 'Pronto-socorro — sala de emergência', papel: 'Médico(a) plantonista', interacao: 'examinador',
    cenario: 'Chega um rapaz de 25 anos, vítima de incêndio numa boate fechada, onde houve mortes por intoxicação. Está pouco contactante e tem queimaduras extensas. O examinador faz o papel da equipe. Conduza o atendimento inicial em voz alta. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Por onde você começa? Avalie a via aérea: há indicação de via aérea definitiva?',
      'Avalie a ventilação. O que fazer com a queimadura do tórax?',
      'Ele está hipotenso. A hipotensão é da queimadura? O que você faz?',
      'Avalie o neurológico. Que intoxicações você suspeita e como trata?',
    ],
    anamnese: [
      { tema: 'Relato do socorrista', resposta: '"Tiramos ele da boate depois de uns 20 minutos lá dentro, com muita fumaça. Na correria da fuga, ele caiu e foi pisoteado."' },
      { tema: 'Material que queimou', resposta: 'Socorrista: "O teto era de espuma acústica, queimou muito material sintético."' },
    ],
    placas: [
      { pedido: 'o exame da via aérea', placa: 'Via aérea pérvia no momento. Vibrissas queimadas, escarro carbonáceo, voz rouca.' },
      { pedido: 'o nível de consciência', placa: 'Glasgow 12.' },
      { pedido: 'o exame do tórax', placa: 'Queimadura de espessura total circunferencial no tórax, com escara rígida; expansibilidade muito reduzida, ventilação difícil. SatO₂ 98%.' },
      { pedido: 'a circulação', placa: 'PA 80 × 50 mmHg, sem drogas vasoativas · FC 132 bpm · extremidades mal perfundidas, enchimento capilar de 3 s.' },
      { pedido: 'o FAST', placa: 'Líquido livre no espaço esplenorrenal e na pelve.' },
      { pedido: 'a gasometria arterial com lactato', placa: 'Carboxi-hemoglobina elevada · acidose lática importante, que não melhora após a reposição inicial.' },
    ],
    ator: [
      { gatilho: 'Examinador, ao começar', fala: '"A queimadura é enorme. Já começamos pelos curativos?"' },
      { gatilho: 'Examinador, depois da placa da via aérea', fala: '"Ele ainda não tem estridor. Dá para esperar?"' },
      { gatilho: 'Examinador, depois da placa do tórax', fala: '"A saturação está 98%. Isso tranquiliza?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Começou pelo X-ABCDE, não pela queimadura: ela é a lesão mais visível e a menos urgente dos primeiros minutos', pts: 1 },
        { tarefa: 1, item: 'Via aérea definitiva precoce: vibrissas queimadas, escarro carbonáceo e rouquidão em ambiente fechado, sem esperar o estridor (Glasgow < 9 e SCQ > 40% também indicam)', pts: 1 },
        { tarefa: 2, item: 'Escara circunferencial de espessura total no tórax travando a ventilação: escarotomia torácica de emergência, até o subcutâneo (sem anestesia no 3º grau)', pts: 1 },
        { tarefa: 3, item: 'Hipotensão na chegada não é da queimadura: procurar hemorragia e trauma (pisoteado; FAST com líquido livre)', pts: 1 },
        { tarefa: 3, item: 'Ringer lactato aquecido, 2 mL × peso × %SCQ ÷ 16 por hora, titulado pela diurese, e tratar a fonte de sangramento', pts: 1 },
        { tarefa: 4, item: 'CO: SatO₂ normal não afasta; dosar carboxi-hemoglobina; O₂ a 100% (máscara não reinalante ou pelo tubo)', pts: 1 },
        { tarefa: 4, item: 'Cianeto (material sintético): rebaixamento, hipotensão e acidose lática refratária → hidroxocobalamina (ou tiossulfato de sódio)', pts: 1 },
      ],
    },
    errosCriticos: ['Começar pela queimadura', 'Esperar o estridor para intubar', 'Atribuir a hipotensão inicial à queimadura'],
    falaModelo: [
      { tarefa: 1, texto: 'Não começo pela queimadura: começo pelo X-ABCDE. Sem hemorragia exsanguinante visível, vou à via aérea: ele tem vibrissas queimadas, escarro carbonáceo, rouquidão e Glasgow 12, depois de 20 minutos num ambiente fechado. Indico via aérea definitiva agora, sem esperar o estridor, porque o edema pode fechar a passagem.', tempo: '35 s' },
      { tarefa: 2, texto: 'O tórax tem queimadura de espessura total circunferencial, com escara rígida que trava a expansão: faço escarotomia torácica de emergência, cortando a escara até o subcutâneo. No 3º grau não precisa de anestesia.', tempo: '25 s' },
      { tarefa: 3, texto: 'Hipotensão na chegada não é da queimadura: o choque do queimado demora horas. Ele foi pisoteado e o FAST tem líquido livre: é hemorragia. Inicio Ringer lactato aquecido, 2 mL vezes peso vezes SCQ dividido por 16 por hora, titulado pela diurese, e chamo a cirurgia para controlar o sangramento.', tempo: '35 s' },
      { tarefa: 4, texto: 'A saturação de 98% não tranquiliza: o oxímetro lê a carboxi-hemoglobina como se fosse oxi-hemoglobina, e a gasometria confirma monóxido de carbono. Trato com oxigênio a 100%, agora pelo tubo. E a acidose lática que não melhora com volume, num incêndio de material sintético, sugere cianeto: dou hidroxocobalamina. O cianeto é como um cadeado na fábrica de energia da célula: o oxigênio chega, mas ela não consegue usá-lo.', tempo: '45 s', analogia: 'Cianeto como cadeado na fábrica de energia da célula' },
    ],
    extra: 'Qual a diferença entre lesão térmica da via aérea e lesão pulmonar por inalação? (Térmica: calor direto, supraglótica, edema imediato e obstrução, via aérea definitiva precoce. Inalação: produtos tóxicos, infraglótica, insuficiência respiratória em 24–48 h, O₂, toalete pulmonar e broncoscopia, o padrão-ouro.) Antibiótico profilático na inalação? (Não: só com pneumonia instalada.)',
  },

  // ----------------------------------------------------- CIR-18 · Profilaxia de TEV
  {
    id: 'CIR-18', materia: 'cir',
    titulo: 'Injeção na barriga por um mês?',
    local: 'Enfermaria de cirurgia — véspera da cirurgia', papel: 'Residente de cirurgia', interacao: 'paciente',
    cenario: 'Dona Helena, 66 anos, vai fazer amanhã uma colectomia por adenocarcinoma de cólon. Ao saber que vai receber "injeção na barriga" depois da cirurgia, inclusive em casa, ela pergunta: "Por quê? Eu não tenho problema de sangue". Avalie o risco de tromboembolismo e oriente a paciente. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é o risco de TEV pelo escore de Caprini, e qual profilaxia ela precisa?',
      'Quais esquemas farmacológicos podem ser usados?',
      'Por quanto tempo manter a profilaxia, e por quê?',
      'Se o escore fosse 3, o que mudaria? Explique à paciente por que ela vai usar a injeção em casa.',
    ],
    anamnese: [
      { tema: 'Trombose e embolia', resposta: '"Nunca tive. Mas minha mãe teve trombose na perna."' },
      { tema: 'Sangramentos', resposta: '"Nunca tive sangramento, úlcera nem nada parecido."' },
      { tema: 'Doenças e medicamentos', resposta: '"Tenho pressão alta e varizes. Tomo só o remédio da pressão."' },
      { tema: 'Mobilidade', resposta: '"Ando normalmente, faço minhas coisas."' },
    ],
    placas: [
      { pedido: 'o escore de Caprini', placa: 'Caprini: 7 pontos.' },
      { pedido: 'a função renal e as plaquetas', placa: 'Creatinina 0,8 mg/dL · plaquetas 240.000/mm³.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Por que a injeção? Eu não tenho problema de sangue."' },
      { gatilho: 'Se falar em 28 dias', fala: '"Um mês inteiro? Mesmo já estando em casa?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Caprini ≥ 5: alto risco → profilaxia farmacológica E mecânica', pts: 1 },
        { tarefa: 1, item: 'Perguntou sobre sangramentos e checou função renal e plaquetas antes da profilaxia (risco de sangramento)', pts: 1 },
        { tarefa: 2, item: 'Enoxaparina 40 mg SC 1x/dia ou heparina não fracionada 5.000 UI SC a cada 8–12 h; mecânica: meias de compressão, compressão pneumática e deambulação', pts: 2 },
        { tarefa: 3, item: 'Cirurgia oncológica abdominal ou pélvica: profilaxia estendida por 28 dias', pts: 1 },
        { tarefa: 4, item: 'Caprini 3–4 (moderado): farmacológica OU mecânica', pts: 1 },
        { tarefa: 4, item: 'Explicou com linguagem simples por que o risco de coágulo continua depois da alta', pts: 1 },
      ],
    },
    errosCriticos: ['Usar só profilaxia mecânica num Caprini de 7', 'Suspender a profilaxia na alta hospitalar'],
    falaModelo: [
      { tarefa: 1, texto: 'Com Caprini de 7, ela é de alto risco, 5 ou mais: precisa de profilaxia farmacológica e mecânica associadas. Antes, confirmo que não tem sangramento, e a função renal e as plaquetas estão normais.', tempo: '25 s' },
      { tarefa: 2, texto: 'Na farmacológica, enoxaparina 40 mg subcutânea uma vez ao dia, ou heparina não fracionada 5.000 unidades subcutânea a cada 8 a 12 horas. Na mecânica, meias de compressão, compressão pneumática intermitente e deambulação precoce.', tempo: '25 s' },
      { tarefa: 3, texto: 'Por ser cirurgia oncológica abdominal, a profilaxia é estendida por 28 dias, e não só durante a internação.', tempo: '15 s' },
      { tarefa: 4, texto: 'Se o escore fosse 3 ou 4, risco moderado, bastaria a farmacológica ou a mecânica. Dona Helena, depois de uma cirurgia grande, ainda mais por câncer, o sangue fica com mais tendência a formar coágulos nas pernas, mesmo em quem nunca teve problema. A injeção é como manter o rio correndo para a água não empoçar. Por isso vai continuar em casa por 28 dias, e vamos ensinar a senhora a aplicar. O que acha?', tempo: '45 s', analogia: 'Rio correndo para a água não empoçar' },
    ],
    extra: 'Se ela usasse anticoagulante em dose plena, quando suspender antes da cirurgia? (Heparina não fracionada: 6 h; HBPM: 24 h; anticoagulante oral direto: 24 h, ou 48 h na doença renal crônica; varfarina: 5 dias, com RNI.) E o Caprini 0? (Deambulação precoce.)',
  },

  // ----------------------------------------------------- CIR-19 · Retenção urinária e íleo pós-operatório
  {
    id: 'CIR-19', materia: 'cir',
    titulo: 'A barriga inchada no pós-operatório',
    local: 'Enfermaria de cirurgia geral', papel: 'Médico(a) plantonista', interacao: 'paciente',
    cenario: 'Sr. Paulo, 60 anos, fez colectomia aberta com raquianestesia. Você é chamado(a) duas vezes: na noite do 1º pós-operatório, porque ele está com dor no baixo-ventre, e no 3º dia, porque a barriga está inchada. Avalie cada momento e defina a conduta. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é a causa da dor no 1º pós-operatório, e qual é a conduta?',
      'No 3º dia, é íleo ou obstrução mecânica? Justifique e diga a conduta.',
      'Por que controlar as náuseas e os vômitos?',
      'Que tipo de analgesia ajuda a evitar o íleo? Explique ao paciente por que andar ajuda.',
    ],
    anamnese: [
      { tema: '1º dia: urina', resposta: '"Não consigo urinar desde a tarde, umas 8 horas. Parece que vou estourar."' },
      { tema: '1º dia: analgesia recebida', resposta: '"Me deram morfina para a dor."' },
      { tema: '3º dia: gases e evacuação', resposta: '"Não soltei gases nem evacuei ainda."' },
      { tema: '3º dia: náuseas e vômitos', resposta: '"Estou enjoado e vomitei uma vez hoje."' },
      { tema: '3º dia: dor', resposta: '"A barriga está estufada, desconfortável, mas não é uma cólica forte."' },
    ],
    placas: [
      { pedido: 'o exame do abdome no 1º dia', placa: 'Massa palpável e dolorosa acima do púbis. Ultrassom à beira do leito: 650 mL na bexiga.' },
      { pedido: 'os sinais vitais no 3º dia', placa: 'T 36,8 °C · FC 84 bpm · PA 128 × 80 mmHg.' },
      { pedido: 'o exame do abdome no 3º dia', placa: 'Distendido, timpânico, ruídos hidroaéreos diminuídos, sem sinais de irritação peritoneal. Ferida limpa.' },
      { pedido: 'a radiografia de abdome', placa: 'Distensão difusa de delgado e cólon, sem níveis hidroaéreos e sem ponto de transição.' },
    ],
    ator: [
      { gatilho: 'No 1º dia', fala: '"Doutor(a), parece que vou estourar, mas não sai nada."' },
      { gatilho: 'No 3º dia', fala: '"Vou ter que operar de novo? A barriga está muito inchada."' },
      { gatilho: 'Se pedir para andar', fala: '"Andar? Com essa barriga, doendo?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Perguntou a analgesia: retenção urinária por raquianestesia e opioide, com globo vesical de 650 mL', pts: 1 },
        { tarefa: 1, item: 'Cateterizar para descomprimir a bexiga e reavaliar a micção depois', pts: 1 },
        { tarefa: 2, item: 'Íleo funcional: distensão difusa de delgado e cólon, sem níveis hidroaéreos, paciente estável e afebril', pts: 1 },
        { tarefa: 2, item: 'Conduta conservadora: deambulação, dieta conforme a aceitação, antiemético (sem reoperar)', pts: 1 },
        { tarefa: 3, item: 'Náuseas e vômitos persistentes: risco de broncoaspiração, desidratação e distúrbio hidroeletrolítico', pts: 1 },
        { tarefa: 4, item: 'Analgesia multimodal: opioide como base causa íleo, náusea e sedação; as catecolaminas da REMIT também causam atonia', pts: 1 },
        { tarefa: 4, item: 'Explicou com analogia por que andar ajuda o intestino a voltar a funcionar', pts: 1 },
      ],
    },
    errosCriticos: ['Dar volume ou diurético diante do globo vesical', 'Indicar reoperação para um íleo funcional'],
    falaModelo: [
      { tarefa: 1, texto: 'No 1º dia é retenção urinária: ele recebeu raquianestesia e morfina, que prejudicam o esvaziamento da bexiga, e tem globo vesical com 650 mL e dor. Passo uma sonda para descomprimir e depois reavalio se ele consegue urinar sozinho.', tempo: '25 s' },
      { tarefa: 2, texto: 'No 3º dia é íleo pós-operatório, funcional: a distensão é difusa, do delgado e do cólon, sem níveis hidroaéreos, e ele está estável e sem febre. Não é obstrução mecânica. A conduta é conservadora: andar, avançar a dieta conforme ele aceitar e tratar a náusea.', tempo: '30 s' },
      { tarefa: 3, texto: 'Náusea e vômito persistentes aumentam o risco de broncoaspiração, desidratação e distúrbios dos eletrólitos, então trato com antiemético.', tempo: '15 s' },
      { tarefa: 4, texto: 'A analgesia multimodal ajuda, porque o opioide como base causa íleo, náusea e sedação, e as catecolaminas da própria resposta ao trauma já deixam o intestino parado. Seu Paulo, depois da cirurgia o intestino fica como um trem parado na estação: não está bloqueado, só precisa de um empurrão para voltar a andar. Caminhar é esse empurrão. Não precisa operar de novo. Vamos dar uma volta no corredor juntos?', tempo: '40 s', analogia: 'Intestino como trem parado na estação' },
    ],
    extra: 'Quais analgésicos usar para dor e febre leves no pós-operatório? (Dipirona e paracetamol; anti-inflamatório com cautela, pela cicatrização, pela função renal e pela pressão arterial.)',
  },

  // ----------------------------------------------------- CIR-20 · Consentimento informado
  {
    id: 'CIR-20', materia: 'cir',
    titulo: '"Assinei, mas não entendi"',
    local: 'Enfermaria de cirurgia — véspera da cirurgia', papel: 'Residente de cirurgia', interacao: 'paciente',
    cenario: 'Dona Rosa, 52 anos, tem colecistectomia videolaparoscópica marcada para amanhã. O plantonista deixou o termo de consentimento com ela e disse "é só assinar aqui". Quando você passa para conferir, ela diz: "Assinei, mas não entendi direito". Conduza a conversa.',
    mesa: [],
    tarefas: [
      'O consentimento colhido é válido? Por quê?',
      'Conduza a conversa para que o consentimento seja adequado.',
      'Como a autonomia da paciente participa da segurança da cirurgia?',
      'Em que momento do checklist de cirurgia segura o consentimento é conferido, e o que mais se confere ali?',
    ],
    anamnese: [
      { tema: 'O que ela entendeu', resposta: '"Entendi que vão tirar alguma coisa perto do fígado. Vão tirar meu fígado?"' },
      { tema: 'Sintomas', resposta: '"Tenho cólica forte do lado direito depois de comida gordurosa. Já fui três vezes ao pronto-socorro este ano."' },
      { tema: 'Medos e expectativas', resposta: '"Tenho medo da anestesia. E queria saber se tem outro jeito, sem cirurgia."' },
      { tema: 'Apoio', resposta: '"Minha filha vem amanhã cedo."' },
    ],
    placas: [
      { pedido: 'o ultrassom de abdome', placa: 'Vesícula com múltiplos cálculos; parede fina; vias biliares normais.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"Assinei, mas não entendi direito. Vão tirar meu fígado?"' },
      { gatilho: 'Se falar em alternativas', fala: '"E tem outro jeito sem cirurgia?"' },
      { gatilho: 'No final', fala: '"E se eu quiser pensar mais um pouco?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Não: consentimento = comunicação + decisão + registro; formulário genérico e assinatura sem conversa comprometem a validade', pts: 2 },
        { tarefa: 2, item: 'Perguntou o que ela entendeu e quais são os medos antes de explicar', pts: 1 },
        { tarefa: 2, item: 'Explicou indicação, riscos, complicações e alternativas (inclusive não operar) em linguagem acessível', pts: 1 },
        { tarefa: 2, item: 'Verificou a compreensão, respeitou o tempo para decidir e registrou que ela compreendeu e participou', pts: 1 },
        { tarefa: 3, item: 'Autonomia: a paciente participa, confirma informações (ex.: marcação com ela acordada) e consente de forma esclarecida', pts: 1 },
        { tarefa: 4, item: 'Sign in, antes da indução: identidade, sítio/lateralidade, procedimento, alergias e consentimento', pts: 1 },
      ],
    },
    errosCriticos: ['Considerar válido o termo assinado sem explicação', 'Pressionar a paciente a manter a decisão'],
    falaModelo: [
      { tarefa: 1, texto: 'Não é válido como está. Consentimento não é só a assinatura: é comunicação, decisão e registro. Formulário genérico, assinado sem conversa, compromete a validade.', tempo: '20 s' },
      { tarefa: 2, texto: 'Dona Rosa, me conta o que a senhora entendeu e o que mais preocupa? … A cirurgia não tira o fígado: tira a vesícula, uma bolsinha embaixo dele que está cheia de pedras e causa as suas cólicas. Pense numa caixa-d’água com areia no fundo: de vez em quando a areia entope o cano, e dói. Vou explicar por que a cirurgia está indicada, os riscos, as complicações e as alternativas, inclusive não operar. Depois, me conta com suas palavras o que entendeu? Se quiser pensar mais, tudo bem: a decisão é sua, e vamos registrar o que for decidido.', tempo: '60 s', analogia: 'Caixa-d’água com areia entupindo o cano' },
      { tarefa: 3, texto: 'A autonomia faz parte da segurança: a paciente participa, confirma as informações, como na marcação do local com ela acordada, e consente de forma esclarecida. Ela não é espectadora.', tempo: '20 s' },
      { tarefa: 4, texto: 'No sign in, antes da indução anestésica, conferimos identidade, sítio e lateralidade, procedimento, alergias e o termo de consentimento.', tempo: '15 s' },
    ],
    extra: 'Quais são as variáveis que sustentam a segurança do paciente? (Metas mensuráveis, transparência sem cultura de punição, comunicação efetiva, autonomia do paciente, profissionalismo e educação continuada.)',
  },

  // ----------------------------------------------------- CIR-21 · Evento adverso e segurança do paciente
  {
    id: 'CIR-21', materia: 'cir',
    titulo: 'Quase operamos o joelho errado',
    local: 'Reunião do núcleo de segurança do paciente', papel: 'Cirurgião(ã)', interacao: 'examinador',
    cenario: 'Na semana passada, um paciente quase foi operado no joelho direito, quando a indicação era o esquerdo. A cirurgia foi interrompida a tempo e feita no lado certo. O chefe do serviço (examinador) quer "descobrir o culpado e demitir". Analise o evento e responda ao chefe. Peça ao avaliador os documentos de que precisar.',
    mesa: [],
    tarefas: [
      'Isso foi erro de uma pessoa ou falha de sistema? Explique o modelo do queijo suíço.',
      'Quais barreiras falharam e qual funcionou?',
      'Diferencie imperícia, imprudência e negligência.',
      'Responda ao chefe: o que sustenta a segurança do paciente e por que punir não resolve?',
    ],
    anamnese: [
      { tema: 'Relato da técnica de enfermagem', resposta: '"No time out, o anestesista leu o lado direito em voz alta. Eu estranhei, porque a ressonância era do joelho esquerdo, e falei."' },
      { tema: 'Relato de quem marcou', resposta: '"Marquei o joelho depois da anestesia, olhando o pedido. Ninguém perguntou ao paciente."' },
    ],
    placas: [
      { pedido: 'o pedido de internação', placa: 'Artroplastia de joelho DIREITO.' },
      { pedido: 'o laudo da ressonância', placa: 'Joelho ESQUERDO: artrose grave.' },
      { pedido: 'o checklist preenchido', placa: 'Sign in assinado sem o campo "sítio marcado com o paciente". Time out com registro da interrupção.' },
    ],
    ator: [
      { gatilho: 'Chefe, ao começar', fala: '"Quem marcou o joelho errado vai ser demitido hoje."' },
      { gatilho: 'Na tarefa 4', fala: '"Se ninguém for punido, ninguém aprende."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Nem todo evento adverso é erro médico: a maioria é falha de sistema, com barreiras falhando alinhadas, como os furos do queijo suíço', pts: 2 },
        { tarefa: 2, item: 'Pediu os documentos e apontou as falhas: pedido com o lado trocado e marcação com o paciente anestesiado, sem a participação dele', pts: 1 },
        { tarefa: 2, item: 'Funcionou: o time out, com confirmação verbal da equipe antes da incisão', pts: 1 },
        { tarefa: 3, item: 'Imperícia: falta de conhecimento técnico · Imprudência: agir sem cautela · Negligência: omissão', pts: 1 },
        { tarefa: 4, item: 'Variáveis de segurança: metas mensuráveis, transparência sem cultura de punição, comunicação efetiva, autonomia do paciente, profissionalismo, educação continuada', pts: 1 },
        { tarefa: 4, item: 'Punição esconde as falhas; transparência permite corrigir o sistema', pts: 1 },
      ],
    },
    errosCriticos: ['Atribuir o evento a uma única pessoa', 'Não reconhecer a falha da marcação com o paciente anestesiado'],
    falaModelo: [
      { tarefa: 1, texto: 'Foi uma falha de sistema. Nem todo evento adverso é erro médico: em geral, várias barreiras falham ao mesmo tempo, como fatias de queijo suíço com os furos alinhados, e aí o erro passa.', tempo: '20 s' },
      { tarefa: 2, texto: 'Pelos documentos, o pedido de internação veio com o lado trocado, e a marcação foi feita com o paciente anestesiado, olhando só o pedido; ela deveria ser feita com ele acordado, confirmando o lado, antes da indução. A barreira que funcionou foi o time out: a técnica comparou com a ressonância e falou.', tempo: '35 s' },
      { tarefa: 3, texto: 'Imperícia é a falta de conhecimento técnico; imprudência é agir sem cautela, fazer o que não devia; negligência é a omissão, deixar de fazer o que devia.', tempo: '20 s' },
      { tarefa: 4, texto: 'Chefe, a segurança se sustenta em metas mensuráveis, transparência sem cultura de punição, comunicação na equipe, autonomia do paciente, profissionalismo e educação continuada. Se a gente demite, as pessoas passam a esconder os erros, e o furo do queijo continua lá para o próximo paciente. Foi justamente uma técnica que falou no time out e evitou o dano. O caminho é corrigir o fluxo da marcação. O senhor concorda em revisarmos isso juntos?', tempo: '45 s', analogia: 'Fatias de queijo suíço com furos alinhados' },
    ],
    extra: 'Qual foi o impacto do checklist de cirurgia segura da OMS? (Complicações de cerca de 11% para 7% e mortalidade de 1,5% para 0,8%; campanha "Cirurgia Segura Salva Vidas", 2008.)',
  },

  // ----------------------------------------------------- CIR-22 · Tumores cutâneos benignos e corno cutâneo
  {
    id: 'CIR-22', materia: 'cir',
    titulo: 'Os carocinhos do Sr. Benedito',
    local: 'Ambulatório de cirurgia', papel: 'Médico(a) cirurgião(ã)', interacao: 'paciente',
    cenario: 'Sr. Benedito, 68 anos, lavrador aposentado, vem "tirar umas coisinhas da pele" e mostra cinco lesões. Investigue a história, examine cada lesão, dê as hipóteses e oriente o paciente. Peça ao avaliador os dados de exame de que precisar.',
    mesa: [],
    tarefas: [
      'Dê a hipótese diagnóstica de cada lesão.',
      'Qual delas exige investigação, e como?',
      'Diferencie a ceratose seborreica da ceratose actínica.',
      'Explique ao paciente quais lesões são benignas e qual merece atenção.',
    ],
    anamnese: [
      { tema: 'Tempo e evolução', resposta: '"O caroço das costas está aí há anos, igual. As manchas do tronco vêm crescendo devagar. A da mão apareceu há uns meses e cresceu rápido."' },
      { tema: 'Sintomas', resposta: '"Nenhuma dói, só a da mão, que dói e fica vermelha em volta."' },
      { tema: 'O caroço da nuca', resposta: '"Quando eu aperto, sai uma pasta branca com cheiro ruim."' },
      { tema: 'Tratamentos anteriores', resposta: '"Um médico já tirou só a ponta do chifre da mão. A biópsia deu hiperceratose, e ele disse que não era nada."' },
      { tema: 'Exposição ao sol e doenças', resposta: '"Trabalhei no sol a vida toda. Estou acima do peso, mas não tenho outra doença."' },
    ],
    placas: [
      { pedido: 'o exame da lesão do dorso', placa: 'Nódulo subcutâneo de 4 cm, amolecido, móvel, indolor.' },
      { pedido: 'o exame da lesão da nuca', placa: 'Nódulo arredondado, móvel, com pequeno orifício central.' },
      { pedido: 'o exame das axilas e do pescoço', placa: 'Várias lesões pedunculadas, moles, de 1 a 5 mm, da cor da pele.' },
      { pedido: 'o exame do tronco', placa: 'Placas acastanhadas, bem delimitadas, de superfície rugosa e aspecto graxento, maiores que 1 cm.' },
      { pedido: 'o exame da lesão da mão', placa: 'Lesão dura, cônica, hiperceratótica, em forma de chifre, com base larga, eritematosa e dolorosa.' },
    ],
    ator: [
      { gatilho: 'Ao se apresentar', fala: '"É tudo câncer, doutor(a)? Estou cheio de caroço."' },
      { gatilho: 'Se falar da lesão da mão', fala: '"Mas já fizeram biópsia e deu que não era nada."' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Dorso: lipoma · nuca: cisto epidermoide (sebáceo) · axilas e pescoço: acrocórdons (fibromas moles, ligados à obesidade) · tronco: ceratose seborreica', pts: 2 },
        { tarefa: 1, item: 'Mão: corno cutâneo', pts: 1 },
        { tarefa: 2, item: 'Perguntou o tratamento anterior: a ponta não é diagnóstica; a base pode ser benigna, pré-maligna ou maligna → biopsiar a base (base larga, eritematosa e dolorosa, crescimento rápido)', pts: 2 },
        { tarefa: 3, item: 'Seborreica: benigna, acastanhada, graxenta, rugosa · Actínica: pré-maligna, pele clara e sol, escamas aderentes, pode progredir para CEC', pts: 1 },
        { tarefa: 4, item: 'Explicou que quatro lesões são benignas e por que a base da lesão da mão precisa ser biopsiada', pts: 1 },
      ],
    },
    errosCriticos: ['Considerar o laudo da ponta suficiente para o corno cutâneo', 'Confundir ceratose seborreica com lesão pré-maligna'],
    falaModelo: [
      { tarefa: 1, texto: 'O nódulo mole e móvel do dorso é um lipoma. O da nuca, com orifício central e conteúdo pastoso de cheiro rançoso, é um cisto epidermoide, ou sebáceo. As lesões pedunculadas e moles são acrocórdons, os fibromas moles, ligados à obesidade. As placas acastanhadas e graxentas são ceratoses seborreicas. E a lesão em chifre da mão é um corno cutâneo.', tempo: '40 s' },
      { tarefa: 2, texto: 'O corno cutâneo exige investigação: a biópsia anterior pegou só a ponta, que é hiperceratose e não diagnostica nada. O que define a lesão é a base, que pode ser benigna, pré-maligna ou maligna. Como a base é larga, avermelhada e dolorosa, e cresceu rápido, biopsio a base.', tempo: '30 s' },
      { tarefa: 3, texto: 'A ceratose seborreica é benigna: placa acastanhada, graxenta e rugosa. A ceratose actínica é pré-maligna: aparece em pele clara exposta ao sol, com escamas aderentes, e pode progredir para carcinoma espinocelular.', tempo: '25 s' },
      { tarefa: 4, texto: 'Seu Benedito, quatro dessas lesões são benignas. A da mão é como a ponta de um iceberg: o que aparece em cima não diz o que está embaixo, e a biópsia anterior pegou só a ponta. Por isso precisamos tirar um pedaço da base para ter certeza. Ficou claro?', tempo: '30 s', analogia: 'Ponta do iceberg' },
    ],
    extra: 'O que é o granuloma piogênico, e por que o nome é inadequado? (Tumor vascular friável, periungueal, que sangra ao menor trauma; não há pus nem infecção.) Como se trata o hemangioma hoje? (O propranolol reduziu as cirurgias precoces.)',
  },

  // ----------------------------------------------------- CIR-24 · Hipertermia maligna × anafilaxia no intraoperatório
  {
    id: 'CIR-24', materia: 'cir',
    titulo: 'Rigidez e febre na sala de cirurgia',
    local: 'Sala cirúrgica', papel: 'Residente de cirurgia', interacao: 'examinador',
    cenario: 'Você está na sala de uma apendicectomia num homem de 24 anos, hígido, sob anestesia geral. Cerca de 20 minutos após a indução, o anestesista (examinador) pede ajuda: "Alguma coisa está errada". Reconheça o quadro e conduza. Peça ao avaliador os dados de que precisar.',
    mesa: [],
    tarefas: [
      'Qual é o diagnóstico? Que dados confirmam?',
      'Qual é a conduta imediata?',
      'Como diferenciar de anafilaxia, e quais agentes mais causam anafilaxia no centro cirúrgico?',
      'Qual é a faixa de normotermia, e como se previne a hipotermia no intraoperatório?',
    ],
    anamnese: [
      { tema: 'Agentes anestésicos usados', resposta: 'Anestesista: "Indução com sevoflurano e succinilcolina."' },
      { tema: 'Alergias registradas', resposta: 'Anestesista: "Nenhuma alergia conhecida."' },
    ],
    placas: [
      { pedido: 'o monitor', placa: 'FC 138 bpm · PA 150 × 90 mmHg · EtCO₂ subindo progressivamente · temperatura 39,4 °C.' },
      { pedido: 'o exame do paciente', placa: 'Rigidez de masseter. Pele sem urticária e sem eritema. Ausculta sem sibilos.' },
      { pedido: 'o peso', placa: '70 kg.' },
    ],
    ator: [
      { gatilho: 'Anestesista, ao começar', fala: '"Ele está quente e rígido. É alergia ao bloqueador?"' },
      { gatilho: 'Se propuser corticoide e anti-histamínico', fala: '"Mas ele não tem nada na pele nem chiado…"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Hipertermia maligna: rigidez de masseter, taquicardia, EtCO₂ em elevação e temperatura de 39,4 °C após sevoflurano e succinilcolina', pts: 2 },
        { tarefa: 2, item: 'Suspender imediatamente o agente inalatório e a succinilcolina; hiperventilar com O₂ a 100%', pts: 1 },
        { tarefa: 2, item: 'Dantroleno sódico 2,5 mg/kg IV (≈ 175 mg para 70 kg)', pts: 1 },
        { tarefa: 3, item: 'Anafilaxia: alterações cutâneas, broncoespasmo, hipotensão, edema de glote; agentes: bloqueadores neuromusculares, látex, indutores', pts: 1 },
        { tarefa: 3, item: 'Prevenção: investigar alergias, registrar, evitar o agente suspeito, reconhecer cedo e agir imediatamente', pts: 1 },
        { tarefa: 4, item: 'Normotermia 36,5–37,5 °C; hipotermia < 35 °C central; prevenir com monitorização, exposição limitada, cobertores, meias e toucas, aquecimento ativo, sala 20–23,8 °C', pts: 1 },
      ],
    },
    errosCriticos: ['Manter o agente inalatório', 'Tratar como reação alérgica com corticoide e anti-histamínico'],
    falaModelo: [
      { tarefa: 1, texto: 'É hipertermia maligna: depois de sevoflurano e succinilcolina, ele tem rigidez de masseter, taquicardia, gás carbônico expirado subindo e temperatura de 39,4 graus.', tempo: '20 s' },
      { tarefa: 2, texto: 'Suspendo na hora o sevoflurano e a succinilcolina, hiperventilo com oxigênio a 100% e faço dantroleno 2,5 mg/kg na veia, cerca de 175 mg para os 70 kg dele.', tempo: '20 s' },
      { tarefa: 3, texto: 'Não é anafilaxia: ele não tem alteração na pele, broncoespasmo nem hipotensão. Na anafilaxia do centro cirúrgico, os agentes mais comuns são os bloqueadores neuromusculares, o látex e os indutores anestésicos. A prevenção é investigar alergias, registrar, evitar o agente suspeito e agir cedo. É como diferenciar um incêndio de um vazamento: os dois disparam o alarme, mas o extintor é diferente.', tempo: '40 s', analogia: 'Incêndio × vazamento: alarmes iguais, extintores diferentes' },
      { tarefa: 4, texto: 'A normotermia vai de 36,5 a 37,5 graus; hipotermia é temperatura central abaixo de 35. Previno monitorizando a temperatura mesmo em cirurgias curtas, limitando a exposição da pele, com cobertores, meias e toucas, aquecimento ativo quando necessário e sala entre 20 e 23,8 graus. A maior queda acontece na primeira hora.', tempo: '35 s' },
    ],
    extra: 'Quais complicações intraoperatórias precisam ser reconhecidas na sala? (Infarto, embolia pulmonar, pneumotórax, lesão vascular inadvertida, cirurgia em local errado, hipertermia maligna, anafilaxia e alergia ao látex.)',
  },

  // ----------------------------------------------------- CIR-25 · Potencial de contaminação e profilaxia × tratamento
  {
    id: 'CIR-25', materia: 'cir',
    titulo: 'O mapa cirúrgico do dia',
    local: 'Centro cirúrgico — reunião da manhã', papel: 'Residente de cirurgia', interacao: 'examinador',
    cenario: 'O preceptor (examinador) mostra o mapa cirúrgico do dia e pede que você classifique cada cirurgia e diga o papel do antibiótico. Peça ao avaliador os detalhes de cada caso de que precisar.',
    mesa: [
      { tipo: 'tabela', titulo: 'Mapa cirúrgico', linhas: [['Sala 1', 'Tireoidectomia total'], ['Sala 2', 'Colecistectomia videolaparoscópica eletiva'], ['Sala 3', 'Sigmoidectomia eletiva por adenocarcinoma não obstrutivo'], ['Sala 4', 'Fratura exposta de tíbia'], ['Sala 5', 'Laparotomia por úlcera perfurada']] },
    ],
    tarefas: [
      'Classifique cada cirurgia quanto ao potencial de contaminação.',
      'Em quais o antibiótico é profilaxia e em quais é tratamento? Qual esquema na sigmoidectomia?',
      'Na sigmoidectomia, o cólon foi aberto de forma controlada, sem extravasamento e sem pus. Há infecção do sítio cirúrgico?',
      'E se, durante a sigmoidectomia, houver extravasamento fecal grosseiro?',
    ],
    anamnese: [],
    placas: [
      { pedido: 'os detalhes da fratura exposta', placa: 'Acidente de moto há 2 horas; contaminação evidente e perda de partes moles.' },
      { pedido: 'os detalhes da úlcera perfurada', placa: 'Perfuração há 2 dias, com peritonite purulenta.' },
      { pedido: 'o intraoperatório da sigmoidectomia', placa: 'Abertura controlada do cólon, com clampeamento e proteção da cavidade; sem extravasamento fecal e sem pus.' },
    ],
    ator: [
      { gatilho: 'Preceptor, ao começar', fala: '"Todas levam antibiótico, então dá tudo na mesma, certo?"' },
      { gatilho: 'Preceptor, na tarefa 3', fala: '"Abriu o cólon, então infeccionou, não é?"' },
    ],
    barema: {
      conteudo: [
        { tarefa: 1, item: 'Tireoidectomia: limpa · colecistectomia eletiva e sigmoidectomia eletiva: potencialmente contaminadas (entrada controlada em trato colonizado)', pts: 1 },
        { tarefa: 1, item: 'Fratura exposta recente (até 4–6 h) com contaminação: contaminada · úlcera perfurada com pus: infectada', pts: 1 },
        { tarefa: 2, item: 'Profilaxia conforme a microbiota do sítio na potencialmente contaminada; na infectada, antibioticoterapia + controle de foco', pts: 1 },
        { tarefa: 2, item: 'Sigmoidectomia: ceftriaxona + metronidazol (alternativa: cefoxitina), cobrindo Gram-negativos e anaeróbios do cólon', pts: 1 },
        { tarefa: 2, item: 'Fratura exposta: desbridamento amplo, estabilização óssea e antibiótico EV precoce', pts: 1 },
        { tarefa: 3, item: 'Não há ISC: contaminação não é infecção; o potencial de contaminação estima risco e a ISC é um evento do pós-operatório', pts: 1 },
        { tarefa: 4, item: 'O intraoperatório pode mudar a classificação: extravasamento GI grosseiro → reclassificar como contaminada', pts: 1 },
      ],
    },
    errosCriticos: ['Chamar de profilaxia o antibiótico da cirurgia infectada', 'Diagnosticar ISC pela abertura controlada do cólon'],
    falaModelo: [
      { tarefa: 1, texto: 'A tireoidectomia é limpa. A colecistectomia e a sigmoidectomia eletivas são potencialmente contaminadas: entram de forma controlada em trato colonizado. A fratura exposta recente, com contaminação, é contaminada. E a úlcera perfurada há 2 dias, com pus, é infectada.', tempo: '30 s' },
      { tarefa: 2, texto: 'Na limpa, a profilaxia só se justifica por prótese ou cirurgia de alto risco; nas potencialmente contaminadas, profilaxia conforme o sítio. Na sigmoidectomia, ceftriaxona com metronidazol, ou cefoxitina, para Gram-negativos e anaeróbios do cólon. Na fratura exposta, desbridamento amplo, estabilização óssea e antibiótico venoso precoce. Na úlcera perfurada, o antibiótico é tratamento, junto com o controle do foco.', tempo: '45 s' },
      { tarefa: 3, texto: 'Não há infecção do sítio cirúrgico. Contaminação é o microrganismo chegar ao campo; infecção é invasão, multiplicação e dano. O potencial de contaminação estima o risco; a ISC é um evento do pós-operatório. É como a previsão do tempo: dizer que pode chover não é dizer que choveu.', tempo: '30 s', analogia: 'Previsão do tempo: risco de chuva não é chuva' },
      { tarefa: 4, texto: 'O intraoperatório pode mudar a classificação: com extravasamento fecal grosseiro, reclassifico a sigmoidectomia como contaminada ao final da cirurgia.', tempo: '15 s' },
    ],
    extra: 'Qual é a microbiota esperada em cada sítio? (Pele: Gram-positivos, sobretudo Staphylococcus aureus; cólon e reto: Gram-negativos e anaeróbios, E. coli e Bacteroides fragilis; urinário: E. coli e Enterococcus faecalis.)',
  },
);
