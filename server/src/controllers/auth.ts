// src/controllers/auth.ts
import { Context } from 'koa'
import * as argon2 from 'argon2'
import { getManager } from 'typeorm'

import jwt from 'jsonwebtoken'

// ...
import { JWT_SECRET } from '../constants'

import { Users } from '../entity/user'
import { UnauthorizedException } from '../exceptions'

export default class AuthController {
  // ...
  public static async login(ctx: Context) {
    const userRepository = getManager().getRepository(Users)
    console.log(ctx.request.body)
    const user = await userRepository
      .createQueryBuilder()
      .where({ username: ctx.request.body.username })
      .addSelect('Users.password')
      .getOne()
    if (!user) {
      throw new UnauthorizedException('用户名不存在')
    } else if (await argon2.verify(user.password, ctx.request.body.password)) {
      ctx.status = 200
      ctx.body = { data: { token: jwt.sign({ id: user.id }, JWT_SECRET) } }
    } else {
      throw new UnauthorizedException('密码错误')
    }
  }

  public static async register(ctx: Context) {
    const userRepository = getManager().getRepository(Users)

    const newUser = new Users()
    newUser.username = ctx.request.body.username
    newUser.email = ctx.request.body.email
    // console.log(ctx.request);
    newUser.password = await argon2.hash(ctx.request.body.password)

    // 保存到数据库
    const user = await userRepository.save(newUser)

    ctx.status = 200
    ctx.body = 'success'
  }
}
