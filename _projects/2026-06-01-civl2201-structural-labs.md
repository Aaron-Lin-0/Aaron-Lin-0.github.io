---
layout: engineering
collection: projects
author_profile: false
share: false
title: Structural mechanics laboratory studies
permalink: /projects/civl2201-structural-labs/
kicker: Experimental mechanics · Completed
context: University of Sydney · CIVL2201 / ME305E equivalency · Study abroad · Spring 2026
summary: Laboratory studies of steel and concrete properties, followed by strain and deflection measurements on a cold-formed steel channel.
feature_order: 7
sort_date: "2026-06-01"
card_title: Structural mechanics laboratory studies
card_category: Materials & structures
status: Completed
project_group: laboratory
card_image: /images/projects/civl2201/deflection-results.png
card_image_width: 1800
card_image_height: 1366
card_alt: Load versus deflection plot for three dial gauge locations on a steel channel
hero_image: /images/projects/civl2201/deflection-results.png
hero_width: 1800
hero_height: 1366
hero_alt: Load versus deflection plot showing linear response at three locations on a steel channel
hero_caption: The channel stayed in its linear range through the loading sequence, with the largest deflection measured near midspan.
excerpt: I compared measured material and beam behavior with mechanics models during a structural mechanics course abroad.
result: 'Peak strain: 71.44 µε measured vs 72.63 µε calculated'
tldr_role: Laboratory student
tldr_contribution: Materials-property calculations and team-based bending, strain, and deflection analysis.
tools: Solid mechanics · Strain gauges · Dial gauges · SolidWorks · Data analysis
---

## Scope

I completed CIVL2201 Structural Mechanics at the University of Sydney as the study-abroad equivalent of ME305E. The laboratory work covered tensile and compression testing of structural materials, then bending, strain, and deflection measurements on a cold-formed steel channel.

## Material properties

The first study compared standard and high-strength steel in tension and concrete in compression.

The steel coupons were loaded in a 300 kN screw-driven test machine while an extensometer recorded elongation. We converted load and extension into engineering stress and strain, used the 0.2% proof-stress method for yield, and fit the initial elastic region for Young's modulus. The concrete cylinders were compressed in a 2000 kN test machine; because their response was nonlinear from early loading, we fit a localized initial region rather than treating the curve as perfectly elastic.

- **Mild steel:** 399 MPa yield strength, 502 MPa ultimate strength, 197 GPa elastic modulus, and 32.5% ductility.
- **High-strength steel:** 820 MPa yield strength, 923 MPa ultimate strength, 202 GPa elastic modulus, and 16.5% ductility.
- **Standard concrete:** 24 MPa ultimate strength, 18 GPa elastic modulus, and 0.295% ductility.
- **High-strength concrete:** 48 MPa ultimate strength, 40 GPa elastic modulus, and 0.255% ductility.

The high-strength variants carried more load but failed at lower strain. The steel grades had similar elastic moduli, while the higher-strength concrete was also stiffer.

{% include project-figure.html src="/images/projects/civl2201/concrete-specimen.png" alt="Dimensioned drawing of the cylindrical concrete compression specimen with the loaded faces identified" width="5100" height="3300" caption="Concrete compression specimen from the first laboratory report. Load was applied through the two circular faces." %}

## Curvature and strain

For the channel-section study, we calculated the centroid and second moment of area with both square and rounded corner models. The square-corner approximation produced **87,141 mm⁴**, 3.25% above the rounded-corner value of **84,395 mm⁴**.

At the largest applied load, the strain gauge measured **71.44 µε** and the curvature calculation predicted **72.63 µε**, a 1.63% difference. The result supported the plane-sections relationship within the accuracy of the geometry and instrumentation.

{% include project-figure.html src="/images/projects/civl2201/strain-comparison.png" alt="Measured strain plotted against strain calculated from curvature for a steel channel" width="1800" height="1602" caption="The previous cover now accompanies the strain analysis. Measured and curvature-derived strain remained close across the applied load range." %}

The direct gauge reading is the better estimate of local strain because the curvature result compounds dial-gauge spacing, centroid location, and second-moment calculations. The agreement improved at higher loads, where the signal was larger relative to zeroing and instrument resolution.

## Deflection

At **222.5 N**, the measured deflection reached **1.38 mm** at hook 1 and **1.99 mm** near midspan at hook 2. The report's beam model predicted the measured values within about 10% across the load steps. Support compliance, rounded corners, gauge location, and the idealized boundary conditions all contributed to the remaining difference.

The loading and unloading traces were linear and returned near zero, so the channel remained within its elastic range. The largest reported percentage differences occurred at the lowest load step, where small dial-gauge offsets made up a larger fraction of the measurement. At maximum load, the comparison was less sensitive to those offsets.

## What connected the studies

The material tests supplied the stress-strain behavior used in the beam studies. The channel experiment then moved from material response to structural response: geometry set the second moment of area, load and support locations set the bending moment, and the dial gauges and strain gauge provided two independent paths back to curvature and strain. The square-corner channel model was easier to calculate, but its **87,141 mm⁴** second moment of area was 3.25% above the rounded-corner result of **84,395 mm⁴**.

## My contribution

The laboratory measurements were gathered with classmates. I used the shared measurements in my course calculations and reports; the bending-channel documentation also includes work prepared by lab partners. I present the measurements and conclusions as team evidence rather than claiming sole ownership.
