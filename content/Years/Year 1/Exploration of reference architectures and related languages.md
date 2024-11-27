---
title: Exploration of reference architectures and related languages
date: 2024-10-22
description: Exploration of reference architectures and related languages
draft: false
image: ./static/background/wave.jpg
position: 50% 50%
tags:
  - Year-1
---

# Summaries of papers of interest:

---

## A unified software architecture for embedded systems (Petitjean et al. 2004)

- This paper seems very focused on the implementation aspects; however, the architecture can still be derived. They propose an architecture similar to what I and Michel discussed yesterday (2024-10-16), but only up to the communication level (our data sharing layer)

![[Pasted_image_20241017101401.png]]

_UML class diagram of the framework_

---

## A Simple and Practical Embedded Software System Architecture (Liu et al. 2020)

- This paper also seems a bit more "practical" than what we are looking for; there is already a talk about drivers and devices. Nonetheless, the architecture is still quite similar to the one proposed above. There is a clear separation of the communication and IO aspects. At least this one adds the "Application layer" which seems similar to our discussed "computing layer". It is important to note, however, that the authors explicitly mention, "The code implementation of a protocol or implementation of task scheduling should not appear in the application layer." Would then the scheduling function be present in a layer above?
    
    ![[Pasted_image_20241017101738.png]]
    
    _Embedded software layered architecture_
    

---

## A reference architecture template for software-intensive embedded systems (Eklund et al. 2012)

- This paper seems to be more focused on requirement architecture, and, therefore, seems to once again focus on the solution space. Nonetheless, the following quote is quite nice.

> A RA description needs to address a set of somewhat conflicting needs, such as readability for all stakeholders, giving an overview of the system and provide an overview of the evolution of the architecture while also providing necessary technical details and traceability to the product architecture.

