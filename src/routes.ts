import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'

const router = Router()

router.get('/github', (req, res) => {
	res.redirect(
		`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
	)
})

router.get('/signin/callback', (req, res) => {
	const { code } = req.query

	return res.json(code)
})

router.post('/authenticate', new AuthenticateUserController().handle)

export { router }
