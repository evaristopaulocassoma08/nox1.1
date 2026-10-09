import React from "react";
import {
  BrandButton,
  CookieBox,
  SiteFooter,
  SiteHeader,
  NavHref,
} from "@/components/site-chrome";
import { appAssets } from "@/assets/assets";

interface AppParaEventosPageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

const faqs = [
  {
    q: "O aplicativo é exclusivo para o meu evento?",
    a: "Sim. O aplicativo pode ser personalizado com a identidade do evento e publicado para iOS e Android.",
  },
  {
    q: "O que o participante encontra no aplicativo?",
    a: "Programação, agenda pessoal, palestrantes, mapa, expositores, notificações, feed, networking, matchmaking, chat, gamificação e outros recursos configurados pela organização.",
  },
  {
    q: "O aplicativo possui matchmaking?",
    a: "Sim. O recurso pode ajudar participantes a encontrar pessoas e empresas de acordo com interesses e objetivos em comum.",
  },
  {
    q: "É possível agendar reuniões?",
    a: "Sim. Participantes podem transformar novas conexões em encontros e reuniões durante o evento.",
  },
  {
    q: "O app possui gamificação?",
    a: "Sim. A organização pode utilizar desafios e outras ações para incentivar participação, interação e exploração do evento.",
  },
  {
    q: "O app permite captura de leads?",
    a: "Sim. Expositores podem ler o QR Code dos participantes e registrar contatos diretamente pelo aplicativo.",
  },
  {
    q: "Posso enviar notificações durante o evento?",
    a: "Sim. A organização pode criar e agendar notificações push pelo painel.",
  },
  {
    q: "O aplicativo possui métricas?",
    a: "Sim. É possível acompanhar indicadores de uso, interações, leads, atividades favoritas e outros dados da experiência.",
  },
  {
    q: "Posso personalizar a identidade?",
    a: "Sim. Cores, logo, banners, conteúdos, menus e outros elementos podem ser configurados conforme o evento.",
  },
  {
    q: "O participante precisa estar conectado à internet?",
    a: "Depois que determinados conteúdos são carregados, parte das informações pode permanecer disponível sem conexão. Recursos que dependem de atualização ou interação precisam de internet.",
  },
  {
    q: "Posso usar o aplicativo se as inscrições estiverem em outra plataforma?",
    a: "Sim. É possível trabalhar com bases de participantes de outras plataformas por integração ou importação.",
  },
  {
    q: "Qual a diferença para o app de check-in?",
    a: "O app de check-in é utilizado pela equipe para credenciamento e controle de acesso. O app do evento é voltado à experiência do participante.",
  },
  {
    q: "Com quanta antecedência devo contratar o aplicativo?",
    a: "Recomendamos iniciar o planejamento com antecedência, pois o cronograma considera o escopo, o envio dos materiais, a configuração, a validação e a análise da App Store e da Google Play. O prazo do seu projeto é definido com o especialista durante a contratação.",
  },
  {
    q: "Por quanto tempo o aplicativo fica disponível?",
    a: "O aplicativo fica disponível nas lojas 30 dias antes do início do evento e até 30 dias após o término. Se o projeto precisar de um período maior, é possível negociar uma extensão.",
  },
  {
    q: "A Doity oferece suporte durante a implantação?",
    a: "Sim. Você conta com suporte por e-mail e chat e com uma equipe pronta para orientar as etapas de contratação, preparação e uso do aplicativo.",
  },
  {
    q: "Como os dados dos participantes são tratados?",
    a: "O aplicativo trata informações de inscrição, perfil e uso para oferecer os recursos configurados e facilitar a interação no evento. Esse tratamento deve seguir a LGPD, as definições da organização e as políticas de privacidade aplicáveis.",
  },
  {
    q: "Quanto custa?",
    a: "O valor é definido conforme porte, duração e escopo do projeto.",
  },
];

