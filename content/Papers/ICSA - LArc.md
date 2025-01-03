---
title: ICSA - LArc
date: 2024-12-19
image: blue_mountain.webp
position: 50% 30%
tags:
  - Papers
---

# Introduction

\section{Introduction}

\label{sec:introduction}

In recent years, the “Low-Code” software development approach has gained significant traction. Low-Code promotes the development of software in a simplified manner, commonly involving a graphical user interface to specify the application and generators to create such application while requiring minimal coding skills from the user~\cite{waszkowski_2019}. While the term “Low-Code” was coined by Forrester Research in 2014~\cite{richardson_2014}, it first appeared in the scientific literature in 2017, and gained broader attention in the research community following Zolotas et al. in 2018~\cite{zolotas_2018}.

While the interest in this technology grows, it has consistently focused on business applications while other domains remain untouched (CITATION). In this context, we believe there is a lot to be gained from introducing low-code concepts and tools to the embedded domain. With programming languages advancing towards higher-level abstractions, what enables complex programs to be written more productively~\cite{sujeeth_2014}. Embedded systems remain relatively stuck, with only small improvements in the development cycle over the recent years (CITATION). Given the importance of these systems, which are present in key areas of our daily lives, e.g., healthcare and automotive, a technology that simplifies their development and guarantees their correctness is crucial. 

That is not to say that there are not existing approaches that attempt to tackle this issue. Tools such as MetaEdit+ and MontiCore already provide a good level of support to build software for embedded systems; however, a language designer is still necessary to tailor each workbench for the specific application. That is, these solutions are not generic enough to handle the entire domain of embedded systems. A generic solution inspired by Mendix and OutSystems could greatly improve and facilitate the development of embedded systems.

To create such a generic solution, we must first define what are the key ingredients of an embedded system. For example, the Mendix platform breaks down its software structure into three key components (user interface layer, business logic layer, and data layer) and provides three different DSLs to define each of these. In the background, Mendix facilitates the information exchange during the development of these layers so that developers feel like they are using a single language. This standardized architecture is what allows for the seamless integration of the different layers. However, while this \ac{MVC} architecture is well-defined for business applications, that is hardly the case for embedded systems. Thus, before creating a low-code development platform for embedded systems, we must define a generic/standard architecture for embedded systems.

In this context, this paper aims to present a complete roadmap for the creation of this architecture which allows the generalization of embedded software development through a low-code platform. To achieve the proposed goal, we consider the following main research question as the overarching guideline for this study:

\begin{itemize}[leftmargin=1cm,itemsep=2mm]

    \item[\textbf{RQ}] How to engineer a low-code development platform so that users with little background in embedded software can design, implement, maintain, and deploy a safe and reliable system?

\end{itemize}

To address this overall question, five sub-questions have been formulated:

\begin{itemize}[leftmargin=1cm,itemsep=1mm]

    \item[\textbf{RQ1}] What are the main characteristics of low-code development platforms, including their implementation, and how are these characteristics applicable to embedded software development?

    \item[\textbf{RQ2}] What does a reference embedded software architecture look like?

    \item[\textbf{RQ3}] What patterns can be used to generalize and abstract embedded software into a low-code development platform?

    \item[\textbf{RQ4}] What are the requirements for designing user-friendly visual languages (low-code) for embedded systems?

    \item[\textbf{RQ5}] How can formal analysis be integrated into a low-code development platform to allow the verification of embedded systems?

\end{itemize}

The remainder of this paper is structured as follows. Section 2 presents related work while Section 3 describes the methodology followed in the study preparation and describes the protocol of the study. Section 4 thoroughly describes the proposed method, and Section 5 presents the evaluation process of the method. Section 6 continues with a discussion on the evaluation results and insights gathered during the method development. Section 7 presents the threats to the validity of the research methodology. Finally, Section 8 provides the concluding remarks.

# Related work

In this section, we discuss the current state of the art in relation to our topic of interest. As discussed, while there is little focus on low-code for embedded systems, both academia and industry are interested in solutions that facilitate the development of such systems. 

