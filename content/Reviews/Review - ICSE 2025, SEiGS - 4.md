---
title: Review - ICSE 2025, SEiGS - 4
date: 2024-12-10
draft: false
image: snow.webp
position: 50% 80%
tags:
  - Review
  - LLM
---

# Summary

The authors introduce LLMs into the DHIS2 platform in order to simplify its usage. The plain language queries allow users with no technical expertise to use the platform and extract meaningful information from it. From this, the authors hope to support more effective healthcare decision-making. To assess their thesis, the authors integrated the LLMs into the DHIS2 platform and then asked several users to evaluate the experience. Overall, the users provided overwhelmingly positive feedback and highlighted the ease-of-use and speed of the system. While feasible for smaller contexts, there is still work to be done in order to prove the system's reliability with larger datasets and higher user volumes.

# Positive aspects

- + The authors, even if shortly, highlight the ethical considerations of their work which is extremely important when handling public data.
- + The authors take into account error handling, another essential consideration when dealing with non-technical users.
- + The relevance and justification of the study are clearly defined and are well-founded. 
- + The studied topic is not only important, it can be considered crucial for a streamlined health system; however there are still limitations. The study is able to fully take these into account. Kudos to highlighting the cost and sustainability issues with relying on external AI models.
# Gaps, contradictions, inconsistencies

- The methodology description is not fully clear. It was unclear whether the initial data collection was used to guide the tool development, such as the UI or main components.
- The images are very small and almost unreadable. Since there is still some space, I recommend using a double column for the most important pictures. There is also a caption for Figure 3 but no Figure 3.
- While the paper highlights the tool's error handling capabilities, an example of how that is done or shown to the user would help the reader better understand the process.
- The textual and figurative architecture descriptions do not match. Five layers are described textually, but the figure only shows four layers.

# Comments

It is a very nice paper overall, with some small modifications, I would have marked this as strongly accept. Consider formatting the figures so they are more readable and restructuring the methodology description for the camera-ready version. 

Furthermore, as a rule of thumb, figures (and tables) should always be referenced and explained in the text, for example, "An example of the described front-end is provided in figures 7 and 8". By adding these references, the reading flow is improved and the reader can more easily know when which figure is relevant. Currently, some figures seem to be included just for the sake of including them. 

Finally, some small details that could be added:

- Regarding the database restructuring to optimize query speed, is that something worth looking into if LLMs are not used? This sounds like something that could be more easily implemented in all nations that use DHIS2. If so, it might also be nice to mention this in the paper.
- What were the complaints of the 15% of participants that were not satisfied with the system? Was it because of the data quality issues?
- Were there any trends in the unsuccessful queries? Were these the complex ones that were mentioned?
