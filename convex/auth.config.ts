const AuthConfig = {
  providers: [
    {
      domain: process.env.CLERK_ISSUER_URL,
      applicationID: 'convex'
    }
  ]
};

export default AuthConfig;
