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
result: 'Hand-held suction test: 72 of 95 rice grains collected (76%)'
tldr_role: Firmware and integration contributor
tldr_contribution: Navigation firmware, system assembly, and mechanical and electrical troubleshooting.
tools: Arduino C++ · Sensors · CAD · Prototype testing
---

## Objective

Our EK210 team set out to build a robot that could clean a 4 ft × 4 ft desk within two minutes while avoiding its edges. I wrote the Arduino C++ firmware for S-curve pathing, IR-triggered edge avoidance, and gesture activation. I also helped assemble the robot and troubleshoot suction with teammates.

The assignment called for a custom-built cleaning mechanism and a mobile platform. Our targets included removing more than half the debris, operating without intervention, and signaling completion with an LED and buzzer. Safe movement and cleaning effectiveness led the team's ranked objectives, followed by debris collection, compact size, battery life, maintenance, and cost.

The final concept combined two encoder motors, three downward-facing IR sensors, a gesture sensor, a fan-driven vacuum, a debris filter, and separate power paths for motion and control.

{% include project-figure.html src="/images/projects/deskinator/functional-flow.jpeg" alt="Functional flow diagram for the desk-cleaning robot showing energy, debris, and sensor information paths" width="2048" height="1024" caption="Functional decomposition from the final report. It separates the movement, vacuum, edge-detection, and completion functions before they converge in the prototype." %}

## Mechanical design and fabrication

The chassis used an MDF lower housing for the electronics, an acrylic upper housing, and cardboard side panels. The team combined those panels with 3D-printed motor mounts, structural standoffs, a funnel, and a vacuum nozzle. The assembly drawing records a 1,500 g weight.

The lower housing carried the drive and control hardware. Standoffs supported the upper housing and fan assembly, while the funnel connected the nozzle to the fan inlet. This arrangement made the air path, fan supports, motor mounts, and sensor positions part of the same packaging problem.

{% include project-figure.html src="/images/projects/deskinator/cad.jpg" alt="CAD assembly of the desk-cleaning robot showing the nozzle and fan housing" width="1234" height="946" caption="Team CAD assembly showing the housing, fan opening, front nozzle, and wheel layout." %}

## Approach

- **Drive:** The original 6 V wheel motors struggled under the load of the roughly 1.5 kg chassis. We replaced them with 12 V N20 encoder motors rated at 300 RPM.
- **Vacuum:** The original fan picked up paper but struggled with rice. We selected a replacement with the same 120 × 38 mm envelope and higher listed ratings, increasing from 3,000 RPM and 116 CFM to 5,300 RPM and 230 CFM. Those values describe the fan specifications.
- **Filter:** When a shorter replacement filter was delayed, we built a perforated paper-cup-and-gauze substitute to keep the prototype moving.
- **Nozzle:** We narrowed the opening and angled it down toward the desk to bring the intake closer to the debris. The nozzle required sanding and reprinting after mounting dimensions affected its fit.

The motor and fan changes were coupled. The 12 V battery increased the load carried by the drive system, which exposed the original motors' torque limit. The higher-power fan improved pickup but also dominated the power budget. Filter resistance and nozzle position then affected the performance of the assembled air path.

{% include project-figure.html src="/images/projects/deskinator/prototype.jpg" alt="Deskinator prototype showing the red vacuum nozzle, wheel, fan, and housing" width="1600" height="1205" caption="The completed prototype used for our final presentation and pickup testing." %}

## Firmware and edge response

The firmware initializes the motor pins, encoder interrupts, and gesture sensor, then waits for a recognized directional gesture. A successful start sets the routine timer, enables the motor driver and LED, and sounds the buzzer.

In the main loop, it checks elapsed time and reads the left, front, and right edge sensors before issuing a motion command. An edge detection stops both motors before a pivot. The front and left branches turn right, and the right branch turns left. Each pivot resets the encoder counts and runs one wheel until its target count is reached. The routine stops the motors and fan after two minutes and signals completion with a longer beep.

