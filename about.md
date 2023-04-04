---
layout: default
permalink: /about/
nav_order: 4
---

## What's PINOT?
PINOT is an abbreviation for programmable research infrastructure for NetAI.

It has two key components:
1. `Programmable interface`: A target-agnostic APIs that let the programmer(s) express their data-processing pipeline for collecting or applying learning models specifying what, when, and where to collect (or deploy) data, labels, and learning models.

![](https://hackmd.io/_uploads/SJETOHT-9.png)

2. `Driver(s)`: Translates target-agnostic programs into target-specific
configuration/programs and commands.


![](https://hackmd.io/_uploads/SkVPcS6b9.png)


Currently, our focus is more on data-collection. Here, we have two key
modules: (1) collects packet traces from different vantage points in the
networks, (2) collects application-specific data from end-hosts. Here,
the end-hosts are usually single-board computers (e.g., RasPis) that are
sprinkled across the campus network.


## Deployment
![](https://i.imgur.com/1xdBrdO.png)
### Stage 1
The first stage of this project entailed developing a data-collection pipeline
that collects raw packet traces from one or more strategic vantage points in a
privacy-preserving manner at scale. To this end, we developed a data-collection
infrastructure that ingests stream of packets from UCSB’s border router, and
uses reconfigurable hardware targets to perform the following tasks:
* Strip away privacy-sensitive packet payload,
* Anonymize privacy-sensitive packet header fields, and
* Scale data collection using in-network load-balancing.

Through this pipeline, we can collect network traffic for around 7-8 (peak)
hours every day. Our data-collection pipeline has been approved by UCSB’s
institutional review board and UCSB’s Academic Senate Committee for Information
and Technology (CIT).

The first stage of the project enabled curating an unlabelled dataset that
helped identify various coarse-grained network events. For example, we can
provide evidence for transient congestion events that only last 5-10 seconds,
but can potentially have a significant effect on end user’s QoE, especially
for real-time applications, such as Zoom, Google Meet, Microsoft Team, etc.
While we can study the network-level features at much finer temporal and
spatial granularities, we cannot associate them with user-level quality metrics.
For example, for a given video streaming session (e.g., YouTube), we can study
network-level features, such as number of bytes, inter-packet gaps, etc., but
we cannot learn how these metrics affect user experience metrics, such as
resolution (4K vs. HD), number of freezes, number of resolution switches over
time, etc.

To map network-level metrics, i.e., quality of service (QoS) to user-level
quality, i.e, quality of experience (QoE) metrics, we need to collect the QoE
metrics from the end-hosts. Our current setup does not collect any data from
the end hosts, which motivates us to transition to stage two of this
data-collection pipeline.

![](https://i.imgur.com/SI99w1s.png)

### Stage 2
Our goal is to collect QoE metrics from the end hosts at scale. Ideally, we’d
like to collect these metrics from the end-users directly, but such a
data-collection is intrusive to user privacy, and hard to scale. To address
this issue, our approach is to:
Develop software modules that automate collection of QoE metrics for different
web-based applications without requiring any human interaction.
Port this software to single-board computers (e.g., RasPis) that we can
seamlessly deploy across the campus network.
Programmatically collect data using the deployed nodes, specifying which node
to use for data collection, which application (e.g., Zoom, YouTube, etc.) to
collect the data for, and when to start the data collection.

We have already developed the software modules for a few popular web
applications, tested the software with 70+ RasPi computers, and developed a
programmable infrastructure to control the network of these single-board
computers for active data collection. Each of these RasPis are powered with
Power over Ethernet (PoE) boards, and can be easily plugged-in into existing
available ethernet ports at different locations across UCSB’s campus network.

Being able to merge this data with passive packet traces will provide us a
unique opportunity to curate labeled datasets for different types of learning
problems in networking (e.g., infer QoE using encrypted packet stream in the
network).
