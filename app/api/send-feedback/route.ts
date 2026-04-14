import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RATING_EMOJIS: Record<string, string> = {
    love_it: '😍',
    good: '👍',
    okay: '😐',
    bad: '👎',
};

export async function POST(request: NextRequest) {
    try {
        const { feedback, userEmail, downloadType, rating } = await request.json();

        // Validate: need at least a rating or feedback text
        if ((!feedback || feedback.trim().length === 0) && !rating) {
            return NextResponse.json({ error: 'Rating or feedback is required' }, { status: 400 });
        }

        // Create transporter using Gmail credentials from environment
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_GMAIL_USER,
                pass: process.env.NEXT_GMAIL_PASSWORD,
            },
        });

        const ratingEmoji = rating ? (RATING_EMOJIS[rating] || rating) : '';
        const ratingLabel = rating ? `${ratingEmoji} ${rating.replace('_', ' ')}` : 'No rating';

        // Email content
        const emailSubject = `${ratingEmoji} Feedback: ${downloadType || 'Download'} — ${rating ? rating.replace('_', ' ') : 'comment'}`;
        const feedbackSection = feedback && feedback.trim().length > 0
            ? `<p><strong>Comment:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${feedback.replace(/\n/g, '<br>')}
      </div>`
            : '<p><em>No comment provided</em></p>';

        const emailBody = `
      <h2>New User Feedback</h2>
      <p><strong>Rating:</strong> ${ratingLabel}</p>
      <p><strong>Download Type:</strong> ${downloadType || 'Unknown'}</p>
      <p><strong>User Email:</strong> ${userEmail || 'Not provided'}</p>
      ${feedbackSection}
      <hr>
      <p><em>Sent from Expo Icon Generator Feedback System</em></p>
      <p><em>Timestamp: ${new Date().toISOString()}</em></p>
      <hr>
      <p style="font-size: 12px; color: #555;">
        Need to turn messy bug reports into clean GitHub issues? Try
        <a href="https://glitchgrab.dev/" style="color: #0ea5e9; text-decoration: none; font-weight: 600;">Glitchgrab</a>
        — AI-powered bug tracking for Next.js teams.
      </p>
    `;

        // Send email
        const mailOptions = {
            from: process.env.NEXT_GMAIL_USER,
            to: 'bhosalenaresh73@gmail.com',
            subject: emailSubject,
            html: emailBody,
        };

        await transporter.sendMail(mailOptions);

        // If user provided email, send them a Glitchgrab waitlist invitation
        if (userEmail && userEmail.trim().length > 0) {
            const waitlistEmailBody = `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #111;">
        <h2 style="color: #0ea5e9;">Join the Glitchgrab Waitlist 🐛</h2>
        <p>Thanks for using Expo Icon Generator! We wanted to let you know about <strong>Glitchgrab</strong> — our AI-powered bug tracking tool built for Next.js teams.</p>
        <p><strong>What Glitchgrab does:</strong></p>
        <ul>
          <li>Turns screenshots &amp; messy bug reports into clean GitHub issues with AI</li>
          <li>Automatically extracts steps to reproduce, environment info, and severity</li>
          <li>Integrates directly with your GitHub repos</li>
        </ul>
        <p style="margin: 24px 0;">
          <a href="https://glitchgrab.dev/" style="background-color: #0ea5e9; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">Join the Waitlist</a>
        </p>
        <p style="font-size: 12px; color: #888;">You received this because you provided your email when submitting feedback on Expo Icon Generator. We won&apos;t spam you.</p>
      </div>
    `;

            const waitlistMailOptions = {
                from: process.env.NEXT_GMAIL_USER,
                to: userEmail.trim(),
                subject: 'Join the Glitchgrab waitlist — AI bug tracking for Next.js teams',
                html: waitlistEmailBody,
            };

            await transporter.sendMail(waitlistMailOptions);
        }

        return NextResponse.json({
            success: true,
            message: 'Feedback sent successfully! Thank you for helping us improve.'
        });

    } catch (error) {
        console.error('Error sending feedback email:', error);
        return NextResponse.json(
            { error: 'Failed to send feedback. Please try again later.' },
            { status: 500 }
        );
    }
}
