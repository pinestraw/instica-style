---
title: Authentication & Login
outline: deep
---

# Authentication & Login

This guide defines conventions for authentication interfaces across Instica surfaces. Consistency in login flows builds trust and reduces friction for users accessing their inventory data.

<style scoped>
.component-example {
  padding: 24px;
  background: #F8FAFC;
  border-radius: 12px;
  margin: 24px 0;
  border: 1px solid #E2E8F0;
}
</style>

## Login page structure

All login pages must follow this hierarchy:

1. **Primary authentication method** (email/password form)
2. **Divider** with "or" language
3. **Third-party sign-in options** (Apple, Google, etc.)

<div class="component-example">
  <div style="max-width: 360px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; display: grid; gap: 16px;">
    <div style="font-weight: 700; font-size: 18px; color: #0F172A;">Sign in</div>
    <div style="display: grid; gap: 10px;">
      <div style="height: 40px; border-radius: 8px; border: 1px solid #E2E8F0; background: #F8FAFC;"></div>
      <div style="height: 40px; border-radius: 8px; border: 1px solid #E2E8F0; background: #F8FAFC;"></div>
      <div style="height: 40px; border-radius: 8px; background: #4F46E5;"></div>
    </div>
    <div style="display: flex; align-items: center; gap: 8px; color: #94A3B8; font-size: 12px;">
      <div style="flex: 1; height: 1px; background: #E2E8F0;"></div>
      or
      <div style="flex: 1; height: 1px; background: #E2E8F0;"></div>
    </div>
    <div style="display: grid; gap: 10px;">
      <div style="height: 40px; border-radius: 8px; background: #000000;"></div>
      <div style="height: 40px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF;"></div>
    </div>
  </div>
</div>

### Rationale
Email/password appears first because it's the universal fallback and sets user expectations. Third-party options follow as convenient alternatives for users who prefer OAuth flows.

## Email/password form

<div class="component-example">
  <form style="display: grid; gap: 12px; max-width: 360px;">
    <label style="display: grid; gap: 6px; font-size: 13px; color: #64748B;">
      Email
      <input type="email" placeholder="name@instica.com" style="height: 40px; padding: 0 12px; border-radius: 8px; border: 1px solid #E2E8F0;" />
    </label>
    <label style="display: grid; gap: 6px; font-size: 13px; color: #64748B;">
      Password
      <input type="password" placeholder="••••••••" style="height: 40px; padding: 0 12px; border-radius: 8px; border: 1px solid #E2E8F0;" />
    </label>
    <button type="button" style="height: 40px; border-radius: 8px; border: none; background: #4F46E5; color: #FFFFFF; font-weight: 600;">Continue</button>
    <div style="font-size: 12px; color: #94A3B8;">Your session stays signed in on this device.</div>
  </form>
</div>

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

**Critical requirement: Follow official brand guidelines exactly.** Every OAuth provider publishes strict requirements for button styling, placement, and copy. 

<div class="component-example">
  <div style="display: grid; gap: 10px; max-width: 360px;">
    <button style="height: 40px; border-radius: 8px; border: none; background: #000000; color: #FFFFFF; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"> Sign in with Apple</button>
    <button style="height: 40px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF; color: #0F172A; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
      <span style="width: 18px; height: 18px; border-radius: 50%; background: conic-gradient(#4285F4 0 25%, #34A853 25% 50%, #FBBC05 50% 75%, #EA4335 75% 100%);"></span>
      Sign in with Google
    </button>
  </div>
</div>

### Why strict compliance matters

Deviating from official guidelines can result in:
- **App Store rejection** (Apple reviews check SIWA button compliance)
- **Provider policy violations** (termination of API access)
- **User trust erosion** (non-standard buttons appear suspicious)
- **Legal issues** (trademark misuse)

**Never improvise login button designs.** Always consult the provider's official documentation before implementation and verify compliance before each release.

### Sign in with Apple

