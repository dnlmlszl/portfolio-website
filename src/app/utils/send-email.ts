import { FormData } from '../components/ContactForm';

export function sendEmail(data: FormData) {
  // TODO: send email
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((error) => {
      alert(error);
    });
}
