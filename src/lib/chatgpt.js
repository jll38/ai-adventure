import axios from 'axios';

export async function chatWithGPT(userInput) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        messages: [{ role: 'user', content: userInput }],
        model: 'gpt-3.5-turbo',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error.response.data);
    throw new Error('Failed to chat with GPT.');
  }
}
