import React from "react";
import {
  BrandButton,
  CookieBox,
  SiteFooter,
  SiteHeader,
  NavHref,
} from "@/components/site-chrome";

interface PageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

const faqs = [
  {
    q: "O que é o App Doity Check-in?",
    a: "É o aplicativo utilizado pela equipe da organização para registrar presença e controlar o acesso de participantes.",
  },
  {
    q: "Como o check-in é realizado?",
    a: "A equipe pode ler o QR Code ou código de barras do participante diretamente pelo smartphone.",
  },
  {
    q: "Preciso comprar equipamento específico?",
    a: "Para o uso básico do app, não. A equipe pode utilizar smartphones compatíveis. Outros equipamentos podem fazer parte de operações mais completas.",
  },
  {
    q: "Funciona offline?",
    a: "Sim. O app pode registrar check-ins sem conexão e sincronizar os dados posteriormente.",
  },
  {
    q: "Posso usar em salas e atividades?",
    a: "Sim. O app pode ser utilizado em diferentes pontos de acesso e para registros específicos de presença.",
  },
  {
    q: "Posso registrar entrada e saída?",
    a: "Não. O app registra a presença no check-in. Não há controle de entrada e saída nem de tempo de permanência.",
  },
  {
    q: "Posso imprimir etiquetas?",
    a: "Sim. A impressão pode fazer parte da solução completa de credenciamento.",
  },
  {
    q: "O app é o mesmo aplicativo usado pelo participante?",
    a: "Não. O App Doity Check-in é da equipe de organização. O App do evento é voltado para a experiência do participante.",
  },
  {
    q: "Posso usar totens?",
    a: "Sim. Operações de autoatendimento podem ser estruturadas conforme o porte e a necessidade do evento.",
  },
];

