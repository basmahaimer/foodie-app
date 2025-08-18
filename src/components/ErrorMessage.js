import React from "react";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error">
      <span>⚠️ {message}</span>
      {onRetry && (
        <button className="btn-outline" onClick={onRetry} style={{ marginLeft: 12 }}>
          Réessayer
        </button>
      )}
    </div>
  );
}
