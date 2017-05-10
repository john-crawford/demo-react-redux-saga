//action to search for a zip code
export const SEARCH_ZIP='SEARCH_ZIP';
export function searchZip(zip) {
  return {
    type: SEARCH_ZIP,
    zip
  }
}
