#!/bin/bash

cd /home/ec2-user/project
pm2 -f start server.js
