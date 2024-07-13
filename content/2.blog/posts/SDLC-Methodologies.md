---
layout: post
title: 'SDLC Models'
description: 'Episode 3: Breaking down different Software Development Lifecycle Models'
image: https://miro.medium.com/v2/resize:fit:848/0*vafo6t1qd2yv_g9O.png
timestamp: 1718720988393
date: 2024-07-12T17:30:00Z

author: Hunter Macias
position: Maintainer
avatar: https://media.licdn.com/dms/image/D5603AQHEoTWqYGwf4Q/profile-displayphoto-shrink_200_200/0/1712502758289?e=2147483647&v=beta&t=VxzuymWP5oP6ckzi5yzhonKYr9AsDtZnD81oO45-nXo
avatarLink: https://github.com/huntermacias

published: true
---


## SDLC Models:

### Waterfall Methodology

- Stages of waterfall model are:
    1. Requirements - product requirements documentation (PRD) created. What problem that product is solving and what resources are required to do it? 
    2. Design - Software requirements analysis, modeling architecture. Well design systems add to quality, reliability, security, performance of the product
    3. Coding - building actual product based on the system design.
    4. Integration and Testing - bringing components together.  Verification that product meets requirements. In this stage QA Engineers open bugs, developers fix them, and QA engineers verify that they are indeed fixed and there are no regressions
    5. Operations - deployment, support, maintenance of complete systems. User found issues fixed, updates, patches, system monitoring and live product related activities. 
    
    | Advantages | Disadvantages |
    | --- | --- |
    | well planned and documented | hard to update requirements |
    | clearly defined stages | going back to previous stages is almost or very expensive |
    | structured approach | no feedback from users |
    | requirements are set in place | most testing comes after deployment |
    | mostly monolithic applications | does not fit well in competitive and changing markets |
    | realistic estimates, dates, contracts | high risk if product fails |
    | good for regulated industries, big corporations |  |

### Agile Methodology

- Agile has different forms: scrum, shift right, shift left, and more
- Incremental improvement
- There is no exit like in waterfall as long as product is viable and in demand it will adapt and improve, backlog (list of features to work on) is never empty
- Instead of working on a complete product in one large cycle, agile has small features based (called stories) iterations
- Classic agile can have a release cycle anywhere from two weeks to two months long. It may have different departments and a standard hierarchy with managers over departments
- Classic agile is flexible. The focus is on continues improvement of working product over comprehensive documentation



| Advantages | Disadvantes |
| --- | --- |
| high level of communication between business and development | might not serve well in regulated industries |
| customer satisfaction as key indicator of product success | frequent changes can lead to fast burnout  |
| adaptability to unexpected changes and market challenges | limited documentation or no documentation at all. Source of truth can be someone’s expertise or even opinion |
| if testing is implemented on all stages it will result in better quality of product | fragmented delivery can lead to gaps in integration and unexpected bugs on release |
| continuous improvement of product |  |

### SCRUM Methodology

- Agile on steroids
- works in small teams, there is no class hierarchy. Teams consist of 6-9 people that may have different members like: developers, qa, scrum master, product manager, dev ops, designers
- Small self organizing teams work on a selected project and act like special ops of development. High performance and high delivery speeds on features
- All work organized within sprints. Each sprint last from 2-4 weeks
- Scrum has a unique role called scrum master with task to facilitate scrum process
- Scrum has daily morning meetings called stand up that last ~15 minutes during which each member reports what they are working on today and if there are any blockers
- Epic = collection of stories
- Point System Example:


### Kanban / Lean Methodologies

- Kanban = mix of Lean / Agile method of development with visualization of workflow. Where teams prioritize tasks and complete them by moving through stages and from one side of the whiteboard to another.
- Key Ideas of Kanban
    - Manage flow - identify bottlenecks and estimate effort
    - Limit work in progress
    - Visible and simple processes
    - Continuous feedback
    - Continuous feedback

- Lean Principles:
    - Eliminate waste: not add value to the customer (bugs, partial work, micromanaging)
    - Build quality in: test early, eliminate as many bugs as possible in early stages
    - Create Knowledge: build often and practice small releases. Code reviews, knowledge sharing, documented processes
    - Delay commitment: do not commit to design or architecture until assumptions are ruled out and multiple solutions evaluated
    - Deliver fast - develop fast, receive feedback and improve based on it. Fail fast and learn from results.
    - Respect people: self-organized teams, develop leaders staffed with needed expertise, set reasonable goals.
    - Optimize the whole - each stage of SDLC should be analyzed with each iteration and optimized and improved through learning and experience

### Shift Left/Right Methodologies

<aside>
💡 SHIFT LEFT: Moving testing activities closer. to development. Emphasis on problem prevention

</aside>

<aside>
💡 SHIFT RIGHT: Moving testing closer to production. Focus on controlled production testing.

</aside>