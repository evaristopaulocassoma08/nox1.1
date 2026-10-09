export type MenuGroup = { group: string; items: [string, string, string][] };

export const solucoesMenu: MenuGroup[] = [
  {
    group: "Produtos",
    items: [
      ["Plataforma de eventos", "Operação completa num só lugar", "/plataforma-de-eventos"],
      ["App do evento", "App com a cara do seu evento", "/app-para-eventos"],
      ["App multieventos", "Um app para vários eventos", "/aplicativo-multieventos"],
      ["App de check-in", "Credenciamento pela equipe", "/app-de-checkin"],
      ["Doity Play", "Ambiente digital do evento online ou híbrido", "/doity-play"],
      ["CAEX", "Portal do expositor", "/caex-central-atendimento-ao-expositor"],
      ["Curadoria", "Programação, palestrantes e grade", "/curadoria"],
    ] as [string, string, string][],
  },
  {
    group: "Funcionalidades",
    items: [
      ["Site do evento", "Página com a cara da marca", "/#solucoes"],
      ["Inscrições e pagamentos", "Lotes, cupons e checkout", "/#solucoes"],
      ["Inscrições em atividades", "Por sessão ou workshop", "/#solucoes"],
      ["Credenciamento", "Entrada e controle de acesso", "/app-de-checkin"],
      ["Reconhecimento facial", "Entrada fluida e controle avançado", "/app-de-checkin"],
      ["Certificados", "Emissão e envio automático", "/#solucoes"],
      ["Trabalhos científicos", "Submissão até os anais", "/#cientificos"],
      ["Integrações", "CRM, analytics e API", "/#todas"],
    ] as [string, string, string][],
  },
  {
    group: "Começar",
    items: [
      ["Quanto custa", "Grátis para criar · 10% nas inscrições pagas", "/quanto-custa"],
      ["Criar em minutos", "Do cadastro à página no ar", "/#comece"],
      ["Falar com um especialista", "Orçamento e consultoria", "/#comece"],
    ] as [string, string, string][],
  },
];

export const paraQuemMenu: MenuGroup[] = [
  {
    group: "Segmentos",
    items: [
      ["Corporativos", "Congressos, treinamentos e internos", "/organizar/eventos/corporativos"],
      ["Acadêmicos", "Trabalhos, certificados e anais", "/organizar/eventos/academicos"],
      ["Feiras e exposições", "Expositores com CAEX", "/#publicos"],
      ["Esportivos", "Categorias, pico e credenciamento", "/#publicos"],
      ["Religiosos", "Inscrição simples e certificados", "/#publicos"],
      ["Saúde", "Jornadas e congressos médicos", "/#publicos"],
    ],
  },
];

export const participantesMenu: MenuGroup[] = [
  {
    group: "Acessos do participante",
    items: [
      ["Encontrar eventos", "Busque eventos e faça sua inscrição", "/eventos"],
      ["Área do participante", "Acesse seus serviços em um só lugar", "/area-do-participante"],
      ["Certificados e comprovantes", "Consulte documentos pelo e-mail da inscrição", "/area-do-participante/certificado"],
      ["Validar certificado", "Confirme a autenticidade de um certificado", "/area-do-participante/certificado?tab=validar"],
    ],
  },
];
