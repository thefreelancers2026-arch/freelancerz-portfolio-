export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, service, message } = req.body;

    // Forward the exact same JSON payload to the production n8n webhook
    // This server-to-server request is completely immune to browser CORS policies
    const response = await fetch('https://n8n-production-be3e1.up.railway.app/webhook/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, service, message }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook responded with status ${response.status}`);
    }

    // Success response to the frontend
    return res.status(200).json({ message: 'Form submitted successfully' });

  } catch (error) {
    console.error('API Route Error:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
