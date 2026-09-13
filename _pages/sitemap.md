---
layout: engineering
title: "Sitemap"
permalink: /sitemap/
author_profile: false
---

- [Home]({{ '/' | relative_url }})
- [Projects]({{ '/projects/' | relative_url }})
- [Experience]({{ '/cv/' | relative_url }})

## Project case studies

{% assign ordered_projects = site.projects | where_exp: 'project', 'project.feature_order != nil' | sort: 'feature_order' %}
{% for project in ordered_projects %}
- [{{ project.title }}]({{ project.url | relative_url }})
{% endfor %}
