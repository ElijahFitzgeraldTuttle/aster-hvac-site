"use client";

import { useEffect, useState } from "react";
import { StylePicker, styleOptions, type StyleId } from "./style-picker";

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

function ContemporaryPage() {
  return (
    <main className="theme-page contemporary-page">
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

function MiniBrand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`mini-brand${inverse ? " inverse" : ""}`} href="#top" aria-label="Aster Heating and Air home">
      <span>A</span>
      <strong>ASTER</strong>
      <small>HEATING &amp; AIR</small>
    </a>
  );
}

function LeadForm({ className }: { className: string }) {
  return (
    <form
      className={className}
      action="mailto:concierge@asterclimate.com"
      method="post"
      encType="text/plain"
    >
      <label>
        <span>Name</span>
        <input name="name" autoComplete="name" placeholder="Your name" required />
      </label>
      <label>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="(914) 555-0123" required />
      </label>
      <label>
        <span>Service</span>
        <select name="service" defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Repair</option>
          <option>Replacement</option>
          <option>Indoor air quality</option>
          <option>Maintenance plan</option>
        </select>
      </label>
      <label>
        <span>Details</span>
        <textarea name="message" rows={3} placeholder="What are you noticing?" />
      </label>
      <button type="submit">Request service <span>→</span></button>
    </form>
  );
}

