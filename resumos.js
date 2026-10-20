// Resumo do assunto de cada estação, para revisar depois do feedback ou pelo catálogo.
// Conteúdo restrito aos slides e ao banco de questões das disciplinas.
const RESUMOS = {
  // ===================================================== CLÍNICA CIRÚRGICA
  'CIR-01': { tema: 'Queimadura no adulto: SCQ, reposição pelo ATLS e transferência', pontos: [
    'Profundidade: 1º grau (epiderme) eritema e ardor, sem flictenas; 2º superficial (derme papilar) flictenas, róseo, úmido, muito doloroso, branqueia; 2º profundo (derme reticular) mais pálido e seco, menos dor; 3º grau seco, esbranquiçado, inelástico, aspecto de couro, indolor. "A flictena é o divisor."',
    'Regra dos nove (adulto): cada membro superior 9%; tronco anterior 18%; tronco posterior 18%; cada membro inferior 18%; genitália 1%. A palma da mão do paciente vale 1%. O 1º grau não entra na SCQ.',
    'No hospital (ATLS 11ª ed.): 2 mL × peso × %SCQ ÷ 16 = mL/h de Ringer lactato aquecido, reavaliado de hora em hora.',
    'Quem manda é a meta de diurese: 0,5 mL/kg/h no adulto (30–50 mL/h). A fórmula só dá o ponto de partida.',
    'Parkland (aparece em questões): 4 mL × peso × %SCQ em 24 h, metade nas primeiras 8 h contadas da queimadura, descontando o pré-hospitalar. Taxa pré-hospitalar: ≥ 14 anos 500 mL/h.',
    'Transferência: qualquer espessura total; espessura parcial ≥ 10%; face, mãos, pés, genitália, períneo ou grandes articulações; suspeita de inalação; químicas; elétricas de alta voltagem.',
    'Antitetânica em todos. Sem antibiótico sistêmico profilático. Água corrente em temperatura ambiente, prevenir hipotermia.',
  ], pegadinha: 'A diurese abaixo da meta pede aumento da taxa: não basta acertar a conta inicial.' },

  'CIR-02': { tema: 'Avaliação pré-operatória: ASA, risco cardiovascular e exames', pontos: [
    'O objetivo é estimar e otimizar o risco, e não aplicar exames de forma padronizada e indiscriminada.',
    'ASA: I saudável; II doença sistêmica leve; III doença sistêmica grave; IV ameaça constante à vida; V moribundo; VI morte encefálica, doador. Sufixo E: emergência.',
    '1º degrau, risco da cirurgia: baixo (mama, tireoide, pele, oftalmologia, endoscopias) libera; alto (aorta, pâncreas, fígado, vias biliares, esôfago, pulmão, adrenal, transplantes) pede teste cardíaco; intermediário vai ao Lee.',
    '2º degrau, Lee: DAC, AVC/AIT, creatinina > 2, diabetes com insulina, insuficiência cardíaca, operação de grande porte. 0–1 libera; 2 avalia capacidade funcional; 3–6 teste cardíaco.',
    '3º degrau: 4 METs ou mais (subir dois lances de escada) libera; menos de 4, teste cardíaco.',
    'Exames: < 40 anos nada; 40–49 ECG para homens; 50–65 ECG + hematócrito; > 65 ECG + hematócrito + ureia/creatinina + glicemia + eletrólitos. RX de tórax: > 20 maços-ano, IMC > 40, pneumopatia, > 65 anos.',
    'Otimização: parar de fumar pelo menos 4–8 semanas antes.',
  ], pegadinha: 'Com 2 fatores no índice de Lee não se pede teste cardíaco direto: primeiro se avalia a capacidade funcional.' },

  'CIR-03': { tema: 'Antibioticoprofilaxia cirúrgica', pontos: [
    'Cinco perguntas: indicação, agente (cobre a microbiota provável?), dose (ajustada ao peso?), momento e repique, duração.',
    'Cirurgia limpa dispensa profilaxia, exceto quando o risco ou a consequência justificam: prótese, cirurgia cardíaca, vascular ou neurocirurgia.',
    'Cefazolina é a referência: 2 g EV até 120 kg; 3 g acima de 120 kg.',
    'Alergia relevante a betalactâmicos: clindamicina ou vancomicina (cobertura principalmente Gram-positiva).',
    'O relógio: na indução, até 60 minutos antes da incisão; repicar a cada ~2 meias-vidas ou se houver sangramento importante; suspender em até 24 h.',
    'Colorretal ou obstrução: ceftriaxona + metronidazol; alternativa em monoterapia: cefoxitina.',
    'A profilaxia não substitui técnica, não esteriliza o campo e não trata infecção estabelecida.',
  ], pegadinha: 'Antes de prescrever cefazolina, pergunte sobre alergia: anafilaxia à penicilina muda o esquema.' },

  'CIR-04': { tema: 'Infecção de sítio cirúrgico superficial', pontos: [
    'Superficial (30 dias): pele e subcutâneo; pus superficial, dor, edema, calor ou eritema. Tratamento: drenagem ± antibiótico.',
    'Profunda (30 dias, ou 1 ano com prótese): fáscia e músculo; pus profundo, deiscência com febre > 38 °C ou abscesso. Drenagem + antibiótico.',
    'Órgão/cavidade (30 dias, ou 1 ano com prótese): pus pelo dreno, febre, distensão, abscesso. Drenagem percutânea ou cirúrgica + antibiótico.',
    'Duas formas de diagnosticar: cultura positiva ou opinião do cirurgião.',
    'Na superficial, considerar antibiótico se imunossupressão, repercussão sistêmica, necrose ou risco de sequelas importantes.',
    'A ferida aberta fecha por segunda intenção. Fatores do paciente: diabetes, obesidade, tabagismo, imunossupressão. Glicemia perioperatória de 140–180 mg/dL.',
  ], pegadinha: 'Antibiótico sem drenar não resolve a ISC superficial: o tratamento é a drenagem.' },

  'CIR-05': { tema: 'REMIT: resposta endócrino-metabólica e imunológica ao trauma', pontos: [
    'A cirurgia também é trauma. Três vias disparam a resposta: inflamatória, receptores de pressão (hipovolemia) e dor. O objetivo é ofertar glicose, água e oxigênio.',
    'Sobe: ADH (retém água: oligúria), GH, glucagon, cortisol, catecolaminas, aldosterona (retém sódio e água, libera K⁺ e H⁺). Cai: insulina, T3, T4, testosterona.',
    'Catecolaminas: taquicardia, vasoconstrição e atonia intestinal. TNF-α: anorexia (o TGI não é prioridade). IL-1: temperatura discretamente elevada, como 37,8 °C.',
    'Catabolismo: glicogenólise (12–24 h) → lipólise (principal) → proteólise; lipólise + proteólise = gliconeogênese.',
    'Fases: ebb (2–3 dias, baixo fluxo, hipometabolismo) e flow (hiperdinâmica, hipermetabolismo).',
    'Ajudar atuando nos gatilhos: analgesia; SG 5% ~2.000 mL no jejum; avaliar sonda, opioide e hidratação antes de dar volume. Evitar hiperidratar o oligúrico: edema de ferida.',
    'Taquicardia muitas vezes é dor, mas vigiar infecção e deiscência.',
  ], pegadinha: 'Oligúria no 1º pós-operatório nem sempre é falta de volume: pode ser a REMIT segurando água e sódio.' },

  'CIR-06': { tema: 'Febre pós-operatória e ISC de órgão/cavidade', pontos: [
    '24–72 h: REMIT (febre baixa), atelectasia, reações a medicamentos ou transfusão, infecção preexistente.',
    'Após 72 h: infecção da ferida ou do sítio cirúrgico, infecção urinária, pneumonia, TVP/TEP, flebite.',
    'Após 5–7 dias: abscessos e coleções, deiscências, fístulas.',
    'O tempo orienta a investigação, mas não determina sozinho a causa.',
    'Ferida limpa não exclui foco profundo: abdome distendido e doloroso após anastomose sugere ISC de órgão/cavidade.',
    'Coleção: drenagem percutânea ou cirúrgica + antibioticoterapia, cobrindo Gram-negativos e anaeróbios do cólon.',
  ], pegadinha: 'A profilaxia não impede toda ISC: no infectado, o antibiótico é tratamento, junto com o controle do foco.' },

  'CIR-07': { tema: 'Checklist de cirurgia segura (OMS)', pontos: [
    'Sign in, antes da indução anestésica: identidade, sítio/lateralidade marcados com o paciente acordado, procedimento, consentimento e alergias.',
    'Time out, antes da incisão: confirmação verbal. Cirurgião: passos críticos, duração e perda sanguínea. Anestesista: preocupações. Enfermagem: esterilização e equipamentos. Horário do antibiótico.',
    'Sign out, antes de sair da sala: contagem de compressas e instrumentais e recomendações pós-operatórias.',
    'Contagem divergente: revisão sistemática e, se não localizar, imagem intraoperatória antes de fechar.',
    'Anafilaxia no perioperatório: bloqueadores neuromusculares, látex e indutores. Investigar alergias, registrar e evitar o agente.',
    'Impacto: complicações de ~11% para 7% e mortalidade de 1,5% para 0,8%.',
  ], pegadinha: 'O sign in é antes da indução anestésica; antes da incisão é o time out.' },

  'CIR-08': { tema: 'Melanoma: ABCDE, Breslow e linfonodo sentinela', pontos: [
    'Origem nos melanócitos, com grande capacidade de metástase mesmo no início. Fatores: melanoma prévio, muitos nevos ou nevos atípicos, história familiar, queimaduras solares na infância, bronzeamento artificial.',
    'ABCDE: Assimetria, Bordas irregulares, Cores variadas, Diâmetro > 6 mm, Evolução.',
    'Anamnese e exame → lesão suspeita → dermatoscopia → biópsia excisional com margem de 1–3 mm, na direção da drenagem linfática. Incisional ou punch é exceção.',
    'Margem pelo Breslow: in situ 0,5–1 cm; até 1 mm, 1 cm; 1,01–2 mm, 1–2 cm; > 2 mm, 2 cm.',
    'Linfonodo sentinela: Breslow > 1 mm, ulceração, alto índice mitótico ou invasão linfovascular. Linfonodo alterado ao exame: PAAF ou core biopsy.',
    'Subtipos: disseminativo superficial (70%), nodular (rápido e vertical, nem sempre segue o ABCDE), lentigo maligno (idoso, dano solar), acral lentiginoso (palma, planta, unhas; sinal de Hutchinson).',
  ], pegadinha: 'Margem livre na biópsia não encerra o tratamento: ainda é preciso ampliar a margem pelo Breslow.' },

  'CIR-09': { tema: 'Carcinoma basocelular, espinocelular e ceratose actínica', pontos: [
    'CBC: ~80% dos tumores cutâneos em pele clara; células basais do folículo piloso; perolado, telangiectasias, crosta que o paciente arranca; 2/3 superiores da face (30% no nariz); indolor, sem adenopatia; metástase rara.',
    'CEC: queratinócitos da camada espinhosa; lábio inferior, orelha, couro cabeludo; não cicatriza e sangra; metástase em 0,5–6%. Fatores: sol, sexo masculino, idade, pele clara, imunossupressão, tabagismo, ceratose actínica.',
    'Ceratose actínica: pele clara, > 50 anos, sol; placas com escamas aderentes; pode progredir para CEC invasivo. Doença de Bowen: CEC in situ.',
    'Excisão cirúrgica é o padrão-ouro: CBC 3–4 mm (baixo risco); CEC 4–6 mm ou mais. Mohs na face/alto risco. Sistêmica: vismodegibe (CBC avançado), imuno/quimioterapia (CEC metastático).',
    'Prevenção principal: proteção à exposição solar.',
  ], pegadinha: 'O CBC é o mais comum, mas o CEC tem mais chance de metástase e por isso pede margem maior.' },

  'CIR-10': { tema: 'Queimadura na criança', pontos: [
    'Regra dos nove adaptada: cabeça ≈ 18% e cada membro inferior ≈ 14%. O padrão-ouro em pediatria é a tabela de Lund-Browder.',
    'Grande queimado na criança: 2º grau acima de 10% da SCQ (no pré-hospitalar, mais de 10% já indica Ringer lactato).',
    'ATLS na criança (< 14 anos): 3 mL × peso × %SCQ ÷ 16 = mL/h, com meta de diurese de 1 mL/kg/h.',
    'Taxa pré-hospitalar: até 5 anos 125 mL/h; 6–13 anos 250 mL/h.',
    'Transferência: espessura parcial ≥ 10%, regiões nobres (face, mãos, pés, genitália, períneo, grandes articulações), idade pediátrica.',
    'Água corrente em temperatura ambiente por ~20 minutos; gelo aprofunda a lesão e causa hipotermia. Antibiótico tópico, não sistêmico.',
  ], pegadinha: 'Usar os valores do adulto na criança: na criança a cabeça vale mais, o membro inferior vale menos e o coeficiente da fórmula é 3.' },

  'CIR-11': { tema: 'Medicações no perioperatório', pontos: [
    'Manter: betabloqueador, bloqueador de canal de cálcio, estatina, metimazol/PTU, levotiroxina, psicotrópicos, inalatórios e corticoides.',
    'IECA e BRA: suspender no dia da cirurgia (ponto polêmico).',
    'AAS: manter no risco coronariano moderado a alto (ex.: stent), salvo se o risco de sangramento superar o de evento; quando indicada a suspensão, 7–10 dias.',
    'Diabetes: insulina com metade da dose pela manhã, alvo 140–180 mg/dL; metformina na manhã, 24 h ou 48 h; sulfonilureia 24 h; SGLT2 3–4 dias; DPP-4 manter.',
    'GLP-1 e duais GLP-1/GIP: dieta líquida 24 h + jejum de 8 h + POCUS gástrico (risco de broncoaspiração).',
    'Clopidogrel e varfarina: 5 dias. HNF: 6 h. HBPM: 24 h. Anticoagulante oral direto: 24 h (48 h na DRC). Retomar após 24 h.',
    'Ginkgo biloba 36 h; erva-de-são-joão 5 dias; alho e ginseng 7 dias; anticoncepcional oral 4 semanas.',
  ], pegadinha: 'Pergunte por produtos naturais: o ginkgo biloba quase nunca vem na sacola de remédios.' },

  'CIR-12': { tema: 'Jejum e protocolo ERAS/ACERTO', pontos: [
    'O jejum reduz o risco de broncoaspiração: 2 h líquidos claros e medicamentos sem resíduos; 6 h refeição leve, leite não humano ou fórmula; 8 h ou mais frituras, gordura e carne.',
    'Jejum prolongado causa desidratação, hipoglicemia e abstinência de cafeína. Líquido claro com maltodextrina até 2 h antes atenua a resistência à insulina.',
    'Intraoperatório: fluido restritivo, guiado por meta; glicemia de 140–180 mg/dL; analgesia multimodal (opioide como base causa íleo, náusea e sedação).',
    'Normotermia 36,5–37,5 °C; hipotermia < 35 °C central. Prevenir: monitorizar, limitar exposição, cobertores, meias e toucas, aquecimento ativo, sala a 20–23,8 °C. A maior queda é na 1ª hora.',
    'Pós-operatório: alimentação precoce, sem esperar gases; deambulação no dia da cirurgia; sonda nasogástrica e dreno não são de rotina.',
  ], pegadinha: 'Café com leite conta como leite: 6 horas de jejum, não 2.' },

  'CIR-13': { tema: 'Prevenção da ISC', pontos: [
    'O risco nasce do encontro entre paciente vulnerável e procedimento favorável à infecção.',
    'Paciente: diabetes/hiperglicemia, obesidade ou desnutrição, tabagismo, imunossupressão, infecção ativa à distância, ASA ≥ 3.',
    'Procedimento: maior contaminação e duração, quebra de técnica asséptica, trauma tecidual e necrose, hematoma e espaço morto, hipoperfusão e hipotermia.',
    'Antes: banho, tratar infecção remota, glicemia, tabagismo, pelos só se necessário (aparador elétrico, perto do procedimento). Durante: antissepsia, técnica, antibiótico no tempo correto, normotermia, controle glicêmico. Depois: curativo, higiene das mãos, vigilância, sinais de alerta.',
    'Fonte principal: a microbiota do próprio paciente (endógena); exógena: mãos, instrumentais e ambiente.',
    'Classificação: superficial, profunda e órgão/cavidade; 30 dias, ou até 1 ano com prótese.',
  ], pegadinha: 'Infecção urinária ativa é infecção à distância: precisa ser tratada antes de implantar a prótese.' },

  'CIR-14': { tema: 'Cicatrização de feridas', pontos: [
    'Primeira intenção: sutura, sem perda significativa, infecção nem edema. Segunda: sem sutura, por granulação (grande perda). Terceira (fechamento primário retardado): reaproximar em 3–7 dias, em feridas contaminadas, com grande perda ou muita tensão.',
    'Fase inflamatória: vasoconstrição + trombo, depois vasodilatação (histamina, serotonina, bradicinina). Neutrófilos primeiros e substituíveis; macrófagos "maestros", essenciais; linfócitos tardios.',
    'Fase proliferativa: angiogênese (TNF-α), granulação, epitelização, fibroplasia a partir de ~48 h (TGF-β, colágeno). Maturação: a partir de ~1 semana, miofibroblastos e colagenase.',
    'Contaminação (sem replicação) × colonização (replicação sem dano) × colonização crítica × infecção (replicação com dano).',
    'Prejudicam: hipóxia, necrose, infecção, idade, diabetes, glicocorticoides (sobretudo nos 3 primeiros dias), AINE, quimioterapia, radioterapia, obesidade, álcool, tabagismo, desnutrição (proteínas, vitaminas A e C, zinco, selênio; albumina < 2 g/dL).',
    'Trauma com tratamento tardio (> 6 h) e tecido desvitalizado é classificado como infectado.',
  ], pegadinha: 'A cicatriz hipertrófica respeita os limites e pode regredir (após 1 mês); o queloide ultrapassa as bordas, surge após 3 meses e não melhora.' },

  'CIR-15': { tema: 'Queimadura elétrica e rabdomiólise', pontos: [
    'A corrente segue o trajeto de menor resistência e queima de dentro para fora: entrada e saída pequenas, destruição muscular extensa; a SCQ visível subestima.',
    'Reposição: 4 mL × peso × %SCQ ÷ 16 mL/h, com meta de diurese de 1–1,5 mL/kg/h até a urina clarear. O coeficiente 4 é porque a necrose muscular sequestra mais volume.',
    'Rabdomiólise: urina escura, CPK muito elevada, hipercalemia; fita positiva para sangue com sedimento sem hemácias = mioglobinúria; evolui para NTA e IRA. Considerar manitol e bicarbonato.',
    'Síndrome compartimental: diagnóstico clínico; dor desproporcional, pior à extensão passiva → fasciotomia. Não esperar perda de pulso, palidez ou cianose (tardios).',
    'Alta voltagem (≥ 1.000 V) e raio: transferência, ECG e monitorização por arritmia. Baixa voltagem: avaliar seguimento (sintomas tardios e visuais).',
  ], pegadinha: 'Pulso presente não afasta síndrome compartimental.' },

  'CIR-16': { tema: 'Queimadura química', pontos: [
    'Retirar roupas e agentes; se for pó, escovar a seco antes de molhar.',
    'Irrigar com água abundante (15–20 L) até pH 7–7,5: a meta é o pH, não o volume.',
    'Nunca neutralizar: a reação é exotérmica e aprofunda a lesão.',
    'Ácido: necrose de coagulação, que forma barreira e se autolimita. Álcali (mais grave): necrose de liquefação, que penetra e avança.',
    'Toda queimadura química é transferida para centro especializado.',
    'Zonas de Jackson: necrose (irreversível), estase (viável, em risco: é onde o volume age) e hiperemia (recupera sozinha).',
  ], pegadinha: 'Neutralizar com vinagre parece lógico, mas piora a queimadura.' },

  'CIR-17': { tema: 'Grande queimado em ambiente fechado: X-ABCDE, inalação, CO e cianeto', pontos: [
    'Começar pelo X-ABCDE: a queimadura é a lesão mais visível e a menos urgente dos primeiros minutos.',
    'Via aérea definitiva: estridor ou rouquidão, musculatura acessória, vibrissas queimadas, escarro carbonáceo, queimadura extensa de face e orofaringe, cervical circunferencial, disfagia ou sialorreia, Glasgow < 9, SCQ > 40%. Não esperar o estridor.',
    'Tórax com escara circunferencial de espessura total e ventilação difícil: escarotomia de emergência, até o subcutâneo (sem anestesia no 3º grau).',
    'Hipotensão na chegada não é da queimadura: procurar hemorragia e trauma. Ringer lactato aquecido titulado pela diurese.',
    'CO: cefaleia, náusea, confusão, coma; dosar carboxi-hemoglobina; O₂ a 100% em máscara não reinalante (câmara hiperbárica). SatO₂ normal não afasta.',
    'Cianeto (material sintético): rebaixamento, hipotensão, acidose lática refratária → hidroxocobalamina + tiossulfato de sódio.',
    'Inalação: padrão-ouro diagnóstico é a broncoscopia; antibiótico só com pneumonia instalada.',
  ], pegadinha: 'Acidose lática que não melhora com volume, num incêndio de material sintético, é cianeto até prova em contrário.' },

  'CIR-18': { tema: 'Profilaxia de tromboembolismo venoso', pontos: [
    'Caprini: 0 deambulação precoce; 1–2 deambulação ou mecânica; 3–4 farmacológica OU mecânica; ≥ 5 farmacológica E mecânica.',
    'Farmacológica: enoxaparina 40 mg SC 1x/dia ou HNF 5.000 UI SC a cada 8–12 h. Mecânica: meias de compressão graduada, compressão pneumática intermitente e deambulação.',
    'Considerar o risco de sangramento e reavaliar o risco durante a internação.',
    'Cirurgia oncológica abdominal ou pélvica: profilaxia estendida por 28 dias.',
    'Febre após 72 h de pós-operatório: lembrar de TVP/TEP.',
  ], pegadinha: 'Na cirurgia oncológica abdominal, a profilaxia não termina na alta.' },

  'CIR-19': { tema: 'Retenção urinária e íleo pós-operatório', pontos: [
    'Globo vesical após raquianestesia e opioide: retenção urinária. Cateterizar e reavaliar a micção.',
    'Distensão difusa de delgado e cólon, sem níveis hidroaéreos, em paciente estável: íleo funcional. Deambulação, dieta conforme aceitação, antiemético.',
    'Atonia intestinal e anorexia: catecolaminas e opioides endógenos da REMIT; opioide exógeno como base da analgesia piora o íleo.',
    'Náuseas e vômitos: risco de broncoaspiração, desidratação e distúrbio hidroeletrolítico.',
    'Dor e febre: dipirona e paracetamol; AINE com cautela (cicatrização, rim, pressão).',
  ], pegadinha: 'Distensão difusa sem níveis hidroaéreos não é obstrução mecânica e não indica reoperação.' },

  'CIR-20': { tema: 'Consentimento informado e autonomia', pontos: [
    'Consentimento = comunicação + decisão + registro.',
    'Evitar: formulário genérico, linguagem incompreensível, omitir riscos, complicações e alternativas, colher assinatura sem conversa ou imediatamente antes do procedimento.',
    'Registrar que paciente e familiares compreenderam as opções clínicas e cirúrgicas e participaram da decisão.',
    'Autonomia como variável de segurança: o paciente participa e confirma informações, como na marcação do sítio com ele acordado.',
    'O sign in confere o termo de consentimento.',
  ], pegadinha: 'Termo assinado não é sinônimo de consentimento informado.' },

  'CIR-21': { tema: 'Segurança do paciente e evento adverso', pontos: [
    'Nem todo evento adverso é erro médico: a maioria é falha de sistema, com barreiras falhando alinhadas (modelo do queijo suíço).',
    'Imperícia: falta de conhecimento técnico. Imprudência: agir sem cautela. Negligência: omissão.',
    'Variáveis de segurança: metas mensuráveis, transparência sem cultura de punição, comunicação efetiva, autonomia do paciente, profissionalismo e educação continuada.',
    'O time out é a barreira de confirmação verbal antes da incisão; a marcação do sítio é feita com o paciente acordado.',
    'Checklist da OMS: complicações de ~11% para 7%; mortalidade de 1,5% para 0,8%.',
  ], pegadinha: 'Imprudência é fazer o que não devia; negligência é deixar de fazer o que devia.' },

  'CIR-22': { tema: 'Lesões cutâneas benignas e corno cutâneo', pontos: [
    'Lipoma: nódulo subcutâneo único ou múltiplo, não doloroso, amolecido, móvel.',
    'Cisto sebáceo (epidermoide): móvel, com pequeno orifício; à expressão, material caseoso de cheiro rançoso; origem em folículo pilossebáceo roto.',
    'Acrocórdons (fibromas moles): pedunculados, moles, 1–5 mm, axilas, virilhas e pescoço; sem potencial maligno; obesidade e síndrome metabólica.',
    'Ceratose seborreica: acastanhada, > 1 cm, rugosa, aspecto graxento, benigna. Dermatofibroma: nódulo intradérmico bastante firme, após microtrauma.',
    'Granuloma piogênico: vascular, friável, sangra ao menor trauma, sem pus. Hemangioma: propranolol. Neurofibroma: bainha de Schwann. Calosidade: hiperceratose por atrito.',
    'Corno cutâneo: o corno em si não é diagnóstico; o que importa é a base, que deve ser biopsiada.',
  ], pegadinha: 'O granuloma "piogênico" não tem pus nem infecção.' },

  'CIR-24': { tema: 'Complicações intraoperatórias: hipertermia maligna, anafilaxia e hipotermia', pontos: [
    'Reconhecer na sala: infarto, embolia pulmonar, pneumotórax, lesão vascular, cirurgia em local errado, hipertermia maligna, anafilaxia e alergia ao látex.',
    'Hipertermia maligna (inalatório + succinilcolina): rigidez de masseter, taquicardia, EtCO₂ subindo, hipertermia.',
    'Conduta: suspender o inalatório e a succinilcolina, hiperventilar com O₂ a 100% e dantroleno sódico 2,5 mg/kg IV.',
    'Anafilaxia: alterações cutâneas, broncoespasmo, hipotensão, edema de glote. Agentes: bloqueadores neuromusculares, látex, indutores. Investigar alergias, registrar, evitar o agente, agir imediatamente.',
    'Normotermia 36,5–37,5 °C; hipotermia < 35 °C central; maior queda na 1ª hora; sala a 20–23,8 °C.',
  ], pegadinha: 'Febre com rigidez e EtCO₂ subindo, sem pele nem broncoespasmo, não é alergia: é hipertermia maligna.' },

  'CIR-25': { tema: 'Potencial de contaminação e antibiótico: profilaxia × tratamento', pontos: [
    'Limpa: tecido estéril, sem entrar em tratos colonizados, técnica preservada (herniorrafia, tireoidectomia, artroplastia primária).',
    'Potencialmente contaminada: entrada controlada em trato respiratório, GI, genital ou urinário (colecistectomia eletiva, gastrectomia, histerectomia).',
    'Contaminada: trauma recente e aberto (até 4–6 h), grande quebra de técnica, extravasamento GI grosseiro, inflamação sem pus (colecistite aguda sem pus, fratura exposta).',
    'Infectada: pus, víscera oca perfurada, contaminação fecal, trauma tardio (> 6 h) ou com tecido desvitalizado. O antibiótico é tratamento + controle de foco.',
    'O intraoperatório pode mudar a classificação prevista. Contaminação não é infecção: o potencial estima risco; a ISC é evento do pós-operatório.',
    'Microbiota: pele, Gram-positivos (S. aureus); cólon, Gram-negativos e anaeróbios (E. coli, B. fragilis). Colorretal: ceftriaxona + metronidazol ou cefoxitina.',
  ], pegadinha: 'Abrir o cólon de forma controlada não é ISC: é cirurgia potencialmente contaminada.' },

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

  // ===================================================== FARMACOLOGIA (anti-histamínicos, descongestionantes e antiasmáticos)
  'FAR-01': { tema: 'Anti-histamínico de 1ª geração: sedação', pontos: [
    'Anti-H1 de 1ª geração: maior penetração no SNC (atravessa a barreira hematoencefálica) → sedação; mais efeitos anticolinérgicos.',
    'Sedação na 1ª geração: difenidramina e prometazina +++; clemastina e dimenidrato ++; dexclorfeniramina e ciproeptadina +. Prometazina também é a mais antiemética (++++).',
    'Medida: trocar por 2ª geração (cetirizina, loratadina, fexofenadina), que não atravessa facilmente a barreira e dá menos sedação.',
    'Anti-H1 funciona melhor preventivo, antes da exposição, do que na crise já instalada.',
    'Bloqueio H1 competitivo e reversível: exposição intensa libera mais histamina e supera o bloqueio.',
    'Controle ambiental (poeira, umidade) complementa o remédio, não o substitui.',
    'Anti-H1 age sobre espirros, coceira e coriza; tem efeito limitado sobre a congestão.',
  ], pegadinha: 'Sono com antialérgico não é "normal de todo antialérgico": é próprio da 1ª geração, e a 2ª geração resolve.' },

  'FAR-02': { tema: 'Anti-histamínico de 1ª geração: efeito anticolinérgico', pontos: [
    'Efeito anticolinérgico da 1ª geração pode causar retenção urinária: clemastina, dimenidrato, difenidramina e prometazina +++; dexclorfeniramina e ciproeptadina ++.',
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
    'Pseudoefedrina (descongestionante sistêmico, oral) é simpaticomimética: até 180 mg não muda de forma mensurável a pressão; doses maiores aumentam a frequência cardíaca e causam hipertensão.',
    'Não deve ser usada em hipertensos; medida: suspender.',
    'Diferente do tópico, é mais lenta, dura mais e não causa rinite medicamentosa nem ressecamento.',
    'Não aumentar o anti-hipertensivo antes de retirar a causa.',
    'Congestão com segurança: corticosteroide nasal.',
    'Descongestionante tópico, se usado, por no máximo 3 a 5 dias.',
  ], pegadinha: 'A pressão que "não responde" pode ser o antigripal, e não o anti-hipertensivo.' },

  'FAR-05': { tema: 'Antileucotrienos: efeitos adversos', pontos: [
    'Antileucotrienos (montelucaste, zafirlucaste): antagonistas dos receptores de leucotrienos, para terapia crônica.',
    'Efeitos adversos descritos: cefaleia, tontura, depressão e insônia (na rinite); dor abdominal (na asma); devem ser monitorados.',
    'Não têm ação imediata e não revertem crise instalada.',
    'Na crise: beta-2 agonista de curta ação inalatório.',
    'Alternativas de controle: corticoide inalatório (asma) e corticosteroide nasal (rinite).',
    'São ativos na asma desencadeada por AINEs.',
  ], pegadinha: 'Mudança de humor num adolescente em uso de montelucaste pode ser o remédio, e não "coisa da idade".' },

  'FAR-06': { tema: 'Anti-histamínicos H1: mecanismo de ação e gerações', pontos: [
    'Antagonistas H1: inibidores competitivos e reversíveis; sem ação imediata, mais eficazes na prevenção.',
    'Bloqueiam espirros, coceira e coriza; efeito limitado na congestão (o corticosteroide nasal é mais eficaz nela).',
    '1ª geração (sedação / anticolinérgico / antiemético): difenidramina +++ / +++ / ++ a +++; prometazina +++ / +++ / ++++; clemastina e dimenidrato ++ / +++ / ++ a +++; dexclorfeniramina e ciproeptadina + / ++ / –.',
    '2ª geração (cetirizina, loratadina, fexofenadina): não atravessa de modo apreciável a barreira hematoencefálica; sem ação no SNC e sem efeitos anticolinérgicos.',
    'Tópicos: azelastina (solução nasal) e levocabastina (spray nasal e colírio).',
    'Bloqueio competitivo: exposição intensa libera mais histamina e supera o bloqueio → uso preventivo e controle ambiental (poeira, umidade abaixo de 50%).',
  ], pegadinha: 'Anti-histamínico não é remédio de crise: tomado depois da exposição, chega tarde à disputa pelo receptor.' },

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

  'FAR-20': { tema: 'Reações adversas no tratamento da rinite', pontos: [
    'Anti-H1 de 1ª geração: sedação (SNC) e efeitos anticolinérgicos (retenção urinária).',
    'Anti-H1 de 2ª geração: menos sedação e sem efeitos anticolinérgicos relevantes.',
    'Descongestionante tópico: rinite medicamentosa após 3 a 5 dias.',
    'Descongestionante sistêmico: aumento da FC e da pressão acima de 180 mg; não usar em hipertensos.',
    'Corticosteroide nasal: controla a congestão sem esses riscos.',
    'Anti-H1: melhor preventivo; bloqueio competitivo e reversível.',
  ], pegadinha: 'Anti-H1 não desentope bem o nariz: congestão pede corticosteroide nasal.' },

  'FAR-21': { tema: 'Anti-H1 de 1ª geração: mecanismo, efeitos, riscos e uso racional', pontos: [
    'Antagonista H1 competitivo e reversível: alivia espirros, coceira e coriza; efeito limitado na congestão.',
    'Sem ação imediata: usar de forma preventiva e regular, não só na crise.',
    '1ª geração: sedação e redução da atenção (atravessa a barreira hematoencefálica) e efeitos anticolinérgicos; dexclorfeniramina e ciproeptadina são as menos sedativas (+), mas ainda sedam.',
    'Medida: trocar por 2ª geração (cetirizina, loratadina, fexofenadina).',
    'Congestão predominante: associar corticosteroide nasal.',
    'Controle ambiental: poeira, tapetes, umidade abaixo de 50%.',
  ], pegadinha: '"Só renovar a receita" é a hora de rever o remédio: o antialérgico antigo seda até entre os menos sedativos da tabela.' },

  'FAR-22': { tema: 'Anti-H1 de 1ª geração: insônia paradoxal', pontos: [
    'Insônia paradoxal: agitação e insônia em vez de sono, efeito central da 1ª geração.',
    '1ª geração atravessa a barreira hematoencefálica; também causa sedação, redução da atenção e efeitos anticolinérgicos.',
    '2ª geração: sem ação relevante no SNC, com eficácia antialérgica semelhante.',
    'Não reintroduzir a classe que já causou a reação.',
    'Uso preventivo e controle ambiental (poeira, umidade abaixo de 50%).',
  ], pegadinha: 'O antialérgico "que dá sono" pode fazer o contrário: o efeito central da 1ª geração também aparece como insônia.' },

  'FAR-23': { tema: 'Congestão: anti-H1, corticoide nasal e descongestionante', pontos: [
    'Anti-H1 bloqueia a histamina (espirros, coceira, coriza), com eficácia limitada na congestão; dobrar a dose não resolve.',
    'Corticoide nasal: inibe a liberação de mediadores, a quimiotaxia de neutrófilos e a permeabilidade vascular, com vasoconstrição; alivia também a congestão, com efeitos colaterais mínimos; pode ser associado ao anti-H1.',
    'Descongestionante tópico (simpaticomimético): no máximo 3 a 5 dias, pelo risco de rinite medicamentosa com congestão rebote.',
    'Descongestionante sistêmico + anti-H1: associação racional (mecanismos diferentes), mas não em hipertensos.',
    'Controle ambiental: animais fora do quarto, poeira, umidade abaixo de 50%.',
  ], pegadinha: 'Nariz entupido apesar do anti-H1 pede corticoide nasal, e não dose dobrada nem spray todo dia.' },

  'FAR-24': { tema: 'Omalizumabe: reações adversas e farmacocinética', pontos: [
    'Anticorpo monoclonal anti-IgE; indicado com IgE sérica elevada e alergia grave sem controle com corticoide, de 11 a 50 anos.',
    'Reações comuns: no local da aplicação, cefaleia, faringite, sinusite, infecção respiratória, doença viral.',
    'Reações sérias: trombocitopenia, anafilaxia e câncer.',
    'Trombocitopenia: suspender e acompanhar as plaquetas, mantendo o corticoide inalatório.',
    'Absorção lenta, biodisponibilidade de 62%, excreção biliar/hepática e meia-vida de cerca de 26 dias: o efeito persiste semanas.',
  ], pegadinha: 'Petéquia não é "a reação local de sempre": plaqueta baixa é reação séria do omalizumabe.' },

  'FAR-25': { tema: 'Antileucotrienos: mecanismo, efeitos, riscos e uso racional', pontos: [
    'Antagonistas dos receptores de leucotrienos (montelucaste, zafirlucaste); os cisteinil-leucotrienos aumentam muco, edema, recrutamento de eosinófilos e contração do músculo liso.',
    'Terapia crônica; opção na asma leve sem glicocorticoide; sem ação imediata.',
    'Reações: na asma, poucas (dor abdominal); na classe, cefaleia, tontura, depressão e insônia, a monitorar.',
    'Na crise: beta-2 de curta ação inalatório; comprimido a mais não ajuda.',
    'Alívio 4 ou mais vezes por semana: indicar corticoide inalatório.',
    'Ativos na asma relacionada ao uso de AINEs.',
  ], pegadinha: 'Antileucotrieno é muro, não bombeiro: não apaga crise.' },

  'FAR-26': { tema: 'Antiasmáticos: mecanismo e reação adversa de cada um', pontos: [
    'Beta-2 agonista: relaxa o músculo liso e estabiliza mastócitos; via oral → taquicardia, tremores e cãibras.',
    'Corticoide inalatório: reverte a inflamação crônica com broncosseletividade; a osteoporose secundária é do oral prolongado.',
    'Teofilina: relaxa o músculo liso; baixo índice terapêutico (cefaleia, tontura, hipotensão, palpitações, náuseas, convulsões, morte súbita).',
    'Ipratrópio: anticolinérgico; associar no broncoespasmo grave em vez de aumentar o beta-2.',
    'Antileucotrieno: cefaleia, tontura, depressão, insônia; na asma, dor abdominal.',
    'Omalizumabe (anti-IgE): reação local, cefaleia, faringite; sérias: trombocitopenia, anafilaxia, câncer.',
    'Salmeterol (longa ação, mais de 12 h): não serve para alívio; entra associado ao corticoide.',
  ], pegadinha: 'Broncoespasmo que não cede: somar o ipratrópio, e não dobrar o salbutamol.' },

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

  'EPI-22': { tema: 'Sistemas de informação em saúde e notificação compulsória', pontos: [
    'Dado = registro bruto; informação = dado organizado e interpretado; indicador = medida que permite avaliar uma situação de saúde.',
    'SINAN (agravos de notificação), SIM (mortalidade, pela declaração de óbito), SINASC (nascidos vivos), SIH (internações), SIA (ambulatorial), SI-PNI (imunização), e-SUS APS e SISAB (atenção primária), CNES (estabelecimentos).',
    'Notificam os profissionais de saúde ou os responsáveis pelos estabelecimentos, conforme o fluxo da vigilância.',
    'Óbitos suspeitos ou confirmados de doenças de notificação imediata (como dengue e febre amarela): aviso em até 24 h. Violência sexual e tentativa de suicídio: atenção prioritária em até 24 h.',
    'Qualidade dos dados: completude, consistência, cobertura, oportunidade, validade e confiabilidade.',
    'Limitações: subnotificação, duplicidade, erro de preenchimento, ausência de informação, mudanças de metodologia, atraso, erros de diagnóstico, diferenças de acesso. Dados no DATASUS/TABNET.',
  ], pegadinha: 'Notificar não é tarefa só da vigilância: começa no profissional que atendeu.' },

  'EPI-23': { tema: 'Medidas de tendência central e de dispersão', pontos: [
    'Variáveis: quantitativas contínuas (peso, glicemia, PA, tempo de internação) e discretas (nº de filhos, de internações); qualitativas nominais (sexo, diagnóstico) e ordinais (escolaridade, faixa etária).',
    'Média: soma ÷ n, sensível a valores extremos. Mediana: valor central dos dados ordenados (n par: média dos dois centrais), resistente a extremos. Moda: valor mais frequente.',
    'Amplitude = máximo − mínimo: simples, mas sensível a extremos.',
    'Variância amostral: s² = Σ(xᵢ − x̄)² ÷ (n − 1), em unidade ao quadrado; desvio-padrão = √s², na unidade original.',
    'Distribuição aproximadamente normal: ±1 DP ≈ 68%; ±2 DP ≈ 95%; ±3 DP ≈ 99,7%.',
    'Quartis dividem os dados em quatro partes; Q2 = mediana; intervalo interquartil = Q3 − Q1 (50% centrais), resistente a extremos.',
  ], pegadinha: 'Uma medida-resumo não precisa coincidir com nenhuma observação: a média de 9 dias pode não ser de ninguém.' },

  'EPI-24': { tema: 'Números absolutos × relativos, transições demográfica e epidemiológica', pontos: [
    'Número absoluto dá a carga e dimensiona serviços; número relativo (razão, proporção, taxa) permite comparar populações de tamanhos diferentes.',
    'Coeficiente de mortalidade geral = óbitos ÷ população × 1.000. Ex.: 1.200/120.000 = 10 por 1.000; 1.650/150.000 = 11 por 1.000.',
    'Transição demográfica: queda da mortalidade, depois da fecundidade (Brasil ≈ 1,6 filho por mulher) → envelhecimento. Pirâmide expansiva (base larga) → regressiva (base estreita).',
    'Transição epidemiológica: das doenças infecciosas para as crônicas não transmissíveis (diabetes, hipertensão, câncer) e as causas externas (violências, acidentes).',
    'O coeficiente geral bruto depende da estrutura etária: para comparar populações com idades diferentes, usar coeficientes por faixa etária.',
    'Impacto no SUS: mais doenças crônicas, cuidados de longa duração, reabilitação, atenção domiciliar e paliativos; reorganizar a APS.',
    'Crescimento vegetativo = nascimentos − óbitos; saldo migratório = imigração − emigração; densidade demográfica = população ÷ área.',
  ], pegadinha: 'Mais óbitos não significa saúde pior: antes, divida pela população e olhe a idade dela.' },

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
    'Também transferem: qualquer espessura total, espessura parcial ≥ 10% e suspeita de lesão inalatória.',
    'Via aérea definitiva precoce se estridor, rouquidão, vibrissas ou sobrancelhas queimadas e escarro carbonáceo em ambiente fechado. Sem esses sinais: O₂ a 100% em máscara não reinalante e reavaliação frequente.',
    'Tontura e cefaleia após incêndio em ambiente fechado: intoxicação por CO; dosar carboxi-hemoglobina na gasometria e manter O₂ a 100%.',
    'Reposição no hospital (ATLS): 2 mL × peso × %SCQ ÷ 16 mL/h, titulada pela diurese (0,5 mL/kg/h).',
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
};
