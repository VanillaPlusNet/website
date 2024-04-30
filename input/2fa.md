---
Title: 2FA
MarkdownFile: true
OtherFolder: true
---

# 2FA

{% hint style="info" %}
Two-Factor Authentication (2FA) is crucial on Vanilla+ due to the threat posed by Remote Access Trojans (RATs), which are designed to secretly steal account credentials. By requiring a second form of verification beyond just a password, 2FA significantly enhances account security, making it much harder for attackers, even those using RATs, to gain unauthorized access. This extra layer of protection is essential in safeguarding personal information and maintaining the integrity and privacy of user accounts on Vanilla+.
{% endhint %}

1. Log onto Vanilla+ with the account you would like to secure with 2FA (you **can** secure more than 1 account).
2. Download a Authenticator app. We recommend [Google Auth](https://support.google.com/accounts/answer/1066447?hl=en\&co=GENIE.Platform%3DAndroid) ([Authy](https://authy.com) is supported also).
3. On the Survival server, execute the command `/2fa enable`.
4. You will be presented with a QR code that you scan with the Google Auth app on your mobile device.
5. Once you have scanned the QR code you will now see a 6 digit code in your authenticator app, run the command `/2fa` followed by the 6 digit code. E.g. `/2fa 201475`.
6. You will be required to enter a code whenever your IP Address changes. When you are requested to enter a code by the server, do /2fa followed by the 6 digit code. E.g. `/2fa 201475`. You will not be able to move, chat, drop items or execute commands until you authenticate. Please be aware that you will still be able to see coordinates, so best practice is to go to `/spawn` before logging out, to prevent your base cordinates from being leaked if you account is hacked.

{% hint style="danger" %}
**Important Notice:** Vanilla+ cannot be held responsible if you lose access to your authenticator app and, as a result, are unable to access your account due to the inability to generate the required 2FA codes. It is crucial for users to take appropriate measures to back up their 2FA codes and ensure they have alternative access options in case of device loss or app issues. For example Google Authenticator Cloud Sync.
{% endhint %}