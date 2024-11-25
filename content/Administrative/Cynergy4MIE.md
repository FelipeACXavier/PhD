---
title: Cynergy4MIE
date: 2024-11-11
description: Cynergy4MIE is a visionary project poised to revolutionize Europe's industrial landscape by bridging the gap between foundational technology layers, cross-sectional technologies, and key application areas. 
draft: false
tags:
  - Administrative
image: /static/background/red_bridge.jpg
position: 50% 50%
---

## Abstract

Cynergy4MIE is a visionary project poised to revolutionize Europe's industrial landscape by bridging the gap between foundational technology layers, cross-sectional technologies, and key application areas. The project addresses the pressing need for efficient resource utilization and synergy creation across ecosystems. By actively managing requirements from various key application areas, Cynergy4MIE aims to steer developments in foundational technology layers and cross-sectional technologies, enabling unparalleled collaboration and resource optimization. This approach promises faster time-to-market, efficient resource utilization, and enhanced technological exchange between key application areas. Cynergy4MIE's strategy aligns with the EU's agenda and emphasizes urgency, resilience, technological partnerships, and cross-domain integration to champion European competitiveness. The project's long-term impact rests on embracing urgency, fostering competitive resilience, strengthening technological partnerships, harnessing ecosystem synergies, promoting cross-domain integration, advancing AI competence, prioritizing sustainability, enhancing productivity, and ensuring user-centric digitalization while forming strategic alliances. Cynergy4MIE envisions a future where emergent cyber-physical systems serve human-centric needs, drive domain convergence, and secure Europe's position as a global technology leader.

## Work packages

The work packages are phases in the complete Cynergy4MIE project. Thus, this project should probably fit the same structure, but we need to stick to the scheduled shown in the table below.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d6f57a3b-d18b-46a5-aabf-4ed1543df53a/842f4af2-c6a0-4180-8014-2648fb151c1b/image.png)

> TU/e will participate in the Cynergy4MIE proposal with two departments.
The Department of Mathematics and Computer Science (M&CS) will
participate with two research groups: Formal System Analysis (FSA) and
Software Engineering and Technology (SET).
> 
> 
> The FSA and SET research groups will provide tools and methodologies to verify the architectural and behavioural specifications of emergent systems. They will assist in the application of these methods and adapt and develop these techniques in SC3.
> 

**SET is “officially” connected to SC 3 – Precise measurements for efficient, reliable and safe electric powertrains in transportation.** 

### Demo

*Demo 3.2: High performance, modular, smart battery for mobile machine applications* 

Batteries are not only safety critical components but are the backbone of most electric power trains. As they are built from individual cells, with each one behaving slightly differently, proper cell management by the battery management system during charge / discharge is essential. Optimal control relies on exact knowledge of the state of health of each cell. Current BMS try to infer this information by relying on many different sensors for, e.g., current, voltage, temperature. Even so, the inferred state of health/charge is very imprecise. NV-center quantum sensors can improve the situation two-fold: first they have the capability to conduct measurements of several physical quantities at once, replacing multiple conventional sensors, and second, their measurements are much more precise without the need for calibration, which translates in much better insight into the processes going on within a battery cell. So, with fewer sensors the BMS can manage the cells better, increasing lifetime and reducing waste. For maximum benefit, the BMS should be able to predict the behaviour of the cells based on past experiences and other information. Here, artificial intelligence for local prediction and control (“edge-AI”), as well as for learning over a set / fleet of batteries (“cloud”) will improve the current state of art: dynamic adjustment of the BMS control strategy based on information of other batteries and usage profiles will enable the next step of evolution. Following results are planned for the battery demonstrator, with a mobile machine application as demonstration platform:

[…]

h. Definition of the software architecture including formal functional and safety properties; model-based testing of software and hardware parts (including safety and security aspects); definition and implementation of the BMS in a correct by construction approach; verification of parts with an AI component; research the integration of Autosar and the formal methods based toolboxes; V&V of system wide properties related to reliability, safety and security. The application of these technologies will require improvements on performance and expressiveness of the model checker, mCRL2. (VER, TU/e)

### Tasks

WP1: 

- **????** *Task 1.2 (SC2) Requirements and Specifications for Smart Collaborative Robotics*
    
    TU/e will define the requirements and KPI for robust self-learning AI deployment for perception tasks in the context of safe heavy-duty mobile robot operation. The main focus will be on model generalizability to out- of-distribution data (i.e., unknown unknowns).
    
- We are here now → *Task 1.3 (SC3) Requirements and Specifications for Powertrains*
    
    TU/e will construct tools to formalize behavioural specifications and requirements. The core issue is to make the formalisms sufficiently expressive such that all functional and non-functional requirements can easily, but more importantly, precisely be formulated. As has been shown, validation of such requirements improves the quality of software-controlled systems dramatically. 
    

