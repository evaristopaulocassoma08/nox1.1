import React, { useState } from "react";
import { X, CheckCircle, Calendar, Sparkles, Send } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateEventModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("presencial");
  const [category, setCategory] = useState("Corporativo");
  const [city, setCity] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Criar seu evento na Doity</h3>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-xl font-bold text-neutral-800 mb-2">
              Evento cadastrado com sucesso!
            </h4>
            <p className="text-sm text-neutral-600 mb-6 max-w-sm mx-auto">
              Seu evento &ldquo;{name}&rdquo; foi configurado. Você já pode personalizar o site,
              adicionar lotes de inscrições e publicar!
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Acessar Painel do Evento
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-body">
            <p className="text-sm text-neutral-500 m-0">
              Comece em menos de 2 minutos. Criar e publicar seu evento é 100% gratuito.
            </p>

            <div className="modal-field">
              <label>Nome do Evento</label>
              <input
                type="text"
                required
                className="modal-input"
                placeholder="Ex: Congresso Nacional de Inovação 2026"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="modal-field">
                <label>Formato</label>
                <select
                  className="modal-input bg-white"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="presencial">Presencial</option>
                  <option value="online">Online</option>
                  <option value="hibrido">Híbrido</option>
                </select>
              </div>

              <div className="modal-field">
                <label>Categoria</label>
                <select
                  className="modal-input bg-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Corporativo">Corporativo</option>
                  <option value="Acadêmico">Acadêmico / Científico</option>
                  <option value="Feira">Feira / Exposição</option>
                  <option value="Saúde">Saúde & Medicina</option>
                  <option value="Tecnologia">Tecnologia & Inovação</option>
                  <option value="Esportivo">Esportivo</option>
                  <option value="Religioso">Religioso</option>
                </select>
              </div>
            </div>

            <div className="modal-field">
              <label>Cidade / Local</label>
              <input
                type="text"
                required
                className="modal-input"
                placeholder="Ex: São Paulo, SP ou Plataforma Doity Play"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                className="btn btn-outline"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Criar evento grátis
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function ContactExpertModal({ isOpen, onClose }: ModalProps) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState("500-2000");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Falar com um Especialista</h3>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        {sent ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-xl font-bold text-neutral-800 mb-2">
              Mensagem enviada com sucesso!
            </h4>
            <p className="text-sm text-neutral-600 mb-6 max-w-sm mx-auto">
              Obrigado, {name}! Nosso consultor entrará em contato via {email} ou WhatsApp em instantes para entender o perfil do seu evento.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSent(false);
                onClose();
              }}
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-body">
            <p className="text-sm text-neutral-500 m-0">
              Precisa de consultoria para congressos, CAEX, aplicativo exclusivo ou credenciamento presencial em larga escala?
            </p>

            <div className="modal-field">
              <label>Seu Nome Completo</label>
              <input
                type="text"
                required
                className="modal-input"
                placeholder="Ex: Carlos Oliveira"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="modal-field">
                <label>E-mail profissional</label>
                <input
                  type="email"
                  required
                  className="modal-input"
                  placeholder="carlos@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="modal-field">
                <label>WhatsApp / Telefone</label>
                <input
                  type="tel"
                  required
                  className="modal-input"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-field">
              <label>Estimativa de participantes</label>
              <select
                className="modal-input bg-white"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="100-500">Até 500 participantes</option>
                <option value="500-2000">500 a 2.000 participantes</option>
                <option value="2000-5000">2.000 a 5.000 participantes</option>
                <option value="5000+">Mais de 5.000 participantes (Grande Porte / Feira)</option>
              </select>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                className="btn btn-outline"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Solicitar contato
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function LoginModal({ isOpen, onClose }: ModalProps) {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLogged(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Entrar na Doity</h3>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        {logged ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-xl font-bold text-neutral-800 mb-2">
              Login efetuado com sucesso!
            </h4>
            <p className="text-sm text-neutral-600 mb-6">
              Bem-vindo de volta! Redirecionando para o seu painel de organizador...
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setLogged(false);
                onClose();
              }}
            >
              Ir para o Painel
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-body">
            <p className="text-sm text-neutral-500 m-0">
              Acesse como organizador de eventos ou como participante para ver ingressos e certificados.
            </p>

            <div className="modal-field">
              <label>E-mail</label>
              <input
                type="email"
                required
                className="modal-input"
                placeholder="seu.email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="modal-field">
              <div className="flex justify-between items-center">
                <label>Senha</label>
                <a href="#recuperar" className="text-xs text-red-600 hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <input
                type="password"
                required
                className="modal-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button type="submit" className="btn btn-primary w-full">
                Entrar na conta
              </button>
              <div className="text-center text-xs text-neutral-500 mt-2">
                Ainda não tem conta?{" "}
                <button
                  type="button"
                  className="text-red-600 font-bold bg-transparent border-0 p-0 cursor-pointer hover:underline"
                  onClick={onClose}
                >
                  Crie grátis agora
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
