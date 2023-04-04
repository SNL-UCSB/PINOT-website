---
layout: default
title: The PINOT Project
nav_order: 1
has_children: false
permalink: /
---

PINOT is a programmable infrastructure for AI/ML for Networking (NetAI) research
that enables network measurements from real-world infrastructure to create trustworthy data-based solutions.

This effort is supported by:
* NSF Campus Cyberinfrastructure (CC*) grant, OAC-2126327; and
* NSF and Intel Machine Learning for Wireless Systems (MLWiNS), CNS-2003257

You can contact the team and ask questions using the next email: [pinot@cs.ucsb.edu](mailto:pinot@cs.ucsb.edu)

## Project goal
We aim to deploy dozens of small programmable devices (usually - Raspberry Pi) capable of executing network measurements (such as ping, traceroute, etc.)
that would be centrally managed and controlled. These devices would be connected to a public infrastructure available at the deployment location
and would represent a typical user or equipment connected to the network.

Imitating a typical user allows us to investigate real-world problems and collect better datasets representing the complexities of existing networks.

## Project locations
We cover several different locations in the University of California, Santa Barbara, and Goleta city.

### UCSB installation
We use multiple vantage points at the University of California, Santa Barbara to collect the data and issue measurements.
We deploy nodes in different locations, including University's main library, student dormitories, university center, faculty building, and others.
All nodes are connected through a public university Wi-Fi and (sometimes) use a local wired connection, allowing them to generate measurements from any of the interfaces.

In addition to the physical deployment of PINOT nodes, our team established a data-collection infrastructure to collect a stream of packets from the UCSB's
border gateway to be able to use passive traffic analysis to enrich our measurements. **To guarantee the users' privacy we:**
- Strip away all packet payload,
- Anonymize privacy-sensitive packet header fields,
- Strictly control access of our team to the infrastructure, including background checks and multi-factor authorizations.

Our data-collection pipeline has been approved by UCSB’s institutional review board and UCSB’s Academic Senate Committee for Information and Technology (CIT).

### Isla Vista and Goleta
We deployed several nodes in Isla Vista and Goleta in volunteers' houses. These nodes help us to investigate cross-provider problems and
expand our presence to multiple physical locations. These nodes are located at volunteers' houses and use their provider's connection for communication.

### Other places
Currently, we are expanding our presence over Santa Barbara county and always welcome new volunteers who are able to host the PINOT node.
Please, apply through the [Apply for a node](https://docs.google.com/forms/d/1H44yeI5u_tb1pQLd0ocA8ABWxaQ5aZB7QCqAyiGURbA) page.

## How we manage our infrastructure?
We use an open-source platform [SaltStack](https://saltproject.io/) to control and maintain our devices.
Deployment of the experiments could be done via different ways, including Docker container deployment or using [netunicorn](https://netunicorn.cs.ucsb.edu) platform.