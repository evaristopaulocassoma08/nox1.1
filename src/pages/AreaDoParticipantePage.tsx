import React, { useState, useEffect } from "react";
import {
  SiteHeader,
  SiteFooter,
  CookieBox,
  NavHref,
} from "@/components/site-chrome";
import {
  Ticket,
  Award,
  ShieldCheck,
  Search,
  Download,
  QrCode,
  Calendar,
  MapPin,
  CheckCircle2,
  XCircle,
  FileCheck,
  Printer,
  ExternalLink,
  Mail,
  User,
  ArrowRight,
} from "lucide-react";

interface AreaDoParticipantePageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
  defaultTab?: "inscricoes" | "certificados" | "validar";
}

interface UserTicket {
  id: string;
  eventName: string;
  date: string;
  location: string;
  ticketName: string;
  orderNumber: string;
  qrData: string;
  status: "Confirmado" | "Check-in Realizado";
  attendee: string;
}

interface UserCertificate {
  id: string;
  validationCode: string;
  eventName: string;
  participantName: string;
  role: string;
  hours: number;
  issueDate: string;
}

const sampleTickets: UserTicket[] = [
  {
    id: "TICK-101",
    eventName: "XIV ENCONTRO PERNAMBUCANO DE ODONTOLOGIA",
    date: "17 a 18 de out. de 2026",
    location: "FPS - Centro de Eventos Recife, PE",
    ticketName: "Lote 1 - Estudante / Geral",
    orderNumber: "ORD-94821",
    qrData: "DOITY-REG-94821-XIV-ODONTO",
    status: "Confirmado",
    attendee: "Evaristo Paulo",
  },
  {
    id: "TICK-102",
    eventName: "AI BRASIL Experience: Inteligência Artificial nos Negócios",
    date: "28 a 29 de out. de 2026",
    location: "Distrito Anhembi, São Paulo - SP",
    ticketName: "Passaporte Completo (Presencial)",
    orderNumber: "ORD-83912",
    qrData: "DOITY-REG-83912-AI-BRASIL",
    status: "Confirmado",
    attendee: "Evaristo Paulo",
  },
];

const sampleCertificates: UserCertificate[] = [
  {
    id: "CERT-001",
    validationCode: "DOITY-2026-X892",
    eventName: "Congresso de Inovação e Tecnologia em Eventos 2026",
    participantName: "Evaristo Paulo Cassoma",
    role: "Participante",
    hours: 24,
    issueDate: "05 de Setembro de 2026",
  },
  {
    id: "CERT-002",
    validationCode: "DOITY-2026-W341",
    eventName: "Workshop Prático de Gestão Ágil e OKRs",
    participantName: "Evaristo Paulo Cassoma",
    role: "Participante",
    hours: 8,
    issueDate: "20 de Agosto de 2026",
  },
];

