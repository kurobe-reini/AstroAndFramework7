// src/components/MyApp.jsx
import React from 'react';
import Framework7React, { App, View, Page, Navbar, Toolbar, Link } from 'framework7-react';

export default function Example() {
  return (
    <Toolbar bottom>
      <Link>Link 1</Link>
      <Link>Link 2</Link>
    </Toolbar>
  );
}