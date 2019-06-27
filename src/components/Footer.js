import React from 'react'
import meta from '../meta.json'

export const Footer = () => (
  <footer className="footer">
    <div>
        <small>
            &copy; {new Date().getFullYear()}{' '}
            <a href={meta.social[0].url}>{meta.company}</a> &mdash; All
            Rights Reserved
        </small>

        <nav className="footer__links">
            {meta.social.map(site => (
                <a key={site.title} href={site.url}>
                    {site.title}
                </a>
            ))}
        </nav>
    </div>
  </footer>
)