Apple provides comprehensive [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple) that must be followed precisely. App Store reviewers actively check SIWA implementation; non-compliant buttons are a common rejection reason.

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
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 26" fill="white">
  <path d="M15.768 3.635c1.027-1.232 1.72-2.949 1.53-4.635-1.48.06-3.273.986-4.337 2.23-.952 1.107-1.785 2.875-1.56 4.567 1.653.128 3.34-.839 4.367-2.162zm.65 2.113c-2.416-.139-4.472 1.374-5.615 1.374-1.143 0-2.91-1.302-4.789-1.266-2.463.037-4.736 1.431-6.006 3.638-2.563 4.43-.657 10.998 1.843 14.598 1.222 1.763 2.68 3.745 4.595 3.673 1.843-.073 2.544-1.192 4.772-1.192 2.229 0 2.857 1.192 4.79 1.155 1.978-.037 3.263-1.8 4.486-3.563 1.413-2.04 1.996-4.019 2.032-4.119-.045-.018-3.896-1.496-3.933-5.926-.036-3.708 3.025-5.486 3.165-5.596-1.724-2.524-4.411-2.8-5.34-2.876z"/>
</svg>
```

**Light mode (black logo):**
```html
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

1. **Never modify provider logos** (color, aspect ratio, padding). Use official assets only.
2. **Use exact copy** specified by the provider—no synonyms or creative rewording.
3. **Respect minimum sizes** (usually 44px height for accessibility; Apple requires 44pt minimum).
4. **Follow theme requirements** (light/dark mode variants per provider specs).
5. **Test on actual devices** in both light and dark modes to ensure rendering matches guidelines.
6. **Review provider docs before each release** for updated requirements—guidelines change.
7. **Document your implementation** with links to official guidelines for future reference.

### Common rejection reasons (Apple)
- Custom Apple logo (recreated SVG instead of official asset)
- Wrong button copy ("Login with Apple" instead of "Sign in with Apple")
- Incorrect colors (e.g., gray background instead of black/white)
- Wrong corner radius (6px instead of 8px)
- Button too small (<44pt height)
- Missing dark mode variant

**Prevention**: Use the official Apple "Sign in with Apple" buttons API where available (iOS/macOS native), or meticulously follow HIG for web implementations.

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

<div class="component-example">
  <div style="max-width: 360px; display: grid; gap: 8px;">
    <div style="font-size: 13px; color: #64748B;">Password</div>
    <div style="height: 40px; border-radius: 8px; border: 1px solid #FCA5A5; background: #FEF2F2;"></div>
    <div style="font-size: 12px; color: #DC2626;">Invalid email or password</div>
  </div>
</div>
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

## Page layout & visual design

### Overall structure
The authentication page should create a calm, focused environment that minimizes distraction and builds trust. Follow these layout principles:

#### Centered card pattern
- Single card centered vertically and horizontally on the viewport
- Dark card background (e.g., `rgba(20, 20, 30, 0.95)`) against a gradient background
- Card width: 360-400px on desktop, full-width with padding on mobile
- Internal padding: 32-40px
- Subtle border or shadow for depth (optional)

#### Background treatment
Use a gradient background that:
- Reinforces brand identity through color
- Provides visual interest without competing with the form
- Example: Navy to teal/green diagonal gradient (`linear-gradient(135deg, #1a2332 0%, #1e3e4e 100%)`)
- Keep contrast low enough that white text on the card remains highly readable

#### Vertical rhythm
Establish consistent spacing between elements:
```css
.auth-card {
  display: flex;
  flex-direction: column;
  gap: 24px; /* Base rhythm */
}

.auth-card__header {
  text-align: center;
  margin-bottom: 8px; /* Tighter spacing after logo */
}

.auth-card__form {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Form fields */
}

.auth-card__divider {
  margin: 8px 0; /* Compress around divider */
}

.auth-card__footer {
  margin-top: 8px; /* Support links */
}
```

### Component hierarchy (top to bottom)

1. **Logo** (brand mark)
   - Size: 48-64px
   - Centered
   - Single-color (white or brand color)
   - Example: Elephant icon for Instica

2. **Heading** ("Sign in")
   - Font size: 24-28px
   - Font weight: 600-700
   - Color: White or near-white
   - Centered

3. **Subheading** (instructional copy)
   - Font size: 14-15px
   - Font weight: 400
   - Color: Muted (e.g., `rgba(255,255,255,0.7)`)
   - Centered
   - Example: "Pick Apple or use your email to continue."

