export const tabs = ['All', 'Frontend', 'Backend', 'Testing'] as const;

export const techs = [
	{ name: 'HTML', category: ['Frontend'] },
	{ name: 'CSS', category: ['Frontend'] },
	{ name: 'TailwindCSS', category: ['Frontend'] },
	{ name: 'Bootstrap', category: ['Frontend'] },
	{ name: 'Vue.js', category: ['Frontend'] },
	{ name: 'React.js', category: ['Frontend'] },
	{ name: 'Angular', category: ['Frontend'] },
	{ name: 'Firebase', category: ['Backend'] },
	{ name: 'JavaScript', category: ['Frontend', 'Backend'] },
	{ name: 'TypeScript', category: ['Frontend', 'Backend'] },
	{ name: 'Node.js', category: ['Backend'] },
	{ name: 'Express.js', category: ['Backend'] },
	{ name: 'Mongo DB', category: ['Backend'] },
	{ name: 'Vue-test-utils', category: ['Testing'] },
	{ name: 'Jest', category: ['Testing'] },
	{ name: 'Jasmine', category: ['Testing'] },
] as const;
