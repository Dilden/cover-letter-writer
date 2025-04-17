import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const jobDesc = await request.formData();
		console.log(jobDesc.get('description'));
	}
} satisfies Actions;