In the context of DSLs for embedded systems, [Hammond et al. 2003](https://link.springer.com/chapter/10.1007/978-3-540-39815-8_3) presents HUME, a DSL for real-time embedded systems. This DSL focuses on the low-level system requirements and has very important embedded concepts, such as concurrency, low resources, and determinancy, at its core. [Mizzi  et al. 2018](https://dl.acm.org/doi/10.1145/3183895.3183899) on the other hand, focuses on distributed embedded systems. The authors propose D'artagnan which attempts to abstract away low-level implementation and allow the compilation, analysis, transformation, and interpretation of high-level descriptions of stream processing applications in which information is received and processed in real-time. Both of these examples highlight essential concepts in the development of embedded systems; however, their textual approach still limit understandability compared to modelling languages such as UML. Many similar approaches were also explored but most focus on what can be considered more specific or sub-domains of embedded systems. Related to the field of robotics, we encounter [Wesselink  et al. 2023](https://ieeexplore.ieee.org/document/10161436/?arnumber=10161436&tag=1), ,[Trezzy  et al. 2021](https://ieeexplore.ieee.org/document/9468864/?arnumber=9468864), [Heinzemann  et al. 2018](https://ieeexplore.ieee.org/document/8593559/). Related to IoT, we find [Panayiotou  et al. 2024](https://www.sciencedirect.com/science/article/pii/S1574119224000579). Finally, it is important to highlight the works of [Brouzos  et al. 2023](https://doi.org/10.1007/s10846-023-01861-y) and [Bourr  et al. 2024](https://link.springer.com/chapter/10.1007/978-3-031-75107-3_14) which present a full low-code solution for a subset of the concerns in robotics, that of defining missions or tasks.  

In relation to understandability, many authors have applied model-based design to embedded system. Similar to the aforementioned DSL works, these papers attempt to bring the facilities of MBD to the field of embedded systems. [Pietrusewicz  et al. 2019](https://www.mdpi.com/2076-3417/9/3/376) presents a meta-modelling approach for cyber-physical systems and the researchML language which attempts to improve traceability in development projects. Related to this, are the already mentioned MetaEdit+, introduced in [Kelly  et al. 1996](https://link.springer.com/chapter/10.1007/3-540-61292-0_1), and MontiCore, [Krahn  et al. 2010](https://doi.org/10.1007/s10009-010-0142-1), platforms. While these do not focus directly in embedded systems, they have both being used for such systems [Tolvanen  et al. 2019](https://dl.acm.org/doi/10.1145/3307630.3342389), [Fischer  et al. 2024](https://ieeexplore.ieee.org/abstract/document/10736032), and [Dalibor  et al. 2022](https://www.sciencedirect.com/science/article/pii/S2590118422000235). As discussed, although extremely powerful, these tools still require an architecture to be defined for each system and make little used of reusability. This, in turn, complicates the verification and validation of such systems. Once again, there are more works that explore more specific fields in the domain of embedded systems. [Dhouib et al. 2012](https://link.springer.com/chapter/10.1007/978-3-642-34327-8_16) developed RobotML a modelling approach which supports not only the development of robotic systems but also their deployment and testing through simulations. 

Related to reference architecture, we encounter the work of [Loukil  et al. 2010](https://link.springer.com/chapter/10.1007/978-3-642-15114-9_47) which suggest utilizing ADL to define the architecture for embedded systems. The authors discuss how a higher level of abstraction provides a better overview of scalable and complex embedded systems. On a similar vein, [Wang  et al. 2000](https://dl.acm.org/doi/10.1145/354880.354896) proposes reference architecture based on reusable components defined by finite state machines. The paper describes a system where different components can be easily connected, similarly to FMI. [Wang  et al. 2009](https://ieeexplore.ieee.org/abstract/document/5341583) follows a similar concept but focuses on the simulation of such systems. As with the other topics of interest, the literature tends to focus on more specific fields, [McDuffie  et al. 2001](https://ieeexplore.ieee.org/abstract/document/964241), for example, describes architectures of spacecraft attitude control systems. [Fischer  et al. 2024](https://ieeexplore.ieee.org/abstract/document/10736032) and [Heinecke  et al. 2004](http://www.dii.unimo.it/~zanasi/didattica/Veicolo_OLD/AUTOSAR_Paper_Convergence_2004.pdf) focus on automotive systems. Finally, [Heisey  et al. 2013](https://doi.org/10.1007/s10846-012-9691-8) presents a reference architecture for unmanned aerial systems.

The final topic of interest is the verification of embedded systems, in that regard, we find works such as the one from [Bartocci  et al. 2021](http://arxiv.org/abs/2104.14333). The authors present MoonLight, a tool for monitoring temporal and spatio-temporal properties of mobile and spatially distributed cyberphysical systems. This approach increases current verification techiniques that tend to focus on temporal properties with spatial constraints. [Miyazawa  et al. 2019](https://doi.org/10.1007/s10270-018-00710-z) introduces RoboChart for modelling and verification of the functional behavior of robotic applications. Their work proposes a set of constructs for modelling robotic applications that also supports verification via model checking. The approach, however, is once again constrained and not expanded to other fields of embedded systems. Besides these, the aforementioned work of [Heinzemann  et al. 2018](https://ieeexplore.ieee.org/document/8593559/) also focuses on creating verifiable robot tasks through their DSL, while [Shaukat  et al. 2024](https://ieeexplore.ieee.org/document/10704818) discusses the validation of the architecture of robots based on ROS. Finally, [Antonio  et al. 2014](http://www.scitepress.org/DigitalLibrary/Link.aspx?doi=10.5220/0004887302330240) discusses the validity of several verification techniques when applied to code generated for embedded systems through SysML. This work is extremely relevant, as some of the techniques can be generalized and applied to code generated from low-code platforms.

# A low-code platform for embedded systems

Since our end goal is to have a low-code development platform that enhances the creation of embedded software systems, our research follows a plan which we believe will provide the best basis for this endeavour. In this section we explain our hypotheses and plan steps to tackle each of the research questions defined in the introduction.

## Low-code development characteristics

Before defining our own platform, we must understand what is already out there and what technologies used in low-code development can be leveraged for embedded systems. As mentioned, having patterns that generalise application developed is the great strength of low-code. 

While most low-code technologies focus on business applications, as discussed, there are projects that target different systems. Node-red, for example, can be used to IoT, and RobotML for robotics. We discussed the Mendix example, but with other platforms we see this clear separation of goals in the application development. Figure XX provides and example of this structure for the Mendix platform.

(Picture of the mendix structure)

A similar separation can be applied to embedded systems as long as there is an underlying common structure, that is a reference architecture. Therefore, this is the topic of the next section.

## A reference architecture for embedded systems

As discussed, the reference architecture allows us to define the workflow of the low-code platform. Based on existing works, we can stipulate what a reference architecture for embedded systems looks like. (CITATION)

We start from the most abstract viewpoint with a layered architecture. First, there is an abstraction of the hardware components, sensors and actuators. On top of that, lays the low-level decision making, that is, components whose goal is to coordinate the internal behavior of the system. For simple IoT devices, this can be considered enough as shown by (CITATION); however, other systems we must keep building.

Above the local coordinator layer, we find the communication and information managers. These are responsible for managing and exchanging data with long-term storage or other devices in a coordinated mission. Finally, on the top layer lays the mission controller. This final layer can control multiple systems in order to complete a shared goal.

While these layers are enough to describe most if not all embedded systems, SiMuS (CITATION) discusses the concept of an “evolution manager” which is responsible for handling the changes of the system based on previous tasks. Furthermore, it allows the system to adapt during the task execution, either to perform it better or to . With the current interest in AI and its capabilities related to continuous improvement, we add this final component to our architecture as we think it will become more prominent in the coming years.

While a theoretical reference architecture is a good starting point, it is currently a pure hypothesis. For the coming period, we will use software architecture recovery techniques and functional decomposition to extract the underlying software architecture from different open and closed source software repositories. With this, we aim to have a grounded and realistic reference architecture that does not deal with ideals but with what developers use in practice. Based on the encountered reference architecture, it is possible to define the requirements and workflows for a generic low-code development platform for embedded systems.

## Embedded systems patterns

However, before we discuss the requirements and workflows for an embedded systems low-code development platform, we must mention patterns often used in ES development that can also be leveraged by such a platform. While a reference architecture is essential for a streamlined low-code solution, other generalisable aspects of software development can greatly facilitate the creation of such systems.

These patterns are still unclear, but there is a lot of work already done in relation to communication, long-term storage, parallel task scheduling, and resource allocation. Therefore, as the practice of low-code, and its greatest strength, these patterns can be abstracted away from the user. 

Naturally, a low-code approach due to the aforementioned abstractions takes finer control over these patterns. A balance between abstraction and customisation is essential to attract both new and experienced users. The end goal of using low-code is so that users do not need to think about these implementation specificities and can focus on the goal of the system itself. That is, the what and not the how as XXX would describe it.

## User-friendliness in mind

With the reference architecture and embedded development patterns defined, the research focuses on how to combine these two into a user-friendly platform. The pattern themselves are considered implementation details; nonetheless, it is important to extract their key concepts, what they represent, and make that clear to the users. 

As it is the case with low-code platforms, the “low-code” is essentially a visual DSL; therefore, the research becomes on the design of this language. Based on the theoretical reference architecture, an one language per layer approach is suggested. Thus, instead of using a single DSL to represent the different layer concerns of the system, we plan to develop separate languages to simplify the interaction with the devices, the internal control, the information management, etc. As of this point, we plan to stick to one language per concern; however, based on the results from the architecture recovery, we might change this plan.

As XXX (CITATION) discusses, there are key concerns when developing a visual language. These concerns become more significant when multiple languages must interact with one another. Therefore, we plan to use MetaEdit+ as inspiration and separate the visual aspect from the semantics of the DSLs. With the DSL defined textually, it is possible to focus on integrating them in a visually cohesive manner. The end goal, is to make the use of these languages seamlessly, so little mental effort is required to adapt to the development of a new layer.

### Is low-code the right approach?

A restrictive architecture seems to go against common practices from the embedded domain which is much freer than business applications or web-development for example (CITATION). Nonetheless, such an approach presents great benefits to the embedded domain.

First, embedded systems are generally considered to have a higher entry barrier compared to other software domains. The restrictive hardware concerns of embedded systems are nearly inexistent in web or application development for example. In this context, a low-code approach to embedded development could lower this initial skill ceiling and attract more developers to the domain.

Furthermore, low-code provides an easy and accessible way of reusing software artefacts. Developers often find themselves creating their own repositories for commonly used components in embedded systems, e.g., an I2C communication class or a thread pool. While useful, this keeps the knowledge contained to a single or a small group of developers. A low-code platform makes these repositories unnecessary since such low level concepts which are usually reused are abstracted away.

Finally, by restricting the possible implementations of these systems, it becomes easier to verify their correctness. There is no shortage of techniques to formally verify embedded systems, be it through timing measurements or model checking (CITATION); however, they still suffer from state-explosion problems mainly due to the sheer amount of possible actions in a system (CITATION). Thus, a low-code approach not only facilitates software development through reusability, it facilitates the development of formally correct software by limiting the possible states of the systems.

## Is correctness possible?

As discussed above, it is easier to formally verify a system whose scope is smaller, that is, a system with a more limited set of allowed states. With the proposed approach, the correctness of these systems is not only possible but easier to achieve.

Related to this easiness, there is one last step in our plan which is to define a visual DSL for requirement specification. While formal methods are widespread and can be relatively easily generated, system requirements are very specific for a single system. Therefore, users still need a friendly way to define these formal requirements to be analysed. This question is still very open and not a lot has been explored on how such a language would look like; nonetheless, we found necessary to add it here to provide a clear global picture of our end goal.

# Conclusion

With this paper, we lay down a vision to create a low-code development platform for embedded systems. This technology that attracts ever more attention is still lacking in the domain of embedded systems, so we hope this paper functions as a guideline for future research in the area and summarises key concepts necessary for its full realisation. 

First, naturally, existing low-code technologies must be identified and reused in order to diminish future work. Concurrently, a reference architecture that encompasses the key aspects of embedded systems must be defined. This should not only be based on theoretical idealisms, but on practical concepts used in the development of such systems.

This reference architecture can finally be combined through separate DSLs for the different concerns. While different, each DSL shares a single visual workflow to minimise the learning curve of the platform. With these steps, it is possible to diminish the entry level to develop embedded systems while guaranteeing their correctness.
