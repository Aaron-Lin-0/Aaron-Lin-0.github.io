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
    <p class="intro">I'm a mechanical engineering junior at <a class="org-link" href="https://www.bu.edu/eng/academics/departments-and-divisions/mechanical-engineering/">Boston University</a>, concentrating in aerospace. I design parts in CAD, check them with analysis, then build and test them through the <a class="org-link" href="https://burpg.org/">Boston University Rocket Propulsion Group (BURPG)</a> and course projects.</p>
    <p>I'm seeking a <strong>Summer 2027 internship</strong> in mechanical design, aerospace, or product development. I expect to graduate in May 2028.</p>
    <div class="actions">
      <a class="portfolio-button primary" href="{{ '/projects/' | relative_url }}">See my projects</a>
      <a class="portfolio-button" href="{{ '/files/Aaron_Lin_resume_2026.pdf' | relative_url }}">Download my resume</a>
    </div>
  </div>
  <aside class="home-hero-profile" aria-label="Aaron Lin contact information">
    <img src="{{ '/images/profile-headshot.jpg' | relative_url }}" alt="Headshot of Aaron Lin" width="600" height="600" fetchpriority="high">
    <div>
      <p class="home-profile-role">Mechanical Engineering<br>Boston University</p>
      <p class="home-profile-location">Boston, MA · Available Summer 2027</p>
      <ul class="home-contact-links">
        <li><a href="mailto:{{ site.author.email }}">Email</a></li>
        <li><a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/">LinkedIn</a></li>
        <li><a href="{{ '/files/Aaron_Lin_resume_2026.pdf' | relative_url }}">Resume</a></li>
      </ul>
    </div>
  </aside>
</section>

<section class="home-section" aria-labelledby="selected-projects-title" markdown="1">
<div class="home-section-heading">
  <h2 id="selected-projects-title">Selected projects</h2>
  <a href="{{ '/projects/' | relative_url }}">View all projects</a>
</div>

Rocket hardware, robotics, aerodynamic analysis, and the calculations, drawings, and tests behind them.

{% include project-cards.html limit=3 %}
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
