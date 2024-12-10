---
title: Role of architectures in relation to designing DSL’s
date: 2024-11-04
description: Study on the role of architecture in relation to designing DSL’s
draft: false
image: wave.jpg
position: 50% 50%
tags:
  - DSL
  - Architecture
---

# A preliminary study on various implementation approaches of domain-specific language (Kosar et al. 2008)

## Summary

The authors utilize experiemental methods to evaluate different approaches to developing DSLs. They evaluate 10 different approaches and focus on implementation and end-user effort. For the implementation, the same DSL (FDL) was used as a base and the participants were asked to implement that using the 10 different approaches. Their experiences was recorded and, combined with more objective metrics such as eLOC, used to compare the approaches. In the end, the authors conclude that embedded approaches are more efficient overall, but lack support such as error reporting and debugging (which mainly affect the end-users).

## Positive aspects

- The authors very clearly describe their experiment and reasons for believing its results are valid.
- The results are used to confirm experimentally the predictions of other papers.
- The authors indicate clearly the limitations of the study.
- The use of both professional and novices in the end-user evaluation grants extra reliability to the study results.

## Gaps, contradictions, inconsistencies

- eLOC is debated as a good metric for code comparison. The authors briefly address this, but it is “unfair” to compare typed with untyped languages in terms of eLOC for example.

  

---

# Comparing general-purpose and domain-specific languages: An empirical study (Kosar et al. 2010)

## Summary

This study compares APIs and DSLs (This was also a topic of interest in the previously read paper: [Kosar et al. 2008](https://linkinghub.elsevier.com/retrieve/pii/S0950584907000419)). The authors evaluate the perception of programmers using a questionnaire that compares XAML (DSL) and C# forms (GPL API), and attempt to prove the benefits of DSLs. As expected, the DSL performs better than the GPL due to closeness of mappings, diffuseness, and error-proneness. That is, due to the specificity of the DSL, users can more easily the connection between the code (syntax) and its functionality.This was shown to be valid even when users already have experience with the GPL.

## Positive aspects

- The paper is well written and the experiment is well explained.
- The paper’s findings are timeless and impactful
- The authors attempt to look deeper into the reasons for their results.
- The paper discusses its limitations clearly

## Gaps, contradictions, inconsistencies

- Some extra work could be put into the related work section. While the works are explained, it is not entirely clear how this study builds on and extend them.
- There is only a small and inconclusive explanation of why the two technologies (XAML and C#) were used and why they are significant to the field.

---

# Domain-Specific Languages: A Systematic Mapping Study (Kosar et al. 2016)

## Summary

The authors aim to study and classify the works related to DSL from the last 10 years (2006 to 2016). They preferred a systematic mapping over a systematic review due to having clear pre-defined goals and domains. The authors highlight the dominance of technique/method development over the development of new tools to support the creation of DSLs. Furthermore, the authors discuss the low number of papers focused on the test and evaluation of these DSLs, as well as papers that study the effectiveness of DSLs (e.g., [Kosar et al. 2010](https://doiserbia.nb.rs/Article.aspx?ID=1820-02141002247K)).

![[/image 12.png|image 12.png]]

Research distribution in DSL development phases

## Positive aspects

- The authors take a good time describing the related work and the need for this paper.
- The methodology and research questions are well-defined.
- A good look into the “current” state of research in relation to DSLs.

## Gaps, contradictions, inconsistencies

- I see a certain lack of information regarding the implementation of the DSLs themselves. It would be interesting to see what sort of architectural decisions are described in the corpus.

---

# When and how to develop domain-specific languages (Mernik et al. 2005)

## Summary

The authors try to identify patterns in the development process of DSLs and reach an agreement on a five phase process: decision, analysis, design, implementation and deployment. For each of these phase, except deployment, the authors suggest patterns to be followed that improve the development of DSLs. The authors conclude that DSL development is (was?) limited due to a lack of knowledge available to DSL developers.

## Positive aspects

- The authors describe well the related work.
- The patterns for each phase are plenty and well explained.

## Gaps, contradictions, inconsistencies

- I believe that the explanation on how the authors reached their five phases is unclear. Thus, the explanation of the methodology is lacking.

---

  

# RoboChart: modelling and verification of the functional behaviour of robotic applications (Miyazawa et al. 2019)

## Summary

RoboChart is a formal analysis tool which allows the verification of robotic systems. The tool works based on the creation of specific state machines that are then used to explore the system possible states.

## Positive aspects

  

## Gaps, contradictions, inconsistencies

---

  

# A DSL toolkit for deferring architectural decisions in DSL-based software design (Zdun et al. 2010)

## Summary

  

## Positive aspects

  

## Gaps, contradictions, inconsistencies

---

  

# Hume: A Domain-Specific Language for Real-Time Embedded Systems (Hammond et al. 2003)

## Summary

A DSL for real-time systems that, and the main reason why I think it might be useful, support among other things concurrency, correctness, and asynchronicity.

## Positive aspects

  

## Gaps, contradictions, inconsistencies

---
