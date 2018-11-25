import {withRouter} from 'next/router'
import Layout from '../comps/Layout'

const Content = withRouter((props) => (

	<div>
		<h1>{props.router.query.name}</h1>
		<p>This is the blog post content. {props.router.query.id}</p>
	</div>

))

const Page = withRouter((props) => (
	<Layout>
		<Content/>
	</Layout>


))

export default Page