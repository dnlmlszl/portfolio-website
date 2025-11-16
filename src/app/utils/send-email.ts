import { FormData } from '../components/ContactForm';

export async function sendEmail(data: FormData): Promise<void> {
  const apiEndpoint = '/api/email';

  const res = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    console.error('Server validation error:', json);
    throw new Error(json.error || 'Email sending failed');
  }

  return json;
}
