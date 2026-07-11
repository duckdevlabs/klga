---
layout: page
title: Password Reset
description: Recover access to your KLGA account with a secure email reset link.
permalink: /reset-password
---

KLGA supports password recovery through a secure email link. Use this flow when you cannot sign in with your current password.

## Reset Your Password

1. Open the **Login** screen.
2. Tap **Forgot Password**.
3. Enter your account email address.
4. Tap **Send Reset Link**.
5. Open the email on your device.
6. Tap the recovery link.
7. KLGA opens the reset screen.
8. Enter and confirm your new password.
9. Tap **Update Password**.

After a successful update, KLGA returns you to the authenticated app.

## Email Link

The recovery email is time-sensitive. If the link expires, repeat the Forgot Password flow to request a new one.

## Deep Link Callback

On mobile, the recovery link opens KLGA through the app callback:

```text
klga://reset-callback
```

The app listens for the password recovery event, opens the Reset Password screen, and submits the new password securely through authentication.

## Troubleshooting

- Make sure you entered the same email used for your KLGA account.
- Check spam or promotions folders if the email does not appear.
- Open the email on a device where KLGA is installed.
- Request a new reset link if the previous link expired.

## Flow Diagram

<div class="mermaid">
sequenceDiagram
    autonumber
    actor User
    participant App as KLGA App
    participant Email as Email Inbox
    participant Auth as Auth Service
    User->>App: Tap Forgot Password
    App->>Auth: Request reset email
    Auth-->>Email: Send recovery link
    User->>Email: Open link
    Email->>App: Launch reset callback
    App->>User: Show reset password screen
    User->>App: Submit new password
    App->>Auth: Update password
    Auth-->>App: Confirm update
</div>
