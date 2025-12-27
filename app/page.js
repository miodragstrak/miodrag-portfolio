import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page">

      {/* HERO */}
      <AnimatedSection>
        <div className="hero">
          <div className="hero-avatar">
            <Image
              src="/profile.jpg"
              alt="Miodrag Strak"
              fill
              priority
              className="hero-avatar-img"
            />
          </div>
          <div className="hero-content">
          <h1>Miodrag Strak</h1>
          <h2>Product Manager · Project Manager</h2>
          <p className="muted">
            Quinquagenarian by age, technologist by curiosity -
            still excited by building things that work.
          </p>
          <div className="actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="/CV_MiodragStrak.pdf" className="btn">Download CV</a>
          </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ABOUT */}
      <AnimatedSection>
        <h3>What I Do</h3>
        <p>
          I help teams and organizations turn complex ideas into
          reliable, scalable digital products.

          My work sits at the intersection of product management,
          automation, and engineering - translating business goals
          into systems that actually run in production.
        </p>
      </AnimatedSection>

      {/* SKILLS */}
      <AnimatedSection>
        <h3>Core Skills</h3>

        <div className="grid">
          <div>
            <h4>Product</h4>
            <ul>
              <li>Product discovery and delivery</li>
              <li>Roadmaps, PRDs, backlogs</li>
              <li>Stakeholder communication</li>
              <li>Agile / Scrum / Kanban</li>
            </ul>
          </div>

          <div>
            <h4>Automation & AI</h4>
            <ul>
              <li>Workflow orchestration (n8n, Make, Zapier)</li>
              <li>AI agents, chatbots, RAG pipelines</li>
              <li>API integrations and system automation</li>
              <li>RPA and process optimization</li>
            </ul>
          </div>

          <div>
            <h4>Technical</h4>
            <ul>
              <li>JavaScript, Node.js, React</li>
              <li>REST APIs and webhooks</li>
              <li>Databases and auth flows</li>
              <li>Git, CI/CD, Docker</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* PROJECTS */}
      <AnimatedSection>
        <h3 id="projects">Selected Projects</h3>

        <div className="cards">
          <a
            href="https://github.com/yourusername/ai-automation-platform"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>AI Automation Platform</h4>
            <p>
              Designed AI-driven workflows integrating CRMs, messaging platforms,
              and external APIs, reducing manual work by 60%+.
            </p>
          </a>

          <a
            href="https://github.com/yourusername/logistics-dashboard"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Logistics Intelligence Dashboard</h4>
            <p>
              Led API evaluation and integration for real-time shipment tracking
              and trade intelligence.
            </p>
          </a>
        </div>
      </AnimatedSection>

      {/* EXPERIENCE */}
      <AnimatedSection>
        <h3>Experience Snapshot</h3>
        <ul>
          <li>Senior Product & Automation Consultant</li>
          <li>End-to-end ownership from discovery to production</li>
          <li>Cross-functional, international teams</li>
          <li>SaaS, B2B, and platform products</li>
        </ul>
      </AnimatedSection>

      {/* WORK STYLE */}
      <AnimatedSection>
        <h3>How I Work</h3>
        <ul className="checks">
          <li>Structured and pragmatic</li>
          <li>Strong bridge between business and tech</li>
          <li>Comfortable with ambiguity</li>
          <li>Bias toward shipping</li>
        </ul>
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection>
        <h3>Contact</h3>
        <p>
          📧 miodrag.strak@gmail.com<br />
          🔗 linkedin.com/in/miodragstrak<br />
          💻 github.com/miodragstrak
        </p>
      </AnimatedSection>

    </main>
  );
}
