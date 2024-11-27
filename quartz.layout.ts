import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode"

let maximumTitleLength = 20;
function mapExplorerTitle(node: FileNode) {
  if (node.displayName.length > maximumTitleLength)
    node.displayName = node.displayName.substring(0, maximumTitleLength) + "..."
}

let explorer =  Component.Explorer({
  title: "Pages",
  folderDefaultState: "collapsed",
  useSavedState: true,
  mapFn: mapExplorerTitle
})

let graphComponent = Component.Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.5,
    repelForce: 0.8,
    centerForce: 0.5,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: [],
    showTags: true,
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 1.5,
    repelForce: 0.8,
    centerForce: 0.5,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: [],
    showTags: true,
  },
});

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Research profile": "https://research.tue.nl/nl/persons/felipe-de-azeredo-coutinho-xavier",
      "GitHub": "https://github.com/FelipeACXavier",
      "Savant": "https://software-analytics-visualisation-team.github.io/savant/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "/",
      rootName: "Home",
      resolveFrontmatterTitle: true,
      hideOnRoot: true,
      showCurrentPage: true,
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.RecentNotes()),
    Component.DesktopOnly(explorer),
  ],
  right: [
    graphComponent,
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "/",
      rootName: "Home",
      resolveFrontmatterTitle: true,
      hideOnRoot: true,
      showCurrentPage: true,
    }),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.RecentNotes()),
    Component.DesktopOnly(explorer),
  ],
  right: [
    graphComponent
  ],
}
