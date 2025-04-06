export const ellipsis = (str: string, start = 8, end = 8): string => {
  if (!str) return ''
  if (str.length <= start + end) return str

  return `${str.slice(0, start)}...${str.slice(-end)}`
}
