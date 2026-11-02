// Public-safe deployment configuration. Leave backendBaseUrl empty until the
// existing Cinderfang ASP.NET Core backend has a real HTTPS origin.
window.CINDERFANG_PORTAL_CONFIG = Object.assign({
  backendBaseUrl: "",
  signInPath: "/studio/login",
  invitationPath: "/Account/Invite"
}, window.CINDERFANG_PORTAL_CONFIG || {});
