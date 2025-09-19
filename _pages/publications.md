---
title: Publications
layout: single
---

<p><em>*: equally contributing co-first authors</em></p>

{%- assign all = site.data.publications -%}



{%- comment -%} Published section {%- endcomment -%}

<h3 class="pub-section">Published</h3>

<!-- {%- assign pubs = all | where: "status", "published" -%}
{%- for p in pubs -%}
<p class="pub-item">
  {{ p.authors }} ({{ p.year }}). 
  <span class="pub-title">{{ p.title }}</span>
  {{ p.venue }}
  {%- if p.links.arxiv and p.links.arxiv != "" %} [<a href="{{ p.links.arxiv }}">arXiv</a>]{% endif -%}
  {%- if p.links.paper and p.links.paper != "" %} [<a href="{{ p.links.paper }}">paper</a>]{% endif -%}
</p>
{%- endfor -%} -->

{%- assign pubs = site.data.publications | where: "status", "published" -%}
{%- assign pubs_by_year = pubs | group_by: "year" -%}
{%- assign sorted_groups = pubs_by_year | sort: "name" | reverse -%}

{%- assign before_printed = false -%}

{%- for group in sorted_groups -%}
  {%- assign y = group.name | plus: 0 -%}

  {%- if y < 2026 -%}
    {%- if before_printed == false -%}
      <h4 class="pub-year">-2025</h4>
      {%- assign before_printed = true -%}
    {%- endif -%}
  {%- else -%}
    <h4 class="pub-year">{{ y }}</h4>
  {%- endif -%}

  {%- for p in group.items -%}
    <p class="pub-item">
      {{ p.authors }} ({{ p.year }}). 
      <span class="pub-title">{{ p.title }}</span>
      {{ p.venue }}
      <!-- {%- if p.links.arxiv and p.links.arxiv != "" %} [<a href="{{ p.links.arxiv }}">arXiv</a>]{% endif -%}
      {%- if p.links.paper and p.links.paper != "" %} [<a href="{{ p.links.paper }}">paper</a>]{% endif -%} -->
      {%- if p.links.arxiv and p.links.arxiv != "" %}
        <a href="{{ p.links.arxiv }}" target="_blank" class="pub-link">
          <img src="{{ '/assets/icons/arxiv.svg' | relative_url }}" alt="arXiv" class="pub-icon">
        </a>
      {%- endif -%}
      {%- if p.links.paper and p.links.paper != "" %}
        <a href="{{ p.links.paper }}" target="_blank" class="pub-link">
          <img src="{{ '/assets/icons/paper4.svg' | relative_url }}" alt="Paper" class="pub-icon">
        </a>
      {%- endif -%}
    </p>
  {%- endfor -%}

{%- endfor -%}


{%- comment -%} Submitted section {%- endcomment -%}

<h3 class="pub-section">Submitted</h3>
{%- assign subs = all | where: "status", "submitted" -%}
{%- for p in subs -%}
<p class="pub-item">
  {{ p.authors }} ({{ p.year }}{% if p.status == "submitted" %}+{% endif %}). 
  <span class="pub-title">{{ p.title }}</span>
  {{ p.venue }}
  <!-- {%- if p.links.arxiv and p.links.arxiv != "" %} [<a href="{{ p.links.arxiv }}">arXiv</a>]{% endif -%}
  {%- if p.links.paper and p.links.paper != "" %} [<a href="{{ p.links.paper }}">paper</a>]{% endif -%} -->
  {%- if p.links.arxiv and p.links.arxiv != "" %}
    <a href="{{ p.links.arxiv }}" target="_blank" class="pub-link">
      <img src="{{ '/assets/icons/arxiv.svg' | relative_url }}" alt="arXiv" class="pub-icon">
    </a>
  {%- endif -%}
  {%- if p.links.paper and p.links.paper != "" %}
    <a href="{{ p.links.paper }}" target="_blank" class="pub-link">
      <img src="{{ '/assets/icons/paper3.svg' | relative_url }}" alt="Paper" class="pub-icon">
    </a>
  {%- endif -%}
  </p>
{%- endfor -%}