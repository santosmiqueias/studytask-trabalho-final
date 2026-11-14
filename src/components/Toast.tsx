import { useEffect } from "react";
import Icon from "./Icon";

export interface ToastData {
  id: number;
  message: string;
  tone: "success" | "info" | "danger";
  actionLabel?: string;
  onAction?: () => void;
}

interface ToastProps {
  toast: ToastData | null;
  onClose: () => void;
}

/** Feedback imediato após cada ação, com opção de desfazer. */
export default function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timer);
  }, [toast, onClose]);

  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && (
        <div key={toast.id} className={`toast toast-${toast.tone}`}>
          <Icon name={toast.tone === "danger" ? "trash" : toast.tone === "info" ? "undo" : "check"} size={16} />
          <span>{toast.message}</span>
          {toast.onAction && (
            <button type="button" onClick={() => { toast.onAction?.(); onClose(); }}>{toast.actionLabel ?? "Desfazer"}</button>
          )}
          <button type="button" className="toast-close" onClick={onClose} aria-label="Fechar aviso"><Icon name="close" size={14} /></button>
        </div>
      )}
    </div>
  );
}
