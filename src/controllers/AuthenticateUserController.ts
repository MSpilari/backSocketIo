import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
	async handle(req: Request, res: Response) {
		const service = new AuthenticateUserService()

		const { code } = req.body

		const result = await service.execute(code)

		return res.json(result)
	}
}

export { AuthenticateUserController }