WP2:

- *Task 2.3 (SC3) System Architecture, Models and Simulations for Powertrains*
    
    TU/e will contribute to the design of a digital twin (DT) – together with the mechanisms for exchanging real-time data between the DT and the actual system. The DT will integrate various tools for analysing the design and for experimenting with different AI algorithms. Together with this, TU/e will design a common data environment (CDE) through which different engineering teams and different disciplines can share their data in a federative manner in order to optimize knowledge sharing. TU/e will also propose methods of modelling the architecture that enable the integration of various engineering perspectives (including hardware and software) across multiple levels of abstraction. This will contribute to integrated analysis of efficiency, safety, and reliability of the integrated system. Moreover, TU/e will contribute to the design of the low-code language which needs to be aligned with the architecture.
    

WP3 (Nothing):

WP4:

- *???? Task 4.2 (SC2) Algorithms, Embedded HW and SW for Smart Collaborative Robotics*
    
    TU/e will research and develop task-specific training and fine-tuning techniques for transformer foundation models to leverage their improved generalizability of perception models. Foundation models for vision are massively pre-trained in an unsupervised or semi-supervised manner and often this pretraining is multi-modal. Such foundation models are, however, mostly not semantically grounded, or able to perform complex vision tasks, such as panoptic segmentation. To semantically ground foundation models for complex vision tasks and retain their generalization properties, novel task-specific training, and fine-tuning techniques are required. In this research, TU/e will focus on generalization-aware focussed task-funnelling techniques. To improve the inference efficiency of transformer-based vision foundation models, TU/e will also research promptable dynamic token-reduction techniques that allow the transformer to focus its computations, by dynamically scaling available transformer-tokens, towards specific and promptable image content, where these prompts can, for instance, be task-dependent. This research is performed in the industry context of mobile autonomous robots and vehicles.
    
- *Task 4.3 (SC3) Algorithms, Embedded HW and SW for Powertrains*
    
    This seems to be focused on FSA, but we can also do something since one of our goals is to use the generic architecture to support formal analysis of embedded systems.
    
    TU/e will provide and further develop the mCRL2 toolset which is a beyond the state-of-the-art toolset for simulation, visualisation, validation, and verification of behaviour of emergent systems. It will also study the integration of existing tools, especially to describe, analyse and visualize the architecture of such systems. In particular TU/e will work on enhancing the size of the system description that can be analysed by employing symbolic verification techniques to scale the capabilities of the verification functional properties. But diagnostic methods also require quantitative analysis of the systems, such as failure rates, or expected performance. TU/e will implement proposed exact algorithms to obtain such qualitative information and develop new and faster numerical algorithms that help to obtain this information faster. This will provide the foundations for a good estimate of failure rates that can take the complexity of modern systems into account. Both methods will be applied to aspects of the software control of power electronics or the automotive powertrain to show that both functional and qualitative properties can be systematically established on such systems.
    

WP5 (Nothing):

WP6:

- *Task 6.3 (SC3) Validation and Tests of Systems for Smart Powertrains*
    
    TU/e will provide an infrastructure in the form of the mCRL2 toolset ([www.mcrl2.org](http://www.mcrl2.org/)) to validate and test the formal software specifications developed within this project. TU/e will actively contribute to this validation and further develop the tools as needed. As it stands the mCRL2 toolset is unsurpassed if it comes to its expressive capabilities and the possibility to verify advanced formalized requirements on software.
    

### Deliverables

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d6f57a3b-d18b-46a5-aabf-4ed1543df53a/0f6bbb30-403a-4a4e-9bef-0555c87d413f/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d6f57a3b-d18b-46a5-aabf-4ed1543df53a/24e37041-5003-4531-badd-d6cf7194a571/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d6f57a3b-d18b-46a5-aabf-4ed1543df53a/9781e51b-5d71-49be-aeb9-3b7ccee6c82a/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d6f57a3b-d18b-46a5-aabf-4ed1543df53a/b6b3c4de-d657-4b13-b793-50550ef32470/image.png)

### Effort

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d6f57a3b-d18b-46a5-aabf-4ed1543df53a/af20e3ac-091a-4a9d-beaa-f71e18b93b73/image.png)

![Staff effort per work package](https://prod-files-secure.s3.us-west-2.amazonaws.com/d6f57a3b-d18b-46a5-aabf-4ed1543df53a/d91c71f0-9c22-4fe2-9cf0-92f90e19ee37/image.png)

Staff effort per work package

### Doubts

- What is our current supply chain?
- SC3 was apparently dropped (double check with Verum). Lots of ours tasks are related to batteries which is no longer happening, so what is our goal and how should the tasks and deliverables change?
- The cluster hours are not described in the proposal.
