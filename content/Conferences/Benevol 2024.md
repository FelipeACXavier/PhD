---
title: Benevol 2024
date: 2024-11-21
description: The 23rd Belgium-Netherlands Software Evolution Workshop (Wed 20 +) Thu 21 - Fri 22 November 2024, Namur Belgium
draft: false
tags:
  - Conferences
image: /static/background/red_mountain.jpg
position: 50% 20%
---

# Day 1
---
## Session - PLs & Development complexities
---
### Rethinking Paradigmatic Collaboration: A New Metric for Inter-paradigm Synergy in Software Engineering

- New taxonomy for defining programming paradigms.
### Pyttern: a Python-Based Program Query Language

- Pattern matching for Python -> Pyttern.
- Inspired by Regex and validated with students.
- Students did not enjoy the tool despite it being easy to use. It was really hard to debug.
- Updated to use a parse tree.
	- Non-deterministic FSM
### Application of Programming Cocktails Identity Cards to Development Complexity Analysis

- Combination of programming technologies directly applied to the development process
- Quantitative approach -> Spreadsheets are not enough
	- Created ontologies to understand and construct knowledge
- Feedback: How to derive and measure cognitive load from the generated graphs?
- Is a human parameter missing in the analysis?
## Session - Software Ecosystems
---
### Towards an Empirical Analysis of Code Cloning and Code Reuse in CI/CD Ecosystems

- Looks into practices that use GitHub Actions
- Origin? Impact? Evolution?
- This is done through an existing dataset from 2024
### Work in Progress Paper: Detecting Method Level License Conflicts in the Worldwide Software Ecosystem

- How to detect open-source license violations? Who is violating them? Etc...
- A hash based index for code fragment -> Search code at method level worldwide
	- Based on this, it is easier to find code violations
- They are now able to look for duplicate code across OS projects.
## Session - Static Analysis
---
### AST Matching based on Concrete Syntax Patterns: Exploration of the Specification Challenges

- Challenges for specifying concrete and abstract syntax trees
### Combining Static and Dynamic Techniques for Refactoring Industrial FSMs in C++

- How to handle code refactoring? Moving from an old framework to a more recent one.
- Combine rascal and model learning outputs to look for similarities.
- The technique works quite well, but it still had issues with state -space explosion. 

> [!info] 
> Phillips is actually using Dezyne. They are updating their models from their own framework to Dezyne.
### Abstract Slicing To Improve The Speed Of Static Program Analysis

- They are trying to speed up static analysis by using slicing
- Smaller code sizes due to these slices
- Takes into account variables that are used but not part of the initial slices
### Improving JSON Schema Inference by Incorporating User Inputs

- How to derive schemes for JSON patterns
- The authors created an inferrer that uses user input when it is in doubt about how to define the scheme

## Session - Software Repositories
---
### Beyond Mining Evolutions With Diffs: Interactive Search Of Code Evolutions In Software Repositories

- Pattern based look into software repositories
- Quite confusing to be honest.

### Classifying Linux commits

- Explain to the auto industry why Linux, even if stable, still has 80000 commits a year
-  Three annotators are used to evaluate the goal of the commits -> Krippendorff's alpha

### Towards Understanding Open-Source Software Communities

- 

### Catching Smells in the Act: A GitHub Actions Workflow Investigation

- Wanted to identify code smells through empirical analysis
- Found 7 main ones

### On the Evolution of GitHub Actions workflows

- After 5 years around, they thought it was time to do some study on how GitHub actions evolve.

### A Review and Catalogue of Dependency Challenges in Open Source Software Package Registries

- Too much to talk about, they focused on vulnerabilities due to dependencies instead.
- Security seems to be getting worse.
