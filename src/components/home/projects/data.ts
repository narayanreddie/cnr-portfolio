import type { Project } from './types';

export const projects: Project[] = [
	{
		name: 'NT-Clone',
		heading: 'Nt-Clone - TV Version',
		paragraphs: [
			'Netflix clone is a subscription video on-demand over-the-top streaming service...',
		],
		tech: [
			'Javascript',
			'Animate CSS',
			'Vue-material design icons',
			'Vue',
			'Vue3-carousel',
			'Pinia',
		],
		source: 'https://github.com/narayanreddie/nt-clone',
		live: 'https://nt-clone-five.vercel.app/',
		previewImage: 'nt-clone',
	},
	{
		name: 'Food Idea',
		heading:
			'Food Idea – App that gives you ideas of the dishes with the ingredients that you have',
		paragraphs: [
			'Bored of cooking the same thing week in, week out?',
			'Looking for new variations on your family’s favorite dishes',
			'Want tasty, everyday ways to use up the ingredients in your fridge?',
		],
		tech: ['Vue', 'Bootstrap', 'Core-js', 'Vuex', 'Vue-router'],
		source: 'https://github.com/narayanreddie/food-idea',
		live: 'https://food-idea.vercel.app/#/',
		previewImage: 'food-idea',
	},
	{
		name: 'React Analytics Dashboard',
		heading:
			'React Analytics Dashboard – Covid details for countries, continents, and the world',
		paragraphs: [
			'An analytics dashboard is an interactive graphical user interface...',
		],
		tech: ['React.Js', 'Apex charts', 'Emotion', 'Simplebar', 'Web-vitals'],
		source: 'https://github.com/narayanreddie/react-analytics-dashboard',
		live: 'https://react-analytics-dashboard.vercel.app/dashboard/app',
		previewImage: 'react-analytics-dashboard',
	},
	{
		name: 'Health Plus',
		heading: 'Health Plus – Find your Doctor and make an Appointments',
		paragraphs: [
			'Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes.',
			'On-demand healthcare services at your fingertips.',
		],
		tech: ['ReactJs', 'CSS', 'React-toastify', 'Web vitals'],
		source: 'https://github.com/narayanreddie/health-plus',
		live: 'https://health-plus-wheat.vercel.app/',
		previewImage: 'health-plus',
	},
	{
		name: 'Angular TMDB',
		heading: 'Angular TMDB – Movies, TV Shows and Series',
		paragraphs: [
			'Angular TMDB is a simple web app that consumes The Movie DB API...',
		],
		tech: ['Angular', 'RxJs', 'Angular Material', 'Swiper', 'API'],
		source: 'https://github.com/narayanreddie/angular-tmdb',
		live: 'https://angular-tmdb-delta.vercel.app/',
		previewImage: 'angular-tmdb',
	},
];
