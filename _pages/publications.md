---
title: Publications
layout: single
---

<!-- <p><em>*: equally contributing co-first authors</em></p> -->

{%- assign all = site.data.publications -%}

{%- comment -%} Submitted section {%- endcomment -%}
<h3 class="pub-section">Submitted / Preprint</h3>
{%- assign subs = all | where: "status", "submitted" -%}
{%- for p in subs -%}
<p class="pub-item">
  {{ p.authors }} ({{ p.year }}{% if p.status == "submitted" %}+{% endif %}). 
  <span class="pub-title">{{ p.title }}</span>
  {{ p.venue }}
  {%- if p.links.arxiv and p.links.arxiv != "" %} [<a href="{{ p.links.arxiv }}">arXiv</a>]{% endif -%}
  {%- if p.links.paper and p.links.paper != "" %} [<a href="{{ p.links.paper }}">paper</a>]{% endif -%}
</p>
{%- endfor -%}

{%- comment -%} Published section {%- endcomment -%}
<h3 class="pub-section">Publications</h3>
{%- assign pubs = all | where: "status", "published" -%}
{%- for p in pubs -%}
<p class="pub-item">
  {{ p.authors }} ({{ p.year }}). 
  <span class="pub-title">{{ p.title }}</span>
  {{ p.venue }}
  {%- if p.links.arxiv and p.links.arxiv != "" %} [<a href="{{ p.links.arxiv }}">arXiv</a>]{% endif -%}
  {%- if p.links.paper and p.links.paper != "" %} [<a href="{{ p.links.paper }}">paper</a>]{% endif -%}
</p>
{%- endfor -%}
