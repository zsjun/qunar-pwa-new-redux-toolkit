// src/controllers/user.ts
import { Context } from 'koa';
import { getManager } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

import { Users } from '../entity/user';
import { NotFoundException, ForbiddenException } from '../exceptions';

export default class RestController {
  public static async search(ctx: Context) {
    // const userRepository = getManager().getRepository(Users);
    // const users = await userRepository.find();
    ctx.status = 200;
    ctx.body = {
      code: 0,
    };
  }

  public static async cities(ctx: Context) {
    const cities = fs
      .readFileSync(path.join(__dirname, './mocker/rest/cities.json'))
      .toString();
    if (cities) {
      ctx.status = 200;
      ctx.body = {
        data: JSON.parse(cities),
        code: 0,
      };
    } else {
      throw new NotFoundException();
    }
  }
  public static async getSearch(ctx: Context) {
    console.log(111);
    const { key } = ctx.request.query;
    console.log(ctx.query);
    if (key) {
      ctx.status = 200;
      ctx.body = {
        data: {
          result: [
            {
              key: '芜湖',
              display: '芜湖',
            },
            {
              key: '井冈山',
              display: '井冈山',
            },
            {
              key: '铁岭',
              display: '铁岭',
            },
          ],
          searchKey: key,
        },
        code: 0,
      };
    } else {
      throw new NotFoundException();
    }
  }

  public static async query(ctx: Context) {
    let res = fs
      .readFileSync(path.join(__dirname, './mocker/rest/query.json'))
      .toString();
    const query = JSON.parse(res);
    query.dataMap.directTrainInfo.trains =
      query.dataMap.directTrainInfo.trains.reverse();
    if (query) {
      ctx.status = 200;
      ctx.body = {
        data: query,
        code: 0,
      };
    } else {
      throw new NotFoundException();
    }
  }
  public static async ticket(ctx: Context) {
    ctx.status = 200;
    ctx.body = {
      data: {
        detail: {
          departTimeStr: '07:15',
          arriveTimeStr: '11:47',
          arriveDate: 1122,
          durationStr: '4小时32分',
        },
        candidates: [
          {
            type: '二等座',
            priceMsg: '443.5',
            ticketsLeft: '有票',
            channels: [
              {
                name: '快速预订',
                desc: '含40元出行保障 快速出票 迅捷无忧',
              },
              {
                name: '普通预订',
                desc: '出票较慢，高峰期需要排队',
              },
            ],
          },
          {
            type: '一等座',
            priceMsg: '748.5',
            ticketsLeft: '有票',
            channels: [
              {
                name: '快速预订',
                desc: '含40元出行保障 快速出票 迅捷无忧',
              },
              {
                name: '普通预订',
                desc: '出票较慢，高峰期需要排队',
              },
            ],
          },
          {
            type: '商务座',
            priceMsg: '1403.5',
            ticketsLeft: '5张',
            channels: [
              {
                name: '快速预订',
                desc: '含40元出行保障 快速出票 迅捷无忧',
              },
              {
                name: '普通预订',
                desc: '出票较慢，高峰期需要排队',
              },
            ],
          },
        ],
      },
      code: 0,
    };
  }
  public static async schedule(ctx: Context) {
    ctx.status = 200;
    ctx.body = {
      data: [
        {
          station: '北京南',
          arriveTime: null,
          departTime: '07:20',
          stay: null,
        },
        {
          station: '天津南',
          arriveTime: '07:54',
          departTime: '07:56',
          stay: 2,
        },
        {
          station: '南京南',
          arriveTime: '11:51',
          departTime: '11:53',
          stay: 2,
        },
        {
          station: '上海虹桥',
          arriveTime: '13:08',
          departTime: null,
          stay: null,
        },
      ],
      code: 0,
    };
  }
  public static async order(ctx: Context) {
    ctx.status = 200;
    ctx.body = {
      departTimeStr: '07:15',
      arriveTimeStr: '11:47',
      arriveDate: 112,
      durationStr: '4小时32分',
      price: 483.5,
    };
  }
}
