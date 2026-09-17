import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Compass, RotateCcw } from 'lucide-react';
import { LanguageContext } from '../i18n/LanguageContext';
import { it } from '../i18n/locales/it';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackMessage?: string;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    if (this.props.onReset) {
      this.props.onReset();
      this.setState({ hasError: false, error: null });
    } else {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <LanguageContext.Consumer>
          {context => {
            const t = context?.t || it;
            return (
              <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#0a0502]/95 backdrop-blur-md text-stone-100 select-none animate-fadeIn">
                <div className="relative max-w-md w-full bg-gradient-to-b from-[#241409] via-[#1a0c04] to-[#100602] border-2 border-amber-500/80 rounded-3xl p-6 text-center shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                    <Compass className="w-8 h-8 text-amber-300 animate-spin-slow" />
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                    {t.errors.autoRecovery}
                  </span>

                  <h3 className="text-xl font-serif font-black text-amber-100 mt-1 mb-2 tracking-wide">
                    {t.errors.runtimeTitle}
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed mb-5 font-serif">
                    {this.props.fallbackMessage || t.errors.genericFallback}
                  </p>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={this.handleReload}
                      className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-black text-xs uppercase tracking-wider border border-amber-300 shadow-[0_4px_20px_rgba(245,158,11,0.5)] hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t.errors.restoreModule}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          }}
        </LanguageContext.Consumer>
      );
    }

    return this.props.children;
  }
}
