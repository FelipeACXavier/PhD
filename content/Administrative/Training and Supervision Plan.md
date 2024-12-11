---
title: Training and Supervision Plan
date: 2024-12-10
description: TSP required after 3 months from the start of the PhD.
draft: false
tags:
  - Administrative
image: red_bridge.jpg
position: 50% 50%
---

# Project details
---
## Title

**A generic low-code platform solution for safe and reliable embedded software.**
## Arrangements on guidance

Weekly-sync in-person meetings with both supervisors plus extra meetings whenever necessary.

# Project description and objectives
---
## Project introduction

<span style="color: rgb(128, 132, 138); font-style: italic;">Short introduction including the context of the project, the aim of the project and the objectives. When part of a larger project, describe the relationship of this project to the overarching project. Show awareness of the state of the art and the theoretical framework and identify the research gap. This will logically lead to the problem statement and research questions and sub-questions that you will answer, the research methods and data collection and the impact of the project that you will be requested to describe below.</span>

Within the context of the Cynergy4MIE, TU/e is tasked with proposing methods of modelling architectures that enable the integration of various engineering perspectives (including hardware and software) across multiple levels of abstraction. This will contribute to integrated analysis of efficiency, safety, and reliability of integrated systems. Moreover, TU/e should contribute with the design of a low-code language which needs to be aligned with the proposed architecture. Based on this proposal, my project focuses on embedded systems and how a generic architecture for such systems can be used to leverage existing design patterns and facilitate the creation of software for embedded devices. The goal is to create a tool that allows users to model all the different aspects of embedded systems, as well as simplifying the deployment and evolution of said systems.

## Problem statement

<span style="color: rgb(128, 132, 138); font-style: italic;">Research questions and hypotheses. Concise problem statement and derived research questions (sub-question(s)), feasible to be researched in 3 – 3.5 years. Clarify the objectives of the sub-questions. In the next item, you describe the methods which you intend to use and relate them to these research questions.</span>

 - **Question:** How to engineer a low-code development platform so that users with little background on embedded software can design, implement, maintain, and deploy a safe and reliable system?
	 - **Hypothesis:** The development platform should follow a 4+1 views style that allows users to focus on each view of the system that best suit their role in the project. Furthermore, a generic/standardized architecture is utilized to simplify reusability and constraint possible design choices, which in turn facilitates validation and verification. Finally, a structured visual notation, that reuses known concepts through all the system views, allows users from different domains to understand all the specific views of the system.

- **Sub-question 1:** What are the main characteristics of low-code development platforms, how are they implemented, and how these characteristics can be reused for embedded software development?
	- **Hypothesis:** Low-code platforms tend to follow a very strict programming logic that severely constraints the user possibilities. This is the opposite of embedded software which tends to be more free. Nonetheless, despite this apparent freedom, most developers tend to stick with few well-known patterns; therefore, the same, more strict environment, can be used for embedded development.

- **Sub-question 2:** How does a reference embedded software architecture look like?
	- **Hypothesis:** At the top-level, a layered architecture seems to be the most used. Then, each layer has its own less generalized architecture.

- **Sub-question 3:** What kinds of patterns can be used to generalize and abstract embedded software into a low-code development platform?
	- **Hypothesis:** Communication through standardized protocols, event queues, mutual exclusion, etc,...

- **Sub-question 4:** What are the requirements for designing friendly visual languages (low-code) for embedded systems?
	- **Hypothesis:** There are guidelines for visual languages; however, we are wondering about how these concepts can be made more specific for embedded systems. I believe that concepts which are usually more relevant for embedded software compared to other disciplines (limited memory, real-time requirements,...) need to be made explicit.

- **Sub-question 5:** How can formal analysis be integrated into a low-code development platform to allow the verification of embedded systems?
	- **Hypothesis:** While formal verification tools exists, there are none that are easy to use for non-technical people (or even friendly for technical people). The low-code approach simplifies the definition and verification of requirements through formal methods. For this, either predefined generic requirements can be used, or a visual language that allows users to define these requirements can be created.


## Methods and data collection

<span style="color: rgb(128, 132, 138); font-style: italic;">List the intended methods to be used and relate them to the data and conclusions in the context of the research objectives. For instance, by indicating the intended methods per sub-question as formulated in the previous paragraph. This can be high level, e.g., ‘lab measurement X, equipment Y, to identify Z’, or ‘simulation A, tool B, to identify C’, or ‘survey K, type of participants I, to identify M’.</span>

