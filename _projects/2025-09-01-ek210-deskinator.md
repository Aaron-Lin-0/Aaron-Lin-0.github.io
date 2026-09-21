---
layout: engineering
collection: projects
author_profile: false
share: false
title: The Deskinator
permalink: /projects/ek210-deskinator/
kicker: Robotics · Completed
context: Boston University · EK210 · Team of four · Fall 2025
summary: An autonomous desk-cleaning robot that our four-person team improved through mechanical, electrical, and firmware testing.
feature_order: 2
sort_date: "2025-09-01"
card_title: The Deskinator
card_category: Robotics & integration
status: Completed
card_image: /images/projects/deskinator/final-assembly-drawing.png
card_image_width: 1980
card_image_height: 1530
card_alt: Deskinator final assembly drawing with front, side, section, and isometric views
hero_image: /images/projects/deskinator/final-assembly-drawing.png
hero_width: 1980
hero_height: 1530
hero_alt: Final Deskinator assembly drawing with front, side, section, and isometric views
hero_caption: Final assembly drawing showing the fan, filter, battery, electronics, and nozzle inside the chassis.
excerpt: I wrote the Arduino navigation firmware and helped assemble and redesign an autonomous desk-cleaning robot.
result: 'Documented suction trial: 72 of 95 rice grains collected'
tldr_role: Firmware and integration contributor
tldr_contribution: Navigation firmware, system assembly, and mechanical and electrical troubleshooting.
tools: Arduino C++ · Sensors · CAD · Prototype testing
---

## Objective

Our EK210 team set out to build a robot that could clean a 4 ft × 4 ft desk without driving over an edge. I wrote the Arduino C++ firmware for S-curve pathing, IR-triggered edge avoidance, and gesture activation. I also helped assemble the system and troubleshoot the mechanical and electrical subsystems.

## Approach

- **Drive:** The original motors struggled under the robot's weight, so we moved to 12 V N20 encoder motors.
- **Vacuum:** We replaced the original fan after early pickup tests showed that it could not collect rice reliably.
- **Filter:** When a shorter replacement filter was delayed, we built a perforated paper-cup-and-gauze substitute to keep the prototype moving.
- **Nozzle:** We narrowed the opening and angled it toward the desk to improve contact with debris.

{% include project-figure.html src="/images/projects/deskinator/prototype.jpg" alt="Deskinator prototype showing the red vacuum nozzle, wheel, fan, and housing" width="1600" height="1205" caption="The completed prototype used for our final presentation and pickup testing." %}

## Test / Results

The report records an early trial with about 24% pickup and a final trial with **72 of 95 rice grains collected, or 76%**, after the fan, filter, and nozzle changes. Our team placed in the top four of roughly 20 groups during the class demonstration.

The robot demonstrated edge avoidance and gesture activation, but neither behavior was fully repeatable. A better test plan would use timed runs across several debris patterns and record both pickup percentage and successful edge detections.

{% include project-figure.html src="/images/projects/deskinator/wiring.jpg" alt="Team wiring diagram connecting Arduino Mega, gesture and IR sensors, motor driver, batteries, and vacuum fan" width="1600" height="1053" caption="System wiring diagram for the Arduino Mega, sensors, motor driver, batteries, and vacuum fan." %}

{% include project-figure.html src="/images/projects/deskinator/cad.jpg" alt="CAD assembly of the desk-cleaning robot showing the nozzle and fan housing" width="1234" height="946" caption="Team CAD assembly from the final presentation." %}
