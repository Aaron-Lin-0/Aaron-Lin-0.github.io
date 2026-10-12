---
layout: engineering
permalink: /
title: "Hi, I'm Aaron."
home_page: true
description: "Mechanical engineering junior seeking Summer 2027 internships. Explore rocket nozzle design, robotics, aerodynamic analysis, and experimental work."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" id="about">
  <div class="home-hero-copy">
    <h1>Hi, I'm Aaron.</h1>
    <p class="intro">I take mechanical designs from CAD and analysis through fabrication and testing, with work in rocket hardware, aerodynamics, and robotics.</p>
    <p>I'm a mechanical engineering junior at <a class="org-link" href="https://www.bu.edu/eng/academics/departments-and-divisions/mechanical-engineering/">Boston University</a>, with an aerospace concentration and a Materials Science &amp; Engineering minor. I'm seeking a <strong>Summer 2027 internship</strong> in mechanical design, aerospace, or product development. Expected graduation: May 2028.</p>
    <div class="actions">
      <a class="portfolio-button primary" href="{{ '/files/Aaron_Lin_resume_2026.pdf' | relative_url }}">Resume (PDF)</a>
      <a class="portfolio-button" href="{{ '/projects/' | relative_url }}">Explore projects</a>
      <a class="portfolio-button" href="mailto:{{ site.author.email }}">Email me</a>
    </div>
    <p class="home-brief-link"><a href="{{ '/files/Aaron_Lin_engineering_portfolio.pdf' | relative_url }}">5-page engineering brief · PDF · 2.1 MB</a></p>
  </div>
  <aside class="home-hero-profile" aria-label="Aaron Lin contact information">
    <div class="home-profile-portrait">
      <img src="{{ '/images/profile-headshot.jpg' | relative_url }}" alt="Headshot of Aaron Lin" width="600" height="600" fetchpriority="high">
    </div>
    <div>
      <p class="home-profile-role">Mechanical Engineering<br>Boston University</p>
      <p class="home-profile-location">Boston, MA</p>
      <ul class="home-contact-links">
        <li><a href="mailto:{{ site.author.email }}">Email</a></li>
        <li><a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/">LinkedIn</a></li>
        <li><a href="{{ '/files/Aaron_Lin_resume_2026.pdf' | relative_url }}">Resume</a></li>
      </ul>
    </div>
  </aside>
</section>

<section class="home-section home-section--in-progress" aria-labelledby="in-progress-title" markdown="1">
<div class="home-section-heading">
  <h2 id="in-progress-title">In progress</h2>
  <a href="{{ '/projects/#in-progress' | relative_url }}">View current work</a>
</div>

{% include project-cards.html status="In progress" split_links=true %}
</section>

<section class="home-section" aria-labelledby="selected-projects-title" markdown="1">
<div class="home-section-heading">
  <h2 id="selected-projects-title">Selected projects</h2>
  <a href="{{ '/projects/' | relative_url }}">View all projects</a>
</div>

{% include project-cards.html limit=3 status="Completed" split_links=true %}
</section>

<section class="home-section" aria-labelledby="recent-experience-title">
  <div class="home-section-heading">
    <h2 id="recent-experience-title">Recent experience</h2>
    <a href="{{ '/cv/' | relative_url }}">View full experience</a>
  </div>
  <div class="home-experience-grid">
    <article>
      <p class="home-experience-meta">February–June 2026 · Sydney, Australia</p>
      <h3>Mechanical Engineering Intern · <a class="org-link" href="https://www.culturon.com.au/">Culturon</a></h3>
      <p>I ran optical emission spectroscopy experiments and built Python analysis tools with pandas, SciPy, and Astroquery to process plasma spectra and compare candidate lines with the NIST atomic spectra database.</p>
    </article>
    <article>
      <p class="home-experience-meta">September 2024–present · Boston, MA</p>
      <h3>Project Engineer · <a class="org-link" href="https://burpg.org/">BU Rocket Propulsion Group</a></h3>
      <p>I designed and fabricated a resin rocket nozzle, evaluated its pressure loading in SolidWorks Simulation, and now use ANSYS Fluent and OpenRocket to compare aerodynamic fairing concepts.</p>
    </article>
  </div>
</section>

<section class="home-section" id="skills" aria-labelledby="skills-title" markdown="1">
## Technical skills
{: #skills-title }

{% include skills-list.html %}
</section>

<section class="home-section contact-panel" id="contact" aria-labelledby="contact-title" markdown="1">
## Get in touch
{: #contact-title }

If you're hiring for Summer 2027, I'd be glad to talk about design, prototyping, or test work.

[{{ site.author.email }}](mailto:{{ site.author.email }}) · [LinkedIn](https://www.linkedin.com/in/{{ site.author.linkedin }}/) · [Resume (PDF)]({{ '/files/Aaron_Lin_resume_2026.pdf' | relative_url }})
</section>
