---
layout: default
title: Hosting a virtual node
permalink: /virtual/
---

# Hosting a virtual node

You can participate in the PINOT project by hosting a Docker container that will be available to participants for experiments.

This container is an isolated process that will not have any access to the host system besides basic Internet access.
It relies on existing Docker containerization technology and do not add any significant overhead to the system while not doing any experiments.

To start the node, it's needed to:
1. Install Docker Engine
2. Start the container

## Install Docker Engine
If you already have Docker installed, you can skip this part.  
We recommend using Linux-based OS for hosting the node for optimized experience.

### Linux
You can install the Docker distributive according to instructions of your distributive, or using the universal Docker script:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

For custom or more complicated installation scenarios, please refer to the next link: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

### Windows and macOS
You can use Docker Desktop from [https://www.docker.com/](https://www.docker.com/). Please note, that Docker Desktop is more manual than
Docker Engine and could require additional configuration or increased resource usage.

## Start the container
Once Docker Engine is installed, you can start our container using the next command:
```bash
docker run -d --restart=always maybehelloworld/pinot-virtual:latest
```

This command starts a container in the background (`-d`) and automatically restarting it (`--restart=always`) if anything would happen. 

If you are using Docker Desktop, possibly you will have to run this container manually. In that case, use the next image name: `maybehelloworld/pinot-virtual:latest`
to start a container.

## Notify PINOT team
Please, notify the PINOT team about hosting a PINOT node via this email: [pinot@cs.ucsb.edu](mailto:pinot@cs.ucsb.edu)

We appreciate your help and would like to know a bit more information
about your network conditions and approximate location for statistical purposes.

## Container maintenance
You don't need to do anything to maintain the container.  
If due to any conditions your node would be turned off for an indefinite amount of time, we would appreciate 
if you notify the PINOT team about it using our email address: [pinot@cs.ucsb.edu](mailto:pinot@cs.ucsb.edu)