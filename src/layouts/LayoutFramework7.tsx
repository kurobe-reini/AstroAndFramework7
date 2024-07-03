// src/components/MyApp.jsx
import React from 'react';
import Framework7 from 'framework7/lite'
import Framework7React, { App, View, Page, Navbar, Toolbar, Link } from 'framework7-react';

// Initialize Framework7
Framework7.use(Framework7React);

export default function LayoutFramework7({ children }: { children: React.ReactDOM }) {
  return (
    <App>
      <View main>
        <Page>
          <Navbar title="My App" />
          <div class="contents">{children}</div>
        </Page>
      </View>
    </App>
  );
}