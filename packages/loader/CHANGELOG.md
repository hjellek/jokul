# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 7.1.0 (2021-12-01)

### Features

- legg til en inline-variant av loader ([7b5d140](https://github.com/fremtind/jokul/commit/7b5d140b382ba563a58c4f8cc66553bdf105f359))

## 7.0.0 (2021-10-21)

### Features

- use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

- new spacing scale: see migration guide for jkl-core

## 6.0.0 (2021-10-07)

### Features

- la loader ta farge fra teksten rundt ([e529255](https://github.com/fremtind/jokul/commit/e52925548dcdb8e1228bc445df18bc191bb6aaf5)), closes [#2348](https://github.com/fremtind/jokul/issues/2348)

### BREAKING CHANGES

- Propen negative har ikke lenger noen effekt, og er fjernet

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

### Features

- redesign knappeloader så den beholder layout ([344d8d3](https://github.com/fremtind/jokul/commit/344d8d3d1710125ac44211fa7788045e2ec7a36c)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

## 4.0.0 (2021-07-09)

### chore

- bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

- Depends on jkl-core-version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **loader:** add automatic dark mode ([8fb5dcc](https://github.com/fremtind/jokul/commit/8fb5dcc191782ced0efcc638a24c3456b3e96292))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.2.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.1.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.1.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.0.16 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))

## 1.0.14 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

## 0.8.0 (2019-10-09)

### Features

-   **loader:** add aria-label and title to loader component ([8479e2b](https://github.com/fremtind/jokul/commit/8479e2b))

## 0.7.0 (2019-07-30)

### Features

-   **portal:** document loader ([5f83159](https://github.com/fremtind/jokul/commit/5f83159))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))
-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))
-   **loader:** add inline style ([d1cc7d8](https://github.com/fremtind/jokul/commit/d1cc7d8))
-   **loader:** add react loader ([e27132c](https://github.com/fremtind/jokul/commit/e27132c))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **loader:** add inline loader ([1efa6cb](https://github.com/fremtind/jokul/commit/1efa6cb)), closes [#43](https://github.com/fremtind/jokul/issues/43)

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))
