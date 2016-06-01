---
layout: page
title: Portfolio
tagline: Projects, Tools & Skills
---
{% include JB/setup %}

#### Coding since 2013. 
My skills include JavaScript, Node.js, AJAX, PHP, 
database design, version control and other web technologies.

### These are some of my recent projects, tools and other goodies for you to browse.

## Thank You


<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


