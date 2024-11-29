import Posts from './posts'
import Stories from './stories'
import NewPost from './newPost'

export default function Thread() {
	return (
		<>
			<Stories />
			<NewPost />
			<Posts />
		</>
	)
}
