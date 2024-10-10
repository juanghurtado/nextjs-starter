import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect
} from '@convex-dev/auth/nextjs/server';

const isPublicRoute = createRouteMatcher(['/', '/signin', '/signup']);

export default convexAuthNextjsMiddleware((request, { convexAuth }) => {
  if (isPublicRoute(request) && convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, '/app');
  }

  if (!isPublicRoute(request) && !convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, '/');
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
};
