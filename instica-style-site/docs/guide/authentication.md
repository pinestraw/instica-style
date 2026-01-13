---
title: Authentication & Login
outline: deep
---

# Authentication & Login

This guide defines conventions for authentication interfaces across Instica surfaces. Consistency in login flows builds trust and reduces friction for users accessing their inventory data.

## Login page structure

All login pages must follow this hierarchy:

1. **Primary authentication method** (email/password form)
2. **Divider** with "or" language
3. **Third-party sign-in options** (Apple, Google, etc.)

### Rationale
Email/password appears first because it's the universal fallback and sets user expectations. Third-party options follow as convenient alternatives for users who prefer OAuth flows.

## Email/password form

### Required fields
- Email input with `type="email"` and `autocomplete="username"`
- Password input with `type="password"` and `autocomplete="current-password"`
- Submit button labeled "Continue" or "Sign in"

### Layout
- Stack fields vertically with 10-12px gaps
- Labels above inputs, left-aligned
- Error messages appear below the relevant field or at form bottom
- Helper text (e.g., "Your session stays signed in") appears below submit button

### Validation
- Client-side: Validate email format before submission
- Server-side: Return clear error messages for incorrect credentials
- Never reveal whether an email exists in the system (security)

## Third-party login buttons

**Critical requirement: Follow official brand guidelines exactly.** Every OAuth provider publishes strict requirements for button styling, placement, and copy. Deviating from these guidelines can result in app rejection or provider policy violations.

### Sign in with Apple

Apple provides comprehensive [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple) that must be followed precisely.

#### Dark mode (default)
```css
.button.apple {
  background: #000;
  color: #fff;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.29;
  letter-spacing: -0.022em;
  padding: 12px 16px;
  border-radius: 8px;
}
```

#### Light mode
```css
@media (prefers-color-scheme: light) {
  .button.apple {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
}
```

#### Required elements
- Official Apple logo (SVG) positioned left of text
- Button copy: "Sign in with Apple" (exact wording)
- Minimum height: 44pt (web: 44px)
- Corner radius: 8px (web: 8px)

#### Apple logo SVG
Use inline SVG with proper fill color that adapts to theme:

**Dark mode (white logo):**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 26" fill="white">
  <path d="M15.768 3.635c1.027-1.232 1.72-2.949 1.53-4.635-1.48.06-3.273.986-4.337 2.23-.952 1.107-1.785 2.875-1.56 4.567 1.653.128 3.34-.839 4.367-2.162zm.65 2.113c-2.416-.139-4.472 1.374-5.615 1.374-1.143 0-2.91-1.302-4.789-1.266-2.463.037-4.736 1.431-6.006 3.638-2.563 4.43-.657 10.998 1.843 14.598 1.222 1.763 2.68 3.745 4.595 3.673 1.843-.073 2.544-1.192 4.772-1.192 2.229 0 2.857 1.192 4.79 1.155 1.978-.037 3.263-1.8 4.486-3.563 1.413-2.04 1.996-4.019 2.032-4.119-.045-.018-3.896-1.496-3.933-5.926-.036-3.708 3.025-5.486 3.165-5.596-1.724-2.524-4.411-2.8-5.34-2.876z"/>
</svg>
```

**Light mode (black logo):**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 26" fill="black">
  <path d="M15.768 3.635c1.027-1.232 1.72-2.949 1.53-4.635-1.48.06-3.273.986-4.337 2.23-.952 1.107-1.785 2.875-1.56 4.567 1.653.128 3.34-.839 4.367-2.162zm.65 2.113c-2.416-.139-4.472 1.374-5.615 1.374-1.143 0-2.91-1.302-4.789-1.266-2.463.037-4.736 1.431-6.006 3.638-2.563 4.43-.657 10.998 1.843 14.598 1.222 1.763 2.68 3.745 4.595 3.673 1.843-.073 2.544-1.192 4.772-1.192 2.229 0 2.857 1.192 4.79 1.155 1.978-.037 3.263-1.8 4.486-3.563 1.413-2.04 1.996-4.019 2.032-4.119-.045-.018-3.896-1.496-3.933-5.926-.036-3.708 3.025-5.486 3.165-5.596-1.724-2.524-4.411-2.8-5.34-2.876z"/>
</svg>
```

### Google Sign-In

