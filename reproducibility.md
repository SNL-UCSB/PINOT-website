---
layout: default
title: Reproducibility
permalink: /reproducibility/
nav_order: 4
---

# Reproducibility

This page discusses how we create the infrastructure and how to reproduce it on your own.

## Passive Measurements

With agreement of the IT department of UCSB, we deployed a programmable Intel Tofino switch (Wedge 100BF-32X) near the border router of the university and mirrored all the traffic to the switch. On this switch, with agreement with institutional review board and UCSB’s Academic Senate Committee for Information and Technology, we strip the payload and then forward the stripped packets to servers for saving, using `tcpdump`.

Servers' configuration:

- 2 x 14-Core Intel Xeon Processor
- 16 x 8 GB DDR4 RAM
- 2 x RJ45 10GBase-T ports
- 1 x RJ45 dedicated IPMI LAN port
- Thinkmate Riser Card - Left Side WIO - 4x PCIe 3.0 x8
- Thinkmate Riser Card - Left Side WIO - 2x PCIe 3.0 x8
- 2 x Mellanox 50-Gigabit Ethernet Adapter ConnectX®-4 EN MCX414A (2x QSFP28)

We found, that 3 servers with 4 SFP28 interfaces each and NVMe disks are enough to capture and preprocess all the UCSB traffic, that is load balanced between them. Data is stored on the server until extracted or overwritten.

Before further usage, headers also are preprocessed to remove or mask sensitive information (such as IP addresses, etc.). We use [ONTAS](https://p4campus.cs.princeton.edu/ontas.html) system, deployed on the switch, for anonymization.

We highly recommend securing and restricting the collection servers, including usage of SSH keys, disabling password authentication, using Multi-Factor Authentication devices, restricting servers only to needed users, and explicilty closing all the ports except for SSH connection.

## Active Measurements

We ordered and deployed around 100 Raspberry Pi 4B devices over the campus infrastructure, connecting to wired infrastructure and public campus Wi-Fi infrastructure, used by all university students, to provide network connectivity. Due to being connected to the same access points as all students of the campus, we are able to monitor the network performance of the campus network from the perspective of the typical user, including the impact of peak usage time, congestion, and other factors.

Each Raspberry Pi is encapsulated into an aluminium case and (sometimes) has a Power-over-Ethernet hat to cover places without power outlets.

We run a modified version of Ubuntu 22.04, optimized for Raspberry Pi and secured additionally. See all the details in the corresponding repo: [GitHub/SNL-UCSB/PINOT-image](https://github.com/SNL-UCSB/PINOT-image).

All devices have a public QR code with a link to a webpage, corresponding to this device, showing some measurements results. Source code for link generation is located here: [GitHub/SNL-UCSB/PINOT-labels](https://github.com/SNL-UCSB/PINOT-labels).

The source code of the website located in the next repository: [GitHub/SNL-UCSB/PINOT-website](https://github.com/SNL-UCSB/PINOT-website)

### Background experiments

We run several background measurements to provide users, scanning the QR code on a node, information about their network performance and quality. These measurements include ping to UCSB gateway, Wi-Fi signal strengt, TX/RX bitrate, uptime, and packet loss. Results of these measurements are stored in the Postgres database and are available on the website.

Source code of the experiments is located in the next repositories:

- [GitHub/SNL-UCSB/PINOT-watchdog](https://github.com/SNL-UCSB/PINOT-watchdog)
- [GitHub/SNL-UCSB/PINOT-UCSB-WiFi-watcher](https://github.com/SNL-UCSB/PINOT-UCSB-WiFi-watcher)

Data from these experiments, together with node location information, is also available via the REST API endpoint, deployed as PostgREST over the Postgres database.

### Nodes control

We use a [SaltStack](https://saltproject.io/) for controlling the devices remotely. Salt is a remote management tool, that requires deploying an agent on the device for maintainance. Agent-based architecture allows nodes to be behind firewalls and does not require public IP address. We "baked" the agent into the image, so it is deployed automatically with a unique nodename on the first boot.

### Experiment submission

We use [netunicorn](https://netunicorn.cs.ucsb.edu) platform to deploy experiments. This platform simplifies experiment development, provides pre-created tasks for different network measurements, and allows to seamlessly switch between different infrastructures, such as PINOT, Amazon AWS, Microsoft Azure, Mininet, etc.

The platform is deployed at our servers and connected to SaltStack to retrieve the node information and submit experiments. Most of the experiments use Docker containers for isolation and reproducibility.

Source code of the netunicorn platform, including connectors to different infrastructures and library with tasks implementation, is available here: [GitHub/netunicorn](https://github.com/netunicorn).
