declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    delay?: number;
    once?: boolean;
  }

  declare const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
  };

  export default AOS;
}
