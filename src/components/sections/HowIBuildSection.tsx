import { Layers, Smartphone, Workflow } from "lucide-react";
export function HowIBuildSection() {
  return (
    <section
      className="about shell"
      id="capabilities"
      aria-labelledby="about-title"
    >
      <div>
        <p className="eyebrow">
          <span className="section-number">02 /</span> How I build
        </p>
        <h2 id="about-title">
          Care for the interface.
          <br />
          Care for what’s underneath.
        </h2>
        <p className="about-intro">
          I enjoy the whole path from a useful idea to a working product. My
          projects span native apps, full-stack web development and AI tooling,
          with attention to how people use the software and how its parts fit
          together.
        </p>
      </div>
      <div>
        <div className="capability">
          <h3>
            <Smartphone size={20} /> Interfaces with a clear purpose
          </h3>
          <p>
            Native mobile and responsive web experiences that make the next
            action easy to understand.
          </p>
          <div className="tag-list">
            <span>SwiftUI</span>
            <span>React</span>
            <span>Next.js</span>
          </div>
        </div>
        <div className="capability">
          <h3>
            <Layers size={20} /> Systems that support the experience
          </h3>
          <p>
            APIs, data models and storage choices shaped around what the product
            actually needs.
          </p>
          <div className="tag-list">
            <span>Java / Spring Boot</span>
            <span>TypeScript</span>
            <span>SQL</span>
          </div>
        </div>
        <div className="capability">
          <h3>
            <Workflow size={20} /> Thoughtful engineering decisions
          </h3>
          <p>
            Offline behavior, recoverable data flows and clear validation
            boundaries — documented alongside the features.
          </p>
          <div className="tag-list">
            <span>Testing</span>
            <span>Cloudflare</span>
            <span>GitHub Actions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
