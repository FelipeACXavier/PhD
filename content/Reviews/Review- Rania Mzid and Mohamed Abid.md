---
title: Review - Rania Mzid and Mohamed Abid
date: 2024-11-03
description: Review of the paper by Rania Mzid and Mohamed Abid
draft: false
image: snow.jpeg
position: 50% 80%
tags:
  - Review
  - Design-patterns
  - Architecture
  - Real-time
---

# Software Architecture Design for Real-Time Control Systems; How Design patterns Could Help?

1. The pattern concept is widely used in various contexts, but its use to guide  
    software architecture design verification has not been thoroughly investigated,  
    which motivated our contributions in this paper.  
    
    - The authors argue that patterns have been used in contexts different than a “guide for software architecture” which is doubtful. I have found some papers with a similar approach.
    - The authors do specify further:
        
        > […] the use of patterns to guide the software architecture design of real-time control systems within a trial-and-error approach has not been thoroughly explored in the literature.
        
    - Therefore, I think their focus is on this “trial-and-error” approach.
2. Some of the citations are not very reliable, e.g., [7]→ maybe it is fine for this this type of paper?
3. The process is well-explained.
4. Table 1 mentions 6 patterns but only 2 are described in section 4.2. I don’t see any explanation why only the two shown were chosen.
5. Stylistic(?)
    - Some paragraphs are extremely long, what makes reading a bit tiring. For example, the explanation of the case study in section 5.1
    - Figures 17 and 18 can be bigger, hard to read.
6. Are we dealing with a pump or a car in the experiments? Section 5 is a bit confusing since the case study depicts one scenario and the experimental results present a different one right after. Using a continuous example might help the reader better understand the article.
7. The results of the experiments are not very clear from the figures. I think they could summarize better the expectations of the experiment and the results.
8. I am a bit confused regarding the message of the paper. Design by trial-and-error using patterns is already a staple in the industry as far as I am concerned. Having the generation of these patterns automated sounds like a great idea. To me, the generation of the analysis model is the biggest contribution of this paper, but that does not seem to be the main message of the paper as a whole. At least, it doesn’t seem like the authors attempt to “hammer this home”.

# Full review

## Summary

 The authors aim to use schedulability analysis techniques to help designers verify timing properties of software architectures. They achieve this by introducing real-time verification patterns that encapsulate the knowledge of experts in schedulability analysis theory. To verify their approach, they evaluate a few patterns against a real-time embedded device and show that the approach accelerates the design process while maintaining correctness of the application. 

## Positive aspects

 The background information present in the article is relevant and well explained; moreover, the authors do an excellent job of explaining how their paper differs from the existing literature. The topic is relevant, and furthering the use of patterns seems like an important endeavor.  

## Gaps, contradictions, inconsistencies

 The paper was a bit hard to read, not because of the content but because of the writing style. There are many exceptionally long paragraphs, for example, ion 5.1, and figures out of order. On this note, the authors provide a table with six patterns (Table 6) but then only explain two of them. It was unclear to me if this was intentional since there is no explanation in the text why only those two were selected. Are they the most important ones?  

Finally, I did not understand why section 5 starts with an interesting case study that is completely left out of the experimental results. While reading, I was convinced I had missed or misread something. I would recommend providing the same explanation as subsection 5.1 but with the car display example. It would be easier for the reader to follow the paper. Currently, the topic changes too suddenly from the well-explained mine pump control system to a car display which was never mentioned before. Now that I am writing this review, I think it would also have been helpful to briefly introduce your case study in the introduction section. 

Overall, the content of the paper is well-explained, but the structure and language hinder understandability.

Although the experiment shows the approach's feasibility, it doesn't properly show how the proposed method improves the trial-and-error procedure. The paper highlights how different patterns provide different results, but fails to show how
