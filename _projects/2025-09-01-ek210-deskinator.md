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
project_group: engineering
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

The final concept combined two encoder motors, three downward-facing IR sensors, a gesture sensor, a centrifugal blower, a debris filter, and separate power paths for motion and control. The report framed safe movement and thorough cleaning as the two highest-priority objectives, followed by debris collection, compact size, battery life, noise, maintenance, and cost.

{% include project-figure.html src="/images/projects/deskinator/functional-flow.jpeg" alt="Functional flow diagram for the desk-cleaning robot showing energy, debris, and sensor information paths" width="2048" height="1024" caption="Functional decomposition from the final report. It separates the movement, vacuum, edge-detection, and completion functions before they converge in the prototype." %}

## Approach

- **Drive:** The original motors struggled under the robot's weight, so we moved to 12 V N20 encoder motors.
- **Vacuum:** We replaced the original fan after early pickup tests showed that it could not collect rice reliably.
- **Filter:** When a shorter replacement filter was delayed, we built a perforated paper-cup-and-gauze substitute to keep the prototype moving.
- **Nozzle:** We narrowed the opening and angled it toward the desk to improve contact with debris.

The motor and fan changes were coupled. The 12 V battery increased the load carried by the drive system, which exposed the original motors' torque limit. The stronger blower improved pickup but also dominated power consumption. The filter and nozzle changes then addressed the airflow losses between the desk surface and the fan.

{% include project-figure.html src="/images/projects/deskinator/prototype.jpg" alt="Deskinator prototype showing the red vacuum nozzle, wheel, fan, and housing" width="1600" height="1205" caption="The completed prototype used for our final presentation and pickup testing." %}

## Firmware and edge response

The firmware waits for a recognized gesture, enables the fan and motor driver, and runs a timed cleaning routine. In the main loop, it reads the left, center, and right edge sensors before issuing the next motion command. A triggered sensor stops both motors before selecting a pivot direction; encoder counts control the turn rather than relying on a fixed delay alone.

{% include project-figure.html src="/images/projects/deskinator/firmware-flow.png" alt="Flowchart of the robot firmware from gesture initialization through edge detection, pivot turns, and timed shutdown" width="1435" height="2048" caption="Firmware flow from the final submission. The three edge-sensor branches stop the drive before selecting an encoder-controlled pivot." %}

## Test / Results

The report records an early trial with about 24% pickup and a final trial with **72 of 95 rice grains collected, or 76%**, after the fan, filter, and nozzle changes. Our team placed in the top four of roughly 20 groups during the class demonstration.

The robot demonstrated edge avoidance and gesture activation, but neither behavior was fully repeatable. A better test plan would use timed runs across several debris patterns and record both pickup percentage and successful edge detections.

The report also records two control limitations. Fast hand swipes were easier for the gesture sensor to miss, and the near/far gestures were less reliable than the directional gestures. Motor commands below roughly 100 stalled the drive, while higher speeds reduced the time available for the edge sensors to stop the chassis. We used a command near 120 as the workable middle ground during testing.

{% include project-figure.html src="/images/projects/deskinator/wiring.jpg" alt="Team wiring diagram connecting Arduino Mega, gesture and IR sensors, motor driver, batteries, and vacuum fan" width="1600" height="1053" caption="System wiring diagram for the Arduino Mega, sensors, motor driver, batteries, and vacuum fan." %}

{% include project-figure.html src="/images/projects/deskinator/cad.jpg" alt="CAD assembly of the desk-cleaning robot showing the nozzle and fan housing" width="1234" height="946" caption="Team CAD assembly from the final presentation." %}
