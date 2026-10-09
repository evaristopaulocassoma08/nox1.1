import React, { useState } from "react";
import {
  BrandButton,
  CookieBox,
  SiteFooter,
  SiteHeader,
  NavHref,
} from "@/components/site-chrome";
import {
  Check,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  QrCode,
  FileText,
  Users,
  BarChart3,
  Award,
  Smartphone,
  Layers,
  Sparkles,
  HelpCircle,
  Calculator,
} from "lucide-react";

interface PrecosPageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

const includedFeatures = [
  {
    icon: <FileText className="size-4" />,
    title: "Site do evento",
    description: "Crie e publique a página do evento em minutos com visual profissional.",
  },
  {
    icon: <Users className="size-4" />,
    title: "Inscrições",
    description: "Crie ingressos, múltiplos lotes, cupons de desconto e formulários personalizados.",
  },
  {
    icon: <CreditCard className="size-4" />,
    title: "Pagamentos",
    description: "Pix, cartão e boleto nas inscrições pagas, já inclusos na taxa de 10%.",
  },
  {
    icon: <Users className="size-4" />,
    title: "Participantes",
    description: "Acompanhe inscrições, envie comunicados e gerencie dados dos participantes.",
  },
  {
    icon: <BarChart3 className="size-4" />,
    title: "Relatórios",
    description: "Consulte métricas completas de vendas, inscrições e operação financeira em tempo real.",
  },
  {
    icon: <Award className="size-4" />,
    title: "Certificados",
    description: "Crie e disponibilize certificados digitais com envio automático e validação pública.",
  },
  {
    icon: <QrCode className="size-4" />,
    title: "Credenciamento básico",
    description: "Faça o check-in rápido dos participantes na entrada pelo aplicativo da equipe.",
  },
];

const advancedModules = [
  {
    title: "App do evento",
    description: "Aplicativo exclusivo para iOS e Android com a identidade da sua marca.",
    image: "/assets/app/hero.png",
    href: "/app-para-eventos",
    tag: "Preço sob consulta",
  },
  {
    title: "App multieventos",
    description: "Um aplicativo institucional para reunir múltiplos eventos de uma organização.",
    image: "/assets/multieventos/hero.png",
    href: "/aplicativo-multieventos",
    tag: "Preço sob consulta",
  },
  {
    title: "Credenciamento profissional",
    description: "Estruturas com impressão térmica, autoatendimento, equipamentos e operação avançada.",
    image: "/assets/checkin/hero.webp",
    href: "/app-de-checkin",
    tag: "Preço sob consulta",
  },
  {
    title: "Reconhecimento facial",
    description: "Identificação biométrica e controle de acesso ultrarrápido para eventos de grande porte.",
    image: "/assets/checkin/secao-etiquetas.webp",
    href: "/app-de-checkin",
    tag: "Preço sob consulta",
  },
  {
    title: "Doity Play",
    description: "Ambiente digital completo e imersivo para eventos online e transmissões híbridas.",
    image: "/assets/doity-play/hero.jpg",
    href: "/doity-play",
    tag: "Preço sob consulta",
  },
  {
    title: "CAEX",
    description: "Central de Atendimento ao Expositor para gestão completa de patrocinadores e estandes.",
    image: "/assets/caex/hero-caex.png",
    href: "/caex-central-atendimento-ao-expositor",
    tag: "Preço sob consulta",
  },
  {
    title: "Curadoria",
    description: "Submissão de trabalhos científicos, palestras, call for papers e avaliação em banca.",
    image: "/assets/curadoria/hero-programacao.png",
    href: "/curadoria",
    tag: "Preço sob consulta",
  },
];