export function AppParaEventosPage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: AppParaEventosPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader
        onNavigate={onNavigate}
        onOpenCreateModal={onOpenCreateModal}
        onOpenContactModal={onOpenContactModal}
        onOpenLoginModal={onOpenLoginModal}
      />

      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-black/8 bg-[linear-gradient(165deg,_#fff0f0_0%,_#ffffff_42%,_#f7f5f4_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1.05fr] md:py-24">
          <div>
            <h1 className="max-w-xl text-4xl leading-[1.08] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.05rem] font-normal">
              O seu evento na palma da mão do participante
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-neutral-600">
              Um aplicativo exclusivo, publicado para iOS e Android com a identidade do seu evento.
            </p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-600">
              Reúna programação, mapa, notificações, networking, matchmaking, gamificação, expositores,
              captura de leads e muito mais em uma experiência conectada antes, durante e depois do evento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenContactModal}
                className="btn btn-primary"
              >
                Solicitar orçamento
              </button>
              <button
                type="button"
                onClick={onOpenContactModal}
                className="btn btn-outline"
              >
                Falar com um especialista
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={appAssets.hero}
              alt="Três smartphones com programação, feed e networking do app Doity"
              className="h-auto w-full max-w-[min(100%,672px)] object-contain md:max-w-[720px] lg:max-w-[768px]"
            />
          </div>
        </div>
      </header>

      {/* Mais do que programação no celular */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Mais do que programação no celular
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              O aplicativo conecta participantes, conteúdo, organização, expositores e patrocinadores em um único ambiente.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Experiência do participante</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Programação, agenda pessoal, mapa, palestrantes e informações importantes sempre à mão.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Conexões</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Networking, matchmaking, chat e agendamento para aproximar pessoas com interesses em comum.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Engajamento</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Feed, perguntas, notificações, feedbacks e gamificação para estimular a participação.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Negócios</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Mais visibilidade para expositores e patrocinadores, geração de leads e oportunidades durante o evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Um app conectado ao objetivo de cada evento */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Um app conectado ao objetivo de cada evento
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              A mesma tecnologia assume papéis diferentes conforme o público, a programação e a entrega comercial da organização.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 list-none p-0">
            <li className="rounded-2xl border border-black/8 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Corporativos e feiras</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Capture leads, estimule reuniões e acompanhe interações para demonstrar a entrega, analisar o retorno e apoiar a renovação de patrocinadores.
              </p>
            </li>
            <li className="rounded-2xl border border-black/8 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Congressos e eventos de saúde</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Organize grades extensas, palestrantes, mapas, perguntas e avisos em uma agenda pessoal para cada participante.
              </p>
            </li>
            <li className="rounded-2xl border border-black/8 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Acadêmicos e científicos</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Conecte programação, perfis, conteúdos, networking e certificados em uma jornada única.
              </p>
            </li>
            <li className="rounded-2xl border border-black/8 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Comunidades e encontros</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Mantenha o público informado e participativo com feed, notificações, agenda e experiências de engajamento.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Histórias de sucesso */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ff2b34]">
                Histórias de sucesso
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
                Veja o app funcionando em eventos reais
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-600">
                Organizadores contam como o aplicativo apoiou a experiência do público, dos parceiros e da equipe.
              </p>
            </div>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 list-none p-0">
            <li>
              <a
                href="https://www.youtube.com/watch?v=i_pd4mwAvxc"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-100">
                  <img
                    src={appAssets.cases.sebraeSummit}
                    alt="Case Sebrae Summit AL 2024"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-neutral-900 shadow-md">
                    Assistir ao case ↗
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-neutral-900">Sebrae Summit AL 2024</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Networking, conteúdo e experiência digital para um grande encontro de inovação.
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=fCSgFQSGNFM"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-100">
                  <img
                    src={appAssets.cases.rogaDx}
                    alt="Case Roga DX 2024"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-neutral-900 shadow-md">
                    Assistir ao case ↗
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-neutral-900">Roga DX 2024</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Aplicativo apoiando conexões, programação e participação durante o evento.
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=L4nmVb46L_k"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-100">
                  <img
                    src={appAssets.cases.expossma}
                    alt="Case 1ª ExpoSSMA"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-neutral-900 shadow-md">
                    Assistir ao case ↗
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-neutral-900">1ª ExpoSSMA</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Uma experiência conectada para participantes, expositores e organização.
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=a0T3_7fE7Oc"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-100">
                  <img
                    src={appAssets.cases.congressoIndustria}
                    alt="Case Congresso Indústria 2024"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-neutral-900 shadow-md">
                    Assistir ao case ↗
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-neutral-900">Congresso Indústria 2024</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Conteúdo, relacionamento e presença dos parceiros reunidos no aplicativo.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Tudo que o participante precisa durante o evento */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="max-w-2xl text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
            Tudo que o participante precisa durante o evento
          </h2>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900">Programação e agenda pessoal</h3>
              <p className="mt-3 text-lg leading-relaxed text-neutral-600">
                Consulte atividades, horários, locais e detalhes da programação.
              </p>
              <p className="mt-3 text-neutral-600">
                O participante favorita o que interessa e monta a própria agenda.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
                <img
                  src={appAssets.programacao}
                  alt="Programação do evento no app"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
                <img
                  src={appAssets.minhaAgenda}
                  alt="Minha agenda do participante"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[240px] lg:order-2">
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
                <img
                  src={appAssets.mapaEvento}
                  alt="Mapa do evento no app"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900">Mapa do evento</h3>
              <p className="mt-3 text-lg leading-relaxed text-neutral-600">
                Ajude o público a localizar salas, palcos, stands e outros pontos importantes.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900">Palestrantes</h3>
              <p className="mt-3 text-lg leading-relaxed text-neutral-600">
                Apresente perfis, conteúdos e atividades relacionadas a cada convidado.
              </p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white p-2">
                <img
                  src={appAssets.palestrantes}
                  alt="Palestrantes no aplicativo"
                  className="w-full h-full object-contain object-top"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900">Notificações</h3>
              <p className="mt-3 text-lg leading-relaxed text-neutral-600">
                Envie avisos sobre mudanças, início de atividades, novidades e informações importantes.
              </p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white p-2">
                <img
                  src={appAssets.notificacoes}
                  alt="Notificações push no aplicativo"
                  className="w-full h-full object-contain object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transforme participantes em conexões */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Transforme participantes em conexões
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Ajude quem está no evento a encontrar as pessoas certas.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Matchmaking</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Sugira conexões de acordo com perfis, interesses e objetivos dos participantes.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Networking</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Permita que participantes descubram pessoas, acessem perfis e iniciem conversas.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Chat</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Facilite a comunicação entre participantes dentro do próprio ambiente do evento.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6">
              <h3 className="text-lg font-semibold text-neutral-900">Agendamento de reuniões</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Depois de encontrar uma conexão relevante, organize reuniões e encontros durante o evento.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm font-semibold tracking-wide text-neutral-900">
            Descobrir → Conectar → Agendar → Encontrar
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 md:gap-6">
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
              <img
                src={appAssets.redeSocial}
                alt="Sugestões e networking"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
              <img
                src={appAssets.areaParticipante}
                alt="Perfil do participante"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
              <img
                src={appAssets.networkingEncontrar}
                alt="Agendamento e captura de contatos"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implantação acompanhada */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ff2b34]">
                Implantação acompanhada
              </p>
              <h2 className="mt-3 text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
                Do briefing à publicação nas lojas
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Como a configuração e a análise da App Store e da Google Play fazem parte do cronograma, vale iniciar o projeto com antecedência. O prazo é definido com o especialista conforme o escopo e os materiais do evento.
              </p>
              <div className="mt-8 rounded-2xl border border-[#ff2b34]/20 bg-[#fff8f8] p-6">
                <p className="font-semibold text-neutral-900">Janela padrão de disponibilidade</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  O aplicativo fica disponível nas lojas 30 dias antes do evento e até 30 dias depois. Caso o projeto precise permanecer publicado por mais tempo, a extensão pode ser negociada.
                </p>
              </div>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2 list-none p-0">
              <li className="rounded-2xl border border-black/8 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">1. Briefing e cronograma</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  O time entende o formato, as datas e o escopo do evento e combina com você as etapas do projeto.
                </p>
              </li>
              <li className="rounded-2xl border border-black/8 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">2. Identidade e conteúdo</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Sua equipe envia marca, cores, programação, palestrantes e demais materiais que farão parte do app.
                </p>
              </li>
              <li className="rounded-2xl border border-black/8 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">3. Configuração e validação</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  A experiência é configurada e revisada com a organização antes do envio para publicação.
                </p>
              </li>
              <li className="rounded-2xl border border-black/8 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">4. Publicação e acompanhamento</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  A Doity acompanha o envio às lojas e orienta a equipe durante a preparação e o uso do aplicativo.
                </p>
              </li>
            </ol>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-5 rounded-2xl bg-neutral-900 p-7 text-white md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Suporte em todas as etapas</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                Você conta com atendimento por e-mail e chat e com uma equipe pronta para orientar a contratação, a preparação e o uso do app.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContactModal}
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors border border-white/25 text-white hover:border-white/50 cursor-pointer"
            >
              Planejar meu aplicativo
            </button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl tracking-tight text-neutral-900 font-normal">
          O suporte também faz parte da entrega
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Organizadores destacam o acompanhamento da equipe Doity ao longo da operação.
        </p>
        <ul className="mt-12 grid gap-12 md:grid-cols-2 list-none p-0">
          <li className="flex flex-col gap-4">
            <blockquote className="text-neutral-900 leading-relaxed m-0 text-base italic">
              “Utilizo o sistema desde 2012 e estou muito satisfeito com os serviços e principalmente com o suporte. É possível acompanhar inscrições, pagamentos, trabalhos científicos, credenciamento e certificados em um só lugar.”
            </blockquote>
            <div className="mt-auto flex items-center gap-3">
              <img
                src={appAssets.testimonials.fabioAvatar}
                alt="Fábio Neves"
                className="size-12 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-neutral-900 m-0 text-sm">Fábio Neves</p>
                <p className="text-sm text-neutral-500 m-0">Kalone Eventos</p>
              </div>
              <img
                src={appAssets.testimonials.fabioLogo}
                alt="Kalone Eventos"
                className="h-8 w-auto max-w-24 object-contain opacity-80"
              />
            </div>
          </li>
          <li className="flex flex-col gap-4">
            <blockquote className="text-neutral-900 leading-relaxed m-0 text-base italic">
              “Consigo gerenciar o evento e acompanhar as inscrições em tempo real, de modo fácil e simples. O pós-venda e o suporte fazem toda a diferença.”
            </blockquote>
            <div className="mt-auto flex items-center gap-3">
              <img
                src={appAssets.testimonials.marcusAvatar}
                alt="Marcus Bernardes"
                className="size-12 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-neutral-900 m-0 text-sm">Marcus Bernardes</p>
                <p className="text-sm text-neutral-500 m-0">Organizador Doity</p>
              </div>
              <img
                src={appAssets.testimonials.marcusLogo}
                alt="Organizador Doity"
                className="h-8 w-auto max-w-24 object-contain opacity-80"
              />
            </div>
          </li>
        </ul>
      </section>

      {/* Mais valor para expositores e patrocinadores */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Mais valor para expositores e patrocinadores
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Transforme visibilidade em uma entrega acompanhável, com recursos para gerar oportunidades e apoiar a prestação de contas do evento.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">Perfil dos expositores</h3>
              <p className="mt-2 text-sm text-neutral-600">Cada empresa pode ter sua própria área com informações, localização e canais de contato.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">Captura de leads</h3>
              <p className="mt-2 text-sm text-neutral-600">Expositores leem o QR Code dos participantes e registram contatos de interesse pelo aplicativo.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">Matchmaking</h3>
              <p className="mt-2 text-sm text-neutral-600">Ajude participantes e empresas a descobrirem conexões relevantes.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">Agendamento</h3>
              <p className="mt-2 text-sm text-neutral-600">Transforme o interesse em reuniões durante o evento.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">Gamificação</h3>
              <p className="mt-2 text-sm text-neutral-600">Use desafios e ações para estimular visitas, interações e circulação pelos stands.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">Métricas para patrocinadores</h3>
              <p className="mt-2 text-sm text-neutral-600">Acompanhe leads e interações para apoiar relatórios de entrega, análise de retorno e renovação de parcerias.</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {["Participante", "Match", "Reunião", "Stand", "Lead"].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <span className="rounded-full bg-[#ff2b34] px-4 py-2 text-sm font-semibold text-white">
                  {step}
                </span>
                {idx < arr.length - 1 && (
                  <span className="text-neutral-400">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white p-2">
              <img
                src={appAssets.patrocinadores}
                alt="Perfil de expositores e patrocinadores"
                className="w-full h-full object-contain object-top"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white p-2">
              <img
                src={appAssets.capturaLeads}
                alt="Captura de leads por QR Code"
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Um aplicativo com a identidade do seu evento */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Um aplicativo com a identidade do seu evento
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Não é apenas um aplicativo genérico com vários eventos dentro. Seu evento pode ter uma experiência própria, personalizada e publicada nas lojas.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2 list-none p-0">
            {["Cores", "Logo", "Banners", "Conteúdos", "Menus", "Expositores e patrocinadores"].map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-black/10 bg-[#faf8f7] px-4 py-1.5 text-sm font-medium text-neutral-800"
              >
                {pill}
              </li>
            ))}
          </ul>
          <div className="relative mx-auto mt-12 aspect-[16/10] max-w-4xl overflow-hidden rounded-2xl border border-black/10 bg-[#faf7f6] shadow-xl">
            <img
              src={appAssets.multieventos}
              alt="Aplicativos exclusivos com identidades diferentes"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <img
              src={appAssets.androidApple}
              alt="Disponível para iOS e Android"
              className="h-8 w-auto"
            />
            <p className="text-sm font-semibold text-neutral-900 m-0">
              Disponível para iOS e Android.
            </p>
          </div>
        </div>
      </section>

      {/* A organização continua no controle */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
                A organização continua no controle
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Enquanto o participante utiliza o aplicativo, sua equipe gerencia a experiência pelo painel Doity.
              </p>
              <div className="mt-8 space-y-5">
                <div>
                  <h3 className="font-semibold text-neutral-900">Personalização</h3>
                  <p className="mt-1 text-sm text-neutral-600">Configure identidade, banners, menus e conteúdos.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Comunicação</h3>
                  <p className="mt-1 text-sm text-neutral-600">Crie e agende notificações push.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Moderação</h3>
                  <p className="mt-1 text-sm text-neutral-600">Acompanhe as interações dentro do aplicativo.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Métricas</h3>
                  <p className="mt-1 text-sm text-neutral-600">Veja acessos, engajamento, leads, atividades favoritas e outros indicadores.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-md">
                <img
                  src={appAssets.adminPersonalizacao}
                  alt="Painel de personalização do app"
                  className="w-full h-full object-contain object-top"
                />
              </div>
              <div className="relative mx-auto aspect-[9/16] max-w-[200px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
                <img
                  src={appAssets.programacao}
                  alt="Resultado da personalização no app"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacidade e segurança */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ff2b34]">
              Privacidade e segurança
            </p>
            <h2 className="mt-3 text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Dados tratados com transparência
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              O aplicativo utiliza dados dos participantes para oferecer os recursos contratados e facilitar a interação no evento, com tratamento orientado pela LGPD e pelas definições da organização.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3 list-none p-0">
            <li className="rounded-2xl border border-black/8 bg-[#faf8f7] p-6">
              <h3 className="font-semibold text-neutral-900">Uso transparente dos dados</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Informações de inscrição, perfil e uso do app são tratadas para viabilizar a experiência e as interações do evento.
              </p>
            </li>
            <li className="rounded-2xl border border-black/8 bg-[#faf8f7] p-6">
              <h3 className="font-semibold text-neutral-900">Leads com contexto</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                A leitura de QR Code aproxima participante e expositor dentro da dinâmica definida para o evento.
              </p>
            </li>
            <li className="rounded-2xl border border-black/8 bg-[#faf8f7] p-6">
              <h3 className="font-semibold text-neutral-900">Controle da experiência</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                A organização configura recursos, conteúdos e interações, enquanto participantes podem denunciar conteúdos e bloquear usuários.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Entenda como o público está usando o evento */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
                Entenda como o público está usando o evento
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Use os dados do app para entender a experiência e gerar informações para próximas edições.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 list-none p-0">
                {[
                  "Usuários",
                  "Posts e interações",
                  "Atividades favoritadas",
                  "Leads capturados",
                  "Engajamento",
                  "Feedbacks",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-black/10 bg-[#faf8f7] px-4 py-3 text-sm font-medium text-neutral-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-xl">
              <img
                src={appAssets.dashboard}
                alt="Dashboard de métricas do aplicativo"
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Do download às conexões que o evento gera */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-center text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
            Do download às conexões que o evento gera
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {[
              "Baixa o aplicativo",
              "Monta sua agenda",
              "Recebe informações",
              "Descobre pessoas e empresas",
              "Faz matchmaking",
              "Agenda reuniões",
              "Interage e participa",
              "Visita expositores",
              "Gera novas conexões",
            ].map((st, i, all) => (
              <React.Fragment key={st}>
                <span className="rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 md:text-sm">
                  {st}
                </span>
                {i < all.length - 1 && (
                  <span className="text-neutral-400 hidden sm:inline">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Integrado à operação do evento */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Integrado à operação do evento
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Quando o evento utiliza outras soluções da Doity, a experiência continua conectada.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <NavHref
              href="/#solucoes"
              navigate={onNavigate}
              className="rounded-full border border-black/10 bg-[#faf8f7] px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-[#ff2b34]"
            >
              Inscrição
            </NavHref>
            <span className="text-neutral-400">→</span>
            <NavHref
              href="/#solucoes"
              navigate={onNavigate}
              className="rounded-full border border-black/10 bg-[#faf8f7] px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-[#ff2b34]"
            >
              Credenciamento
            </NavHref>
            <span className="text-neutral-400">→</span>
            <span className="rounded-full border border-[#ff2b34] bg-[#fff0f0] px-4 py-2 text-sm font-semibold text-[#ff2b34]">
              Aplicativo
            </span>
            <span className="text-neutral-400">→</span>
            <span className="rounded-full border border-black/10 bg-[#faf8f7] px-4 py-2 text-sm font-semibold text-neutral-800">
              Programação e networking
            </span>
            <span className="text-neutral-400">→</span>
            <NavHref
              href="/#solucoes"
              navigate={onNavigate}
              className="rounded-full border border-black/10 bg-[#faf8f7] px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-[#ff2b34]"
            >
              Certificados
            </NavHref>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-neutral-500">
            O aplicativo também pode ser utilizado mesmo quando as inscrições estão em outra plataforma, por meio de integração ou importação da base de participantes.
          </p>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl tracking-tight text-neutral-900 md:text-3xl font-normal">
          Perguntas frequentes
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-black/10 bg-white p-5 transition-colors [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-neutral-900 list-none">
                <span>{q}</span>
                <span className="ml-4 text-xl font-normal text-[#ff2b34] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 m-0">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl tracking-tight md:text-3xl font-normal text-white">
              Transforme o celular no ponto central da experiência do evento
            </h2>
            <p className="mt-2 max-w-xl text-white/70 text-sm">
              Programação, comunicação, networking, matchmaking, gamificação, patrocinadores e geração de negócios em um único aplicativo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenContactModal}
              className="btn btn-primary"
            >
              Solicitar orçamento
            </button>
            <button
              type="button"
              onClick={onOpenContactModal}
              className="btn btn-outline text-white border-white/20 hover:border-white/50"
            >
              Falar com um especialista
            </button>
          </div>
        </div>
      </section>

      {/* Parceiros & Footer */}
      <div className="bg-[#faf8f7] pt-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-6 pb-8">
          <img
            src={appAssets.partners.sebrae}
            alt="Sebrae"
            className="h-8 w-auto object-contain opacity-70"
          />
          <img
            src={appAssets.partners.abeoc}
            alt="ABEOC"
            className="h-8 w-auto object-contain opacity-70"
          />
          <img
            src={appAssets.partners.sururuValley}
            alt="Sururu Valley"
            className="h-8 w-auto object-contain opacity-70"
          />
          <img
            src={appAssets.partners.amigoDoSurdo}
            alt="Amigo do Surdo"
            className="h-8 w-auto object-contain opacity-70"
          />
          <a
            href="https://wa.me/551151989901"
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-sm font-semibold text-[#ff2b34] hover:underline"
          >
            Falar pelo WhatsApp →
          </a>
        </div>
      </div>

      <SiteFooter onNavigate={onNavigate} />
      <CookieBox />
    </main>
  );
}
