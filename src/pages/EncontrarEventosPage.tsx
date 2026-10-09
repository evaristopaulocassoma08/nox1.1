import React, { useState, useMemo } from "react";
import {
  Search,
  Calendar,
  MapPin,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Award,
  ArrowRight,
  Tag,
  CheckCircle,
} from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  CookieBox,
  NavHref,
} from "@/components/site-chrome";

interface EncontrarEventosPageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

interface EventItem {
  id: string;
  title: string;
  category: string;
  area: string;
  date: string;
  location: string;
  city: string;
  state: string;
  type: "Presencial" | "Online" | "Híbrido";
  banner: string;
  highlight?: boolean;
}

const mockEvents: EventItem[] = [
  {
    id: "1",
    title: "XIV ENCONTRO PERNAMBUCANO DE ODONTOLOGIA",
    category: "Congressos e seminários",
    area: "Saúde",
    date: "17 de out. de 2026",
    location: "FPS - Centro de Eventos Recife",
    city: "Recife",
    state: "PE",
    type: "Presencial",
    banner: "/assets/evento-291947-banner.jpeg",
    highlight: true,
  },
  {
    id: "2",
    title: "Uso de Drones na Silvicultura - 3ª Edição",
    category: "Cursos e workshops",
    area: "Outros",
    date: "21 de out. de 2026",
    location: "Auditório Prof. Paulo Rodolfo Leopoldo",
    city: "Botucatu",
    state: "SP",
    type: "Presencial",
    banner: "/assets/evento-294023-banner.jpeg",
    highlight: true,
  },
  {
    id: "3",
    title: "AI BRASIL Experience: Inteligência Artificial nos Negócios",
    category: "Congressos e seminários",
    area: "Administração e Negócios",
    date: "28 de out. de 2026",
    location: "Distrito Anhembi",
    city: "São Paulo",
    state: "SP",
    type: "Presencial",
    banner: "/assets/evento-289466-banner.jpeg",
    highlight: true,
  },
  {
    id: "4",
    title: "Descomplicando o Currículo Lattes: Guia Prático para Acadêmicos",
    category: "Cursos e workshops",
    area: "Educação",
    date: "09 de out. de 2026",
    location: "Online",
    city: "Online",
    state: "Online",
    type: "Online",
    banner: "/assets/doity-play/secao-transmissao.jpg",
  },
  {
    id: "5",
    title: "1º Congresso Paraibano de Autismo e Inclusão Escolar",
    category: "Congressos e seminários",
    area: "Saúde",
    date: "09 de out. de 2026",
    location: "Teatro Municipal",
    city: "Cabedelo",
    state: "PB",
    type: "Presencial",
    banner: "/assets/curadoria/hero-programacao.png",
  },
  {
    id: "6",
    title: "Geofísica na Era Quântica: Aplicações Práticas com IA",
    category: "Cursos e workshops",
    area: "Educação",
    date: "12 de out. de 2026",
    location: "Online",
    city: "Online",
    state: "Online",
    type: "Online",
    banner: "/assets/doity-play/hero.jpg",
  },
  {
    id: "7",
    title: "9º CORRE SUORESENHA: Circuito de Rua 5K e 10K",
    category: "Esporte e lazer",
    area: "Esporte e Lazer",
    date: "18 de out. de 2026",
    location: "Orla da Praia do Anil",
    city: "Angra dos Reis",
    state: "RJ",
    type: "Presencial",
    banner: "/assets/checkin/hero.webp",
  },
  {
    id: "8",
    title: "Conferência Teológica: O Mundo da Bíblia na Contemporaneidade",
    category: "Religião e espiritualidade",
    area: "Religião e Espiritualidade",
    date: "10 de out. de 2026",
    location: "Online",
    city: "Online",
    state: "Online",
    type: "Online",
    banner: "/assets/multieventos/hero.png",
  },
  {
    id: "9",
    title: "7º Encontro de Tecnólogos em Gestão e Negócios (ENTEG)",
    category: "Encontro e networking",
    area: "Administração e Negócios",
    date: "14 de out. de 2026",
    location: "Centro de Convenções do Ceará",
    city: "Fortaleza",
    state: "CE",
    type: "Híbrido",
    banner: "/assets/caex/hero-caex.png",
  },
  {
    id: "10",
    title: "DIÁLOGOS NO CEM: Imigração, Direitos Humanos e Cidadania",
    category: "Congressos e seminários",
    area: "Direito",
    date: "16 de out. de 2026",
    location: "Faculdade de Direito USP",
    city: "São Paulo",
    state: "SP",
    type: "Presencial",
    banner: "/assets/curadoria/secao-kanban.png",
  },
  {
    id: "11",
    title: "SEXTA PREMIUM: Festival de Música e Arte Urbana",
    category: "Shows e entretenimento",
    area: "Shows e Entretenimento",
    date: "24 de out. de 2026",
    location: "Pedreira Paulo Leminski",
    city: "Curitiba",
    state: "PR",
    type: "Presencial",
    banner: "/assets/multieventos/experiencia.png",
  },
  {
    id: "12",
    title: "EXPO AUTO MECÂNICA 2026 - Feira de Tecnologia Automotiva",
    category: "Feira e exposição",
    area: "Outros",
    date: "05 de nov. de 2026",
    location: "Centro de Eventos do Pantanal",
    city: "Cuiabá",
    state: "MT",
    type: "Presencial",
    banner: "/assets/3-opere-oevento.png",
  },
];

