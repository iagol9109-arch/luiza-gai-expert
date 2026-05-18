/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  Instagram, 
  Star, 
  ShieldCheck, 
  Smile, 
  Clock,
  X
} from 'lucide-react';

// WhatsApp Link
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=54999663997&text=Olá! Vi sua página e gostaria de agendar uma consulta gratuita.&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/luizagai.dentista/";

// Image Assets - Updated with direct links for better compatibility
const IMAGES = {
  hero: "https://i.imgur.com/VJTGyIO.png",
  expert1: "https://i.imgur.com/MiJJaj5.png",
  expert2: "https://i.imgur.com/rirT3ME.png",
  expert3: "https://i.imgur.com/U8NB47R.png",
  expert4: "https://i.imgur.com/fjqJO6j.png",
  results: [
    "https://i.imgur.com/r2p50ww.png",
    "https://i.imgur.com/OuqSJ88.png",
    "https://i.imgur.com/6aLEyRG.png",
    "https://i.imgur.com/Q6F5xKs.png",
    "https://i.imgur.com/rX6jQGC.png",
    "https://i.imgur.com/v8nUZGF.png",
    "https://i.imgur.com/mwK8Meh.png",
    "https://i.imgur.com/v8Hibmz.png"
  ]
};

const CTAButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-5 px-8 rounded-full shadow-xl shadow-green-200/50 transition-all ${className}`}
  >
    <MessageCircle size={24} />
    {children}
  </motion.a>
);

const SectionTitle = ({ children, subtitle, className = "" }: { children: React.ReactNode, subtitle?: string, className?: string }) => (
  <div className={`mb-12 text-center px-4 ${className}`}>
    {subtitle && (
      <span className="text-brand-primary uppercase tracking-widest text-xs font-bold mb-2 block font-display">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
      {children}
    </h2>
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white overflow-x-hidden flex flex-col p-4 md:p-8">
      {/* HEADER IMPROVED */}
      <header className="max-w-7xl mx-auto w-full flex justify-between items-center border-b border-[#1A1A1A]/20 pb-6 mb-12">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-700">Caxias do Sul — RS</span>
          <h1 className="text-3xl font-serif italic text-brand-dark">Luiza Gai</h1>
        </div>
        <div className="flex gap-6 items-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-black hover:opacity-70 transition-opacity hidden sm:block">Instagram</a>
          <div className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-bold animate-pulse">ON-LINE AGORA</div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col px-4 md:px-0 max-w-7xl mx-auto w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-5 order-2 xl:order-1"
          >
            <span className="text-brand-primary uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6 block font-display">
              Exclusividade & Excelência
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-[0.9] mb-8">
              Sua dentista em <span className="italic">Caxias do Sul</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg leading-relaxed italic font-serif">
              "Meu propósito é transformar a forma como você sorri para o mundo, aliando tecnologia com um toque humano inconfundível."
            </p>
            
            <div className="space-y-6">
              <CTAButton className="w-full md:w-auto !rounded-none !bg-brand-primary !shadow-2xl hover:!scale-[1.01] active:!scale-95 transition-transform">
                Agendar Consulta Gratuita
              </CTAButton>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
                <p className="text-xs text-gray-700 flex items-center gap-2 uppercase tracking-tight font-bold">
                  <Clock size={14} className="text-brand-primary" />
                  Resposta quase imediata
                </p>
                <p className="text-xs text-gray-700 flex items-center gap-2 uppercase tracking-tight font-bold">
                  <ShieldCheck size={14} className="text-brand-primary" />
                  Ambiente 100% seguro
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-12 xl:col-span-7 order-1 xl:order-2 relative h-[500px] md:h-[650px] overflow-hidden rounded-2xl group"
          >
            <img 
              src={IMAGES.hero} 
              alt="Luiza Gai" 
              className="w-full h-full object-cover object-[center_20%] shadow-2xl transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-8 right-8 text-white text-right">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-80 mb-1">Dra. Luiza Gai</p>
              <p className="text-2xl font-serif italic">Referência em estética orofacial</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU & CARDS */}
      <section className="py-24 border-y border-[#1A1A1A]/10 max-w-7xl mx-auto w-full px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="Diferencial" className="text-left !px-0 !mb-8">
                Cuidado que vai <br /> além do <span className="italic">óbvio</span>.
              </SectionTitle>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-serif italic">
                <p>
                  "Não acredito em tratamentos genéricos. Cada paciente carrega uma história única e merece um plano que respeite sua singularidade."
                </p>
                <p className="text-base text-gray-700 not-italic font-sans">
                  No coração de Caxias do Sul, criei um espaço onde a tecnologia de ponta e o conforto absoluto se encontram para oferecer uma experiência odontológica premium.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Avaliação Humanizada",
                "Planejamento Digital",
                "Materiais Importados",
                "Pós-Atendimento Vip"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 border border-[#1A1A1A]/5 rounded-xl bg-white shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1A1A1A] p-10 rounded-2xl text-white flex flex-col justify-between shadow-2xl relative overflow-hidden h-full min-h-[400px]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Smile size={100} />
              </div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-primary mb-8">Como funciona</h3>
              <div className="space-y-8">
                {[
                  { n: "01", t: "WhatsApp", d: "Sua jornada começa com uma mensagem simples." },
                  { n: "02", t: "Avaliação", d: "Uma conversa sincera sobre suas metas." },
                  { n: "03", t: "Resultados", d: "Sorriso renovado e autoconfiança plena." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-3xl font-serif text-brand-primary italic opacity-50">{s.n}</span>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest">{s.t}</p>
                      <p className="text-xs opacity-60 mt-1">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-12 border-t border-white/10">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Agendar Agora</span>
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl group border border-[#1A1A1A]/5">
                <img src={IMAGES.expert1} alt="Expert" className="w-full h-auto max-h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-white p-8 border border-[#1A1A1A]/10 rounded-2xl shadow-sm">
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-primary mb-4">Localização</h4>
                <p className="font-serif text-xl leading-tight mb-2 text-brand-dark">Edifício Comercial Sinimbu</p>
                <p className="text-xs text-gray-700 uppercase tracking-tighter font-bold">Sala 708 — Centro, Caxias do Sul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 max-w-7xl mx-auto w-full px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex items-center gap-6">
            <div className="flex w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-primary/20 p-1 shrink-0">
              <img src={IMAGES.expert4} alt="Selo Qualidade" className="w-full h-full object-cover object-[center_15%] rounded-full" referrerPolicy="no-referrer" />
            </div>
            <SectionTitle subtitle="Portfólio" className="text-left !px-0 !mb-0">
              A arte de criar <br /><span className="italic">lindos sorrisos</span>.
            </SectionTitle>
          </div>
          <div className="text-right">
            <p className="text-brand-dark text-lg font-serif italic mb-2">Transformações Reais</p>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest max-w-[200px] text-right font-bold">
              Fotos reais de pacientes atendidos pela Dra. Luiza Gai.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {IMAGES.results.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedImage(src)}
              className={`relative cursor-pointer overflow-hidden rounded-xl border border-[#1A1A1A]/5 shadow-sm group ${
                idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${idx === 7 ? 'md:col-span-2' : ''}`}
            >
              <img 
                src={src} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 border border-white rounded-full backdrop-blur-sm">Ver Detalhes</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. MAIS PROVAS - BASTIDORES (RESTORING SECTION) */}
      <section className="py-24 max-w-7xl mx-auto w-full px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <div>
            <SectionTitle subtitle="Bastidores" className="text-left !px-0 !mb-6">
              Experiência <span className="italic">Exclusiva</span>.
            </SectionTitle>
            <p className="text-gray-600 text-lg mb-8 font-serif italic">
              "Cada detalhe foi pensado para que sua visita seja um momento de tranquilidade, e não apenas uma consulta."
            </p>
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs"
            >
              Siga no Instagram <ChevronRight size={20} />
            </a>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
             <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl relative"
             >
               <img src={IMAGES.expert2} alt="Atendimento" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-brand-dark/5"></div>
             </motion.div>
             <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl mt-12 relative"
             >
               <img src={IMAGES.expert3} alt="Dra Luiza" className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-brand-dark/5"></div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA AS A MAGAZINE AD */}
      <section className="py-24 max-w-7xl mx-auto w-full px-4 md:px-0">
        <div className="bg-white border border-[#1A1A1A]/10 p-12 md:p-24 rounded-3xl flex flex-col items-center text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 opacity-[0.03] text-[20vw] font-serif italic -z-10 select-none">Luiza Gai</div>
          <span className="text-brand-primary uppercase tracking-[0.5em] text-xs font-bold mb-12 block">Sua Primeira Consulta</span>
          <h2 className="text-5xl md:text-8xl font-serif text-brand-dark leading-tight mb-16 italic">
            Permita-se <br />sorrir <span className="not-italic">novamente.</span>
          </h2>
          <div className="space-y-6">
            <CTAButton className="w-full md:w-auto !rounded-none !bg-brand-primary !px-16 !py-8 text-2xl shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:shadow-[0_0_80px_rgba(212,175,55,0.8)] transition-all duration-500 scale-105 hover:scale-110 !font-display">
              Falar com a Dra. Luiza Gai
            </CTAButton>
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-800 bg-white/50 inline-block px-4 py-2 border-x border-brand-primary/20">Primeira conversa sem custos • Vagas limitadas esta semana</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto w-full py-16 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between items-start gap-12 text-gray-700">
        <div className="space-y-4">
          <h3 className="text-xl font-serif italic text-brand-dark">Luiza Gai</h3>
          <p className="text-[10px] uppercase tracking-widest font-bold">Sorria, você encontrou a sua dentista!</p>
          <div className="flex gap-4">
             <a href={INSTAGRAM_URL} className="hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
             <a href={WHATSAPP_URL} className="hover:text-brand-primary transition-colors"><MessageCircle size={20} /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-2">
            <p className="text-[10px] uppercase font-bold text-brand-primary tracking-widest">Endereço</p>
            <p className="text-xs leading-relaxed font-bold">R. Sinimbu, 1878 - Sala 708<br />Centro, Caxias do Sul - RS</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] uppercase font-bold text-brand-primary tracking-widest">Contato</p>
            <p className="text-xs leading-relaxed font-bold">(54) 99966-3997<br />CRO/RS 28020</p>
          </div>
        </div>
        
        <p className="text-[10px] text-gray-500 font-mono self-end">© {new Date().getFullYear()} LUIZA GAI. EDITORIAL DESIGN.</p>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#FAF9F6]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-12 right-0 text-brand-dark p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                className="w-full rounded-lg shadow-2xl border border-[#1A1A1A]/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
