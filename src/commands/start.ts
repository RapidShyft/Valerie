import { bot } from "../../bot.ts";

export const startCommand = () => {
  bot.command("start", async (ctx) => {
    const name = ctx.from?.first_name; // Safely retrieve the user's first name
    await ctx.reply(`Hello ${name}`); // Use backticks for string interpolation
  });
};
