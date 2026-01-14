---
title: Forms & Inputs
outline: deep
---

## Live Examples

<FormsDemo />

---

<style scoped>
.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #0F172A;
}

.form-input {
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background: #FFFFFF;
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-helper {
  font-size: 13px;
  color: #64748B;
}

.form-field--error .form-input {
  border-color: #DC2626;
}

.form-error {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #DC2626;
}

.form-field--success .form-input {
  border-color: #16A34A;
}

.form-success {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #16A34A;
}

.form-textarea {
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

.form-textarea:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-select {
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-family: inherit;
}

.form-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #CBD5E1;
  border-radius: 4px;
  cursor: pointer;
}

.form-checkbox:checked {
  background: #4F46E5;
  border-color: #4F46E5;
}

.component-example {
  padding: 32px;
  background: #F8FAFC;
  border-radius: 12px;
  margin: 24px 0;
  border: 1px solid #E2E8F0;
}
</style>

# Forms & Inputs

Form components are the primary interface for user data collection. All form elements must be accessible, provide clear feedback, and maintain visual consistency.

## Text Inputs

### Standard Text Input

<div class="component-example">
  <div class="form-field">
    <label for="product-name" class="form-label">Product Name</label>
    <input 
      type="text" 
      id="product-name" 
      class="form-input"
      placeholder="Enter product name"
    />
    <span class="form-helper">Used in listings and reports</span>
  </div>
</div>

```html
<div class="form-field">
  <label for="product-name" class="form-label">Product Name</label>
  <input 
    type="text" 
    id="product-name" 
    class="form-input"
    placeholder="Enter product name"
  />
  <span class="form-helper">Used in listings and reports</span>
</div>

<style>
.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px; /* space.sm */
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.form-input {
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-surface);
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-helper {
  font-size: 13px;
  color: var(--color-text-secondary);
}
</style>
```

### Input States

**Error State**

<div class="component-example">
  <div class="form-field form-field--error">
    <label for="email" class="form-label">Email Address</label>
    <input 
      type="email" 
      id="email" 
      class="form-input"
      value="invalid-email"
      aria-invalid="true"
      aria-describedby="email-error"
    />
    <span id="email-error" class="form-error">⚠ Please enter a valid email address</span>
  </div>
</div>

```html
<div class="form-field form-field--error">
  <label for="email" class="form-label">Email Address</label>
  <input 
    type="email" 
    id="email" 
    class="form-input"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <span id="email-error" class="form-error">Please enter a valid email address</span>
</div>

<style>
.form-field--error .form-input {
  border-color: var(--color-error);
}

.form-field--error .form-input:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.form-error {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-error);
}

.form-error::before {
  content: "⚠";
  font-size: 16px;
}
</style>
```

**Success State**

<div class="component-example">
  <div class="form-field form-field--success">
    <label for="username" class="form-label">Username</label>
    <input 
      type="text" 
      id="username" 
      class="form-input"
      value="john_seller"
    />
    <span class="form-success">✓ Username is available</span>
  </div>
</div>

```html
<div class="form-field form-field--success">
  <label for="username" class="form-label">Username</label>
  <input 
    type="text" 
    id="username" 
    class="form-input"
    value="john_seller"
  />
  <span class="form-success">Username is available</span>
</div>

<style>
.form-field--success .form-input {
  border-color: var(--color-success);
}

.form-success {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-success);
}

.form-success::before {
  content: "✓";
  font-weight: 600;
}
</style>
```

**Disabled State**
```html
<input 
  type="text" 
  class="form-input" 
  disabled
  value="Cannot edit"
/>

<style>
.form-input:disabled {
  background: var(--color-surface-disabled);
  color: var(--color-text-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
```

## Textarea

<div class="component-example">
  <div class="form-field">
    <label for="description" class="form-label">Description</label>
    <textarea 
      id="description" 
      class="form-textarea"
      rows="4"
      placeholder="Describe your item in detail..."
    ></textarea>
    <span class="form-helper">Include condition, features, and specifications</span>
  </div>
</div>

```html
<div class="form-field">
  <label for="description" class="form-label">Description</label>
  <textarea 
    id="description" 
    class="form-textarea"
    rows="4"
    placeholder="Describe your item in detail..."
  ></textarea>
  <span class="form-helper">Include condition, features, and specifications</span>
</div>

<style>
.form-textarea {
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-surface);
  resize: vertical;
  min-height: 96px;
  font-family: inherit;
}

.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
</style>
```

## Select Dropdown

<div class="component-example">
  <div class="form-field">
    <label for="category" class="form-label">Category</label>
    <select id="category" class="form-select">
      <option value="">Select a category</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      <option value="books">Books</option>
      <option value="home">Home & Garden</option>
    </select>
  </div>
</div>

```html
<div class="form-field">
  <label for="category" class="form-label">Category</label>
  <div class="select-wrapper">
    <select id="category" class="form-select">
      <option value="">Select a category</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      <option value="home">Home & Garden</option>
    </select>
  </div>
</div>

<style>
.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-text-secondary);
  font-size: 12px;
}

.form-select {
  appearance: none;
  width: 100%;
  padding: 12px 40px 12px 16px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-surface);
  cursor: pointer;
}

.form-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
</style>
```

## Checkbox

```html
<label class="checkbox-label">
  <input type="checkbox" class="checkbox-input" />
  <span class="checkbox-box"></span>
  <span class="checkbox-text">Include shipping in price</span>
</label>

<style>
.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkbox-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.checkbox-input:checked + .checkbox-box {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox-input:checked + .checkbox-box::after {
  content: "✓";
  color: white;
  font-size: 14px;
  font-weight: 600;
}

.checkbox-input:focus + .checkbox-box {
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.checkbox-text {
  font-size: 15px;
  color: var(--color-text-primary);
}
</style>
```

## Radio Buttons

```html
<fieldset class="radio-group">
  <legend class="form-label">Condition</legend>
  
  <label class="radio-label">
    <input type="radio" name="condition" value="new" class="radio-input" />
    <span class="radio-circle"></span>
    <span class="radio-text">New</span>
  </label>
  
  <label class="radio-label">
    <input type="radio" name="condition" value="used" class="radio-input" />
    <span class="radio-circle"></span>
    <span class="radio-text">Used - Like New</span>
  </label>
  
  <label class="radio-label">
    <input type="radio" name="condition" value="refurbished" class="radio-input" />
    <span class="radio-circle"></span>
    <span class="radio-text">Refurbished</span>
  </label>
</fieldset>

<style>
.radio-group {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

.radio-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border);
  border-radius: 50%;
  position: relative;
  transition: all 0.2s ease;
}

.radio-input:checked + .radio-circle {
  border-color: var(--color-primary);
}

.radio-input:checked + .radio-circle::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: var(--color-primary);
  border-radius: 50%;
}

.radio-input:focus + .radio-circle {
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.radio-text {
  font-size: 15px;
  color: var(--color-text-primary);
}
</style>
```

## Input Groups

### With Icon Prefix

```html
<div class="form-field">
  <label for="price" class="form-label">Price</label>
  <div class="input-group">
    <span class="input-prefix">$</span>
    <input 
      type="number" 
      id="price" 
      class="form-input form-input--with-prefix"
      placeholder="0.00"
      step="0.01"
    />
  </div>
</div>

<style>
.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.input-prefix {
  position: absolute;
  left: 16px;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-secondary);
  pointer-events: none;
}

.form-input--with-prefix {
  padding-left: 36px;
}
</style>
```

### With Button Suffix

```html
<div class="form-field">
  <label for="promo-code" class="form-label">Promo Code</label>
  <div class="input-group input-group--button">
    <input 
      type="text" 
      id="promo-code" 
      class="form-input form-input--with-button"
      placeholder="Enter code"
    />
    <button class="input-button">Apply</button>
  </div>
</div>

<style>
.input-group--button {
  position: relative;
}

.form-input--with-button {
  padding-right: 100px;
}

.input-button {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.input-button:hover {
  background: rgba(79, 70, 229, 0.1);
}
</style>
```

## Form Layout

### Stacked Form

```html
<form class="form-stacked">
  <div class="form-field">
    <label for="title" class="form-label">Listing Title</label>
    <input type="text" id="title" class="form-input" />
  </div>
  
  <div class="form-field">
    <label for="desc" class="form-label">Description</label>
    <textarea id="desc" class="form-textarea" rows="4"></textarea>
  </div>
  
  <div class="form-row">
    <div class="form-field">
      <label for="price2" class="form-label">Price</label>
      <input type="number" id="price2" class="form-input" />
    </div>
    
    <div class="form-field">
      <label for="quantity" class="form-label">Quantity</label>
      <input type="number" id="quantity" class="form-input" />
    </div>
  </div>
  
  <div class="form-actions">
    <button type="button" class="btn btn-secondary">Cancel</button>
    <button type="submit" class="btn btn-primary">Create Listing</button>
  </div>
</form>

<style>
.form-stacked {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding-top: 8px;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column-reverse;
  }
  
  .form-actions button {
    width: 100%;
  }
}
</style>
```

## Validation Patterns

### Real-time Validation

```javascript
// Validate on blur
document.getElementById('email').addEventListener('blur', (e) => {
  const field = e.target.closest('.form-field');
  const value = e.target.value;
  
  if (!value.includes('@')) {
    field.classList.add('form-field--error');
    field.classList.remove('form-field--success');
  } else {
    field.classList.add('form-field--success');
    field.classList.remove('form-field--error');
  }
});
```

### Form Submission

```javascript
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Clear previous errors
  document.querySelectorAll('.form-field--error').forEach(field => {
    field.classList.remove('form-field--error');
  });
  
  // Validate all fields
  const errors = validateForm(form);
  
  if (errors.length > 0) {
    errors.forEach(({ field, message }) => {
      showFieldError(field, message);
    });
    return;
  }
  
  // Submit form
  const formData = new FormData(form);
  await submitData(formData);
});
```

## Accessibility

- Always pair `<label>` with form inputs using `for` and `id`
- Use `aria-invalid="true"` for error states
- Use `aria-describedby` to link error messages
- Ensure focus states are clearly visible
- Provide helper text for complex fields
- Use `autocomplete` attributes where appropriate
- Group related fields with `<fieldset>` and `<legend>`

## Design Tokens

```css
:root {
  /* Form colors */
  --form-border: #E2E8F0;
  --form-border-focus: #4F46E5;
  --form-border-error: #DC2626;
  --form-border-success: #059669;
  --form-bg: #FFFFFF;
  --form-bg-disabled: #F8FAFC;
  
  /* Form spacing */
  --form-padding: 12px 16px;
  --form-border-radius: 8px;
  --form-field-gap: 8px;
  
  /* Form typography */
  --form-font-size: 16px;
  --form-label-size: 14px;
  --form-helper-size: 13px;
}
```
