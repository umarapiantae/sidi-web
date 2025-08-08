// src/app/api/contact/route.ts

import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { firstName, lastName, email, phone, message } = body

    const data = await resend.emails.send({
      from: 'Contact Form <noreply@yourdomain.com>',
      to: ['digisma.sidi.my.id@gmail.com'], // ← ganti dengan email kamu
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
