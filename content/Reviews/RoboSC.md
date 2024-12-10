---
title: RoboSC
date: 2024-11-27
description: Description of roboSC
draft: false
image: wave.jpg
position: 50% 50%
tags:
  - DSL
  - Review
  - ROS
---

# RoboSC


# What is interesting for us?

Here we present the what we want from RoboSC and other similar languages. As discussed in [[content/Standalone notes/Low-code development platform|Low-code development platform]] we are interested in using roboSC for the controller level. It is better to reuse a language if possible than having to create a new one.

## What do we want to represent?

At the mission controller level, we would like to be able to represent the connections between components as well as their behavior. Connections can take three forms: 

- Publisher/subscriber
- Services
- Actions

In a visual format, this process would be defined as:

1. User defines a type of communication from the options.
2. A new block appears with the options for each block.
	- Name
	- Timing
3. Arrows can be dragged from and to the new block to define their relation to it. Are they publishers? Consumers?
4. The user can define the triggers and callbacks for that topic.

RoboSC allows us to define these but only in respect to the controller itself. Any extra communication between the components needs to be define at the component itself. Furthermore, the behavior is only defined at the controller level, the other components must be manually defined outside the DSL.

## What are the essential concepts?

- RoboSC provides a very nice modularity that is essential in robots and embedded systems. We would want to keep that.
- RoboSC allows for the formal verification of supervisory controllers, we would also like to keep such behaviour to guarantee correctness.

## What lacks in the underlying language?

- Limited options for data storage and data passing.
- Very limited component behavior definition. It is limited to the state machine and very simple communication steps.
- Limited to ROS concepts. (extend to [MIRO](http://users.isr.ist.utl.pt/~jseq/ResearchAtelier/misc/Miro%20-%20Middleware%20for%20Robots) or [The Player Project](https://playerproject.github.io))
- No formal proof of the correctness:
	- DSL -- Not proven -> CIF -- proven -> controller