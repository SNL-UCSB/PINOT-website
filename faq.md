---
layout: default
title: FAQ
nav_order: 3
permalink: /faq/
---

# Frequently Asked Questions

Here we provide some answers to frequently asked questions about the project.

### What is this metal box device with a QR code?
It is a PINOT node - a small Raspberry Pi-based device for network measurements, experiments, and data collection. 
These nodes are deployed in different places as a part of the PINOT project ([https://pinot.cs.ucsb.edu](https://pinot.cs.ucsb.edu)).

### What do PINOT nodes do?
We use these nodes for network measurements and experiments, such as pings to different locations, 
exploring Internet availability, measuring Quality of Experience, investigating local connection issues, etc.

### Is it sniffing all my data?
No. This device has the same capabilities as a typical Internet user connected to Wi-Fi and doesn't have any additional 
equipment. Besides that, only a small UCSB-based team has direct access to these devices and restricts all unauthorized access to them.

### Then what is it doing, if not listening to data around?
We use these devices for **active measurements** - watching YouTube videos (with cats, of course), initiating 
connections to different websites, and measuring latency and throughput of channels. This allows us to collect **labeled** 
datasets for better Machine Learning models and networking optimization.

### Who has access to different routing and end-host devices?
Direct access to devices is provided only to persons mentioned as active participants on the [team](/team) page. 
The indirect restricted access to submitting experiments to the nodes could be provided to networking researchers or teams.

### How can others find more information about the project?
You can use this website [https://pinot.cs.ucsb.edu](https://pinot.cs.ucsb.edu) to share this information with anyone. 
You can also contact people mentioned on the [team](/team) page to provide additional info or materials.

### How are the end devices secured and maintained?
The devices are managed by centralized software ([SaltStack](https://saltproject.io/)). Only the central server can 
remotely access the devices. Even in case of full physical access to one of the devices, an intruder cannot access 
centralized infrastructure or any other nodes. 

### It's too loud / too suspicious / I don't want this to be around!
Please, contact us by our email: [pinot@cs.ucsb.edu](mailto:pinot@cs.ucsb.edu)

### Can I do my own research using your devices?
Yes! Please, contact us by our email: [pinot@cs.ucsb.edu](mailto:pinot@cs.ucsb.edu)