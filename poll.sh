#!/bin/bash

while true;
do
  curl http://localhost:3000/api/v1/foo
  sleep 2
done