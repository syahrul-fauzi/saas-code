import { getAppUrl as configGetAppUrl } from '../config/utils';

/**
 * Constructs a complete URL by combining the base URL with a given path
 * This is a wrapper around the utility function from the config module
 * Kept for backward compatibility
 * 
 * @param path - The path to append to the base URL
 * @returns The complete URL
 */
export function getAppUrl(path: string): string {
    return configGetAppUrl(path);
}