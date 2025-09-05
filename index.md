---
layout: single
classes: homepage
title: Causal Inference Lab
permalink: /
author_profile: false
entries_layout: list
---

![Causal](/assets/images/causal.png){: .align-center .causal-image}


Marshall Bruce Mathers III (born October 17, 1972)—otherwise known as Eminem—is a legendary hip-hop icon who started as an underground battle rapper in Detroit, Michigan. He developed a career full of controversy, wild swings, and some of the most noteworthy bars in the history of the genre.


## Research interests

TODO



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
