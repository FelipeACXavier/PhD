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

# Overview

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

## Generic embedded systems architecture
 
 We reuse some of the insights gained when exploring a possible embedded systems schema, see [[content/Years/Year 1/ES Schema|ES Schema]] and [[content/Papers/Paper idea - 1|Paper idea - 1]]. Basically, at the top most view, we have a layered architecture that defines the different concerns of the system. Each layer can then have its more specific architecture, a brief example is shown below.

![[content/Diagrams/LCDP_arch.pdf#height=auto]]

Since ROS handles the entire brokerage and internal communication, we only need to focus on developing, connecting, and running the individual nodes. Thus, we need a DSL to

- describe the connections between the internal nodes. <span style="color:rgb(0, 176, 240)">(can be generalised)</span>
- describe the communication with the low-level sensors and actuators. <span style="color:rgb(0, 176, 240)">(can be generalised)</span>
- describe and handle missions.
- describe, synchronise, and handle multi-robotic systems.

These DSLs are essentially a representation of the underlying system. I want to create a translation that allows us to go from this representation to any type of low-code visualization. We use a generic underlying representation which simplifies our lives and does not require us to use/know multiple technologies. 

## Layer overview

In this section, we go over my expectations towards the layers mentioned in the diagram above.
### Multirobot controller

[Bourr  et al. 2023](https://pubblicazioni.unicam.it/handle/11581/484448) shows how x-klaim can be used for this, I still need to look further into it but currently, this is the task with the least priority.

### Mission controller

This component deals with coordinating missions, splitting sub-tasks and similar activities.
Based on my preliminary research, this seem like the main focus of the literature.
I think this is a very interesting area, but I would leave it for later and try to reuse as much as possible from what is already out there.
### Internal controller

Another big focus in the literature, this component is responsible for the internal coordination of the robot. 
### Broker

What I call broker is a component responsible for replaying messages from and to the hardware components.
### Sensors and actuators

Finally, the lowest layer is the one responsible for interacting with the separate sensors and actuators.
