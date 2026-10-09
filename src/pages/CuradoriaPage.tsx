import React, { useState } from "react";
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
    q: "O que a Curadoria resolve no evento?",
    a: "Centraliza trilhas, salas, sessões, palestrantes e convites em um só lugar — com publicação da grade no site e no app, sem depender de planilhas.",
  },
  {
    q: "Dá para receber propostas de palestra?",
    a: "Sim. O Call for Speakers recebe submissões, organiza a avaliação e transforma propostas aprovadas em sessões da programação.",
  },
  {
    q: "Como funciona a carta de aceite?",
    a: "Você gera e envia cartas personalizadas a partir dos dados do palestrante e da sessão, com formalidade profissional no mesmo fluxo da curadoria.",
  },
  {
    q: "A grade aparece no site do evento?",
    a: "Sim. Há embeds e integrações para publicar programação e palestrantes no site e no aplicativo do evento, sem ajuste manual a cada mudança.",
  },
  {
    q: "Quanto custa?",
    a: "Valores sob consulta, conforme volume de palestrantes e necessidade de suporte. Solicite orçamento.",
  },
];

export function CuradoriaPage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: PageProps) {
  const [activeTab, setActiveTab] = useState<"trilhas" | "salas" | "grade" | "palestrantes">("trilhas");

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
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pb-10 pt-5 md:grid-cols-[1fr_1.05fr] md:py-20">
          <div>
            <h1 className="max-w-xl text-4xl leading-[1.08] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.05rem] font-normal">
              Curadoria inteligente para eventos incríveis
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-neutral-600">
              Centralize palestrantes, trilhas e programação. Convide, organize e publique a grade — do convite à carta de aceite.
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
                Falar com especialista
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden">
            <img
              src="/assets/curadoria/hero-programacao.png"
              alt="Programação na Curadoria Doity"
              className="h-auto w-full max-w-[min(100%,520px)] object-contain"
            />
          </div>
        </div>
      </header>

      {/* Tudo para a programação */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Tudo para a programação
            </h2>
            <p className="mt-3 text-lg text-neutral-600">
              Do catálogo de palestrantes à publicação no site do evento.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Gestão da programação", "Trilhas, salas, sessões e grade visual em uma interface única."],
              ["Palestrantes e convites", "Convide, acompanhe aceites e colete materiais sem planilha."],
              ["Call for Speakers", "Receba propostas, avalie e transforme em sessões da grade."],
              ["Embeds e integrações", "Publique programação e palestrantes no site e no app do evento."],
              ["Cartas de aceite", "Gere e envie cartas personalizadas com formalidade profissional."],
              ["Indicadores", "Veja confirmações, pendências e status da grade em tempo real."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-black/10 bg-[#faf8f7] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chega de planilhas */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Chega de planilhas e retrabalho
            </h2>
            <p className="mt-3 text-lg text-neutral-600">
              A Curadoria elimina processos manuais e centraliza a grade do evento.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#ff2b34]">Antes</h3>
              <ul className="space-y-3 list-none p-0">
                <li className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-neutral-800">
                  Planilhas e e-mails soltos para palestrantes e sessões
                </li>
                <li className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-neutral-800">
                  Retrabalho para atualizar site e materiais de marketing
                </li>
                <li className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-neutral-800">
                  Pouca visibilidade de confirmações e pendências
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-neutral-900">Com a Curadoria</h3>
              <ul className="space-y-3 list-none p-0">
                <li className="rounded-2xl bg-[#ff2b34] p-4 text-sm text-white font-medium">
                  ✓ Programação centralizada: trilhas, salas, sessões e convites
                </li>
                <li className="rounded-2xl bg-[#ff2b34] p-4 text-sm text-white font-medium">
                  ✓ Publicação da grade no site e no app sem ajuste manual
                </li>
                <li className="rounded-2xl bg-[#ff2b34] p-4 text-sm text-white font-medium">
                  ✓ Marketing acessa dados atualizados para peças e posts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gestão da programação interativa */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
                Gestão da programação
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Planeje trilhas, salas e agenda de forma estruturada e visual.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  ["trilhas", "Trilhas", "Organize o conteúdo por áreas temáticas e facilite a navegação do público."],
                  ["salas", "Salas", "Cadastre ambientes, capacidade e evite conflitos de horário."],
                  ["grade", "Grade", "Visualize sessões por dia, trilha ou sala com edição ágil."],
                  ["palestrantes", "Palestrantes", "Gerencie convidados, atribua sessões e acompanhe aceites."],
                ].map(([id, title, desc]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveTab(id as any)}
                    className={`w-full rounded-2xl border p-4 text-left transition-colors cursor-pointer ${
                      activeTab === id
                        ? "border-[#ff2b34]/35 bg-[#fff0f0]"
                        : "border-black/10 bg-white hover:border-[#ff2b34]/25"
                    }`}
                  >
                    <h3 className="font-semibold text-neutral-900">{title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{desc}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl p-2">
              <img
                src="/assets/curadoria/showcase-trilhas.png"
                alt="Gestão de trilhas na Curadoria"
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call for Speakers Kanban */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
                Call for Speakers e cartas de aceite
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Receba propostas, avalie no kanban e converta em sessões. Depois, formalize com cartas personalizadas — do convite ao aceite no mesmo fluxo.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl p-2">
              <img
                src="/assets/curadoria/secao-kanban.png"
                alt="Kanban de submissões do Call for Speakers"
                className="h-auto w-full object-cover rounded-xl"
              />
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
              Monte a grade sem planilha
            </h2>
            <p className="mt-2 max-w-xl text-white/70 text-sm">
              Solicite orçamento e veja a Curadoria no fluxo do seu próximo evento.
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
              Falar com especialista
            </button>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
      <CookieBox />
    </main>
  );
}
