// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIButtons = () => (
  <div className="wrap button-ui">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Buttons</h1>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Button Styles</h2>
        <p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Base Styles</h3>
        <button className="button u-mr-2">Default Button</button>
        <button className="button button-is-primary u-mr-2">Primary Button</button>
        <button className="button button-is-info u-mr-2">Info Button</button>
        <button className="button button-is-danger u-mr-2">Destructive Button</button>
        <button className="button" disabled>Disabled Button</button>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<button className="button">Default Button</button>' }</div>
            <div>{ '<button className="button button-is-primary">Primary Button</button>' }</div>
            <div>{'<button className="button button-is-info">Info Button</button>'}</div>
            <div>{ '<button className="button button-is-danger">Destructive Button</button>' }</div>
            <div>{ '<button className="button" disabled>Disabled Button</button>' }</div>
          </code>
        </pre>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Dark Background</h3>
        <button className="button button-is-default-inverse u-mr-2">Darker Button</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<button className="button button-is-default-inverse">Darker Button</button>' }</div>
          </code>
        </pre>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Button Sizes</h2>
        <p>Our buttons can be displayed as four different sizes.</p>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <button className="button button-is-xs u-mr-2">Extra Small</button>
        <button className="button button-is-small u-mr-2">Small Button</button>
        <button className="button u-mr-2">Normal Button</button>
        <button className="button button-is-large u-mr-2">Large Button</button>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <button className="button button-is-full">Full Width Button</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<button className="button button-is-xs">Extra Small</button>' }</div>
            <div>{ '<button className="button button-is-small">Small Button</button>' }</div>
            <div>{ '<button className="button">Normal Button</button>' }</div>
            <div>{ '<button className="button button-is-large">Large Button</button>' }</div>
            <div>{ ' ' }</div>
            <div>{ '<button className="button button-is-full">Full Width Button</button>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Button Groups</h2>
        <p>Our buttons can be displayed as four different sizes.</p>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <div className="button-group u-mr-2">
          <button className="button-group-button button button-is-xs">First</button>
          <button className="button-group-button button button-is-xs">Last</button>
        </div>
        <div className="button-group">
          <button className="button-group-button button button-is-xs">First</button>
          <button className="button-group-button button button-is-xs">Middle</button>
          <button className="button-group-button button button-is-xs">Last</button>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="button-group">' }</div>
            <div>{ '  <button class="button-group-button button button-is-xs">First</button>' }</div>
            <div>{ '  <button class="button-group-button button button-is-xs">Last</button>' }</div>
            <div>{ '</div>' }</div>
            <div>{ '<div class="button-group">' }</div>
            <div>{ '  <button class="button-group-button button button-is-xs">First</button>' }</div>
            <div>{ '  <button class="button-group-button button button-is-xs">Middle</button>' }</div>
            <div>{ '  <button class="button-group-button button button-is-xs">Last</button>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>


  </div>
);

export default UIButtons;
