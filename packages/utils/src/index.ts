/**
 * Format a message for display
 * @param message - The message to format
 * @returns The formatted message
 */
export function formatMessage(message: string): string {
  return message.trim();
}

/**
 * Capitalize the first letter of each word in a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate a unique ID
 * @param prefix - Optional prefix for the ID
 * @returns A unique ID string
 */
export function generateId(prefix = 'id'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Debounce a function
 * @param fn - The function to debounce
 * @param delay - The delay in milliseconds
 * @returns The debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttle a function
 * @param fn - The function to throttle
 * @param limit - The time limit in milliseconds
 * @returns The throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Deep clone an object
 * @param obj - The object to clone
 * @returns A deep clone of the object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Check if a value is empty (null, undefined, empty string, empty array, empty object)
 * @param value - The value to check
 * @returns True if the value is empty
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value as object).length === 0;
  return false;
}

/**
 * Format a date string
 * @param date - The date to format
 * @param locale - The locale to use (default: 'en-US')
 * @returns The formatted date string
 */
export function formatDate(
  date: Date | string,
  locale = 'en-US'
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Format a currency value
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale to use (default: 'en-US')
 * @returns The formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
