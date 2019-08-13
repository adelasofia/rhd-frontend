# RHD Front-end Code and Documentation

[Live Documentation Site](https://redhat-developer.github.io/rhd-frontend/)

## Installation, Scripts, and Contributing

- **Clone** the repository
- **Ask** for the fontawesome license text for the `.npmrc` file
- **Run** ```npm install``` to install npm-tracked dependencies locally
- **Install** [Go](https://golang.org) 
- Make Go-built executables accessible
    - **Add** the go `/bin` to PATH (find by running `go env` and it would be `$GOPATH/bin`)
    - **_Alternatively_** you can just run `hugo` commands with `~/go/bin/hugo`
- **Run** `go get github.com/gohugoio/hugo` (gets and builds the latest Hugo release)
- **Run** `hugo version` or `~/go/bin/hugo version` (_currently v0.56.3_; also look for `/extended` as that is necessary for Sass pipelines)
- If missing dependencies, either `go get ...` them or install for your OS. Have seen the following needed:
    - `go get github.com/hashicorp/go-immutable-radix`
    - `go get github.com/wellington/go-libsass`
    - gcc / g++
- In root of repo **Run** `git submodule update --init` (to get the redhat-theme files; VPN required)
- Run the Hugo server
    - **Run** default dev server `hugo serve` (pulls from `config/development/config.toml)`)
    - **Run** bound dev server `hugo serve --bind=0.0.0.0 --port=8080` (for VMs or other sandbox environments)
- **Enjoy** live reload for Sass and Templates
- JS will live reload after running `npm run scripts` to build production script files


* NPM Scripts (```npm start```, ```npm test```, ```npm run {name}```)
    * ```start``` - builds scripts and keeps watching for changes
    * ```test``` - runs Karma test runner using Jasmine
    * ```build``` - builds scripts but does not watch for changes
    * ```scripts``` - builds scripts and keeps watching for changes

## Using Clamp styles

to apply a cross browser line clamp to a item apply the class "line-clamp-*" where the "*" is the numebr of lines you want to clamp e.g. "line-clamp-2" will only display 2 lines before adding ... to the end of the text valid numebrs are intergers "1 to 10".

only to be used on heading "H" tags and paragraph "P" tags.


## Popular Patterns

[Typography](https://redhat-developer.github.io/rhd-frontend/patterns/typography)

[Buttons and CTAs](https://redhat-developer.github.io/rhd-frontend/patterns/btn-cta/)

[Alerts and Notifications](https://redhat-developer.github.io/rhd-frontend/patterns/content/notifications)

## Credits

* NodeJS
* [Hugo](https://gohugo.io/)
* JSDoc
* SASSDoc
* TypeScript
* ESLint
* Karma
* Jasmine
* Semantic-Release
* UglifyJS
* FontAwesome
