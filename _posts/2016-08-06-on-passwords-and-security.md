---
layout: post
title: "On Passwords and Security"
description: ""
tags: [passwords, security, tech]

images:
  - src: "on_passwords.jpg"
    caption: "This 'Review recent login' dialog is the message I used to see from Facebook."

---
{% include JB/setup %}

{% assign image=page.images[0] %}{% include themes/serum/image.html image=image %}

Friends, especially friends who haven't changed their password in a while:

This morning, I received a notification that an unrecognized device had attempted to access my account from South Korea. As I am not in South Korea, this was quite unnerving, but not unprecedented. This had happened before, several times, but the attempts had stopped when I enabled Two-Factor Authentication (2FA) on my account. In my complacency, I assumed that this meant that I didn't need to change my password.

Today, I woke up to this new account login attempt, and I wanted to figure out why. I headed to [haveibeenpwned.com](https://haveibeenpwned.com) (which, normally, I wouldn't trust, but the man  who made it is publicly known to be a security researcher) and learned that the password dump of the LinkedIn hack 4 years ago was recently released, and that my account was one of those in the hack.

In the past few years, I have migrated over to a password manager and now use unique, strong passwords (none of which I need to remember) almost everywhere I have an account. If I hadn't made the switch, I'd be freaking out right now, trying to remember which accounts I'd need to log in to and change (and inevitably failing - I have dozens of old accounts that I haven't used in forever that would have kept my old, weak password).

The exception is Facebook, where I stuck it out with the old, easy-to-remember and easy-to-crack password, and trusted that 2FA would cover me if the security lapse that caused the previous attempts ever came back to haunt me. It did cover me, but now that I know why the login attempts (from a few years ago and from this morning) have happened, I have no excuse not to make the effort to switch over.

And frankly, you have no excuse either.

Change your password. Enable Two-Factor Auth. Use a password manager.

Be safe on the internet, friends.