/* ═══════════════════════════════════════════════════════════════════
   BASE PÚBLICA DE CERTIFICADOS
   Este arquivo fica visível na internet. Não coloque CPF aqui.
   Para atualizar: abra certificado.html, clique em "Baixar
   dados-publicos.js" e substitua este arquivo no repositório.
   ═══════════════════════════════════════════════════════════════════ */
window.DADOS_PUBLICOS = {

  curso: {
    nome:         "Inteligência Artificial Generativa Aplicada ao Financeiro de Shopping Centers",
    trilha:       "Trilha 1 — Programa de Capacitação em Inteligência Artificial",
    cargaHoraria: "20 horas",
    modalidade:   "Híbrido — presencial e remoto",
    periodo:      "02 de julho a 25 de agosto de 2026",
    local:        "Rio de Janeiro / RJ",
    emissao:      "28 de agosto de 2026"
  },

  certificadora: {
    marca:           "Incessantemente",
    assinaturaMarca: "Inteligência de Negócio",
    razaoSocial:     "Incessantemente Inteligência de Negócio Ltda",
    cnpj:            "42.842.897/0001-40",
    contato:         "almeida.tc@hotmail.com",
    cnae:            "CNAE 85.99-6-04 — Treinamento em desenvolvimento profissional e gerencial"
  },

  parceiro: {
    marca:     "Seqor",
    descritor: "Gestão de Shopping Centers"
  },

  assinaturas: [
    { nome:"Tiago Almeida",     resumo:"Facilitador e Responsável Técnico" },
    { nome:"Silvio [SOBRENOME]", resumo:"Sponsor do Programa · CEO Seqor"  }
  ],

  disciplinas: [
    { nome:"Introdução à Inteligência Artificial", horas:"2h" },
    { nome:"Engenharia de Contexto",               horas:"4h" },
    { nome:"Engenharia de Prompt",                 horas:"4h" },
    { nome:"Projeto Prático em IA",                horas:"10h" }
  ],

  /* Só código e nome. Nada de CPF. */
  certificados: [
    { codigo:"INC-T1-2026-001-5F74", nome:"Gisele Rodrigues" },
    { codigo:"INC-T1-2026-002-G47Q", nome:"Silvio Eduardo"   },
    { codigo:"INC-T1-2026-003-BPJ7", nome:"Karuan Mendes"    },
    { codigo:"INC-T1-2026-004-DUQD", nome:"Pablo Barbosa"    },
    { codigo:"INC-T1-2026-005-J3PD", nome:"Amanda Jost"      },
    { codigo:"INC-T1-2026-006-TMUB", nome:"Isabella Moura"   },
    { codigo:"INC-T1-2026-007-Q2E3", nome:"Marcella Santos"  },
    { codigo:"INC-T1-2026-008-L59B", nome:"Leandro Borges"   },
    { codigo:"INC-T1-2026-009-ALD6", nome:"Isabelle Marques" }
  ]
};
