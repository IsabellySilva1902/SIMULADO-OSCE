// Resumo do assunto de cada estação, para revisar depois do feedback ou pelo catálogo.
// Conteúdo restrito aos slides e ao banco de questões das disciplinas.
const RESUMOS = {
  // ===================================================== CLÍNICA CIRÚRGICA
  'CIR-01': { tema: 'Queimaduras no adulto: SCQ, Parkland e transferência', pontos: [
    'Regra dos nove (adulto): cada membro superior 9%; tronco anterior 18%; tronco posterior 18%; cada membro inferior 18%. A palma da mão do paciente (com os dedos) vale cerca de 1%, útil para áreas pequenas.',
    'Só 2º e 3º graus entram na SCQ. O 1º grau (eritema, ardor, sem flictena) não entra.',
    'Parkland: 4 mL × peso × %SCQ de Ringer lactato em 24 h. Metade nas primeiras 8 h contadas a partir da queimadura; metade nas 16 h seguintes.',
    'Titular pela diurese: meta de 0,5 mL/kg/h no adulto.',
    'Grande queimado: 2º grau em mais de 20% da SCQ no adulto (mais de 10% na criança).',
    'Transferem independentemente da área: espessura parcial ou total em face, mãos, pés, genitália, períneo e grandes articulações; toda queimadura química; elétrica de alta voltagem.',
    'Sem antibiótico sistêmico profilático. Via aérea definitiva precoce se houver estridor, rouquidão, sobrancelhas chamuscadas e escarro carbonáceo em ambiente fechado.',
  ], pegadinha: 'As 8 primeiras horas contam a partir da queimadura, não da chegada ao hospital: se já passaram 2 h, a primeira metade corre em 6 h.' },

  'CIR-02': { tema: 'Avaliação pré-operatória: ASA, Lee e exames', pontos: [
    'O objetivo é estimar e otimizar o risco, e não aplicar exames de forma padronizada e indiscriminada.',
    'ASA II: doença sistêmica leve ou controlada, sem limitação. ASA III: doença grave com limitação funcional. ASA IV: ameaça constante à vida. Sufixo E: cirurgia de urgência ou emergência.',
    'Índice de Lee: 0–1 fator libera; 2 fatores, avaliar a capacidade funcional; 3–6 fatores, teste cardíaco.',
    'Subir dois lances de escada sem sintomas equivale a 4 METs ou mais.',
    'Cirurgias de baixo risco (mama, tireoide, pele, oftalmologia, endoscopias) são liberadas sem entrar no fluxo do Lee.',
    'Exames: abaixo de 40 anos sem fatores de risco, nenhum de rotina. Acima de 65: ECG, hematócrito, ureia/creatinina, glicemia e eletrólitos. RX de tórax se mais de 20 maços-ano, IMC acima de 40, pneumopatia ou mais de 65 anos.',
    'Otimização: parar de fumar pelo menos 4–8 semanas antes; álcool, 4 semanas; anemia, tratar a causa e evitar transfusão por reflexo.',
  ], pegadinha: 'Com 2 fatores no índice de Lee não se pede teste cardíaco direto: primeiro se avalia a capacidade funcional.' },

  'CIR-03': { tema: 'Antibioticoprofilaxia cirúrgica', pontos: [
    'Cinco perguntas: indicação, agente (cobrir a microbiota do sítio), dose, momento/repique e duração.',
    'Limpa: sem entrar em trato colonizado. Potencialmente contaminada: entrada controlada em trato GI, biliar, respiratório, genital ou urinário. Contaminada: trauma recente (até 4–6 h), quebra de técnica, extravasamento GI grosseiro. Infectada: pus, e o antibiótico passa a ser tratamento.',
    'Cirurgia limpa em geral dispensa profilaxia, exceto com prótese, cirurgia cardíaca, vascular ou neurocirurgia.',
    'Cefazolina 2 g EV (3 g acima de 120 kg), até 60 minutos antes da incisão, cobrindo a pele (Staphylococcus aureus).',
    'Repique quando a cirurgia passa de cerca de 2 meias-vidas (cefazolina: 1 g a cada ~4 h) ou se houver sangramento importante.',
    'Suspender em até 24 h: dose única resolve a maioria dos casos.',
    'Colorretal: ceftriaxona + metronidazol ou cefoxitina isolada. Alergia grave a betalactâmico: clindamicina ou vancomicina.',
  ], pegadinha: 'Cirurgia limpa com tela é exceção: a profilaxia é indicada pela prótese, não por contaminação.' },

  'CIR-04': { tema: 'Infecção de sítio cirúrgico superficial', pontos: [
    'ISC incisional superficial: pus na incisão, dentro de 30 dias. O diagnóstico pode ser por cultura positiva ou pela opinião do cirurgião.',
    'Profunda: fáscia e músculo (pus profundo, deiscência com febre ou dor). Órgão/cavidade: além da parede (ex.: pus por dreno). Com prótese, o prazo vai até 1 ano.',
    'Tratamento da superficial: drenar (retirar pontos, abrir, cuidados locais). Antibiótico sistêmico só se houver repercussão sistêmica ou imunossupressão.',
    'A ferida aberta fecha por segunda intenção: granulação, contração e epitelização a partir das bordas.',
    'Fatores do paciente: diabetes/hiperglicemia, obesidade, tabagismo, imunossupressão, infecção a distância, ASA ≥ 3.',
    'Glicemia perioperatória de 140–180 mg/dL: fora da faixa, maior risco de ISC, mesmo em não diabéticos.',
  ], pegadinha: 'Antibiótico sem drenar não resolve a ISC superficial: o tratamento é a drenagem.' },

  'CIR-05': { tema: 'REMIT e oligúria pós-operatória', pontos: [
    'Três vias disparam a REMIT: inflamatória, receptores de pressão (hipovolemia) e dor. O objetivo é garantir glicose, água e oxigênio aos tecidos.',
    'ADH aumentado retém água; aldosterona retém sódio e água e libera potássio e hidrogênio. Resultado: oligúria sem hipovolemia real.',
    'Fase ebb (2–3 dias): catecolaminas, cortisol e glucagon sobem e a insulina cai (hiperglicemia de estresse). Fase flow: hiperdinâmica, hipermetabólica, com insulina aumentada.',
    'T3, T4 e testosterona caem. Mobilização das reservas: glicogenólise (12–24 h), depois lipólise e, por último, proteólise.',
    'Diante de oligúria: checar sonda obstruída, retenção por opioide e o balanço intraoperatório antes de dar volume. Hiperidratar causa edema de ferida, íleo e deiscência.',
    'Atenuar: analgesia (a epidural bloqueia a via da dor), laparoscopia (menor resposta imune), SG 5% (~2.000 mL) no jejum para reduzir lipólise e proteólise.',
  ], pegadinha: 'Oligúria no 1º pós-operatório nem sempre é falta de volume: pode ser a REMIT segurando água e sódio.' },

  'CIR-06': { tema: 'Febre pós-operatória', pontos: [
    '24–72 h: atelectasia e a própria resposta ao trauma.',
    'Após 72 h: ferida, infecção urinária, pneumonia, TVP/TEP.',
    '5–7 dias: abscessos, deiscências e fístulas.',
    'Ferida superficial limpa não exclui infecção profunda ou de órgão/cavidade.',
    'Febre + distensão e dor abdominal após anastomose: pensar em foco intra-abdominal; a tomografia de abdome e pelve é o exame mais adequado.',
    'Com infecção estabelecida, o antimicrobiano é tratamento. Cólon: Gram-negativos e anaeróbios (E. coli, Bacteroides fragilis).',
    'Idoso com confusão + febre + achado pulmonar: delirium secundário à infecção, não causa neurológica primária.',
  ], pegadinha: 'A profilaxia não impede toda ISC: o potencial de contaminação estima o risco durante a cirurgia, e a ISC é um evento do pós-operatório.' },

  'CIR-07': { tema: 'Checklist de cirurgia segura (OMS)', pontos: [
    'Sign in, antes da indução anestésica: identidade, sítio/lateralidade marcados, procedimento, consentimento e alergias.',
    'Time out, antes da incisão: confirmação verbal. Cirurgião: passos críticos, duração e perda sanguínea. Anestesista: preocupações com o paciente. Enfermagem: esterilização e equipamentos. Conferir o horário do antibiótico.',
    'Sign out, antes de sair da sala: contagem de compressas e instrumentais e recomendações pós-operatórias.',
    'Contagem divergente: revisão sistemática e, se não localizar, imagem intraoperatória antes de fechar.',
    'Marcação do sítio com o paciente acordado, participando da confirmação.',
    'Impacto: complicações de ~11% para 7% e mortalidade de 1,5% para 0,8%. Campanha "Cirurgia Segura Salva Vidas" (OMS, 2008).',
  ], pegadinha: 'O sign in é antes da indução anestésica; antes da incisão é o time out.' },

  'CIR-08': { tema: 'Melanoma: ABCDE, Breslow e linfonodo sentinela', pontos: [
    'ABCDE: Assimetria, Bordas irregulares, Cor variada, Diâmetro acima de 6 mm, Evolução.',
    'Biópsia excisional, com margem de 1–3 mm e na direção da drenagem linfática: dá o diagnóstico e o Breslow.',
    'Margem de ampliação: Breslow até 1 mm, 1 cm; de 1,01 a 2 mm, 1–2 cm.',
    'Linfonodo sentinela: Breslow acima de 1 mm, ulceração, alto índice mitótico ou invasão linfovascular.',
    'Subtipos: extensivo superficial (~70%, o mais comum); nodular (2º, crescimento vertical rápido); lentigo maligno (idoso, dano solar); acral lentiginoso (palmas, plantas e unhas, sinal de Hutchinson, mais em pele escura).',
    'Dermatoscópio: rede pigmentar, estrias e glóbulos ajudam a diferenciar lesão benigna de maligna. Prevenção: proteção solar.',
  ], pegadinha: 'O melanoma nodular cresce rápido e nem sempre segue o ABCDE.' },

  'CIR-09': { tema: 'Carcinoma basocelular, espinocelular e lesões pré-malignas', pontos: [
    'CBC: cerca de 80% dos tumores cutâneos em pele clara; perolado, com telangiectasias, crescimento lento, 2/3 superiores da face; metástase rara. Margem de baixo risco: 3–4 mm. Avançado: vismodegibe.',
    'CEC: queratinócitos da camada espinhosa; sol e tabaco; lábio inferior; ulcera, sangra e não cicatriza; metástase em 0,5–6%. Margem: 4–6 mm ou mais. Metastático: imunoterapia ou quimioterapia.',
    'Ceratose actínica: pele clara e sol, placas ásperas com escamas aderentes; pode progredir para CEC invasivo.',
    'Doença de Bowen: CEC intraepitelial (in situ), placa eritematosa bem delimitada.',
    'Corno cutâneo: a lesão em si não é diagnóstico; o que importa é a base.',
    'Prevenção: proteção à exposição solar (protetor, roupas, evitar sol excessivo).',
  ], pegadinha: 'O CBC é o mais comum, mas o CEC tem mais chance de metástase e por isso pede margem maior.' },

  'CIR-10': { tema: 'Queimadura na criança', pontos: [
    'Regra dos nove adaptada: cabeça ≈ 18% (maior que no adulto) e cada membro inferior ≈ 14% (menor que no adulto).',
    '2º grau superficial: bolhas, leito rosado e úmido, muito doloroso, branqueia à digitopressão; cicatriza sozinho. O 2º grau profundo tende a precisar de enxerto.',
    'Grande queimado na criança: 2º grau em mais de 10% da SCQ.',
    'Até 14 anos ou menos de 30 kg: qualquer queimadura se beneficia de avaliação especializada. Regiões nobres transferem sempre.',
    'Parkland como no adulto: 4 mL × kg × %SCQ, metade nas primeiras 8 h contadas da queimadura.',
    'Pré-hospitalar, sem peso e SCQ calculados: até 5 anos 125 mL/h; 6–13 anos 250 mL/h; 14 anos ou mais, 500 mL/h.',
    'Água corrente em temperatura ambiente; gelo aprofunda a lesão e causa hipotermia. Antibiótico tópico, não sistêmico.',
  ], pegadinha: 'Usar os valores do adulto na criança: na criança a cabeça vale mais e o membro inferior vale menos.' },

  'CIR-11': { tema: 'Medicações no perioperatório', pontos: [
    'Manter, inclusive no dia da cirurgia: betabloqueador, bloqueador de canal de cálcio e estatina.',
    'IECA e BRA: suspensão frequente no dia da cirurgia.',
    'SGLT2: suspender 3–4 dias antes (risco de cetoacidose euglicêmica).',
    'Insulina basal: metade da dose na manhã da cirurgia; meta glicêmica de 140–180 mg/dL.',
    'Agonistas de GLP-1: dieta líquida 24 h antes, jejum habitual e considerar POCUS gástrico (esvaziamento retardado, risco de broncoaspiração).',
    'Clopidogrel e varfarina: 5 dias (varfarina com RNI). HNF IV: ~6 h. HBPM: 24 h. DOAC: 24 h (48 h se doença renal crônica).',
    'Ginkgo biloba: 36 h. Erva-de-são-joão: 5 dias. Alho e ginseng: 7 dias. Anticoncepcional oral: 4 semanas.',
  ], pegadinha: 'Betabloqueador não se suspende no perioperatório.' },

  'CIR-12': { tema: 'Jejum e protocolo ERAS/ACERTO', pontos: [
    'Jejum: líquidos claros com carboidrato (maltodextrina) até 2 h antes da indução; leite materno, 4 h; leite não humano ou refeição leve, 6 h; frituras e gordura, 8 h ou mais.',
    'Intraoperatório: fluido restritivo, guiado por meta (a sobrecarga volêmica causa íleo e deiscência).',
    'Normotermia ≥ 36 °C: a maior queda de temperatura ocorre na primeira hora. Tríade letal: hipotermia, acidose e coagulopatia.',
    'Glicemia de 140–180 mg/dL e analgesia multimodal (opioide como base causa íleo, náusea e sedação).',
    'Pós-operatório: dieta em menos de 24 h, escalonada conforme a tolerância, sem esperar flatos ou ruídos hidroaéreos; deambulação no dia 0.',
    'Sonda nasogástrica e dreno não são de rotina após laparotomia não complicada: indicação individualizada.',
  ], pegadinha: 'Não é preciso esperar eliminar gases para começar a dieta.' },

  'CIR-13': { tema: 'Prevenção e classificação da ISC', pontos: [
    'O risco nasce do encontro entre paciente vulnerável e procedimento favorável à infecção.',
    'Paciente: diabetes/hiperglicemia, obesidade, tabagismo, imunossupressão, infecção a distância, ASA ≥ 3. Procedimento: contaminação do campo, duração, quebra de técnica, trauma/necrose, hematoma/espaço morto, hipoperfusão/hipotermia.',
    'Antes: banho com clorexidina degermante, tratar infecção remota, controlar glicemia, parar de fumar; tricotomia só se necessária, perto do procedimento e com aparador elétrico.',
    'Durante: antissepsia com clorexidina alcoólica (preferível ao povidine), antibioticoprofilaxia no momento certo, normotermia e glicemia controlada.',
    'Depois: curativo, higiene das mãos (equipe, paciente, cuidadores), vigilância e orientação de sinais de alerta.',
    'Classificação: superficial, profunda (fáscia e músculo) e órgão/cavidade; 30 dias, ou até 1 ano com prótese.',
    'Contaminação endógena (microbiota do paciente) × exógena (mãos da equipe, instrumental, ambiente).',
  ], pegadinha: 'Tricotomia com lâmina na véspera aumenta a ISC, por causa das microlesões.' },

  'CIR-14': { tema: 'Cicatrização de feridas', pontos: [
    'Fase inflamatória: vasoconstrição e trombo plaquetário; depois histamina, serotonina e bradicinina (sinais flogísticos). Neutrófilo com pico no dia 2 (substituível); macrófago essencial; linfócito no dia 7.',
    'Fase proliferativa: fibroplasia em ~48 h, estimulada pelo TGF-beta; angiogênese pelo TNF-alfa; epitelização, que também é barreira.',
    'Maturação (a partir de ~1 semana): miofibroblastos (contração centrípeta) e colagenase regulando o colágeno.',
    '1ª intenção: sutura imediata, sem perda de tecido, infecção ou edema. 2ª: sem sutura, por granulação (grande perda ou contaminação). 3ª: sutura em 3–7 dias (contaminada, perda de tecido ou tensão).',
    'Desbridar: o tecido necrótico favorece bactérias e impede a chegada de oxigênio e células inflamatórias.',
    'Fatores da ferida (oxigenação, infecção) e do paciente: idade, diabetes, corticoide nos 3 primeiros dias, albumina < 2 g/dL, radioterapia prévia, obesidade, álcool, tabagismo.',
    'Contaminação (bactérias sem replicação) × colonização (replicação sem dano) × infecção (replicação com dano tecidual).',
  ], pegadinha: 'A cicatriz hipertrófica respeita os limites da ferida e pode regredir; o queloide ultrapassa as bordas, surge após 3 meses e não regride.' },

  'CIR-15': { tema: 'Queimadura elétrica', pontos: [
    'As lesões de entrada e saída não mostram o trajeto da corrente; o dano profundo (nervos, vasos, músculos) pode ser muito maior que o da pele.',
    'Urina escura: mioglobinúria por rabdomiólise. Ringer lactato com diurese-alvo mais alta, ~100–200 mL/h no adulto, até clarear (manitol e bicarbonato podem ser considerados).',
    'Dor desproporcional à extensão passiva: síndrome compartimental, com indicação de fasciotomia.',
    'Escarotomia (incisão na escara circunferencial até o subcutâneo) é diferente de fasciotomia (abre a fáscia).',
    'Alta voltagem (≥ 1.000 V) e raio: transferência automática. Passagem de corrente pelo corpo transfere mesmo em baixa voltagem. Baixa voltagem: avaliar seguimento por sintomas tardios e visuais.',
  ], pegadinha: 'Queimadura elétrica com urina escura não usa a meta de diurese padrão de 0,5 mL/kg/h.' },

  'CIR-16': { tema: 'Queimadura química', pontos: [
    'Retirar a roupa contaminada; se o agente for pó, escovar a seco antes de molhar.',
    'Irrigar com água corrente abundante (15–20 L) até pH 7–7,5.',
    'Nunca neutralizar: a reação é exotérmica e aprofunda a lesão.',
    'Álcali: necrose de liquefação, que penetra e continua avançando (mais grave). Ácido: necrose de coagulação, que tende a se autolimitar.',
    'Toda queimadura química é transferida para centro especializado, qualquer que seja a extensão.',
    'Zonas de Jackson: necrose (centro, irreversível), estase (viável, em risco) e hiperemia (periferia, recupera sozinha).',
  ], pegadinha: 'Neutralizar com vinagre parece lógico, mas piora a queimadura.' },

  'CIR-17': { tema: 'Queimado em ambiente fechado: via aérea, CO e escarotomia', pontos: [
    'X-ABCDE: a via aérea vem primeiro.',
    'Via aérea definitiva precoce: estridor, rouquidão, sobrancelhas chamuscadas e escarro carbonáceo, sobretudo em ambiente fechado.',
    'Intoxicação por CO: o oxímetro lê carboxi-hemoglobina como oxi-hemoglobina; SpO₂ normal não afasta.',
    'Escara circunferencial de espessura total restringindo a ventilação: escarotomia torácica de emergência, até o subcutâneo.',
    'Zonas de Jackson: a ressuscitação inadequada converte a zona de estase em necrose, aprofundando a queimadura.',
    'Fases no queimado: ebb (baixo fluxo, hipotermia, 2–3 dias) e flow (hiperdinâmica, hipermetabólica).',
  ], pegadinha: 'Saturação de 99% não afasta intoxicação por monóxido de carbono.' },

  'CIR-18': { tema: 'Profilaxia de tromboembolismo venoso', pontos: [
    'Caprini 3–4 (moderado): profilaxia farmacológica OU mecânica. Caprini ≥ 5 (alto): as duas associadas.',
    'Esquemas: enoxaparina 40 mg SC 1x/dia ou heparina não fracionada 5.000 UI SC a cada 8–12 h.',
    'Cirurgia oncológica abdominal ou pélvica: profilaxia estendida por 28 dias.',
    'Suspensão de anticoagulação plena antes da cirurgia: HNF IV ~6 h; HBPM 24 h; DOAC 24 h (48 h se DRC); varfarina 5 dias.',
    'Febre após 72 h de pós-operatório: lembrar de TVP/TEP entre as causas.',
  ], pegadinha: 'Na cirurgia oncológica abdominal, a profilaxia não termina na alta.' },

  'CIR-19': { tema: 'Complicações do pós-operatório imediato', pontos: [
    'Globo vesical sintomático após raquianestesia e opioide: retenção urinária. Cateterizar para descomprimir e reavaliar a micção.',
    'Distensão difusa de delgado e cólon, sem níveis hidroaéreos, em paciente estável: íleo funcional. Deambulação precoce e dieta conforme aceitação.',
    'As catecolaminas da REMIT causam atonia intestinal; opioide como base da analgesia causa íleo, náusea e sedação: preferir analgesia multimodal.',
    'Náuseas e vômitos persistentes: risco de broncoaspiração, desidratação e distúrbio hidroeletrolítico; controlar com antieméticos.',
    'Dor e febre leves: dipirona ou paracetamol; AINE com cautela (cicatrização, rim, pressão).',
  ], pegadinha: 'Distensão difusa sem níveis hidroaéreos não é obstrução mecânica e não indica reoperação.' },

  'CIR-20': { tema: 'Consentimento informado e autonomia', pontos: [
    'Consentimento exige comunicação, compreensão verificada, decisão compartilhada e registro.',
    'Explicar indicação, riscos e alternativas (inclusive as não cirúrgicas) em linguagem acessível.',
    'Assinatura de última hora, sem conversa, compromete a validade.',
    'Autonomia como variável de segurança: o paciente participa, confirma informações e consente de forma esclarecida; não é espectador.',
    'Marcação do sítio com o paciente acordado, antes da indução.',
    'O sign in confere o termo de consentimento.',
  ], pegadinha: 'Termo assinado não é sinônimo de consentimento informado.' },

  'CIR-21': { tema: 'Segurança do paciente e evento adverso', pontos: [
    'Nem todo evento adverso é erro médico: a maioria é falha de sistema, com barreiras falhando alinhadas (modelo do queijo suíço).',
    'Imperícia: falta de conhecimento técnico. Imprudência: agir sem cautela. Negligência: omissão.',
    'Variáveis de segurança: metas mensuráveis, transparência sem cultura de punição, comunicação efetiva, autonomia do paciente, profissionalismo ("fazer certo quando ninguém está olhando") e educação continuada.',
    'O time out é uma barreira de confirmação verbal antes da incisão.',
    'Checklist da OMS: complicações de ~11% para 7%; mortalidade de 1,5% para 0,8%.',
  ], pegadinha: 'Imprudência é fazer o que não devia; negligência é deixar de fazer o que devia.' },

  'CIR-22': { tema: 'Tumores cutâneos benignos e corno cutâneo', pontos: [
    'Lipoma: nódulo subcutâneo móvel, amolecido e indolor.',
    'Cisto epidermoide (sebáceo): orifício central, conteúdo caseoso de cheiro rançoso; origem em folículo pilossebáceo roto.',
    'Acrocórdons (fibromas moles): pedunculados e macios, associados a obesidade e síndrome metabólica.',
    'Ceratose seborreica: pápula acastanhada, graxenta, rugosa, de crescimento lento no idoso (benigna).',
    'Dermatofibroma: nódulo intradérmico firme (microtrauma, picada). Granuloma piogênico: tumor vascular friável. Hemangioma: hiperplasia endotelial, tratado com propranolol. Neurofibroma: bainha de Schwann. Calosidade: hiperceratose por atrito.',
    'Corno cutâneo: a ponta não é diagnóstica; a base pode ser benigna, pré-maligna ou maligna e deve ser biopsiada.',
  ], pegadinha: 'O granuloma "piogênico" não tem pus nem infecção.' },

  // ===================================================== SAÚDE MENTAL
  'MEN-01': { tema: 'Delirium', pontos: [
    'CAM: início agudo e curso flutuante + desatenção + (pensamento desorganizado OU alteração do nível de consciência).',
    'Delirium × demência: instalação rápida (horas a dias) × lenta; atenção flutuante × geralmente mantida. Podem coexistir, e o delirium deve ser priorizado.',
    'Causas: medicamentos (anticolinérgicos, sedativos), distúrbio hidroeletrolítico, infecção, retenção urinária, constipação. Precipitantes na internação: contenção física, cateteres, privação de sono.',
    'Primeira linha não farmacológica: reorientação, correção de déficits sensoriais, normalizar o sono, mobilização, hidratação, nutrição e analgesia, envolvimento da família.',
    'Haloperidol em dose baixa só para agitação ou psicose que comprometa a segurança; evitar benzodiazepínico.',
    'Teste de atenção à beira do leito: dígitos na ordem inversa é o mais sensível.',
    'Recuperação total na maioria dos casos, em geral 3–7 dias após corrigir a causa.',
  ], pegadinha: 'Benzodiazepínico piora o delirium, exceto quando a causa é abstinência de álcool ou de benzodiazepínico.' },

  'MEN-02': { tema: 'Esquizofrenia', pontos: [
    'Critério A: 2 ou mais sintomas (delírios, alucinações, discurso desorganizado, comportamento desorganizado ou catatônico, sintomas negativos), sendo ao menos um dos três primeiros.',
    'Tempo: menos de 1 mês, psicótico breve; 1–6 meses, esquizofreniforme; mais de 6 meses com prejuízo, esquizofrenia; com episódio de humor concomitante, esquizoafetivo.',
    'Excluir organicidade: idade atípica, flutuação da consciência, deterioração cognitiva rápida, sinais neurológicos focais.',
    'Negativos: avolição (maior preditor de prejuízo), anedonia, alogia, associabilidade, embotamento; respondem menos aos antipsicóticos que os positivos.',
    'Antipsicótico (antagonismo D2 mesolímbico); manter pelo menos 1 ano após remissão do 1º episódio. A falta de adesão é a principal causa de recaída.',
    'Resistência: falha de 2 ou mais antipsicóticos (≥ 6 semanas cada, dose adequada, boa adesão) → clozapina.',
    'Maconha na adolescência é fator de risco. A doença reduz a expectativa de vida em 10–20 anos, principalmente por doença cardiovascular.',
  ], pegadinha: 'Esquizofrenia não é "dupla personalidade".' },

  'MEN-03': { tema: 'Transtorno da personalidade borderline', pontos: [
    '5 ou mais de 9 critérios: esforços para evitar abandono, relações instáveis (idealização × desvalorização), identidade instável, impulsividade em 2 ou mais áreas, autolesão ou ameaças suicidas, instabilidade afetiva reativa, vazio crônico, raiva intensa, ideação paranoide ou dissociação transitórias.',
    'Borderline × bipolar: no borderline a instabilidade é reativa e dura horas; no bipolar, os episódios duram dias a semanas e independem de gatilho.',
    'Splitting: o outro é "totalmente bom" ou "totalmente mau", inclusive entre membros da equipe (clivagem institucional).',
    'Contratransferência: sentir-se "o único que entende" sinaliza idealização em curso.',
    'Psicoterapia é o pilar (terapia comportamental dialética, mentalização); medicação só para sintomas-alvo e comorbidades.',
    'Manejo: consultas regulares e previsíveis, rotinas claras, limites firmes e não punitivos, equipe alinhada, não ser "salvador exclusivo". Pesquisar cicatrizes de autolesão.',
  ], pegadinha: 'Humor que muda várias vezes no dia, após conflitos, sugere borderline, e não transtorno bipolar.' },

  'MEN-04': { tema: 'Síndrome de abstinência alcoólica', pontos: [
    '2 ou mais sinais após parar uso intenso: hiperatividade autonômica, tremor, insônia, náusea, alucinações transitórias, agitação, ansiedade, convulsões.',
    '70–90% têm SAA leve/moderada (início em 24–36 h); cerca de 5%, grave; convulsões em menos de 3%; mortalidade da grave em torno de 1%.',
    'Nível I (leve/moderada, orientado): ambulatorial, diazepam 20–40 mg/dia ou clordiazepóxido 100–200 mg/dia + tiamina 300 mg IM/dia.',
    'Nível II ou CIWA-Ar ≥ 20: internação, benzodiazepínico em doses maiores e horárias.',
    'Tiamina sempre antes da glicose.',
    'Manutenção: naltrexona (após retirar o benzodiazepínico), dissulfiram (supervisionado, com TCLE; contraindicado em epilepsia, hepatopatia e cardiopatia grave), topiramato, baclofeno. O acamprosato não está disponível no Brasil.',
  ], pegadinha: 'Glicose antes da tiamina pode precipitar a encefalopatia de Wernicke.' },

  'MEN-05': { tema: 'Cocaína e crack', pontos: [
    'Bloqueia a recaptação de dopamina, serotonina e noradrenalina. A via fumada (crack) dá dependência mais rápida.',
    'Intoxicação: síndrome adrenérgica, com taquicardia, hipertensão, midríase, sudorese, hipertermia e agitação.',
    'Dor torácica: ECG e marcadores de lesão miocárdica seriados; risco de infarto mesmo em jovens.',
    'Benzodiazepínico é a primeira escolha para agitação e sintomas adrenérgicos; betabloqueador é contraindicado (alfa sem oposição).',
    'Delirium por cocaína (agitação extrema, hipertermia): manejo em UTI.',
    '"Crash" da abstinência: disforia, anedonia, hipersonolência e fissura; nenhum remédio aprovado para a manutenção da abstinência.',
    'Dependência: TCC, entrevista motivacional, Narcóticos Anônimos.',
  ], pegadinha: 'Propranolol na dor torácica por cocaína é contraindicado.' },

  'MEN-06': { tema: 'Tabagismo', pontos: [
    'Fagerström (0–10): 0–2 muito baixo; 3–4 baixo; 5 médio; 6–7 elevado; 8–10 muito elevado. Escore ≥ 5 indica farmacoterapia.',
    'Reposição de nicotina (adesivo, goma, pastilha) duplica a cessação. Adesivo: 21 mg (semanas 1–4), 14 mg (5–8), 7 mg (9–12); parar de fumar ao iniciar.',
    'Bupropiona: 150 mg/dia por 3 dias, 300 mg a partir do 4º dia, parar de fumar no 8º dia. Contraindicada em convulsão ou TCE prévios, transtornos alimentares e gestantes.',
    'TRN contraindicada em infarto há menos de 15 dias e gestantes; a goma também em úlcera péptica. Vareniclina também é primeira linha (não disponível no SUS).',
    'Abstinência (4 ou mais em 24 h): irritabilidade, ansiedade, dificuldade de concentração, aumento do apetite, inquietação, humor deprimido, insônia.',
    'Associar terapia comportamental aumenta o sucesso. Cerca de 90% dos pacientes com esquizofrenia fumam.',
  ], pegadinha: 'Bupropiona em quem teve convulsão ou TCE é contraindicada.' },

  'MEN-07': { tema: 'TDAH na criança', pontos: [
    '6 ou mais sintomas num mesmo domínio (desatenção ou hiperatividade/impulsividade).',
    'Início antes dos 12 anos, em 2 ou mais contextos, com prejuízo funcional e sem melhor explicação.',
    'Diferenciais: comportamento esperado para a idade, privação de sono, ansiedade, TEA.',
    'Comorbidades em até 80% das amostras clínicas: disruptivos (TOD, conduta), aprendizagem, tiques, ansiedade e depressão.',
    'Herdabilidade de 70–80%; prevalência de cerca de 5%; meninos 2,5:1 na comunidade (subdiagnóstico em meninas).',
    'Estimulantes (metilfenidato, lisdexanfetamina) são primeira escolha: monitorar peso e altura e avaliar história cardiovascular. Tiques e epilepsia controlada não são mais contraindicação formal.',
    'Estudo MTA: a medicação supera o tratamento comportamental isolado; a combinação beneficia quem tem comorbidades.',
  ], pegadinha: 'Os sintomas dos dois domínios não se somam para atingir o limiar.' },

  'MEN-08': { tema: 'Transtorno do espectro autista', pontos: [
    'Critério A: os 3 subdomínios (reciprocidade socioemocional, comunicação não verbal, relacionamentos). Critério B: 2 de 4 (estereotipias, mesmice e rotinas, interesses restritos, alterações sensoriais).',
    'Sinais de alerta (12–24 meses): não responder ao nome, não apontar, sem sorriso social, pouco contato visual, alinhar objetos, regressão de habilidades.',
    'M-CHAT é triagem; ADOS-2 é a observação estruturada padrão-ouro; ADI-R é a entrevista com os pais.',
    'Para todos: triagem auditiva e investigação genética (X frágil + CGH array).',
    'Diagnóstico e intervenção precoces (2–3 anos) são o fator prognóstico mais consistente: individualizada, multidisciplinar, com família e escola; ABA, ESDM, PECS, pais como mediadores.',
    'Herdabilidade de ~74%; 2–3 meninos para cada menina; irmãos têm risco aumentado.',
    'Remédio só para sintomas-alvo: risperidona e aripiprazol na irritabilidade.',
  ], pegadinha: 'M-CHAT positivo não fecha o diagnóstico: é só triagem.' },

  'MEN-09': { tema: 'Anorexia nervosa', pontos: [
    'Restrição com baixo peso, medo intenso de engordar e perturbação da imagem corporal. Amenorreia não é mais critério. Costuma ser egossintônica.',
    'Gravidade pelo IMC: leve ≥ 17; moderada 16–16,99; grave 15–15,99; extrema < 15.',
    'Internação: FC < 40 ou > 110, hipotensão ortostática (queda de PA > 20 mmHg ou aumento de FC ≥ 20), hipotermia, distúrbios metabólicos graves, perda de peso rápida, risco suicida, ambiente familiar desfavorável.',
    'Realimentação: começar com ~1.000 kcal/dia e aumentar 500–750 kcal por semana até ~3.000; risco de síndrome de realimentação (hipofosfatemia).',
    'Complicações: bradicardia, QT longo, arritmias, osteopenia/osteoporose (~50%).',
    'Maior mortalidade entre os transtornos psiquiátricos; olanzapina pode ajudar como adjuvante.',
  ], pegadinha: 'Na anorexia a fome está preservada: a paciente restringe apesar dela.' },

  'MEN-10': { tema: 'Insônia', pontos: [
    'Dificuldade de iniciar ou manter o sono, ou despertar precoce, 3 ou mais noites por semana, por 3 meses ou mais, com prejuízo e oportunidade adequada para dormir.',
    'O diagnóstico é clínico: polissonografia não é rotina.',
    'TCC-i é a primeira escolha: restrição de sono, controle de estímulos, relaxamento, reestruturação cognitiva e psicoeducação.',
    'Modelo 3P de Spielman: predisponentes, precipitantes e perpetuadores (como a permanência excessiva no leito).',
    'Hipnóticos: no máximo 2–4 semanas de uso contínuo; benzodiazepínicos e hipnóticos pioram a apneia do sono.',
    'Processo S (adenosina acumulada na vigília) e processo C (núcleo supraquiasmático, sincronizado pela luz, que inibe a melatonina).',
  ], pegadinha: 'Insônia não se confirma com polissonografia: o diagnóstico é clínico.' },

  'MEN-11': { tema: 'Exame do estado mental e risco de suicídio', pontos: [
    'Anamnese é o que o paciente relata; exame psíquico é o que o examinador observa durante a entrevista.',
    'Domínios: aparência, comportamento e psicomotricidade, fala, humor e afeto, pensamento (forma e conteúdo), sensopercepção, cognição (orientação, memória, atenção), insight e julgamento.',
    'Humor é subjetivo, registrado com as palavras do paciente; afeto é a expressão observada e sua congruência com o humor.',
    'Forma do pensamento: curso e organização. Conteúdo: delírios, ideação suicida, obsessões.',
    'A atenção pode estar alterada mesmo com a orientação preservada.',
    'Suicídio: perguntar diretamente sobre ideação, planejamento, acesso a meios e tentativas. Perguntar não induz; o comportamento passado é o maior preditor. Nos antecedentes familiares, investigar suicídio e dependência química.',
    'Técnicas de vínculo: autenticidade, empatia e conhecimento.',
  ], pegadinha: 'Humor é o que o paciente diz sentir; afeto é o que o examinador observa.' },

  'MEN-12': { tema: 'Delirium tremens, Wernicke e Korsakoff', pontos: [
    'Delirium tremens: 48–96 h após a última dose; desorientação, alucinações visuais e táteis, agitação, tremor intenso, taquicardia, hipertensão, hipertermia, sudorese, piora ao entardecer.',
    'Tratamento: internação, benzodiazepínico em doses maiores e horárias + tiamina 300 mg IM/dia; haloperidol só como adjuvante, se sintomas psicóticos proeminentes.',
    'Encefalopatia de Wernicke: aguda, por falta de tiamina; confusão + oftalmoparesia/nistagmo + ataxia; emergência.',
    'Síndrome de Korsakoff: sequela crônica de Wernicke não tratado; amnésia anterógrada e confabulação.',
    'Em etilista com alteração da consciência: tiamina antes (ou junto) da glicose.',
    'A carência de B1 no etilismo também causa polineuropatia periférica.',
  ], pegadinha: 'Haloperidol isolado não trata o delirium tremens.' },

  'MEN-13': { tema: 'Opioides: overdose, abstinência e dependência', pontos: [
    'Overdose: coma + miose puntiforme + depressão respiratória (a causa da morte). Procurar marcas de agulha.',
    'Naloxona IV lenta (~0,8 mg/70 kg), repetindo se necessário; ação curta, então monitorizar; pode precipitar abstinência aguda.',
    'Receptor mu: analgesia, depressão respiratória, constipação, dependência. Tolerância pode chegar a 100 vezes a dose.',
    'Após um período de abstinência, a tolerância cai: a dose antiga pode ser fatal.',
    'Abstinência: morfina/heroína começa em 6–8 h, pico em 2–3 dias; metadona começa em 1–3 dias e dura 10–14 dias. É exuberante, mas não fatal.',
    'Tratamento: metadona (20–80 mg/dia, substituição), buprenorfina (agonista parcial), clonidina (sintomas de abstinência), naltrexona (após desintoxicação, prevenir recaída).',
  ], pegadinha: 'Flumazenil é antídoto de benzodiazepínico, não de opioide.' },

  'MEN-14': { tema: 'Uso de álcool: rastreio, diagnóstico e motivação', pontos: [
    'Uso problemático: acima de 21 unidades por semana (homens) ou 14 (mulheres); 1 unidade = 10 g de álcool. Padrão de risco: 5 ou mais doses (homens) ou 4 ou mais (mulheres) numa ocasião.',
    'CAGE: 2 ou mais respostas positivas indicam consumo de risco. AUDIT ≥ 8: uso excessivo.',
    'DSM-5-TR: 11 critérios em 4 domínios (controle prejudicado, prejuízo social, uso de risco, farmacológicos). 2–3 leve, 4–5 moderado, 6 ou mais grave, nos últimos 12 meses.',
    'O DSM-5 unificou o uso nocivo e a dependência da CID-10 em "transtorno por uso de substância".',
    'Estágios de Prochaska e DiClemente: pré-contemplação, contemplação, preparação, ação, manutenção e recaída.',
    'Entrevista motivacional: conversa colaborativa, centrada no paciente, trabalhando a ambivalência. A dependência é doença crônica, sem julgamento moral.',
  ], pegadinha: 'Beber "só no fim de semana" não exclui transtorno por uso de álcool.' },

  'MEN-15': { tema: 'Benzodiazepínicos: dependência e retirada', pontos: [
    'Agem no receptor GABA-A, como o álcool: tolerância cruzada e abstinência semelhante, em geral mais branda.',
    'Intoxicação: sedação, fala pastosa, incoordenação, ataxia. Flumazenil só em casos graves, com cautela (risco de convulsões).',
    'Abstinência: meia-vida curta (alprazolam, zolpidem) já em 24 h; meia-vida longa (diazepam, clordiazepóxido) em 5–10 dias.',
    'Nunca suspender abruptamente após uso prolongado: risco de abstinência grave, inclusive convulsões.',
    'Retirada: substituir por um de meia-vida longa (ex.: diazepam) e reduzir gradualmente.',
    'Meias-vidas: midazolam 1–3 h; alprazolam 6–20 h; clonazepam 19–42 h; diazepam 14–61 h.',
  ], pegadinha: 'O zolpidem não é benzodiazepínico, mas age no mesmo receptor e tem abstinência parecida.' },

  'MEN-16': { tema: 'Maconha', pontos: [
    'Terceira substância mais consumida no mundo. O THC responde pela dependência e pelos efeitos deletérios; o CBD parece ter efeito protetor.',
    'Esquizofrenia: risco 4 vezes maior; piora sintomas positivos e negativos; mais internações, pior adesão, mais risco de suicídio.',
    'Variedades ricas em THC e pobres em CBD: mais psicose e prejuízo cognitivo.',
    'Abstinência (3 ou mais): irritabilidade, ansiedade, insônia, menos apetite, inquietação, humor deprimido e ao menos um sintoma físico.',
    'Sem medicamento aprovado no Brasil: tratamento psicossocial (TCC, manejo de contingências).',
    'Triagem na emergência: uma única pergunta sobre a frequência de uso no último ano.',
  ], pegadinha: '"Natural" não quer dizer seguro: a maconha piora o curso da esquizofrenia.' },

  'MEN-17': { tema: 'Bulimia nervosa e compulsão alimentar', pontos: [
    'Bulimia: compulsão + comportamento compensatório inadequado recorrente + sobrevalorização do peso, com peso geralmente normal.',
    'Transtorno de compulsão alimentar (TCA): compulsão sem compensação regular; 3 ou mais de 5 indicadores; gravidade por episódios por semana (1–3, 4–7, 8–13, 14 ou mais); lisdexanfetamina é o único remédio aprovado.',
    'Sinais: sinal de Russell (calos no dorso da mão), hipertrofia de parótidas, amilase elevada, erosão dentária na face lingual.',
    'Vômitos: hipocalemia e alcalose metabólica. Laxantes: tendência à acidose.',
    'Bulimia: TCC-TA é a primeira escolha; fluoxetina 60 mg/dia é o único ISRS aprovado. Bupropiona é contraindicada.',
    'No diabetes tipo 1, omitir insulina como compensação ("diabulimia").',
  ], pegadinha: 'Peso normal não afasta transtorno alimentar.' },

  'MEN-18': { tema: 'Apneia obstrutiva do sono', pontos: [
    'Fatores de risco: sexo masculino, obesidade, pescoço e abdome largos, benzodiazepínicos/álcool, alterações craniofaciais; na criança, hipertrofia adenoamigdaliana.',
    '"Você ronca?" é a pergunta mais sensível; "você para de respirar dormindo?", a mais específica.',
    'Escala de Epworth (0–24): 10 ou mais sugere sonolência excessiva; é rastreio, não diagnóstico.',
    'Polissonografia é o padrão-ouro. IAH: leve 5–15, moderada 16–30, grave acima de 30.',
    'Obstrutiva: o esforço respiratório continua durante a pausa. Central: o esforço diminui ou some.',
    'Tratamento: CPAP ("tala pneumática"), perda de peso, terapia posicional, evitar álcool e relaxantes; outras opções: aparelho intraoral e cirurgia.',
    'Sem tratamento: hipertensão, arritmias, diabetes tipo 2 e prejuízo cognitivo.',
  ], pegadinha: 'Epworth alto não diagnostica apneia: é só rastreio.' },

  'MEN-19': { tema: 'TDAH no adulto', pontos: [
    'A partir dos 17 anos, bastam 5 sintomas num domínio.',
    'Início antes dos 12 anos, confirmado retrospectivamente, de preferência com relato de terceiros.',
    'No adulto, a hiperatividade aparece mais como inquietude subjetiva do que como agitação motora.',
    'Comorbidades: uso de substâncias (até 40%), depressão, transtorno bipolar, ansiedade, transtornos da personalidade (~50%). Investigar antes de definir a conduta.',
    'TDAH não tratado dobra o risco de abuso de substâncias.',
    'Estimulantes são a primeira escolha (com potencial de abuso fora de prescrição); não estimulantes: atomoxetina, bupropiona, clonidina/guanfacina.',
    'Sem tratamento: acidentes de trânsito, problemas no trabalho, criminalidade.',
  ], pegadinha: 'No adulto, a hiperatividade raramente é agitação motora franca.' },

  'MEN-20': { tema: 'Transtornos da personalidade', pontos: [
    'Padrão persistente, rígido e com prejuízo; diagnóstico clínico e longitudinal; cerca de 10% da população.',
    'Grupo A (excêntricos): paranoide, esquizoide, esquizotípica. Grupo B (dramáticos): antissocial, borderline, histriônica, narcisista. Grupo C (ansiosos): evitativa, dependente, obsessivo-compulsiva.',
    'Antissocial: 3 ou mais critérios desde os 15 anos; diagnóstico só a partir dos 18, com transtorno de conduta antes dos 15. Prevalência de 0,2–3%, até 75% em populações carcerárias.',
    'Manejo do antissocial: comunicação clara, objetiva e não punitiva; limites firmes e consistentes; questionar-se quando a própria conduta se desvia do habitual (manipulação).',
    'Narcisista: validar sem alimentar a grandiosidade e manter a rotina. Histriônica: postura profissional consistente.',
    'Psicoterapia é o eixo; remédio só para sintomas-alvo, nunca para o núcleo do transtorno.',
  ], pegadinha: 'Personalidade antissocial não se diagnostica antes dos 18 anos.' },

  // ===================================================== FARMACOLOGIA (manejo de reações adversas)
  'FAR-01': { tema: 'Anti-histamínico de 1ª geração: sedação', pontos: [
    'Anti-H1 de 1ª geração: maior penetração no SNC (atravessa a barreira hematoencefálica) → sedação; mais efeitos anticolinérgicos.',
    'Medida: trocar por 2ª geração (cetirizina, loratadina, fexofenadina), que não atravessa facilmente a barreira e dá menos sedação.',
    'Anti-H1 funciona melhor preventivo, antes da exposição, do que na crise já instalada.',
    'Bloqueio H1 competitivo e reversível: exposição intensa libera mais histamina e supera o bloqueio.',
    'Controle ambiental (poeira, umidade) complementa o remédio, não o substitui.',
    'Anti-H1 age sobre espirros, coceira e coriza; tem efeito limitado sobre a congestão.',
  ], pegadinha: 'Sono com antialérgico não é "normal de todo antialérgico": é próprio da 1ª geração, e a 2ª geração resolve.' },

  'FAR-02': { tema: 'Anti-histamínico de 1ª geração: efeito anticolinérgico', pontos: [
    'Efeito anticolinérgico da 1ª geração pode causar retenção urinária.',
    'Hiperplasia prostática benigna aumenta a vulnerabilidade a esse efeito.',
    'Medida: suspender a 1ª geração; se precisar, 2ª geração, sem efeitos anticolinérgicos relevantes.',
    'A sonolência associada vem da penetração no SNC.',
    'Usar o anti-H1 de forma preventiva e reduzir a exposição ao alérgeno.',
  ], pegadinha: 'O mesmo remédio que não faz nada no vizinho trava a bexiga de quem tem próstata aumentada.' },

  'FAR-03': { tema: 'Descongestionante tópico: rinite medicamentosa', pontos: [
    'Descongestionantes tópicos (fenilefrina, nafazolina, oximetazolina) são simpaticomiméticos: vasoconstrição e abertura das vias nasais.',
    'Uso contínuo por mais de 3 a 5 dias → rinite medicamentosa, com congestão rebote.',
    'Medida: suspender o descongestionante tópico.',
    'Corticosteroide nasal (beclometasona, budesonida, fluticasona): ação anti-inflamatória ampla, eficaz também na congestão.',
    'Anti-H1 pode ser mantido para espirros, coceira e coriza, mas controla mal a congestão.',
    'Controle ambiental: umidade, mofo, poeira.',
  ], pegadinha: 'Usar o spray mais vezes piora o problema: o rebote só para quando o spray para.' },

  'FAR-04': { tema: 'Descongestionante sistêmico: pressão arterial', pontos: [
    'Pseudoefedrina (descongestionante sistêmico) é simpaticomimética e, em doses elevadas, pode alterar a pressão arterial.',
    'Cautela em hipertensos; medida: suspender.',
    'Não aumentar o anti-hipertensivo antes de retirar a causa.',
    'Congestão com segurança: corticosteroide nasal.',
    'Descongestionante tópico, se usado, por no máximo 3 a 5 dias.',
  ], pegadinha: 'A pressão que "não responde" pode ser o antigripal, e não o anti-hipertensivo.' },

  'FAR-05': { tema: 'Antileucotrienos: efeitos adversos', pontos: [
    'Antileucotrienos (montelucaste, zafirlucaste): antagonistas dos receptores de leucotrienos, para terapia crônica.',
    'Efeitos adversos descritos: cefaleia, tontura, depressão e insônia; devem ser monitorados.',
    'Não têm ação imediata e não revertem crise instalada.',
    'Na crise: beta-2 agonista de curta ação inalatório.',
    'Alternativas de controle: corticoide inalatório (asma) e corticosteroide nasal (rinite).',
    'São ativos na asma desencadeada por AINEs.',
  ], pegadinha: 'Mudança de humor num adolescente em uso de montelucaste pode ser o remédio, e não "coisa da idade".' },

  'FAR-06': { tema: 'Reações adversas no tratamento da rinite', pontos: [
    'Anti-H1 de 1ª geração: sedação (SNC) e efeitos anticolinérgicos (retenção urinária).',
    'Anti-H1 de 2ª geração: menos sedação e sem efeitos anticolinérgicos relevantes.',
    'Descongestionante tópico: rinite medicamentosa após 3 a 5 dias.',
    'Descongestionante sistêmico: alteração da pressão em doses elevadas.',
    'Corticosteroide nasal: controla a congestão sem esses riscos.',
    'Anti-H1: melhor preventivo; bloqueio competitivo e reversível.',
  ], pegadinha: 'Anti-H1 não desentope bem o nariz: congestão pede corticosteroide nasal.' },

  'FAR-07': { tema: 'Beta-2 agonista: via oral × inalatória', pontos: [
    'Beta-2 agonistas relaxam a musculatura brônquica e estabilizam mastócitos.',
    'Via oral: mais efeitos sistêmicos (taquicardia, tremores, cãibras).',
    'Aerossol: maior broncosseletividade, menos efeitos sistêmicos.',
    'Via oral reservada principalmente a crianças que não conseguem usar dispositivos inalatórios.',
    'Uso de beta-2 de curta ação 4 ou mais vezes por semana indica terapia anti-inflamatória (corticoide inalatório).',
    'Beta-2 de longa ação: só associado ao corticoide; não serve para alívio.',
  ], pegadinha: 'Comprimido "mais prático" troca broncosseletividade por tremor e taquicardia.' },

  'FAR-08': { tema: 'Teofilina: toxicidade', pontos: [
    'Baixo índice terapêutico: a dose eficaz fica perto da tóxica.',
    'Riscos: cefaleia, tontura, hipotensão, palpitações, convulsões e até morte súbita em doses elevadas.',
    'Medida na intoxicação: suspender e monitorizar.',
    'Papel restrito: quando corticoide e cromoglicato são insuficientes.',
    'Base do tratamento: corticoide inalatório, com beta-2 de curta ação para alívio.',
  ], pegadinha: 'Dobrar a teofilina por conta própria pode levar a convulsão: a margem de segurança é estreita.' },

  'FAR-09': { tema: 'Asma desencadeada por AINE', pontos: [
    'AINEs (inclusive AAS) podem desencadear crise de asma em pacientes sensíveis, sobretudo com rinite e asma.',
    'Broncoespasmo grave sem resposta a várias inalações de beta-2: associar brometo de ipratrópio (anticolinérgico).',
    'Não aumentar a dose do beta-2 para compensar.',
    'Prevenção: evitar AINEs e informar a sensibilidade em todo atendimento.',
    'Antileucotrienos são ativos na asma desencadeada por AINEs.',
    'Associações com ipratrópio: com fenoterol e com salbutamol.',
  ], pegadinha: 'Na crise que não cede, a saída é somar outro mecanismo (ipratrópio), e não dobrar o salbutamol.' },

  'FAR-10': { tema: 'Corticoide oral crônico: osteoporose secundária', pontos: [
    'Corticosteroides inibem a ação osteoblástica e aumentam a osteoclástica.',
    'Medidas: reduzir a prednisona quando possível e associar bisfosfonato (alendronato, risedronato).',
    'Monitorizar a densidade óssea periodicamente (a cada 6 meses nesse contexto).',
    'Corticoide inalatório controla a inflamação com broncosseletividade e ajuda a reduzir o oral.',
    'Outras causas medicamentosas: heparina, fenitoína e fenobarbital (comprometem a vitamina D).',
  ], pegadinha: 'O vilão dos ossos é o corticoide oral prolongado; a bombinha é justamente a forma de poupá-los.' },

  'FAR-11': { tema: 'Reações adversas dos fármacos da asma', pontos: [
    'Beta-2 oral: taquicardia, tremores, cãibras → voltar à via inalatória.',
    'Teofilina: baixo índice terapêutico; convulsões e morte súbita em doses elevadas.',
    'Antileucotrienos: cefaleia, tontura, depressão, insônia.',
    'Omalizumabe: comuns — reação local, cefaleia, faringite, sinusite; sérias — anafilaxia, trombocitopenia, câncer.',
    'Prednisona oral crônica: osteoporose secundária.',
    'Via inalatória: broncosseletividade e menos efeitos sistêmicos.',
  ], pegadinha: 'Reação local do omalizumabe é comum, mas a anafilaxia está entre as reações sérias: a vigilância continua.' },

  'FAR-12': { tema: 'Opioides: depressão respiratória, sedação e constipação', pontos: [
    'Receptor mu: analgesia, euforia, sedação, inibição respiratória e dependência.',
    'Idosos sedam com mais facilidade; sedativos associados (benzodiazepínicos) intensificam a depressão do SNC.',
    'Intoxicação: coma, miose e depressão respiratória.',
    'Manejo: via aérea e ventilação; naloxona IV lenta, repetindo se necessário; monitorizar, porque a naloxona dura menos que muitos opioides.',
    'Constipação por diminuição do peristaltismo: terapia laxante.',
    'Opioides podem causar hipotensão; a urticária é mais frequente na via parenteral.',
  ], pegadinha: 'Acordou com a naloxona não é alta: o efeito dela acaba antes do opioide.' },

  'FAR-13': { tema: 'AINEs: rim e risco hemorrágico', pontos: [
    'AINEs inibem as prostaglandinas vasodilatadoras renais e podem comprometer a função renal.',
    'Com diurético, o efeito se soma: edema e elevação da creatinina.',
    'AINE + anticoagulante: maior risco de hemorragia; evitar.',
    'Medidas: suspender o AINE e monitorizar a função renal.',
    'Paracetamol: primeira linha para dor leve a moderada, sem risco de sangramento gastrointestinal; cautela em etilistas (fígado).',
    'Osteoartrite: atividade física adequada ao perfil do paciente.',
  ], pegadinha: 'Perna inchada em idoso com diurético e AINE pode ser o rim, não o coração.' },

  'FAR-14': { tema: 'AINEs: úlcera e sangramento', pontos: [
    'AINEs inibem as prostaglandinas que protegem a mucosa; os não seletivos (COX-1 e COX-2) têm maior risco gastrointestinal.',
    'Medidas: suspender o AINE (sem isso a úlcera recidiva) e IBP para cicatrizar.',
    'Sucralfato: barreira aderente sobre a lesão, complementar ao IBP.',
    'Seletivo da COX-2 reduz parte do risco gástrico, com cautela em risco cardiovascular.',
    'Misoprostol repõe a proteção, mas provoca contrações uterinas: cautela em mulher em idade fértil.',
    'Sinais de alarme: fezes escurecidas e hematêmese, mesmo sem dor intensa.',
  ], pegadinha: 'Úlcera sangra sem dor forte: fezes escuras bastam para procurar a emergência.' },

  'FAR-15': { tema: 'Alendronato e cálcio: esofagite e constipação', pontos: [
    'Alendronato liga-se à hidroxiapatita e reduz a atividade dos osteoclastos.',
    'Pode causar esofagite quando tomado de forma incorreta.',
    'Como tomar: em jejum, só com água, e permanecer ereta por 30 minutos.',
    'Alternativa se esofagite grave ou úlcera péptica: calcitonina intranasal.',
    'Carbonato de cálcio: com as refeições (absorção melhor em pH ácido); constipação → água e fibras.',
  ], pegadinha: 'O problema da esofagite costuma ser o jeito de tomar, não o remédio em si.' },

  'FAR-16': { tema: 'Carbamazepina: efeitos adversos e interações', pontos: [
    'Bloqueia canais de Na⁺; útil em crises focais e tônico-clônicas; pode piorar ausências.',
    'Lembrar: diplopia, tontura, hiponatremia, SJS/NET e discrasias sanguíneas.',
    'Forte indutora enzimática: reduz os níveis do anticoncepcional, que pode falhar.',
    'Oxcarbazepina também causa hiponatremia e reduz a eficácia do anticoncepcional.',
    'Levetiracetam: amplo espectro, poucas interações, eliminação renal; limitação: irritabilidade.',
    'Valproato: alta teratogenicidade.',
  ], pegadinha: 'Trocar carbamazepina por oxcarbazepina não resolve nem o sódio nem a pílula.' },

  'FAR-17': { tema: 'Reações adversas dos anticonvulsivantes', pontos: [
    'Fenitoína: nistagmo, ataxia, hiperplasia gengival, hirsutismo e doença óssea; monitorização sérica.',
    'Valproato: ganho de peso, hepatotoxicidade, pancreatite e alta teratogenicidade.',
    'Lamotrigina: rash/SJS; titulação lenta; risco maior com valproato; poucos efeitos cognitivos.',
    'Fenobarbital: sedação e prejuízo cognitivo; tolerância, dependência e depressão respiratória.',
    'Etossuximida: náusea, dor abdominal e fadiga; segue como escolha na ausência típica.',
    '2ª geração: menor incidência global de RAMs, menos interações, faixa terapêutica mais ampla.',
  ], pegadinha: 'Mancha na pele com lamotrigina não é "só alergia": pode ser o começo de Stevens-Johnson.' },

  'FAR-18': { tema: 'Antiácidos e IBP: hábito intestinal', pontos: [
    'Antiácido à base de magnésio: diarreia osmótica.',
    'Antiácido à base de alumínio: constipação.',
    'IBP pode alterar a flora intestinal e favorecer diarreia em alguns pacientes.',
    'Antiácido neutraliza o ácido já presente: alívio imediato, não é o tratamento definitivo.',
    'IBP bloqueia irreversivelmente a bomba de prótons: é o que trata o refluxo.',
  ], pegadinha: 'Antiácido "por garantia" em quem já está bem com IBP só acrescenta efeito adverso.' },

  // ===================================================== EPIDEMIOLOGIA
  'EPI-01': { tema: 'Surto, taxa de ataque e risco relativo', pontos: [
    'Taxa de ataque: doentes ÷ pessoas expostas no surto (uma incidência acumulada).',
    'Risco relativo = taxa nos expostos ÷ taxa nos não expostos. Acima de 1, associação positiva; abaixo de 1, proteção; igual a 1, sem associação.',
    'Surto: ocorrência localizada acima do esperado.',
    'Vigilância epidemiológica: detecção do excesso de casos, investigação e resposta.',
    'Usa-se RR porque se conhece toda a população exposta e não exposta, como numa coorte; a OR é do caso-controle.',
    'Letalidade = óbitos ÷ casos.',
  ], pegadinha: 'Em surto com população conhecida, a medida é o risco relativo, não a odds ratio.' },

  'EPI-02': { tema: 'Mortalidade infantil e materna', pontos: [
    'Coeficiente de mortalidade infantil = óbitos em menores de 1 ano ÷ nascidos vivos × 1.000.',
    'Neonatal precoce (< 7 dias): fatores maternos e asfixia. Neonatal tardio (7–27 dias): infecções perinatais. Pós-neonatal (28 dias a < 1 ano): infecções, diarreia, desnutrição, mais sensível ao ambiente.',
    'Razão de mortalidade materna = óbitos maternos ÷ nascidos vivos × 100.000; avalia a assistência ao pré-natal, ao parto e ao puerpério.',
    'Variação percentual = (valor novo − valor antigo) ÷ valor antigo.',
    'Saneamento e cobertura de água se relacionam à mortalidade infantil por diarreia.',
    'Indicadores combinados (mortalidade infantil, curva de Nelson de Moraes) dão uma leitura mais consistente do território.',
  ], pegadinha: 'O denominador da mortalidade infantil são os nascidos vivos, não a população total.' },

  'EPI-03': { tema: 'Estudo de caso-controle', pontos: [
    'Parte do desfecho (casos e controles) e investiga a exposição passada; ideal para doença rara.',
    'Odds ratio = (a × d) ÷ (b × c). Não calcula incidência, logo não calcula risco relativo.',
    'Limitações: viés de memória, escolha da fonte dos controles e necessidade de definição clara de caso.',
    'Confundimento: análise estratificada ou ajustada (multivariada).',
    'Mesmo com associação forte, um caso-controle isolado pede cautela.',
    'É classicamente retrospectivo, mas isso não o define: o que define é a seleção pelo desfecho.',
  ], pegadinha: 'Caso-controle não calcula incidência nem risco relativo.' },

  'EPI-04': { tema: 'Estudo de coorte, risco relativo e risco atribuível', pontos: [
    'Parte da exposição e acompanha até o desfecho: calcula incidência e risco relativo, garantindo a temporalidade.',
    'Risco atribuível = incidência nos expostos − nos não expostos (casos a mais). RA% = RA ÷ incidência nos expostos (fração evitável entre os expostos).',
    'Prospectiva: exposição definida agora, desfecho no futuro. Retrospectiva: exposição e desfecho já ocorreram, reconstruídos por registros.',
    'Limitações: custo, tempo, perdas de seguimento (sobretudo diferenciais), mudança de exposição, confundimento; inadequada para doença rara.',
    'Coorte fechada (recrutamento único) × aberta ou dinâmica (entradas e saídas).',
    'Populações ocupacionais, mais jovens e saudáveis, limitam a validade externa.',
  ], pegadinha: 'Coorte retrospectiva continua sendo coorte: ela parte da exposição.' },

  'EPI-05': { tema: 'Ensaio clínico randomizado', pontos: [
    'O pesquisador aloca a intervenção por sorteio; a randomização equilibra características conhecidas e desconhecidas.',
    'Mascaramento simples, duplo ou triplo; o cegamento aumenta a validade interna.',
    'Análise por intenção de tratar: cada participante é analisado no grupo para o qual foi sorteado.',
    'Fases: II (eficácia preliminar e dose), III (confirma eficácia em grande amostra), IV (monitoramento pós-comercialização).',
    'Ética e transparência: TCLE (decisão voluntária e informada), Comitê de Ética, registro prévio, monitoramento de eventos adversos, CONSORT.',
    'Variações: fatorial, crossover, não inferioridade. Desfecho substituto (ex.: LDL) é mais rápido, mas nem sempre traz benefício clínico.',
  ], pegadinha: 'Tirar da análise quem abandonou o tratamento quebra a randomização.' },

  'EPI-06': { tema: 'Incidência e prevalência', pontos: [
    'Incidência: casos novos ÷ população sob risco (exclui quem já tem a doença). Mede o risco.',
    'Prevalência: casos existentes ÷ população. Mede a carga.',
    'Prevalência ≈ incidência × duração.',
    'Tratamento que cura reduz a duração e a prevalência; tratamento que prolonga a vida sem curar aumenta a prevalência.',
    'Rastreamento capta casos antes não diagnosticados e aumenta os números registrados sem piora real.',
    'Com tempos de acompanhamento diferentes, usa-se densidade de incidência (pessoas-tempo).',
  ], pegadinha: 'Prevalência subindo não significa necessariamente mais casos novos.' },

  'EPI-07': { tema: 'Canal endêmico e formas de ocorrência', pontos: [
    'Canal endêmico: faixa esperada construída pela série histórica; ultrapassar o limite superior de forma consistente caracteriza epidemia.',
    'Endemia: ocorrência constante e esperada. Epidemia: acima do esperado em população, local e período definidos. Surto: ocorrência localizada acima do esperado. Pandemia: vários países.',
    'Vigilância epidemiológica: monitoramento, detecção do excesso, investigação e resposta.',
    'O canal é uma ferramenta descritiva (variável tempo) e continua valendo como referência mesmo quando ultrapassado.',
    'Iceberg epidemiológico: os notificados são só a parte visível (assintomáticos, quem não procura atendimento, subnotificação).',
  ], pegadinha: 'Doença que aparece todo ano pode, sim, virar epidemia quando passa do esperado.' },

  'EPI-08': { tema: 'PICO, hierarquia das evidências e validade', pontos: [
    'PICO: paciente/população, intervenção, comparação e desfecho (outcome).',
    'Pergunta sobre intervenção → ensaio clínico randomizado. Fator de risco de doença rara → caso-controle. Prevalência → transversal.',
    'Topo da hierarquia: revisão sistemática com metanálise de ECR. Relato de caso é o mais frágil; série de casos, intermediária.',
    'A posição do desenho não garante a validade de um estudo: um ECR subdimensionado e que excluiu os de maior risco pode ser inconclusivo.',
    'Validade interna: resultado sem distorção por vieses ou confundimento. Externa: possibilidade de generalizar.',
    'Critérios de elegibilidade restritivos favorecem a validade interna e limitam a externa.',
  ], pegadinha: 'Ser randomizado não torna um estudo automaticamente bom.' },

  'EPI-09': { tema: 'Indicadores de mortalidade e curva de Nelson de Moraes', pontos: [
    'O coeficiente de mortalidade geral bruto depende da estrutura etária: para comparar populações, padronizar por idade ou usar coeficientes específicos.',
    'Nelson de Moraes: óbitos concentrados em idades avançadas = perfil favorável; em menores de 5 anos = desfavorável; perfis intermediários = transição epidemiológica.',
    'Mortalidade proporcional é a fração dos óbitos num grupo, e não o risco de morrer naquele grupo.',
    'Coeficiente (risco), proporção (parte do todo) e razão (comparação entre grandezas) são medidas diferentes.',
    'Fontes de dados: IBGE e sistemas de informação do Ministério da Saúde.',
  ], pegadinha: 'A cidade com mais mortes pode ser a mais saudável, se a população for mais velha.' },

  'EPI-10': { tema: 'Letalidade, mortalidade e incidência', pontos: [
    'Letalidade = óbitos ÷ casos: gravidade para quem adoece.',
    'Mortalidade = óbitos ÷ população: impacto na população.',
    'Incidência = casos novos ÷ população sob risco.',
    'Doença rara e letal pode ter mortalidade baixa; doença comum e pouco letal pode matar mais no total.',
    'Pelo iceberg epidemiológico, a subnotificação dos casos leves superestima a letalidade.',
    'Para carga de doença: APVP, YLD e DALY.',
  ], pegadinha: 'Letalidade usa os doentes no denominador; mortalidade usa a população.' },

  'EPI-11': { tema: 'Coorte × caso-controle', pontos: [
    'Pergunta-chave: os participantes foram selecionados pela exposição (coorte) ou pela doença (caso-controle)?',
    'Coorte: incidência e RR, temporalidade, vários desfechos; cara, longa, sujeita a perdas, ruim para doença rara.',
    'Caso-controle: OR, rápido, barato, ideal para doença rara; viés de memória, escolha dos controles, definição de caso.',
    'A tabela 2×2 é parecida nos dois; muda a direção da investigação.',
    'Exposição e desfecho comuns: coorte (temporalidade) ou transversal (agilidade e menor custo).',
    'Resultados convergentes entre desenhos reforçam a associação (consistência).',
  ], pegadinha: 'A tabela 2×2 igual não quer dizer desenho igual: o critério de seleção decide.' },

  'EPI-12': { tema: 'Classificação dos desenhos de estudo', pontos: [
    'Observacional: o pesquisador só observa a exposição. Experimental: o pesquisador aloca a exposição.',
    'Coorte retrospectiva: exposição e desfecho já ocorreram e são reconstruídos por registros, mas o estudo parte da exposição.',
    'Caso-controle: parte da doença e investiga a exposição passada.',
    'Ensaio randomizado: alocação aleatória. Quase-experimento (ensaio não randomizado): intervenção sem sorteio, por exemplo comparada a um período histórico.',
    'Pergunta-chave do ensaio: quem decidiu quem recebeu a intervenção, e de que forma?',
    'Medidas: coorte e ECR, risco relativo; caso-controle, odds ratio; transversal, razão de prevalência.',
    'Usar dados secundários (prontuários) não define o desenho.',
  ], pegadinha: 'Usar dados do passado não transforma uma coorte em caso-controle.' },

  'EPI-13': { tema: 'Estudo transversal', pontos: [
    'Exposição e desfecho medidos no mesmo momento, numa única coleta. Mede prevalência; medida de associação: razão de prevalência.',
    'Vantagens: rápido, barato, descreve a população, identifica grupos de risco e ajuda a planejar serviços.',
    'Limitações: sem temporalidade (causalidade reversa), ruim para doença rara, viés de prevalência-incidência (os casos graves já saíram).',
    'RP abaixo de 1: proteção; perto de 1: sem associação; IC95% que não inclui 1: associação estatisticamente significativa.',
    'Transversais repetidos acompanham tendências, mas não são coorte.',
    'RP e OR só se aproximam quando o desfecho é raro.',
  ], pegadinha: 'Associação num estudo transversal pode ser causalidade reversa.' },

  'EPI-14': { tema: 'Estudo ecológico', pontos: [
    'A unidade de análise é o agregado (município, estado, serviço), sem dados individuais.',
    'Subtipos: espacial (entre áreas), série temporal (ao longo dos anos) e agregados institucionais (entre serviços).',
    'Vantagens: usa dados secundários, é rápido, barato e gera hipóteses.',
    'Falácia ecológica: transferir uma associação vista no coletivo para o indivíduo, por mais forte que seja a correlação.',
    'A coorte, que liga exposição e desfecho no mesmo indivíduo e garante a temporalidade, dá evidência mais robusta para política pública.',
    'Correlação espúria: sorvete e afogamento são explicados pelo calor (falta plausibilidade, critério de Bradford Hill).',
  ], pegadinha: 'Correlação forte entre municípios não diz nada sobre o risco de cada pessoa.' },

  'EPI-15': { tema: 'Estudos descritivos', pontos: [
    'Descritivo: descreve frequência e características, sem testar hipótese. Analítico: compara grupos para testar associação.',
    'Relato de caso: um paciente. Série de casos: vários pacientes semelhantes. Nenhum tem grupo controle.',
    'Variáveis clássicas: tempo, lugar e pessoa.',
    'Papel: alerta precoce de agravo emergente, geração de hipóteses, identificação de grupos vulneráveis e avaliação de tendências.',
    'Hierarquia: relato < série < transversal.',
    'Um estudo se classifica ao mesmo tempo pelo tipo operativo (observacional/experimental), temporalidade (transversal/longitudinal) e finalidade (descritiva/analítica).',
  ], pegadinha: 'Série de casos não tem grupo de comparação e não prova causa.' },

  'EPI-16': { tema: 'Eficácia, efetividade e tipos de ensaio', pontos: [
    'Eficácia: desempenho em condições ideais. Efetividade: em condições reais, geralmente menor.',
    'Ensaio explicativo (condições ideais, mede eficácia) × pragmático (prática real, mede efetividade).',
    'Validade interna × externa; critérios de inclusão rígidos limitam a generalização.',
    'Ensaio clínico (doentes), de campo (saudáveis, prevenção, ex.: vacina) e comunitário (alocação por agrupamentos, como escolas ou UBS).',
    'Não inferioridade: mostrar que o novo não é pior que o padrão. Crossover: cada um é seu próprio controle. Fatorial: duas intervenções ao mesmo tempo.',
    'Doenças raras pedem desenhos alternativos ou estudos multicêntricos.',
  ], pegadinha: 'Resultado menor na prática não significa que o ensaio estava errado.' },

  'EPI-17': { tema: 'Densidade de incidência', pontos: [
    'Densidade de incidência = casos novos ÷ soma de pessoas-tempo sob risco; usada quando os tempos de acompanhamento diferem (entradas, saídas, perdas).',
    'A razão entre densidades de incidência funciona como o risco relativo.',
    'Risco atribuível = diferença entre as densidades; RA% = RA ÷ densidade nos expostos.',
    'Coorte aberta (dinâmica): entradas e saídas ao longo do tempo. Fechada: recrutamento único.',
    'Limitações da coorte: perdas de seguimento e mudança de exposição durante o estudo.',
  ], pegadinha: 'Com acompanhamentos de tempos diferentes, dividir casos por pessoas distorce: use pessoas-tempo.' },

  'EPI-18': { tema: 'Medidas de razão e de diferença', pontos: [
    'Medidas de razão (RR, OR): força da associação, "quantas vezes maior".',
    'Medidas de diferença (risco atribuível): impacto absoluto, "quantos casos a mais".',
    'RA%: fração dos casos evitável dentro do grupo exposto.',
    'Para priorizar ações na população, considerar também a prevalência da exposição.',
    'Risco atribuível populacional: incidência observada − incidência esperada sem a exposição = casos potencialmente evitáveis.',
    'Exemplo do banco (asbesto): RR 25; RA 48 por 10.000 pessoas-ano; RA% 96%.',
  ], pegadinha: 'Maior risco relativo não significa maior impacto na população.' },

  'EPI-19': { tema: 'Confundimento e explicações alternativas', pontos: [
    'Confundidor: causa comum, associada à exposição e ao desfecho, que distorce a associação.',
    'Variável intermediária: elo no caminho causal; ajustar para ela mascara parte do efeito real.',
    'Análise bruta × ajustada; bivariada × multivariada (controla confundidores).',
    'A randomização controla confundidores conhecidos e desconhecidos; a padronização por idade corrige o confundimento da estrutura etária.',
    'Causalidade reversa (o desfecho influencia a exposição) × confundimento (terceira variável).',
    'Critérios de Bradford Hill: força, consistência, temporalidade, plausibilidade/coerência, entre outros.',
  ], pegadinha: 'Se a associação some após o ajuste, ela era em grande parte confundimento.' },

  'EPI-20': { tema: 'Carga de doença: APVP, YLD e DALY', pontos: [
    'APVP = óbitos × (expectativa padrão − idade do óbito).',
    'YLD = prevalência × peso de incapacidade × duração.',
    'DALY = APVP + YLD: anos de vida saudável perdidos, somando morte precoce e incapacidade.',
    'Agravos que matam jovens ou deixam sequelas podem ter carga maior com menos óbitos.',
    'Mortalidade proporcional mostra a fração dos óbitos, não o risco.',
    'Indicadores de morbidade e de mortalidade se complementam.',
  ], pegadinha: 'O número de óbitos sozinho esconde as mortes precoces e as sequelas.' },

  // ===================================================== SAÚDE DA MULHER
  'MUL-01': { tema: 'Queixa de corrimento: anamnese, exame e meio vaginal normal', pontos: [
    'Vulvovaginites e vaginoses são as queixas mais frequentes no consultório de ginecologia (cerca de 40% das consultas).',
    'Vaginite: alteração da microbiota com inflamação. Vaginose: sem evidência de inflamação.',
    'Flora normal: lactobacilos (80–95%), células epiteliais e raros polimorfonucleares. pH de 3,8 a 4,5.',
    'Lactobacilos convertem o glicogênio do epitélio em ácido lático (pH baixo) e produzem peróxido de hidrogênio (antibacteriano e antiviral).',
    'Anamnese: caracterizar o corrimento (aspecto, quantidade, cor, odor), relação com o ciclo, DM e imunidade, medicações, contracepção, gestação, história sexual, dispareunia e dor pélvica.',
    'Exame: genitais externos (corrimento, hiperemia, fissuras, escoriações, verrugas, úlceras) e internos (conteúdo vaginal e colo).',
    'Típicas: vaginose bacteriana, candidíase, tricomoníase. Atípicas: vaginose citolítica, vaginite aeróbica, vaginite inflamatória descamativa.',
  ], pegadinha: 'Vaginose não é "vaginite leve": o nome indica ausência de inflamação.' },

  'MUL-02': { tema: 'Vaginose bacteriana', pontos: [
    'Lactobacilos substituídos por bactérias anaeróbias (Gardnerella, Mobiluncus, Atopobium, Prevotella...). Sem resposta inflamatória.',
    'É o corrimento genital mais comum entre as mulheres. Recorrência de 15–30%.',
    'Corrimento branco-acinzentado, homogêneo, com odor fétido que piora com substâncias alcalinas (sêmen, sangue menstrual).',
    'Amsel (3 de 4): corrimento branco-acinzentado fino e homogêneo; pH > 4,5; teste das aminas positivo; clue cells. Nugent (Gram) = padrão-ouro.',
    'Metronidazol 500 mg VO 12/12 h por 7 dias. Alternativas: metronidazol gel 0,75% por 5 dias; clindamicina VO ou creme 2% por 7 dias; tinidazol.',
    'Recidivas: metronidazol gel 2 vezes por semana por 4 a 6 meses. Álcool proibido durante o metronidazol e por 24 h depois.',
    'Deixa o meio suscetível a HPV, HIV e outras ISTs. Na gestação: parto prematuro, corioamnionite, endometrite, infecção pós-aborto.',
  ], pegadinha: 'Sem prurido e sem hiperemia não quer dizer sem doença: na vaginose não há inflamação.' },

  'MUL-03': { tema: 'Candidíase vulvovaginal não complicada', pontos: [
    'Candida albicans: 85–95% dos casos. Pode fazer parte da flora em baixa concentração. É dimórfica (levedura e pseudo-hifa).',
    'Prurido, corrimento esbranquiçado (leite talhado), disúria, dispareunia; hiperemia, edema e fissuras vulvares.',
    'pH < 4,5 e teste das aminas negativo.',
    'Confirmação: exame a fresco com KOH 10% ou SF (sensibilidade 50–60%), Gram ou cultura (Sabouraud, Nickerson). Exame a fresco positivo dispensa continuar a investigação.',
    'Predisponentes: gestação, DM, obesidade, corticoide, antibiótico, contraceptivo oral, imunossupressão, HIV, calor e umidade locais, produtos íntimos irritantes.',
    'Não complicada: fluconazol 150 mg VO dose única; miconazol creme vaginal por 7 noites; nistatina vaginal por 14 dias.',
  ], pegadinha: 'Fluconazol oral não deve ser prescrito para gestantes.' },

  'MUL-04': { tema: 'Candidíase de repetição e complicada', pontos: [
    'Repetição: 4 ou mais episódios ao ano, confirmados laboratorialmente.',
    'Confirmar fungos porque vaginose citolítica, alergias e dermatites dão os mesmos sintomas; a cultura identifica espécies não albicans.',
    'Complicada: recorrente, severa, não albicans, ou em diabética, imunossuprimida, debilitada ou em uso de imunossupressores.',
    'Biofilme da Candida facilita as recidivas.',
    'Tratamento prolongado (7–14 dias, local ou oral) ou fluconazol 150 mg de 3/3 dias, 3 doses.',
    'Supressão na recorrente: fluconazol 150 mg VO 1 vez por semana por 6 meses.',
    'Não albicans: sem tratamento comprovadamente eficaz; 7–14 dias sem fluconazol ou ácido bórico 600 mg vaginal por 14 dias.',
  ], pegadinha: '"Cinco episódios" contados pela paciente não fecham o diagnóstico: só valem os confirmados em laboratório.' },

  'MUL-05': { tema: 'Tricomoníase', pontos: [
    'Trichomonas vaginalis: protozoário flagelado anaeróbio, de transmissão sexual. Cerca de 30% são assintomáticas.',
    'Corrimento intenso amarelo ou amarelo-esverdeado, bolhoso; prurido, ardor, disúria, dispareunia; edema vulvar; colo em framboesa (colpite tigroide).',
    'pH > 4,5. Teste das aminas pode ser positivo (germes anaeróbios associados).',
    'Exame a fresco mostra o parasita em movimento (sensibilidade 51–65%); no Gram ele aparece imóvel. Cultura em meio de Diamond se houver sintomas e exames negativos.',
    'Metronidazol 2 g VO dose única ou 500 mg 12/12 h por 7 dias; tinidazol 2 g VO dose única.',
    'Sem álcool por 24 h (metronidazol) ou 72 h (tinidazol). Referenciar parceria(s) e pesquisar outras ISTs.',
    'Facilita a aquisição de outras infecções, inclusive HIV, e associa-se a complicações no ciclo gravídico-puerperal.',
  ], pegadinha: 'Teste das aminas positivo não fecha vaginose bacteriana: na tricomoníase ele também pode ser positivo.' },

  'MUL-06': { tema: 'Vaginose citolítica', pontos: [
    'Proliferação excessiva de lactobacilos → pH mais baixo e citólise; os produtos da citólise causam os sintomas. Desencadeante desconhecido.',
    'Corrimento esbranquiçado, prurido que piora no período pré-menstrual, ardor, disúria, dispareunia.',
    'Conteúdo flocular, fluido ou em grumos. pH < 4,0.',
    'Gram: excesso de lactobacilos, leucócitos raros ou ausentes, núcleos desnudos, ausência de fungos.',
    'Sem tratamento específico: alcalinizar o meio temporariamente com bicarbonato de sódio (óvulos ou duchas).',
    'Principal diferencial da candidíase, sobretudo da complicada.',
  ], pegadinha: 'A "candidíase que nunca cura" pode ser excesso de lactobacilos, e não fungo.' },

  'MUL-07': { tema: 'Vaginite aeróbica e vaginite inflamatória descamativa', pontos: [
    'Vaginite aeróbica: bactérias aeróbicas entéricas (E. coli, Enterococcus faecalis, S. aureus, S. epidermidis, estreptococo do grupo B), redução ou ausência de lactobacilos e inflamação.',
    'Corrimento por vezes purulento, odor desagradável, inflamação do vestíbulo, aumento de polimorfonucleares.',
    'Sem normatização: excesso de bactérias → clindamicina 2% vaginal por 21 dias; inflamação → hidrocortisona 10% vaginal por 21 dias; pode-se manipular um creme com os dois.',
    'Atrofia → estrogênio vaginal: melhora o trofismo e previne recorrências.',
    'Vaginite inflamatória descamativa: pouco frequente e severa; considerada o espectro mais grave da vaginite aeróbica. Eritema, petéquias e até equimoses.',
    'Na descamativa, é importante afastar tricomoníase. Tratamento: clindamicina 2% por 21 dias, hidrocortisona 10% por 2 a 4 semanas, estrogênio vaginal para reduzir recidivas.',
  ], pegadinha: 'Vaginite aeróbica não é vaginose bacteriana: aqui as bactérias são aeróbicas e há inflamação.' },

  'MUL-08': { tema: 'Diferenciando os corrimentos', pontos: [
    'Vaginose bacteriana: pH > 4,5, aminas positivas, clue cells, sem inflamação.',
    'Candidíase: pH < 4,5, aminas negativas, pseudo-hifas e leveduras, com inflamação.',
    'Tricomoníase: pH > 4,5, aminas podem ser positivas, parasita móvel no exame a fresco, com inflamação.',
    'Vaginose citolítica: pH < 4,0, excesso de lactobacilos, núcleos desnudos, sem fungos.',
    'Normal: lactobacilos dominantes e pH 3,8–4,5. Na VB os lactobacilos caem; na citolítica, sobram.',
    'Tricomoníase: tratar a parceria e pesquisar outras ISTs.',
  ], pegadinha: 'pH abaixo de 4,0 com prurido e grumos sem fungo é vaginose citolítica, não candidíase.' },

  'MUL-09': { tema: 'Cervicites', pontos: [
    'Agentes: Neisseria gonorrhoeae e Chlamydia trachomatis.',
    '70–80% são assintomáticas. Corrimento é incomum.',
    'Queixas: sangramento intermenstrual ou pós-coito, dispareunia, polaciúria, dor pélvica.',
    'Fatores de risco: idade < 25 anos, novas ou múltiplas parcerias, parceria com IST, uso irregular de preservativo.',
    'Exame: dor à mobilização do colo, colo friável (sangrante), mucopus pelo orifício externo, edema cervical.',
    'Padrão-ouro: biologia molecular.',
  ], pegadinha: 'Não ter corrimento não afasta cervicite: a maioria é assintomática.' },

  'MUL-10': { tema: 'Herpes genital: primoinfecção', pontos: [
    'Lesões dolorosas: vesícula → úlcera (fase de maior dor) → crosta. As três fases podem coexistir.',
    'Primoinfecção: incubação média de 6 dias, sintomas severos e sistêmicos (prostração, febrícula, mialgia, astenia), linfadenomegalia bilateral, 2–3 semanas.',
    'Recorrência: prurido e ardência, sintomas leves e localizados, sem linfadenomegalia, 7–10 dias.',
    'Primeiro episódio: aciclovir 200 mg, 2 comprimidos 3x/dia, ou 1 comprimido 5x/dia, por 7–10 dias. Iniciar o mais cedo possível; prolongar se a cicatrização estiver incompleta após 10 dias.',
    'Doença recorrente e incurável: o tratamento acelera a melhora dos sintomas.',
    'Imunossuprimidas com lesões extensas: aciclovir EV 5–10 mg/kg de 8/8 h por 5 a 7 dias.',
  ], pegadinha: 'O aciclovir não cura o herpes: ele encurta a crise.' },

  'MUL-11': { tema: 'Herpes recorrente, supressão e gestação', pontos: [
    'Recidiva: aciclovir 200 mg, 2 comprimidos 3x/dia ou 4 comprimidos 2x/dia, por 5 dias.',
    'Iniciar de preferência no pródromo: sensibilidade local, ardor, dor, prurido, hiperemia.',
    'Supressão com 6 ou mais episódios por ano: aciclovir 200 mg, 2 comprimidos 2x/dia por até 6 meses (até 2 anos); acompanhar as funções renal e hepática.',
    'Gestação: tratar o primeiro episódio em qualquer trimestre.',
    'Primoinfecção na gestação ou recidivas frequentes: supressão a partir da 36ª semana com aciclovir 400 mg 3x/dia.',
  ], pegadinha: 'Esperar a ferida aparecer para tratar a recidiva perde o melhor momento, que é o pródromo.' },

  'MUL-12': { tema: 'Sífilis primária', pontos: [
    'Cancro duro: lesão única, indolor, endurecida, de fundo limpo.',
    'Incubação de 10 a 90 dias (média de 21). A lesão dura de 2 a 6 semanas.',
    'Sífilis recente (primária, secundária e latente com até 1 ano): benzilpenicilina benzatina 2,4 milhões UI IM, dose única (1,2 milhão em cada glúteo).',
    'Alternativa, exceto para gestantes: doxiciclina 100 mg VO 12/12 h por 15 dias.',
    'Seguimento: teste não treponêmico trimestral.',
  ], pegadinha: 'A ferida sumir sozinha não é cura: sem tratamento a infecção continua.' },

  'MUL-13': { tema: 'Úlceras genitais: diagnóstico diferencial', pontos: [
    'Herpes (HSV-1/2): vesículas → úlceras dolorosas → crostas; linfonodos bilaterais na primoinfecção.',
    'Sífilis (Treponema pallidum): úlcera única, indolor, endurecida, fundo limpo.',
    'Cancro mole (Haemophilus ducreyi): úlceras dolorosas, geralmente múltiplas, base amolecida, fundo purulento, mau odor; adenite satélite supurativa que pode fistulizar. Incubação 3–7 dias.',
    'Donovanose (Klebsiella granulomatis): indolor, fundo granuloso vermelho vivo e sangrante, lesões em espelho (autoinoculação), sem adenite. Biópsia: corpúsculos de Donovan.',
    'LGV (Chlamydia trachomatis L1–L3): pequena úlcera indolor e autolimitada; linfadenopatia inguinal dolorosa que drena por múltiplos orifícios ("bico de regador").',
    'Nem toda úlcera genital é IST: úlcera de Lipschütz, doença de Behçet.',
  ], pegadinha: 'Cancro duro é indolor e limpo; cancro mole é doloroso e purulento.' },

  'MUL-14': { tema: 'Linfogranuloma venéreo', pontos: [
    'Agente: Chlamydia trachomatis sorotipos L1, L2 e L3.',
    'Fase de inoculação: pequena úlcera única, indolor e autolimitada, que some sozinha.',
    'Disseminação linfática regional: linfadenopatia inguinal dolorosa, com supuração em múltiplos orifícios ("bico de regador" ou "chuveirinho").',
    'Sequelas: elefantíase genital, estenose retal e uretral.',
    'Diferencial da adenopatia: cancro mole (com úlceras dolorosas e purulentas), herpes (bilateral na primoinfecção), donovanose (sem adenite).',
  ], pegadinha: 'A úlcera do LGV é pequena, indolor e some sozinha: quando a paciente chega com a íngua, é preciso perguntar por ela.' },

  // ===================================================== PROVA ANTERIOR (25.2)
  'CIR-23': { tema: 'Queimadura: profundidade, extensão, local de tratamento, via aérea e CO', pontos: [
    '1º grau: eritema e ardor, sem bolhas (não entra na SCQ). 2º superficial: bolhas, base rósea, dor, empalidece. 3º grau: seco, esbranquiçado, endurecido, indolor.',
    'Regra dos nove (adulto): tronco anterior 18%, cada membro superior 9%, cada membro inferior 18%.',
    'Grande queimado: 2º grau acima de 20% no adulto (10% na criança) → centro especializado.',
    'Transferem independentemente da área: face, mãos, pés, genitália, períneo e grandes articulações; químicas; elétricas de alta voltagem.',
    'Via aérea definitiva precoce se estridor, rouquidão, sobrancelhas chamuscadas e escarro carbonáceo em ambiente fechado. Sem esses sinais: oxigênio e reavaliação.',
    'Tontura e cefaleia após incêndio em ambiente fechado: pensar em intoxicação por CO e pedir gasometria arterial.',
  ], pegadinha: 'Saturação de 98% não afasta CO: o oxímetro lê carboxi-hemoglobina como oxi-hemoglobina.' },

  'MEN-21': { tema: 'Anamnese psiquiátrica e transtorno bipolar tipo I (mania)', pontos: [
    'Queixa principal com as palavras do paciente; início e curso dos sintomas.',
    'História psiquiátrica, medicamentos e hábitos de vida (tabaco, álcool, outras substâncias, cafeína).',
    'Impacto funcional: trabalho, finanças, relações.',
    'Antecedentes familiares: transtornos mentais, suicídio, dependência química.',
    'Pergunta direta sobre ideação suicida: não aumenta o risco e é indispensável.',
    'EEM: aparência, comportamento, fala, humor e afeto, pensamento, sensopercepção, cognição, insight e julgamento.',
    'Na prova 25.2: mania com prejuízo funcional + tia com transtorno bipolar → transtorno bipolar tipo I, episódio maníaco; explicar à paciente e ao acompanhante.',
  ], pegadinha: 'O irmão "lá fora" que não entra na sala não é alucinação: siga explicando como se ele estivesse presente.' },

  'FAR-19': { tema: 'AINEs: mecanismo, efeitos, riscos e uso racional', pontos: [
    'Inibem a COX-1 e a COX-2 e reduzem a produção de prostaglandinas.',
    'Efeitos analgésico, antitérmico e anti-inflamatório; analgesia em 1–2 h, anti-inflamatório pleno em 2–3 semanas.',
    'Gastrointestinal: menos prostaglandinas protetoras da mucosa (gastrite, úlcera, sangramento); maior nos não seletivos.',
    'Renal: inibição das prostaglandinas vasodilatadoras renais; piora com diurético.',
    'Cardiovascular: coxibes menos seguros; naproxeno é o mais seguro desse ponto de vista.',
    'Uso racional: só com indicação e pelo tempo necessário; paracetamol é primeira linha na dor leve a moderada.',
  ], pegadinha: 'Pergunte se ainda há dor: na prova 25.2 a paciente nem tinha mais dor, e a conduta era suspender.' },

  'EPI-21': { tema: 'Caso-controle, odds ratio e intervalo de confiança', pontos: [
    'Para classificar, pergunte como os participantes foram escolhidos: no caso-controle, pela doença.',
    'Parte do desfecho e investiga a exposição no passado, com controles comparáveis.',
    'Vantagens: rápido e adequado a doenças raras. Limitação clássica: viés de memória.',
    'Medida: odds ratio (chance de exposição entre casos ÷ entre controles). Não se calcula risco relativo.',
    'IC 95% que não inclui o 1: associação estatisticamente significativa; amplitude grande = estimativa imprecisa.',
    'Um estudo observacional mostra associação, não prova causalidade sozinho.',
  ], pegadinha: 'Usar dados do passado não faz um estudo ser caso-controle: o que decide é a seleção pela doença.' },

  'MUL-15': { tema: 'Vulvovaginite: anamnese dirigida e candidíase', pontos: [
    'Anamnese do corrimento: cor, odor, consistência, quantidade, sintomas associados e fatores de piora.',
    'Antecedentes ginecológicos, episódios prévios, consultas e tratamentos anteriores, história sexual, contracepção e gestação.',
    'Candidíase: branco grumoso (leite talhado), sem odor, prurido, disúria, dispareunia; pH < 4,5; aminas negativas.',
    'Diferenciais: vaginose bacteriana (acinzentado, odor de peixe, pH > 4,5) e tricomoníase (amarelo-esverdeado, bolhoso).',
    'Tratamento: fluconazol 150 mg dose única (não em gestantes) ou miconazol creme vaginal por 7 noites.',
    'Não é IST; parceiro assintomático não precisa tratar, mas deve ser avaliado se tiver sintomas.',
  ], pegadinha: 'Na prova 25.2, alguns atores responderam como vaginose: o diagnóstico tem que seguir as respostas.' },

  // ===================================================== SAÚDE DA MULHER — CICLO MENSTRUAL
  'MUL-16': { tema: 'Fases do ciclo e ovulação', pontos: [
    'D1 = primeiro dia da menstruação.',
    'Ovário: folicular, ovulatória e lútea. Endométrio: menstrual, proliferativa e secretora. Folicular ↔ proliferativa; lútea ↔ secretora.',
    'Estradiol > 200 pg/mL por 36–48 h → feedback positivo → pico de LH.',
    'Ovulação cerca de 36 h após o início do pico de LH (~12 h após o ápice); prostaglandinas e colagenases rompem o folículo.',
    'Fase lútea fixa (~14 dias); a folicular varia. Ovulação ≈ duração do ciclo − 14.',
    'Ultrassom: folículo pré-ovulatório > 18 mm; endométrio trilaminar de 8 a 10 mm.',
  ], pegadinha: 'Ovulação no dia 14 só vale para ciclo de 28 dias.' },

  'MUL-17': { tema: 'Amenorreia por alteração da pulsatilidade do GnRH', pontos: [
    'O GnRH pulsátil comanda FSH e LH; a liberação contínua causa downregulation.',
    'Moduladores do eixo: exercício intenso (endorfinas elevadas), estresse, anorexia/bulimia, hiperprolactinemia/fármacos, hipotireoidismo.',
    'Neurotransmissores inibitórios: endorfinas e dopamina. Excitatórios: glutamato, neuropeptídeo Y, noradrenalina.',
    'Sem pulsos adequados: sem folículo dominante, sem ovulação, estrogênio baixo.',
    'Deficiência estrogênica: osteoporose, aterosclerose, atrofia urogenital e mamária.',
  ], pegadinha: 'Não menstruar não é "bom para o treino": é sinal de estrogênio baixo e osso em risco.' },

  'MUL-18': { tema: 'Contracepção hormonal combinada e reserva ovariana', pontos: [
    'Estrogênio + progestagênio exógenos → feedback negativo sobre FSH e LH → sem folículo dominante e sem pico de LH.',
    'Folículos: 6–8 milhões com 18–20 semanas de gestação; 1–2 milhões ao nascer; 300–500 mil na puberdade.',
    'Cerca de 1.000 folículos sofrem atresia a cada ciclo; menopausa é o esgotamento da reserva.',
    'A perda folicular é principalmente por apoptose.',
    'Foliculogênese: primordial, primário, secundário (teca; passa a responder às gonadotrofinas), terciário (antro), Graaf.',
  ], pegadinha: 'A pílula não guarda óvulos nem atrasa a menopausa: nada freia a perda folicular.' },

  'MUL-19': { tema: 'Ciclos anovulatórios', pontos: [
    'Sem pico efetivo de LH → sem ovulação → sem corpo lúteo → sem progesterona.',
    'Estrogênio sem oposição da progesterona → proliferação endometrial exacerbada.',
    'Sem fase secretora e sem queda hormonal cíclica, a descamação é desorganizada.',
    'Riscos: sangramento irregular, hiperplasia endometrial e câncer de endométrio.',
    'Ambiente androgênico inibe a maturação folicular e favorece a atresia.',
  ], pegadinha: 'Risco de câncer de endométrio não é diagnóstico de câncer: explique sem assustar.' },

  'MUL-20': { tema: 'Esteroidogênese: duas células, duas gonadotrofinas', pontos: [
    'Todos os esteroides sexuais vêm do colesterol.',
    'Teca (LH): colesterol → pregnenolona → progesterona → androgênios.',
    'Granulosa (FSH): aromatase converte os androgênios da teca em estrogênios.',
    'E2: principal ovariano. E1: conversão periférica (adiposo, músculo, fígado). E3: placentário.',
    'Dominância: FSH preferencial → aromatase → estrogênio → mais receptores de FSH e LH; o dominante cresce com FSH baixo.',
    'Atresia dos demais: antimülleriano + inibina B; estrogênio e inibina B fazem feedback negativo sobre o FSH.',
  ], pegadinha: 'A aromatase está na granulosa, não na teca.' },

  'MUL-21': { tema: 'Ciclo endometrial e ultrassom', pontos: [
    'Camada basal regenera; camada funcional descama.',
    'Proliferativa (estrogênio): mitoses, proliferação glandular e estromal, vasos, receptores de progesterona; trilaminar, 8–10 mm no pré-ovulatório.',
    'Secretora (progesterona): tortuosidade e secreção glandular, glicogênio, arteríolas espiraladas; hiperecogênico, 10–15 mm.',
    'Finalidade: implantação e nutrição do blastocisto.',
    'Menstruação: luteólise → queda de progesterona e estrogênio → vasoespasmo das arteríolas espiraladas → isquemia → descamação.',
    'Queda hormonal retira o feedback negativo: o FSH sobe e recruta novos folículos.',
  ], pegadinha: 'Endométrio trilaminar é fase proliferativa (pré-ovulatória), não secretora.' },

  'MUL-22': { tema: 'Corpo lúteo, luteólise e hCG', pontos: [
    'Corpo lúteo: células foliculares remanescentes após a ovulação.',
    'Produz principalmente progesterona, além de estrogênio e inibina A; inibe o eixo.',
    'Sem gravidez: luteólise em ~14 dias → corpo albicans → queda hormonal → menstruação.',
    'Com gravidez: hCG do sinciciotrofoblasto age nos receptores de LH e mantém o corpo lúteo até a 10ª–12ª semana.',
    'Fase lútea fixa porque depende da vida do corpo lúteo.',
  ], pegadinha: 'O corpo lúteo não dura a gestação toda: é mantido até a 10ª–12ª semana.' },

  'MUL-23': { tema: 'Menopausa e deficiência estrogênica', pontos: [
    'Menopausa: esgotamento da reserva folicular.',
    'Sem estradiol e inibina, some o feedback negativo: FSH e LH elevados.',
    'Aumento de noradrenalina, dopamina e prostaglandinas: fogachos, insônia, depressão.',
    'Longo prazo: osteoporose, aterosclerose, atrofia de útero, vagina e mamas.',
  ], pegadinha: 'FSH alto na menopausa não é ovário funcionando: é a hipófise sem resposta do ovário.' },

  'MUL-24': { tema: 'Eixo hipotálamo–hipófise–ovário', pontos: [
    'Hipotálamo (diencéfalo, 3º ventrículo): GnRH pulsátil; eixo bloqueado até a puberdade.',
    'Fase folicular: pulsos frequentes e de baixa amplitude (FSH). Lútea: menos frequentes e de alta amplitude (LH).',
    'Adeno-hipófise (sela túrcica, haste, sistema porta): FSH (crescimento folicular, aromatase) e LH (luteinização, androgênios, ovulação).',
    'Feedback negativo: estrogênio e inibina B (folicular); progesterona, estrogênio e inibina A (lútea).',
    'Feedback positivo: estradiol > 200 pg/mL por 36–48 h → pico de LH.',
    'Neurotransmissores: glutamato, NPY e noradrenalina estimulam; endorfinas e dopamina inibem.',
  ], pegadinha: 'GnRH contínuo não estimula: bloqueia, por downregulation dos receptores.' },
};
