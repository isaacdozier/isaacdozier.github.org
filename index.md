---
layout: page
title: Portfolio
tagline: Projects, Tools & Skills
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
                99% javaScript, ruby & jekyll <br />
                Hiking, yes<br /> 
                mushroom picking is a good day<br />
                scalable applications are cool<br />
                nothing beats playing fetch with my dog<br />
              <a target="_blank" href="{{ BASE_PATH }}/solve-X/">
                [ Solve X - Algebra Game ]
              </a><br/>
              <a target="_blank" href="https://www.youtube.com/channel/UCZf1_WYi6mudZmfyVOcjnxQ">
                [ My YouTube Channel ]
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
