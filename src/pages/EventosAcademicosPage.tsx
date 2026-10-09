import React, { useState } from "react";
import {
  SiteHeader,
  SiteFooter,
  CookieBox,
  NavHref,
} from "@/components/site-chrome";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  MapPin,
  Send,
  Library,
  BookmarkCheck,
  Building,
  Presentation,
  QrCode,
  Smartphone,
  BarChart3,
} from "lucide-react";

interface EventosAcademicosPageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

const timelineCards = [
  {
    title: "Inscrições",
    desc: "Receba participantes e organize diferentes categorias com valores específicos para estudantes, pós-graduandos e profissionais.",
  },
  {
    title: "Trabalhos científicos",
    desc: "Abra submissões com upload de resumos e artigos completos, controle de coautores e área temática.",
  },
  {
    title: "Avaliação em banca",
    desc: "Distribua trabalhos com avaliação cega (blind review) e acompanhe pareceres e notas dos pareceristas.",
  },
  {
    title: "Programação científica",
    desc: "Organize sessões orais e pôsteres, distribuindo apresentações por salas, horários e coordenadores de mesa.",
  },
  {
    title: "Credenciamento & Presença",
    desc: "Controle a presença no evento e a frequência individual em workshops e minicursos com vagas limitadas.",
  },
  {
    title: "Certificados e anais",
    desc: "Finalize o congresso com emissão automatizada de certificados para autores e publicação dos anais com ISBN.",
  },
];

const audienceEnvironments = [
  {
    role: "Para autores",
    desc: "Submeta trabalhos pelo próprio site do evento, envie arquivos em PDF, adicione coautores e orientador e acompanhe o status da aprovação em tempo real.",
    image: "/assets/curadoria/secao-kanban.png",
  },
  {
    role: "Para avaliadores",
    desc: "Painel exclusivo onde o parecerista visualiza trabalhos atribuídos sem identificação de autoria, preenche formulário de critérios e registra sua decisão.",
    image: "/assets/curadoria/hero-programacao.png",
  },
  {
    role: "Para a comissão científica",
    desc: "Configure regras, prazos de prorrogação, distribua centenas de trabalhos em lote, resolva empates e exporte relatórios consolidados de aprovações.",
    image: "/assets/curadoria/showcase-trilhas.png",
  },
];

const ecosystemFeatures = [
  { title: "Site do evento", href: "/plataforma-de-eventos", icon: <FileText className="size-5" /> },
  { title: "Inscrições e pagamentos", href: "/quanto-custa", icon: <CheckCircle2 className="size-5" /> },
  { title: "Lotes e cupons", href: "/quanto-custa", icon: <Award className="size-5" /> },
  { title: "Programação e palestrantes", href: "/curadoria", icon: <Presentation className="size-5" /> },
  { title: "Inscrição em minicursos", href: "/plataforma-de-eventos", icon: <BookOpen className="size-5" /> },
  { title: "Credenciamento", href: "/app-de-checkin", icon: <QrCode className="size-5" /> },
  { title: "App do evento", href: "/app-para-eventos", icon: <Smartphone className="size-5" /> },
  { title: "Relatórios de pesquisa", href: "/plataforma-de-eventos", icon: <BarChart3 className="size-5" /> },
];

const academicFormats = [
  "Congressos",
  "Simpósios",
  "Seminários",
  "Jornadas acadêmicas",
  "Encontros científicos",
  "Mostras de pesquisa",
  "Semanas acadêmicas",
  "Eventos universitários",
];

const academicFaqs = [
  {
    q: "A Doity atende eventos com submissão de trabalhos?",
    a: "Sim! É possível receber trabalhos em formato de resumo simples, expandido ou artigo completo, organizar áreas temáticas, distribuir avaliações e acompanhar todo o processo pelo painel científico.",
  },
  {
    q: "Os avaliadores possuem acesso próprio?",
    a: "Sim. A comissão cadastra os pareceristas e cada um recebe um link seguro para acessar apenas os trabalhos atribuídos, avaliar notas por critérios e registrar seus pareceres.",
  },
  {
    q: "O autor acompanha a avaliação?",
    a: "Sim. O autor entra na área do participante e visualiza se o trabalho está em análise, se precisa de correções ou se foi aprovado, com notificações automáticas por e-mail.",
  },
  {
    q: "Posso organizar minicursos e atividades com vagas limitadas?",
    a: "Sim. É possível criar inscrições específicas para workshops, minicursos e sessões temáticas com controle de vagas e cobrança opcional de taxa adicional.",
  },
  {
    q: "Posso emitir certificados para autores e avaliadores?",
    a: "Sim. A Doity permite criar modelos de certificados distintos para participantes, autores, apresentadores de pôster/oral, membros da comissão e avaliadores, com carga horária e autenticador.",
  },
  {
    q: "É possível publicar os anais do evento?",
    a: "Sim. Os trabalhos aprovados podem ser organizados e publicados em uma página própria com indexação, links para download dos PDFs e dados de citação.",
  },
  {
    q: "Também posso usar a Doity para as inscrições e pagamentos?",
    a: "Sim. Site oficial, inscrições por categorias (estudante/profissional), pagamentos com Pix, cartão e boleto, programação e submissões ficam 100% integrados.",
  },
];