const areasList = [
  { name: "Saúde", count: 42, color: "from-rose-500 to-red-600" },
  { name: "Administração e Negócios", count: 35, color: "from-blue-600 to-indigo-700" },
  { name: "Direito", count: 28, color: "from-slate-700 to-slate-900" },
  { name: "Educação", count: 50, color: "from-amber-500 to-orange-600" },
  { name: "Esporte e Lazer", count: 22, color: "from-emerald-500 to-teal-700" },
  { name: "Religião e Espiritualidade", count: 31, color: "from-purple-600 to-indigo-800" },
  { name: "Shows e Entretenimento", count: 19, color: "from-pink-500 to-rose-600" },
  { name: "Outros", count: 45, color: "from-neutral-600 to-neutral-800" },
];

export function EncontrarEventosPage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: EncontrarEventosPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  // Registration modal simulation
  const [enrolledEvent, setEnrolledEvent] = useState<EventItem | null>(null);
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [participantEmail, setParticipantEmail] = useState("");
  const [participantName, setParticipantName] = useState("");

  const filteredEvents = useMemo(() => {
    return mockEvents.filter((ev) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = ev.title.toLowerCase().includes(q);
        const matchesCity = ev.city.toLowerCase().includes(q);
        const matchesArea = ev.area.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCity && !matchesArea) return false;
      }
      if (selectedCategory && ev.category !== selectedCategory) {
        return false;
      }
      if (selectedArea && ev.area !== selectedArea) {
        return false;
      }
      if (selectedType && ev.type !== selectedType) {
        return false;
      }
      if (selectedState && ev.state !== selectedState) {
        return false;
      }
      if (selectedCity && !ev.city.toLowerCase().includes(selectedCity.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedArea,
    selectedType,
    selectedState,
    selectedCity,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedArea(null);
    setSelectedType("");
    setSelectedState("");
    setSelectedCity("");
    setSelectedPeriod("");
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollSuccess(true);
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
        {/* HEADER & SEARCH BAR */}
        <section className="border-b border-[#141010]/8 bg-[linear-gradient(165deg,_#fff0f0_0%,_#ffffff_48%,_#f7f5f4_100%)] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#141010] md:text-5xl">
              Encontrar eventos
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-[#5e5a5a]">
              Pesquise por nome, navegue por área de interesse ou filtre por localidade e formato.
            </p>

            {/* SEARCH FORM */}
            <div className="mt-8 rounded-3xl border border-[#141010]/10 bg-white p-5 shadow-lg">
              {/* Primary Search Input */}
              <div className="flex items-center gap-3 rounded-full border border-[#141010]/15 bg-[#f9f7f6] px-5 py-3.5 focus-within:border-[#ff2b34] focus-within:bg-white transition">
                <Search size={20} className="text-[#ff2b34] shrink-0" />
                <input
                  type="text"
                  placeholder="Pesquisar por nome do evento, tema, palestrante ou universidade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-[#141010] outline-none text-base placeholder:text-[#5e5a5a]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-[#5e5a5a] hover:text-[#141010]"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Advanced Filter Row */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-full border border-[#141010]/15 bg-white px-4 py-2.5 text-sm text-[#141010] outline-none focus:border-[#ff2b34]"
                >
                  <option value="">Todas as categorias</option>
                  <option value="Congressos e seminários">Congressos e seminários</option>
                  <option value="Cursos e workshops">Cursos e workshops</option>
                  <option value="Esporte e lazer">Esporte e lazer</option>
                  <option value="Religião e espiritualidade">Religião e espiritualidade</option>
                  <option value="Shows e entretenimento">Shows e entretenimento</option>
                  <option value="Feira e exposição">Feira e exposição</option>
                  <option value="Encontro e networking">Encontro e networking</option>
                  <option value="Outros">Outros</option>
                </select>

                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="rounded-full border border-[#141010]/15 bg-white px-4 py-2.5 text-sm text-[#141010] outline-none focus:border-[#ff2b34]"
                >
                  <option value="">Qualquer período</option>
                  <option value="hoje">Hoje</option>
                  <option value="semana">Esta semana</option>
                  <option value="mes">Este mês</option>
                </select>

                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="rounded-full border border-[#141010]/15 bg-white px-4 py-2.5 text-sm text-[#141010] outline-none focus:border-[#ff2b34]"
                >
                  <option value="">Todos os Estados</option>
                  <option value="SP">São Paulo (SP)</option>
                  <option value="RJ">Rio de Janeiro (RJ)</option>
                  <option value="MG">Minas Gerais (MG)</option>
                  <option value="PE">Pernambuco (PE)</option>
                  <option value="CE">Ceará (CE)</option>
                  <option value="BA">Bahia (BA)</option>
                  <option value="DF">Distrito Federal (DF)</option>
                  <option value="PR">Paraná (PR)</option>
                  <option value="PB">Paraíba (PB)</option>
                  <option value="Online">Apenas Online</option>
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="rounded-full border border-[#141010]/15 bg-white px-4 py-2.5 text-sm text-[#141010] outline-none focus:border-[#ff2b34]"
                >
                  <option value="">Todos os formatos</option>
                  <option value="Presencial">Presencial</option>
                  <option value="Online">Online</option>
                  <option value="Híbrido">Híbrido</option>
                </select>

                <input
                  type="text"
                  placeholder="Cidade (ex: Recife)"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="rounded-full border border-[#141010]/15 bg-white px-4 py-2.5 text-sm text-[#141010] outline-none focus:border-[#ff2b34]"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-[#5e5a5a]">
                  Mostrando <strong>{filteredEvents.length}</strong> evento(s) encontrado(s)
                </div>
                {(searchQuery || selectedCategory || selectedArea || selectedType || selectedState || selectedCity) && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-semibold text-[#ff2b34] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <X size={14} /> Limpar todos os filtros
                  </button>
                )}
              </div>
            </div>

            {/* EXPLORAR POR ÁREA */}
            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-wider text-[#5e5a5a] mb-4">
                Explorar por área de conhecimento & interesse
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {areasList.map((area) => {
                  const isSelected = selectedArea === area.name;
                  return (
                    <button
                      key={area.name}
                      type="button"
                      onClick={() =>
                        setSelectedArea(isSelected ? null : area.name)
                      }
                      className={`relative flex h-20 flex-col items-center justify-center rounded-2xl p-2 text-center text-xs font-bold transition overflow-hidden cursor-pointer shadow-sm ${
                        isSelected
                          ? "ring-2 ring-[#ff2b34] ring-offset-2 scale-105"
                          : "hover:scale-102"
                      } bg-gradient-to-br ${area.color} text-white`}
                    >
                      <span className="relative z-10 drop-shadow">{area.name}</span>
                      <span className="relative z-10 text-[10px] opacity-80 mt-1">
                        {area.count} eventos
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* EVENT LIST & GRID */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#141010] md:text-3xl">
                Eventos em destaque & próximos
              </h2>
              <NavHref
                href="/area-do-participante"
                navigate={onNavigate}
                className="text-sm font-semibold text-[#ff2b34] hover:underline flex items-center gap-1"
              >
                Já inscrito? Área do participante <ArrowRight size={14} />
              </NavHref>
            </div>

            {filteredEvents.length === 0 ? (
              <div className="rounded-3xl border border-[#141010]/10 bg-[#f9f7f6] p-12 text-center">
                <p className="text-lg font-bold text-[#141010]">
                  Nenhum evento encontrado com os filtros selecionados.
                </p>
                <p className="mt-2 text-sm text-[#5e5a5a]">
                  Tente buscar por termos mais abrangentes ou limpe os filtros para ver todos os eventos.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold bg-[#ff2b34] text-white hover:bg-[#e01e27] cursor-pointer"
                >
                  Ver todos os eventos
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#141010]/10 bg-white transition hover:border-[#ff2b34]/40 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                      <img
                        src={ev.banner}
                        alt={ev.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {ev.type}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-[#ff2b34]">
                        {ev.area}
                      </p>
                      <h3 className="mt-1 line-clamp-2 text-base font-bold text-[#141010] group-hover:text-[#ff2b34] transition">
                        {ev.title}
                      </h3>

                      <div className="mt-auto pt-4 space-y-1.5 text-xs text-[#5e5a5a] border-t border-[#141010]/8">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#ff2b34]" />
                          <span>{ev.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#ff2b34]" />
                          <span className="truncate">{ev.location}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEnrolledEvent(ev);
                            setEnrollSuccess(false);
                          }}
                          className="w-full rounded-full bg-[#141010] py-2.5 text-xs font-bold text-white hover:bg-[#ff2b34] transition cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          Fazer inscrição <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* BOTTOM PARTICIPANT NOTICE */}
        <section className="border-t border-[#141010]/8 bg-[#f9f7f6] py-12">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h3 className="font-display text-2xl font-bold text-[#141010]">
              Já participou de um evento na Doity?
            </h3>
            <p className="mt-2 text-sm text-[#5e5a5a] max-w-xl mx-auto">
              Acesse sua conta ou digite seu e-mail para consultar ingressos, emitir certificados digitais com autenticidade garantida e baixar comprovantes.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <NavHref
                href="/area-do-participante"
                navigate={onNavigate}
                className="rounded-full bg-[#ff2b34] px-6 py-3 text-sm font-semibold text-white hover:bg-[#e01e27] shadow"
              >
                Acessar Área do Participante
              </NavHref>
              <NavHref
                href="/area-do-participante/certificado"
                navigate={onNavigate}
                className="rounded-full border border-[#141010]/20 bg-white px-6 py-3 text-sm font-semibold text-[#141010] hover:border-[#141010]/40"
              >
                Emitir ou Validar Certificados
              </NavHref>
            </div>
          </div>
        </section>
      </main>

      {/* REGISTRATION MODAL */}
      {enrolledEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setEnrolledEvent(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-800"
            >
              <X size={20} />
            </button>

            {enrollSuccess ? (
              <div className="text-center py-4">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#141010]">
                  Inscrição Confirmada!
                </h3>
                <p className="mt-2 text-sm text-[#5e5a5a]">
                  Parabéns, <strong>{participantName}</strong>! Sua inscrição no evento <strong>{enrolledEvent.title}</strong> foi realizada. Enviamos o voucher com QR Code para <strong>{participantEmail}</strong>.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <NavHref
                    href="/area-do-participante"
                    navigate={onNavigate}
                    onClick={() => setEnrolledEvent(null)}
                    className="rounded-full bg-[#ff2b34] py-3 text-sm font-semibold text-white hover:bg-[#e01e27]"
                  >
                    Ver ingresso na Área do Participante
                  </NavHref>
                  <button
                    type="button"
                    onClick={() => setEnrolledEvent(null)}
                    className="py-2 text-xs font-semibold text-neutral-500 hover:text-neutral-900"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff2b34]">
                  Inscrição Rápida
                </span>
                <h3 className="mt-1 text-xl font-bold text-[#141010]">
                  {enrolledEvent.title}
                </h3>
                <p className="mt-1 text-xs text-[#5e5a5a]">
                  {enrolledEvent.date} · {enrolledEvent.location}
                </p>

                <form onSubmit={handleEnrollSubmit} className="mt-6 space-y-4">
                  <label className="block">
                    <span className="text-xs font-semibold text-[#141010]">
                      Seu nome completo
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Ex: Carlos Eduardo"
                      value={participantName}
                      onChange={(e) => setParticipantName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-neutral-300 p-2.5 text-sm outline-none focus:border-[#ff2b34]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-[#141010]">
                      Seu e-mail
                    </span>
                    <input
                      required
                      type="email"
                      placeholder="carlos@exemplo.com"
                      value={participantEmail}
                      onChange={(e) => setParticipantEmail(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-neutral-300 p-2.5 text-sm outline-none focus:border-[#ff2b34]"
                    />
                  </label>

                  <div className="rounded-xl bg-[#f9f7f6] p-3 text-xs text-[#5e5a5a]">
                    <div className="flex justify-between font-semibold text-[#141010]">
                      <span>Lote 1 (Geral):</span>
                      <span className="text-emerald-600">Inscrição Gratuita / R$ 0,00</span>
                    </div>
                    <p className="mt-1 text-[11px]">
                      Você receberá seu QR Code de credenciamento e acesso por e-mail.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#ff2b34] py-3 text-sm font-semibold text-white hover:bg-[#e01e27] cursor-pointer shadow"
                  >
                    Confirmar inscrição
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <SiteFooter onNavigate={onNavigate} />
      <CookieBox />
    </div>
  );
}
