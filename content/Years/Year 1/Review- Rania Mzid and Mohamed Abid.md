---
title: Review - Rania Mzid and Mohamed Abid
date: 2024-11-03
description: Review of the paper by Rania Mzid and Mohamed Abid
draft: false
image: wave.jpg
position: 50% 50%
tags: 
  - Year-1
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