Follow [Google Identity Branding Guidelines](https://developers.google.com/identity/branding-guidelines).

- White background with subtle shadow
- Google "G" logo (official SVG from Google)
- Copy: "Sign in with Google" or "Continue with Google"
- Roboto font family
- Neutral text color: `#1f1f1f`

### General third-party button rules

1. **Never modify provider logos** (color, aspect ratio, padding)
2. **Use exact copy** specified by the provider
3. **Respect minimum sizes** (usually 44px height for accessibility)
4. **Follow theme requirements** (light/dark mode variants)
5. **Test on actual devices** to ensure rendering matches guidelines
6. **Review provider docs** before each release for updated requirements

### Button order
When multiple third-party options are available:
1. Apple (if targeting iOS/macOS)
2. Google
3. Other providers alphabetically

## Divider styling

Use a subtle divider between primary and third-party options:

```css
.divider {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 13px;
}
.divider::before,
.divider::after {
  content: "";
  height: 1px;
  flex: 1;
  background: rgba(255,255,255,0.1); /* dark mode */
}
```

Light mode variant:
```css
@media (prefers-color-scheme: light) {
  .divider::before,
  .divider::after {
    background: rgba(0,0,0,0.1);
  }
}
```

Copy options:
- "or sign in with Apple"
- "or continue with Google"
- "or use another method"

## Security considerations

### Session persistence
- Clearly communicate session behavior ("Your session stays signed in on this device")
- Offer "Remember me" checkbox only if you provide explicit logout functionality
- Use secure, HttpOnly cookies for session tokens

### Error messages
- Generic errors for failed login attempts: "Invalid email or password"
- Specific errors only for client-side validation: "Please enter a valid email address"
- Never reveal account existence: "If an account exists, you'll receive a reset email"

### HTTPS requirement
All authentication pages must be served over HTTPS. Configure:
- `SESSION_COOKIE_SECURE=True`
- `CSRF_COOKIE_SECURE=True`
- `SameSite=None` for OAuth callbacks (with Secure flag)

## Mobile considerations

### Touch targets
- Minimum button height: 44pt (iOS) / 48dp (Android)
- Minimum tap area: 44×44pt including padding
- Adequate spacing between interactive elements (12px minimum)

### Keyboard behavior
- Auto-focus email field on page load
- Return key advances to password field
- Return key on password field submits form
- Dismiss keyboard on form submission

### Autofill
- Support iOS Password AutoFill and Android Autofill Framework
- Use correct `autocomplete` attributes
- Test with password managers (1Password, LastPass, etc.)

## Accessibility

### Screen readers
- Label all form fields explicitly
- Announce errors via `aria-live="polite"`
- Provide text alternatives for provider logos

### Keyboard navigation
- Tab order: email → password → submit → third-party buttons
- Enter/Space activates buttons
- Focus indicators visible on all interactive elements

### Color contrast
- Maintain 4.5:1 minimum contrast for text
- Don't rely solely on color for error states (use icons/text)
- Test with color blindness simulators

## Implementation checklist

When building a new login page:

- [ ] Email/password form appears first
- [ ] Third-party buttons follow official brand guidelines exactly
- [ ] Both light and dark themes supported via `prefers-color-scheme`
- [ ] HTTPS enforced with secure cookie settings
- [ ] 44px minimum touch targets on all buttons
- [ ] Proper `autocomplete` attributes on inputs
- [ ] Error messages are clear and secure (no account enumeration)
- [ ] Focus indicators visible for keyboard navigation
- [ ] Tested with screen reader (VoiceOver/TalkBack)
- [ ] Provider button logos are official SVGs (not custom recreations)
- [ ] Button copy matches provider requirements exactly
- [ ] Session persistence behavior communicated to user

## Reference implementations

- **Web login**: [jungle/templates/auth/login.html](https://github.com/instica/jungle/blob/main/jungle/templates/auth/login.html)
- **Apple HIG**: [developer.apple.com/design/human-interface-guidelines/sign-in-with-apple](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple)
- **Google branding**: [developers.google.com/identity/branding-guidelines](https://developers.google.com/identity/branding-guidelines)

---

**Key takeaway**: Third-party login buttons must be pixel-perfect reproductions of official brand guidelines. When in doubt, consult the provider's documentation before shipping.
