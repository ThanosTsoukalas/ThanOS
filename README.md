# ThanOS
ThanOS is a simple and open source Operating System dedicated to older machines (Typically having 4GB RAM and HDD instead of an SSD). The user interface is built with HTML, CSS, and Javascript.

How does this work?

We have a modified version of the UNIX kernel -which I haven't made yet. This boots the operating system and initializes an application similar to a webpage viewer. The viewer has basic web browser functionality and interacts with the kernel (which in turn interacts with the computer's hardware). The web viewer initially opens the bootloader.html file, which acts like a start-up file. This gives the user the sensation that the OS has actually started. The bootloader.html file has a Javascript TimeOut function that leads to the index.html file, which is the User's main workspace.

