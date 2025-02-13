import { Command, CommandType } from '../../interfaces/command';
import { CallbackOptions } from '../../interfaces/CallbackOptions';
import { play } from '../../mods/player';
import logger from '../../core/logger';

export = {
    name: 'play',
    aliases: ['p'],
    type: CommandType.NORMAL,
    category: 'Awtter Music',
    expectedArgs: '<link | song name>',
    description: 'Plays a song or a playlist.',
    minArgs: 1,
    run: async ({ message, member, args }: CallbackOptions) => {

        if (!message) return;
        if (!args) return;
        if (args?.length === 0) return;
        try {
            await message.channel.send((await play(args.join(' '), member, message.channel)).content);
        }
        catch (e) {
            logger.error(e);
        }
    },
} as Command;
