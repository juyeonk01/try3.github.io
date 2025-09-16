---
layout: single
classes: homepage
title: Causal Inference Lab
permalink: /
author_profile: false
entries_layout: list
---

![Causal](/assets/images/causal.png){: .align-center .causal-image}




## To Do

* Home
  * Brief introduction of our lab
  * Simple research info
* Research
  * Add
* People
  * Professor
* Seminar
  * 2024 2 reviews
  * Symposium
* Publications
  * Professor


<div class="home-news">
  <div class="home-news-left">
    <h2>News</h2>
    <a class="home-news-more" href="{{ '/news/' | relative_url }}">View all →</a>
  </div>

  <div class="home-news-right">
    <ul class="news-list">
      {% assign recent_news = site.news | sort: 'date' | reverse | slice: 0, 5 %}
      {% for item in recent_news %}
        <li class="news-row">
          <span class="news-date">{{ item.date | date: "%b %d" }}</span>
          <span class="news-entry">{{ item.content | markdownify | strip }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>
