import axios from 'axios'
import { Elysia } from 'elysia'

const app = new Elysia()
	.get( '/', () => 'Hello Elysia' )
	.post( '/', async ( { error } ) => {
		try {
			const response = await axios.post( 'http://servicea:3000/' )
			console.log( 'result A from B:', response.data )
			return {
				'result': 'B'
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
