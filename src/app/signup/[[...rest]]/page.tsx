'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignupPage() {
  return (
    <div className="h-full flex-col content-center">
      <div className="container mx-auto flex flex-1 items-center justify-center py-2.5">
        <div className="flex flex-col items-center gap-2 text-center">
          <SignUp forceRedirectUrl={'/app'} />
        </div>
      </div>
    </div>
  );
}