export function AppDeCheckinPage({
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
            <h1 className="max-w-xl text-4xl leading-[1.08] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.1rem] font-normal">
              Check-in rápido na mão da sua equipe
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-neutral-600">
              Use o smartphone da organização para ler QR Codes, registrar presença e controlar acessos em diferentes pontos do evento.
            </p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-600">
              Sem depender de computador na entrada e com operação offline quando necessário.
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
                Conhecer o credenciamento completo
              </button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
            <img
              src="/assets/checkin/hero.webp"
              alt="Smartphone lendo QR Code do participante"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </header>

      {/* Feito para quem está operando */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Feito para quem está operando o evento
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              O App Doity Check-in é a ferramenta da equipe de credenciamento. Cada ponto de entrada pode operar diretamente pelo celular.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
            {[
              ["Leia o QR Code", "Aponte a câmera e valide o ingresso instantaneamente."],
              ["Confirme a presença", "Registro automático com data e hora exatas."],
              ["Controle o acesso", "Regras por tipo de ingresso, lote ou sessão."],
              ["Acompanhe a operação", "Dados atualizados e sincronizados em tempo real."],
            ].map(([title, desc]) => (
              <li key={title} className="rounded-2xl border border-black/8 bg-[#faf8f7] p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#fff0f0] text-[#ff2b34] font-bold">
                  ✓
                </span>
                <h3 className="mt-4 text-base font-semibold text-neutral-900">{title}</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Do QR Code ao check-in em segundos */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal text-center">
            Do QR Code ao check-in em segundos
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex flex-1 flex-col rounded-2xl border border-black/8 bg-white p-6">
                <p className="text-3xl text-[#ff2b34] font-bold">01</p>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">Escaneie</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Leia o QR Code ou código de barras diretamente pelo smartphone.
                </p>
              </div>
              <div className="relative aspect-[9/13] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm p-2">
                <img
                  src="/assets/checkin/passo-app.webp"
                  alt="App Doity Check-in na câmera"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-1 flex-col rounded-2xl border border-black/8 bg-white p-6">
                <p className="text-3xl text-[#ff2b34] font-bold">02</p>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">Confirme o acesso</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  O app registra a presença e valida a entrada conforme as regras do evento.
                </p>
              </div>
              <div className="relative aspect-[9/13] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm p-2">
                <img
                  src="/assets/checkin/passo-checkin.webp"
                  alt="Leitura de QR Code no check-in"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-1 flex-col rounded-2xl border border-black/8 bg-white p-6">
                <p className="text-3xl text-[#ff2b34] font-bold">03</p>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">Continue</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  A equipe segue para o próximo participante sem precisar atualizar planilhas ou listas.
                </p>
              </div>
              <div className="relative aspect-[9/13] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm p-2">
                <img
                  src="/assets/checkin/passo-confirmado.webp"
                  alt="Check-in confirmado no smartphone"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-neutral-800">
            Escaneie → confirme o acesso → continue
          </p>
        </div>
      </section>

      {/* Offline */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
              Offline
            </p>
            <h2 className="mt-3 text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Continue credenciando mesmo sem internet
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              A conexão do local não precisa parar a entrada.
            </p>
            <p className="mt-3 text-neutral-600">
              Com o modo offline, a equipe pode continuar registrando os check-ins e sincronizar os dados quando a conexão estiver disponível novamente.
            </p>
            <p className="mt-6 text-sm font-semibold text-neutral-900">
              Ideal para operações com internet instável ou múltiplos pontos de acesso.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-black/10 bg-[#faf8f7] p-8">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm">
              Modo offline
            </span>
            <span className="text-neutral-400">→</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm">
              Sincronização
            </span>
            <span className="text-neutral-400">→</span>
            <span className="rounded-full bg-[#ff2b34] px-4 py-2 text-sm font-semibold text-white shadow-sm">
              Painel atualizado
            </span>
          </div>
        </div>
      </section>

      {/* Painel Central */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Acompanhe toda operação no painel do app de check-in
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Enquanto a equipe trabalha nos smartphones, a organização acompanha os dados de credenciamento.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 list-none p-0">
              {[
                "Total de participantes", "Credenciados", "Ainda não credenciados",
                "Registros de presença", "Pontos de acesso", "Filtro por lotes"
              ].map((item) => (
                <li key={item} className="rounded-xl border border-black/8 bg-[#faf8f7] px-4 py-3 text-sm font-medium text-neutral-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl p-2">
            <img
              src="/assets/checkin/secao-painel.webp"
              alt="Painel central de credenciamento"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Impressão de etiquetas */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Expansão da operação
            </p>
            <h2 className="mt-3 text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Precisa imprimir a identificação?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              O app pode fazer parte de uma operação de credenciamento com impressão de etiquetas e crachás.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-lg">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md p-2">
              <img
                src="/assets/checkin/secao-etiquetas.webp"
                alt="Operação com impressão de etiquetas"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Três apps. Três objetivos. */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal text-center">
            Três apps. Três objetivos diferentes.
          </h2>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3 list-none p-0">
            <li>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#ff2b34] bg-white">
                <div className="aspect-[9/13] bg-[#faf8f7] p-2">
                  <img src="/assets/checkin/card-tres-apps.webp" alt="" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase text-[#ff2b34]">Para a equipe</p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900">App de check-in</h3>
                  <p className="mt-2 text-xs text-neutral-600">Credenciamento, presença e controle de acesso.</p>
                </div>
              </div>
            </li>
            <li>
              <NavHref
                href="/app-para-eventos"
                navigate={onNavigate}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors hover:border-[#ff2b34]"
              >
                <div className="aspect-[9/13] bg-[#faf8f7] p-2">
                  <img src="/assets/app/hero.png" alt="" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase text-[#ff2b34]">Para o participante</p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900 group-hover:text-[#ff2b34]">App do evento</h3>
                  <p className="mt-2 text-xs text-neutral-600">Programação, networking e gamificação.</p>
                </div>
              </NavHref>
            </li>
            <li>
              <NavHref
                href="/aplicativo-multieventos"
                navigate={onNavigate}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors hover:border-[#ff2b34]"
              >
                <div className="aspect-[9/13] bg-[#faf8f7] p-2">
                  <img src="/assets/multieventos/hero.png" alt="" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase text-[#ff2b34]">Para a comunidade</p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900 group-hover:text-[#ff2b34]">App multieventos</h3>
                  <p className="mt-2 text-xs text-neutral-600">Vários eventos dentro do app institucional.</p>
                </div>
              </NavHref>
            </li>
          </ul>
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
              Coloque o credenciamento na mão da sua equipe
            </h2>
            <p className="mt-2 max-w-xl text-white/70 text-sm">
              Check-in por smartphone, operação offline e controle de acesso integrado ao evento.
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
