import fs from 'fs'

const sourcePath = '.quirrel-token.local'

const b64encode = (str) => Buffer.from(str, 'binary').toString('base64')
const response = await fetch(
	new Request('http://quirrel:9181/tokens/dev', {
		method: 'PUT',
		headers: {
			Authorization: `Basic ${b64encode('unused:quirrel_passphrase')}`
		}
	})
)
const token = await response.text()
fs.writeFileSync(sourcePath, token)
