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
    q: "O que é o CAEX?",
    a: "É a Central de Atendimento ao Expositor da Doity. Uma solução para centralizar a gestão entre organização, expositores e patrocinadores antes, durante e depois do evento.",
  },
  {
    q: "Para quem o CAEX é indicado?",
    a: "Principalmente para feiras, congressos, convenções, exposições e outros eventos com diversos expositores, patrocinadores ou stands.",
  },
  {
    q: "O expositor também utiliza o sistema?",
    a: "Sim. Cada expositor possui uma área própria para acessar documentos, cadastrar sua equipe, enviar entregas, acompanhar aprovações, informar dados operacionais e abrir chamados.",
  },
  {
    q: "Como funcionam as entregas e o checklist?",
    a: "A organização define o que cada expositor precisa enviar e o expositor acompanha as solicitações na sua área. Cada entrega possui um status, permitindo acompanhar pendências, envios, análises e aprovações.",
  },
  {
    q: "Posso controlar credenciais e convites?",
    a: "Sim. O CAEX permite organizar pessoas vinculadas aos stands, suas credenciais, acessos e convites.",
  },
  {
    q: "O CAEX substitui planilhas e WhatsApp?",
    a: "O objetivo é centralizar processos que normalmente ficam espalhados entre planilhas, Drive, e-mails e WhatsApp. A comunicação externa pode continuar existindo, mas a informação operacional permanece organizada dentro do CAEX.",
  },
  {
    q: "O CAEX se integra com outras soluções da Doity?",
    a: "Sim. O módulo faz parte do ecossistema Doity e pode trabalhar em conjunto com credenciamento, aplicativo do evento, inscrições, convites e captura de leads.",
  },
  {
    q: "Quanto custa?",
    a: "O CAEX é contratado de acordo com o porte e as necessidades do evento. Nossa equipe monta uma proposta de acordo com a operação.",
  },
];

