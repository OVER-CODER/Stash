// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './Demo.module.css';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}