const faqs = [
  {
    q: "Criar um evento na Doity custa alguma coisa?",
    a: "Não. Você pode criar e publicar o seu evento sem nenhuma taxa de adesão e sem mensalidade. A plataforma só cobra taxa quando você realiza vendas de inscrições pagas.",
  },
  {
    q: "Quanto custa para vender inscrições?",
    a: "Nas inscrições pagas, a taxa de serviço é de 10% por venda concluída. Não há cobrança para ingressos ou inscrições gratuitas (até 500 inscrições).",
  },
  {
    q: "A taxa inclui os meios de pagamento?",
    a: "Sim! Pix, cartão de crédito e boleto bancário já estão incluídos na taxa de serviço de 10%. Não há custos adicionais com adquirentes ou gateways. No boleto, pode haver tarifa mínima de R$ 2,50.",
  },
  {
    q: "Eventos gratuitos pagam alguma taxa?",
    a: "Não. No plano padrão, eventos gratuitos podem receber até 500 inscrições com taxa R$ 0, usufruindo de site, formulário de inscrição, lista de participantes e emissão de certificados.",
  },
  {
    q: "Posso absorver ou repassar a taxa?",
    a: "Sim! Você tem total liberdade. Se optar por absorver, o participante paga exatamente o valor do ingresso e você recebe 90%. Se optar por repassar, a taxa é somada no checkout e você recebe 100% do valor nominal do ingresso.",
  },
  {
    q: "Quando recebo o dinheiro das vendas?",
    a: "Pix fica disponível imediatamente. Boleto fica disponível imediatamente após a compensação bancária. Cartão de crédito fica disponível em 14 dias, permitindo parcelamento em até 12x para os participantes.",
  },
  {
    q: "Preciso de CNPJ para criar e receber?",
    a: "Não necessariamente. É possível operar com CPF ou CNPJ, conforme as regras de cadastro e recebimento da carteira digital integrada.",
  },
  {
    q: "Existe mensalidade ou contrato de fidelidade?",
    a: "Não para a utilização padrão da plataforma. Você só paga quando vender. Algumas soluções específicas sob medida (como App White Label ou locação de totens) possuem contratação própria.",
  },
  {
    q: "A pesquisa de satisfação está incluída no evento gratuito?",
    a: "Não. A ferramenta integrada de pesquisa de satisfação e NPS automatizada está disponível nos eventos pagos.",
  },
  {
    q: "App, CAEX e Curadoria estão incluídos nos 10%?",
    a: "Não. Esses e outros módulos corporativos avançados possuem contratação e orçamento específicos de acordo com a escala e necessidade do seu evento.",
  },
  {
    q: "E para eventos de grande porte?",
    a: "A equipe comercial da Doity monta uma proposta personalizada considerando volume de participantes, infraestrutura presencial, módulos avançados, equipamentos de autoatendimento e suporte dedicado.",
  },
];

const compareTable = [
  { item: "Criar o evento", free: "Grátis", paid: "Grátis" },
  { item: "Publicar o site", free: "Grátis", paid: "Grátis" },
  { item: "Inscrições", free: "Até 500", paid: "Sem limite padrão" },
  { item: "Taxa de serviço", free: "Grátis (R$ 0)", paid: "10% por venda" },
  { item: "Pix", free: "—", paid: "Incluído" },
  { item: "Cartão de crédito", free: "—", paid: "Incluído (até 12x)" },
  { item: "Boleto bancário", free: "—", paid: "Incluído*" },
  { item: "Lotes e cupons", free: "Disponível", paid: "Disponível" },
  { item: "Relatórios de vendas", free: "Disponível", paid: "Disponível" },
  { item: "Certificados digitais", free: "Disponível", paid: "Disponível" },
  { item: "Pesquisa de satisfação", free: "Não", paid: "Disponível" },
  { item: "Módulos avançados", free: "Sob consulta", paid: "Sob consulta" },
];