export function AreaDoParticipantePage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
  defaultTab = "inscricoes",
}: AreaDoParticipantePageProps) {
  const [activeTab, setActiveTab] = useState<"inscricoes" | "certificados" | "validar">(
    defaultTab
  );

  // Search email state
  const [searchEmail, setSearchEmail] = useState("");
  const [hasSearchedEmail, setHasSearchedEmail] = useState(false);

  // Certificate validator state
  const [validationInput, setValidationInput] = useState("");
  const [validationResult, setValidationResult] = useState<{
    valid: boolean;
    cert?: UserCertificate;
  } | null>(null);

  // Selected ticket for QR modal
  const [selectedTicket, setSelectedTicket] = useState<UserTicket | null>(null);

  // Print certificate modal
  const [previewCert, setPreviewCert] = useState<UserCertificate | null>(null);

  useEffect(() => {
    // Check url query if tab=validar or tab=certificado
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get("tab");
      if (tabParam === "validar") {
        setActiveTab("validar");
      } else if (tabParam === "certificados" || window.location.pathname.includes("/certificado")) {
        setActiveTab("certificados");
      }
    }
  }, []);

  const handleEmailSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearchedEmail(true);
  };

  const handleValidateCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = validationInput.trim().toUpperCase();
    const found = sampleCertificates.find(
      (c) => c.validationCode.toUpperCase() === cleanCode
    );

    if (found) {
      setValidationResult({ valid: true, cert: found });
    } else if (cleanCode.length >= 6) {
      // Simulate authentic certificate for any reasonable code
      setValidationResult({
        valid: true,
        cert: {
          id: `CERT-VAL-${Math.floor(Math.random() * 9000 + 1000)}`,
          validationCode: cleanCode,
          eventName: "Encontro Nacional de Educação e Tecnologia 2026",
          participantName: "Participante Certificado",
          role: "Participante",
          hours: 20,
          issueDate: "09 de Outubro de 2026",
        },
      });
    } else {
      setValidationResult({ valid: false });
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
        {/* HERO / TAB SELECTOR */}
        <header className="border-b border-[#141010]/8 bg-[linear-gradient(165deg,_#fff0f0_0%,_#ffffff_48%,_#f7f5f4_100%)] py-12">
          <div className="mx-auto max-w-5xl px-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
              Portal do Participante Doity
            </span>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#141010] md:text-4xl">
              Acessos do participante
            </h1>
            <p className="mt-2 text-[#5e5a5a] max-w-xl">
              Consulte seus ingressos, retire comprovantes, emita certificados ou verifique a autenticidade de documentos em um só lugar.
            </p>

            {/* TAB BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-2 border-b border-[#141010]/10 pb-px">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("inscricoes");
                  setValidationResult(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition cursor-pointer ${
                  activeTab === "inscricoes"
                    ? "border-[#ff2b34] text-[#ff2b34]"
                    : "border-transparent text-[#5e5a5a] hover:text-[#141010]"
                }`}
              >
                <Ticket size={16} /> Área do participante (Ingressos)
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("certificados");
                  setValidationResult(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition cursor-pointer ${
                  activeTab === "certificados"
                    ? "border-[#ff2b34] text-[#ff2b34]"
                    : "border-transparent text-[#5e5a5a] hover:text-[#141010]"
                }`}
              >
                <Award size={16} /> Certificados e comprovantes
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("validar");
                }}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition cursor-pointer ${
                  activeTab === "validar"
                    ? "border-[#ff2b34] text-[#ff2b34]"
                    : "border-transparent text-[#5e5a5a] hover:text-[#141010]"
                }`}
              >
                <ShieldCheck size={16} /> Validar certificado
              </button>
            </div>
          </div>
        </header>

        {/* TAB 1: ÁREA DO PARTICIPANTE (MEUS INGRESSOS) */}
        {activeTab === "inscricoes" && (
          <section className="py-12">
            <div className="mx-auto max-w-5xl px-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#141010]">
                    Seus ingressos e pedidos
                  </h2>
                  <p className="text-sm text-[#5e5a5a]">
                    Apresente o QR Code no credenciamento do evento para liberar seu crachá e acesso.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenLoginModal}
                  className="inline-flex items-center gap-2 rounded-full border border-[#141010]/20 bg-white px-4 py-2 text-xs font-semibold text-[#141010] hover:border-[#141010]/40 self-start cursor-pointer"
                >
                  <User size={14} /> Trocar de conta / Entrar
                </button>
              </div>

              {/* TICKET CARDS */}
              <div className="grid gap-6 md:grid-cols-2">
                {sampleTickets.map((t) => (
                  <div
                    key={t.id}
                    className="flex flex-col justify-between rounded-3xl border border-[#141010]/10 bg-white p-6 shadow-md transition hover:border-[#ff2b34]/30"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-[#141010]/8 pb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                          <CheckCircle2 size={13} /> {t.status}
                        </span>
                        <span className="text-xs font-mono font-medium text-[#5e5a5a]">
                          {t.orderNumber}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-[#141010] leading-snug">
                        {t.eventName}
                      </h3>

                      <div className="mt-4 space-y-2 text-xs text-[#5e5a5a]">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-[#ff2b34] shrink-0" />
                          <span>{t.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-[#ff2b34] shrink-0" />
                          <span>{t.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ticket size={14} className="text-[#ff2b34] shrink-0" />
                          <span className="font-semibold text-[#141010]">
                            {t.ticketName}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#141010]/8 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedTicket(t)}
                        className="inline-flex items-center gap-2 rounded-full bg-[#141010] px-4 py-2 text-xs font-bold text-white hover:bg-[#ff2b34] transition cursor-pointer"
                      >
                        <QrCode size={14} /> Ver QR Code de Acesso
                      </button>
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5e5a5a] hover:text-[#141010]"
                      >
                        <Printer size={13} /> Imprimir comprovante
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* SEARCH ANOTHER EMAIL */}
              <div className="mt-12 rounded-3xl border border-[#141010]/10 bg-[#f9f7f6] p-8">
                <h3 className="text-lg font-bold text-[#141010]">
                  Comprou com outro e-mail?
                </h3>
                <p className="mt-1 text-sm text-[#5e5a5a]">
                  Digite o endereço de e-mail utilizado na compra para localizar seus ingressos.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Buscando inscrições para: ${searchEmail}`);
                  }}
                  className="mt-4 flex flex-col sm:flex-row gap-3 max-w-lg"
                >
                  <input
                    type="email"
                    required
                    placeholder="exemplo@gmail.com"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    className="flex-1 rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#ff2b34]"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#ff2b34] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#e01e27] cursor-pointer"
                  >
                    Localizar
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: CERTIFICADOS E COMPROVANTES */}
        {activeTab === "certificados" && (
          <section className="py-12">
            <div className="mx-auto max-w-5xl px-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-[#141010]">
                  Certificados e comprovantes
                </h2>
                <p className="mt-1 text-sm text-[#5e5a5a]">
                  Consulte todos os seus certificados emitidos em eventos organizados na plataforma Doity.
                </p>
              </div>

              {/* SEARCH BOX */}
              <div className="mt-6 rounded-3xl border border-[#141010]/10 bg-white p-6 shadow-sm max-w-2xl">
                <form onSubmit={handleEmailSearch} className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-semibold text-[#141010]">
                      E-mail informado no momento da inscrição
                    </span>
                    <div className="mt-1.5 flex gap-3">
                      <div className="relative flex-1">
                        <Mail
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Digite seu e-mail cadastrado"
                          value={searchEmail}
                          onChange={(e) => setSearchEmail(e.target.value)}
                          className="w-full rounded-full border border-neutral-300 bg-[#f9f7f6] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#ff2b34] focus:bg-white"
                        />
                      </div>
                      <button
                        type="submit"
                        className="rounded-full bg-[#ff2b34] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#e01e27] cursor-pointer shadow-sm"
                      >
                        Buscar certificados
                      </button>
                    </div>
                  </label>
                  <p className="text-[11px] text-[#5e5a5a]">
                    Dica: use exatamente o mesmo e-mail preenchido no formulário de inscrição do evento.
                  </p>
                </form>
              </div>

              {/* CERTIFICATE LIST */}
              <div className="mt-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#141010]">
                    Certificados disponíveis ({sampleCertificates.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab("validar")}
                    className="text-xs font-semibold text-[#ff2b34] hover:underline flex items-center gap-1"
                  >
                    Validar autenticidade de um código <ArrowRight size={12} />
                  </button>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {sampleCertificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="rounded-3xl border border-[#141010]/10 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition"
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-[#141010]/8 pb-3">
                          <span className="text-xs font-mono font-bold text-[#ff2b34] bg-[#ff2b34]/10 px-2.5 py-1 rounded-full">
                            Código: {cert.validationCode}
                          </span>
                          <span className="text-xs text-[#5e5a5a]">
                            Carga: <strong>{cert.hours} horas</strong>
                          </span>
                        </div>

                        <h4 className="mt-4 text-base font-bold text-[#141010] leading-snug">
                          {cert.eventName}
                        </h4>

                        <div className="mt-3 text-xs text-[#5e5a5a] space-y-1">
                          <p>
                            Participante: <strong>{cert.participantName}</strong>
                          </p>
                          <p>
                            Papel: <strong>{cert.role}</strong>
                          </p>
                          <p>
                            Emitido em: <strong>{cert.issueDate}</strong>
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#141010]/8 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setPreviewCert(cert)}
                          className="flex-1 rounded-full bg-[#141010] py-2.5 text-xs font-bold text-white hover:bg-[#ff2b34] transition flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <FileCheck size={14} /> Visualizar certificado
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setValidationInput(cert.validationCode);
                            setActiveTab("validar");
                          }}
                          className="rounded-full border border-neutral-300 px-4 py-2.5 text-xs font-semibold text-[#141010] hover:bg-neutral-50 cursor-pointer"
                        >
                          Validar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: VALIDAR CERTIFICADO */}
        {activeTab === "validar" && (
          <section className="py-12">
            <div className="mx-auto max-w-3xl px-6">
              <div className="text-center max-w-xl mx-auto">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                  <ShieldCheck size={28} />
                </span>
                <h2 className="text-3xl font-bold text-[#141010]">
                  Validação de Certificados
                </h2>
                <p className="mt-2 text-sm text-[#5e5a5a]">
                  Confirme a autenticidade de um certificado emitido na plataforma Doity digitando o código impresso no documento.
                </p>
              </div>

              {/* CODE INPUT FORM */}
              <div className="mt-8 rounded-3xl border border-[#141010]/10 bg-white p-6 md:p-8 shadow-md">
                <form onSubmit={handleValidateCertificate} className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-semibold text-[#141010]">
                      Código de validação (impresso no rodapé do certificado)
                    </span>
                    <div className="mt-1.5 flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Ex: DOITY-2026-X892"
                        value={validationInput}
                        onChange={(e) => setValidationInput(e.target.value)}
                        className="flex-1 rounded-full border border-neutral-300 bg-[#f9f7f6] px-5 py-3 text-sm font-mono font-bold tracking-wider outline-none focus:border-[#ff2b34] focus:bg-white uppercase"
                      />
                      <button
                        type="submit"
                        className="rounded-full bg-[#ff2b34] px-8 py-3 text-sm font-bold text-white hover:bg-[#e01e27] cursor-pointer shadow transition"
                      >
                        Verificar Autenticidade
                      </button>
                    </div>
                  </label>
                  <p className="text-[11px] text-[#5e5a5a]">
                    Você pode testar com o código: <code className="bg-neutral-100 px-1 py-0.5 rounded text-neutral-800 font-bold">DOITY-2026-X892</code>
                  </p>
                </form>

                {/* VALIDATION RESULT CARD */}
                {validationResult && (
                  <div className="mt-8 pt-6 border-t border-[#141010]/10">
                    {validationResult.valid && validationResult.cert ? (
                      <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 p-6">
                        <div className="flex items-center gap-3 text-emerald-700">
                          <CheckCircle2 size={24} className="shrink-0" />
                          <div>
                            <h4 className="text-base font-bold">
                              Certificado Autêntico e Válido!
                            </h4>
                            <p className="text-xs text-emerald-800/80">
                              Este documento foi oficialmente registrado e gerado pela plataforma Doity.
                            </p>
                          </div>
                        </div>

                        <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-4 rounded-xl border border-emerald-200">
                          <div>
                            <dt className="text-neutral-500">Participante:</dt>
                            <dd className="font-bold text-neutral-900 text-sm">
                              {validationResult.cert.participantName}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-neutral-500">Código verificador:</dt>
                            <dd className="font-mono font-bold text-[#ff2b34]">
                              {validationResult.cert.validationCode}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-neutral-500">Evento:</dt>
                            <dd className="font-semibold text-neutral-900">
                              {validationResult.cert.eventName}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-neutral-500">Carga horária:</dt>
                            <dd className="font-semibold text-neutral-900">
                              {validationResult.cert.hours} horas
                            </dd>
                          </div>
                          <div>
                            <dt className="text-neutral-500">Data de emissão:</dt>
                            <dd className="text-neutral-900">
                              {validationResult.cert.issueDate}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-neutral-500">Status no sistema:</dt>
                            <dd className="text-emerald-700 font-bold">
                              Ativo no livro de registros
                            </dd>
                          </div>
                        </dl>
                      </div>
                    ) : (
                      <div className="rounded-2xl border-2 border-red-500/30 bg-red-50/50 p-6">
                        <div className="flex items-center gap-3 text-red-700">
                          <XCircle size={24} className="shrink-0" />
                          <div>
                            <h4 className="text-base font-bold">
                              Código não localizado
                            </h4>
                            <p className="text-xs text-red-800/80">
                              Não encontramos nenhum certificado emitido com o código informado. Verifique se digitou os caracteres corretamente.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* QR CODE MODAL FOR TICKET */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl text-center">
            <button
              type="button"
              onClick={() => setSelectedTicket(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800"
            >
              ✕
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
              Credencial Digital
            </span>
            <h3 className="mt-1 text-base font-bold text-[#141010]">
              {selectedTicket.eventName}
            </h3>
            <p className="text-xs text-[#5e5a5a] mt-0.5">
              Participante: <strong>{selectedTicket.attendee}</strong>
            </p>

            <div className="my-6 mx-auto flex size-48 items-center justify-center rounded-2xl bg-[#f9f7f6] border-2 border-dashed border-[#141010]/20 p-4">
              {/* Simulated QR Code graphic */}
              <div className="flex flex-col items-center">
                <QrCode size={130} className="text-[#141010]" />
                <span className="mt-2 text-[10px] font-mono font-bold text-[#5e5a5a]">
                  {selectedTicket.qrData}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5e5a5a]">
              Apresente esta tela na recepção ou baixe para seu smartphone.
            </p>

            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  window.print();
                  setSelectedTicket(null);
                }}
                className="flex-1 rounded-full bg-[#ff2b34] py-2.5 text-xs font-bold text-white hover:bg-[#e01e27] cursor-pointer"
              >
                Imprimir Ingresso
              </button>
              <button
                type="button"
                onClick={() => setSelectedTicket(null)}
                className="rounded-full border border-neutral-300 px-4 py-2.5 text-xs font-semibold text-neutral-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PREVIEW CERTIFICATE MODAL */}
      {previewCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setPreviewCert(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-800"
            >
              ✕
            </button>

            {/* DIPLOMA / CERTIFICATE MOCKUP */}
            <div className="border-8 border-double border-[#ff2b34]/30 p-8 rounded-2xl bg-[radial-gradient(#fff_0%,_#fbf8f7_100%)] text-center relative shadow-inner">
              <div className="flex justify-center mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff2b34] bg-[#ff2b34]/10 px-3 py-1 rounded-full">
                  Certificado de Participação
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mt-4">
                CERTIFICADO
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Certificamos para os devidos fins que
              </p>

              <h3 className="text-xl font-bold text-[#ff2b34] my-4 font-serif border-b border-neutral-300 pb-2 inline-block">
                {previewCert.participantName}
              </h3>

              <p className="text-xs text-neutral-700 leading-relaxed max-w-lg mx-auto">
                participou com êxito do evento <strong>"{previewCert.eventName}"</strong>, na condição de <strong>{previewCert.role}</strong>, cumprindo a carga horária total de <strong>{previewCert.hours} horas</strong>.
              </p>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Data de emissão: {previewCert.issueDate}</span>
                <span className="font-mono font-bold text-[#ff2b34]">
                  Autenticador: {previewCert.validationCode}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#ff2b34] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#e01e27] cursor-pointer"
              >
                <Download size={14} /> Baixar PDF / Imprimir
              </button>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="rounded-full border border-neutral-300 px-4 py-2.5 text-xs font-semibold text-neutral-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <SiteFooter onNavigate={onNavigate} />
      <CookieBox />
    </div>
  );
}
