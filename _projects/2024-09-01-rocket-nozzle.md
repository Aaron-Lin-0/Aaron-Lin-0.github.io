---
layout: engineering
collection: projects
author_profile: false
share: false
title: Converging-diverging rocket nozzle
permalink: /projects/rocket-nozzle/
kicker: BU Rocket Propulsion Group · Completed
context: BU Rocket Propulsion Group · Hybrid Intro Project · Project Engineer · Fall 2024
summary: A small rocket nozzle developed from compressible-flow calculations through CAD, pressure analysis, fabrication, and static-fire integration.
feature_order: 1
sort_date: "2024-09-01"
card_title: Rocket nozzle
card_category: BURPG · Propulsion
status: Completed
card_image: /images/projects/nozzle/exploded.jpg
card_image_width: 1000
card_image_height: 445
card_alt: Exploded CAD view of the rocket nozzle, adapter, bolts, and nuts
hero_image: /images/projects/nozzle/exploded.jpg
hero_width: 1000
hero_height: 445
hero_alt: Exploded CAD view showing the nozzle, adapter, bolts, and nuts
hero_caption: Exploded view of the nozzle and six-bolt adapter interface.
excerpt: I sized the flow path, modeled the nozzle and adapter, and checked the pressure load before fabricating a resin prototype.
result: 'Pressure FEA: minimum factor of safety 2.12'
tools: SolidWorks · FEA · Compressible flow · Resin printing
---

## Objective

I completed the Hybrid Intro Project with the [Boston University Rocket Propulsion Group](https://burpg.org/) (BURPG). New members design, manufacture, and static-fire a small rocket nozzle while learning the group's design-review process.

I led the mechanical work. Using *Rocket Propulsion Elements* as my main reference, I calculated the nozzle performance and geometry, created the part and assembly CAD, produced the drawings, ran the pressure FEA, and planned the resin-printing process. I delivered that work through conceptual, preliminary, and critical design reviews, then helped integrate the nozzle with the team's electrical control and data-acquisition system.

## Approach

The starting requirements were an 80 psi chamber pressure, 3250 K chamber temperature, 13 g/s mass flow, and a 2.1 psia target exit pressure corresponding to approximately 45,000 ft. The full assembly also had to stay within a 1.05 in maximum diameter.

I used one-dimensional isentropic-flow relations to size the throat and exit. The final design had an exit-to-throat area ratio of 6.521. I then modeled the nozzle and a six-bolt adapter that connected it to the team's 1-inch NPT chamber.

We chose resin printing because it could produce the internal geometry within the project schedule. The material's temperature sensitivity meant that the structural simulation could only address the pressure load.

{% include project-figure.html src="/images/projects/nozzle/assembly-drawing.png" alt="Updated nozzle and adapter engineering drawing with section, detail, assembled, and exploded views" width="2720" height="1760" caption="Updated nozzle and adapter assembly drawing with section, detail, assembled, and exploded views." %}

{% include project-figure.html src="/images/projects/nozzle/part-drawing.png" alt="Engineering drawing of the nozzle with section, detail, front, and isometric views" width="2200" height="1424" caption="Updated nozzle part drawing showing the internal flow path without the attaching adapter." %}

<div class="actions">
  <a class="portfolio-button" href="{{ '/files/nozzle-adapter-assembly-drawing.pdf' | relative_url }}">Open assembly drawing (PDF)</a>
  <a class="portfolio-button" href="{{ '/files/nozzle-part-drawing.pdf' | relative_url }}">Open nozzle drawing (PDF)</a>
</div>

## Analysis

<p class="project-table-hint" aria-hidden="true">Swipe to view all columns</p>
<div class="project-table-region" role="region" aria-label="Nozzle pressure analysis table" tabindex="0" markdown="1">

| Quantity | Design-review value | Use in the model |
| --- | --- | --- |
| Chamber pressure | 80 psi | Applied chamber load |
| Throat pressure | Approximately 46.3 psi | Applied throat load |
| Maximum von Mises stress | 11.90 MPa | Computed stress in the pressure model |
| Assumed yield strength | 25.20 MPa | Estimated as 70% of resin tensile strength |
| Minimum factor of safety | **2.12** | Result under those material and boundary assumptions |

</div>

The pressure-only model produced a minimum factor of safety of **2.12**. Before using that result to predict hot-fire performance, I would add temperature-dependent resin properties and heat transfer to the analysis.

{% include project-figure.html src="/images/projects/nozzle/stress.jpg" alt="Nozzle von Mises stress contour with stress concentrated near the flange" width="1246" height="936" caption="Pressure-only von Mises stress result. The design-review report records a peak stress of 11.90 MPa; deformation is exaggerated in the plot." %}

{% include project-figure.html src="/images/projects/nozzle/fos.jpg" alt="Factor-of-safety contour of the nozzle showing local low-margin regions near the flange" width="1203" height="959" caption="Factor-of-safety result from the same pressure model; minimum value 2.12." %}

## Build and test

I printed the nozzle, integrated it with the chamber and seals, and helped assemble the relay ignition circuit for the static fire.

<div class="video-grid">
  <figure>
    <video controls preload="metadata" playsinline poster="{{ '/images/projects/nozzle/hotfire-poster.jpg' | relative_url }}">
      <source src="{{ '/files/nozzle-hotfire-real-time.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/files/nozzle-hotfire-real-time.mp4' | relative_url }}">Download the real-time hot-fire video</a>.
    </video>
    <figcaption>Hot fire at real-time playback.</figcaption>
  </figure>
  <figure>
    <video controls preload="metadata" playsinline poster="{{ '/images/projects/nozzle/hotfire-poster.jpg' | relative_url }}">
      <source src="{{ '/files/nozzle-hotfire-slow-motion.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/files/nozzle-hotfire-slow-motion.mp4' | relative_url }}">Download the slow-motion hot-fire video</a>.
    </video>
    <figcaption>Slow-motion recording, approximately 1/8 real-time speed.</figcaption>
  </figure>
</div>

This project took the nozzle from compressible-flow calculations to a manufactured part integrated into a static fire. The pressure model supported the design review and fabrication decision; the hot-fire recording demonstrated system integration rather than quantified nozzle performance. For a second iteration, I would pair a mesh-converged thermal-structural model with chamber-pressure measurements, wall-temperature data, and a documented post-fire inspection so the analysis could be compared directly with the test.