4. **Form fields** (email, password)
   - Dark input backgrounds (e.g., `rgba(255,255,255,0.05)`)
   - Light borders: `1px solid rgba(255,255,255,0.1)`
   - Placeholder text: `rgba(255,255,255,0.4)`
   - Input text: White
   - Focus state: Increase border opacity to `0.3` or add accent color

5. **Primary action button** (Continue)
   - Accent color: Bright blue (e.g., `#3B82F6`) for contrast against dark card
   - Full width
   - Height: 44-48px
   - Border radius: 8px
   - Font weight: 600

6. **Session hint** (persistence message)
   - Font size: 12-13px
   - Color: Muted (e.g., `rgba(255,255,255,0.5)`)
   - Centered
   - Example: "Your session stays signed in on this device."

7. **Divider** ("or sign in with Apple")
   - Horizontal lines with centered text
   - Line opacity: `0.1`
   - Text: Muted, 12-13px
   - Spacing: 8px gap between text and lines

8. **Third-party button(s)** (Sign in with Apple)
   - Black background with white text (Apple dark mode)
   - Full width matching primary button
   - Official brand styling (see previous section)

9. **Footer link** ("Need help? Contact support.")
   - Font size: 13px
   - Color: Muted link color (e.g., `rgba(255,255,255,0.6)`)
   - Centered
   - Hover: Increase opacity or underline

### Instica implementation example

The Instica sign-in page (shown above) demonstrates these principles:
- **Gradient background**: Navy to teal creating depth
- **Centered card**: Dark surface with generous padding
- **Clear hierarchy**: Logo → heading → instructional copy → form → buttons
- **Accessible colors**: White text on dark backgrounds with sufficient contrast
- **Proper spacing**: 24px gaps between major sections, 16px between form fields
- **Brand consistency**: Elephant logo reinforces product identity
- **Trust signals**: Session persistence message and support link

This design is production-tested and serves as the reference implementation for future authentication surfaces.

### Visual design tokens

Define these variables for consistent theming:

```css
:root {
  /* Backgrounds */
  --auth-bg-gradient: linear-gradient(135deg, #1a2332 0%, #1e3e4e 100%);
  --auth-card-bg: rgba(20, 20, 30, 0.95);
  
  /* Typography */
  --auth-heading: 28px;
  --auth-subheading: 15px;
  --auth-body: 14px;
  --auth-caption: 13px;
  
  /* Colors */
  --auth-text-primary: #fff;
  --auth-text-muted: rgba(255, 255, 255, 0.7);
  --auth-text-caption: rgba(255, 255, 255, 0.5);
  --auth-border: rgba(255, 255, 255, 0.1);
  --auth-input-bg: rgba(255, 255, 255, 0.05);
  
  /* Accent */
  --auth-primary: #3B82F6;
  --auth-primary-hover: #2563EB;
}
```

Adjust for light mode:
```css
@media (prefers-color-scheme: light) {
  :root {
    --auth-bg-gradient: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
    --auth-card-bg: #ffffff;
    --auth-text-primary: #1a202c;
    --auth-text-muted: rgba(0, 0, 0, 0.7);
    --auth-text-caption: rgba(0, 0, 0, 0.5);
    --auth-border: rgba(0, 0, 0, 0.1);
    --auth-input-bg: rgba(0, 0, 0, 0.02);
  }
}
```

## Reference implementations

- **Web login**: [jungle/templates/auth/login.html](https://github.com/instica/jungle/blob/main/jungle/templates/auth/login.html)
- **Instica sign-in**: Production implementation at instica.com/login (pictured in this guide)
- **Apple HIG**: [developer.apple.com/design/human-interface-guidelines/sign-in-with-apple](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple)
- **Apple button generator**: [developer.apple.com/design/resources/](https://developer.apple.com/design/resources/)
- **Google branding**: [developers.google.com/identity/branding-guidelines](https://developers.google.com/identity/branding-guidelines)

---

**Key takeaway**: Third-party login buttons must be pixel-perfect reproductions of official brand guidelines. Non-compliance is a leading cause of App Store rejection. When in doubt, use the provider's official button component or consult their documentation before shipping.
