export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/saved/:path*",
    "/messages/:path*",
    "/appointments/:path*"
  ]
};