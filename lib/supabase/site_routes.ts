// allowed routes per role

const roleRoutes : Record<string, Array<string>> = {
    buyer: ["/buyer", "/account", "/shopping-cart"],
    seller: ["/seller", "/account", "/shopping-cart", "/seller-dashboard", "/add-asset", "/creations", "/orders", "/success-onboarding"],
    admin: ["/admin", "/account", "/admin-dashboard", "/shopping-cart", "/manage-orders", "/manage-products", "/manage-users", "/payment-gateways", "/reviews-ratings", "/site-content"],
};

const publicRoutes = [
    '/product-detail',
    '/product-listing'
];

// protected routes for all users

const protectedRoutes = [
    "/buyer",
    "/seller",
    "/admin",
    "/account",
    "/shopping-cart",
    "/admin-dashboard",
    "/seller-dashboard",
    "/add-asset", 
    "/creations", 
    "orders", 
    "/manage-orders", 
    "/manage-products", 
    "/manage-users", 
    "/payment-gateways", 
    "/reviews-ratings", 
    "/site-content",
];

// functions

export function isProtectedRoute(pathName : string){
    // if protected return true
    return protectedRoutes.some((route) => pathName.startsWith(route));
}

export function getAllowedRoutes(role: string) {
    if (!role || !roleRoutes[role]) {
        return publicRoutes;
    }
    return roleRoutes[role].concat(publicRoutes) || [];
}

export function isCurrentRouteRBACProtected(currentRoute : string, role : string){
    return roleRoutes[role].some((route) => currentRoute.startsWith(route));
}