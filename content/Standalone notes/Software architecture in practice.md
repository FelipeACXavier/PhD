---
title: Software architecture in practice
date: 2024-12-03
draft: false
image: boat.jpeg
position: 50% 70%
tags:
  - Software-architecture
  - Review
  - Book
---

# What is software architecture and why is it important?

The software architecture of a system is the set of structures needed to reason about the system. These structures comprise software elements, relations among them, and properties of both. There are three main architectural structures discussed in the book:

1. **Component-and-connector structures:** focus on the way the elements interact with each other at runtime to carry out the system’s functions. These structures are crucially important for asking questions about the system’s runtime properties, such as performance, security, availability, and more. Thus, C&C structures help answer questions such as the following:  
	- What are the major executing components and how do they interact at runtime? 
	- What are the major shared data stores?
	- Which parts of the system are replicated? 
	- How does data progress through the system? 
	- Which parts of the system can run in parallel? 
	- Can the system’s structure change as it executes and, if so, how?

2. **Module structures:** show how a system is structured as a set of code or data units that have to be constructed or procured. Modules are assigned areas of functional responsibility; there is less emphasis in these structures on how the resulting software manifests itself at runtime. 
	- What is the primary functional responsibility assigned to each module? 
	- What other software elements is a module allowed to use? 
	- What other software does it actually use and depend on? 
	- What modules are related to other modules by generalization or specialization (i.e., inheritance) relationships?

3. **Allocation structures:** establish the mapping from software structures to the system’s non-software structures, such as its organization, or its development, test, and execution environments. 
	- Which processor(s) does each software element execute on? 
	- In which directories or files is each element stored during development, testing, and system building? 
	- What is the assignment of each software element to development teams?

Foremost, the architecture can be seen as an *abstraction* of the system. This abstraction is essential to tame the complexity of the system. With a well-defined and documented architecture, stakeholders don't need to keep every detail of the system in their heads.

> [!important]
> The architecture substantially determines a system's ability to meet its desired quality attributes. 

# Quality attributes

A quality attribute is a measurable or testable property of a system that is used to indicate how well the system satisfies the needs of its stakeholders beyond the basic function of the system. We can think of a quality attribute as measuring the “utility” of a product along some dimension of interest to a stakeholder.

Functionality is the ability of the system to do the work for which it was intended.

> [!Important] 
> *Functional* requirements are satisfied by including an appropriate set of responsibilities within the design. *Quality attribute* requirements are satisfied by the structures and behaviors of the architecture.

## Specifying quality attributes

We try to regulate how quality attributes are treated through a six part process:

1. **Stimulus**: We use the term “stimulus” to describe an event arriving at the system or the project. The stimulus can be an event to the performance community, a user operation to the usability community, or an attack to the security community, and so forth. We use the same term to describe a motivating action for developmental qualities. 
2. **Stimulus source**: A stimulus must have a source—it must come from somewhere. Some entity (a human, a computer system, or any other actor) must have generated the stimulus. The source of the stimulus may affect how it is treated by the system. 
3. **Response**: The activity that occurs due to the arrival of the *stimulus*. The response is something the architect undertakes to satisfy. It consists of the responsibilities that the system (for runtime qualities) or the developers (for development time qualities) should perform in response to the stimulus.
4. **Response measure**: Any response should be measurable so that the scenario can be tested, that is, so that if the architect achieved it.
5. **Environment**: It is the set of circumstances in which the scenario takes place.
6. **Artifact**: This is the only one that is not fully clear to me. The authors state that "The artifact may be a collection of systems, the whole system, or one or more pieces of the system."

### Availability

### Energy efficiency

### Integrability
