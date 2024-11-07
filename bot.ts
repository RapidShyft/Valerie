import { Bot } from "./deps.deno.ts";
import "jsr:@std/dotenv/load";
import { loadCommands } from "./src/commands/index.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

// load commands
loadCommands();
