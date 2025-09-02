import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, location, budget, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !location || !budget || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'georgedaguman@gmail.com',
      reply_to: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        success: false, 
        message: `Failed to send email: ${error.message}`
      });
    }

    res.json({ 
      success: true, 
      message: 'Email sent successfully!',
      data: data 
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});