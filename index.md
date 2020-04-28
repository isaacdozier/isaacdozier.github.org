---
layout: page
title: IsaacDozier.com | 22R Videos, Coding, Mushrooms & more...
tagline: YouTube Projects, Internet Tools, Outdoor Stuff
description: YouTube Projects, Internet Tools, Outdoor Stuff, 99.27% javascript, ruby & jekyll, hiking for hidden mushroom patches, scalable applications are nice
---
{% include JB/setup %}

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-6 col-lg-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="row">
            <div class="collapse navbar-collapse navbar-ex1-collapse">
              <img class="img-circle pull-left twenty-margin-right" 
                 src="https://avatars2.githubusercontent.com/u/15636167?v=3&s=160"
                 alt="Isaac Dozier Profile Image"
                 height="112px"/>
              <p>
                99.27% javascript, ruby & jekyll <br />
                hiking for hidden mushroom patches<br />
                scalable applications are nice<br />
                <br/>
              </p>
            </div>
          </div>
          <div class="row list-group">
            {% for post in site.posts %}
              <a href="{{ BASE_PATH }}{{ post.url }}" class="list-group-item">
                <h4 class="list-group-item-heading">{{ post.title }}</h4>
                <span class="cat_home">{{ post.category }}</span>
                <p class="list-group-item-text">
                  <i>{{ post.date | date_to_string }}</i> &raquo; 
                  {{ post.description }}
                </p>
              </a>
            {% endfor %}    
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
