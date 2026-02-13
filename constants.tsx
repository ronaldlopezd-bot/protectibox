
import React from 'react';
import { Shield, Cpu } from 'lucide-react';
import { Feature } from './types';

export const TARGET_DATE = "2026-03-01T10:00:00";

export const FEATURES: Feature[] = [
  {
    id: 'home',
    tag: 'PARA TU HOGAR',
    title: 'ProtectiHome',
    subtitle: 'Seguridad Familiar Digital',
    description: 'Blindaje total para los que más quieres. Control parental inteligente, bloqueo de malware en red y monitoreo preventivo para una navegación sin riesgos.',
    color: 'from-blue-600/20 to-cyan-500/10',
    icon: 'home'
  },
  {
    id: 'business',
    tag: 'PARA TU EMPRESA',
    title: 'AutomatIBox',
    subtitle: 'Inteligencia Operativa',
    description: 'Optimiza procesos, elimina cuellos de botella y automatiza tareas críticas. Inteligencia artificial aplicada a la eficiencia de tu negocio 24/7.',
    color: 'from-slate-600/20 to-blue-900/10',
    icon: 'briefcase'
  }
];

export const ICONS = {
  Shield: <Shield className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />
};
