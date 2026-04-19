---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: index
title: ""
classes: wide
---

{% include profile_card.html 
  name="Abisheak Jacob J"
  description="AI Analyst, building solutions in the retail space"
  image="/assets/images/Final%20-%20Abisheak%20Jacob%20J%20Photograph.jpg"
  img_width="120px"
  github=""
  linkedin=""
  twitter=""
  email=""
  website=""
%}


I am a Data Analytics Professional with 1.5 years of experience in managing complex digital and optimization projects, specializing in operations, supply chain, purchasing, and project management areas. Skilled in Data Profiling, Data Modelling (Dimensional and Relational), requirements gathering, risk analysis, and process optimization. Looking to leverage my experience in data analytics, visualization, and programming skills to contribute to data-driven decision making and digitalization initiatives. 

To know more about me check out [About me](/about). Read some of my favourite articles and projects below or go to [My Work](/mywork) or [My Writing](/mywritings) to see a categorized list.


## Experience

{% for item in site.data.experiences %}
  {% include experience_card.html %}
{% endfor %}

## Skills

{% include skills.html %}

## Education

{% for item in site.data.education %}
  {% include education_card.html %}
{% endfor %}

## Projects

## Blog

