import React, { useState } from "react";
import {
  BrandButton,
  CookieBox,
  SiteFooter,
  SiteHeader,
  NavHref,
} from "@/components/site-chrome";
import {
  Building2,
  Users,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Send,
  Sparkles,
  Smartphone,
  QrCode,
  Award,
  BarChart3,
  Globe,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Compass,
} from "lucide-react";

interface EventosCorporativosPageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

const eventTypes = [
  {
    title: "Congressos e convenções",
    desc: "Grandes encontros com múltiplas salas, palestrantes de destaque, patrocinadores e controle de acesso.",
    icon: <Building2 className="size-5" />,
  },
  {
    title: "Treinamentos e capacitações",
    desc: "Workshops internos, turmas técnicas, controle rígido de presença e emissão automática de certificados.",
    icon: <GraduationCap className="size-5" />,
  },
  {
    title: "Eventos internos",
    desc: "Encontros de alinhamento, convenções de vendas, kickoffs anuais e celebrações corporativas com a equipe.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Encontros com clientes e parceiros",
    desc: "Apresentação de novos produtos, dias de inovação, reuniões de relacionamento e rodadas de negócios.",
    icon: <Briefcase className="size-5" />,
  },
  {
    title: "Roadshows e experiências de marca",
    desc: "Eventos itinerantes em diferentes cidades, ativações presenciais de marca e geração qualificada de leads.",
    icon: <Compass className="size-5" />,
  },
  {
    title: "Seminários e workshops corporativos",
    desc: "Mesas-redondas, cursos intensivos e sessões interativas com inscrição online rápida e sem atritos.",
    icon: <Calendar className="size-5" />,
  },
];

const operationsGrid = [
  {
    title: "Site do evento",
    desc: "Crie uma página profissional com a identidade da sua marca, programação, palestrantes e informações do evento.",
    image: "/assets/1-crie-e-divulgue.webp",
    href: "/plataforma-de-eventos",
  },
  {
    title: "Inscrições e pagamentos",
    desc: "Monte lotes, formulários personalizados, cupons e checkout seguro para eventos corporativos gratuitos ou pagos.",
    image: "/assets/2-venda-e-organize.png",
    href: "/quanto-custa",
  },
  {
    title: "Credenciamento",
    desc: "Faça check-in por QR Code, web, aplicativo da equipe, impressão de etiquetas e controle seguro de acesso.",
    image: "/assets/checkin/hero.webp",
    href: "/app-de-checkin",
  },
  {
    title: "App do evento",
    desc: "Leve programação, notificações em tempo real, networking, patrocinadores e engajamento para o celular do participante.",
    image: "/assets/app/hero.png",
    href: "/app-para-eventos",
  },
  {
    title: "Certificados",
    desc: "Emita certificados para participantes, palestrantes e equipe com envio automático por e-mail e validação por código.",
    image: "/assets/5-finalize-certificados.webp",
    href: "/plataforma-de-eventos",
  },
  {
    title: "Relatórios",
    desc: "Acompanhe inscritos, presença, adesão por setor e indicadores do evento em tempo real no painel gerencial.",
    image: "/assets/app/dashboard.png",
    href: "/plataforma-de-eventos",
  },
];

const corporateScenarios = [
  {
    title: "Eventos com convidados externos",
    desc: "Venda ou distribua inscrições, personalize formulários com perguntas específicas e acompanhe confirmações em tempo real.",
    image: "/assets/4-engaje-app.png",
  },
  {
    title: "Treinamentos e capacitações",
    desc: "Organize turmas, presença por atividade, controle de frequência e disponibilização ágil de certificados.",
    image: "/assets/doity-play/secao-salas.jpg",
  },
  {
    title: "Eventos internos",
    desc: "Centralize convites por e-mail, confirmações, programação de palestras e avisos importantes para a equipe.",
    image: "/assets/checkin/secao-painel.webp",
  },
  {
    title: "Convenções e encontros maiores",
    desc: "Use credenciamento expresso, aplicativo oficial, networking estruturado e controle de acesso para uma operação segura.",
    image: "/assets/multieventos/experiencia.png",
  },
];

