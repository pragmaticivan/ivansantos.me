export const Language = {
  PTBR: "pt-br",
  EN: "en",
} as const;

export type Language = (typeof Language)[keyof typeof Language];
