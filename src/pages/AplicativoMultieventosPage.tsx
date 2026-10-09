import React from "react";
import {
  BrandButton,
  CookieBox,
  SiteFooter,
  SiteHeader,
  NavHref,
} from "@/components/site-chrome";
import { appAssets } from "@/assets/assets";

interface PageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

const faqs = [
  {
    q: "O que é o app multieventos da Doity?",
    a: "É um aplicativo permanente, publicado com a identidade da instituição ou da marca, que reúne diferentes eventos e mantém a comunidade conectada entre as edições.",
  },
  {
    q: "Qual a diferença para o app de um evento?",
    a: "O app do evento é pensado para uma edição específica. O multieventos permanece nas lojas, recebe novos eventos e edições ao longo do tempo e atende instituições ou marcas com uma agenda recorrente.",
  },
  {
    q: "O participante precisa baixar novamente a cada evento?",
    a: "Não. Ele mantém o mesmo aplicativo e acessa os novos eventos quando forem disponibilizados.",
  },
  {
    q: "Cada evento pode ter programação própria?",
    a: "Sim. Cada evento mantém sua própria agenda, conteúdos, palestrantes e demais informações.",
  },
  {
    q: "Posso enviar notificações entre eventos?",
    a: "Sim. O app pode ser utilizado para comunicar próximos eventos e manter relacionamento com a comunidade.",
  },
  {
    q: "O app possui networking, matchmaking e gamificação?",
    a: "Sim. Os recursos disponíveis no app Doity podem compor a experiência dos diferentes eventos conforme o projeto contratado.",
  },
  {
    q: "Posso ter expositores e patrocinadores?",
    a: "Sim. Eventos dentro do aplicativo podem utilizar recursos voltados a parceiros, leads e geração de negócios.",
  },
  {
    q: "É publicado na App Store e Google Play?",
    a: "Sim, conforme o escopo contratado, com a identidade definida para a instituição.",
  },
  {
    q: "Quanto custa?",
    a: "O valor é definido de acordo com o volume de eventos, público, funcionalidades e escopo da operação.",
  },
];

