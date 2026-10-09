import React, { useState, useEffect, useRef, type ReactNode } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { logo } from "@/assets/assets";
import { participantesMenu, paraQuemMenu, solucoesMenu, type MenuGroup } from "@/lib/menus";

interface NavHrefProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  navigate?: (path: string) => void;
}

export function NavHref({ href, className, children, onClick, navigate }: NavHrefProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        return;
      }
      const currentPath = window.location.pathname;
      if (currentPath !== "/" && currentPath !== "") {
        if (navigate) {
          navigate("/" + href);
        } else {
          window.location.href = "/" + href;
        }
        return;
      }
      return;
    }

    if (href.startsWith("/")) {
      e.preventDefault();
      const [path, hash] = href.split("#");
      if (navigate) {
        navigate(path || "/");
        if (hash) {
          setTimeout(() => {
            const elem = document.getElementById(hash);
            if (elem) elem.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        window.history.pushState({}, "", href);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export function BrandButton({
  children,
  outline = false,
  href = "#comece",
  onClick,
  navigate,
}: {
  children: ReactNode;
  outline?: boolean;
  href?: string;
  onClick?: () => void;
  navigate?: (path: string) => void;
}) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={outline ? "btn btn-outline" : "btn btn-primary"}
      >
        {children}
      </button>
    );
  }

  return (
    <NavHref
      href={href}
      navigate={navigate}
      className={outline ? "btn btn-outline" : "btn btn-primary"}
    >
      {children}
    </NavHref>
  );
}

function NavDropdown({
  label,
  href,
  groups,
  flat = false,
  onNavigate,
}: {
  label: string;
  href: string;
  groups: MenuGroup[];
  flat?: boolean;
  onNavigate?: (path: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      className="nav-item"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavHref href={href} onClick={() => setOpen((prev) => !prev)} navigate={onNavigate}>
        {label} <ChevronDown size={13} className={open ? "chevron open" : "chevron"} />
      </NavHref>
      <div className={`mega-menu ${flat ? "mega-flat" : ""} ${open ? "open" : ""}`} aria-hidden={!open}>
        {(() => {
          const [g] = groups;
          if (flat && g) {
            return (
              <>
                <p className="mega-group">{g.group}</p>
                {g.items.map(([title, desc, itemHref]) => (
                  <NavHref
                    key={title}
                    href={itemHref}
                    className="mega-item"
                    onClick={() => setOpen(false)}
                    navigate={onNavigate}
                  >
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </NavHref>
                ))}
              </>
            );
          }
          return groups.map((group) => (
            <div key={group.group}>
              <p className="mega-group">{group.group}</p>
              {group.items.map(([title, desc, itemHref]) => (
                <NavHref
                  key={title}
                  href={itemHref}
                  className="mega-item"
                  onClick={() => setOpen(false)}
                  navigate={onNavigate}
                >
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </NavHref>
              ))}
            </div>
          ));
        })()}
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  menu,
  open,
  toggle,
  close,
  onNavigate,
}: {
  label: string;
  menu: MenuGroup[];
  open: boolean;
  toggle: () => void;
  close: () => void;
  onNavigate?: (path: string) => void;
}) {
  return (
    <div>
      <button className="mobile-trigger" aria-expanded={open} onClick={toggle}>
        {label} <ChevronDown size={14} className={open ? "chevron open" : "chevron"} />
      </button>
      {open && (
        <div className="mobile-sol">
          {menu.map((g) => (
            <div key={g.group}>
              <p>{g.group}</p>
              {g.items.map(([title, desc, href]) => (
                <NavHref key={title} href={href} onClick={close} navigate={onNavigate}>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </NavHref>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface SiteHeaderProps {
  onNavigate?: (path: string) => void;
  onOpenCreateModal?: () => void;
  onOpenContactModal?: () => void;
  onOpenLoginModal?: () => void;
}

export function SiteHeader({
  onNavigate,
  onOpenCreateModal,
  onOpenContactModal,
  onOpenLoginModal,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobilePart, setMobilePart] = useState(false);
  const [mobileSol, setMobileSol] = useState(false);
  const [mobileAud, setMobileAud] = useState(false);

  const close = () => {
    setMenuOpen(false);
    setMobilePart(false);
    setMobileSol(false);
    setMobileAud(false);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <NavHref href="/" navigate={onNavigate}>
          <img className="brand" src={logo.url} alt="Doity" />
        </NavHref>
        <div className="desktop-nav">
          <NavDropdown
            label="Participantes"
            href="/eventos"
            groups={participantesMenu}
            flat
            onNavigate={onNavigate}
          />
          <NavDropdown
            label="Soluções"
            href="/#solucoes"
            groups={solucoesMenu}
            onNavigate={onNavigate}
          />
          <NavDropdown
            label="Para quem é"
            href="/#publicos"
            groups={paraQuemMenu}
            flat
            onNavigate={onNavigate}
          />
          <NavHref href="/quanto-custa" navigate={onNavigate}>
            Preços
          </NavHref>
          <NavHref href="/#conteudos" navigate={onNavigate}>
            Conteúdos
          </NavHref>
        </div>
        <div className="nav-actions">
          <button
            type="button"
            className="login bg-transparent border-0 cursor-pointer"
            onClick={onOpenLoginModal}
          >
            Entrar
          </button>
          <BrandButton
            outline
            onClick={onOpenContactModal || (() => {})}
          >
            Falar com especialista
          </BrandButton>
          <BrandButton
            onClick={onOpenCreateModal || (() => {})}
          >
            Criar evento grátis
          </BrandButton>
        </div>
        <button
          className="menu-button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-nav">
          <MobileGroup
            label="Participantes"
            menu={participantesMenu}
            open={mobilePart}
            toggle={() => setMobilePart(!mobilePart)}
            close={close}
            onNavigate={onNavigate}
          />
          <MobileGroup
            label="Soluções"
            menu={solucoesMenu}
            open={mobileSol}
            toggle={() => setMobileSol(!mobileSol)}
            close={close}
            onNavigate={onNavigate}
          />
          <MobileGroup
            label="Para quem é"
            menu={paraQuemMenu}
            open={mobileAud}
            toggle={() => setMobileAud(!mobileAud)}
            close={close}
            onNavigate={onNavigate}
          />
          <NavHref href="/quanto-custa" onClick={close} navigate={onNavigate}>
            Preços
          </NavHref>
          <NavHref href="/#conteudos" onClick={close} navigate={onNavigate}>
            Conteúdos
          </NavHref>
          <div className="flex flex-col gap-2 pt-2">
            <button
              type="button"
              className="text-left py-2 font-medium text-sm text-neutral-600"
              onClick={() => {
                close();
                if (onOpenLoginModal) onOpenLoginModal();
              }}
            >
              Entrar na conta
            </button>
            <BrandButton
              onClick={() => {
                close();
                if (onOpenCreateModal) onOpenCreateModal();
              }}
            >
              Criar evento grátis
            </BrandButton>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <footer id="conteudos">
      <div className="footer-shell">
        <div>
          <img src={logo.url} alt="Doity" />
          <p>Tecnologia para eventos de todos os tamanhos.</p>
        </div>
        <div>
          <strong>Plataforma</strong>
          <NavHref href="/plataforma-de-eventos" navigate={onNavigate}>Plataforma de eventos</NavHref>
          <NavHref href="/quanto-custa" navigate={onNavigate}>Preços</NavHref>
          <NavHref href="/app-para-eventos" navigate={onNavigate}>App do evento</NavHref>
          <NavHref href="/aplicativo-multieventos" navigate={onNavigate}>App multieventos</NavHref>
          <NavHref href="/app-de-checkin" navigate={onNavigate}>App de check-in</NavHref>
          <NavHref href="/doity-play" navigate={onNavigate}>Doity Play</NavHref>
          <NavHref href="/caex-central-atendimento-ao-expositor" navigate={onNavigate}>CAEX</NavHref>
          <NavHref href="/curadoria" navigate={onNavigate}>Curadoria</NavHref>
        </div>
        <div>
          <strong>Segmentos</strong>
          <NavHref href="/organizar/eventos/corporativos" navigate={onNavigate}>Corporativos</NavHref>
          <NavHref href="/organizar/eventos/academicos" navigate={onNavigate}>Acadêmicos</NavHref>
          <NavHref href="/#publicos" navigate={onNavigate}>Feiras e exposições</NavHref>
          <NavHref href="/#publicos" navigate={onNavigate}>Esportivos</NavHref>
          <NavHref href="/#publicos" navigate={onNavigate}>Religiosos</NavHref>
        </div>
        <div>
          <strong>Conteúdos</strong>
          <NavHref href="/#blog" navigate={onNavigate}>Blog</NavHref>
          <NavHref href="/#materiais" navigate={onNavigate}>Materiais gratuitos</NavHref>
          <NavHref href="/#ajuda" navigate={onNavigate}>Central de ajuda</NavHref>
        </div>
        <div>
          <strong>Doity</strong>
          <NavHref href="/eventos" navigate={onNavigate}>Encontrar eventos</NavHref>
          <NavHref href="/area-do-participante" navigate={onNavigate}>Área do participante</NavHref>
          <NavHref href="/area-do-participante/certificado" navigate={onNavigate}>Certificados</NavHref>
          <NavHref href="/#sobre" navigate={onNavigate}>Sobre nós</NavHref>
          <NavHref href="/#contato" navigate={onNavigate}>Contato</NavHref>
        </div>
      </div>
      <div className="copyright">© 2026 Doity. Todos os direitos reservados.</div>
    </footer>
  );
}

export function CookieBox() {
  const [cookies, setCookies] = useState(true);
  if (!cookies) return null;
  return (
    <aside className="cookie-box">
      <p>
        Usamos cookies opcionais para medir o desempenho e melhorar sua experiência.
        Você pode aceitar ou recusar conforme nossa <b>política de cookies.</b>
      </p>
      <button type="button" onClick={() => setCookies(false)}>
        Recusar
      </button>
      <button type="button" className="accept" onClick={() => setCookies(false)}>
        Aceitar
      </button>
    </aside>
  );
}
