
import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, ChevronRight, Instagram, Facebook, MessageCircle, Shield, Cpu } from 'lucide-react';
import Background from './components/Background';

const TARGET_DATE = "2026-03-01T10:00:00";

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Background />
      
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative z-10">
        
        {/* Header Section */}
        <section className="text-center mb-28 flex flex-col items-center">
          
          <div className="flex flex-col items-center mb-12 animate-in fade-in zoom-in duration-1000">
            {/* Logo Isotipo Principal */}
            <div className="animate-float mb-8">
              <img 
                src="https://protectibox.com/wp-content/uploads/2026/02/Logo_principal-removebg-preview-mejorado.png" 
                alt="ProtectiBox Logo Principal" 
                className="w-56 md:w-80 h-auto object-contain drop-shadow-[0_15px_50px_rgba(28,136,234,0.6)]"
              />
            </div>
            
            {/* Brand Text - Montserrat Bold 700 */}
            <h1 className="font-montserrat font-bold text-6xl md:text-9xl tracking-tighter leading-none mb-12">
              <span className="text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">Protecti</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_2px_25px_rgba(34,211,238,0.5)]">Box</span>
            </h1>

            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[12px] font-black uppercase tracking-[0.5em] text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Lanzamiento Marzo 2026
            </div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white mb-8 max-w-5xl">
            Tus problemas entran,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">nuestras soluciones</span> salen
          </h2>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            La plataforma definitiva que blinda la seguridad de tu familia y revoluciona la eficiencia operativa de tu negocio con inteligencia operativa avanzada.
          </p>

          <a href="#cta" className="group relative px-14 py-6 rounded-full bg-blue-600 text-white font-black text-sm tracking-[0.2em] uppercase transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.6)]">
            <span className="relative z-10">Obtener Acceso Anticipado</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
          </a>
        </section>

        {/* Features Preview */}
        <div className="grid md:grid-cols-2 gap-10 mb-44">
          <div className="group relative rounded-[3.5rem] bg-white/5 border border-white/10 p-14 transition-all hover:bg-white/[0.08] hover:border-white/20 overflow-hidden shadow-2xl">
             <div className="flex justify-between items-start mb-10">
                <Shield className="w-12 h-12 text-blue-400" />
                <span className="text-[10px] font-bold text-blue-400/60 tracking-[0.6em] uppercase">Hogar Seguro</span>
             </div>
             <h3 className="text-4xl font-bold text-white mb-5">ProtectiHome</h3>
             <p className="text-slate-400 leading-relaxed text-xl font-light">Seguridad digital de grado militar para tu familia. Control parental inteligente y escudo contra amenazas en tiempo real.</p>
             <div className="absolute -bottom-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Shield size={300} />
             </div>
          </div>

          <div className="group relative rounded-[3.5rem] bg-white/5 border border-white/10 p-14 transition-all hover:bg-white/[0.08] hover:border-white/20 overflow-hidden shadow-2xl">
             <div className="flex justify-between items-start mb-10">
                <Cpu className="w-12 h-12 text-cyan-400" />
                <span className="text-[10px] font-bold text-cyan-400/60 tracking-[0.6em] uppercase">Empresa Ágil</span>
             </div>
             <h3 className="text-4xl font-bold text-white mb-5">AutomatIBox</h3>
             <p className="text-slate-400 leading-relaxed text-xl font-light">Transformación digital impulsada por IA. Automatiza flujos complejos y escala tu rentabilidad sin fricciones.</p>
             <div className="absolute -bottom-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Cpu size={300} />
             </div>
          </div>
        </div>

        {/* Countdown & Register */}
        <section id="cta" className="max-w-5xl mx-auto mb-40 text-center">
          <h2 className="text-5xl font-bold text-white mb-10">Cronómetro hacia el futuro</h2>
          
          <div className="flex justify-center gap-6 md:gap-14 py-12 mb-16">
            {[
              { val: timeLeft.days, label: "Días", color: "text-white" },
              { val: timeLeft.hours, label: "Horas", color: "text-blue-500" },
              { val: timeLeft.minutes, label: "Minutos", color: "text-white" },
              { val: timeLeft.seconds, label: "Segundos", color: "text-cyan-400" }
            ].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className={`text-6xl md:text-8xl font-black tracking-tighter ${unit.color} drop-shadow-lg`}>
                  {String(unit.val).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-[0.5em] text-slate-500 font-black mt-3">{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto relative group">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 p-4 rounded-[2.5rem] bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-3xl">
                <input 
                  type="email" 
                  placeholder="Tu mejor correo electrónico..."
                  className="flex-1 bg-transparent border-none px-8 py-5 text-white placeholder-slate-600 focus:ring-0 text-xl"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-black px-12 py-5 rounded-3xl transition-all flex items-center justify-center gap-3 tracking-widest uppercase">
                  RESERVAR <ChevronRight size={24} />
                </button>
              </form>
            ) : (
              <div className="bg-blue-600/10 border border-blue-500/30 rounded-[3rem] p-12 text-center animate-in zoom-in-95 duration-500">
                <CheckCircle2 size={64} className="mx-auto text-blue-400 mb-6" />
                <h4 className="text-3xl font-bold text-white mb-3">¡Bienvenido a bordo!</h4>
                <p className="text-slate-400 text-lg">Tu invitación exclusiva llegará a tu bandeja pronto.</p>
              </div>
            )}
          </div>
        </section>

        {/* Social Footer */}
        <footer className="pt-16 border-t border-white/5 text-center">
          <div className="flex justify-center gap-12 mb-10">
            <a href="#" className="text-slate-500 hover:text-green-500 transition-all hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" aria-label="WhatsApp">
              <MessageCircle size={36} />
            </a>
            <a href="#" className="text-slate-500 hover:text-pink-500 transition-all hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]" aria-label="Instagram">
              <Instagram size={36} />
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-500 transition-all hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" aria-label="Facebook">
              <Facebook size={36} />
            </a>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="font-montserrat font-bold text-2xl tracking-tight text-slate-400">
              Protecti<span className="text-blue-400">Box</span>
            </p>
            <p className="text-[11px] uppercase tracking-[0.6em] text-slate-700 font-black">
              &copy; 2026 ProtectiBox · Seguridad & Inteligencia Operativa
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
