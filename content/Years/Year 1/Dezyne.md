---
title: Dezyne
date: 2024-10-11
description: Initial considerations regarding the installation, and usage of Dezyne.
draft: false
image: /static/background/wave.jpg
position: 50% 50%
tags:
  - Year-1
---


# Installation 
---

  Finally, I friggin installed dezyne.  
  I understand why they want to simplify this process, this was terrible.  

  I am detailing the steps here in case I need them again, this was hell:

  1. Download the sources: `git clone <https://git.savannah.nongnu.org/git/dezyne.git`
  2. Download all the dependencies:
      1. [Guile 3.0.5](https://gnu.org/software/guile/) This is easy to install: `sudo apt-get install guile-3.0`
      2. [Guile json](https://savannah.nongnu.org/projects/guile-json/) also easy to install, just build the source.
      3. [Make](https://www.gnu.org/software/make/). Should already be installed
      4. [mCRL2](https://mcrl2.org/) Also needs to be built from source, the deb package is broken.
      5. [SCMackerel - 0.5.3]([https://gitlab.com/janneke/scmackerel](https://gitlab.com/janneke/scmackerel)][SCMackerel) This was the worst by far, the source installation is broken. We need to installed with guix (`apt install guix`), but it doesn't install in the folder guile looks for modules. The only thing that worked was manually copying the module: `sudo cp -r ~/.guix-profile/share/guile/site/3.0/scmackerel /usr/share/guile/site/3.0/`
      6. Boost for C++: `sudo apt-get install libboost-all-dev`
      7. Other development libraries: `sudo apt-get install autoconf automake gettext libtool texinfo help2man`
  3. Finally, to build it:

  ```Plain
  guix shell
  ./autogen.sh
  ./configure
  make -j4
  ./pre-inst-env dzn
  ```

  1. If you want to have `dzn` available everywhere:

  ```Plain
  ln -s <path>dezyne/bin/dzn /usr/local/bin/dzn
  ```

  Dezyne is quite okay once we get used to it.

# Exploring dezyne
---

- Dezyne does not seem to be a trivial language.
- From the get go, I am not fully sure how it is developed. Nonetheless, thankfully to my previous experience with it and sysdl, I can understand the top-level syntax.

```C
  behavior
  {
    bool idle = true;
    [idle] on hello: idle = false;
    [!idle]
      {
        on cruel: {idle = true; reply (idle);}
        on cruel: reply (idle);
        on inevitable: {world; idle = true;}
      }
  }
```

- Above, **behavior** defines the behavior of the _ihello_bool_ interface.
    - It is possible to have internal variables `bool idle = true;`
    - `[idle]` guarantees that the following block given that `idle  true`
    - `on hello:` executes the following block once the "hello message" is received.
- The generated C++ code is fairly straight forward. The different components are linked through the specified interfaces thanks to std::function's
- How do they handle inter-process communication? The power from such a tool would appear once different components and systems started talking to one another.
- I believe that the different calls are executed in the thread pool. I need to double check this behavior, but I believe that a look into the simple-state-machine example with gdb might be very useful. After that, I should have an overview on the code generation aspect.

> [!note]  
> I doubt I will have a decent understanding of the verification aspect of dezyne, i.e. mCRL2, in just a few days. If that is desired for the PhD, I think it is wise to refresh my system validation concepts and then explore the source code. I don't think this will be necessary, but I suspect that at least a good understanding of the tool and its capabilities will be necessary  

# Using Dezyne
---

### Use `simulate` to run the model

```Plain
Usage: dzn simulate [OPTION]... [FILE]...
Simulate a Dezyne model

  -C, --no-compliance    skip the compliance check
  -D, --no-deadlock      skip the deadlock check
  -Q, --no-queue-full    skip the external queue-full check
  -R, --no-refusals      skip the refusals check
  -f, --format=FORMAT    display trace in format FORMAT [event] {diagram,event,trace}
  -h, --help             display this help and exit
  -I, --import=DIR+      add DIR to import path
  -i, --internal         display system-internal events
  -l, --locations        prepend locations to output trail,
                           implies --format=trace
  -m, --model=MODEL      generate main for MODEL
      --no-interface-determinism
                         skip interface RTC determinism check
      --no-interface-livelock
                         skip interface livelock check at EOT
  -q, --queue-size=SIZE  use queue size=SIZE for simulation [3]
      --queue-size-defer=SIZE
                         use queue size=SIZE for simulation [2]
      --queue-size-external=SIZE
                         use queue size=SIZE for simulation [1]
      --state            show state after every action, trigger
  -s, --strict           use strict matching of trail
  -t, --trail=TRAIL      use trail=TRAIL [read from stdin]
  -v, --verbose          show non-communication steps in trace,
                           implies --format=trace --locations

```

### Use `graph` to generate graphs:

```Plain
Usage: dzn graph [OPTION]... [FILE]...
Generate graph from a Dezyne model

  -b, --backend=TYPE     write a graph of TYPE to stdout [system]
                           {dependency,lts,state,system}
  -f, --format=FORMAT    produce graph in format FORMAT [dot] {aut,dot,json}
  -h, --help             display this help and exit
  -H, --hide=HIDE        hide from transitions HIDE {labels,actions,returns}
                           implies --backend=state
  -I, --import=DIR+      add DIR to import path
  -L, --locations        include locations in graph
  -m, --model=MODEL      produce graph for MODEL
  -q, --queue-size=SIZE  use queue size=SIZE for exploration [3]
      --queue-size-defer=SIZE
                         use defer queue size=SIZE for verification [2]
      --queue-size-external=SIZE
                         use external queue size=SIZE for verification [1]
  -R, --remove=VARS      remove state from nodes VARS {ports,extended}
                           implies --backend=state

```

### Use `verify` to check models

```Plain
Usage: dzn verify [OPTION]... DZN-FILE
Check DZN-FILE for verification errors in Dezyne models

  -a, --all                keep going after first error
  -C, --no-constraint      do not use a constraining process
  -h, --help               display this help and exit
  -I, --import=DIR+        add DIR to import path
  -m, --model=MODEL        restrict verification to model MODEL
      --no-interfaces      skip interface verification
      --out=FORMAT         produce output FORMAT (use "help" for a list)
  -U, --no-unreachable     skip the unreachable code check
  -q, --queue-size=SIZE    use queue size=SIZE for verification [3]
      --queue-size-defer=SIZE
                           use defer queue size=SIZE for verification [2]
      --queue-size-external=SIZE
                           use external queue size=SIZE for verification [1]

```

### Use `code` to generate code from the dezyne models

```Plain
Usage: dzn code [OPTION]... DZN-FILE
Generate code for Dezyne models in DZN-FILE

  -c, --calling-context=TYPE  generate extra parameter of TYPE for every event
  -C, --no-constraint         do not use a constraining process
  -h, --help                  display this help and exit
  -I, --import=DIR+           add DIR to import path
      --init=PROCESS          use init PROCESS for mCRL2
  -l, --language=LANG         generate code for language=LANG [c++]
  -L, --locations             prepend locations to output trace
  -m, --model=MODEL           generate main for MODEL
  -o, --output=DIR            write output to DIR (use - for stdout)
  -q, --queue-size=SIZE       use queue size SIZE [3]
      --queue-size-defer=SIZE
                              use queue size=SIZE [2] for defer
      --queue-size-external=SIZE
                              use queue size=SIZE [1] for external
  -s, --shell=MODEL           generate thread safe system shell for MODEL
  -U, --no-unreachable        do not generate unreachable code tags

Languages: c++, dot, dzn, json, makreel

```
