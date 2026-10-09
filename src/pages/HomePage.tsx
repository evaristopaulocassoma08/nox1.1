import React, { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import {
  BrandButton,
  SiteHeader,
  SiteFooter,
  CookieBox,
  NavHref,
} from "@/components/site-chrome";
import {
  logo,
  hero,
  dashboard,
  journey1,
  journey2,
  journey3,
  journey4,
  journey5,
  event1,
  event2,
  event3,
  event4,
  event5,
} from "@/assets/assets";

interface HomePageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

const events = [
  {
    image: event1.url,
    category: "ODONTOLOGIA",
    title: "XIV ENCONTRO PERNAMBUCANO DE ODONTOLOGIA",
    date: "17 de out. de 2026 · Recife, PE",
  },
  {
    image: event2.url,
    category: "RECURSOS FLORESTAIS E ENGENHARIA FLORESTAL",
    title: "Uso de Drones na Silvicultura - 3ª Edição",
    date: "21 de out. de 2026 · Botucatu, SP",
  },
  {
    image: event3.url,
    category: "TECNOLOGIA",
    title: "AI BRASIL Experience",
    date: "28 de out. de 2026 · São Paulo, SP",
  },
  {
    image: event4.url,
    category: "MEDICINA",
    title: "XXI CONGRESSO MÉDICO AMAZÔNICO",
    date: "06 de nov. de 2026 · Belém, PA",
  },
  {
    image: event5.url,
    category: "MULTIDISCIPLINAR",
    title: "Agile Trends 2027",
    date: "12 de abr. de 2027 · São Paulo, SP",
  },
];

const journey = [
  {
    number: "01",
    title: "Crie e divulgue",
    text: "Monte o site, publique programação e palestrantes e deixe tudo pronto para divulgar.",
    image: journey1.url,
  },
  {
    number: "02",
    title: "Venda e organize inscrições",
    text: "Crie ingressos, lotes, cupons e formulários e receba pagamentos por Pix, cartão ou boleto.",
    image: journey2.url,
  },
  {
    number: "03",
    title: "Opere o evento",
    text: "Credencie participantes, imprima etiquetas, controle acessos e acompanhe a operação em tempo real.",
    image: journey3.url,
  },
  {
    number: "04",
    title: "Engaje",
    text: "Leve programação, networking, gamificação, notificações e patrocinadores para o celular do participante.",
    image: journey4.url,
  },
  {
    number: "05",
    title: "Finalize e continue o relacionamento",
    text: "Emita certificados, acompanhe dados e mantenha todo o histórico do evento organizado.",
    image: journey5.url,
  },
];

const audience = [
  [
    "Corporativos",
    "Eventos empresariais, convenções, encontros e experiências de marca.",
  ],
  [
    "Acadêmicos e científicos",
    "Congressos, simpósios, submissões, avaliações e anais.",
  ],
  [
    "Feiras e exposições",
    "Expositores, patrocinadores, leads, credenciamento e CAEX.",
  ],
  [
    "Esportivos",
    "Inscrições, categorias, participantes e operação presencial.",
  ],
  [
    "Religiosos",
    "Congressos, encontros, inscrições e comunicação com grandes públicos.",
  ],
  [
    "Saúde",
    "Jornadas, cursos e congressos médicos com submissão de artigos e certificação.",
  ],
];

export function HomePage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: HomePageProps) {
  const eventsRowRef = useRef<HTMLDivElement>(null);

  const scrollEvents = (direction: "left" | "right") => {
    if (eventsRowRef.current) {
      const scrollAmount = 280;
      eventsRowRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <SiteHeader
        onNavigate={onNavigate}
        onOpenCreateModal={onOpenCreateModal}
        onOpenContactModal={onOpenContactModal}
        onOpenLoginModal={onOpenLoginModal}
      />

      {/* Hero Section */}
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dots">● ●</span> A plataforma completa para eventos de sucesso
          </p>
          <h1>
            Tudo que seu <span>evento</span> precisa, em um só lugar
          </h1>
          <p className="lead">
            Crie, divulgue e opere seu evento com autonomia. Site, inscrições,
            pagamentos, credenciamento, aplicativo, certificados e muito mais. Tudo
            conectado na mesma plataforma.
          </p>
          <div className="hero-actions">
            <BrandButton onClick={onOpenCreateModal}>
              Criar evento grátis
            </BrandButton>
            <BrandButton outline onClick={onOpenContactModal}>
              Falar com um especialista
            </BrandButton>
            <a className="text-link" href="#eventos">
              Encontrar eventos <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <img
          className="hero-image"
          src={hero.url}
          alt="Plataforma Doity no notebook e no celular, com módulos do ecossistema"
        />
      </section>

      {/* Events Showcase Section */}
      <section id="eventos" className="section events-section">
        <div className="section-heading row-heading">
          <div>
            <h2>Conheça eventos que acontecem na Doity</h2>
            <p>
              Encontre congressos, cursos e encontros que já estão abertos para
              inscrição.
            </p>
          </div>
          <div className="slider-actions">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollEvents("left")}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => scrollEvents("right")}
            >
              <ChevronRight size={18} />
            </button>
            <a href="#eventos">Ver todos →</a>
          </div>
        </div>

        <div className="events-row" ref={eventsRowRef}>
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <img src={event.image} alt={event.title} />
              <div className="event-body">
                <p className="event-category">{event.category}</p>
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Autonomy Section */}
      <section className="section autonomy">
        <div>
          <h2>Do it yourself. Doity.</h2>
          <p>A Doity foi criada para dar autonomia a quem organiza.</p>
          <p>
            Você configura seu evento, publica, vende ingressos, acompanha
            participantes e ajusta a operação no seu ritmo.
          </p>
          <p>Sem precisar depender de uma equipe técnica para cada mudança.</p>
          <strong>Seu evento. Sua operação. Seu controle.</strong>
          <div className="mt-6">
            <BrandButton onClick={onOpenCreateModal}>
              Comece agora gratuitamente
            </BrandButton>
          </div>
        </div>
        <img
          src={dashboard.url}
          alt="Painel de controle e relatórios da plataforma Doity"
        />
      </section>

      {/* Journey Section */}
      <section id="solucoes" className="journey-section">
        <div className="section">
          <div className="section-heading centered">
            <h2>Da ideia ao pós-evento</h2>
            <p>
              Uma única plataforma acompanhando toda a jornada, do site ao certificado.
            </p>
          </div>

          <div className="journey-list">
            {journey.map((item, i) => (
              <article
                className={`journey-item ${i % 2 ? "reverse" : ""}`}
                key={item.number}
              >
                <div className="journey-copy">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <NavHref
                    href={item.number === "04" ? "/app-para-eventos" : "/plataforma-de-eventos"}
                    navigate={onNavigate}
                    className="journey-link"
                  >
                    Conhecer solução <ArrowRight size={15} />
                  </NavHref>
                </div>
                <div className="journey-visual">
                  <img src={item.image} alt={item.title} />
                </div>
              </article>
            ))}
          </div>

          <div className="mini-solutions">
            <NavHref
              href="/plataforma-de-eventos"
              navigate={onNavigate}
            >
              <strong>Trabalhos científicos</strong>
              <span>
                Submissões, avaliações, anais e certificados para eventos acadêmicos.
              </span>
              <b>Saiba mais →</b>
            </NavHref>
            <NavHref
              href="/plataforma-de-eventos"
              navigate={onNavigate}
            >
              <strong>Ver todas as soluções</strong>
              <span>
                Mapa completo da plataforma e dos módulos consultivos.
              </span>
              <b>Saiba mais →</b>
            </NavHref>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section id="precos" className="growth">
        <div className="section growth-inner">
          <h2>Comece simples. Evolua quando precisar.</h2>
          <p>
            Nem todo evento precisa de tudo no primeiro dia. Você pode começar com
            site + inscrições + pagamentos e adicionar novas soluções conforme a
            operação cresce.
          </p>
          <div className="steps">
            <span>Começar</span>
            <b>→</b>
            <span>Operar</span>
            <b>→</b>
            <span>Expandir</span>
          </div>
          <strong>Uma plataforma que acompanha o tamanho do seu evento.</strong>
          <div className="mt-8 flex justify-center gap-3">
            <BrandButton onClick={onOpenCreateModal}>
              Criar evento grátis
            </BrandButton>
            <BrandButton outline onClick={onOpenContactModal}>
              Consultar taxas e planos
            </BrandButton>
          </div>
        </div>
      </section>

      {/* Complex Operations */}
      <section className="section complex">
        <div className="section-heading centered">
          <h2>Operações mais complexas também cabem aqui</h2>
          <p>
            Além da plataforma principal, a Doity possui soluções para eventos com
            necessidades específicas.
          </p>
        </div>
        <div className="complex-grid">
          {[
            [
              "CAEX",
              "Centralize a gestão de expositores e patrocinadores, entregas, documentos, credenciais e atendimento.",
            ],
            [
              "Curadoria",
              "Organize propostas de conteúdo, avaliações, aprovações e montagem da programação.",
            ],
            [
              "Aplicativo exclusivo",
              "Crie uma experiência própria para o participante com networking, negócios e engajamento.",
            ],
          ].map((x, i) => (
            <article key={x[0]}>
              <div className={`abstract abstract-${i + 1}`}></div>
              <h3>{x[0]}</h3>
              <p>{x[1]}</p>
              <NavHref
                href={
                  x[0] === "CAEX"
                    ? "/caex-central-atendimento-ao-expositor"
                    : x[0] === "Curadoria"
                    ? "/curadoria"
                    : "/app-para-eventos"
                }
                navigate={onNavigate}
              >
                Saiba mais →
              </NavHref>
            </article>
          ))}
        </div>
      </section>

      {/* Target Audiences */}
      <section id="publicos" className="audience-section">
        <div className="section">
          <div className="section-heading centered">
            <h2>Doity: perfeita para diferentes tipos de eventos</h2>
            <p>A tecnologia é a mesma. A operação muda conforme o evento.</p>
          </div>
          <div className="audience-grid">
            {audience.map((item, i) => (
              <NavHref
                href="/plataforma-de-eventos"
                navigate={onNavigate}
                className={`audience-card audience-${i + 1}`}
                key={item[0]}
              >
                <div>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                  <span>Conhecer →</span>
                </div>
              </NavHref>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="comece" className="cta-section">
        <div>
          <p className="eyebrow justify-center">
            <span className="dots">● ●</span> PRONTO PARA COMEÇAR?
          </p>
          <h2>Seu próximo evento começa aqui.</h2>
          <p>
            Crie sua conta gratuitamente ou fale com quem entende de operação de
            eventos.
          </p>
          <div>
            <BrandButton onClick={onOpenCreateModal}>
              Criar evento grátis
            </BrandButton>
            <BrandButton outline onClick={onOpenContactModal}>
              Falar com especialista
            </BrandButton>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
      <CookieBox />
    </main>
  );
}
