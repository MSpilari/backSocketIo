import express from 'express'

const router = express.Router()

router.get('/github', (req, res) => {
	res.redirect(
		`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
	)
})

export { router }
