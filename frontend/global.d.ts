declare module "react" {
  export type ReactNode = any;
  export type ReactElement = any;
  export type FormEvent<T = any> = any;
  export type ChangeEvent<T = any> = any;
  export type SetStateAction<S> = S | ((prevState: S) => S);
  export function useState<S>(initialState: S | (() => S)): [S, (newState: SetStateAction<S>) => void];
  export function useEffect(effect: () => void, deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps?: any[]): T;
  export function createElement(type: any, props?: any, ...children: any[]): ReactElement;
  export default any;
}

declare module "react-dom" {
  const ReactDOM: any;
  export default ReactDOM;
}

declare module "framer-motion" {
  const motion: any;
  const AnimatePresence: any;
  export { motion, AnimatePresence };
}

declare module "next" {
  export type Metadata = any;
}

declare module "next/image-types/global" {
  export {};
}

declare const process: {
  env: {
    NEXT_PUBLIC_BACKEND_URL?: string;
  };
};

declare namespace JSX {
  interface IntrinsicElements {
    [key: string]: any;
  }
}
