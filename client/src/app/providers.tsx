"use client";

import StoreProvider from "@/state/redux";

{/* 2. Download dependencies: npm i react-redux @reduxjs/toolkit 
       Move the 'state' folder from asset-download to /src 
       Create providers.tsx in /app
       Configure as follows
*/}
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default Providers;