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
            <img class="img-circle pull-left twenty-margin-right" 
                 src="https://avatars2.githubusercontent.com/u/15636167?v=3&s=160"
                 alt="Isaac Dozier Profile Image"/>
            <p>
              Skills include JavaScript, Node.js, AJAX, PHP, 
              C9 Cloud integration, Github version control and other web technologies.
              <br />
              <br /> 
              My free-time is filled with hiking, seasonal foraging and camping.
              I really like gardening, building applications that are scalable, 
              and playing fetch with my dog.
            </p>
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
    
    <div class="col-xs-12 col-md-6">
     
    </div>
  </div>
</div>

### Thank You

Browse my [Github](https://github.com/isaacdozier) repositories .. 
Check out my [Linkedin](https://www.linkedin.com/in/isaac-dozier-14a6b044) profile .. 
Watch my activity on the [Stack](http://stackoverflow.com/users/4566193/isaac-dozier) network .. 
