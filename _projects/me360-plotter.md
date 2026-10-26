---
layout: engineering
collection: projects
author_profile: false
share: false
title: Cartesian pen plotter exercise
permalink: /projects/me360-plotter/
kicker: Electromechanical prototyping · Completed
context: Boston University · ME360 · Team exercise · Fall 2026
summary: A two-axis pen plotter developed from a single linear-stage test into an assembled X-Y mechanism with motorized pen actuation.
feature_order: 11
sort_date: "2026-09-21"
card_title: Cartesian pen plotter
card_category: Electromechanical prototyping
status: Completed
project_group: engineering
excerpt: Our team developed a single lead-screw stage into a two-axis plotter and used G-code to test coordinated motion and pen actuation.
result: Produced recognizable square and circular traces; accuracy and repeatability were not measured
tldr_role: Team member
tldr_contribution: Built and tested as a team; I connected my computer to the motor controller and sent the test G-code through Repetier-Host.
tools: Stepper motors · Lead screws · G-code · Repetier-Host · Foam-board prototyping
card_image: /images/projects/me360/axis-prototype.jpg
card_alt: Single-axis plotter prototype with a stepper motor, lead screw, carriage, and controller
card_image_width: 1600
card_image_height: 1040
hero_image: /images/projects/me360/assembled-prototype.jpg
hero_alt: Assembled Cartesian pen plotter with two perpendicular lead-screw stages and a marker above the drawing surface
hero_width: 1200
hero_height: 1600
hero_caption: The completed exercise combined two perpendicular linear stages with a motorized marker carriage.
---

## Objective

This in-class exercise established the basic mechanical and control sequence for Cartesian motion. The team first tested one linear axis, then crossed two stages, added a motorized pen lift, and commanded square and circular paths.

The exercise became an early motion study for the later [2.5-DOF fishing game]({{ '/projects/me360/' | relative_url }}), but the two systems use different mechanical layouts. This plotter used lead screws and temporary foam-board structure; the fishing game moved to belts, aluminum extrusion, and printed housings.

## First linear stage

The first prototype isolated one axis so the motor, coupler, lead screw, bearing support, and carriage could be checked together. A rigid base located the motor and screw while a foam-board carriage translated along the axis.

{% include project-figure.html src="/images/projects/me360/axis-prototype.jpg" alt="Single-axis prototype with a stepper motor coupled to a lead screw that moves a foam-board carriage" width="1600" height="1040" caption="The first bench prototype isolated the drive train and carriage before the second axis was added." %}

This stage reduced integration risk: the team could confirm rotation direction, travel, support alignment, and basic carriage movement before carrying the first stage on a second axis.

## X-Y assembly

The next build mounted two lead-screw stages at right angles and added a motorized marker carriage. Foam board, tape, and simple brackets kept iteration fast. These parts were prototype tooling rather than the structure intended for the later course project.

{% include project-figure.html src="/images/projects/me360/assembled-prototype.jpg" alt="Assembled pen plotter with two perpendicular lead-screw stages and a motorized marker carriage" width="1200" height="1600" caption="Two perpendicular stages created X-Y travel; a third actuator raised and lowered the marker." %}

## Motion commands

I connected my computer to the motor-control board and used Repetier-Host, a 3D-printer host application, to send the test G-code. Linear `G1` moves traced a 50 × 50 mm square. A clockwise `G02` move traced a 25 mm-radius circle. Extruder-axis commands raised and lowered the pen mechanism before and after each path.

[Download the square path]({{ '/files/me360-plotter-square.gcode' | relative_url }}) · [Download the circle path]({{ '/files/me360-plotter-circle.gcode' | relative_url }})

## Path tests

The recordings show coordinated X-Y movement and pen actuation. They demonstrate functional motion, but they do not establish dimensional accuracy, backlash, or repeatability.

<div class="video-grid">
  <figure>
    <video controls width="1024" height="576" preload="none" playsinline aria-label="Silent square-path plotter test" poster="{{ '/images/projects/me360/square-path-poster.jpg' | relative_url }}">
      <source src="{{ '/files/me360-square-path.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/files/me360-square-path.mp4' | relative_url }}">Download the square-path test video</a>.
    </video>
    <figcaption>Square-path motion test · 0:15 · Silent recording.</figcaption>
  </figure>
  <figure>
    <video controls width="1024" height="576" preload="none" playsinline aria-label="Silent circle-path plotter test" poster="{{ '/images/projects/me360/circle-path-poster.jpg' | relative_url }}">
      <source src="{{ '/files/me360-circle-path.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/files/me360-circle-path.mp4' | relative_url }}">Download the circle-path test video</a>.
    </video>
    <figcaption>Circle-path motion test · 0:15 · Silent recording.</figcaption>
  </figure>
</div>

{% include project-figure.html src="/images/projects/me360/path-test.jpg" alt="Overhead view of the plotter and red marker traces forming a square and overlapping circle" width="1200" height="1600" caption="The combined tests produced recognizable square and circular forms with rounded corners and visible line waviness." %}

## Result and limitations

The exercise progressed from a working single axis to coordinated two-axis paths with pen actuation. Rounded corners and line waviness remained visible. No calibrated measurements are available for commanded versus actual dimensions, backlash, repeatability, or stage speed, so the result is limited to a functional demonstration.

This was a rapid in-class build, and no CAD model was produced.
