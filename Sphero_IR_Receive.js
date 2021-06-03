// The Sphero has 8 message types/channels it can send or receive

var _messageChannels = [0, 1, 2, 3, 4, 5, 6, 7];	// Declare the channels used

// Initial Start of the Program
async function startProgram() {
	// Declare any initial values or setup




	listenForIRMessage(_messageChannels);	// Begin Listening for IR message
}



// Each IR message is it's own function and works like an interrupt/event
// When Sphero is listening and aquires a signal it will perform the 
// corresponding function. The final step is for it go back to 
// listening for other events

async function onIRMessage0(channel) {
	if (channel !== 0) return;

	// Input Sphero's Actions

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage0);

async function onIRMessage1(channel) {
	if (channel !== 1) return;

	// Input Sphero's Actions

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage1);

async function onIRMessage2(channel) {
	if (channel !== 2) return;

	// Input Sphero's Actions

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage2);

async function onIRMessage3channel) {
	if (channel !== 3) return;

	// Input Sphero's Actions

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage3);

async function onIRMessage4(channel) {
	if (channel !== 4) return;

	// Input Sphero's Actions

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage4);

async function onIRMessage5(channel) {
	if (channel !== 5) return;

	// Input Sphero's Actions

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage5);

async function onIRMessage6(channel) {
	if (channel !== 6) return;

	// Input Sphero's Actions

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage6);

async function onIRMessage7(channel) {
	if (channel !== 7) return;

	// Input Sphero's Actions

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage7);
