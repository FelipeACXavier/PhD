---
title: General paper reviews
date: 2024-11-04
description: Reviews of several generic papers
draft: false
image: wave.jpg
position: 50% 50%
tags:
---

## Generating customized low-code development platforms for digital twins (Dalibor et al. 2022)

### Summary

The authors utilize their DT architecture and the MontiGen framework, based on the MontiCore meta-language, to create a low-code development platform for digital twins. The approach is similar to that proposed by MetaEdit+. MontiGen is used to generate the LCDP focused on the different aspects of DTs, which is then used by DT engineers to create the DTs. The complete process goes as follows:

> [!quote]
> 1. the low-code development platform engineer creates the LCDP model-driven  
> 2. the digital twin designer uses the LCDP to configure the digital twin to be generated  
> 3. the domain expert uses the digital twin to observe and control the CPPS.  

The paper has the potential to highly simplify the development of DTs through the use of low-code, as well as the usage of monitoring of these systems.

### Positive aspects

- The paper is well written, the background information is easy to follow and it is easier to grasp the whole concept.
- The selected figures are very useful and help understand the explained concepts .

### Gaps, contradictions, inconsistencies

### Extra

- Look into MontiCore (used to define the syntax of the used DSLs), MontiGen (used to create and reconfigure the DTs using low-code techniques), and MontiArc (used to describe their DT architecture)

  <div class="caption-img-container">
    <div class="caption-img">
      <img src=/static/images/dt_architecture_monticore.png />
      <figcaption>Digital twin base architecture in MontiArc</figcaption>
    </div>
  </div>
    
  Below is a similar architecture combined with the digital twin cockpit:

  <div class="caption-img-container">
    <div class="caption-img">
      <img src=/static/images/dt_cockpit.png />
      <figcaption>Towards a Model-Driven Architecture for Interactive Digital Twin Cockpits <a href="http://link.springer.com/10.1007/978-3-030-62522-1_28" target="_blank">Dobbie et al. 2020</a></figcaption>
    </div>
  </div>
    
---

## Trustworthy ROS Software Architecture for Autonomous Drones Missions: From RoboChart Modelling to ROS Implementation (Shaukat et al. 2024)

### Summary

The authors propose an architecture for drones that enables formal verification. This is interesting because they use it with ROS, a long-existing robotics framework, and therfore must work with its constraints. They suggest the decoupling from hardware specifics, and software components which allows per-component verification within ROS. For the formal verification, they use Robochart ([Miyazawa et al. 2019](https://doi.org/10.1007/s10270-018-00710-z)). The authors propose

### Positive aspects

- The related work and background information is well explained.
- A reference architecture for robots, especially those that use ROS is a very important research, I believe. Formal verification of such systems would greatly reduce small errors.
- The mapping between ROS and RoboChart concepts is clear and understandable, even for someone who never used RoboChart.

### Gaps, contradictions, inconsistencies

- I think that a bit more time could have been spend explaining the verification of the architecture. As of now, it is not entirely clear how it differs from more complex ROS systems. Not every robot uses only the pub-sub pattern, that is why actionlib was invented for example.
- It was clear to me whether formal verification was done at the system level or only within the different components.

---
## Systematic Language Extension Mechanisms for the MontiArc Architecture Description Lang:uage (Butting et al. 2017)

### Summary

The authors present a method for extending MontiArch for specific architecture domains. Their method alleviates the need for developing a specific ADL from scratch and fosters the successful application of these ADLs in real-world scenarios.

### Positive aspects


### Gaps, contradictions, inconsistencies

  

---
## Software architecture in practice (Bass et al. 2022)

### Summary

<div class="caption-img-container">
  <div class="caption-img">
    <img src=/static/images/architecture_design_activity.png />
    <span>Overview of the architecture design activity</span>
  </div>
</div>

### Positive aspects

### Gaps, contradictions, inconsistencies

---
