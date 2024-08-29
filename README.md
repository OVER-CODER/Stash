# Stash.

> Don't think just stash it away.  

Session management for windows. 🪄

"Ugh , Gotta restart my computer open up all these windows and arrange them again" ever felt this way? Well no more ;)

Introducing Stash - the ultimate solution for seamless session management of your Windows applications. With Stash, you'll never have to worry about 
losing your workspace again. Stash saves the exact layout of all your open windows, including their positions and sizes, so you can pick up right where you left off.



https://github.com/user-attachments/assets/147bcba5-d386-48af-b31e-70c7d1caf632


When it's time to close an app or restart your computer, simply restore your session with Stash and it will re-open all your applications in the same 
layout as before.   
Just. like. that.

### Architecture

Stash is built on top of a `Jugaad` tech stack. 

We wanted to use NextJS and Mantine for our frontend but electron was too heavy, Hence we preferred Tauri which is a better framework for building desktop applications. The Catch being Tauri has a rust backend and writing rust in a 24 hour hackathon is no less than a 'AA bail mujhe maar' scene. Hence we settled on using python for the backend. 

Hopefully the following diagram explains it well: 

![Architecture](diag.svg)

We achieve this behaviour by compiling the python app to an exe using pyinstaller then loading it as a sidecar with Tauri and executing it from the rust backend.

> Python is efficient? More like we only know python 🤷‍♂️

### Future

In no way is this project complete or even fully functioning but we do have plans of contributing to it more and making it a real usable product. Till then you can try out our alpha release 0.1.0 : ) 

> With 💖  
by Team WeCan.
