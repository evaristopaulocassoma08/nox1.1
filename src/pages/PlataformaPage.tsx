import React from "react";
import {
  BrandButton,
  CookieBox,
  SiteFooter,
  SiteHeader,
  NavHref,
} from "@/components/site-chrome";
import { dashboard } from "@/assets/assets";

interface PlataformaPageProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

const stats = [
  ["+300 mil", "Eventos criados"],
  ["+25 milhões", "Inscrições"],
  ["+2.000", "Cidades"],
  ["R$ 350 mi", "Em vendas"],
];

const offers = [
  ["Site do evento", "Página com a cara da marca, programação e inscrição integrada."],
  ["Inscrições e pagamentos", "Lotes, cupons, Pix, cartão e boleto, criar é grátis."],
  ["Credenciamento", "Entrada com QR, app da equipe e controle de acesso."],
  ["App do evento", "Programação, networking, push e engajamento nas lojas."],
  ["Doity Play", "Ambiente virtual para eventos online ou híbridos."],
  ["Certificados", "Emissão e envio automático após o evento."],
  ["Trabalhos científicos", "Submissão, avaliação e anais no mesmo fluxo."],
  ["CAEX", "Portal do expositor e operação de feiras."],
  ["Curadoria", "Grade, palestrantes e call for speakers."],
  ["Integrações", "CRM, analytics e API para o seu stack."],
  ["App de check-in", "Credenciamento na mão da equipe de entrada."],
  ["App multieventos", "Um app institucional para vários eventos."],
];

const tiers = [
  [
    "Eventos menores",
    "Crie grátis, publique rápido e opere com o essencial, site, inscrição e certificado, sem mensalidade para começar.",
  ],
  [
    "Eventos em crescimento",
    "Lotes, cupons, credenciamento e relatórios quando a operação pede mais controle e menos planilha.",
  ],
  [
    "Grandes operações",
    "App, CAEX, Curadoria, Doity Play e time comercial, módulos sob consulta para porte, feira e híbrido.",
  ],
];

const segments = [
  ["Corporativos", "Convenções, lançamentos e treinamentos."],
  ["Acadêmicos", "Congressos, jornadas e submissão de trabalhos."],
  ["Feiras e exposições", "Expositores, credenciais e operação de estande."],
  ["Esportivos", "Corridas, torneios e picos de inscrição."],
  ["Religiosos", "Conferências, cultos e encontros de fé."],
  ["Saúde", "Simpósios, cursos e educação médica continuada."],
];

const quotes = [
  [
    "Utilizo o sistema desde 2012 e estou muito satisfeito com os serviços e principalmente com o suporte. É possível acompanhar inscrições, pagamentos, trabalhos científicos, credenciamento e certificados em um só lugar.",
    "Fábio Neves",
    "Kalone Eventos",
  ],
  [
    "Antes realizei um evento para 500 participantes com uma equipe de 11 pessoas. Hoje somos apenas duas: reduzimos custos, aumentamos a margem e redirecionamos a atenção para marketing e divulgação.",
    "Felipe Johnnata",
    "Prime Cursos & Eventos",
  ],
  [
    "Indico a todos os organizadores. Mesmo quem usa plataforma própria deveria experimentar a Doity — autonomia, integração e praticidade na gestão do evento.",
    "Prof. Mônica Ximenes",
    "AIMA",
  ],
  [
    "Consigo gerenciar o evento e acompanhar as inscrições em tempo real, de modo fácil e simples. O pós-venda e o suporte fazem toda a diferença.",
    "Marcus Bernardes",
    "Organizador Doity",
  ],
];

const faqs = [
  [
    "A Doity substitui vários fornecedores?",
    "Sim, essa é a proposta. Em vez de site, inscrição, credenciamento, certificado e app em ferramentas diferentes, você opera no mesmo ecossistema. Módulos avançados entram sob consulta quando o evento precisar.",
  ],
  [
    "Serve para eventos pequenos e grandes?",
    "Sim. Eventos menores começam com o essencial, grátis para criar. Operações maiores somam credenciamento, app, CAEX, Curadoria ou Doity Play conforme o porte.",
  ],
  [
    "Preciso pagar para criar o evento?",
    "Não. Criar e publicar é grátis. Nas inscrições pagas, cobramos 10% por venda, com meios de pagamento inclusos.",
  ],
  [
    "Quais tipos de evento a Doity atende?",
    "Corporativos, acadêmicos, feiras, esportivos, religiosos, saúde e outros formatos presenciais, online ou híbridos.",
  ],
  [
    "Posso absorver a taxa de 10%?",
    "Sim. Você escolhe absorver ou repassar ao participante, com aviso claro no checkout.",
  ],
  [
    "Como falo com o time comercial?",
    "Pelo formulário de contato, WhatsApp comercial ou após criar a conta no painel.",
  ],
];

