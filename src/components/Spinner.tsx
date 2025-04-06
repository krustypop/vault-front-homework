export function Spinner() {
  return (
    <svg
      className="size-5 animate-spin text-[rgba(212,160,255,1)]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="spinner-gradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="url(#spinner-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
