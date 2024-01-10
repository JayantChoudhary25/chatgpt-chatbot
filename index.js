const { Configuration, OpenAIApi , OpenAI} = require('openai');
const dotenv = require('dotenv');

dotenv.config();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY
// });

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

// const openAI = new OpenAIApi(configuration);

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user' , content: 'What is the capital of India!' }
        ]
    });
    console.log(chatCompletion.choices[0]);
}

main();
