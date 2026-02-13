
import React from 'react';
import { FEATURES } from '../constants';
import { Shield, Cpu, ArrowRight } from 'lucide-react';

const FeatureCards: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 px-4">
      {FEATURES.map((feature) => (
        <div 
          key={feature.id}
          className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
        >
          {/* Animated Background Highlight */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <span className={`text-[11px] font-black uppercase tracking-[0.4em] ${feature.id === 'home' ? 'text-blue-400' : 'text-slate-400'}`}>
                {feature.tag}
              </span>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                {feature.icon === 'home' ? <Shield className="w-6 h-6 text-blue-400" /> : <Cpu className="w-6 h-6 text-cyan-400" />}
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">{feature.title}</h3>
            <h4 className="text-lg font-medium text-slate-300 mb-6">{feature.subtitle}</h4>
            
            <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
              {feature.description}
            </p>

            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors">
              Más Información <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Icon Overlay */}
          <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
             {feature.icon === 'home' ? <Shield size={220} /> : <Cpu size={220} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