export function EventosAcademicosPage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: EventosAcademicosPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Acadêmico / científico",
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
                <GraduationCap size={14} /> Soluções para Congressos & Encontros Científicos
              </div>
              <h1 className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-[#141010] md:text-5xl lg:text-[3.1rem] font-bold">
                Tudo para congressos, simpósios e eventos acadêmicos
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#5e5a5a]">
                Organize inscrições, trabalhos científicos, avaliações, programação, credenciamento, certificados e anais em uma única plataforma.
              </p>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-[#5e5a5a]">
                Mais controle para a comissão. Mais autonomia para autores, avaliadores e participantes.
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

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#141010]/10 bg-white shadow-2xl p-2">
              <img
                src="/assets/curadoria/hero-programacao.png"
                alt="Painel de trabalhos científicos na Doity"
                className="w-full h-full object-cover object-top rounded-2xl"
              />
            </div>
          </div>
        </header>

        {/* DA INSCRIÇÃO AOS ANAIS DO EVENTO (FLOW + CARDS) */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Da inscrição aos anais do evento
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a]">
                A Doity acompanha toda a jornada do evento acadêmico com rigor e transparência.
              </p>
            </div>

            {/* FLOW BADGES */}
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2">
              {["Inscrição", "Submissão", "Avaliação", "Apresentação", "Certificado / Anais"].map(
                (step, index, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-[#141010]/10 bg-[#f9f7f6] px-4 py-2 text-xs font-semibold text-[#141010] sm:text-sm">
                      {step}
                    </span>
                    {index < arr.length - 1 && (
                      <span className="text-[#5e5a5a] font-bold">→</span>
                    )}
                  </div>
                )
              )}
            </div>

            {/* 6 CARDS */}
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {timelineCards.map((card) => (
                <li
                  key={card.title}
                  className="rounded-2xl border border-[#141010]/8 bg-[#f9f7f6] p-6 shadow-sm hover:border-[#ff2b34]/30 transition"
                >
                  <h3 className="text-lg font-bold text-[#141010]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5e5a5a]">
                    {card.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TRABALHOS CIENTÍFICOS SEM PLANILHAS */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
                Gestão Científica Sem Complicação
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Trabalhos científicos sem planilhas e e-mails espalhados
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a]">
                Configure o processo de submissão de acordo com as regras do edital ou comitê organizador.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Áreas e eixos temáticos",
                  "Tipos de trabalho",
                  "Autores e coautores",
                  "Envio de arquivos em PDF",
                  "Prazos de submissão",
                  "Critérios de avaliação",
                  "Revisões e ajustes",
                  "Aprovação ou recusa com parecer",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-[#141010]/8 bg-white px-4 py-3 text-sm font-semibold text-[#141010] shadow-sm flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} className="text-[#ff2b34] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <NavHref
                  href="/curadoria"
                  navigate={onNavigate}
                  className="text-sm font-semibold text-[#ff2b34] hover:underline flex items-center gap-1"
                >
                  Conhecer módulo de submissões científicas <ArrowRight size={14} />
                </NavHref>
              </div>
            </div>

            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-[#141010]/10 bg-white shadow-xl p-2">
              <img
                src="/assets/curadoria/secao-kanban.png"
                alt="Painel de submissões com trabalhos em diferentes status"
                className="w-full h-full object-contain object-top rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* UM AMBIENTE PARA CADA PÚBLICO */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Um ambiente para cada público
            </h2>
            <p className="mt-3 text-lg text-[#5e5a5a]">
              Telas desenhadas sob medida para atender os três pilares da dinâmica científica.
            </p>

            <ul className="mt-12 grid gap-6 lg:grid-cols-3">
              {audienceEnvironments.map((env) => (
                <li
                  key={env.role}
                  className="overflow-hidden rounded-2xl border border-[#141010]/10 bg-[#f9f7f6] shadow-sm flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] bg-white overflow-hidden p-2">
                    <img
                      src={env.image}
                      alt={env.role}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#141010]">
                      {env.role}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5e5a5a]">
                      {env.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ORGANIZE TAMBÉM AS APRESENTAÇÕES */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Organize também as apresentações
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a]">
                Depois da aprovação, os trabalhos continuam dentro da operação do evento.
              </p>

              <p className="mt-6 text-sm font-bold text-[#141010]">
                Defina com facilidade:
              </p>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Data e horário exato de cada apresentação",
                  "Sala, auditório ou ambiente virtual de transmissão",
                  "Modalidade de apresentação (comunicação oral, pôster digital ou presencial)",
                  "Apresentador designado",
                  "Sessão ou área temática coordenada",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#141010]">
                    <span className="size-2 rounded-full bg-[#ff2b34] shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-[#5e5a5a]">
                Tudo é integrado à grade oficial e sincronizado com o aplicativo dos participantes.
              </p>
            </div>

            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-[#141010]/10 bg-white shadow-xl p-2">
              <img
                src="/assets/curadoria/showcase-trilhas.png"
                alt="Programação científica com sessões e trabalhos"
                className="w-full h-full object-contain object-center rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* CERTIFICADOS PARA TODOS OS PAPÉIS */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                  Certificados para todos os papéis
                </h2>
                <p className="mt-4 text-lg text-[#5e5a5a]">
                  Emita certificados oficiais com autenticidade verificável para:
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Participantes gerais",
                    "Autores e coautores",
                    "Apresentadores de trabalho",
                    "Avaliadores da banca",
                    "Palestrantes e conferencistas",
                    "Equipe organizadora e monitores",
                  ].map((role) => (
                    <li
                      key={role}
                      className="rounded-xl border border-[#141010]/8 bg-[#f9f7f6] px-4 py-3 text-sm font-bold text-[#141010] flex items-center gap-2"
                    >
                      <Award size={16} className="text-[#ff2b34] shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-[#5e5a5a]">
                  Também é possível considerar atividades específicas, lista de presença em minicursos, carga horária e tipo de ingresso.
                </p>
                <div className="mt-6">
                  <NavHref
                    href="/area-do-participante/certificado"
                    navigate={onNavigate}
                    className="text-sm font-semibold text-[#ff2b34] hover:underline flex items-center gap-1"
                  >
                    Ver emissão e validação de certificados <ArrowRight size={14} />
                  </NavHref>
                </div>
              </div>

              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-[#141010]/10 bg-[#f9f7f6] p-4 shadow-md">
                <img
                  src="/assets/5-finalize-certificados.webp"
                  alt="Certificados para diferentes papéis do evento acadêmico"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PUBLIQUE OS ANAIS DO EVENTO */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-[#141010]/10 bg-white shadow-xl p-3">
              <img
                src="/assets/1-crie-e-divulgue.webp"
                alt="Página pública de anais do evento"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
                Publicação & Anais
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Publique os anais do evento
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a]">
                Organize todos os trabalhos aprovados em uma página pública e permanente do evento para consulta da comunidade acadêmica.
              </p>
              <p className="mt-3 text-sm text-[#5e5a5a] leading-relaxed">
                Da submissão inicial ao resultado final, o histórico permanece indexado e conectado, facilitando a comprovação no Lattes e em agências de fomento.
              </p>
            </div>
          </div>
        </section>

        {/* INSCRIÇÃO E PROGRAMAÇÃO NO MESMO ECOSSISTEMA */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Inscrição e programação no mesmo ecossistema
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#5e5a5a]">
              Além da operação científica, você centraliza todos os módulos da organização com a Doity:
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystemFeatures.map((item) => (
                <li key={item.title}>
                  <NavHref
                    href={item.href}
                    navigate={onNavigate}
                    className="flex h-full flex-col rounded-2xl border border-[#141010]/8 bg-[#f9f7f6] p-5 transition hover:border-[#ff2b34]/40 hover:shadow-sm"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#fff0f0] text-[#ff2b34]">
                      {item.icon}
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-[#141010]">
                      {item.title}
                    </h3>
                  </NavHref>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FORMATOS ACADÊMICOS */}
        <section className="border-b border-[#141010]/8 bg-[#f9f7f6] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Para diferentes formatos acadêmicos
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {academicFormats.map((fmt) => (
                <li
                  key={fmt}
                  className="rounded-2xl border border-[#141010]/8 bg-white px-5 py-4 text-sm font-bold text-[#141010] shadow-sm"
                >
                  {fmt}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MENOS FERRAMENTAS. MAIS CONTROLE */}
        <section className="border-b border-[#141010]/8 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Menos ferramentas. Mais controle para a organização.
              </h2>
              <p className="mt-4 text-lg text-[#5e5a5a]">
                Em vez de espalhar a operação em várias planilhas e drives, você mantém tudo integrado.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#141010]/10 bg-[#f9f7f6] p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#5e5a5a]">
                  Em vez de ferramentas soltas
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Formulário externo de inscrição",
                    "E-mails com trabalhos anexados",
                    "Planilhas com avaliadores perdidos",
                    "Grade de horários separada",
                    "Certificados preenchidos manualmente",
                    "Página externa de anais",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#5e5a5a] line-through decoration-[#141010]/30"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-[#ff2b34]/30 bg-[#fff8f8] p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
                  Com a plataforma Doity
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#141010]">
                  {["Inscrição", "Trabalhos", "Avaliação", "Programação", "Presença", "Certificados", "Anais"].map(
                    (step, i, arr) => (
                      <div key={step} className="flex items-center gap-1.5">
                        <span className="rounded-full bg-white px-3 py-1.5 shadow-sm border border-[#ff2b34]/20 text-xs">
                          {step}
                        </span>
                        {i < arr.length - 1 && <span className="text-[#ff2b34]">→</span>}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACADÊMICO */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#141010]">
              Perguntas frequentes
            </h2>
            <p className="mt-2 text-[#5e5a5a]">
              Tudo sobre o funcionamento de congressos e simpósios científicos na Doity.
            </p>
          </div>

          <div className="space-y-4">
            {academicFaqs.map((faq, i) => {
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
                Atendimento Acadêmico & Científico
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
                Fale com um consultor de eventos acadêmicos
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#5e5a5a]">
                Conte sobre o congresso ou encontro científico — inscrições, trabalhos, pareceres e certificados.
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
                    Obrigado, <strong>{formState.name}</strong>. Nossa equipe especializada em eventos acadêmicos entrará em contato em breve no e-mail <strong>{formState.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        eventType: "Acadêmico / científico",
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
                      Nome do coordenador / organizador <span className="text-[#ff2b34]">*</span>
                    </span>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Ex: Prof. Dr. Marcos Souza"
                      className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34]"
                    />
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-[#141010]">
                        E-mail institucional <span className="text-[#ff2b34]">*</span>
                      </span>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="coordenacao@universidade.edu.br"
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
                        <option value="Acadêmico / científico">Acadêmico / Científico</option>
                        <option value="Congresso Nacional">Congresso Nacional</option>
                        <option value="Simpósio / Jornada">Simpósio / Jornada</option>
                        <option value="Semana Acadêmica">Semana Acadêmica Universitária</option>
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
                      Nome do Congresso / Evento <span className="text-[#ff2b34]">*</span>
                    </span>
                    <input
                      required
                      type="text"
                      value={formState.eventName}
                      onChange={(e) => setFormState({ ...formState, eventName: e.target.value })}
                      placeholder="Ex: XII Congresso Brasileiro de Biotecnologia"
                      className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-[#141010]">
                      Necessidades da Comissão Científica
                    </span>
                    <textarea
                      rows={4}
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      placeholder="Previsão de trabalhos, minicursos, anais, emissão de certificados com autenticador, etc."
                      className="mt-1.5 w-full rounded-xl border border-[#141010]/15 bg-white px-3.5 py-2.5 text-[#141010] outline-none transition focus:border-[#ff2b34] resize-y"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-[#ff2b34] px-6 py-4 text-sm font-semibold text-white hover:bg-[#e01e27] cursor-pointer shadow transition"
                  >
                    Enviar solicitação para consultoria acadêmica
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
                Organize toda a jornada acadêmica em um só lugar
              </h2>
              <p className="mt-2 max-w-xl text-white/70">
                Da inscrição do participante à publicação dos anais científicos.
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
