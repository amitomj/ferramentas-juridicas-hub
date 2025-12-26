
import React from 'react';
import { LegalApp } from './types';

export const APPS: LegalApp[] = [
  {
    id: 'medidas-coacao',
    title: 'Gestor de Medidas de Coação',
    description: 'Gestão eficiente e monitorização de medidas de coação.',
    url: 'https://gestor-de-medidas-de-coa-o.vercel.app/',
    icon: '⚖️',
    color: 'bg-[#6366f1]' // Indigo
  },
  {
    id: 'calculadora-acidentes',
    title: 'Calculadora de Acidentes',
    description: 'Cálculo de indemnizações e danos decorrentes de acidentes de trabalho.',
    url: 'https://calculadora-acidentes.vercel.app/',
    icon: '🚗',
    color: 'bg-[#f43f5e]' // Rose/Red
  },
  {
    id: 'calculadora-trabalho',
    title: 'Calculadora de Trabalho',
    description: 'Cálculo de créditos laborais.',
    url: 'https://calculadora-trabalho.vercel.app/',
    icon: '💼',
    color: 'bg-[#10b981]' // Emerald/Green
  },
  {
    id: 'calculadora-juros',
    title: 'Calculadora de Juros',
    description: 'Cálculo de juros moratórios, civis e comerciais.',
    url: 'https://calculadora-de-juros-ashy.vercel.app/',
    icon: '📈',
    color: 'bg-[#f59e0b]' // Amber
  },
  {
    id: 'doc-organizer',
    title: 'Legal Doc Organizer',
    description: 'Organização e estruturação de documentação processual.',
    url: 'https://legal-doc-organizer.vercel.app/',
    icon: '📁',
    color: 'bg-[#334155]' // Slate
  }
];