export function CaexPage({
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
      <header className="relative overflow-hidden border-b border-black/8 bg-[linear-gradient(165deg,_#fff0f0_0%,_#ffffff_45%,_#f7f5f4_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1.05fr] md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
              CAEX — Central de Atendimento ao Expositor
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.08] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.05rem] font-normal">
              Gestão de expositores e patrocinadores sem caos
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-neutral-600 md:text-xl">
              Centralize documentos, entregas, credenciais, convites, equipe, chamados e operação dos stands em um único ambiente.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600">
              A organização define o que precisa ser feito. Cada expositor acessa sua própria área, envia o que foi solicitado e acompanha tudo por lá.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenContactModal}
                className="btn btn-primary"
              >
                Solicitar demonstração
              </button>
              <button
                type="button"
                onClick={onOpenContactModal}
                className="btn btn-outline"
              >
                Falar com um especialista
              </button>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Planilhas, Drive, e-mails e WhatsApp deixam de ser o centro da operação.
            </p>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden">
            <img
              src="/assets/caex/hero-caex.png"
              alt="Painel CAEX com visão gerencial da operação de expositores"
              className="h-auto w-full max-w-[min(100%,560px)] object-contain"
            />
          </div>
        </div>
      </header>

      {/* Menos cobrança. Mais controle */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal">
          Menos cobrança. Mais controle da operação.
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-600 text-left">
          <p>Gerenciar dezenas ou centenas de expositores envolve muito mais do que manter uma lista de empresas.</p>
          <p>É preciso receber artes, aprovar documentos, distribuir manuais, cadastrar equipes, controlar credenciais, organizar veículos e acompanhar prazos.</p>
          <p>Quando isso fica espalhado entre planilhas e e-mails, a equipe perde tempo tentando descobrir o que já foi entregue.</p>
          <p className="font-semibold text-neutral-900">Com o CAEX, tudo fica centralizado.</p>
        </div>
        <p className="mt-8 text-xl font-semibold leading-snug text-[#ff2b34]">
          A organização acompanha. O expositor executa. O CAEX organiza.
        </p>
      </section>

      {/* Da contratação do stand à operação no evento */}
      <section className="border-y border-black/8 bg-[#faf8f7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal text-center mb-12">
            Da contratação do stand à operação no evento
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Cadastre expositores e patrocinadores", "Organize os parceiros por evento, categoria e cota. Cada empresa fica vinculada à sua própria operação."],
              ["02", "Defina o que cada expositor entrega", "Solicite artes, manuais e documentos. Acompanhe pendente, enviado, em análise e aprovado."],
              ["03", "Publique os documentos oficiais", "Centralize manuais, regulamentos, plantas e orientações sem procurar a última versão em conversas."],
              ["04", "Organize equipe e credenciais", "Cada expositor cadastra quem participará da operação do stand sem listas separadas."],
              ["05", "Organize a operação do stand", "Cadastro de veículos, pessoas, locais de reunião e leads capturados na feira."],
              ["06", "Centralize o atendimento", "O expositor abre chamados na própria área, com histórico completo e respostas registradas."],
            ].map(([num, title, desc]) => (
              <div key={num} className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
                <p className="text-3xl text-[#ff2b34] font-bold">{num}</p>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antes x Depois */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-3xl tracking-tight text-neutral-900 md:text-4xl font-normal text-center">
          De dezenas de controles para uma única operação
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 mb-6">
              Antes do CAEX
            </h3>
            <ul className="space-y-3 list-none p-0">
              {[
                ["Lista de expositores em planilha", "Versões diferentes e informações espalhadas."],
                ["Documentos no Drive e no e-mail", "Dificuldade para saber se todos acessaram o arquivo correto."],
                ["Artes enviadas pelo WhatsApp", "Arquivos misturados com conversas informais."],
                ["Credenciais recebidas em listas manuais", "Erros de digitação e retrabalho na entrada."],
                ["Cobrança individual de entregas", "A equipe precisa caçar quem ainda não enviou."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-2xl border border-black/10 bg-white px-5 py-4">
                  <p className="font-semibold text-neutral-900 m-0">{t}</p>
                  <p className="mt-1 text-xs text-neutral-500 m-0">{d}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#ff2b34] mb-6">
              Com o CAEX
            </h3>
            <ul className="space-y-3 list-none p-0">
              {[
                "Cadastro centralizado por evento e cota",
                "Documentos oficiais na área do expositor",
                "Entregas com prazo e status de aprovação",
                "Equipe, convidados e credenciais organizados",
                "Pendências visíveis para organização e expositor",
                "Chamados com histórico completo de atendimento",
              ].map((item) => (
                <li key={item} className="rounded-2xl bg-[#ff2b34] px-5 py-4 text-sm font-semibold text-white">
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-black/8">
        <h2 className="text-3xl tracking-tight text-neutral-900 font-normal">
          Quem organiza com a Doity
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Tecnologia para reduzir trabalho operacional e dar mais controle às equipes de eventos.
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
            </div>
          </li>
          <li className="flex flex-col gap-4">
            <blockquote className="text-neutral-900 leading-relaxed m-0 text-base italic">
              “Antes realizei um evento para 500 participantes com uma equipe de 11 pessoas. Hoje somos apenas duas: reduzimos custos, aumentamos a margem e redirecionamos a atenção para marketing e divulgação.”
            </blockquote>
            <div className="mt-auto flex items-center gap-3">
              <div className="size-12 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-700">
                FJ
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-neutral-900 m-0 text-sm">Felipe Johnnata</p>
                <p className="text-sm text-neutral-500 m-0">Prime Cursos & Eventos</p>
              </div>
            </div>
          </li>
        </ul>
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
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl tracking-tight md:text-4xl font-normal text-white">
            Tire a operação dos expositores da planilha
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/75">
            Centralize parceiros, documentos, entregas, credenciais, equipe e atendimento em um único lugar.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={onOpenContactModal}
              className="btn btn-primary"
            >
              Solicitar demonstração
            </button>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
      <CookieBox />
    </main>
  );
}