export function AplicativoMultieventosPage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: PageProps) {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader
        onNavigate={onNavigate}
        onOpenCreateModal={onOpenCreateModal}
        onOpenContactModal={onOpenContactModal}
        onOpenLoginModal={onOpenLoginModal}
      />

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-black/8 bg-[linear-gradient(165deg,_#fff0f0_0%,_#ffffff_42%,_#f7f5f4_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
              Aplicativo institucional multieventos
            </p>
            <h1 className="max-w-xl text-4xl leading-[1.08] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.05rem] font-normal">
              Um aplicativo permanente para seus eventos e sua comunidade
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-neutral-600">
              Reúna o grande evento anual, cursos, jornadas e encontros menores em um app com a sua marca, conectado à infraestrutura de eventos da Doity.
            </p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-600">
              O participante baixa uma vez. A instituição mantém o aplicativo nas lojas, atualiza sua agenda e continua presente entre uma edição e outra.
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
          <div className="relative flex justify-center">
            <img
              src="/assets/multieventos/hero.png"
              alt="App institucional com home, lista de eventos e programação"
              className="h-auto w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </header>

      {/* Não é um novo app para cada edição */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Não é um novo app para cada edição
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              O nome da instituição ou do evento permanece nas lojas. A cada nova edição, curso ou encontro, a agenda é atualizada no mesmo ambiente que o público já conhece.
            </p>
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full px-4 py-2 text-sm font-semibold bg-[#ff2b34] text-white">
                App permanente
              </span>
              <span className="text-neutral-400">→</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full px-4 py-2 text-sm font-semibold border border-black/10 bg-[#faf8f7] text-neutral-800">
                Evento 2026
              </span>
              <span className="text-neutral-400">→</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full px-4 py-2 text-sm font-semibold border border-black/10 bg-[#faf8f7] text-neutral-800">
                Ações durante o ano
              </span>
              <span className="text-neutral-400">→</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full px-4 py-2 text-sm font-semibold border border-black/10 bg-[#faf8f7] text-neutral-800">
                Evento 2027
              </span>
            </div>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
            {[
              "Um único download",
              "Presença permanente nas lojas",
              "Eventos organizados separadamente",
              "Comunidade ativa entre as edições",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-black/8 bg-[#faf8f7] px-5 py-4 text-center text-sm font-semibold text-neutral-900"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hierarquia */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
              Hierarquia
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-black/8 bg-[#faf8f7] p-5">
                <p className="text-2xl text-[#ff2b34] font-bold">01</p>
                <h3 className="mt-2 font-semibold text-neutral-900">Instituição</h3>
                <p className="mt-2 text-sm text-neutral-600">Marca, app e comunidade contínuos.</p>
              </div>
              <div className="rounded-xl border border-black/8 bg-[#faf8f7] p-5">
                <p className="text-2xl text-[#ff2b34] font-bold">02</p>
                <h3 className="mt-2 font-semibold text-neutral-900">Eventos</h3>
                <p className="mt-2 text-sm text-neutral-600">Agenda anual dentro do mesmo aplicativo.</p>
              </div>
              <div className="rounded-xl border border-black/8 bg-[#faf8f7] p-5">
                <p className="text-2xl text-[#ff2b34] font-bold">03</p>
                <h3 className="mt-2 font-semibold text-neutral-900">Experiência de cada evento</h3>
                <p className="mt-2 text-sm text-neutral-600">Programação, networking e conteúdos próprios da edição.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dois cenários */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Dois cenários, a mesma necessidade de continuidade
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              O multieventos foi criado para instituições e marcas que têm uma agenda recorrente e querem manter o relacionamento com seu público.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
                Calendário institucional
              </p>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">Vários eventos ao longo do ano</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                Para sociedades médicas, entidades, instituições de ensino, hubs e organizações que promovem congressos, cursos, jornadas e encontros para o mesmo público.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Congresso anual", "Curso", "Jornada", "Encontro regional"].map((t) => (
                  <span key={t} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
                Marca ou evento perene
              </p>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">A mesma comunidade, edição após edição</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                Para uma grande marca de evento que quer permanecer no celular durante todo o ano. Em vez de publicar um novo app a cada edição, o aplicativo evolui com o calendário.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Edição 2026", "Conteúdos", "Encontros menores", "Edição 2027"].map((t) => (
                  <span key={t} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecossistema Doity */}
      <section className="border-b border-black/8 bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
              Ecossistema Doity
            </p>
            <h2 className="mt-3 text-3xl tracking-tight md:text-4xl font-normal text-white">
              Um único aplicativo. Toda a infraestrutura Doity por trás.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              O app não funciona isolado. Ele se conecta à plataforma que apoia a jornada do participante e a operação do organizador, antes, durante e depois de cada evento.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
            {[
              ["1", "Divulgação", "Site do evento e comunicação com o público."],
              ["2", "Inscrição", "Lotes, formulários, pagamentos e participantes."],
              ["3", "Credenciamento", "Check-in e controle de acesso integrados."],
              ["4", "Experiência", "Programação, agenda, conteúdo e interação no app."],
              ["5", "Pós-evento", "Certificados, relacionamento e próximos eventos."],
              ["6", "Gestão", "Dados e operação acompanhados pela organização."],
            ].map(([num, title, desc]) => (
              <li key={num} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#ff2b34] text-xs font-bold text-white">
                    {num}
                  </span>
                  <h3 className="font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Agenda contínua */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Uma agenda contínua para o seu público
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Cada evento pode ter sua própria programação, palestrantes, conteúdos e informações dentro do aplicativo.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 list-none p-0">
              {[
                "Congressos", "Cursos", "Jornadas", "Seminários",
                "Encontros", "Eventos internos", "Eventos recorrentes"
              ].map((ev) => (
                <li key={ev} className="rounded-xl border border-black/8 bg-[#faf8f7] px-4 py-3 text-sm font-medium text-neutral-800">
                  {ev}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7] shadow-xl p-2">
            <img
              src="/assets/multieventos/agenda-continua.png"
              alt="Lista de próximos eventos no aplicativo"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Grade de recursos */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Tudo que o app do evento oferece, em uma experiência contínua
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Networking, matchmaking, reuniões, gamificação, expositores e leads fazem parte da mesma plataforma de comunidade.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff2b34] mb-4">
                Experiência
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7]">
                  <div className="aspect-[9/13] bg-white p-2">
                    <img src="/assets/multieventos/programacao.png" alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900">Programação</h3>
                    <p className="mt-1 text-xs text-neutral-600">Cada evento possui sua agenda, horários e locais.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7]">
                  <div className="aspect-[9/13] bg-white p-2">
                    <img src="/assets/multieventos/minha-agenda.png" alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900">Minha agenda</h3>
                    <p className="mt-1 text-xs text-neutral-600">O participante favorita atividades e organiza sua experiência.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7]">
                  <div className="aspect-[9/13] bg-white p-2">
                    <img src="/assets/multieventos/palestrantes.png" alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900">Palestrantes</h3>
                    <p className="mt-1 text-xs text-neutral-600">Perfis e conteúdos de cada convidado.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7]">
                  <div className="aspect-[9/13] bg-white p-2">
                    <img src="/assets/multieventos/notificacoes.png" alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900">Notificações push</h3>
                    <p className="mt-1 text-xs text-neutral-600">Comunique novos eventos, novidades e mudanças.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff2b34] mb-4">
                Conexões & Negócios
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7]">
                  <div className="aspect-[9/13] bg-white p-2">
                    <img src="/assets/multieventos/rede-social.png" alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900">Rede social & Feed</h3>
                    <p className="mt-1 text-xs text-neutral-600">Mantenha a comunidade ativa entre edições.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7]">
                  <div className="aspect-[9/13] bg-white p-2">
                    <img src="/assets/multieventos/chat.png" alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900">Chat & Reuniões</h3>
                    <p className="mt-1 text-xs text-neutral-600">Facilite conversas e agendamento de encontros.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7]">
                  <div className="aspect-[9/13] bg-white p-2">
                    <img src="/assets/multieventos/patrocinadores.png" alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900">Patrocinadores</h3>
                    <p className="mt-1 text-xs text-neutral-600">Visibilidade e estandes para empresas parceiras.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7]">
                  <div className="aspect-[9/13] bg-white p-2">
                    <img src="/assets/multieventos/captura-leads.png" alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900">Captura de leads</h3>
                    <p className="mt-1 text-xs text-neutral-600">Leitura de QR Code e geração de oportunidades.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Painel de controle */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
            A instituição acompanha tudo pelo painel
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Gerencie a experiência e acompanhe o uso do aplicativo.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="aspect-[16/10] bg-[#faf8f7] p-2">
                <img src="/assets/multieventos/personalizacao.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900">Personalização</h3>
                <p className="mt-1 text-xs text-neutral-600">Configure menus, banners e conteúdos.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="aspect-[16/10] bg-[#faf8f7] p-2">
                <img src="/assets/multieventos/escolha-app.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900">Eventos</h3>
                <p className="mt-1 text-xs text-neutral-600">Organize quais eventos aparecem no app.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="aspect-[16/10] bg-[#faf8f7] p-2">
                <img src="/assets/multieventos/notificacao.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900">Comunicação</h3>
                <p className="mt-1 text-xs text-neutral-600">Envie notificações para diferentes momentos.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="aspect-[16/10] bg-[#faf8f7] p-2">
                <img src="/assets/multieventos/metricas.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900">Métricas</h3>
                <p className="mt-1 text-xs text-neutral-600">Acompanhe usuários e engajamento contínuo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="text-3xl tracking-tight text-neutral-900 font-normal">
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
              Uma presença para todos os eventos da sua marca
            </h2>
            <p className="mt-2 max-w-xl text-white/70 text-sm">
              Mantenha agenda, conteúdo, comunicação e comunidade dentro do mesmo aplicativo durante todo o ano.
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

      <SiteFooter onNavigate={onNavigate} />
      <CookieBox />
    </main>
  );
}
