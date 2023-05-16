'use client';
/** Add your relevant code here for the issue to reproduce */

import { AsyncServerComponent } from '../components/AsyncServerComponent';
import { useEffect } from 'react';

export default function Home() {
  console.log('I am Home, and I am being rendered');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      Home
      {/* @ts-expect-error Server Component */}
      <AsyncServerComponent />
    </div>
  );
}
