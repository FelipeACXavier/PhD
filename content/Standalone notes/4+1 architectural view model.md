---
title: 4+1 architectural view model
date: 2024-11-22
description: My study into the 4+1 architectural view model
draft: false
image: wave.jpg
position: 50% 50%
tags:
  - Architecture
---

<div class="caption-img-container">
  <div class="caption-img">
    <img src=/static/images/four_views.png />
    <figcaption> <a href="https://linkinghub.elsevier.com/retrieve/pii/S0164121206001634">Hofmeister et al. 2007</a></figcaption>
  </div>
</div>

- _**Logical view**_: The logical view is concerned with the functionality that the system provides to end-users. [UML diagrams](https://en.wikipedia.org/wiki/Unified_Modeling_Language "Unified Modeling Language") are used to represent the logical view, and include [class diagrams](https://en.wikipedia.org/wiki/Class_diagram "Class diagram"), and [state diagrams](https://en.wikipedia.org/wiki/State_diagram "State diagram").
- _**Process view**_: The process view deals with the dynamic aspects of the system, explains the system processes and how they communicate, and focuses on the run time behavior of the system. The process view addresses concurrency, distribution, integrator, performance, and scalability, etc. UML diagrams to represent process view include the [sequence diagram](https://en.wikipedia.org/wiki/Sequence_diagram "Sequence diagram"), [communication diagram](https://en.wikipedia.org/wiki/Communication_diagram "Communication diagram"), [activity diagram](https://en.wikipedia.org/wiki/Activity_diagram "Activity diagram").
- _**Development view**_: The development view (aka the _implementation view_) illustrates a system from a programmer's perspective and is concerned with software management. UML Diagrams used to represent the development view include the [Package diagram](https://en.wikipedia.org/wiki/Package_diagram "Package diagram") and the [Component diagram](https://en.wikipedia.org/wiki/Component_diagram "Component diagram").
- _**Physical view**_/_**Deployment view**_: The physical view (aka the _deployment view_) depicts the system from a system engineer's point of view. It is concerned with the topology of software components on the physical layer as well as the physical connections between these components. UML diagrams used to represent the physical view include the [deployment diagram](https://en.wikipedia.org/wiki/Deployment_diagram "Deployment diagram").
- _**Scenarios**_: The description of an architecture is illustrated using a small set of [use cases](https://en.wikipedia.org/wiki/Use_case "Use case"), or scenarios, which become a fifth view. The scenarios describe sequences of interactions between objects and between processes. They are used to identify architectural elements and to illustrate and validate the architecture design. They also serve as a starting point for tests of an architecture prototype. This view is also known as the **use case view**.
