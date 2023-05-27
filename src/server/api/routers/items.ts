import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Item } from "@prisma/client";
import { Input } from "postcss";

export const itemRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.item.findMany({});
  }),
  create: publicProcedure.input(z.object({
    image: z.string(),
    name: z.string(),
    price: z.number()
  })).mutation(async({ctx, input}) => {
    return ctx.prisma.item.create({
      data: {
        image: input.image,
        name: input.name,
        price: input.price
      }
    })
  }),
  // edit: publicProcedure
  //   .input(
  //     z.object({
  //       id: z.string(),
  //       image: z.string(),
  //       name: z.string(),
  //       price: z.number()
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     let item: Item | null;
  //     if (input.id) {
  //       item = await ctx.prisma.item.findUnique({
  //         where: {
  //           id: input.id,
  //         },
  //       });
  //       if (item) {
  //         item = await ctx.prisma.item.update({
  //           data: {
  //             image: input.image,
  //             name: input.name,
  //             price: input.price,
  //           },
  //           where: {
  //             id: item.id,
  //           },
  //         });
  //       }
  //     }
  //   }),
    getOne: publicProcedure.input(z.string()).query(async ({ctx, input}) => {
      const item = await ctx.prisma.item.findUnique({
        where: {
          id: input
        }
      })
      return item
    })
})