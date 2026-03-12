

export default async function handler(req, res) {
    
    const { question } = req.body;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions',
        {
            method: 'POST',
            handers: {
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
        

            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a mystical fortune teller. Respond to the users question with a single, cryptic but meaningful fortune. Keep it under 3 sentences. Be poetic and mysterious'
                    },
                    {
                        role: 'user',
                        content: question
                    }
                ]
            })

        }
    );

    const data = await response.json();

    const fortune = data.choices[0].message.content;

    res.status(200).json({ fortune });
 

}