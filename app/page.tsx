const services = [
  {
    number: "01",
    title: "Precision repair",
    text: "Fast, thoughtful diagnostics for heating, cooling, airflow, and controls—followed by a repair that lasts.",
    detail: "Same-day appointments",
  },
  {
    number: "02",
    title: "Quiet replacements",
    text: "Right-sized, high-efficiency systems selected for your home, your routines, and the way you want each room to feel.",
    detail: "Design-led installations",
  },
  {
    number: "03",
    title: "Whole-home air",
    text: "Humidity control, filtration, purification, and ventilation that make the air feel as considered as the architecture.",
    detail: "Healthier indoor air",
  },
];

const reviews = [
  {
    quote:
      "Aster treated our home like a home—not a job site. The new system is whisper-quiet and every room finally feels right.",
    name: "Elena M.",
    place: "Scarsdale",
  },
  {
    quote:
      "They found the real issue in one visit, explained it clearly, and left everything immaculate. Exceptional from start to finish.",
    name: "David R.",
    place: "Greenwich",
  },
  {
    quote:
      "The rare contractor who understands both performance and aesthetics. Their attention to detail is on another level.",
    name: "Claire T.",
    place: "Bedford",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="utility-bar">
          <p>Serving Westchester + Fairfield County</p>
          <a href="tel:+19145550192">24/7 priority response&nbsp;&nbsp; (914) 555-0192</a>
        </div>

        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Aster Climate home">
            <span className="brand-mark">A</span>
            <span className="brand-name">ASTER</span>
            <span className="brand-sub">HEATING &amp; AIR</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#difference">Our standard</a>
            <a href="#membership">Care plan</a>
          </div>
          <a className="button button-light nav-cta" href="#request">
            Request service <span>↗</span>
          </a>
        </nav>

        <div className="hero-content shell">
          <div className="eyebrow light">
            <span />
            Residential climate, elevated
          </div>
          <h1>
            Quiet comfort,
            <br />
            <em>beautifully engineered.</em>
          </h1>
          <p className="hero-copy">
            Bespoke heating, cooling, and air-quality care for discerning homes
            across Westchester and Fairfield County.
          </p>
          <div className="hero-actions">
            <a className="button button-copper" href="#request">
              Schedule a consultation <span>↗</span>
            </a>
            <a className="text-link light-link" href="tel:+19145550192">
              Or call (914) 555-0192 <span>→</span>
            </a>
          </div>
        </div>

        <div className="hero-proof shell">
          <div>
            <strong>4.9</strong>
            <span>★★★★★</span>
            <p>Local homeowner rating</p>
          </div>
          <div>
            <strong>18</strong>
            <span>years</span>
            <p>Of trusted craftsmanship</p>
          </div>
          <div>
            <strong>100%</strong>
            <span>backed</span>
            <p>Comfort guarantee</p>
          </div>
        </div>
      </section>

      <section className="services section shell" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span />
              How we help
            </div>
            <h2>Comfort without compromise.</h2>
          </div>
          <p>
            From urgent repairs to complete climate redesigns, every visit
            combines exacting technical work with unusually attentive service.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-number">{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-detail">{service.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="difference" id="difference">
        <div className="difference-photo">
          <div className="photo-note">
            <span>THE ASTER STANDARD</span>
            <strong>Designed around your home.</strong>
          </div>
        </div>
        <div className="difference-copy">
          <div className="eyebrow light">
            <span />
            A more considered approach
          </div>
          <h2>We engineer the feeling, not just the temperature.</h2>
          <p>
            True comfort is quiet, even, clean, and effortless. We look at the
            entire home—sun exposure, architecture, airflow, occupancy, and
            how you actually live—before recommending a solution.
          </p>
          <ul className="check-list">
            <li>
              <span>01</span>
              Clear options, thoughtfully explained
            </li>
            <li>
              <span>02</span>
              Respectful technicians and immaculate work areas
            </li>
            <li>
              <span>03</span>
              Meticulous commissioning before we leave
            </li>
          </ul>
          <a className="text-link light-link" href="#request">
            Experience the Aster standard <span>→</span>
          </a>
        </div>
      </section>

      <section className="process section shell">
        <div className="section-heading compact">
          <div>
            <div className="eyebrow">
              <span />
              What to expect
            </div>
            <h2>Simple from first call to final detail.</h2>
          </div>
        </div>
        <div className="process-grid">
          {[
            ["01", "We listen", "Tell us what you’re noticing and what matters most."],
            ["02", "We assess", "A careful diagnosis, including the details others miss."],
            ["03", "We tailor", "Clear recommendations shaped around your priorities."],
            ["04", "We perfect", "Precise work, full testing, and a spotless handoff."],
          ].map(([number, title, text]) => (
            <article className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials section">
        <div className="shell">
          <div className="eyebrow centered">
            <span />
            Notes from our clients
            <span />
          </div>
          <h2>Known for how we make home feel.</h2>
          <div className="review-grid">
            {reviews.map((review) => (
              <figure key={review.name}>
                <div className="stars">★★★★★</div>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  <span>{review.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="membership shell" id="membership">
        <div className="membership-copy">
          <div className="eyebrow light">
            <span />
            Aster Reserve
          </div>
          <h2>Proactive care for effortless comfort.</h2>
          <p>
            Our private maintenance plan keeps your system performing
            beautifully, with seasonal care and priority service whenever you
            need us.
          </p>
          <a className="button button-light" href="#request">
            Explore membership <span>↗</span>
          </a>
        </div>
        <div className="membership-list">
          <div>
            <span>01</span>
            <p>Two precision tune-ups each year</p>
          </div>
          <div>
            <span>02</span>
            <p>Front-of-line priority scheduling</p>
          </div>
          <div>
            <span>03</span>
            <p>Preferred member pricing</p>
          </div>
          <div>
            <span>04</span>
            <p>Performance history for every system</p>
          </div>
        </div>
      </section>

      <section className="request section shell" id="request">
        <div className="request-intro">
          <div className="eyebrow">
            <span />
            Begin here
          </div>
          <h2>Let’s make your home feel exactly right.</h2>
          <p>
            Share a few details and our concierge will be in touch shortly to
            arrange your appointment.
          </p>
          <div className="contact-lines">
            <a href="tel:+19145550192">
              <small>CALL ANYTIME</small>
              <strong>(914) 555-0192</strong>
            </a>
            <a href="mailto:concierge@asterclimate.com">
              <small>EMAIL</small>
              <strong>concierge@asterclimate.com</strong>
            </a>
          </div>
        </div>

        <form
          className="request-form"
          action="mailto:concierge@asterclimate.com"
          method="post"
          encType="text/plain"
        >
          <label>
            <span>Your name</span>
            <input type="text" name="name" autoComplete="name" placeholder="Name" required />
          </label>
          <label>
            <span>Phone number</span>
            <input type="tel" name="phone" autoComplete="tel" placeholder="(914) 555-0123" required />
          </label>
          <label>
            <span>Email address</span>
            <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>How can we help?</span>
            <select name="service" defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Heating or cooling repair</option>
              <option>New system consultation</option>
              <option>Indoor air quality</option>
              <option>Aster Reserve maintenance</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="full">
            <span>Anything we should know?</span>
            <textarea name="message" rows={3} placeholder="Tell us a little about your home and what you’re experiencing." />
          </label>
          <button className="button button-dark full" type="submit">
            Request my appointment <span>↗</span>
          </button>
          <p className="form-note full">
            By submitting, you agree to receive appointment-related calls or
            texts. No spam—ever.
          </p>
        </form>
      </section>

      <footer>
        <div className="footer-main shell">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">A</span>
            <span className="brand-name">ASTER</span>
            <span className="brand-sub">HEATING &amp; AIR</span>
          </a>
          <p>
            Bespoke residential heating, cooling, and indoor-air care for
            Westchester County and lower Fairfield County.
          </p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#difference">Our standard</a>
            <a href="#membership">Care plan</a>
            <a href="#request">Contact</a>
          </div>
          <a className="footer-call" href="tel:+19145550192">
            24/7 SERVICE
            <strong>(914) 555-0192</strong>
          </a>
        </div>
        <div className="footer-bottom shell">
          <span>© 2026 Aster Heating &amp; Air</span>
          <span>Fully licensed &amp; insured</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <a className="mobile-call" href="tel:+19145550192">
        Call Aster now <span>→</span>
      </a>
    </main>
  );
}
