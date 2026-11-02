// A link button for a Creator Pro Payment Link. If the link has not been set up yet,
// it shows a quiet "opens soon" button instead of a link that goes nowhere.
export default function ProCta({ href, className, style, children, soon = 'Creator Pro opens soon' }) {
  if (href) {
    return (
      <a className={className} style={style} href={href}>
        {children}
      </a>
    )
  }
  return (
    <span className={className} style={{ ...style, opacity: 0.6, cursor: 'default' }} aria-disabled="true">
      {soon}
    </span>
  )
}
