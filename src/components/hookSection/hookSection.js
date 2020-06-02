import React from "react";
import "./hookSection.css";

function HookSection({ children, title, url }) {
  return (
    <section className="Hook-section">
      <a
        className="Hook-header App-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <code>{title}</code>
      </a>
      <div className="Hook-content">{children}</div>
    </section>
  );
}

export default HookSection;
