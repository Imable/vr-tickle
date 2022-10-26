![Vrtickle](https://user-images.githubusercontent.com/50890336/198028384-e02c8cd5-68f0-4145-80f3-971fe472818e.gif)

# 360 Workshop @ University of Applied Sciences in Volda

Hey! Thanks for joining the workshop! We are going to make some cool stuff today, or rather, _you_ are going to make some cool stuff today. I created a little guide to help you get started with the project for today. You will find this below. 

## About the technology
We are using [Vue.js](https://vuejs.org/) to create this web application. To show the 360 videos, we are using a framework called [A-Frame](https://aframe.io/), which is a 3D engine for the web. This 3D engine can run on VR glasses if that is something that you are into! 

## What to install before we start
- [Insta360 Studio 2022](https://www.insta360.com/download/insta360-onex) for preparing your 360 footage (use _IGS2219N3PMB77_ as serial number)
- [VS Code](https://code.visualstudio.com/) as a code editor + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) for syntax highlighting
- [Git](https://git-scm.com/downloads) to get this code on your computer
- [Node.js](https://nodejs.org/en/) to actually run the code

## Now for the code

### Clone the repository
1. Copy the URL to this repository (HTTPS) 
<img src="https://user-images.githubusercontent.com/50890336/197995437-e27d2812-3ded-45b0-b63d-f444889719ec.png" width="400" />
2. Open VS Code
3. Hit Ctrl + Shift + P
4. Click _Clone from GitHub_
5. Sign in to GitHub
6. Now paste the link that you copied in step 1
<img src="https://user-images.githubusercontent.com/50890336/197997076-ba9696b6-5e78-486b-bc99-2d7929f7a2e9.png" width="600" />
7. Select a folder to put the code in, hit _Open_ and _Yes, I trust the authors_ (trust me :))

### Install & Run the program
1. On the top, click _Terminal_ > _New Terminal_
2. Run the command _npm i_, which installs the necessary packages to run the program
3. Run _npm run dev_ to run the program
<img src="https://user-images.githubusercontent.com/50890336/197997913-94426212-c513-4aa2-9c33-864f74304f8d.png" width="250" />

### Open the program
1. Open a web browser
2. Navigate to [http://127.0.0.1:5173/](http://127.0.0.1:5173/)
3. Hurrah! We managed to run the app!
<img src="https://user-images.githubusercontent.com/50890336/197998489-6fc27052-d508-495e-bdc9-8a6f69453690.png" width="500" />
4. Scroll and pan around. Let's see what we are working with!

## Use your 360 videos

### Preparing the videos
1. Open Insta360 Studio 2022
2. Open your 360 video file (can be straight out of camera, then you need the three files shown. A .mp4 360 video works too.)
<img src="https://user-images.githubusercontent.com/50890336/198026918-55917142-7e8f-4fbb-89c4-d54f584ca130.png" width="350" />
3. Select 360 view (the eye icon on top) and change the field of view (FOV) to the right-most icon, as shown below
<img src="https://user-images.githubusercontent.com/50890336/198027516-9735f6df-3264-4e2d-8a27-6f438bb7197d.png" width="550" />
4. Now hit _File_ > _Export_
5. Select _Export 360 video_ on top and dial back the resolution, such that you do not blow up your computer :)
<img src="https://user-images.githubusercontent.com/50890336/198027888-974317f1-2a37-4b39-82d7-bf0c3035c2db.png" width="350" />

### Inject videos in the project
1. Copy you videos into the _path-to-the-project/vr-tickle/public/_ folder
2. Open the folder in Visual Studio Code and open the _vr-tickle/src/assets/video.json_ file
<img src="https://user-images.githubusercontent.com/50890336/198029529-29167e24-6446-4bad-b97c-1748dff391df.png" width="400" />
3. Replace the _name_ and _fname_ (file name) with values corresponding to your video files (the name is arbitrary and can be whatever!)

_Each of these videos will become a full screen background, shown in the order they are defined in this file. In order for your videos to show, you need to create a corresponding article on your webpage. Keep reading..._

### Creating a new article for your video
1. For each video, copy the _YourStory.vue_ inside the _vr-tickle/src/components/articles/_ folder and give it _ANameOfChoice.vue_. 
2. Now in the _vr-tickle/src/components/MainContent.vue_ file, import your newly created _ANameOfChoice.vue_ files: _import _ANameOfChoice from "./articles/_ANameOfChoice.vue"_
3. Subsequently, you can add your imported files inside the _<main>_ tag as follows _<ANameOfChoice />_. Note that the order here should match the order in  _vr-tickle/src/assets/video.json_
  
### Designing your new page
1. Inside the _<article>_ tag, new HTML element can be created containing the content of your webpage. Some relevant [HTML tags](https://www.w3schools.com/TAGS/default.asp) are listed below.
  - `<h2>`   > Heading (2 defines the level of this heading in a hierarchy of headings)
  - `<p>`    > A paragraph
  - `<div>`  > Not visual, but is contains other objects in order to group them and give them a for example a common background 
2. Inside the _<style>_ tag, you can style your elements. In order to do this, you need to target them using [CSS selectors](https://www.w3schools.com/CSSref/css_selectors.php). CSS offers many ways to style element. Start with a design and we can discuss the implementation!

_Note that if you want to achieve advanced tasks, you can use the <script> tag to execute JavaScript code_
