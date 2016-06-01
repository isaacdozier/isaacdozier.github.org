---
layout: page
title: Portfolio
tagline: Projects, Tools & Skills
---
{% include JB/setup %}



<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img class="img-responsive pull-right" src="https://avatars2.githubusercontent.com/u/15636167?v=3&s=80"/>
    </div>
    
    <div class="col-md-8 text-left">
      <span class="text-left">
        <h3>Coding since 2013</h3> 
        <p>My skills include JavaScript, Node.js, AJAX, PHP, 
        database design, version control and other web technologies.</p>
      </span>
    </div>
  </div>
</div>

### Goodies to browse:

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## Thank You
