const funnyArray = [
	'cringe',
	'cring',
	'cringes',
	'amogus',
	'amoguses',
	'mugosa',
	'mugosas',
	'mugus',
	'muguses',
	'mug',
	'mugs',
	'sug',
	'sugs',
	'sugus',
	'suguses',
	'sugoma.xyz',
	'sussy',
	'sussies',
	'suss',
	'susses',
	'sus',
	'suses',
	'susy',
	'sussy baka',
	'sussy bakas',
	'ultra cringe',
	'ultra cringes',
	'ultra cring',
	'ultra cringus',
	'ultra cringuses',
	'ultre cring',
	'ultre cringes',
	'ultre cringus',
	'ultre cringuses',
	'supermegaultragamer',
	'supermegaultracringe',
	'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	'https://sugoma.xyz',
	'https://github.com/qweri0p/Talking-ben-discord give star!!!',
	'stop being cringe',
	'stop being cring',
	'stop being cringes',
	'stop being cringus',
	'stop being cringuses',

];
function command(message) {
	if (!message.member.roles.cache.has('953923327460802620')) {
		const arg = message.content.slice(8);
		message.delete();
		message.channel.send(arg);
	}
	else {
		message.channel.send('cringe');
		const rng = Math.floor(Math.random() * funnyArray.length);
		message.author.send(funnyArray[rng]);
	}
}
module.exports = { command };