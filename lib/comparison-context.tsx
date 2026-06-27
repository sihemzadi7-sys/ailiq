'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

const MAX_TOOLS = 6;
const MIN_TOOLS = 2;
const STORAGE_KEY = 'ai-tools-comparison';

interface ComparisonContextType {
  selectedTools: string[];
  toggleTool: (toolId: string) => void;
  isSelected: (toolId: string) => boolean;
  canSelectMore: boolean;
  isMaxReached: boolean;
  clearSelection: () => void;
  canCompare: boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSelectedTools(parsed.slice(0, MAX_TOOLS));
        }
      }
    } catch (e) {
      console.error('Failed to load comparison tools from localStorage:', e);
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage when selection changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedTools));
      } catch (e) {
        console.error('Failed to save comparison tools to localStorage:', e);
      }
    }
  }, [selectedTools, isHydrated]);

  const toggleTool = useCallback((toolId: string) => {
    setSelectedTools((prev) => {
      if (prev.includes(toolId)) {
        return prev.filter((id) => id !== toolId);
      }
      if (prev.length >= MAX_TOOLS) {
        return prev;
      }
      return [...prev, toolId];
    });
  }, []);

  const isSelected = useCallback(
    (toolId: string) => selectedTools.includes(toolId),
    [selectedTools]
  );

  const clearSelection = useCallback(() => {
    setSelectedTools([]);
  }, []);

  const isMaxReached = selectedTools.length >= MAX_TOOLS;
  const canSelectMore = selectedTools.length < MAX_TOOLS;
  const canCompare = selectedTools.length >= MIN_TOOLS;

  return (
    <ComparisonContext.Provider
      value={{
        selectedTools,
        toggleTool,
        isSelected,
        canSelectMore,
        isMaxReached,
        clearSelection,
        canCompare,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
}
