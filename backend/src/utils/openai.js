const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateTaskSuggestions = async (taskDescription) => {
  try {
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
      return {
        success: false,
        message: 'OpenAI API key not configured',
        suggestions: [],
      };
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful task management assistant. Provide practical suggestions to break down tasks, suggest priorities, and recommend best practices.',
        },
        {
          role: 'user',
          content: `Given this task: "${taskDescription}", provide 3-5 actionable suggestions to accomplish it effectively. Keep each suggestion concise.`,
        },
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const suggestions = response.choices[0].message.content
      .split('\n')
      .filter(line => line.trim().length > 0)
      .map(line => line.replace(/^\d+\.\s*/, '').trim());

    return {
      success: true,
      suggestions,
    };
  } catch (error) {
    console.error('OpenAI API Error:', error.message);
    return {
      success: false,
      message: 'Failed to generate suggestions',
      suggestions: [],
    };
  }
};

module.exports = { generateTaskSuggestions };
