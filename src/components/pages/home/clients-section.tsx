import { CLIENTS } from "@/lib/data";
import EmDashHeader from "@/components/shared/em-dash-header";

export default function ClientsSection() {
  return (
    <section className="si-section">
      <div className="si-container flex flex-col si-stack-block">
        <div>
          <EmDashHeader label="Clients" />
          <div className="si-pt-stack">
            <p className="si-body si-muted">
              We&rsquo;ve had the privilege of building for founders and operators across four continents — from a
              dental lab in Hong Kong to a transport compliance leader in Australia. Each partnership reflects our
              belief that meaningful results come from clarity, transparency, and engineering craft — not just
              polished screens.
            </p>
          </div>
        </div>

        <div className="si-client-grid">
          {CLIENTS.map((client) => (
            <div key={client.name} className="si-client-card">
              <span className="si-caption si-client-meta">{client.category}</span>
              <span className="si-client-logo">
                <span className="si-client-mark" aria-hidden="true" />
                <span className="si-client-name">{client.name}</span>
              </span>
              <span className="si-caption si-client-meta">{client.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
