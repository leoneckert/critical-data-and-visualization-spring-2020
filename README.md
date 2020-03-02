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
- Week 2 - [Data Types](#week-2)
- Week 3 - [Human / Bias I](#week-3)
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
    - What could be meant by the quote "'*accounting tools [...] do not simply aid the measurement of economic activity, they shape the reality they measure*'"?
  - Section 3 and 4 (pp. 668)
    - In which way is Twitter data limited?
  - Section 5 (pp. 671)
    - If you don't need to login to obtain certain data, then it is public and free to use. Or isn't it? Please share your opinion.
  - Section 6
    - No prompts here, but a very well written chapter that is relevant to everything we will be talking about this semester. Please enjoy.

- **How to submit the homework**:
  - First, find or create a folder in your repository (e.g. `my-work/week1/reading-response/`). In there, create a `README.md` file.
  - In this file, do your writing (if you want, [format your text nicely](https://guides.github.com/features/mastering-markdown/)).
  - When you are done, [push your changes to your repository](other/how-to-submit-assigments) as you learned in the [Coding Foundation Exercise](coding-foundation) and paste a link to the [class wiki](https://github.com/leoneckert/critical-data-and-visualization-spring-2020/wiki).

###### Optional/Related readings and resources:

- [*\"Breaking the Black Box](https://www.propublica.org/article/breaking-the-black-box-what-facebook-knows-about-you), 4 videos with texts, various ProPublica journalists (2016)\*
- [*\"Raw Data" is an Oxymoron* (Introduction)](https://mitpress.mit.edu/books/raw-data-oxymoron), Gitelman L (2013)\*
- [*\"Raw Data" is an Oxymoron* (Capter 1: Data before the Fact)](https://mitpress.mit.edu/books/raw-data-oxymoron), Rosenberg D\*
- [*Data infrastructure literacy*](https://journals.sagepub.com/doi/10.1177/2053951718786316), Gray J, Gerlitz C, Bounegru L (2018)
- [*Humanities Approaches to Graphical Display*](http://www.digitalhumanities.org/dhq/vol/5/1/000091/000091.html), J Drucker (2011)
- [*Anatomy of an AI System*](https://anatomyof.ai/), Crawford K, Joler V (2018)

\*online version accessible through NYU library

### Wednesday Lab

Find the Lab in detail [here](labs/lab-1)

Content:
- how a browser meets a website
- how a browser sees html
- css and js, endless metaphors
- review homework
- review JavaScript data structures
- collect data using Google Forms
- Mini data visualization using javascript

#### Assignments:

Due Wednesday (2020/02/26):
- Mini Project:
    - Create a Google Form collecting data of the "linear scale" type (like we did in this week's Lab)
    - collect responses from at least 10 people (e.g. send it to people in this class (use Slack or even Discord))
    - use the techniques [used in the lab](labs/lab-1) to
    - export the data in `json` format
    - transform it to an array with average values
    - build a bar graph using JavaScript ([lab's code](labs/lab-1/in-class-website))
        - be creative and make it look **more fun** than my example!
    - the last two points can be worked on simultaneously (**you don't need all the responses to start working on the code**)
    - relvant links:
        - [How to collect data using Google Forms
    ](labs/collect-data-google-form)
- Watch [this fun talk by Mike Bostock](https://vimeo.com/69448223), creator of [D3js](http://d3js.org/).


## Week 2

Data (types or categories)

### Monday Class

[today's slides](https://docs.google.com/presentation/d/1KMWsv-aqrG9gUheQfMJmR0iXoWAc7cQP9Lje_u2EEpU/edit?usp=sharing)

- discussion of "Critical Questions for Big Data"
- data (types) exercise
- art works I'd like to share
- Announcing Data Zine Project


#### Assignments:

Due Monday (2020/03/02):
- Read and add three contributions to this weeks reading assignment of "*You Are Your Data*" by Deborah Lupton. The text and the description of the assignment are in [this document](https://docs.google.com/document/d/1hl5ehstO1GhcWEio7DIl55m22Aqr3FDEl8rDK2bdsTQ/edit?usp=sharing).
- Listen (and enjoy) to this podcast: *Artificial Intelligence: The Problem with Bias, with Kate Crawford*. Here is a [Spotify Link](https://open.spotify.com/episode/0ysGO67iXaPmTx4h9v33z3?si=FmJeEuyJTeiqckjpHCTlVQ) - if you have trouble accessing, please contact me.
- Read through the Data Zine Project brief, especially the “The Data” paragraph, multiple times.
  - Define on a phenomenon that you will document/collect data about.
  - Name the features that you will take note of.  
Be poetic.
  - Check back with me on Slack if you are unsure or need help deciding between different options.
  - Start collecting your data tonight and present a week’s worth of data next week.


### Wednesday Lab

Find the Lab in detail [here](labs/lab-2)

Content:
- What is a library?
- Hi, D3!
  - pixels vs. SVG
  - examples
  - Data Driven Documents
- What you see when you see D3
  - Something dot something dot something semicolon
- **Code**
  - Download working files
  - Part 1: The Start ([Video](https://nyu.zoom.us/rec/share/yO9uELX6rUdIZc_R2XHxAa4oT6nnX6a8h3JL__JenU3HOYj2dbLeTxv9xbKx_bF-?startTime=1582681651000))
    - selections, methods, attributes, return values, shapes
  - Part 2: The Whole Point ([Video](https://nyu.zoom.us/rec/share/yO9uELX6rUdIZc_R2XHxAa4oT6nnX6a8h3JL__JenU3HOYj2dbLeTxv9xbKx_bF-?startTime=1582684221000))
    - binding data to elements, "select nothing?!", enter-selection
  - Part 3: Jaws Drop ([Video](https://nyu.zoom.us/rec/share/yO9uELX6rUdIZc_R2XHxAa4oT6nnX6a8h3JL__JenU3HOYj2dbLeTxv9xbKx_bF-?startTime=1582686145000))
    - data functions
  - Part 4: Real Data ([Video](https://nyu.zoom.us/rec/share/z8ZfA5OgxEhJX52VtFv9Qas4DL_heaa8hnRPq_dZnk7-eH-SSxqAUyOjLnmSBpQQ?startTime=1582689194000))
    - loading data in D3



#### Assignments:

Due Wednesday (2020/03/04):
- Read the [notes from the lab](labs/lab-2) carefully and watch the videos.
- Read them again, and email me questions you have. Book my [office hours](https://calendar.google.com/calendar/selfsched?sstoken=UUE0X1AyMVlCNnpyfGRlZmF1bHR8ZTBmYjk2MTcyMjZkZmUwMzhjYTllN2IxMzlkMmQ4MTU), too.
- Use D3 to turn the dataset you are currently collecting (started after Week 2 class) into shapes.
- Do not worry about visualizing the data *effectively* yet.
- create any shapes from it and use [data functions](labs/lab-2#data-functions) in at least one spot in way that the value of your data point affects the shape you created using D3.
- push your work to your repo and submit a link to the [class wiki](https://github.com/leoneckert/critical-data-and-visualization-spring-2020/wiki) by Wednesday (2019/09/18)




## Week 3

Human / Bias I

### Monday Class

[today's slides](https://docs.google.com/presentation/d/1KMWsv-aqrG9gUheQfMJmR0iXoWAc7cQP9Lje_u2EEpU/edit?usp=sharing)

- discussion of reading/listening
  - what is "[*The Problem with Bias*](https://open.spotify.com/episode/0ysGO67iXaPmTx4h9v33z3?si=FmJeEuyJTeiqckjpHCTlVQ)"?
  - in pairs, find arguments for both theses:
    - When making decisions, machines/algorithms/data...
      - ... are more objective than humans.
      - ... are biased.
- Check-in: Data Self collection ([sheet](https://docs.google.com/spreadsheets/d/1SRh-0o51itDFr8xg4VAkXJLHSt-tIllEO-hl8MKeE6A/edit?usp=sharing))
- Current topics: [China's new Internet Content Regulations](http://www.cac.gov.cn/2019-12/20/c_1578375159509309.htm)
- Data Art ([slides](https://docs.google.com/presentation/d/125nhtAiFL-EcsLb0iJwoKTvRPCHXgtbYSGkZ6cyZ9y4/edit?usp=sharing))
- Assignments

#### Assignments:

Due **THIS** Wednesday (2020/03/04):
- Upload a JSON file of the data you have so far self-collected to your repository and post a link to the [class wiki](https://github.com/leoneckert/critical-data-and-visualization-spring-2020/wiki).

Due Monday (2020/03/09):
- "[Automating Inequality](https://us.macmillan.com/books/9781250074317)" (2018) is a fantastic book by Virginia Eubanks that addresses specifically the *who* -- who is impacted by the process of *datafication* of society we discuss in this class. The book discusses the *who* that is not individuals, but groups of people.
  - This week, you don't have to read (you may if you wish; I can make the book available to you), but listen to an interview with the author Virginia Eubanks.
    -  "Writer's Voice, Automating Inequality w Virginia Eubanks" (**1 hour**)
      - [web link](https://www.writersvoice.net/tag/virginia-eubanks/), [Apple Podcast](https://podcasts.apple.com/us/podcast/virginia-eubanks-automating-inequality/id268934105?i=1000454045481), it's on Spotify, too, but I cannot link to it for a strange reason, search for `Virginia Eubanks, AUTOMATING INEQUALITY` and find this image:
      - ![automating inqequality](other/assets/ve.png)
  - Formulate short responses to the following prompts, no more than **400-500 words in total**.
    - How to technical tools promise to "fair out" the remaining discrimination that exist in social/welfare systems? In how far can they succeed, in which ways do they fail?
    - Imagine, what could this (following quotes) mean in the widest sense?
      > "*The state doesn't need a cop to kill a person*" and "*electronic incarceration*"
    - What do you understand this to mean?
      > "*systems act as a kind of 'empathy-overwrite'*"
    - China is much more advanced and expansive when it comes to applying technical solutions to societal processes or instant challenges ([recent example](https://www.nytimes.com/2020/03/01/business/china-coronavirus-surveillance.html?)). Try to point example cases in China that are in accordance or in opposition to the problematics discussed in the podcast. Perhaps you can think of
      > "*technical systems not well thought-through about what their impace on human beings is*"
  - Post your writing to the [class wiki](https://github.com/leoneckert/critical-data-and-visualization-spring-2020/wiki).
- Watch [Machine Learning and Human Bias](https://www.youtube.com/watch?v=59bMh59JQDo) (**3 minutes**)
- Watch [How I'm fighting bias in algorithms](https://www.youtube.com/watch?v=UG_X_7g63rY) by Joy Buolamwini (**9 minutes**)




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
