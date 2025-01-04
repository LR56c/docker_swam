import axios from 'axios'
import { Elysia } from 'elysia'

const app = new Elysia()
	.get( '/', () => 'Hello Elysia' )
	.post( '/a', async ( { error } ) => {
		try {
			const response = await axios.post( 'http://servicea:3000/' )
			return {
				'result': response.data
			}
		}
		catch ( e ) {
			return error( 400 )
		}
	} )
	.post( '/b', async ( { error } ) => {
		try {
			const response = await axios.post( 'http://serviceb:3000/' )
			return {
				'result': response.data
			}
		}
		catch ( e ) {
			return error( 400 )
		}
	} )
	.listen( 3000 )

console.log(
	`🦊 Elysia is running at ${ app.server?.hostname }:${ app.server?.port }`
)
