# Critical Data & Visualization 🐣 Spring 2020

Welcome! This page will be filled with material and links throughout the semester. I recommend to **bookmark it now**




- **Instructor**: Leon Eckert, [leon.eckert@nyu.edu](mailto:leoneckert@nyu.edu)
- **Class Times**: Mondays & Wednesdays, 1:15pm-2:30pm ([calendar](https://calendar.google.com/calendar?cid=bnl1LmVkdV9pNzZhYWZzbDRmdTRoZmQzYzVkZjRpZHI2c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t))
- **Class Location**: Cyberspace ([zoom links](https://calendar.google.com/calendar?cid=bnl1LmVkdV9pNzZhYWZzbDRmdTRoZmQzYzVkZjRpZHI2c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t))
- **Office Hours**: Tuesdays, 11am-1pm, 6-7pm （[sign up](https://calendar.google.com/calendar/selfsched?sstoken=UUE0X1AyMVlCNnpyfGRlZmF1bHR8ZTBmYjk2MTcyMjZkZmUwMzhjYTllN2IxMzlkMmQ4MTU)）
- [Official Syllabus](https://drive.google.com/drive/folders/1hsDaMtkUvd-vg_qBLQJkBr30WV3cBB5b?usp=sharing) (accessible with NYU e-mail address)

#### Quick Links

- [current assignments](other/current-assignments/README.md)
- Problems with Zoom or other things? >> [NYU's Digital Teaching & Learning Toolkits](https://wp.nyu.edu/toolkits/)

#### Course Description

Course Description
Data collection and algorithmic processing are not only central to recent technical breakthroughs such as in Artificial Intelligence and automation but have created new economic paradigms where data equals value and shape political approaches to power and control.

Decisions based on algorithms affect society at large whether it’s changing the way we transport and distribute goods, influencing the things we buy or the news we read. The world that algorithms see is data. For the average person, however, data is seldom more than an abstract idea.

So, what exactly is data? How is value extracted from it? And why should we care? How can we ethically balance the positive uses of data-driven systems with the threats they pose to discriminate and infringe basic human rights? This course seeks to untangle some of these issues practically and theoretically.

### Content
- Week 1 - [Guessing The Landscape](#week-1)
- Week 2 - Data Types
- Week 3 - Human / Bias I
- Week 4 - Human / Bias II
- Week 5 - Prediction & Uncertainty
- Week 6 - Data Zine Project Presentation 🎉
- Week 7 - Surveillance Capitalism I
- Week 8 - Surveillance Capitalism II
- Week 9 - Ethics & Privacy
- Week 10 - Data Story Contextual Report & Presentation 📚
- Week 11 - Power & Control I
- Week 12 - Power & Control II
- Week 13 - Resistance
- Week 14 - Data Story Presentations 🥂

## Week 1

![Guessing the Landscape](other/assets/week1.jpg)
### Monday Class

Introductions.

Group Activity: Mapping the subjects of this course.

Take-aways:
- Data is never “raw”, but always cooked.
- “data”
  - from latin (‘given’)
    - how about "capta" (== ‘taken’)?*
  - used in singular and plural
- data has no truth
- Data and Data Infrastructures
  - looking beyond data as a resource
  - data is performative

<br>
\*J Drucker

#### Assignments:

Due this Wednesday (2020/02/19):
- Do this assignment first (strongly recommended)
-  We will spend 50% of our time in this course coding. Having a shared foundation for this is **extremely important**. I will always be there to support and assist you with problems you encounter. For now, please work your way through [Coding Foundation: Setup and Exercises](coding-foundation) and submit your work in the end.
- Here is a thorough, interactive ``basic-javascript`` tutorial if you want to brush up your skills: [Basic JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/). And [here](https://www.codecademy.com/learn/introduction-to-javascript) is Codecadey's version.

Due Monday (2020/02/24):
- Read [**Critical Questions for Big Data**](readings/boyd_crawford_2012.pdf) by danah boyd and Kate Crawford. The linked version has some intentional notes that will help you. Please read the whole text despite below prompts being pointed at specific sections. There is no right or wrong, **what counts more than anything is your own opinion**. For each prompt, write no more than a short paragraph:
  - Introduction and Chapter 2
    - Why does Bowker say "'*Raw data is both and oxymoron and a bad idea*'" ? (pp. 663)
  - Section 1 (pp. 665)
    - What could be meant by the quote "'*accounting tools [...] do not simply aid the measurement of economic activity, they shape the reality they measure*'"? Try draw parallels to the CompStat system from the Reply All Podcast.
  - Section 3 and 4 (pp. 668)
    - In which way is Twitter data limited?
  - Section 5 (pp. 671)
    - If you don't need to login to obtain certain data, then it is public and free to use. Or isn't it? Please share your opinion.
  - Section 6
    - No prompts here, but a very well written chapter that is relevant to everything we will be talking about this semester. Please enjoy.

- **How to submit the homework**:
  - First, find or create a folder in your repository (e.g. `my-work/week1/reading-response/`). In there, create a `README.md` file.
  - In this file, do your writing (if you want, [format your text nicely](https://guides.github.com/features/mastering-markdown/)).
  - When you are done, [push your changes to your repository](other/how-to-submit-assigments) as you learned in the [Coding Foundation Exercise](coding-foundation) and paste a link to the [class wiki](wiki).

###### Optional/Related readings and resources:

- [*\"Raw Data" is an Oxymoron* (Introduction)](https://mitpress.mit.edu/books/raw-data-oxymoron), Gitelman L (2013)\*
- [*\"Raw Data" is an Oxymoron* (Capter 1: Data before the Fact)](https://mitpress.mit.edu/books/raw-data-oxymoron), Rosenberg D\*
- [*Data infrastructure literacy*](https://journals.sagepub.com/doi/10.1177/2053951718786316), Gray J, Gerlitz C, Bounegru L (2018)
- [*Humanities Approaches to Graphical Display*](http://www.digitalhumanities.org/dhq/vol/5/1/000091/000091.html), J Drucker (2011)
- [*Anatomy of an AI System*](https://anatomyof.ai/), Crawford K, Joler V (2018)

\*online version accessible through NYU library


#### Course Overview and Learning Outcomes

The overarching goal of this course is for students to gain the tools and the comfort to think critically about the ways data is utilized in the ever-growing technological landscape we are immersed in. With this in mind, the course is split in two weekly sessions: a theoretical class and a practical lab.

The classes include lectures introducing contemporary theorists, artists, groups, and in-class discussions or exercises. Themes guiding this exploration include “Human / Bias”, “Prediction & Uncertainty”, “Surveillance Capitalism”, “Ethics & Privacy”, “Power & Control” and “Resistance”. In the weekly lab, students will learn the fundamentals of web-based data visualization using JavaScript. The purpose of this is to understand what data feels like through hands-on experimentation and what data says or doesn’t say by rendering the information it carries visually.

Upon Completion of this Course, students will be able to:
- **map** actors, their roles and relations within a broader data infrastructure.
- **identify** problematics of "datafication" and **generate** ideas for response.
- **identify** various visions, values and cultures inherent to datasets.
- **build** data visualizations for the web.
- **build** their own datasets.
- **make** use of data APIs and scraped data.
- **visually** communicate information pertaining to a given dataset.
- **critique** their own work and others' constructively.
