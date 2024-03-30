---
layout: default
---

# Blog Posts

{% for post in site.posts %}
  <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}