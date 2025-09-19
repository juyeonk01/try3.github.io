---
title: People
layout: single
---

{% assign role_keys  = "pi|postdoc|phd|ms" | split: "|" %}
{% assign role_titles = "Professor|Postdoctoral Fellow|Ph.D. Students|M.S. Students" | split: "|" %}

{% for i in (0..3) %}
{% assign role = role_keys[i] %}
{% assign title = role_titles[i] %}
{% assign members = site.people | where: "role", role | sort: "order" %}

{% if members.size > 0 %}
<h2 class="people-title">{{ title }}</h2>
<div class="people-grid{% if members.size == 2 %} two-people{% endif %}">
  {% for p in members %}
  <div class="person-card">
    <a class="person-photo" href="{{ p.url | relative_url }}">
      <img src="{{ p.photo | relative_url }}" alt="{{ p.name }}">
    </a>
    <div class="person-name">
      <a href="{{ p.url | relative_url }}">{{ p.name }}</a>
    </div>
    <!-- <div class="person-meta">
      {% case role %}
        {% when "pi"  %} Professor
        {% when "postdoc"  %} Postdoc
        {% when "phd" %} Ph.D. Student
        {% when "ms"  %} M.S. Student
      {% endcase %}
      ({{ p.joined }}~)
    </div> -->
  </div>
  {% endfor %}
</div>
{% endif %}
{% endfor %}


<h2 class="people-title">Alumni</h2>

<div class="alumni-list">
  <ul>
    <li>Junho Jang, M.S. (2025), Bank of Korea</li>
    <li>Sangjin Lee, M.S. (2025), Ph.D. Student at Ghent University</li>
    <li>Jaehyuk Jang, M.S. (2025), Ph.D. Student at Rutgers University</li>
    <li>Suhwan Bong, M.S. (2024), Ph.D. Student at Harvard University</li>
  </ul>
</div>

<!-- <div class="alumni-wrap">
  <table class="alumni-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Degree</th>
        <th>Current Position</th>
      </tr>
    </thead>
    <tbody>
      {% for alum in site.data.alumni %}
      <tr>
        <td>{{ alum.name }}</td>
        <td>{{ alum.degree }}</td>
        <td>{{ alum.position }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div> -->




