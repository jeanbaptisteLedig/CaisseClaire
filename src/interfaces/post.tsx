interface IPost {
	id: number
	author: IUser
	content: string
	date: string
}

type IPosts = IPost[]
