'use client';

import AuthLayout from '@/components/layouts/auth-layout';
import marketingSignIn from '@/assets/images/Marketing-signin.png';
import NoAccount from '@/components/auth/common/no-account';
import SigninForm from '@/components/auth/form/signin-form';
import { AUTH_LEFT_TEXT, PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (session?.data) {
      redirect(PAGE_ROUTES?.Dashboard);
    }
  }, [session?.data]);

  return (
    <AuthLayout
      text={AUTH_LEFT_TEXT}
      image={marketingSignIn}
      className={`${loading && 'bg-[#0000004d]'}`}>
      <NoAccount signupPage={true} />
      <SigninForm loading={loading} setLoading={setLoading} />
    </AuthLayout>
  );
};

export default SignInPage;