{% include project-figure.html src="/images/projects/deskinator/firmware-flow.png" alt="Flowchart of the robot firmware from gesture initialization through edge detection, pivot turns, and timed shutdown" width="1435" height="2048" caption="Firmware flow from the final submission. The three edge-sensor branches stop the drive before selecting an encoder-controlled pivot." %}

## Sensor testing

The team tested the IR proximity sensor against an object at fixed distances and tested the gesture sensor with slow up/down and left/right hand swipes. Each listed distance used ten attempts. The results below reproduce Tables 5 and 6 of the final report. A dash marks an untested distance for that sensor.

<p class="project-table-hint" aria-hidden="true">Swipe to view all columns</p>
<div class="project-table-region" role="region" aria-label="Deskinator sensor bench-test results" tabindex="0" markdown="1">

| Distance from sensor | IR detection rate | Wrong gestures out of 10 |
| --- | --- | --- |
| 0 cm | 100% | 0 |
| 5 cm | 100% | 0 |
| 10 cm | 100% | 1 |
| 15 cm | 100% | 0 |
| 18 cm | 100% | — |
| 19 cm | 50%, flickering | — |
| 20 cm | 0% | 0 |
| 25 cm | — | 3 |
| 30 cm | — | 10 |

</div>

Gesture recognition depended on how the user moved. Fast swipes were frequently missed, and near/far gestures often returned an incorrect gesture or no result. The firmware used directional gestures for starting the routine.

The IR bench results helped establish a useful sensing distance. During driving tests, motor commands below roughly 100 stalled the drive, while commands above 140 increased the chance of reaching an edge before the sensors could react. We used a command near 120 during testing. These values are controller commands.

## Power and parts budget

A 9 V supply powered the Arduino, and a separate 12 V battery supplied the fan and drive system. A buck converter reduced the battery voltage for the motor driver. Separating the supplies let the team package the controller, sensors, motor driver, and high-current fan around their different electrical needs.

The power budget used 12 V and 1.95 A for the fan, giving a 23.4 W estimate. Motor current readings came from unloaded bench tests, with a large uncertainty allowance in the report. Battery-life calculations therefore remained estimates pending loaded, full-system runtime testing.

The bill of materials totaled **$144.72 against a $200 budget**, leaving $55.28. Several stockroom components and printed parts were entered at zero cost, so the total reflects the report's sourcing assumptions.

{% include project-figure.html src="/images/projects/deskinator/wiring.jpg" alt="Team wiring diagram connecting Arduino Mega, gesture and IR sensors, motor driver, batteries, and vacuum fan" width="1600" height="1053" caption="System wiring diagram for the Arduino Mega, sensors, motor driver, batteries, and vacuum fan." %}

## Test / Results

The appendix records a **hand-held suction test with 72 of 95 rice grains collected, or 76%**. Twenty-three grains remained. The operator held the robot during this test, and nozzle angle and clearance affected pickup. The report also describes a separate uncounted trial in which lifting the nozzle above the surface produced no pickup.

Our team placed in the top four of roughly 20 groups during the class demonstration. The robot demonstrated edge avoidance and gesture activation, with consistency limited by swipe speed, drive speed, and sensor response.

The two-minute timer implemented the intended cleaning duration. The report's informal test setups and minimal repeat trials leave full-desk coverage, completion time, and repeatable pickup performance open for further measurement.

## Lessons and next iteration

Mounting clearances and assembly durability caused late rework. Parts loosened or broke during fabrication and assembly, and the nozzle needed sanding and reprinting to accommodate its mounts. A next iteration would check the complete mounting stack-up before printing and secure the fan and housing early enough for repeated integration tests.

For testing, I would fix the nozzle clearance, use counted debris patterns, and repeat runs at the same drive command. Logging pickup fraction, edge detections, falls, and elapsed time together would connect the sensor and suction bench results to the complete cleaning task.
