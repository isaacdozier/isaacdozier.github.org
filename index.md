---
layout: page
title: IsaacDozier.com | 22R Videos, Coding, Mushrooms & more...
tagline: YouTube Projects, Internet Tools, Outdoor Stuff
description: YouTube Projects, Internet Tools, Outdoor Stuff, 99.27% javascript, ruby & jekyll, hiking for hidden mushroom patches, scalable applications are nice
---
{% include JB/setup %}

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="row">
            <div class="collapse navbar-collapse navbar-ex1-collapse">
              <img class="img-circle pull-left twenty-margin-right" 
                 src="https://avatars2.githubusercontent.com/u/15636167?v=3&s=160"
                 alt="Isaac Dozier Profile Image"/>
              <p>
                99.27% javascript, ruby & jekyll <br />
                hiking for hidden mushroom patches<br />
                scalable applications are nice<br />
                <br/>
              <a target="_blank" href="{{ BASE_PATH }}/solve-X/">
                <h4>[ Solve X - Algebra Game ]</h4>
              </a>
              <a target="_blank" href="https://www.youtube.com/channel/UCZf1_WYi6mudZmfyVOcjnxQ">
                <h4>[ My YouTube Channel ]</h4>
              </a>
              </p>
            </div>
          </div>
          <div class="row list-group">
            {% for post in site.posts %}
              <a href="{{ BASE_PATH }}{{ post.url }}" class="list-group-item">
                <h4 class="list-group-item-heading">{{ post.title }}</h4>
                <p class="list-group-item-text">
                  <span>{{ post.date | date_to_string }}</span> &raquo; 
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
