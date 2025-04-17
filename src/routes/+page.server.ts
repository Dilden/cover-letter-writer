import { name, resume } from '$lib/resume';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request, fetch }) => {
		const jobDesc = await request.formData();

		const body = {
			model: 'deepseek-r1:8b',
			stream: false,
			prompt: `You are ${name}. Your resume reads as follows: "${resume}."

Now, generate a cover letter from Dylan Hildenbrand's perspective for the following job listing: ${jobDesc.get('description')?.toString()}`
		};

		const ollamaRes = await fetch('http://127.0.0.1:11434/api/generate', {
			method: 'POST',
			body: JSON.stringify(body)
		}).then((res) => res.json());

		const letter = ollamaRes.response;
		return {
			letter: letter
		};
	}
} satisfies Actions;