export function PrecosPage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: PrecosPageProps) {
  // Calculator state
  const [ticketPrice, setTicketPrice] = useState<number>(100);
  const [ticketQty, setTicketQty] = useState<number>(50);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const feeRate = 0.1; // 10%
  const feeAbsorbed = ticketPrice * feeRate;
  const organizerReceivesAbsorbed = ticketPrice - feeAbsorbed;

  const feePassed = ticketPrice * feeRate;
  const participantPaysPassed = ticketPrice + feePassed;
  const organizerReceivesPassed = ticketPrice;

  const totalSalesVolume = ticketPrice * ticketQty;
  const totalOrganizerReceives = organizerReceivesAbsorbed * ticketQty;

  const formatCurrency = (val: number) => {
    return val.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#141010] flex flex-col font-sans">
      <SiteHeader
        onNavigate={onNavigate}
        onOpenCreateModal={onOpenCreateModal}
        onOpenContactModal={onOpenContactModal}
        onOpenLoginModal={onOpenLoginModal}
      />

      <main className="flex-1">
        {/* HERO SECTION */}
        <header className="border-b border-[#141010]/8 bg-[linear-gradient(165deg,_#fff0f0_0%,_#ffffff_48%,_#f7f5f4_100%)]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff2b34]/10 text-[#ff2b34] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={14} /> Planos e Preços Transparentes
            </div>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-[#141010] md:text-5xl font-bold">
              Comece grátis. Pague quando vender.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5e5a5a]">
              Crie e publique seu evento sem adesão e sem mensalidade.
            </p>
            <p className="mt-3 max-w-2xl text-[#5e5a5a]">
              Para eventos pagos, a Doity cobra{" "}
              <span className="font-semibold text-[#141010]">
                10% por inscrição vendida
              </span>
              , com Pix, cartão e boleto já incluídos na taxa de serviço.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenCreateModal}
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors bg-[#ff2b34] text-white hover:bg-[#e01e27] shadow-sm cursor-pointer"
              >
                Criar evento grátis
              </button>
              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors border border-[#141010]/15 text-[#141010] hover:border-[#141010]/40 bg-white/60 cursor-pointer"
              >
                Falar com um especialista
              </button>
            </div>

            {/* 2 MAIN PRICING CARDS */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Eventos Gratuitos */}
              <div className="rounded-3xl border border-[#141010]/10 bg-white p-8 shadow-[0_20px_50px_-32px_rgba(20,16,16,0.35)] md:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#5e5a5a]">
                    Eventos gratuitos
                  </p>
                  <p className="mt-4 font-display text-5xl font-bold tracking-tight text-[#141010] md:text-6xl">
                    R$ 0
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#141010]">
                    Grátis
                  </p>
                  <p className="mt-4 text-[#5e5a5a]">
                    Sem taxa de serviço para inscrições gratuitas.
                  </p>
                  <div className="mt-4 p-3 rounded-xl bg-[#f9f7f6] border border-[#141010]/5">
                    <p className="text-sm font-semibold text-[#141010]">
                      Até 500 inscrições por evento no plano padrão.
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-[#5e5a5a]">
                    Inclui recursos essenciais para criar, divulgar e gerenciar seu evento: site, formulário, lista de presença e certificados digitais.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#141010]/8">
                  <button
                    type="button"
                    onClick={onOpenCreateModal}
                    className="w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors bg-[#141010] text-white hover:bg-[#333] cursor-pointer"
                  >
                    Criar evento grátis
                  </button>
                </div>
              </div>

              {/* Eventos Pagos */}
              <div className="rounded-3xl border-2 border-[#ff2b34] bg-[#fff8f8] p-8 shadow-[0_20px_50px_-32px_rgba(255,43,52,0.35)] md:p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-5 right-5 bg-[#ff2b34] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Mais popular
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ff2b34]">
                    Eventos pagos
                  </p>
                  <p className="mt-4 font-display text-5xl font-bold tracking-tight text-[#ff2b34] md:text-6xl">
                    10%
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#141010]">
                    Por inscrição vendida
                  </p>
                  <p className="mt-4 text-[#5e5a5a]">
                    Você só paga quando recebe uma inscrição paga. Nada adiantado.
                  </p>

                  <p className="mt-5 text-sm font-semibold text-[#141010]">
                    A taxa de 10% já inclui tudo:
                  </p>
                  <ul className="mt-3 grid grid-cols-2 gap-2.5 text-sm text-[#141010]">
                    <li className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#ff2b34]" />
                      Plataforma Doity
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#ff2b34]" />
                      Pix imediato
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#ff2b34]" />
                      Cartão de crédito
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#ff2b34]" />
                      Boleto bancário
                    </li>
                  </ul>

                  <div className="mt-6 space-y-1 text-sm text-[#5e5a5a]">
                    <p className="font-medium text-[#141010]">Sem adesão. Sem mensalidade.</p>
                    <p className="text-xs">No boleto, pode haver tarifa mínima de R$ 2,50.</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#ff2b34]/20">
                  <button
                    type="button"
                    onClick={onOpenCreateModal}
                    className="w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors bg-[#ff2b34] text-white hover:bg-[#e01e27] shadow cursor-pointer"
                  >
                    Começar agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* INTERACTIVE FEE SIMULATOR */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f9f7f6] text-[#5e5a5a] text-xs font-semibold mb-3">
                <Calculator size={13} className="text-[#ff2b34]" /> Simulador Interativo
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Você escolhe quem paga a taxa
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a] leading-relaxed">
                A taxa é a mesma nos dois casos: 10% sobre o ingresso. Você decide se prefere absorver no seu lucro ou repassar no checkout do participante.
              </p>
            </div>

            {/* Interactive controls */}
            <div className="mt-8 p-6 rounded-2xl bg-[#f9f7f6] border border-[#141010]/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1 w-full">
                <label htmlFor="ticket-slider" className="block text-sm font-semibold text-[#141010] mb-2">
                  Valor do seu ingresso:{" "}
                  <span className="text-[#ff2b34] text-lg font-bold">
                    {formatCurrency(ticketPrice)}
                  </span>
                </label>
                <input
                  id="ticket-slider"
                  type="range"
                  min="10"
                  max="1000"
                  step="5"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#ff2b34]"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {[25, 50, 100, 200, 350, 500].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setTicketPrice(preset)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
                        ticketPrice === preset
                          ? "bg-[#ff2b34] text-white"
                          : "bg-white border border-[#141010]/10 text-[#5e5a5a] hover:bg-neutral-50"
                      }`}
                    >
                      R$ {preset}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-[#141010]/10 pt-4 md:pt-0 md:pl-6">
                <label htmlFor="ticket-qty-input" className="block text-xs font-medium text-[#5e5a5a] mb-1">
                  Estimativa de participantes:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="ticket-qty-input"
                    type="number"
                    min="1"
                    max="10000"
                    value={ticketQty}
                    onChange={(e) => setTicketQty(Math.max(1, Number(e.target.value)))}
                    className="w-24 px-3 py-1.5 border border-[#141010]/20 rounded-lg text-sm font-semibold"
                  />
                  <span className="text-xs text-[#5e5a5a]">inscrições</span>
                </div>
                <p className="mt-2 text-xs text-[#5e5a5a]">
                  Volume total:{" "}
                  <strong className="text-[#141010]">
                    {formatCurrency(totalSalesVolume)}
                  </strong>
                </p>
              </div>
            </div>

            {/* Side by side comparison */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Absorver a taxa */}
              <div className="rounded-2xl border border-[#141010]/10 bg-[#f9f7f6] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#141010]">
                      Absorver a taxa
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-200/60 text-[#5e5a5a]">
                      Sem acréscimo pro cliente
                    </span>
                  </div>
                  <p className="mt-3 text-[#5e5a5a] text-sm leading-relaxed">
                    Você define o valor final do ingresso e a taxa de 10% é descontada diretamente no repasse.
                  </p>

                  <div className="mt-6 rounded-xl bg-white p-5 border border-[#141010]/8 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#5e5a5a]">
                      Preço anunciado
                    </p>
                    <p className="text-2xl font-bold text-[#141010]">
                      {formatCurrency(ticketPrice)}
                    </p>

                    <dl className="mt-4 space-y-2 border-t border-[#141010]/8 pt-4 text-sm">
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-[#5e5a5a]">Participante paga no checkout</dt>
                        <dd className="font-semibold text-[#141010]">
                          {formatCurrency(ticketPrice)}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4 text-red-600">
                        <dt>Taxa de serviço (10%)</dt>
                        <dd className="font-semibold">
                          − {formatCurrency(feeAbsorbed)}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4 border-t border-[#141010]/8 pt-3">
                        <dt className="font-semibold text-[#141010]">Você recebe por venda</dt>
                        <dd className="text-xl font-bold text-[#141010]">
                          {formatCurrency(organizerReceivesAbsorbed)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="mt-4 pt-3 text-xs text-[#5e5a5a] flex justify-between">
                  <span>Recebimento total com {ticketQty} vendas:</span>
                  <strong className="text-[#141010] text-sm">
                    {formatCurrency(totalOrganizerReceives)}
                  </strong>
                </div>
              </div>

              {/* Repassar a taxa */}
              <div className="rounded-2xl border-2 border-emerald-500/30 bg-[#f9f7f6] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#141010]">
                      Repassar a taxa
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      Você recebe 100%
                    </span>
                  </div>
                  <p className="mt-3 text-[#5e5a5a] text-sm leading-relaxed">
                    A taxa é adicionada ao valor do ingresso de forma transparente e detalhada no checkout.
                  </p>

                  <div className="mt-6 rounded-xl bg-white p-5 border border-[#141010]/8 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#5e5a5a]">
                      Preço do ingresso
                    </p>
                    <p className="text-2xl font-bold text-[#141010]">
                      {formatCurrency(ticketPrice)}
                    </p>

                    <dl className="mt-4 space-y-2 border-t border-[#141010]/8 pt-4 text-sm">
                      <div className="flex items-baseline justify-between gap-4 text-[#5e5a5a]">
                        <dt>Taxa Doity (10%) no checkout</dt>
                        <dd className="font-semibold">
                          + {formatCurrency(feePassed)}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-[#5e5a5a]">Participante paga no checkout</dt>
                        <dd className="font-semibold text-[#141010]">
                          {formatCurrency(participantPaysPassed)}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4 border-t border-[#141010]/8 pt-3">
                        <dt className="font-semibold text-[#141010]">Você recebe por venda</dt>
                        <dd className="text-xl font-bold text-emerald-600">
                          {formatCurrency(organizerReceivesPassed)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="mt-4 pt-3 text-xs text-[#5e5a5a] flex justify-between">
                  <span>Recebimento total com {ticketQty} vendas:</span>
                  <strong className="text-emerald-700 text-sm">
                    {formatCurrency(organizerReceivesPassed * ticketQty)}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE ESTÁ INCLUÍDO */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              O que está incluído?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#5e5a5a]">
              Estes recursos vêm prontos com a plataforma, tanto no evento gratuito quanto no pago. Sem mensalidade e sem plano extra para desbloquear.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {includedFeatures.map((feat) => (
                <li
                  key={feat.title}
                  className="rounded-2xl border border-[#141010]/8 bg-white p-6 shadow-sm hover:shadow transition"
                >
                  <span
                    className="flex size-10 items-center justify-center rounded-xl bg-[#fff0f0] text-[#ff2b34]"
                    aria-hidden="true"
                  >
                    {feat.icon}
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#5e5a5a]">
                    Incluído na plataforma
                  </p>
                  <h3 className="mt-2 text-base font-bold text-[#141010]">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5e5a5a] leading-relaxed">
                    {feat.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-white border border-[#141010]/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-[#5e5a5a] max-w-3xl">
                <strong>Resumo:</strong> Evento gratuito possui taxa R$ 0 para até 500 inscrições. Evento pago conta com 10% por venda incluindo pagamentos. Pesquisa de satisfação entra no evento pago. Aplicativos, CAEX e Curadoria possuem orçamento sob consulta.
              </p>
              <NavHref
                href="/plataforma-de-eventos"
                navigate={onNavigate}
                className="text-sm font-semibold text-[#ff2b34] hover:underline whitespace-nowrap flex items-center gap-1"
              >
                Ver plataforma completa <ArrowRight size={14} />
              </NavHref>
            </div>
          </div>
        </section>

        {/* PRECISA DE UMA OPERAÇÃO MAIOR? */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Precisa de uma operação maior?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#5e5a5a]">
              Algumas soluções avançadas têm contratação específica, de acordo com o porte, complexidade e as necessidades do seu evento.
            </p>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advancedModules.map((item) => (
                <li key={item.title}>
                  <NavHref
                    href={item.href}
                    navigate={onNavigate}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#141010]/10 bg-[#f9f7f6] transition hover:border-[#ff2b34]/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold text-[#141010] group-hover:text-[#ff2b34] transition">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-[#5e5a5a] leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-[#141010]/8 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#ff2b34]">
                          {item.tag}
                        </span>
                        <span className="text-xs font-medium text-[#141010] flex items-center gap-1 group-hover:underline">
                          Saiba mais <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </NavHref>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors border border-[#141010]/15 text-[#141010] hover:border-[#141010]/40 bg-white cursor-pointer"
              >
                Falar com um especialista sobre módulos
              </button>
            </div>
          </div>
        </section>

        {/* COMO VOCÊ RECEBE OS PAGAMENTOS */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Como você recebe os pagamentos
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#5e5a5a]">
              As vendas ficam vinculadas à carteira digital utilizada para a operação financeira segura do evento.
            </p>

            {/* FLOW BADGES */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-[#141010]/10 bg-white p-5 text-sm font-semibold text-[#141010] shadow-sm">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#f9f7f6] px-4 py-2 border border-[#141010]/5">
                  1. Participante
                </span>
                <span className="text-[#5e5a5a] font-bold">→</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#f9f7f6] px-4 py-2 border border-[#141010]/5">
                  2. Pagamento
                </span>
                <span className="text-[#5e5a5a] font-bold">→</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#f9f7f6] px-4 py-2 border border-[#141010]/5">
                  3. Carteira
                </span>
                <span className="text-[#5e5a5a] font-bold">→</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#ff2b34]/10 text-[#ff2b34] px-4 py-2 border border-[#ff2b34]/20">
                  4. Sua Conta Bancária
                </span>
              </div>
            </div>

            {/* 4 STEPS */}
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-2xl border border-[#141010]/8 bg-white p-6 shadow-sm">
                <p className="font-display text-2xl font-bold text-[#ff2b34]">01</p>
                <h3 className="mt-2 font-bold text-[#141010]">O participante se inscreve</h3>
                <p className="mt-2 text-sm text-[#5e5a5a] leading-relaxed">
                  Escolhe o ingresso no site do evento e realiza o pagamento com Pix, Cartão ou Boleto.
                </p>
              </li>
              <li className="rounded-2xl border border-[#141010]/8 bg-white p-6 shadow-sm">
                <p className="font-display text-2xl font-bold text-[#ff2b34]">02</p>
                <h3 className="mt-2 font-bold text-[#141010]">O pagamento é confirmado</h3>
                <p className="mt-2 text-sm text-[#5e5a5a] leading-relaxed">
                  A venda aparece na gestão financeira do evento e o participante recebe o comprovante.
                </p>
              </li>
              <li className="rounded-2xl border border-[#141010]/8 bg-white p-6 shadow-sm">
                <p className="font-display text-2xl font-bold text-[#ff2b34]">03</p>
                <h3 className="mt-2 font-bold text-[#141010]">O valor fica disponível</h3>
                <p className="mt-2 text-sm text-[#5e5a5a] leading-relaxed">
                  O prazo varia pelo meio de pagamento escolhido pelo participante (veja a tabela).
                </p>
              </li>
              <li className="rounded-2xl border border-[#141010]/8 bg-white p-6 shadow-sm">
                <p className="font-display text-2xl font-bold text-[#ff2b34]">04</p>
                <h3 className="mt-2 font-bold text-[#141010]">Você transfere para sua conta</h3>
                <p className="mt-2 text-sm text-[#5e5a5a] leading-relaxed">
                  Solicite a transferência dos valores diretamente na carteira para o seu banco.
                </p>
              </li>
            </ol>

            {/* PRAZOS DE RECEBIMENTO */}
            <div className="mt-10 max-w-md rounded-2xl border border-[#141010]/8 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-[#141010] text-lg">Prazos de recebimento</h3>
              <p className="mt-1 text-sm text-[#5e5a5a]">
                Transparência completa nos prazos de liberação dos recursos:
              </p>
              <dl className="mt-5 space-y-3">
                <div className="flex items-baseline justify-between gap-4 border-t border-[#141010]/8 pt-3 first:border-t-0 first:pt-0">
                  <dt className="text-[#5e5a5a] flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500" /> Pix
                  </dt>
                  <dd className="font-bold text-[#141010]">Imediato</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-[#141010]/8 pt-3">
                  <dt className="text-[#5e5a5a] flex items-center gap-2">
                    <span className="size-2 rounded-full bg-blue-500" /> Boleto bancário
                  </dt>
                  <dd className="font-bold text-[#141010]">Imediato após compensação</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-[#141010]/8 pt-3">
                  <dt className="text-[#5e5a5a] flex items-center gap-2">
                    <span className="size-2 rounded-full bg-purple-500" /> Cartão de crédito
                  </dt>
                  <dd className="font-bold text-[#141010]">14 dias</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-[#141010]/8 pt-3">
                  <dt className="text-[#5e5a5a] flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-500" /> Parcelamento
                  </dt>
                  <dd className="font-bold text-[#141010]">Até 12x para o cliente</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* CPF OU CNPJ */}
        <section className="border-b border-[#141010]/8 bg-white py-16 text-center md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <span className="inline-flex items-center justify-center size-12 rounded-full bg-[#f9f7f6] text-[#ff2b34] mb-4">
              <ShieldCheck size={24} />
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010]">
              Opere com CPF ou CNPJ
            </h2>
            <p className="mt-4 text-lg text-[#5e5a5a]">
              Você não precisa necessariamente ter uma empresa constituída para começar a organizar e monetizar seus eventos.
            </p>
            <p className="mt-3 text-[#5e5a5a]">
              A operação pode utilizar{" "}
              <span className="font-semibold text-[#141010]">
                CPF de pessoa física ou CNPJ de empresa / associação
              </span>
              , conforme as regras de cadastro e recebimento da carteira digital.
            </p>
          </div>
        </section>

        {/* EVENTO GRANDE */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
                Enterprise & Grandes Congressos
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Evento grande? Vamos montar a operação com você.
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a] leading-relaxed">
                Eventos com milhares de participantes, múltiplos acessos, credenciamento avançado, aplicativo personalizado, dezenas de expositores ou necessidades operacionais específicas demandam uma estrutura robusta.
              </p>
              <p className="mt-3 text-[#5e5a5a]">
                Nossa equipe comercial e de operações elabora uma proposta personalizada de acordo com o porte e o escopo do seu projeto.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors bg-[#ff2b34] text-white hover:bg-[#e01e27] cursor-pointer"
                >
                  Falar com um especialista
                </button>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#141010]/10 bg-white shadow-lg">
              <img
                src="/assets/checkin/secao-painel.webp"
                alt="Operação presencial com credenciamento e painel Doity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* TABELA COMPARATIVA (COMPARE) */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] text-center md:text-4xl">
              Compare os recursos
            </h2>
            <p className="mt-3 text-center text-[#5e5a5a]">
              Visão lado a lado do que está disponível em cada formato de evento.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-[#141010]/10 shadow-sm">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead className="bg-[#f9f7f6]">
                  <tr>
                    <th className="px-5 py-4 font-bold text-[#141010]">Recurso</th>
                    <th className="px-5 py-4 font-bold text-[#141010]">Evento gratuito</th>
                    <th className="px-5 py-4 font-bold text-[#ff2b34]">Evento pago</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#141010]/8">
                  {compareTable.map((row) => (
                    <tr key={row.item} className="hover:bg-neutral-50/50 transition">
                      <th className="px-5 py-3.5 font-medium text-[#141010]">
                        {row.item}
                      </th>
                      <td className="px-5 py-3.5 text-[#5e5a5a]">
                        {row.free}
                      </td>
                      <td className="px-5 py-3.5 font-semibold text-[#141010]">
                        {row.paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#5e5a5a]">
              * No boleto bancário pode haver tarifa mínima de R$ 2,50 por transação.
            </p>
          </div>
        </section>

        {/* PERGUNTAS FREQUENTES (FAQ) */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
              Tire suas dúvidas
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="mt-3 text-[#5e5a5a]">
              Tudo o que você precisa saber sobre as taxas, recebimentos e funcionamento da Doity.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#141010]/10 bg-white overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-[#141010] hover:text-[#ff2b34] transition cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#ff2b34]" : "text-[#5e5a5a]"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-[#5e5a5a] leading-relaxed border-t border-[#141010]/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="bg-[#141010] text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Crie seu evento sem custo para começar
              </h2>
              <p className="mt-2 max-w-xl text-white/70">
                Publique a página oficial, configure lotes de ingressos e comece a vender quando estiver pronto.
              </p>
              <p className="mt-2 text-sm text-white/50">
                Precisa de uma operação personalizada ou atendimento corporativo? Fale com nosso time de especialistas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenCreateModal}
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors bg-[#ff2b34] text-white hover:bg-[#e01e27] cursor-pointer"
              >
                Criar evento grátis
              </button>
              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors border border-white/25 text-white hover:border-white/50 cursor-pointer"
              >
                Falar com um especialista
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
      <CookieBox />
    </div>
  );
}
