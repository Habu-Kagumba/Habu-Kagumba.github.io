---

layout: post
title: "HTML Email organisation"
date: 2015-01-28
logo: false
permalink: html-email
tags: jekyll
      html email
      grunt

---

I recently started sending a lot of HTML emails and it quickly got disorganized, developing and designing emails on demand is fine when sending a few emails but it gets messy when the volume of emails increase. Creating HTML emails is a fairly laborious undertaking, this got me thinking of methods of automating the various tasks involved which in my process included:
(*Vague list. Will get into this later...*)

1.	Finding an appropriate email template or framework. (There are a number of email templates and frameworks available exhaustive list [here](http://responsiveemailresources.com/) and [here](http://rodriguezcommaj.com/resources)).
2.	Design the emails, inline them (Premailer), Test (Usually just used physical devices but for a wider email client testing I recommend paid alternatives).

My adopted front-end workflow is fairly straight forward, the tools:

* [Jekyll](http://jekyllrb.com/) - generate static files.
* [Grunt](http://gruntjs.com/) - automate various tasks.
* [Premailer](http://premailer.dialect.ca/) - inline css styles.
* [Sass](http://sass-lang.com/) - Syntatically Awesome Stylesheets &amp; [HAML](http://haml.info) - HTML Abstraction Markup Language (Totally optional but highly recommended)
* [Github](http://github.com) - code hosting.


Personally I use a Linux machine so the setup instructions might not be applicable for windows users. Furthermore jekyll according to their [website](http://jekyllrb.com/docs/installation/) there are special [instructions](http://jekyll-windows.juthilo.com/) for jekyll installation on windows.

## Setup

#### 1. Jekyll

Requirements for jekyll are [Ruby](https://www.ruby-lang.org/en/downloads/), [RubyGems](http://rubygems.org/pages/download) &amp; [NodeJs](http://nodejs.org/).

Installing jekyll is as easy as;

```bash
gem install jekyll
```

If you run into problems please refer to [jekyll documentation](http://jekyllrb.com/docs/home/) or write a comment, maybe I could help.

Jekyll has built-in support for Sass which I heavily use for every of my projects. Ever since I started using Sass I have never looked back, if you haven't yet tried it you should!

#### 2. Grunt

Grunt is a javascript task runner that automates repetitive tasks. For this article I'm assuming you are already familiar with it, if not please got through their [Getting Started](http://gruntjs.com/getting-started) tutorial. I will however install grunt through a package.json file later.

Install grunt-cli

```bash
npm install -g grunt-cli
```

Requirements for grunt is [NodeJs](http://nodejs.org), and an up-to-date npm installation.

#### 3. Premailer

This is for inlining css styles, we will achieve this using the premailer gem and use the grunt-premailer plugin to automate this task.

Install it;

```bash
gem install premailer hpricot nokogiri
```

#### 4. Sass &amp; Haml

Sass &amp; HAML, I always use sass to style my projects instead of plain CSS and oftenly use HAML for templating, if you haven't used sass or haml before atleast I bet you've heard of them. [Read more - sass](http://sass-lang.com) &amp; [Read more - haml](http://haml.info)

Install them;

```bash
gem install sass
```
## Lets get started

*There exists a quick start manual in jekyll's documentation so I won't delve much into that.* To start a new jekyll project type.

```bash
jekyll new html_email
```

Note use whichever name you wish. This command will create a new jekyll project named html_email with the following default directory structure.

```bash
html_email
├── about.md
├── _config.yml
├── css
│   └── main.scss
├── feed.xml
├── _includes
│   ├── footer.html
│   ├── header.html
│   └── head.html
├── index.html
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts
│   └── 2015-01-29-welcome-to-jekyll.markdown
└── _sass
    ├── _base.scss
    ├── _layout.scss
    └── _syntax-highlighting.scss
```

A minimalist explanation for the directory structure in respect to this tutorial would be the <code class="post-code">\_config.yml</code> file is where you keep all your configuration data / values.
I'm going to create an <code class="post-code">assets</code> directory for images and css. <code class="post-code">\_includes</code> directory contains the partials (reusable bits of code). <code class="post-code">index.html</code> and any other file in root directory with [front-matter](http://jekyllrb.com/docs/frontmatter/) will be part of the jekyll build process. <code class="post-code">\_layouts</code> directory is like the name suggests layouts or templates. <code class="post-code">\_sass</code> is the home for our sass files.

After a little clean up my new directory structure is as follows. Note I added a <code class="post-code">package.json</code> and <code class="post-code">Gruntfile.js</code> files for my grunt automation tasks.

```bash
html_email
├── assets
│   ├── css
│   └── img
├── _config.yml
├── Gruntfile.js
├── _includes
├── index.html
├── _layouts
├── package.json
└── _sass
```

For the project I'm going to use some grunt plugins for various tasks. The final <code class="post-code">Gruntfile.js</code> and <code class="post-code">package.json</code> will be found in the linked repo at the end of this post.

I will only list some of the major plugins used.

* <code class="post-code">grunt-shell</code> for running shell commands from grunt.
* <code class="post-code">grunt-contrib-connect</code> static web server.
* <code class="post-code">grunt-contrib-watch</code> to watch for changes and run site rebuild.
* <code class="post-code">grunt-premailer</code> task to inline styles to the final email generated by jekyll using the premailer gem installed earlier. (please stick to v0.2.5, had problems with later versions!!!)
* <code class="post-code">grunt-imagemin</code> to minify image assets.
* <code class="post-code">grunt-cdnify</code> to prepend url with absolute paths for external assets like images.
* (Optional) <code class="post-code">grunt-aws</code> to upload my image assets to Amazon S3 - Personal preference.
* (Optional) <code class="post-code">grunt-mailgun</code> to send the emails.

The final repo is [here](https://github.com/hs-devevelop-design/html_email). Further instructions are contained in the README.md file
