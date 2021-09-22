import { Command, CommandType } from '../../interfaces/command';
import { CallbackOptions } from '../../interfaces/CallbackOptions';
import { play } from '../../mods/player';
import logger from '../../core/logger';

export = {
    name: 'fart',
    aliases: ['shade', 'stimk'],
    type: CommandType.NORMAL,
    category: 'Awtter Music',
    expectedArgs: '<userid>',
    description: 'Stimks at user.',
    permissions: ['ADMINISTRATOR'],
    minArgs: 1,
    run: async ({ message, member, args }: CallbackOptions) => {

        if (!message) return;
        if (!args) return;
        if (args?.length === 0) return;
        try {
            const userid = args[0];
            const guildmember = await member.guild.members.fetch(userid);

            await message.channel.send((await play('fart reverb reversed', guildmember, message.channel)).content);
        }
        catch (e) {
            logger.error(e);
        }
    },
} as Command;
