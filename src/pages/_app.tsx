import { type AppType } from "next/app";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

import { useRouter } from "next/router";

import { api } from "../utils/api";

import "../styles/globals.css";

const publicPages = ["/sign-in/[[...index]]", "/sign-up/[[...index]]"];

const MyApp: AppType = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  const renderPage = () => {
    if (isPublicPage) return <Component {...pageProps} />;

    return (
      <>
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    );
  };

  return (
    <ClerkProvider {...pageProps}>
      <div className='_app'>
        {renderPage()}
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
