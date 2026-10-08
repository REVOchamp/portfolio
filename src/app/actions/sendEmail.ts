'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const budget = formData.get('budget') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'Wypełnij wszystkie wymagane pola.' };
  }

  try {
    await resend.emails.send({
      from: 'Formularz Portfolio <onboarding@resend.dev>',
      to: ['ziolkowski.karol15@gmail.com'], // <-- Wpisz tu Twój e-mail z konta Resend
      replyTo: email,
      subject: `Nowe zapytanie: ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Budżet:</strong> ${budget}</p>
        <br />
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Błąd Resend:', error);
    return { success: false, error: 'Błąd podczas wysyłania wiadomości.' };
  }
}