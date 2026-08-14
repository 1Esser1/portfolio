/**
 * Inline SVG icon set — no icon library dependency.
 * Usage: <Icon name="github" size={18} />
 */

const paths = {
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
    />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.15 5.44a1.6 1.6 0 0 0 1.7 0L21 7" />
    </>
  ),
  phone: (
    <path d="M6.6 3h-2A1.6 1.6 0 0 0 3 4.7C3 13.1 10.9 21 19.3 21a1.6 1.6 0 0 0 1.7-1.6v-2a1.2 1.2 0 0 0-.9-1.2l-3.3-.8a1.2 1.2 0 0 0-1.2.4l-1 1.2a13.6 13.6 0 0 1-5.6-5.6l1.2-1a1.2 1.2 0 0 0 .4-1.2l-.8-3.3A1.2 1.2 0 0 0 8.6 3Z" />
  ),
  pin: (
    <>
      <path d="M20 10.5c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10.3" r="2.8" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 20h16" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 1.8v2.4M12 19.8v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M1.8 12h2.4M19.8 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </>
  ),
  moon: <path d="M20.5 14.4A8.6 8.6 0 0 1 9.6 3.5a8.7 8.7 0 1 0 10.9 10.9Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 20v-6M12.7 20V8M17.3 20v-9" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 4.8-9 4.8-9-4.8L12 3Z" />
      <path d="m3 12.5 9 4.8 9-4.8" />
      <path d="m3 17 9 4.8 9-4.8" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-5 4 5 4" />
      <path d="m16 8 5 4-5 4" />
      <path d="m13.6 4.5-3.2 15" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3.5" width="18" height="7" rx="2" />
      <rect x="3" y="13.5" width="18" height="7" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  browser: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M6.5 6.5h.01M9.5 6.5h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.8" rx="8" ry="3.3" />
      <path d="M4 5.8v12.4c0 1.8 3.6 3.3 8 3.3s8-1.5 8-3.3V5.8" />
      <path d="M20 12c0 1.8-3.6 3.3-8 3.3S4 13.8 4 12" />
    </>
  ),
  spark: (
    <>
      <path d="m12 2.5 2.1 5.9 5.9 2.1-5.9 2.1L12 18.5l-2.1-5.9L4 10.5l5.9-2.1L12 2.5Z" />
      <path d="M19 17.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
  tool: (
    <path d="M14.3 6.2a4.6 4.6 0 0 1 6.2 5.8l-1.9-1.9-2.6.7-.7 2.6 1.9 1.9a4.6 4.6 0 0 1-5.8-6.2L4.6 2.5 2.5 4.6l6.6 6.6" />
  ),
  briefcase: (
    <>
      <rect x="2.8" y="7" width="18.4" height="13" rx="2.4" />
      <path d="M8.5 7V5.4A2.4 2.4 0 0 1 10.9 3h2.2a2.4 2.4 0 0 1 2.4 2.4V7" />
      <path d="M2.8 12.5h18.4" />
    </>
  ),
  cap: (
    <>
      <path d="m12 4 10 4.8-10 4.8-10-4.8L12 4Z" />
      <path d="M6.5 11v5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-5" />
      <path d="M21 9v6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.6" />
      <path d="M2.5 20.5a6.5 6.5 0 0 1 13 0" />
      <path d="M16.2 4.8a3.6 3.6 0 0 1 0 6.9" />
      <path d="M18 14.6a6.5 6.5 0 0 1 3.5 5.9" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2.4" />
      <path d="M15 9V5.4A2.4 2.4 0 0 0 12.6 3H5.4A2.4 2.4 0 0 0 3 5.4v7.2A2.4 2.4 0 0 0 5.4 15H9" />
    </>
  ),
}

const filledIcons = new Set(['github', 'linkedin'])

export default function Icon({ name, size = 20, className = '', ...rest }) {
  const content = paths[name]
  if (!content) return null

  const filled = filledIcons.has(name)

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  )
}
