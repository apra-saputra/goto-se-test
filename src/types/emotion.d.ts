import '@emotion/react';

declare module '@emotion/react' {
  export interface DOMAttributes<T> {
    css?: import('@emotion/react').CSSObject;
  }
}