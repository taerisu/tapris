import { ApplicationCommandDataResolvable } from "discord.js";
import { Event } from "../Interfaces";

export const event: Event = {
	name: "ready",
	run: (client) => {
		client.user.setActivity("Type '/' to check bot commands!");

		const commands = client.application?.commands;

		client.commands.forEach((command) => {
			commands?.create(command as ApplicationCommandDataResolvable);
		});

		console.log(`${client.user.tag} is up!`);
	}
};
