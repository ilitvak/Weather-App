Weather-App
===========

Weather App that uses openweather.org's API to retrieve real-time data about the city of your choice. Buzz.js is used to alert users if the temperature is too cold. 

Built With
----------

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [SASS](http://sass-lang.com/)
* [JavaScript](http://javascript.com)
* [Open Weather API](openweathermap.org)
* [Buzz.js](http://buzz.jaysalvat.com/)

Configuration
-------------

Start by cloning this repository in your terminal
```
$ git clone https://github.com/ilitvak/Weather-App.git.
```

Windows
---

Before you start using Sass you will need to install Ruby. The fastest way to get Ruby on your Windows computer is to use [Ruby Installer](https://rubyinstaller.org/). It's a single-click installer that will get everything set up for you super fast.

The installer will also install a Ruby command line powershell application that will let you use the Ruby libraries.

Mac
---

If you prefer the command line over an application then getting Sass set up is a fairly quick process. Sass has a Ruby dependency but if you're using a Mac, congratulations, Ruby comes pre-installed.

Install Sass
---
Here's the quickest way we've found to start using Sass by using the command line:

1. Open your terminal or command prompt

```
On the Mac the Terminal.app comes installed by default. It's located in your "Utilities" folder. On Windows, run `cmd`.
```

2. Install SASS
```
gem install sass
```

This will install Sass and any dependencies for you. It's pretty magical. If you get an error message then it's likely you will need to use the sudo command to install the Sass gem. It would look like:

```
sudo gem install sass
```

3. Check version

```
sass -v
```

4. It should return

```
3.5.4
```





Running the Application
-----------------------

To see the site locally, open [index.html](https://github.com/ilitvak/Weather-App/blob/master/index.html) in your browser.



SASS
-----------
This app uses the CSS pre-processor [SASS](http://sass-lang.com/). The SASS files can be found inside the scss directory. 

In the terminal run

```
sass --watch /Users/purewisdom/Desktop/weatr-app/scss/scss.scss
```

This command tells sass to watch the directory you specified and it will compile the changes on each change made within the text editor.

Buzz.js
-----------
This library is used to help you to easily include and manage sounds in your websites.


Screenshots
-----------

![Imgur](https://i.imgur.com/dhTS822.png)

![Imgur](https://i.imgur.com/mXS40Bd.png)

![Imgur](https://i.imgur.com/hj4A3Ak.png)
