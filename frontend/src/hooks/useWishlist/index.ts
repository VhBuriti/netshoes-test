import { useEffect, useState, useCallback } from "react";
import { api } from "../../utils/constants";

export default function useWishlist(userId: string) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    async function fetchWishlist() {
      try {
        const response = await fetch(`${api}/wishlist/${userId}/full`);
        if (!response.ok) throw new Error("Failed to fetch wishlist");
        const data = await response.json();
        setWishlist(data.wishlist || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWishlist();
  }, [userId]);

  const addToWishlist = useCallback(async (productId: string) => {
    try {
      const res = await fetch(`${api}/wishlist/${userId}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (!res.ok) throw new Error("Failed to add product");

      const data = await res.json();
      setWishlist(data.wishlist || []);
    } catch (err: any) {
      setError(err.message);
    }
  }, [userId]);

  const removeFromWishlist = useCallback(async (productId: string) => {
    try {
      const res = await fetch(`${api}/wishlist/${userId}/remove/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to remove product");

      const data = await res.json();
      setWishlist(data.wishlist || []);
    } catch (err: any) {
      setError(err.message);
    }
  }, [userId]);

  const toggleWishlist = useCallback((productId: string) => {
    if (wishlist.some((p) => p.code === productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  }, [wishlist, addToWishlist, removeFromWishlist]);

  return {
    wishlist,
    loading,
    error,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist: (code: string) => wishlist.some((p) => p.code === code),
  };
}