const corporateFaqs = [
  {
    q: "A Doity atende eventos corporativos e internos?",
    a: "Sim! A plataforma é amplamente utilizada por empresas de todos os portes para congressos, treinamentos, convenções de vendas, encontros internos de colaboradores, roadshows e simpósios técnicos.",
  },
  {
    q: "Posso usar apenas inscrições e credenciamento?",
    a: "Com certeza. A plataforma é modular: você pode começar apenas com o formulário de inscrições e o credenciamento de entrada no dia, ou incorporar aplicativo, certificados e pesquisa conforme a necessidade.",
  },
  {
    q: "Funciona para eventos gratuitos e pagos?",
    a: "Sim. Se for um encontro corporativo interno ou gratuito para clientes, você pode receber até 500 inscrições no plano padrão com taxa R$ 0. Para eventos com venda de ingressos, a taxa é de 10% com meios de pagamento inclusos.",
  },
  {
    q: "Dá para emitir certificados?",
    a: "Sim! O gerador de certificados da Doity permite criar modelos personalizados para participantes, palestrantes, organizadores e monitores, com envio automático por e-mail e autenticação digital.",
  },
  {
    q: "O app do evento é opcional?",
    a: "Sim, é um módulo adicional sob contratação. O aplicativo exclusivo (iOS e Android) é ideal quando a empresa deseja proporcionar uma experiência de alta tecnologia com agenda, matchmaking, push notifications e mapa de estandes.",
  },
  {
    q: "Posso controlar o acesso no dia do evento?",
    a: "Sim. A Doity oferece aplicativo próprio de check-in com leitura ultrarrápida de QR Code via câmera do celular ou leitor dedicado, além de integração com impressão de crachás/etiquetas e controle por atividade.",
  },
];

