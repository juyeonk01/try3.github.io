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
  * Image color
  * Brief introduction of our lab
  * Simple research info
  * Navigation bar - combine pages?
  * Mobile navigation bar changed
* Research
  * Edit keywords
  * Image?
  * Names?
  * Try different layouts: no card, small image to the left, no toggle
* Publications
  * ~~Add professor~~
  * ~~Add arXiv link / paper link~~
  * ~~Logo 미세조정~~
  * Add DOI
* People
  * Professor
  * ~~Better alumni table~~
* Seminar
  * 2024 2 reviews
  * Symposium
* Misc.
  * Remove space at the bottom
  * Copyright messgae
  * Contact info at the footer?
  * ~~Check hyperlinks of page titles~~



<div class="topics-grid">
  <div class="topic-card">Matching and Weighting</div>
  <div class="topic-card">Randomization Designs and Analysis</div>
  <div class="topic-card">Sensitivity Analysis</div>
</div>


<div class="topics-tags">
  <span class="tag" style="background:#D2E1D8; color:#607DBC;">Matching and Weighting</span>
  <span class="tag" style="background:#607DBC; color:#D2E1D8;">Randomization Designs</span>
  <span class="tag" style="background:#D2E1D8; color:#607DBC;">Sensitivity Analysis</span>
</div>


<div class="topics-tags">
  <span class="tag" style="background:#607DBC; color:#D2E1D8;">Matching and Weighting</span>
  <span class="tag" style="background:#607DBC; color:#D2E1D8;">Randomization Designs</span>
  <span class="tag" style="background:#607DBC; color:#D2E1D8;">Sensitivity Analysis</span>
</div>


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
