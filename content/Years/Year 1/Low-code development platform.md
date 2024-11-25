---
title: Low-code development platform
date: 2024-11-22
description: Initial thoughts regarding the low-code development platform
draft: false
image: /static/background/wave.jpg
position: 50% 50%
tags: 
  - Year-1
---

We are looking for a tool that is able to support the development of autonomous mobile vehicles. I (and we, I hope) want to use this initial experiment as a proof-of-concept for a more generic platform that is capable of aiding in the development of embedded systems as a whole. In the development life-cycle there are four main tasks:

1. Hardware setup
2. Deployment
3. Programming
4. Maintenance

Ideally, we would use a single tool to support all of these. Such a tool would not limit the user to a single role, but allow an overview of the system through the use of the four viewpoints. If we take this into account, we would then have four view points of the entire development process which could then be specialised per task. For example, once it is time to deploy the application, the different concerns related to deployment are combined into that single view.

<div class="caption-img-container">
  <div class="caption-img">
    <img src=/static/images/four_views.png/>
    <figcaption> <a href="https://linkinghub.elsevier.com/retrieve/pii/S0164121206001634">Hofmeister  et al. 2007</a></figcaption>
  </div>
</div>
