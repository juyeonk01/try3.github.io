---
title: News
classes: newspage
layout: archive
classes: news
author_profile: false
---

{% assign news_items = site.news | sort: 'date' | reverse %}
{% assign current_year = "" %}

<ul class="news-list">
  {% for item in news_items %}
    {% assign year = item.date | date: "%Y" %}
    {% if year != current_year %}
      <h2 class="news-year">{{ year }}</h2>
      {% assign current_year = year %}
    {% endif %}
    <li class="news-row">
      <span class="news-date">{{ item.date | date: "%b %d" }}</span>
      <span class="news-entry">{{ item.content | markdownify | strip }}</span>
    </li>
  {% endfor %}
</ul>