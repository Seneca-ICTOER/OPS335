---
id: crontab-tutorial
title: Crontab tutorial
sidebar_position: 3
description: Crontab tutorial
---

# Crontab tutorial

## Purpose of Crontab

It would be highly unlikely to expect a system administrator to stay up late (eg. 2 a.m.) or to always remember to manually run a shell script to terminate processes or to re-boot Linux servers.

**crond** (the cron daemon) is used to refer to these shell scripts (or other commands or programs) and to **run them on a pre-determined basis**. The term cron comes from the old word chronograph meaning a special type of watch (actually a stop-watch) to help monitor and schedule routine tasks.

Database files for scheduling execution of commands ro programs (referred to as cron tables) are used to provide instructions on how frequent shell scripts or commands can be run. Usually, you run the crontab command in order to edit this table to add / remove / modify scheduling instructions

## Adding Crontab Entries

### How to Edit the Cron Table to schedule a command or program to run

You will not usually directly edit a cron file.

Instead, the crontab command allows you to create/edit/delete a cron table for your account (if you have permissions to do so).

Common crontab Commands

crontab -e – edit your cron table (create it if it doesn't exist) crontab -l – list the contents of your cron table (if any) crontab -r – delete (remove) you cron table

### crontab Entry Format

Here is the layout of the crontab:

```text
.---------------- minute (0 - 59) 
|  .------------- hour (0 - 23)
|  |  .---------- day of month (1 - 31)
|  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ... 
|  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7)  OR  
|  |  |  |  |                  sun,mon,tue,wed,thu,fri,sat
|  |  |  |  |
*  *  *  *  *  command to be executed
```

Each separate line in this file represents a unique scheduling entry. The first five fields are for scheduling: Each field can be:

- A number (to define a specific time/value)
- A \* (all possible times for that field)
- A – separated range of numbers (e.g. 2-5)
- A , separated list of numbers
- Month and day of week can be short words (or ranges or lists of words)

### Shortcuts for crontab Entries

Below are a listing of shortcut keywords (in bold) can can be used to represent the fields.

You would still have to specify the command or program to run.

- **@reboot** Run once, at startup.
- **@yearly** Run once a year (replaces: 0 0 1 1 \*)
- **@monthly** Run once a month (replaces: 0 0 1 \* \*)
- **@weekly** Run once a week (replaces: 0 0 \* \* 0)
- **@daily** Run once a day (replaces: 0 0 \* \* \*)
- **@hourly** Run once an hour (replaces: 0 \* \* \* \*)

## Examples for crontab entries

Here are some examples of crontab entries for automating backup:

- **@reboot rsync -avz 192.168.10.158:/etc /backup/vm1/** # Remotely backup changes to /etc/ files in vm1
- **0 2 \* \* \* rsync -avz 192.168.10.158:/etc /backup/vm1/** # Backup at 2:00 am everyday
