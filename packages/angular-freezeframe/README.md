# angular-freezeframe

[![npm version](https://badge.fury.io/js/angular-freezeframe.svg)](https://badge.fury.io/js/angular-freezeframe)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/angular-freezeframe/dist/ReactFreezeframe.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Examples

GH Pages:

http://ctrl-freaks.github.io/freezeframe.js/angular

## Install

```bash
npm install freezeframe angular-freezeframe
```

## Setup

`app.module.ts`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFreezeframeComponent } from 'angular-freezeframe'

@NgModule({
  declarations: [
    AppComponent,
    AngularFreezeframeComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Basic usage

`app.component.html`

```html
<angular-freezeframe src="foo.gif"></angular-freezeframe>
```

## Advanced usage

`app.component.html`

```html
<button (click)="start()">Start</button>
<button (click)="stop()">Stop</button>
<button (click)="toggle()">Toggle</button>

<angular-freezeframe
  src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif"
  #freeze
  [options]="{
    trigger: false,
    overlay: true
  }"
  (startEvent)="log('start', $event)"
  (stopEvent)="log('stop', $event)"
  (toggleEvent)="log('toggle', $event)"
></angular-freezeframe>
```

`app.component.ts`

```ts
import { Component, ViewChild } from '@angular/core';
import { AngularFreezeframeComponent, AngularFreezeframeEvent } from 'angular-freezeframe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-freezeframe-demo';
  destroyerVisible = true

  @ViewChild('freeze') freeze!: AngularFreezeframeComponent

  start(): void {
    this.freeze?.start()
  }

  stop(): void {
    this.freeze?.stop()
  }

  toggle(): void {
    this.freeze?.toggle()
  }

  destroy(): void {
    this.destroyerVisible = false
  }

  log(eventName: string, $event: AngularFreezeframeEvent): void {
    console.log({ eventName, $event })
  }
}

```

## Advanced usage

Here's an example of passing custom options, and binding to a ref so we can manually trigger playback.

```jsx
import React { Component, createRef } from 'angular';
import ReactFreezeframe from 'angular-freezeframe';

class App extends Component {
  constructor(props) {
    super(props);
    this.freeze = createRef();
  }
  render() {
    return (
      <div>
        <ReactFreezeframe
          src="foo.gif"
          ref={this.freeze}
          options={{
            trigger: false,
            overlay: true
          }}
          onToggle={(items, isPlaying) => this.logEvent('toggle', items, isPlaying)}
          onStart={(items) => this.logEvent('start', items)}
          onStop={(items) => this.logEvent('stop', items)}
        />
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.toggle()}>Toggle</button>
      </div>
    );
  }
  start() {
    this.freeze.current.start();
  }
  stop() {
    this.freeze.current.stop();
  }
  toggle() {
    this.freeze.current.toggle();
  }
  logEvent(event, items, isPlaying) {
    console.log(event, items, isPlaying);
  }
}

export default App;
```

## TypeScript

Here's the same example, in TypeScript.

```tsx
import React, { Component, createRef } from 'angular';
import ReactFreezeframe from 'angular-freezeframe';
import { Freeze } from 'freezeframe/types'

class App extends Component {
  private freeze = createRef<ReactFreezeframe>();

  render() {
    return (
      <div>
        <ReactFreezeframe
          src="foo.gif"
          ref={this.freeze}
          options={{
            trigger: false,
            overlay: true
          }}
          onToggle={(items, isPlaying) => this.logEvent('toggle', items, isPlaying)}
          onStart={(items, isPlaying) => this.logEvent('start', items, isPlaying)}
          onStop={(items, isPlaying) => this.logEvent('stop', items, isPlaying)}
        />
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.toggle()}>Toggle</button>
      </div>
    );
  }
  start(): void {
    this.freeze.current?.start();
  }
  stop(): void {
    this.freeze.current?.stop();
  }
  toggle(): void {
    this.freeze.current?.toggle();
  }
  logEvent(event: string, items: Freeze[], isPlaying: boolean): void {
    console.log(event, items, isPlaying);
  }
}

export default App;
```

## Children

You can also pass gifs as children, they will all inherit the any options passed to the parent component.

```jsx
<ReactFreezeframe
  options={{
    trigger: 'click'
  }}
>
  <img src="foo1.gif" />
  <img src="foo2.gif" />
  <img src="foo3.gif" />
</ReactFreezeframe>
```

## Props

### Options

The `options` prop accepts all options allowed by [freezeframe core](../freezeframe#options)

```jsx
<ReactFreezeframe
  src="foo.gif"
  options={{
    overlay: true,
    trigger: 'click'
  }}
/>
```

### Callbacks

The following callback props will fire when freezeframe emits the corresponding events:

- onStart - 'start'
- onStop - 'stop'
- onToggle - 'toggle'

```jsx
<ReactFreezeframe
  src="./something.gif"
  onStart={(items) => this.onStart(items)}
  onStop={(items) => this.onStop(items)}
  onToggle={(items, isPlaying) => this.onToggle(items, isPlaying)}
/>
```

## Contributing

Assuming you have already read the [instructions](../../README.md#contributing) in the project root:

- First, `cd` into the appropriate package directory

```bash
# start webpack dev server
npm start
```

```bash
# lint and fix issues with eslint
npm run lint -- --fix
```

```bash
# build the project and examples for gh-pages
npm run build
```

Then commit your changes and submit your PR for review.

## License

angular-freezeframe.js is released under the terms of the MIT License.
