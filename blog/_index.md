---
layout: default
---

{% for post in site.posts %}
  <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
{% endfor %}