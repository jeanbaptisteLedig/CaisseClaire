export function getData(): ICompany[] {
	return [
		{
			symbol: 'AAPL',
			name: 'Apple Inc.',
			change: +1.23,
			volume: 178.23,
			description: 'Apple conçoit des appareils électroniques, des logiciels et offre des services numériques.',
			evolution: [2.1, -3.2, 4.5, -1.0, 0.8, 3.4, -2.5, 1.6, -0.4, 2.2],
		},
		{
			symbol: 'MSFT',
			name: 'Microsoft Corporation',
			change: -0.45,
			volume: 335.56,
			description:
				'Microsoft développe des logiciels et propose des solutions cloud pour entreprises et particuliers.',
			evolution: [-1.3, 2.4, -0.9, 3.7, -2.1, 1.2, 0.5, -3.4, 4.0, -1.8],
		},
		{
			symbol: 'GOOGL',
			name: 'Alphabet Inc. (Google)',
			change: +0.76,
			volume: 138.67,
			description:
				'Alphabet est spécialisée dans les technologies de recherche en ligne et la publicité numérique.',
			evolution: [3.6, -2.2, 1.4, -3.8, 0.9, 4.1, -1.7, 2.5, -0.3, 1.8],
		},
		{
			symbol: 'AMZN',
			name: 'Amazon.com Inc.',
			change: +2.01,
			volume: 116.34,
			description: 'Amazon est un leader mondial du commerce en ligne et des services cloud.',
			evolution: [2.2, -1.4, 0.6, 3.9, -2.7, 1.8, -0.5, 2.4, -3.3, 0.7],
		},
		{
			symbol: 'TSLA',
			name: 'Tesla Inc.',
			change: -0.89,
			volume: 243.89,
			description:
				'Tesla conçoit et produit des véhicules électriques et des solutions énergétiques renouvelables.',
			evolution: [4.0, -3.5, 1.1, 2.3, -1.2, 0.4, -2.6, 3.8, -0.9, 2.7],
		},
		{
			symbol: 'NVDA',
			name: 'NVIDIA Corporation',
			change: +1.12,
			volume: 410.12,
			description:
				"NVIDIA est une entreprise spécialisée dans les cartes graphiques et les solutions d'intelligence artificielle.",
			evolution: [-0.8, 2.9, -1.3, 3.4, -3.2, 4.1, -0.6, 2.7, -2.4, 1.9],
		},
		{
			symbol: 'META',
			name: 'Meta Platforms Inc.',
			change: +0.58,
			volume: 293.45,
			description:
				'Meta développe des plateformes sociales comme Facebook, Instagram, et des solutions de réalité virtuelle.',
			evolution: [1.4, -2.5, 3.1, -0.7, 2.8, -3.0, 4.3, -1.6, 0.9, -2.1],
		},
		{
			symbol: 'INTC',
			name: 'Intel Corporation',
			change: -0.34,
			volume: 46.78,
			description: 'Intel conçoit et fabrique des semi-conducteurs et des processeurs informatiques.',
			evolution: [2.0, -1.7, 3.2, -0.6, 4.5, -2.3, 0.8, -3.1, 1.7, -0.9],
		},
		{
			symbol: 'CSCO',
			name: 'Cisco Systems Inc.',
			change: +0.89,
			volume: 51.34,
			description: 'Cisco fournit des équipements réseau et des solutions de cybersécurité.',
			evolution: [-2.1, 1.3, 3.4, -0.8, 2.6, -1.5, 4.0, -3.7, 0.5, -2.9],
		},
		{
			symbol: 'ADBE',
			name: 'Adobe Inc.',
			change: +1.03,
			volume: 538.12,
			description: 'Adobe est connu pour ses logiciels de création comme Photoshop et Acrobat.',
			evolution: [1.9, -3.0, 2.5, -1.4, 0.7, 3.8, -0.6, 4.2, -2.3, 1.1],
		},
	]
}
