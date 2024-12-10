---
title: C and C++ verifiers
date: 2024-12-04
draft: false
image: boat.jpeg
position: 50% 70%
tags:
  - Verification
  - C
---

# CPAchecker
*Website*: https://cpachecker.sosy-lab.org/index.php

CPAchecker is a tool for configurable software verification. Our implementation is guided by the concepts described in the CAV'07 paper "Configurable Software Verification" and in the ASE'08 paper "Program Analysis with Dynamic Precision Adjustment"

# Cppcheck
*Website*: https://cppcheck.sourceforge.io

**Cppcheck** is a [static analysis tool](http://en.wikipedia.org/wiki/Static_analysis_tool) for C/C++ code. It provides [unique code analysis](https://cppcheck.sourceforge.io/#unique) to detect bugs and focuses on detecting undefined behaviour and dangerous coding constructs. The goal is to have very few false positives. Cppcheck is designed to be able to analyze your C/C++ code even if it has non-standard syntax (common in embedded projects).
# CProver / CBMC
*Website*: https://www.cprover.org/cbmc/

CBMC verifies memory safety (which includes array bounds checks and checks for the safe use of pointers), checks for various further variants of undefined behavior, and user-specified as­ser­tions. Further­more, it can check C and C++ for I/O equivalence with other languages, such as Verilog. The verification is performed by unwinding the loops in the program and passing the re­sul­ting equation to a decision procedure.