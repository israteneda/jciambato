// Type declarations for non-JavaScript assets imported via side-effect imports.
// Allows TypeScript to resolve `import "./styles.css"` without errors.

declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
