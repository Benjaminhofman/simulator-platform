import React from 'react';
import { ExternalLink, Calculator, TrendingUp, FileText, Building, Users, Scale, Plus, FileSpreadsheet, Download, PiggyBank, Briefcase, BarChart2, Flame } from 'lucide-react';
import { DeleteSimulator } from './DeleteSimulator';
import { Simulator } from '../types';
import { clsx } from 'clsx';

const SIMULATOR_ICONS: { [key: string]: React.ReactNode } = {
  default: <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />,
  finance: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-700" />,
  savings: <PiggyBank className="w-6 h-6 sm:w-8 sm:h-8 text-purple-700" />,
  business: <Building className="w-6 h-6 sm:w-8 sm:h-8 text-orange-700" />,
  social: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />,
  professional: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-700" />,
  legal: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />,
  excel: <FileSpreadsheet className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" />
};

const CATEGORY_COLORS = {
  finance: 'border-l-emerald-500',
  savings: 'border-l-purple-500',
  business: 'border-l-orange-500',
  social: 'border-l-red-500',
  professional: 'border-l-indigo-500',
  legal: 'border-l-slate-500',
  excel: 'border-l-green-500',
  default: 'border-l-blue-500'
};

function getSimulatorIcon(title: string, url: string): React.ReactNode {
  if (url.includes('1drv.ms') || url.includes('onedrive.live.com') || url.includes('.xlsx') || url.includes('.xls')) {
    return SIMULATOR_ICONS.excel;
  }
  
  const titleLower = title.toLowerCase();
  if (titleLower.includes('finance') || titleLower.includes('revenu')) return SIMULATOR_ICONS.finance;
  if (titleLower.includes('épargne') || titleLower.includes('retraite')) return SIMULATOR_ICONS.savings;
  if (titleLower.includes('entreprise') || titleLower.includes('société')) return SIMULATOR_ICONS.business;
  if (titleLower.includes('social') || titleLower.includes('allocation')) return SIMULATOR_ICONS.social;
  if (titleLower.includes('professionnel') || titleLower.includes('travail')) return SIMULATOR_ICONS.professional;
  if (titleLower.includes('juridique') || titleLower.includes('succession')) return SIMULATOR_ICONS.legal;
  return SIMULATOR_ICONS.default;
}

function getCategoryColor(title: string, url: string): string {
  if (url.includes('1drv.ms') || url.includes('onedrive.live.com') || url.includes('.xlsx') || url.includes('.xls')) {
    return CATEGORY_COLORS.excel;
  }

  const titleLower = title.toLowerCase();
  if (titleLower.includes('finance') || titleLower.includes('revenu')) return CATEGORY_COLORS.finance;
  if (titleLower.includes('épargne') || titleLower.includes('retraite')) return CATEGORY_COLORS.savings;
  if (titleLower.includes('entreprise') || titleLower.includes('société')) return CATEGORY_COLORS.business;
  if (titleLower.includes('social') || titleLower.includes('allocation')) return CATEGORY_COLORS.social;
  if (titleLower.includes('professionnel') || titleLower.includes('travail')) return CATEGORY_COLORS.professional;
  if (titleLower.includes('juridique') || titleLower.includes('succession')) return CATEGORY_COLORS.legal;
  return CATEGORY_COLORS.default;
}

// Fonction pour formater la description avec des liens colorés
function formatDescription(description: string): React.ReactNode {
  // Regex pour détecter les URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // Diviser le texte en parties
  const parts = description.split(urlRegex);
  
  return parts.map((part, index) => {
    // Si c'est une URL, la rendre comme un lien coloré
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    // Sinon, retourner le texte normal avec préservation des sauts de ligne
    return part.split('\n').map((line, lineIndex, lines) => (
      <React.Fragment key={`${index}-${lineIndex}`}>
        {line}
        {lineIndex < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  });
}

interface Props {
  simulator: Simulator;
  onDelete?: () => void;
  onSimulatorClick?: () => void;
}

export function SimulatorCard({ simulator, onDelete, onSimulatorClick }: Props) {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isPopular = (simulator.click_count || 0) > 50;
  const isVeryPopular = (simulator.click_count || 0) > 100;
  const categoryColor = getCategoryColor(simulator.title, simulator.url);
  const isExcelFile = simulator.url.includes('1drv.ms') || simulator.url.includes('onedrive.live.com') || simulator.url.includes('.xlsx') || simulator.url.includes('.xls');

  return (
    <div 
      className={clsx(
        "group relative bg-white rounded-2xl border-l-4 shadow-lg",
        "hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]",
        "transition-all duration-300 ease-out",
        categoryColor,
        isVeryPopular ? "border border-orange-200 bg-orange-50/30" : 
        isPopular ? "border border-blue-200 bg-blue-50/30" : 
        "border border-gray-200"
      )}
    >
      <div className={clsx(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100",
        "transition-opacity duration-300 pointer-events-none",
        isVeryPopular ? "bg-orange-500/5" : 
        isPopular ? "bg-blue-500/5" : 
        "bg-blue-500/5"
      )} />

      {isVeryPopular && (
        <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg flex items-center gap-1 transform group-hover:scale-105 transition-transform duration-300">
          <Flame size={14} className="animate-pulse" />
          <span className="hidden sm:inline">Très populaire</span>
          <span className="sm:hidden">Top</span>
        </div>
      )}
      
      <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
        <div className="flex items-start gap-4 sm:gap-6">
          <div className={clsx(
            "p-2 sm:p-3 rounded-xl border transition-all duration-300 group-hover:scale-110",
            isVeryPopular ? "bg-orange-50 border-orange-100" :
            isPopular ? "bg-blue-50 border-blue-100" :
            isExcelFile ? "bg-green-50 border-green-100" :
            "bg-gray-50 border-gray-100"
          )}>
            {getSimulatorIcon(simulator.title, simulator.url)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight break-words">
              {simulator.title}
              {isPopular && !isVeryPopular && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-colors">
                  Populaire
                </span>
              )}
              {isExcelFile && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Excel
                </span>
              )}
            </h3>
            {simulator.click_count > 0 && (
              <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                <BarChart2 size={14} className="group-hover:text-blue-500 transition-colors" />
                <span>{simulator.click_count} consultation{simulator.click_count > 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {formatDescription(simulator.description)}
        </div>
        
        <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-100">
          <div className="flex-1">
            <a
              href={simulator.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onSimulatorClick}
              className={clsx(
                "inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl font-semibold text-sm sm:text-base",
                "text-white shadow-md transition-all duration-300",
                "hover:shadow-xl hover:scale-[1.02]",
                isExcelFile ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
              )}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Accéder au simulateur
            </a>
          </div>
          
          {isAdmin && onDelete && (
            <div className="ml-4">
              <DeleteSimulator
                simulatorId={simulator.id}
                onDelete={onDelete}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}