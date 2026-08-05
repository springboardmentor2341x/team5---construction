from fastapi_mail import FastMail, MessageSchema, MessageType
from mail_config import conf


async def send_reset_email(email: str, reset_token: str):
    message = MessageSchema(
        subject="Construction Management System - Password Reset",
        recipients=[email],
        body=f"""
Hello,

You requested to reset your password.

Your reset token is:

{reset_token}

If you did not request this password reset, please ignore this email.

Regards,
Construction Management System
""",
        subtype=MessageType.plain,
    )

    fm = FastMail(conf)
    await fm.send_message(message)


async def send_verification_email(email: str, verification_token: str):
    message = MessageSchema(
        subject="Construction Management System - Verify Your Email",
        recipients=[email],
        body=f"""
Hello,

Thank you for registering.

Click the link below to verify your email:

http://127.0.0.1:8000/verify-email?token={verification_token}

Regards,
Construction Management System
""",
        subtype=MessageType.plain,
    )

    fm = FastMail(conf)
    await fm.send_message(message)