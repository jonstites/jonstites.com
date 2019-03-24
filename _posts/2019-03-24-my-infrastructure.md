---
title: "My infrastructure"
layout: single
excerpt: "An eclectic mix of technologies that work for me."
---


## My infrastructure

Over the years, I have put together a personal infrastructure that works well for me, my workflow, and my values.

It is weighted towards free and open-source software, privacy, and a lack of trust in corporations to protect my data indefinitely.

## Hardware

- A desktop with a 6-year-old Intel CPU (Haswell 4770k), 32 GiB of RAM, a 500 GB SSD, and an RX-580 GPU. The graphics card and SSD are recent upgrades. It used to have a GTX 760, but I often had issues with Nvidia drivers. The open-source AMD drivers have been rock-solid. Looking to upgrade this with the next round of AMD CPUs - either a Ryzen 3000 or Threadripper 3.

- A OnePlus 5. If the Purism Librem 5 turns out to be a useable phone, I will switch to that.

- A Linode VPS.

## Software

- After having tried Arch, Fedora, Linux Mint, I have come back to Ubuntu. It generally "just works." Maybe at some point, I will give Fedora another try. I have also thought about trying FreeBSD and Nix, but am wary of switching to something with only a small community behind it.

- Filesystem is a LUKs encrypted ext-4 with an unencrypted ext-4 external hard-drive. Not ideal - eventually I'd want to set up a NAS with ECC RAM, ZFS filesystem, disk encryption, and automatic off-site backups. Maybe ZFS for the desktop's filesystem, maybe not - I'd want to understand the performance implications of the lower frequency RAM required for ECC.

- Currently using KeePassXC as the password manager. I might switch to BitBucket at some point.

- Contacts, calendars, photos, and passwords are kept in a personal NextCloud hosted on Linode. This allows me to sync my passwords and contacts on my desktop and phone, and also to access them from another computer from a web browser, if necessary. I might reconsider this setup - I'm not a huge fan of having a stand-alone VPS that I need to maintain just for syncing files.

- The phone runs LineageOS with microG. So there is absolutely no Google account tied to my phone. Downside, I'm not very comfortable with the signature-spoofing required for microG. It's okay for now, but that Librem 5 is a very attractive option...

- On mobile, OSMAnd+ for maps, K9 for email (looking for alternatives though), Firefox Focus for browsing, Signal for messaging.

- Email is my own domain with Fastmail for an email server. I have used Fastmail for years and had 0 issues. A great option for the Google-skeptic that doesn't want to deal with hosting an email server.

- Alacritty terminal emulator + Tmux, fish shell, and Emacs. Low input latency, reliable, convenient.

- Firefox with fingerprint resistence turned on, NoScript, HTTPS-Everywhere, uBlock Origin, and local data cleared on exit.

- My router runs Asuswrt-Merlin and routes all network traffic through NordVPN - although I think I will switch back to PIA, as Amazon and Google seem to throttle NordVPN traffic more. Eventually, I would like to switch to OpenWRT and WireGuard, once Wireguard is more well-supported by VPNs.

- Code is on GitHub. I might eventually have this mirrored somewhere else too, but that is lower-priority, since all my code is also on local machines.

- Blog is generated with Jekyll. I _strongly_ dislike Ruby and its ecosystem, so I would like to switch to Hugo.

- Personal website is on S3 - I have TravisCI setup to automatically deploy it on changes to the master branch.