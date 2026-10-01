"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface QuoteItem {
  product: Product;
  selectedFinish: string;
  quantity: number;
}

interface QuoteContextType {
  quoteItems: QuoteItem[];
  addToQuote: (product: Product, finish?: string) => void;
  removeFromQuote: (productId: string, finish: string) => void;
  updateQuantity: (productId: string, finish: string, quantity: number) => void;
  clearQuote: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  totalItemCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load quote list from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lumecasa_quote_list");
      if (saved) {
        setQuoteItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load quote list from storage", e);
    }
  }, []);

  // Save quote list to localStorage on updates
  useEffect(() => {
    try {
      localStorage.setItem("lumecasa_quote_list", JSON.stringify(quoteItems));
    } catch (e) {
      console.error("Failed to save quote list", e);
    }
  }, [quoteItems]);

  const addToQuote = (product: Product, finish?: string) => {
    const targetFinish = finish || product.finish;
    setQuoteItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedFinish === targetFinish
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedFinish: targetFinish, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromQuote = (productId: string, finish: string) => {
    setQuoteItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedFinish === finish))
    );
  };

  const updateQuantity = (productId: string, finish: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromQuote(productId, finish);
      return;
    }
    setQuoteItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.selectedFinish === finish) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  const totalItemCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{
        quoteItems,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        clearQuote,
        isDrawerOpen,
        setIsDrawerOpen,
        totalItemCount,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
};