export function PlataformaPage({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: PlataformaPageProps) {
  return (
    <main>
      <SiteHeader
        onNavigate={onNavigate}
        onOpenCreateModal={onOpenCreateModal}
        onOpenContactModal={onOpenContactModal}
        onOpenLoginModal={onOpenLoginModal}
      />

      {/* Page Hero */}
      <section className="page-hero">
        <p className="eyebrow">
          <span className="dots">● ●</span> Ecossistema Doity
        </p>
        <h1>Mais do que uma plataforma, um ecossistema de soluções para eventos</h1>
        <p className="lead">
          Site, inscrições, pagamentos, credenciamento, app, certificados e módulos
          sob consulta — tudo no mesmo lugar, dos primeiros inscritos às grandes
          operações.
        </p>
        <div className="hero-actions">
          <BrandButton onClick={onOpenCreateModal}>Criar evento grátis</BrandButton>
          <BrandButton outline onClick={onOpenContactModal}>
            Falar com um especialista
          </BrandButton>
        </div>
      </section>

      {/* Stats Row */}
      <div className="stats-row">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Mosaic Section */}
      <section className="section mosaic-section">
        <div className="section-heading row-heading">
          <div>
            <h2>Sem montar um mosaico de fornecedores</h2>
            <p>
              Site numa ferramenta, inscrição em outra, credenciamento em uma
              terceira, certificado em planilha. Na Doity, a operação completa fica
              no mesmo ecossistema, do primeiro clique à emissão do certificado.
            </p>
          </div>
          <ul className="mosaic-list">
            <li>Menos contratos e integrações frágeis</li>
            <li>Dados do participante em um só lugar</li>
            <li>Suporte que conhece o fluxo inteiro</li>
          </ul>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section">
        <div className="section">
          <div className="section-heading centered">
            <h2>Tudo o que a Doity pode oferecer</h2>
            <p>
              Use o essencial para começar e acrescente módulos quando o evento
              pedir, sem trocar de plataforma no meio do caminho.
            </p>
          </div>
          <div className="offer-grid">
            {offers.map(([title, desc]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <NavHref
                  href={
                    title === "App do evento"
                      ? "/app-para-eventos"
                      : title === "App multieventos"
                      ? "/aplicativo-multieventos"
                      : title === "Credenciamento" || title === "App de check-in"
                      ? "/app-de-checkin"
                      : title === "Doity Play"
                      ? "/doity-play"
                      : title === "CAEX"
                      ? "/caex-central-atendimento-ao-expositor"
                      : title === "Curadoria"
                      ? "/curadoria"
                      : "/#solucoes"
                  }
                  navigate={onNavigate}
                >
                  Ver mais →
                </NavHref>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="section">
        <div className="section-heading centered">
          <h2>Dos pequenos aos grandes eventos</h2>
          <p>
            A mesma base serve quem está no primeiro evento e quem opera
            congressos, feiras e agendas contínuas. Você escala o que usa, não a
            quantidade de fornecedores.
          </p>
        </div>
        <div className="tier-grid">
          {tiers.map(([title, desc], i) => (
            <article key={title}>
              <div className={`abstract abstract-${i + 1}`}></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Segments Section */}
      <section className="seg-section">
        <div className="section">
          <div className="section-heading centered">
            <h2>Para o seu tipo de evento</h2>
            <p>
              Corporativo, acadêmico, feira, esporte, religioso ou saúde, a operação
              muda de ritmo, mas o ecossistema é o mesmo.
            </p>
          </div>
          <div className="seg-grid">
            {segments.map(([title, desc]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Operation Section */}
      <section className="section autonomy visible-section">
        <div>
          <h2>Operação visível, do painel à entrada</h2>
          <p>
            Acompanhe inscritos, financeiro e presença em tempo real. Menos
            surpresa no dia, mais tempo para o que importa no evento.
          </p>
          <div className="hero-actions">
            <BrandButton onClick={onOpenCreateModal}>Criar evento grátis</BrandButton>
            <BrandButton outline onClick={onOpenContactModal}>
              Falar com um especialista
            </BrandButton>
          </div>
        </div>
        <img
          src={dashboard.url}
          alt="Painel de acompanhamento da Doity em tempo real"
        />
      </section>

      {/* Quotes Section */}
      <section className="section quotes-section">
        <div className="section-heading centered">
          <h2>Quem organiza com a Doity</h2>
          <p>Depoimentos de organizadores que usam a plataforma no dia a dia.</p>
        </div>
        <div className="quotes-grid">
          {quotes.map(([text, name, org]) => (
            <figure key={name}>
              <span className="quote-mark">“</span>
              <blockquote>{text}</blockquote>
              <figcaption>
                <strong>{name}</strong>
                <span>{org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Growth & Pricing Banner */}
      <section className="growth">
        <div className="section growth-inner">
          <h2>Criar é grátis. Nas inscrições pagas, só 10%.</h2>
          <p>
            Sem adesão nem mensalidade para começar. A taxa já inclui Pix, cartão e
            boleto. Módulos como app, CAEX, Curadoria e Doity Play são sob consulta.
          </p>
          <p>Você escolhe absorver ou repassar a taxa ao participante.</p>
          <div className="hero-actions centered-actions">
            <BrandButton href="/#precos" navigate={onNavigate}>
              Ver preços
            </BrandButton>
            <BrandButton outline onClick={onOpenContactModal}>
              Falar com um especialista
            </BrandButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="faq-shell">
          <h2>Dúvidas frequentes</h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
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
            <BrandButton onClick={onOpenCreateModal}>Criar evento grátis</BrandButton>
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