export function EventosCorporativosPage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: EventosCorporativosPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Lead Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Corporativo",
    audience: "",
    eventName: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToConsultor = () => {
    const elem = document.getElementById("consultor");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenContactModal) {
      onOpenContactModal();
    }
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
        <header className="relative overflow-hidden border-b border-[#141010]/8 bg-[linear-gradient(165deg,_#fff0f0_0%,_#ffffff_42%,_#f7f5f4_100%)]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff2b34]/10 text-[#ff2b34] text-xs font-semibold uppercase tracking-wider mb-4">
                <Briefcase size={14} /> Soluções para Empresas & Eventos Corporativos
              </div>
              <h1 className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-[#141010] md:text-5xl lg:text-[3.1rem] font-bold">
                Tecnologia para eventos corporativos, treinamentos e encontros internos
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#5e5a5a]">
                Crie, divulgue e opere eventos corporativos com mais autonomia e eficiência.
              </p>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-[#5e5a5a]">
                Site, inscrições, credenciamento, aplicativo, certificados e relatórios unificados em uma única plataforma.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenCreateModal}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors bg-[#ff2b34] text-white hover:bg-[#e01e27] cursor-pointer shadow-sm"
                >
                  Criar evento grátis
                </button>
                <button
                  type="button"
                  onClick={scrollToConsultor}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors border border-[#141010]/15 text-[#141010] hover:border-[#141010]/40 bg-white/60 cursor-pointer"
                >
                  Falar com um especialista
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#141010]/10 bg-white p-3 shadow-2xl">
                <img
                  src="/assets/app/hero.png"
                  alt="Painel Doity no notebook e aplicativo do evento no smartphone"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </header>

        {/* FORMATOS: DO TREINAMENTO AO GRANDE ENCONTRO */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Do treinamento ao grande encontro corporativo
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a]">
                A Doity ajuda a organizar diferentes formatos de eventos corporativos dentro da mesma plataforma.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {eventTypes.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-[#141010]/8 bg-[#f9f7f6] p-6 transition hover:border-[#ff2b34]/30 hover:shadow-sm"
                >
                  <span
                    className="flex size-11 items-center justify-center rounded-xl bg-[#fff0f0] text-[#ff2b34]"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#141010]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5e5a5a] leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TUDO O QUE A OPERAÇÃO PRECISA */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
                Módulos Integrados
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Tudo o que a operação precisa
              </h2>
              <p className="mt-3 text-[#5e5a5a]">
                Ferramentas essenciais conectadas para economizar tempo da equipe organizadora.
              </p>
            </div>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {operationsGrid.map((card) => (
                <li key={card.title}>
                  <NavHref
                    href={card.href}
                    navigate={onNavigate}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#141010]/10 bg-white transition hover:border-[#ff2b34]/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] bg-[#f9f7f6] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold text-[#141010] group-hover:text-[#ff2b34] transition">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5e5a5a]">
                        {card.desc}
                      </p>
                      <span className="mt-4 pt-3 border-t border-[#141010]/5 text-xs font-semibold text-[#ff2b34] flex items-center gap-1 group-hover:underline">
                        Conhecer módulo <ArrowRight size={12} />
                      </span>
                    </div>
                  </NavHref>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DA DIVULGAÇÃO AO PÓS-EVENTO (4 STEPS) */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Da divulgação ao pós-evento
            </h2>
            <p className="mt-3 text-lg text-[#5e5a5a]">
              Um fluxo contínuo e sem retrabalho para o time da empresa.
            </p>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="relative rounded-2xl border border-[#141010]/8 bg-[#f9f7f6] p-6">
                <p className="font-display text-3xl font-bold text-[#ff2b34]">01</p>
                <h3 className="mt-3 text-lg font-bold text-[#141010]">Publique e divulgue</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5e5a5a]">
                  Monte a página oficial do evento, publique a programação e abra inscrições com lotes e formulários.
                </p>
                <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#5e5a5a] lg:block font-bold">
                  →
                </span>
              </li>

              <li className="relative rounded-2xl border border-[#141010]/8 bg-[#f9f7f6] p-6">
                <p className="font-display text-3xl font-bold text-[#ff2b34]">02</p>
                <h3 className="mt-3 text-lg font-bold text-[#141010]">Receba participantes</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5e5a5a]">
                  Controle inscrições internas ou externas, pagamentos seguros e comunicação automática em um só lugar.
                </p>
                <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#5e5a5a] lg:block font-bold">
                  →
                </span>
              </li>

              <li className="relative rounded-2xl border border-[#141010]/8 bg-[#f9f7f6] p-6">
                <p className="font-display text-3xl font-bold text-[#ff2b34]">03</p>
                <h3 className="mt-3 text-lg font-bold text-[#141010]">Opere o evento</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5e5a5a]">
                  Credencie a entrada com agilidade, acompanhe a presença e organize a experiência dos participantes.
                </p>
                <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#5e5a5a] lg:block font-bold">
                  →
                </span>
              </li>

              <li className="relative rounded-2xl border border-[#141010]/8 bg-[#f9f7f6] p-6">
                <p className="font-display text-3xl font-bold text-[#ff2b34]">04</p>
                <h3 className="mt-3 text-lg font-bold text-[#141010]">Engaje e acompanhe</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5e5a5a]">
                  Use o aplicativo, envie avisos push, emita certificados digitais e acompanhe relatórios de resultados.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* CENÁRIOS: IDEAL PARA DIFERENTES NECESSIDADES */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Ideal para diferentes necessidades da empresa
            </h2>
            <p className="mt-3 text-lg text-[#5e5a5a]">
              Flexibilidade para atender desde treinamentos de RH até convenções estratégicas.
            </p>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {corporateScenarios.map((scen) => (
                <li
                  key={scen.title}
                  className="overflow-hidden rounded-2xl border border-[#141010]/10 bg-white shadow-sm"
                >
                  <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
                    <img
                      src={scen.image}
                      alt={scen.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#141010]">
                      {scen.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5e5a5a]">
                      {scen.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MAIS ORGANIZAÇÃO PARA A EQUIPE */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
                Eficiência Operacional
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Mais organização para a equipe
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a]">
                A Doity ajuda a eliminar o caos de planilhas dispersas e múltiplas ferramentas desconectadas.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  "Site, inscrições e participantes centralizados no mesmo lugar",
                  "Equipe com diferentes níveis de acesso e permissões seguras",
                  "Relatórios centralizados de vendas, presença e engajamento",
                  "Credenciamento integrado com leitura ágil de QR Code",
                  "Comunicação direta e experiência do participante conectadas à operação",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#141010]">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#ff2b34]" />
                    <span className="text-sm md:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#141010]/10 bg-[#f9f7f6] p-3 shadow-xl">
              <img
                src="/assets/app/dashboard.png"
                alt="Painel Doity com métricas de participantes e relatórios"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </section>

        {/* MELHORE A EXPERIÊNCIA DO PARTICIPANTE */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                  Melhore a experiência do participante
                </h2>
                <p className="mt-4 text-lg text-[#5e5a5a]">
                  Quando fizer sentido para o evento, você pode oferecer uma experiência de ponta com o aplicativo exclusivo do evento.
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Programação no celular",
                    "Notificações em tempo real",
                    "Mapa e informações úteis",
                    "Networking e interações",
                    "Patrocinadores e expositores",
                    "Leads e métricas",
                  ].map((feat) => (
                    <li
                      key={feat}
                      className="rounded-xl border border-[#141010]/8 bg-white px-4 py-3 text-sm font-semibold text-[#141010] shadow-sm flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} className="text-[#ff2b34] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <NavHref
                    href="/app-para-eventos"
                    navigate={onNavigate}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff2b34] hover:underline"
                  >
                    Conhecer aplicativo do evento <ArrowRight size={14} />
                  </NavHref>
                </div>
              </div>

              <div className="relative flex justify-center">
                <img
                  src="/assets/app/android-apple.png"
                  alt="Telas do aplicativo do evento em smartphones"
                  className="h-auto w-full max-w-md object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PARA OPERAÇÕES SIMPLES OU COMPLETAS (EVOLUÇÃO) */}
        <section className="border-b border-[#141010]/8 bg-white py-16 text-center md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Para operações simples ou completas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5e5a5a]">
              Você pode começar com o básico e evoluir conforme a maturidade e a escala da sua empresa.
            </p>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="rounded-2xl border border-[#141010]/10 bg-[#f9f7f6] p-6 text-left">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff2b34]">
                  Começar
                </p>
                <p className="mt-3 font-bold text-[#141010] text-lg">
                  Site + Inscrições + Relatórios
                </p>
                <p className="mt-2 text-xs text-[#5e5a5a]">
                  Rápido de configurar, sem taxa de adesão, controle essencial de convidados.
                </p>
              </div>

              <div className="text-2xl font-bold text-[#5e5a5a]">→</div>

              <div className="rounded-2xl border-2 border-[#ff2b34]/30 bg-[#fff8f8] p-6 text-left">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff2b34]">
                  Evoluir
                </p>
                <p className="mt-3 font-bold text-[#141010] text-lg">
                  Credenciamento + App + Certificados + Controle de Acesso
                </p>
                <p className="mt-2 text-xs text-[#5e5a5a]">
                  Estrutura enterprise completa para eventos híbridos e grandes convenções.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUEM ORGANIZA COM A DOITY (TESTIMONIALS) */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
              Depoimentos Reais
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Quem organiza com a Doity
            </h2>
            <p className="mt-3 text-[#5e5a5a]">
              Empresas e organizadores profissionais confiam na Doity para seus eventos mais importantes.
            </p>
          </div>

          <ul className="grid gap-8 md:grid-cols-2">
            <li className="flex flex-col gap-4 rounded-3xl border border-[#141010]/8 bg-[#f9f7f6] p-8 shadow-sm">
              <blockquote className="text-[#141010] text-base leading-relaxed italic">
                “Utilizo o sistema desde 2012 e estou muito satisfeito com os serviços e principalmente com o suporte. É possível acompanhar inscrições, pagamentos, trabalhos científicos, credenciamento e certificados em um só lugar.”
              </blockquote>
              <div className="mt-auto flex items-center gap-4 pt-4 border-t border-[#141010]/8">
                <div className="size-12 rounded-full bg-[#ff2b34] text-white flex items-center justify-center font-bold text-lg">
                  FN
                </div>
                <div>
                  <p className="font-bold text-[#141010]">Fábio Neves</p>
                  <p className="text-xs text-[#5e5a5a]">Kalone Eventos</p>
                </div>
              </div>
            </li>

            <li className="flex flex-col gap-4 rounded-3xl border border-[#141010]/8 bg-[#f9f7f6] p-8 shadow-sm">
              <blockquote className="text-[#141010] text-base leading-relaxed italic">
                “Antes realizei um evento para 500 participantes com uma equipe de 11 pessoas. Hoje somos apenas duas: reduzimos custos, aumentamos a margem e redirecionamos a atenção para marketing e divulgação.”
              </blockquote>
              <div className="mt-auto flex items-center gap-4 pt-4 border-t border-[#141010]/8">
                <div className="size-12 rounded-full bg-[#141010] text-white flex items-center justify-center font-bold text-lg">
                  FJ
                </div>
                <div>
                  <p className="font-bold text-[#141010]">Felipe Johnnata</p>
                  <p className="text-xs text-[#5e5a5a]">Prime Cursos & Eventos</p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* PERGUNTAS FREQUENTES */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20 border-t border-[#141010]/8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010]">
              Perguntas frequentes
            </h2>
            <p className="mt-2 text-[#5e5a5a]">
              Dúvidas comuns sobre a realização de eventos corporativos na Doity.
            </p>
          </div>

          <div className="space-y-4">
            {corporateFaqs.map((faq, i) => {
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

        {/* FORMULÁRIO COMERCIAL: #consultor */}
        <section
          id="consultor"
          className="scroll-mt-24 border-y border-[#141010]/8 bg-[linear-gradient(165deg,_#fff0f0_0%,_#ffffff_50%,_#f7f5f4_100%)] py-16 md:py-20"
        >
          <div className="mx-auto max-w-3xl px-6">
            <header className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#ff2b34]">
                Atendimento Comercial Especializado
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Fale com um consultor de eventos corporativos
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#5e5a5a]">
                Conte sobre o evento da sua empresa — porte, módulos desejados e necessidades da operação.
              </p>
            </header>

            <div className="mt-10 rounded-3xl border border-[#141010]/8 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(20,16,16,0.35)] md:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#141010]">
                    Solicitação enviada com sucesso!
                  </h3>
                  <p className="mt-2 text-[#5e5a5a] max-w-md mx-auto">
                    Obrigado, <strong>{formState.name}</strong>. Nossa equipe de especialistas corporativos entrará em contato em breve no e-mail <strong>{formState.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        eventType: "Corporativo",
                        audience: "",
                        eventName: "",
                        details: "",
                      });
                    }}
                    className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold bg-[#141010] text-white hover:bg-[#333] cursor-pointer"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <label className="block">
                    <span className="text-sm font-semibold text-[#141010]">
                      Nome completo <span className="text-[#ff2b34]">*</span>
                    </span>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Ex: Ana Silva"
                      className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34]"
                    />
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-[#141010]">
                        E-mail corporativo <span className="text-[#ff2b34]">*</span>
                      </span>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="seu.email@empresa.com"
                        className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34]"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-semibold text-[#141010]">
                        Telefone / WhatsApp <span className="text-[#ff2b34]">*</span>
                      </span>
                      <input
                        required
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-[#141010]">
                        Tipo de Evento <span className="text-[#ff2b34]">*</span>
                      </span>
                      <select
                        required
                        value={formState.eventType}
                        onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34]"
                      >
                        <option value="Corporativo">Corporativo / Convenção</option>
                        <option value="Treinamento">Treinamento / RH</option>
                        <option value="Acadêmico / científico">Acadêmico / Científico</option>
                        <option value="Feira / exposição">Feira / Exposição</option>
                        <option value="Esportivo">Esportivo</option>
                        <option value="Religioso">Religioso</option>
                        <option value="Online / híbrido">Online / Híbrido</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-sm font-semibold text-[#141010]">
                        Público Estimado <span className="text-[#ff2b34]">*</span>
                      </span>
                      <select
                        required
                        value={formState.audience}
                        onChange={(e) => setFormState({ ...formState, audience: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34]"
                      >
                        <option value="" disabled>Selecione uma faixa</option>
                        <option value="Até 100">Até 100 participantes</option>
                        <option value="101 a 500">101 a 500 participantes</option>
                        <option value="501 a 1.000">501 a 1.000 participantes</option>
                        <option value="1.001 a 5.000">1.001 a 5.000 participantes</option>
                        <option value="Mais de 5.000">Mais de 5.000 participantes</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-[#141010]">
                      Nome da Empresa ou Evento <span className="text-[#ff2b34]">*</span>
                    </span>
                    <input
                      required
                      type="text"
                      value={formState.eventName}
                      onChange={(e) => setFormState({ ...formState, eventName: e.target.value })}
                      placeholder="Ex: Encontro Anual de Líderes 2026"
                      className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-[#141010]">
                      Detalhes do Evento
                    </span>
                    <textarea
                      rows={4}
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      placeholder="Datas previstas, cidade, necessidade de credenciamento com crachás, app próprio, etc."
                      className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34] resize-y"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-[#ff2b34] px-6 py-4 text-sm font-semibold text-white hover:bg-[#e01e27] cursor-pointer shadow transition"
                  >
                    Enviar solicitação para consultoria
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="bg-[#141010] text-white py-14">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Organize seu próximo evento corporativo com mais controle
              </h2>
              <p className="mt-2 max-w-xl text-white/70">
                Crie o evento, publique, receba inscrições e opere tudo em uma única plataforma confiável.
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
                onClick={scrollToConsultor}
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
