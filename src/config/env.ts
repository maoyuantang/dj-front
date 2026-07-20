export class EnvConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvConfigError";
  }
}

const isPlaceholder = (value: string) => value.includes("replace-with");

export const getApiBaseUrl = (): string => {
  const value = String(import.meta.env.VITE_API_BASE_URL || "").trim();
  if (!value || isPlaceholder(value)) {
    throw new EnvConfigError(
      "VITE_API_BASE_URL is missing or still a placeholder. Set it in the active .env file before making an API request.",
    );
  }
  return value.replace(/\/$/, "");
};

export const isSmsLoginEnabled = () => import.meta.env.VITE_ENABLE_SMS_LOGIN === "true";
