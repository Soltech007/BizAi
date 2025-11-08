// class-variance-authority
declare module 'class-variance-authority' {
  export type ClassValue =
    | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean
    | undefined;
  export type ClassDictionary = Record<string, any>;
  export type ClassArray = ClassValue[];

  export interface VariantSchema {
    [key: string]: {
      [key: string]: string | string[];
    };
  }

  export interface CVAConfigSchema {
    variants?: VariantSchema;
    compoundVariants?: Array<
      Record<string, string | string[] | boolean> & {
        class?: string | string[];
        className?: string | string[];
      }
    >;
    defaultVariants?: Record<string, string>;
  }

  export function cva(
    base?: string | string[],
    config?: CVAConfigSchema
  ): (props?: Record<string, any>) => string;

  export type VariantProps<Component extends (...args: any) => any> =
    Component extends (props: infer Props) => any
      ? Props extends { class?: any; className?: any }
        ? Omit<Props, 'class' | 'className'>
        : Props
      : never;
}

// clsx
declare module 'clsx' {
  export type ClassValue =
    | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean
    | undefined;
  export type ClassDictionary = Record<string, any>;
  export type ClassArray = ClassValue[];

  export function clsx(...inputs: ClassValue[]): string;
  export default clsx;
}

// tailwind-merge
declare module 'tailwind-merge' {
  export function twMerge(...classLists: string[]): string;
}