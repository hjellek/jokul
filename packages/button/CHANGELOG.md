# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 6.0.4 (2021-12-08)

### Bug Fixes

- make all button elements respect width constraint ([a1b9715](https://github.com/fremtind/jokul/commit/a1b97157e23ecda666ec7b9fdd92c0c899517f61))

## 6.0.0 (2021-10-21)

### Features

- use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

- new spacing scale: see migration guide for jkl-core

## 5.0.2 (2021-10-07)

### Bug Fixes

- fjern clip-path på knapper for å vise touch-effekt riktig ([33ab605](https://github.com/fremtind/jokul/commit/33ab605f6b1ba70bddb939d07cbe16c1602d596f)), closes [#2356](https://github.com/fremtind/jokul/issues/2356)

## 5.0.0 (2021-10-06)

### Features

- redesign knappeloader så den beholder layout ([9732d00](https://github.com/fremtind/jokul/commit/9732d007e92bb50ccb75a44d5a6fe74a641941f1)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

### Reverts

- Revert "feat: redesign knappeloader så den beholder layout" ([54011df](https://github.com/fremtind/jokul/commit/54011dfb1ca5bba65e45b95dfe0fec4fb9eb340d))

### BREAKING CHANGES

- APIet til Button endrer seg ikke, men det er en del breaking changes i CSS om du bygger HTML selv.
Se React-komponent for veiledning. Loader-komponenten mister inline-prop. Erstattes av
variant="medium".

## 4.1.0 (2021-10-06)

### Bug Fixes

- legg til manglende CSS reset for a.jkl-button ([21972e1](https://github.com/fremtind/jokul/commit/21972e14b5320fc26addb975739734dfacb94736)), closes [#2272](https://github.com/fremtind/jokul/issues/2272)

### Features

- redesign knappeloader så den beholder layout ([344d8d3](https://github.com/fremtind/jokul/commit/344d8d3d1710125ac44211fa7788045e2ec7a36c)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

## 4.0.4 (2021-09-09)

### Bug Fixes

- retter strekfarge for invertert jkl-button--tertiary ([8a6a43e](https://github.com/fremtind/jokul/commit/8a6a43e7aafb1cf1878333e908f8cc96a6afd177)), closes [#1593](https://github.com/fremtind/jokul/issues/1593)

## 4.0.0 (2021-07-09)

### Features

- use new typographic scale ([bf3da67](https://github.com/fremtind/jokul/commit/bf3da67d7ee14e36db26a03f1b0aac06780e828b))

### BREAKING CHANGES

- Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

- bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

- **button:** add automatic dark mode ([d31c3bf](https://github.com/fremtind/jokul/commit/d31c3bf43fdf2bcf6b3f41ef3af0d3b18c81f876))

### BREAKING CHANGES

- Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.8.5 (2021-01-21)

### Bug Fixes

-   **@fremtind/jkl-button:** fixes clipped focus-bug in button ([ad6d1aa](https://github.com/fremtind/jokul/commit/ad6d1aa685de2cb8f6081fef20df1aad12d9579b)), closes [#1704](https://github.com/fremtind/jokul/issues/1704)

## 1.8.1 (2020-11-26)

### Bug Fixes

-   **button:** set classname on wrapper for with loader ([977e1b2](https://github.com/fremtind/jokul/commit/977e1b250a1ce87829625fb061be122e42be250a))

## 1.8.0 (2020-11-25)

### Features

-   **button:** add loading state to button ([e142122](https://github.com/fremtind/jokul/commit/e142122ccdad719e82f1b1a5263d55b52c5c435b)), closes [#1492](https://github.com/fremtind/jokul/issues/1492)

## 1.7.0 (2020-10-23)

### Features

-   **button:** add touch-specific animations ([b2a258d](https://github.com/fremtind/jokul/commit/b2a258d2805d12a49016e57e26883deaa044ad5b)), closes [#711](https://github.com/fremtind/jokul/issues/711)

## 1.6.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.5.0 (2020-06-17)

### Features

-   **button:** this will add blue color on hover for all button variants ([d61f5f5](https://github.com/fremtind/jokul/commit/d61f5f5d20e111157aac7b6c78687541b9cf9279)), closes [#936](https://github.com/fremtind/jokul/issues/936)
-   **button:** this will use core motion mixin to define transitioning ([86d2d0a](https://github.com/fremtind/jokul/commit/86d2d0a40ade88f91d6034f3ff6f5a8f3d98761c)), closes [#936](https://github.com/fremtind/jokul/issues/936)

## 1.4.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)
-   **button:** correct height for normal size button ([73d0aa0](https://github.com/fremtind/jokul/commit/73d0aa07fca1fb7469303fd2a66b8a8a9abf338a))
-   **button:** use correct sizes for compact buttons ([c8f26bc](https://github.com/fremtind/jokul/commit/c8f26bcc937d4e9ace6b5fed3694b993709b8644))

## 1.4.4 (2020-03-16)

### Bug Fixes

-   **button:** unset min-width on compact tertiary button ([99e3b3c](https://github.com/fremtind/jokul/commit/99e3b3cc9e923066aad0177eda1d3a914a2a2bcb)), closes [#802](https://github.com/fremtind/jokul/issues/802)

## 1.4.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.3.0 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

### Features

-   **button:** add inverted color mode for buttons ([4e9c2d5](https://github.com/fremtind/jokul/commit/4e9c2d5a4a6aed610eb87f354fa65415be34a323))
-   **button:** make button text bold ([70a1736](https://github.com/fremtind/jokul/commit/70a17367ec3f42aba65e0a4779ff8edf8e054da2))

## 1.2.0 (2020-01-16)

### Bug Fixes

-   **button:** remove min-width for TertiaryButton ([8280409](https://github.com/fremtind/jokul/commit/828040969097aa21c2b5e570a6b8515a21ee5bb7))
-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **button:** set minimum width for buttons ([fe9257d](https://github.com/fremtind/jokul/commit/fe9257d587db97d8f5e8622b756411f1d93b329f))

## 1.1.0 (2019-12-17)

### Features

-   **components:** css endringer, flytting av funksjon ([7390edd](https://github.com/fremtind/jokul/commit/7390eddfadd941a0465267afba35a81ca446f438)), closes [#545](https://github.com/fremtind/jokul/issues/545)
-   **components on black background:** rewritten css ([04fb8c6](https://github.com/fremtind/jokul/commit/04fb8c62aecfb2aa2141687d561d36cf5893dd04)), closes [#544](https://github.com/fremtind/jokul/issues/544)

## 1.0.1 (2019-12-10)

### Bug Fixes

-   **button:** use correct shade of white on the buttons ([3755a17](https://github.com/fremtind/jokul/commit/3755a1728051b29cab03af9b94163d4d1fb1bcf5))

## 1.0.0 (2019-12-03)

### Features

-   **button:** implement forceCompact on buttons ([faf1257](https://github.com/fremtind/jokul/commit/faf1257b731d1d48bccea7d2caf76f929b9689c6))
-   add compact mode mixin ([ca9fa96](https://github.com/fremtind/jokul/commit/ca9fa96b7de2be50646af0cb444206c3eebcfc4a))
-   add support for global compact mode ([cc11026](https://github.com/fremtind/jokul/commit/cc11026207dfef2a0b3b074b88e071783d2820fd)), closes [#494](https://github.com/fremtind/jokul/issues/494)

## 0.8.0 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   **button:** change cursor from default to pointer ([6438b75](https://github.com/fremtind/jokul/commit/6438b75))

## 0.7.0 (2019-08-02)

### Features

-   **firefox:** remove dotted line for good ([67187a6](https://github.com/fremtind/jokul/commit/67187a6))

## 0.6.2 (2019-07-30)

### Bug Fixes

-   **button:** add larger desktop buttons ([040030d](https://github.com/fremtind/jokul/commit/040030d)), closes [#117](https://github.com/fremtind/jokul/issues/117)
-   **button:** remove dottet line for firefox ([b23b36c](https://github.com/fremtind/jokul/commit/b23b36c))
-   **button:** simplify button scss ([69e6d5b](https://github.com/fremtind/jokul/commit/69e6d5b))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))
-   **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **all:** remove css main files ([c9a4ca0](https://github.com/fremtind/jokul/commit/c9a4ca0))
-   **all:** various build and import errors ([8d9a507](https://github.com/fremtind/jokul/commit/8d9a507))
-   **button:** add example README.md ([d9d2f21](https://github.com/fremtind/jokul/commit/d9d2f21))
-   **button:** change hover and active states and remove box shadow ([0216cda](https://github.com/fremtind/jokul/commit/0216cda))
-   **button:** clean up unnecessary code after redesigning button ([41d0e0c](https://github.com/fremtind/jokul/commit/41d0e0c))
-   **button:** correct focus ring ([8fb5415](https://github.com/fremtind/jokul/commit/8fb5415))
-   **button:** fix button-react structure ([c3c249a](https://github.com/fremtind/jokul/commit/c3c249a))
-   **button:** fix inconsistencies in button styles ([9ca5cc7](https://github.com/fremtind/jokul/commit/9ca5cc7))
-   **button:** fix scss import in example ([b506ba9](https://github.com/fremtind/jokul/commit/b506ba9))
-   **button:** remove button.css from commit ([c147286](https://github.com/fremtind/jokul/commit/c147286))
-   **button:** remove React from example ([3d7aecb](https://github.com/fremtind/jokul/commit/3d7aecb))
-   **button:** tweak line-height ([0b2cff1](https://github.com/fremtind/jokul/commit/0b2cff1))
-   **core:** add focus ring to button and remove max width ([6171efe](https://github.com/fremtind/jokul/commit/6171efe))
-   update focus styles to only show on keyboard nav ([b7555a8](https://github.com/fremtind/jokul/commit/b7555a8))
-   **core:** don't import all of core into button ([687f0ab](https://github.com/fremtind/jokul/commit/687f0ab))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Code Refactoring

-   flatten structure in all style packages ([dd875e5](https://github.com/fremtind/jokul/commit/dd875e5)), closes [#7](https://github.com/fremtind/jokul/issues/7)

### Features

-   **portal:** make markdown parser use our components ([61baa27](https://github.com/fremtind/jokul/commit/61baa27))

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))

### BREAKING CHANGES

-   moves entry point in style packages. any style imports must be updated accordingly
