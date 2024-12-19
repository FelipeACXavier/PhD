---
title: ICSA - LArc
date: 2024-12-19
image: blue_mountain.jpg
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

    \item[\textbf{RQ1}] What does a reference embedded software architecture look like?

    \item[\textbf{RQ2}] What are the main characteristics of low-code development platforms, including their implementation, and how are these characteristics applicable to embedded software development?

    \item[\textbf{RQ3}] What patterns can be used to generalize and abstract embedded software into a low-code development platform?

    \item[\textbf{RQ4}] What are the requirements for designing user-friendly visual languages (low-code) for embedded systems?

    \item[\textbf{RQ5}] How can formal analysis be integrated into a low-code development platform to allow the verification of embedded systems?

\end{itemize}

The remainder of this paper is structured as follows. Section 2 presents related work while Section 3 describes the methodology followed in the study preparation and describes the protocol of the study. Section 4 thoroughly describes the proposed method, and Section 5 presents the evaluation process of the method. Section 6 continues with a discussion on the evaluation results and insights gathered during the method development. Section 7 presents the threats to the validity of the research methodology. Finally, Section 8 provides the concluding remarks.

# Related work

In this section, we discuss the current state of the art in relation to our topic of interest. As discussed, while there is little focus on low-code for embedded systems, both academia and industry are interested in solutions that facilitate the development of such systems. [Hammond et al. 2003](https://link.springer.com/chapter/10.1007/978-3-540-39815-8_3) presents HUME a \ac{DSL} for Real-Time Embedded Systems... On a similar vein, 

There seems to be a large interest in modelling approaches focused on robotic systems. [Dhouib et al. 2012](https://link.springer.com/chapter/10.1007/978-3-642-34327-8_16) developed RoboML a modelling approach... [Trezzy et al. 2021](https://ieeexplore.ieee.org/document/9468864/?arnumber=9468864)... 

Related to architecture, we encounter the works by

Finally, related to reference architecture of embedded systems... Once again, we find a focus on robotic systems instead of a general approach for embedded systems.

# Core


# Discussion

# Conclusion
