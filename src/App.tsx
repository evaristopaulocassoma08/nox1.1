import React, { useState, useEffect } from "react";
import { HomePage } from "@/pages/HomePage";
import { PlataformaPage } from "@/pages/PlataformaPage";
import { AppParaEventosPage } from "@/pages/AppParaEventosPage";
import { AplicativoMultieventosPage } from "@/pages/AplicativoMultieventosPage";
import { AppDeCheckinPage } from "@/pages/AppDeCheckinPage";
import { DoityPlayPage } from "@/pages/DoityPlayPage";
import { CaexPage } from "@/pages/CaexPage";
import { CuradoriaPage } from "@/pages/CuradoriaPage";
import { PrecosPage } from "@/pages/PrecosPage";
import { EventosCorporativosPage } from "@/pages/EventosCorporativosPage";
import { EventosAcademicosPage } from "@/pages/EventosAcademicosPage";
import { EncontrarEventosPage } from "@/pages/EncontrarEventosPage";
import { AreaDoParticipantePage } from "@/pages/AreaDoParticipantePage";
import {
  CreateEventModal,
  ContactExpertModal,
  LoginModal,
} from "@/components/Modals";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname || "/";
    }
    return "/";
  });

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPath.startsWith("/aplicativo-multieventos")) {
      document.title = "App multieventos para instituições e eventos recorrentes | Doity";
    } else if (currentPath.startsWith("/app-de-checkin")) {
      document.title = "App de check-in | Doity";
    } else if (currentPath.startsWith("/doity-play")) {
      document.title = "Doity Play | Ambiente virtual do seu evento | Doity";
    } else if (currentPath.startsWith("/caex-central-atendimento-ao-expositor")) {
      document.title = "CAEX — Central de Atendimento ao Expositor | Doity";
    } else if (currentPath.startsWith("/curadoria")) {
      document.title = "Curadoria inteligente para programação de eventos | Doity";
    } else if (currentPath.startsWith("/app-para-eventos")) {
      document.title = "O seu evento na palma da mão do participante | Doity";
    } else if (currentPath.startsWith("/plataforma-de-eventos")) {
      document.title = "Plataforma de eventos | Doity";
    } else if (currentPath.startsWith("/quanto-custa") || currentPath.startsWith("/precos")) {
      document.title = "Quanto custa | Doity";
    } else if (
      currentPath.startsWith("/organizar/eventos/corporativos") ||
      currentPath.startsWith("/eventos-corporativos") ||
      currentPath.startsWith("/corporativos") ||
      currentPath.startsWith("/eventos/corporativos") ||
      currentPath.startsWith("/organizar/corporativos")
    ) {
      document.title = "Eventos corporativos | Doity";
    } else if (
      currentPath.startsWith("/organizar/eventos/academicos") ||
      currentPath.startsWith("/eventos-academicos") ||
      currentPath.startsWith("/academicos") ||
      currentPath.startsWith("/eventos/academicos") ||
      currentPath.startsWith("/organizar/academicos")
    ) {
      document.title = "Eventos acadêmicos e científicos | Doity";
    } else if (currentPath.startsWith("/eventos")) {
      document.title = "Encontrar eventos | Doity";
    } else if (
      currentPath.startsWith("/area-do-participante/certificado") ||
      currentPath.startsWith("/validar-certificado")
    ) {
      document.title = "Certificados e comprovantes | Doity";
    } else if (currentPath.startsWith("/area-do-participante")) {
      document.title = "Área do participante | Doity";
    } else {
      document.title = "Doity | Plataforma completa para eventos";
    }
  }, [currentPath]);

  const navigate = (path: string) => {
    let cleanPath = path;
    let hash = "";

    if (path.includes("#")) {
      const parts = path.split("#");
      cleanPath = parts[0] || "/";
      hash = parts[1] || "";
    }

    if (!cleanPath) cleanPath = "/";

    window.history.pushState({}, "", path);
    setCurrentPath(cleanPath);

    if (hash) {
      setTimeout(() => {
        const elem = document.getElementById(hash);
        if (elem) elem.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderCurrentPage = () => {
    const pageProps = {
      onNavigate: navigate,
      onOpenCreateModal: () => setCreateModalOpen(true),
      onOpenContactModal: () => setContactModalOpen(true),
      onOpenLoginModal: () => setLoginModalOpen(true),
    };

    if (currentPath.startsWith("/aplicativo-multieventos")) {
      return <AplicativoMultieventosPage {...pageProps} />;
    }
    if (currentPath.startsWith("/app-de-checkin")) {
      return <AppDeCheckinPage {...pageProps} />;
    }
    if (currentPath.startsWith("/doity-play")) {
      return <DoityPlayPage {...pageProps} />;
    }
    if (currentPath.startsWith("/caex-central-atendimento-ao-expositor")) {
      return <CaexPage {...pageProps} />;
    }
    if (currentPath.startsWith("/curadoria")) {
      return <CuradoriaPage {...pageProps} />;
    }
    if (currentPath.startsWith("/app-para-eventos")) {
      return <AppParaEventosPage {...pageProps} />;
    }
    if (currentPath.startsWith("/plataforma-de-eventos")) {
      return <PlataformaPage {...pageProps} />;
    }
    if (currentPath.startsWith("/quanto-custa") || currentPath.startsWith("/precos")) {
      return <PrecosPage {...pageProps} />;
    }
    if (
      currentPath.startsWith("/organizar/eventos/corporativos") ||
      currentPath.startsWith("/eventos-corporativos") ||
      currentPath.startsWith("/corporativos") ||
      currentPath.startsWith("/eventos/corporativos") ||
      currentPath.startsWith("/organizar/corporativos")
    ) {
      return <EventosCorporativosPage {...pageProps} />;
    }
    if (
      currentPath.startsWith("/organizar/eventos/academicos") ||
      currentPath.startsWith("/eventos-academicos") ||
      currentPath.startsWith("/academicos") ||
      currentPath.startsWith("/eventos/academicos") ||
      currentPath.startsWith("/organizar/academicos")
    ) {
      return <EventosAcademicosPage {...pageProps} />;
    }
    if (currentPath.startsWith("/eventos")) {
      return <EncontrarEventosPage {...pageProps} />;
    }
    if (
      currentPath.startsWith("/area-do-participante/certificado") ||
      currentPath.startsWith("/validar-certificado")
    ) {
      const isValidate =
        currentPath.includes("tab=validar") ||
        currentPath.startsWith("/validar-certificado");
      return (
        <AreaDoParticipantePage
          {...pageProps}
          defaultTab={isValidate ? "validar" : "certificados"}
        />
      );
    }
    if (currentPath.startsWith("/area-do-participante")) {
      return <AreaDoParticipantePage {...pageProps} defaultTab="inscricoes" />;
    }
    return <HomePage {...pageProps} />;
  };

  return (
    <>
      {renderCurrentPage()}

      {/* Interactive Modal Dialogs */}
      <CreateEventModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
      <ContactExpertModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  );
}
