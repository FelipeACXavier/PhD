---
title: Using Quartz
date: 2024-11-26
description: A short description on how I use Quartz to create my journal.
draft: false
image: ./static/background/boat.jpeg
position: 50% 70%
tags:
  - Standalone
---

# Introduction

[Quartz](https://quartz.jzhao.xyz) is a Javascript library used to generate static websites from Obsidian vaults. I initially started with Notion but I didn't need the sync features for multiple devices, and the limited number of blocks was a let down. Furthermore, Notion has some nifty features but it doesn't really support markdown, which is a great disappointment, and only works online (ridiculous if you ask me). Because of these reasons, I thought it would be nice to come back to Obsidian.

# Coming from Notion

Naturally, I had to import all my notes from Notion. To do that, Notion has a nice feature that lets you export your workspace as a zip file. Obsidian has a plugin called "Importer" that then lets you import that zipped workspace. In my experience, it makes a mess out of images and all, but the notes themselves are nicely organised.

# Setting up my Quartz layout

Quartz look quite nice by default already, there were only a few minor changes that I needed to make to make it really mine. Since I got a bit used to Notion, I wanted to have the beautiful banners on top of the pages. This was possible by modifying the `renderPage` file. I added an option that it looks for the `image` and `position` tag from the note front matter and uses those, if present, as the page banner. I have to admit, I think it looks very nice, especially since it took 5 minutes of fidgeting to it working.  First, we check whether the fields were set:

```tsx
  const headerImage = componentData.fileData.frontmatter?.image ?? "";
  const headerImagePos = 
	  "object-position: " + (componentData.fileData.frontmatter?.position ?? "50% 50%") + ";";
  
```

And then use these when rendering the page:

```tsx
{headerImage && (
  <div class="header-img">
    <img src={headerImage} style={headerImagePos}/>
  </div>
)}
```

With the banner set, only two more modifications where necessary, to the `FolderPage` and `TagPage` plugins. By default, these add an annoying "n items in this folder" line to the beginning of the rendered pages. I did not want this behaviour, or at least want it to be optional, so I modified these components to accept the flags `showFolderCount` and `showTagCount`. Interestingly enough, `FolderContent`, the plugin used by `FolderPage`, already had the option, but it was not externally available. I needed to add the same behaviour to `TagContents` and `TagPage`.

Functionally, I noticed that because Quartz expects the contents to be placed in the `content` folder (duh!?), absolute paths from Obsidian do not actually work. So I need to modify the last return value in the `transformLink` function of `paths.ts`. I added the replace call, that ensures `/content` is stripped.

```ts
return (joinSegments(pathToRoot(src), canonicalSlug) + folderTail)
	.replace("/content", "") as RelativeURL
```

These were pretty much the "largest" and hidden modifications. The rest plus the styles used in the banner can be found in [custom.scss](https://gitlab.tue.nl/20175791/phd-journal/-/blob/main/quartz/styles/custom.scss?ref_type=heads)

To finalise, I quite like the pages view from Notion, with these large thumbnails icons so I mimicked that behaviour in my home page as well. See a snipped below:

```html
<section>
  <div class="card">
    <div class="card_img">  
      <img src="/static/background/banner_picture">
      <div class="card_overlay">
        <h2>[[./folder name/]]</h2>
      </div>
    </div>
  </div>
</section>
```

And that is it. Not a lot of modifications, I believe, it was more about learning the innumerable customisation options that Quartz provides. 