- The authors split the RA in two documents, a specific and a principles one. Neither really explain in details a possible reference architecture. _Maybe this is too high-level?_
- This paper led to another which I found more interesting: [Cloutier et al. 2010](https://onlinelibrary.wiley.com/doi/abs/10.1002/sys.20129) [](https://www.zotero.org/felipeacxavier/items/undefined)In this paper, the authors present the idea of “Reference Architecture”

> Reference Architectures capture the essence of existing architectures, and the vision of future needs and evolution to provide guidance to assist in developing new system architectures.

- [Cloutier et al. 2010](https://onlinelibrary.wiley.com/doi/abs/10.1002/sys.20129) description of RAs highlight the need for one for embedded systems. It explains the concept not only for software systems but for all domains of life.
    
    ![[/image 8.png|image 8.png]]
    
    Business architecture, technical architecture and customer context together form the Reference Architecture.
    

---

## Hierarchical Design Model for Embedded Systems (Karakehayov et al. 2009)

- Already an interesting reference in this paper: [Wolf et al. 2010](https://www.google.com/complete/search?q=978-0-08-047500-4) which is available digitally via the library:

> [!info]  
>  
> [https://www-sciencedirect-com.dianus.libr.tue.nl/book/9780124105119/high-performance-embedded-computing](https://www-sciencedirect-com.dianus.libr.tue.nl/book/9780124105119/high-performance-embedded-computing)  

> [!quote] 
> Because embedded system designers work with both hardware and software, they must study architectures broadly speaking, including hardware, software, and the relationships between the two. Hardware architecture problems may range from special-purpose hardware units as created by hardware/software co-design, micro-architectures for processors, multiprocessors, or networks of distributed processors. Software architectures determine how we can take advantage of parallelism and nondeterminism to improve performance and lower cost.  


- The paper is more mathematical than I expected. The model is expressed in logical notation: $D = \{A, S, R\}$﻿ where $A$﻿ is the model of the application, $S$﻿ is the model of the embedded system, and $R$﻿ is the model of the needed resources.
- This paper, however, is once again focused on the implementation aspect of the embedded system.

---

## 👍 Architectural description of embedded systems: a systematic review (Guessi et al. 2012)

- First of all, nice! A paper from Brazil.
- A review of existing architectures for embedded systems.

> However, to our best knowledge, there is no detailed panorama on how software architectures and reference architectures for embedded systems could be represented

- They use the following query, which we will be borrowing as well:

```Plain
(representation OR description) AND (“embedded”) AND (“software architecture” OR “architecture model” OR “architectural model” OR “reference architecture” OR “reference model” OR “architecture framework”)
```

- Below is the table of interesting papers from this literature review:

|Id|Reference|Year|
|---|---|---|
|S1|AUTOSAR. AUTOSAR (AUTomotive Open System ARchitecture). [On-line], World Wide Web. Available in [http://www.autosar.org/](http://www.autosar.org/) (Last accessed 06/19/2011).|2011|
|S7|Borde, E. et al. Mode-based reconfiguration of critical software component architectures. DATE, Dresden, Germany, 1160-1165.|2009|
|S10|Ciarletta, L. and Dima, A. A conceptual model for pervasive computing. ICPP Workshops, Toronto, Canada, 9-15.|2000|
|S14|Khalgui, M. et al. Model-checking for the functional safety of Control Component-based heterogeneous embedded systems. ETFA, Mallorca, Spain, 1-10.|2009|
|S12|ESDS Reference Architecture Working Group NASA ESDS Reference Architecture v 1.0. [On-line], World Wide Web. Available in [http://www.esdswg.org/spg/spgfolder/reference-architecture/ESDSRefArch-v1.0.pdf](http://www.esdswg.org/spg/spgfolder/reference-architecture/ESDSRefArch-v1.0.pdf) (Last accessed 11/25/2011)|2011|
|S23|Visnevski, N.A. and Castillo-Effen, M. A UAS capability description framework: Reactive, adaptive, and cognitive capabilities in robotics. AERO, New York, USA, 1-7.|2009|

- This study separates the analyzed architectures in three classes:
    1. Formal architectures → Good for verification and validation
    2. Reference architectures → Less formal/semi-formal since this architecture aims to be more easily understood
    3. Reference model → Higher abstraction level
- Initially, I thought only the first and last would be interesting, but looking back, I think I should have a look into all of these. > [!important]  
    > Is there a way to combine the formal and informal descriptions to maximize the verification and readability aspects?  
    
    > We have observed that there is not a consensus about which approach better describe architectures of embedded systems.
    
    > Besides that, we also noticed there is much disparity among used names for architecture viewpoints. Thus, we believe that the community should also conduct researches in this direction, aiming to standardize the nomenclature of architecture viewpoints.
    

  

---

## A Reference Software Architecture to Support Unmanned Aircraft Integration in the National Airspace System (Heisey et al. 2013)

- As expected, this article focuses heavily (maybe too heavily) on unmanned aircraft. Thus, the architecture cannot be generic. Nonetheless, some of its insights might be useful.

![[/image 1 2.png|image 1 2.png]]

Notional view of possible services in the reference architecture, subject to interoperablity requirements, authorization, and certification

- This paper uses a micro-kernel architecture approach where different applications can be added as plugins. This might also be an interesting approach to a generic ES architecture, although it seems to go against the idea of a go-to architecture. If every other functionality is a plugin, what is the system's core then?
    
    > Services can be encapsulated by plug-ins that enable them to be discovered and connected dynamically to create an application. In some cases it may be possible to expedite the development process and enable domain specialists to directly create solutions.
    

  

---

## 👍 Towards a Formal Description of Reference Architectures for Embedded Systems (Guessi et al. 2015)

- Another paper by Guessi et al. from Brazil.
- Continuing their previous literature review, the authors now dive deeper into formal architectures.
- As before, this paper highlights the terminology issues in this field.
- The paper highlights three main research lines that should be addressed in order to promote a precise description of reference architectures for embedded systems.
    1. The _assignment of appropriate formalism levels for reference architectures_ must find a balance between the accuracy and understandability desired for the description.
    2. The _consolidation of a process for developing reference architectures_ should establish the necessary discipline for obtaining higher-quality architectures.
    3. The _co-design of hardware and software_ should also be considered at the reference architecture level.
- The paper correctly highlights the necessary separation of software and hardware responsibilities at the architectural level.

---

## 👍 A Systematic Mapping of Architectures for Embedded Software (Antonio et al. 2012)

- This paper, similarly to , divides the found architectures into formal and semi-formal groups.
    - Semi-formal:
        
        > […] studies that investigate the representation of architectures using semi-formal techniques (namely, Unified Modelling Language - UML, the MARTE UML profile, SysML and Simulink) and other informal techniques.
        
    - Formal:
        
        > […] studies that investigate the representation of architectures using the Finite State Machines (FSM), Petri Nets, Statecharts, Architecture Analysis & Design Language (AADL) and MetaH formal techniques.
        
- This paper is a small literature review, and it provides us with another nice list of papers to look into, among which is “Concern Coverage in Base Station Development: An Empirical Investigation ([Pareto et al. 2012](https://www.zotero.org/felipeacxavier/items/6X3BB2VX/attachment/KIM9EV3G/reader))”
- Finally, the authors comment that they seem to be doing something similar to us:
    
    > The results of this mapping are being used in the context of a project that is under development by this research group, whose main objective is to define a development process for embedded systems. This process should involve requirements elicitation and their modelling, aiming at supporting the construction of lower level models, such as Simulink models.
    
- It seems like they focus on an even higher level than us. They are also interested in modelling requirements of ESs while we are focused on the software architecture itself. Thus, I think we are interested in a level lower.> [!important]  
    > Naturally, we will look further into their work, but should we consider talking to them at some point?  
    
- These are the authors and their lattes:
    - [Fabiano Cutigi Ferrari](http://lattes.cnpq.br/3154345471250570)
    - [Sandra Camargo Pinto Ferraz Fabbri](http://lattes.cnpq.br/2204086299921323)
    - [Erik Aceiro Antonio](http://lattes.cnpq.br/1687921185079998)

---

## A Generic Software Architecture for a Domain Specific Distributed Embedded System (Kumar et al. )

- This paper describes the architecture of an embedded system that focuses on maintainability and modifiability → This seems to be a common trend across the studied papers.
- This seems to actually focus on a more abstract view of architecture.
- They propose a micro-kernel architecture, which greatly improves the system modifiability.
- The divide the main architecture in 7 subsystems and propose architectures for each: →I think that we are dealing at this level
    - For sensors, they use a pipe architecture (I think this is an implementation detail).
    - For data pre-processing, they use batch sequential data flow style.
    - For data analysis, they use a black-board architecture.
    - For display processing, they use a service-oriented architecture.
    - For the supervisory control system, they use pipes and filters again.
    - For the human interface, they use a model view controller architecture.
    - All of these are connected through a central bus controller.
        
        ![[/image 2 2.png|image 2 2.png]]
        
        High level Software Architecture
        

---

## 👍 Architecture for embedded open software ecosystems (Eklund et al. 2014)

- Very nice paper that provides a thorough description of their proposed architecture.
- The authors of this paper once again focus on modularity and composability of the system.
- The paper proposes a combination of layers and micro-kernel. Where hardware components are abstracted away in their own service that is then able to communicate with the orchestrator.
- I am in doubt whether this is truly an abstract architecture or just an implementation. → I think this would fall in the abstract category.

![[/image 3 2.png|image 3 2.png]]

The pattern defining how hardware devices such as sensors and actuators are abstracted in isolated processes allowing for independent development, testing and deployment of new device driver software.

  

![[/image 4 2.png|image 4 2.png]]

The pattern defining how complex aggregation and sensor fusion of hardware devices are done through exchange mechanisms provided by the run-time platform.

- How could I forget?? AUTOSAR is an attempt to establish an open standard automotive architecture. This is a domain of what we are trying to do.
- The architecture is composed of four patterns:
    1. _**Pattern: device abstraction:**_ The software representation of the physical devices, such as sensors and actuators, are developed and executed in the same ways as other applications, running in their own process to provide isolation from other parts of the system as seen in the figure on the left.
    2. _**Pattern: Data and service provision:**_ All data is stored and exchanged through the platform (but most data is isolated to a single application) through an API. There are no other mechanisms provided for information exchange between applications besides through the platform. Data and provided services from hardware abstractions are accessed through the API by either an explicit get/set and/or subscribe, both at run-time, i.e. data is pulled by those applications needing it and not pushed to them. There is also an API to determine the available data set at run-time on a particular embedded device.
    3. _**Pattern: Device and information composition:**_ Applications representing more aggregated abstractions of the underlying hardware are also developed and executed in the same way as other applications. These applications also run in their own process to provide isolation from other parts of the system and to allow for independent development, testing and deployment of new device driver software. The information and services they need from other hardware abstractions are managed through the underlying platform to satisfy necessary safety and security requirements, as seen in the figure in the right.
    4. _**Pattern: Safety-critical, certified and open application access:**_ For accessing and using applications to the different categories of ecosystem software there should be a set of rules, also applicable for the subset of applications of hardware abstractions. Some example rules are:
        - A core critical application can only get or subscribe data from other critical applications. This both preserves necessary integrity requirements as well as the requirement of being able to verify the platform by itself.
        - A critical application is allowed to use services at hardware abstractions that are critical. This preserves safety integrity.
        - Any application can get data from other applications.
        - Open applications cannot use services from critical applications, depending on usage mode.
        - At usage mode XXX only certified applications have access to hardware YYY.

---

## Concern coverage in base station development: an empirical investigation (Pareto et al. 2012)

- A study in Ericsson to identify concerns regarding the development of architectures for embedded systems.
- Not a lot to discuss here except that the concerns are shared with the other studied papers. The concerns are better described in the paper itself.

---

## A Model-Based Approach for Common Representation and Description of Robotics Software Architectures (Monthe et al. 2022)

- From the title, we see that this paper focuses on architecture for robots. However, I think it might provide some useful insight into the whole domain of embedded systems.
- The authors propose a hybrid architecture because:
    
    > hybrid architectures combine the reactive capabilities of behavioral architectures [event-based architecture] and reasoning abilities (decision making) specific to hierarchical architectures [layered archietcture]
    
    ![[/image 5 2.png|image 5 2.png]]
    
    The architecture of the system to be modeled.
    
- A very nice table with concepts used in the paper:
    
    ![[/image 6 2.png|image 6 2.png]]
    
    An extract of the concepts used in the language definition.
    

# Related papers

---

## Towards suitable description of reference architectures (Valle et al. 2021)

- This paper does not come from one of the more reputable sources but from PeerJ, which I had never heard before. Furthermore, it has a small number of citations (11).
- Nonetheless, it has some interesting insights regarding “Good practices for describing reference architectures” such as:
    - Adherence level to standards
    - ‘‘Living’’ document
    - Summary with change history
    - Availability of a repository with original documents
    - Organization of the documentation

---

## 👍 Consolidating a Process for the Design, Representation, and Evaluation of Reference Architectures (Nakagawa et al. 2014)

- The main goal of this paper is to present the last version of a process, named ProSARA, for the building of reference architectures, focusing on how to design, represent, and evaluate reference architectures.
- The authors then focus on the robotics domain, definitely an embedded systems use-case/domain.
- ProSA-RA steps:
    1. Select the main sources of information. Focus on sources that “provide information about processes and activities that could be supported by software systems of the target domain”
    2. Based on the selected sources, three set of elements are identified. Firstly, the set of requirements of software systems of that domain is identified and, based on these requirements, the set of requirements of the reference architecture is then identified. After that, the set of concepts that must be considered in this reference architecture is established.
    3. Build the architectural description of the reference architecture using RAModel as a general framework.
    4. Check the architectural description of the architecture together with diverse stakeholders intending to detect defects in this description.
- Some important insights into developing our own reference architecture:
    1. Map the requirements from the domain (This is what we are doing now).
    2. Define the goals of the reference architecture.
    3. Define the stakeholders and check their concerns.

---

## An Operational Quality Model of Embedded Software Aligned with ISO 25000 (Argotti et al. 2024)

- A nice literature review that focuses on operational quality of embedded software.
- It has some good papers to look into with a focus on their practical aspects.
- The authors nicely distribute the studied papers according to their domain, what gives us an insight into what domains to look out for:
    
    ![[61bb68e3-5681-4f44-9459-bfe515b1f4d1.png]]
    
    Frequency distribution by embedded system domains - 40 studies
    
    ![[/image 7 2.png|image 7 2.png]]
    
    Frequency distribution by embedded software domains - 40 studies
    
- Related to :
    
    > In a study on the embedded system architecture, Guessi et al. SLR [32] (S20) identifies the quality requirements and constraints to be considered in the architecture and software of embedded systems. The authors identified a set of 12 architectural concerns broken down into several quality requirements: adaptability, correctness, dependency, fault tolerance, interoperability, knowledge reuse, maintainability, performance, power consumption, reliability, safety, and timing.
    

## 👍 RAModel: A Reference Model for Reference Architectures (Nakagawa et al. 2012)

- Creates a reference architecture for reference architectures.
- The paper describes the necessary focus points of people creating reference architectures.
- Zachman framework:
    
    > The **Zachman Framework** is an enterprise [ontology](https://en.wikipedia.org/wiki/Ontology_(information_science)) and is a fundamental structure for [enterprise architecture](https://en.wikipedia.org/wiki/Enterprise_architecture) which provides a formal and structured way of [viewing](https://en.wikipedia.org/wiki/View_model) and defining an enterprise. The ontology is a two dimensional classification schema that reflects the intersection between two historical classifications. The first are primitive interrogatives: [What, How, When, Who, Where, and Why](https://en.wikipedia.org/wiki/Five_Ws). The second is derived from the philosophical concept of reification, the transformation of an abstract idea into an instantiation. The Zachman Framework reification transformations are: identification, definition, representation, specification, configuration and instantiation.[[1]](https://en.wikipedia.org/wiki/Zachman_Framework\#cite_note-1) The Zachman Framework is not a [methodology](https://en.wikipedia.org/wiki/Methodology) in that it does not imply any specific method or process for collecting, managing, or using the information that it describes;[[2]](https://en.wikipedia.org/wiki/Zachman_Framework#cite_note-2) rather, it is an ontology whereby a [schema](https://en.wikipedia.org/wiki/Conceptual_model) for organizing architectural artifacts (in other words, design documents, specifications, and models) is used to take into account both who the artifact targets (for example, business owner and builder) and what particular issue (for example, data and functionality) is being addressed.
    
    ![[/image 8 2.png|image 8 2.png]]
    
    The Zachman Framework of enterprise architecture
    
- The paper presents their reference architecture that contains four groups:
    
    1. **Domain:**
        
        It contains elements related to self-contained, specific information of the space of human action in the real world, such as domain legislations, standards, and certification processes, which impact systems and related reference architectures of that domain;
        
    2. **Application:**
        
        It contains elements that provide a good understanding about the reference architecture, its capabilities and limitations. It also contains elements related to the business rules (or functionalities) that could be present in software systems built from the reference architecture;
        
    3. **Infrastructure:**
        
        It refers to elements that could be used to build the software systems based on the reference architecture. These elements are responsible to enable these systems to automate, for instance, processes, activities, and tasks of a given domain;
        
    4. **Crosscutting Elements:**
        
        It aggregates a set of elements that are usually spread across and/or tangled with elements of other three groups (domain, application, and infrastructure). We have observed that communication (that we have identified as internal and external) in the software systems built from the reference architecture, as well as the domain terminology and decisions are present in a spread and tangled way when describing other groups and are, therefore, crosscutting elements.
        
    
    ![[image 9.png]]
    
    Groups of Related Elements
    

  

---

## A checklist for evaluation of reference architectures of embedded systems (Santos et al. 2013)

- This paper had a few formatting errors and, thus, I am not fully sure it was peer-reviewed. I am only adding it here because its checklist might be useful for our own project.
- Example questions:
    
    ![[image 10.png]]
    
- Also worth to notice the mention of: _ISO/IEC 42010 Systems and software engineering — Architecture description_ 
    
    > [!info] ISO/IEC 42010  
    > ISO/IEC/IEEE&\#8201;42010 Systems and software engineering — Architecture description is an international standard for architecture descriptions of systems and software.  
    > [https://en.wikipedia.org/wiki/ISO/IEC_42010](https://en.wikipedia.org/wiki/ISO/IEC_42010)  
    
    This standard is available through the library (thankfully)
    

---

## 👍 Towards a Process to Design Aspect-Oriented Reference Architectures (Nakagawa et al. 2009)

- Finally, the inception paper of ProSA-RA.
- Keeping here for easy access. See
