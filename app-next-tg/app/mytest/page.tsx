'use client';

import { HelloButton } from '../components/HelloButton';

export default function MyTestPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <HelloButton label="Click Me!" />
    </div>
  );
}