function UtilitarianPage() {
  return (
    <main className="theme-page utilitarian-page" id="top">
      <header className="u-header">
        <MiniBrand />
        <div className="u-status"><i /> Dispatch online · 24/7 response</div>
        <a href="tel:+19145550192">CALL (914) 555-0192</a>
      </header>

      <section className="u-hero">
        <div className="u-hero-copy">
          <span className="u-kicker">RESIDENTIAL HVAC / WESTCHESTER + FAIRFIELD</span>
          <h1>COMFORT.<br />SOLVED.</h1>
          <p>Clear diagnostics. Exact work. No guesswork, no runaround, no mess left behind.</p>
          <div>
            <a href="#u-request">START A SERVICE TICKET →</a>
            <a href="#u-services">VIEW CAPABILITIES ↓</a>
          </div>
        </div>
        <aside className="u-ticket">
          <div className="u-ticket-head">
            <span>LIVE WORK ORDER</span>
            <strong>#AC-2471</strong>
          </div>
          <dl>
            <div><dt>RESPONSE</dt><dd>Same day</dd></div>
            <div><dt>RATING</dt><dd>4.9 / 5</dd></div>
            <div><dt>EXPERIENCE</dt><dd>18 years</dd></div>
            <div><dt>WORK</dt><dd>100% backed</dd></div>
          </dl>
          <div className="u-ticket-foot">READY FOR DISPATCH</div>
        </aside>
      </section>

      <section className="u-services" id="u-services">
        <div className="u-section-code">01 / CAPABILITIES</div>
        <div className="u-service-table">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <a href="#u-request">OPEN TICKET ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="u-field">
        <div className="u-field-image" aria-hidden="true" />
        <div className="u-field-copy">
          <span>02 / FIELD STANDARD</span>
          <h2>Measure twice.<br />Commission once.</h2>
          <p>Every system is assessed as a complete operating environment—not a box to swap.</p>
          <ol>
            <li><b>01</b> Load, airflow, and comfort mapping</li>
            <li><b>02</b> Options ranked by impact and value</li>
            <li><b>03</b> Full performance test before handoff</li>
          </ol>
        </div>
      </section>

      <section className="u-process">
        <div className="u-section-code">03 / SERVICE SEQUENCE</div>
        <div>
          {["REPORT", "DIAGNOSE", "AUTHORIZE", "RESOLVE"].map((step, index) => (
            <article key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="u-contact" id="u-request">
        <div>
          <span>04 / OPEN A TICKET</span>
          <h2>Tell us what’s not working.</h2>
          <p>Dispatch will reply shortly with the next available service window.</p>
        </div>
        <LeadForm className="u-form" />
      </section>

      <footer className="u-footer">
        <MiniBrand inverse />
        <p>WESTCHESTER COUNTY / FAIRFIELD COUNTY</p>
        <a href="tel:+19145550192">(914) 555-0192</a>
      </footer>
    </main>
  );
}

function ModernPage() {
  return (
    <main className="theme-page modern-page" id="top">
      <header className="m-header">
        <MiniBrand />
        <nav><a href="#m-work">Services</a><a href="#m-method">Method</a><a href="#m-contact">Contact</a></nav>
        <a className="m-call" href="tel:+19145550192">24/7 · 914 555 0192</a>
      </header>

      <section className="m-hero">
        <div className="m-hero-type">
          <span>HOME CLIMATE / RECONSIDERED</span>
          <h1>FEEL<br /><i>RIGHT</i><br />AT HOME.</h1>
          <a href="#m-contact">Book a consultation ↗</a>
        </div>
        <div className="m-hero-photo" aria-hidden="true" />
        <div className="m-circle">4.9<br /><small>RATED</small></div>
      </section>

      <section className="m-work" id="m-work">
        <header>
          <span>01</span>
          <h2>Three ways<br />we improve home.</h2>
        </header>
        <div className="m-service-blocks">
          {services.map((service, index) => (
            <article key={service.number}>
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#m-contact">Explore →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="m-method" id="m-method">
        <div className="m-method-statement">
          <span>02 / OUR METHOD</span>
          <h2>Comfort is a system, not a setting.</h2>
        </div>
        <div className="m-method-notes">
          <p>We account for architecture, exposure, airflow, occupancy, humidity, and how each room is actually used.</p>
          <ul>
            <li><b>18</b><span>years refining our craft</span></li>
            <li><b>24/7</b><span>priority response</span></li>
            <li><b>100%</b><span>comfort guarantee</span></li>
          </ul>
        </div>
      </section>

      <section className="m-quote">
        <blockquote>“The rare contractor who understands both performance and aesthetics.”</blockquote>
        <span>CLAIRE T. / BEDFORD</span>
      </section>

      <section className="m-contact" id="m-contact">
        <div>
          <span>03 / START HERE</span>
          <h2>Let’s make your home work beautifully.</h2>
          <a href="tel:+19145550192">(914) 555-0192</a>
        </div>
        <LeadForm className="m-form" />
      </section>

      <footer className="m-footer"><MiniBrand inverse /><span>WESTCHESTER / FAIRFIELD / SINCE 2008</span></footer>
    </main>
  );
}

function PostmodernPage() {
  return (
    <main className="theme-page postmodern-page" id="top">
      <header className="p-header">
        <MiniBrand />
        <span className="p-squiggle">≈≈≈</span>
        <a href="#p-contact">BOOK COMFORT! ↗</a>
      </header>

      <section className="p-hero">
        <div className="p-hero-copy">
          <span className="p-sticker">HOME, BUT BETTER ✦</span>
          <h1>Serious<br />comfort.<br /><i>No beige.</i></h1>
          <p>Heating, cooling, and clean-air care with meticulous craft and actual personality.</p>
          <a href="#p-contact">MAKE IT COMFORTABLE →</a>
        </div>
        <div className="p-photo-card">
          <div aria-hidden="true" />
          <span>THE ASTER STANDARD ★★★★★</span>
        </div>
        <div className="p-badge">18<br /><small>YEARS</small></div>
      </section>

      <div className="p-marquee">
        <span>REPAIR ✦ REPLACE ✦ PURIFY ✦ MAINTAIN ✦ REPAIR ✦ REPLACE ✦ PURIFY ✦ MAINTAIN ✦</span>
      </div>

      <section className="p-services">
        <header><span>WHAT WE DO</span><h2>Pick your comfort plotline.</h2></header>
        <div>
          {services.map((service, index) => (
            <article key={service.number}>
              <span>CHAPTER {index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#p-contact">Let’s go ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="p-story">
        <div className="p-story-photo" aria-hidden="true" />
        <div>
          <span>OUR VERY GOOD OPINION</span>
          <h2>Your HVAC should disappear into the feeling of home.</h2>
          <p>Quiet. Even. Clean. Easy. We obsess over everything required to make comfort feel effortless.</p>
          <div className="p-pills"><span>NO GUESSWORK</span><span>NO MESS</span><span>NO MYSTERY FEES</span></div>
        </div>
      </section>

      <section className="p-reviews">
        {reviews.map((review, index) => (
          <figure key={review.name}>
            <span>{"★".repeat(5)}</span>
            <blockquote>“{review.quote}”</blockquote>
            <figcaption>{review.name} · {review.place}</figcaption>
            <i>{index + 1}</i>
          </figure>
        ))}
      </section>

      <section className="p-club">
        <span>ASTER RESERVE</span>
        <h2>The no-surprises comfort club.</h2>
        <p>Two tune-ups. Priority scheduling. Preferred pricing. Maximum peace of mind.</p>
        <a href="#p-contact">JOIN THE CLUB ↗</a>
      </section>

      <section className="p-contact" id="p-contact">
        <div><span>OKAY, YOUR TURN</span><h2>What’s your home trying to tell you?</h2></div>
        <LeadForm className="p-form" />
      </section>

      <footer className="p-footer"><MiniBrand inverse /><span>COMFORT WITH CHARACTER™</span><a href="tel:+19145550192">914.555.0192</a></footer>
    </main>
  );
}

function BasicPage() {
  return (
    <main className="theme-page basic-page" id="top">
      <div className="b-utility"><span>Serving Westchester &amp; Fairfield County</span><a href="tel:+19145550192">Emergency service: (914) 555-0192</a></div>
      <header className="b-header">
        <MiniBrand />
        <nav><a href="#b-services">Services</a><a href="#b-about">About</a><a href="#b-reviews">Reviews</a></nav>
        <a href="#b-contact">Schedule service</a>
      </header>

      <section className="b-hero">
        <div>
          <span>TRUSTED LOCAL HEATING &amp; COOLING</span>
          <h1>Reliable comfort for every season.</h1>
          <p>Expert HVAC repair, replacement, and maintenance—done right the first time.</p>
          <div><a href="#b-contact">Request service</a><a href="tel:+19145550192">Call (914) 555-0192</a></div>
        </div>
      </section>

      <section className="b-trust">
        <div><strong>4.9 / 5</strong><span>Customer rating</span></div>
        <div><strong>18 years</strong><span>Local experience</span></div>
        <div><strong>24/7</strong><span>Emergency response</span></div>
        <div><strong>100%</strong><span>Work guaranteed</span></div>
      </section>

      <section className="b-services b-shell" id="b-services">
        <header><span>OUR SERVICES</span><h2>Complete home comfort solutions</h2><p>Professional service for all your heating, cooling, and air-quality needs.</p></header>
        <div>
          {services.map((service) => (
            <article key={service.number}>
              <span className="b-icon">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#b-contact">Learn more →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="b-about" id="b-about">
        <div className="b-about-photo" aria-hidden="true" />
        <div>
          <span>WHY CHOOSE ASTER</span>
          <h2>Quality work. Honest service. Lasting comfort.</h2>
          <p>We take the time to diagnose the real issue, explain your options, and leave your home cleaner than we found it.</p>
          <ul><li>Licensed and insured technicians</li><li>Clear, upfront recommendations</li><li>Respectful service in your home</li><li>Guaranteed workmanship</li></ul>
          <a href="#b-contact">Get an appointment</a>
        </div>
      </section>

      <section className="b-steps b-shell">
        <header><span>HOW IT WORKS</span><h2>Service made simple</h2></header>
        <div>{["Contact us", "We diagnose", "You approve", "We get it done"].map((step, index) => <article key={step}><b>{index + 1}</b><h3>{step}</h3></article>)}</div>
      </section>

      <section className="b-reviews" id="b-reviews">
        <div className="b-shell">
          <header><span>CUSTOMER REVIEWS</span><h2>Neighbors trust Aster</h2></header>
          <div>{reviews.map((review) => <figure key={review.name}><span>★★★★★</span><blockquote>“{review.quote}”</blockquote><figcaption><b>{review.name}</b> · {review.place}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="b-contact b-shell" id="b-contact">
        <div><span>REQUEST SERVICE</span><h2>How can we help?</h2><p>Complete the form or call us at <a href="tel:+19145550192">(914) 555-0192</a>.</p></div>
        <LeadForm className="b-form" />
      </section>

      <footer className="b-footer"><div className="b-shell"><MiniBrand inverse /><p>Heating, cooling, and air-quality service for Westchester and Fairfield County.</p><a href="tel:+19145550192">(914) 555-0192</a></div></footer>
    </main>
  );
}

const pageByStyle: Record<StyleId, () => React.JSX.Element> = {
  contemporary: ContemporaryPage,
  utilitarian: UtilitarianPage,
  modern: ModernPage,
  postmodern: PostmodernPage,
  basic: BasicPage,
};

export default function Home() {
  const [activeStyle, setActiveStyle] = useState<StyleId>("contemporary");

  useEffect(() => {
    const urlStyle = new URLSearchParams(window.location.search).get("style");
    const savedStyle = window.localStorage.getItem("aster-style");
    const initialStyle = styleOptions.some((style) => style.id === urlStyle)
      ? (urlStyle as StyleId)
      : styleOptions.some((style) => style.id === savedStyle)
        ? (savedStyle as StyleId)
        : "contemporary";

    document.documentElement.dataset.style = initialStyle;
    setActiveStyle(initialStyle);
  }, []);

  function selectStyle(style: StyleId) {
    document.documentElement.dataset.style = style;
    window.localStorage.setItem("aster-style", style);
    const url = new URL(window.location.href);
    url.searchParams.set("style", style);
    url.hash = "";
    window.history.replaceState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveStyle(style);
  }

  const ActivePage = pageByStyle[activeStyle];

  return (
    <>
      <StylePicker activeStyle={activeStyle} onSelect={selectStyle} />
      <ActivePage />
    </>
  );
}
