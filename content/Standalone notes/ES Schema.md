---
title: ES Schema
date: 2024-10-23
description: Initial thoughts regarding a generic ES schema
draft: false
image: wave.webp
position: 50% 50%
tags: []
---

# Design process

---

Before defining the schema, we follow the steps proposed by [Nakagawa et al. 2014](http://ieeexplore.ieee.org/document/6827112/). These steps are used when developing SiMuS - Sistemas Multirobóticos de Serviço (multi-robot service systems)

## 1. Requirements of the domain

---

Embedded systems encompass a much larger domain than, for example, just robotics; thus, I think it makes sense to use the requirements identified by [Feitosa et al. 2013](http://www.teses.usp.br/teses/disponiveis/55/55134/tde-18042013-151002/) and extend with requirements from other domains. Most, if not all of these requirements can be leveraged for embedded systems in general. In yellow are the ones which cannot be generalized.

I will place the requirements here since they are only available in Portuguese in the original document.

### Requirements for mobile robots

---

1. The reference architecture must enable the manipulation and testing of local or distributed sensors in the environment.
2. The reference architecture must enable the manipulation and testing of actuators.
3. The reference architecture must enable the manipulation and testing of resources, such as battery and memory.
4. The reference architecture must enable the execution of reactive tasks.
5. The reference architecture must enable task planning and the decomposition of tasks into simpler ones.
6. The reference architecture must enable the development of fault-tolerant systems.
7. The reference architecture must enable the persistence of information regarding the completion of tasks assigned to the robot.
8. The reference architecture must enable the evolution of the system through the incorporation of new functionalities.
9. The reference architecture must enable the navigation of robots controlled by systems developed based on it.
10. The reference architecture must enable the localization of robots controlled by systems developed based on it.
11. The reference architecture must enable the mapping of environments.

> [!important]  
> How to generalize these requirements? Navigation, localization, and mapping are essentially the “task” of mobile robots; therefore, maybe redundant, these three could be encompassed as:The reference architecture must enable the completion of the tasks of robots controlled by systems developed based on it.  

### Requirements for multi-robotic systems

---

1. The reference architecture must enable the development of robotic systems that involve the manipulation of multiple robots.
2. The reference architecture must enable the use of a central machine or robot that concentrates part or all of the decisions to be made by the system developed based on the architecture.
3. The reference architecture must enable communication between robots and between robots and the central machine.
4. The reference architecture must enable interactions between robots even without cooperation, that is, when a robot is not informed or does not care about the existence of others.

### Requirements for service robots

---

1. The reference architecture must enable robots controlled by systems developed based on it to provide services for humans.
2. The reference architecture must enable interaction between the robot and humans.
3. The reference architecture must enable a human to intervene in the robot's decisions.
4. The reference architecture must enable systems developed based on it to prioritize human safety over the robot's tasks.
5. The reference architecture must enable systems developed based on it to evaluate their own performance.
6. The reference architecture must enable systems developed based on it to modify their planning based on their performance and the safety of the humans with whom the robot interacts.

## 2. Goals of the reference architecture

---

This architecture aims to:

1. Support the development of single or distributed embedded systems
2. Contributes to a better modularization, structuring and maintaining the embedded systems
3. Contributes to a better reuse of software components developed with it.
4. Support evolution of such systems.


<div class="caption-img-container">
  <div class="caption-img">
    <img src=/static/images/es_best_practices.png />
    <figcaption>Excerpt from <a href="https://link.springer.com/10.1007/978-1-4842-8279-3">Beningo et al. 2022</a></figcaption>
  </div>
</div>

## 3. Stakeholders and their concerns

---

- **Architects:** They identify the needs of the system and derive the concrete architecture.
- **Domain specialists:** They provide specific information and verify the domain requirements. That is, they specialize the reference architecture to their domain
- **Analysts:** Once the architects and domain specialists have developed a concrete architecture, the analysts validate the set of information in this architecture.
- **Quality assurance managers:** They guarantee the requirements achievement in the system
- **Developers:** They implement the concrete architecture.
- **Maintainers:** Finally, they need to maintain and update the developed system.

> [!important]  
> Should system users be considered stakeholders in a reference architecture?  
  
> [!important]  
> So far, all these steps follow very closely SiMuS (Feitosa et al. 2013, Nakagawa et al. 2014). Thus, should we consider simply expanding it and proving its usability for other embedded systems instead of developing a new reference architecture?I do think that we can expand a bit on the device manager and the controller by introducing a layered and a micro-kernel pattern. This should make the architecture more robust which, in turn, should better support modifications. This, of course, is based on the architectures proposed by, for example, Guessi et al. 2015, Heisey et al. 2013, Liu et al. 2020, and Petitjean et al. 2004. Furthermore, as discussed before, it might be interesting to include a layer on top of the controller, or split the controller into micro and macro tasks.  

# Building on the existing architecture

---

The aforementioned architecture itself looks as such (The information and communication managers are not shown due to their highly specific requirements depending on the application):

<div class="img-grid img-grid-a-5">
	<div class="caption-img-container" style="grid-area: a">
		<div class="caption-img">
			<img src=/static/images/conceptual_view_of_simus.png />
			<figcaption>Conceptual View of SiMuS</figcaption>
		</div>
	</div>
	<div class="caption-img-container" style="grid-area: b">
		<div class="caption-img">
			<img src=/static/images/global_view_of_simus.png />
			<figcaption>Global view of SiMuS</figcaption>
		</div>
	</div>
	<div class="caption-img-container" style="grid-area: c">
		<div class="caption-img">
			<img src=/static/images/devices_manager_SiMuS.png />
			<figcaption>Structural View (Devices Manager) of SiMuS</figcaption>
		</div>
	</div>
	<div class="caption-img-container" style="grid-area: d">
		<div class="caption-img">
			<img src=/static/images/evolution_manager_SiMuS.png />
			<figcaption>Structural View (Evolution Manager) of SiMuS</figcaption>
		</div>
	</div>
	<div class="caption-img-container" style="grid-area: e">
		<div class="caption-img">
			<img src=/static/images/controller_view_SiMuS.png />
			<figcaption>Structural View (Controller) of SiMuS</figcaption>
		</div>
	</div>
</div>

<div class="img-grid img-grid-a-3">
	<div class="justify-text" style="grid-area: a">
		As mentioned above, we can combine this reference architecture with the layered device architecture presented by <a href="https://linkinghub.elsevier.com/retrieve/pii/S0164121214000211">Eklund et al. 2014</a> to have a more complete and modular architecture. Although, this might only be necessary in the source code viewpoint.
	</div>
	<div class="caption-img-container" style="grid-area: b">
		<div class="caption-img">
			<img src=/static/images/source_code_viewpoint.png />
			<figcaption>Source code viewpoint</figcaption>
		</div>
	</div>
	<div class="caption-img-container" style="grid-area: c">
		<div class="caption-img">
			<img src=/static/images/physically_controlled_device.png />
			<figcaption>The pattern defining how hardware devices such as sensors and actuators are abstracted in isolated processes allowing for independent development, testing and deployment of new device driver software.</figcaption>
		</div>
	</div>
</div>

[Beningo et al. 2022](https://link.springer.com/10.1007/978-1-4842-8279-3) presents four main architectures used in embedded systems:

1. The Unstructured Monolithic Architecture → Do we even consider this?
2. Layered Monolithic Architectures
3. Event-Driven Architectures
4. Microservice Architectures

We can argue that these could be combined, since both the event-driven and microservice architectures would benefit from a clear separation of concerns provided by the layered architecture.

# Evaluation of architecture against existing papers

---

Here we present a few of the studied architectures and determine how they would fit the schema.

1. <span style="color:rgb(233, 84, 82)">Communication Manager (#DF5452)</span>
    

    is the module responsible for providing communication among robots or between a robot and the central machine. Its main functionality is to send/receive information, highlighting that this information is encrypted and comprises not only system data (e.g., location, maps, and warnings) but also modules and interfaces to evolve the system;

    
2. <span style="color:rgb(199, 125, 72)">Information Manager (#C77D48)</span>
    

    is the module responsible for persisting all data of the system (e.g., maps, protocols, interfaces, and modules);

    
3. <span style="color:rgb(82, 158, 114)">Devices Manager (#529E72)</span>
    

    is responsible for managing sensors (Sensors Manager), actuators (Actuators Manager), and resources (Resources Manager) of a robot. As observed in Figure 5, it provides the access interfaces to these elements, as well as testing data of these devices. The mentioned sub-modules provide basic functionalities to Controller and are capable of responding whether a specific interface is available or not. The Self-test module is capable of request all necessary data to perform the test and provide them to the Controller;

    
4. <span style="color:rgb(157, 104, 211)">Evolution Manager (#9D68D3)</span>
    

    is responsible for managing the runtime evolution of the system, i.e., the acquisition, delivery, and validation of modules and interfaces. For example, it permits the robot conclude the same task in different ways, since it is possible to find different modules that perform the same task and the required interfaces to use them. As shown in Figure 6, Modules Manager and Interfaces Manager are responsible for coordinating these tasks, as well as provide high-level functionalities to the Controller that searches and installs them, or informs their unavailability;

    
5. <span style="color:rgb(94, 135, 201)">Controller (#5E87C9)</span>
    

    is responsible for controlling the robot, i.e., it is capable of taking measures to achieve the goal of the system. Thereunto, it plans and executes the necessary tasks, orchestrating the other modules (Communication Manager, Information Manager, Devices Manager, and Evolution Manager). This is the most complex module, since it depends on the others and has an inner complexity. Despite the dependence, the amount of exchanged messages is minimized due to the encapsulation of the functionalities.

    
## Examples

---

### _A Unified software architecture for embedded systems_ ([Petitjean et al. 2004](https://ieeexplore.ieee.org/abstract/document/1571869))

<div class="caption-img-container">
  <div class="caption-img">
    <img src=/static/images/petit_jean_2004.png />
  </div>
</div>

### _A Model-Based Approach for Common Representation and Description of Robotics Software Architectures (_[Monthe et al. 2022](https://www.mdpi.com/2076-3417/12/6/2982))

<div class="caption-img-container">
  <div class="caption-img">
    <img src=/static/images/monthe_2022.png />
  </div>
</div>

### _A Reference Software Architecture to Support Unmanned Aircraft Integration in the National Airspace System (_[Heisey et al. 2013](https://doi.org/10.1007/s10846-012-9691-8)_)_

<div class="caption-img-container">
    <div class="caption-img">
      <img src=/static/images/helsey_2013.png />
    </div>
</div>

### _A Generic Software Architecture for a Domain Specific Distributed Embedded System (_[Kumar  et al. 2007](https://d1wqtxts1xzle7.cloudfront.net/57738320/2.A_genneric_Architetcure-libre.pdf?1541926903=&response-content-disposition=inline%3B+filename%3DA_Generic_Software_Architecture_for_a_Do.pdf&Expires=1732661954&Signature=SWl6M1B3ehq~aGsixKFoaHZ79fJidL-8GfHJD67rxy6gwOnDoVdAvpj87sv31GGlBCUfLTx1gd~pf2epJo8sam42vPKT0qcuLfcAiWn4DcE7JioUd4pKZp3jJF1~FGsOEH8KQv8UmyV35k03-Cbi5vBe7BNTWwWv95GrfdvTzg6am3YuC-hQQ~ojtrhOVPN06UUUMPonQa8We13QXC9hrn~GUDwjFb6e5-a~egBEgQ1WjzsQwKSUJ07-S94eBgpw2ynLLN10WrA37UATg-PVo1c1hh37MJAtA8x3eEv0se3F-R6SwDZ2cn7z~66-5QTm8L1-GYPHhwPh7ojnG04ODg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA)_)

<div class="caption-img-container">
    <div class="caption-img">
      <img src=/static/images/kumar_2007.png />
    </div>
</div>
