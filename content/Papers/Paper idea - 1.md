---
title: Paper idea - 1
date: 2024-11-07
image: blue_mountain.jpg
position: 50% 30%
tags:
  - Papers
  - Year-1
---

# What do I want to achieve with this paper?

The software industry is facing a difficult dilemma. Programming languages are advancing towards higher-level abstractions, enabling complex programs to be written more productively. ([Sujeeth et al. 2014](https://dl.acm.org/doi/10.1145/2584665)) However, we still see a lack of tool related to this aspect in the domain of embedded systems [citation]. While tools such as MetaEdit+ and MontiCore provide a certain level of support to build software for embedded systems, a language designer is necessary to tailor each workbench for the specific application. A generic (maybe focused on a specific platform) solution, inspired by Mendix and Outsystems, could greatly improve and facilitate the development of such systems.

### What does AI think about this?

[[../Standalone notes/What does AI think about ESs?]]

Thus,

> [!important]  
> - How to deploy generated code in different processor architectures?
> - How to simplify the setup of IOs or other necessary tools, for example, buildroot and u-boot when using an embedded OS?
> - How to handle:
> 	- Parallelism in low-code systems (concurrency)Limited hardware, low memory, weak CPU, etc…
> 	- Faults and security in such systems (error handling)
> 	- Management of and interaction with device drivers (low-level programming)
> 	- Real-time requirements (Very often present) → Safety critical applications  

  

Based on these differences, I think it makes sense to split our goals into sub-goals. I think that our main goal, as succinct as possible, is to create a _low-code platform that supports the development and verification of embedded software_. To achieve this, we need to research how to handle the issues mentioned above. To start, as discussed, I think it makes sense to focus on a smaller sub-domain, for example, autonomous driving robots. Using this smaller example, we could investigate all the issues and slowly build the tools needed to create the full platform. What is nice is that all the papers that I have been exploring come together in order to achieve this final goal.

However, there are a few questions that come to mind:

- Should we create the underlying DSL that allows us to generate embedded code and then build the low-code part on top? I think this makes sense, the low-code part is just an abstraction, a different visualization, of the DSL.
- Is there enough content to create separate papers for each subject or should we look into merging these?
    - Are they truly novel if the low-code aspect is not directly considered? → Based on some further search, it doesn’t seem likely
    - We need to start looking into this, but I believe that multiple DSLs might be necessary, in that case, we could split them per “requirement” and then create a very-abstract DSL (low-code) that is able to utilize these requirement DSLs.

# Layout

## Introduction

The software industry is facing a difficult dilemma. Programming languages are advancing towards higher-level abstractions, enabling complex programs to be written more productively. ([Sujeeth et al. 2014](https://dl.acm.org/doi/10.1145/2584665)) However, we still see a lack of tool related to this aspect in the domain of embedded systems [citation]. While tools such as MetaEdit+ and MontiCore provide a certain level of support to build software for embedded systems, a language designer is necessary to tailor each workbench for the specific application. A generic solution, inspired by Mendix and Outsystems, could greatly improve and facilitate the development of such systems.

Importance of a generic architecture…

Verification of embedded systems…

While such a generic solution for the entire embedded systems domain is promising, it is a scope too large for a single paper; therefore, we break this process down and focus here on a single domain: mobile robots under the ROS framework. Our ultimate goal, is to build on the work developed in this paper and expand the learned techniques to create a generic low-code development platform focused on embedded systems.

## Related work

- [Hammond et al. 2003](https://link.springer.com/chapter/10.1007/978-3-540-39815-8_3)
- [Dhouib et al. 2012](https://link.springer.com/chapter/10.1007/978-3-642-34327-8_16)
- [Adam et al. 2014](http://arxiv.org/abs/1412.4714)
- [Nordmann et al. 2014](https://link.springer.com/chapter/10.1007/978-3-319-11900-7_17)
- [Heinzemann et al. 2018](https://ieeexplore.ieee.org/document/8593559/)
- [Trezzy et al. 2021](https://ieeexplore.ieee.org/document/9468864/?arnumber=9468864)
- [Wesselink et al. 2022](https://pure.tue.nl/ws/portalfiles/portal/293023065/Wesselink_B.pdf)
- [Casalaro et al. 2022](https://doi.org/10.1007/s10270-021-00908-8)
- [Bettini et al. 2019](https://doi.org/10.1007/978-3-030-21485-2_8), [Tiezzi et al. 2023](https://pubblicazioni.unicam.it/handle/11581/484448) →More coordination and control than the robot architecture itself, the robot code is not discussed. I think we would like to have both(?)

Collaboration diagram of the smart agriculture scenario

- [Brouzos et al. 2023](https://doi.org/10.1007/s10846-023-01861-y) (Konstantinos Panayiotou)→ Also seem very similar ([https://github.com/robotics-4-all/generos/tree/master](https://github.com/robotics-4-all/generos/tree/master)). But they only use low code (NodeRED) for control, not development. I am indeed no longer sure that this is a valid research anymore. They have similar plans as us “The next step for this work is to build a visual DSL on top of GeneROS textual DSL so as to allow for the graphical construction of GRS models.”

## Methodology

We explore the current state of practice related to ROS architectures in order to develop a standardizes architecture for mobile robots which use this framework. Based on this, we can create a meta-model and utilize it to simplify the code generation using a text-based DSL. With the DSL complete, we can finally create the low-code environment that wraps this DSL.

This I think that the low-code environment could be the main outcome of this paper. There are a lot of papers related to ROS architecture although mostly focused on ROS 1 (no real focus on actions, for example), but almost none (based on a preliminary research) combining that with low-code environments.

At this stage, we start considering the ES requirements discussed above, but don’t fully focus on them. Since we would be using ROS as a framework initially, there are already very specific ways of handling the concurrency for example. Nonetheless, I think this presents an initial look into deployment, evolution, and fault handling for embedded systems.

## Results

The meta-model…

## Discussion

## Threats to validity

## Conclusion

“One of the limitation of the language is that only the ROS middleware is supported. As described in Chapter 1, this study delivers a Platform-specific meta-model for ROS and can be further used by future PIMs to enable abstraction of the development and execution middleware. ROS was mainly selected for this study because it is a well established open source robotics framework, which is used by a wide range of end users, such as roboticists, developers, researchers and companies, and has an extensive community driven repository of ready-to-use algorithms and hardware drivers for building robotic systems.”
