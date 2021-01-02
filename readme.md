# Distributed logging side cart

## The problem

In any system we need logs to tell use what the running code is doing.
In a monolith the logging is usually easy. One application, one set of logs.

However in a distributed system we need to collect the logs from each application.
Failing to do so would make it hard to figure out what is going on in the system as a whole.

## What we can do

There are many options we could use.
In this demo we will look at one of my favorite approaches.
