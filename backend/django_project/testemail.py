import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Your email configuration
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'zhiyouyuec@gmail.com'
EMAIL_HOST_PASSWORD = 'lawr wxds ovuc gpik'

# Create a test message
msg = MIMEMultipart()
msg['From'] = 'zhiyouyuec@gmail.com'
msg['To'] = 'hankchenv@gmail.com'
msg['Subject'] = 'Hank:Test Subject'
body = 'Hank-Test email body.'
msg.attach(MIMEText(body, 'plain'))

# Try to send the email
try:
    with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
        server.starttls()
        server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
        server.sendmail(EMAIL_HOST_USER,
                        'hankchenv@gmail.com', msg.as_string())
    print('Email sent successfully.')
except smtplib.SMTPAuthenticationError as e:
    print('SMTP Authentication Error:', e)
except Exception as e:
    print('An error occurred:', e)
