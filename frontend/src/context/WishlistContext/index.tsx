import React, { createContext, useContext } from "react";
import useWishlist from "../../hooks/useWishlist";
import PageWrapper from "../../components/templates/PageWrapper";
import { userId } from "../../utils/constants";

const WishlistContext = createContext<ReturnType<typeof useWishlist> | undefined>(undefined);

export function WishlistProvider({ children }: React.PropsWithChildren) {
  const wishlist = useWishlist(userId);
  return (
    <WishlistContext.Provider value={wishlist}>
      <PageWrapper>{children}</PageWrapper>
    </WishlistContext.Provider>
  );
}

export function useWishlistContext() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlistContext must be used within a WishlistProvider");
  }
  return context;
}