The initial data collection would be done initially through the literature and interviews. Based on the collected data, the creation of the LCDP can start. Then, at every stage or milestone, an evaluation of the state of the platform is done with professionals as well as people which are new to the field. By year 3 or 4, it would be interesting to evaluate the tool with students and a real project. Furthermore, our own tests would be done with "real" hardware to prove the tool capabilities. 

<span style="color:rgb(94, 135, 201)">(I think that interviews would better grasp the needs for the tool and then evaluate its improvements. Informal interviews, by sending demos or in conferences, would also be helpful)</span>

## Impact. Academic and Societal Relevance

<span style="color: rgb(128, 132, 138); font-style: italic;">Explain the academic relevance and contribution to science. If the project is targeted specifically at some societal or applied problem, explain the potential impact.</span>

Low-code development platforms have been mostly a focus of business applications and embedded systems have been left behind. However, embedded systems keep proving themselves as a current and necessary technology; thus, a solution that simplifies the development of such technologies and make it more approachable to newcomers is more necessary than ever.

## Research Data Management

<span style="color: rgb(128, 132, 138); font-style: italic;">Describe how you ensure safe and secure storage of your research data and how you will share your data. Will your data contain privacy sensitive information? Then provide a risk analysis and explain how you will mitigate any risks. Also, consider how you will provide open access (in line with FAIR principles) to your data set after the publication of your PhD thesis.</span>

No plans yet.

## Output

<span style="color: rgb(128, 132, 138); font-style: italic;">Describe the presentations, publications, and other demonstrable products which you think are relevant. Please mention the subject, for which audience/event, date.</span>

No plans yet.

# Project planning
---

<span style="color: rgb(128, 132, 138); font-style: italic;">Results to be obtained and objectives, together with planning. (Intended results that can be mentioned are progress reports on the research that is carried out, participation to colloquia, a description of the desired results (knowledge, techniques, application), etc.</span>

## Year 1

For the first year, I will explore the current state of my research field with the aforementioned questions in mind. Furthermore, I will be focusing on developing the skills and obtaining the knowledge required to bring the overall goal into fruition. I hope to develop myself through courses, conferences, and lots of explorations. Moreover, I plan to define the initial requirements of the languages/LCDP and publish a paper about these findings. We are currently evaluating the possibility of studying the topic with focus on a smaller domain (mobile robots) so that we can later expand the concepts to the whole domain of embedded systems. Finally, I would like better define the overall plan for my PhD.

## Year 2

For the second year, I will focus on the development of the platform itself and the different views which enable its utilization for multiple domains. Here, we can start evaluating the tool's feasibility in hardware setups. Furthermore, I plan to continue developing my skills as a researcher and keep following the plan defined in the first year.

## Year 3

No plans yet

## Year 4

No plans yet.

# Learning
---

<span style="color: rgb(128, 132, 138); font-style: italic;">Knowledge and skills to be acquired during the period of the PhD project. The courses or lectures that need to be taken for this purpose and the participation in seminars, colloquia, and suchlike that is required.</span>

## Year 1 - Courses/Lectures/Other

For the first year, I plan to take courses to improve my writing and start the courses for UTQ:

- Brush up your academic writing: Readability
- Foundations: TEACH

Plus the courses discussed in section: Competence Development related learning.

Since it is required, I need to go to at least three IPA events, and would like to go to one on my first year, ideally related to formal methods.

## Competence Development related learning

<span style="color: rgb(128, 132, 138); font-style: italic;">Describe which competences you plan to develop in the coming period. Have a look at the TU/e PhD Competence Profile and the PhD Competence Development Guide to prepare. You can find the links to the Guide and Profile in the Support tab. Also indicate what kind of support you have discussed and agreed upon with your supervisor. Below you can indicate which learning opportunities you intend to follow</span>

This question is a bit strange, naturally, by the end of my first year I would like to have developed all the necessary competences at least up to level 1. I plan to focus particularly in communication and academic thinking. In this case, and based on the PhD Competence Development Guide, I think it would be interesting to follow: 

- Analytic Storytelling
- Poster & Pitch: Presenting Your Research
