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
    q: "O que é o Doity Play?",
    a: "É o ambiente virtual da Doity para realização de eventos online e experiências híbridas, reunindo transmissões, programação, salas e interação.",
  },
  {
    q: "Posso ter várias transmissões ao mesmo tempo?",
    a: "Sim. O evento pode trabalhar com diferentes salas e conteúdos simultâneos.",
  },
  {
    q: "Os participantes podem interagir?",
    a: "Sim. O ambiente pode contar com chat, perguntas e enquetes.",
  },
  {
    q: "Posso usar YouTube ou Vimeo?",
    a: "Sim. O conteúdo pode ser hospedado em serviços de transmissão compatíveis e exibido dentro da experiência do Doity Play.",
  },
  {
    q: "Posso criar espaços para patrocinadores?",
    a: "Sim. Patrocinadores podem ter áreas digitais com informações, conteúdos e recursos de relacionamento.",
  },
  {
    q: "Posso controlar quem acessa cada conteúdo?",
    a: "A experiência pode considerar as inscrições e regras configuradas para o evento e suas atividades.",
  },
  {
    q: "Consigo emitir certificados?",
    a: "Sim. Os certificados podem fazer parte da operação do evento e considerar as regras de participação configuradas.",
  },
  {
    q: "Funciona para evento híbrido?",
    a: "Sim. O Doity Play pode complementar a experiência presencial com acesso remoto a conteúdos e atividades.",
  },
  {
    q: "Quanto custa?",
    a: "O valor depende do formato, número de participantes, duração e escopo da operação.",
  },
];

export function DoityPlayPage({
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
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
              Doity Play
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.08] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.1rem] font-normal">
              O ambiente virtual do seu evento
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-neutral-600">
              Transmissão, salas simultâneas, chat, enquetes, patrocinadores e interação em um espaço integrado à operação do evento.
            </p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-600">
              Do acesso do participante ao certificado, tudo conectado à Doity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenCreateModal}
                className="btn btn-primary"
              >
                Criar evento
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
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
            <img
              src="/assets/doity-play/hero.jpg"
              alt="Doity Play com transmissão, chat e programação"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </header>

      {/* Muito além de colocar uma live no ar */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Muito além de colocar uma live no ar
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              O Doity Play transforma a transmissão em uma experiência de evento.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
            <li className="overflow-hidden rounded-2xl border border-black/8 bg-[#faf8f7]">
              <div className="aspect-[16/10] bg-white">
                <img src="/assets/doity-play/pilar-transmissao.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">Transmissão</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Conteúdo ao vivo ou gravado dentro do ambiente do evento.
                </p>
              </div>
            </li>
            <li className="overflow-hidden rounded-2xl border border-black/8 bg-[#faf8f7]">
              <div className="aspect-[16/10] bg-white">
                <img src="/assets/doity-play/pilar-salas.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">Salas simultâneas</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Organize diferentes trilhas e atividades acontecendo ao mesmo tempo.
                </p>
              </div>
            </li>
            <li className="overflow-hidden rounded-2xl border border-black/8 bg-[#faf8f7]">
              <div className="aspect-[16/10] bg-white">
                <img src="/assets/doity-play/pilar-interacao.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">Interação</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Chat, perguntas e enquetes durante as transmissões.
                </p>
              </div>
            </li>
            <li className="overflow-hidden rounded-2xl border border-black/8 bg-[#faf8f7]">
              <div className="aspect-[16/10] bg-white">
                <img src="/assets/doity-play/pilar-patrocinadores.png" alt="" className="w-full h-full object-contain p-2" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">Patrocinadores</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Crie espaços digitais para marcas, parceiros e apoiadores.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Recepção */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Uma recepção para o evento online
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Ao entrar, o participante encontra um ambiente central com acesso ao que está acontecendo.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2 list-none p-0">
              {["Programação", "Salas", "Transmissões", "Patrocinadores", "Informações do evento"].map((i) => (
                <li key={i} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-neutral-900">
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-500">
              Tudo organizado em um único espaço, sem distribuir links diferentes para cada atividade.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
            <img
              src="/assets/doity-play/secao-recepcao.jpg"
              alt="Recepção do ambiente virtual Doity Play"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Várias salas */}
      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
                Várias salas. Um único evento.
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Crie experiências com conteúdos acontecendo simultaneamente.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 list-none p-0">
                {[
                  "Palco principal", "Salas temáticas", "Workshops",
                  "Mesas", "Sessões científicas", "Conteúdos exclusivos"
                ].map((s) => (
                  <li key={s} className="rounded-2xl border border-black/8 bg-[#faf8f7] px-4 py-3 text-sm font-semibold text-neutral-900">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-neutral-500">
                O participante navega entre as atividades sem sair do ambiente do evento.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f7] shadow-xl">
              <img
                src="/assets/doity-play/secao-salas.jpg"
                alt="Salas disponíveis no Doity Play"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transmissão com interação */}
      <section className="border-b border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
              Transmissão com participação do público
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Não deixe o participante apenas assistindo.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
              <img
                src="/assets/doity-play/secao-transmissao.jpg"
                alt="Transmissão principal no Doity Play"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex h-full flex-col justify-between gap-4">
              <div className="flex flex-1 flex-col justify-center rounded-2xl border border-black/8 bg-white p-5">
                <h3 className="font-semibold text-neutral-900">Chat ao vivo</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Comentários, perguntas e conversas durante a atividade.
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-center rounded-2xl border border-black/8 bg-white p-5">
                <h3 className="font-semibold text-neutral-900">Enquetes em tempo real</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Crie votações e acompanhe a participação com gráficos imediatos.
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-center rounded-2xl border border-black/8 bg-white p-5">
                <h3 className="font-semibold text-neutral-900">Perguntas aos palestrantes</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Modere perguntas enviadas pelo público durante a palestra.
                </p>
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
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl tracking-tight md:text-4xl font-normal text-white">
            Leve seu evento para além do espaço físico
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Transmissão, interação, salas, patrocinadores e operação em um único ambiente digital.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenCreateModal}
              className="btn btn-primary"
            >
              Criar evento
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
