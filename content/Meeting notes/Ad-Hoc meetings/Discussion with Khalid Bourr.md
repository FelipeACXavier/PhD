---
title: 2024-11-25 - Discussion with Khalid Bourr
date: 2024-11-25
image: red_mountain.jpg
position: 50% 20%
tags:
  - Meeting-notes
  - Year-1
  - Ad-Hoc
---

# Goals / agenda

- Discuss with Dr Bourr, author of [Bourr  et al. 2023](https://pubblicazioni.unicam.it/handle/11581/484448),  future possibilities regarding our project.
	- Has the project continued? If not, why not?
	- BPMN is only used for defining missions, did you ever look into also using it to define the integration of ROS nodes?

# Discussion notes

- **Has the project continued? If not, why not?**
	- The project did not continue, Dr Bourr is now doing his postdoc in code mobility

- **BPMN is only used for defining missions, did you ever look into also using it to define the integration of ROS nodes?**
	- x-klaim is not for coordination -> No coordinator is used.
	- x-klaim is only used externally, which means that the user still needs to know two distinct languages to be able to fully develop a robotic mission.
	- Nonetheless, Dr Bourr mentioned that using x-klaim to define the internal communication of the ROS nodes should be possible (Is that ideal though?)

- They are now working on code mobility -> share of missions.
- x-klaim does not directly support formal verification, but it can be extended with it
	- It was marked as a future work in the doctoral thesis but it was never continued
	- Have a look into moonlight ([Bartocci  et al. 2021](http://arxiv.org/abs/2104.14333))
- Nothing explicit about architecture. 
- x-klaim creates a shared space, which is essentially a cloud, which is then used to share the states of the individual robots. Through the generated ROS bridges, each robot can synchronize with one another and execute a mission.
	- The mission themselves are defined with the x-claim notation due to "ease of use".
- Complaints about setting up the models and starting up simulations. <- <span style="color:rgb(94, 135, 201)">(Could we support this?)</span>
- What aspect do we want to tackle? Once that is clearer, Dr Bourr is open for cooperation. l
 
