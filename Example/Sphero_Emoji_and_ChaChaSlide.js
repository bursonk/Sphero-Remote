var _messageChannels = [0, 3, 4, 5, 6, 7];

async function startProgram() {
	listenForIRMessage(_messageChannels);
	setStabilization(false);	//Needed to Jump
}

async function onIRMessage7(channel) {
	if (channel !== 7) return;

	playMatrixAnimation(8, true);

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage7);

async function onIRMessage6(channel) {
	if (channel !== 6) return;

	playMatrixAnimation(9, true);

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage6);

async function onIRMessage5(channel) {
	if (channel !== 5) return;

	playMatrixAnimation(10, true);

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage5);

async function onIRMessage4(channel) {
	if (channel !== 4) return;

	playMatrixAnimation(11, true);

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage4);

async function onIRMessage3(channel) {
	if (channel !== 3) return;

	playMatrixAnimation(12, true);

	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage3);

async function onIRMessage0(channel) {
	if (channel !== 0) return;

	await speak('Let\'s get ready for an activity!', false);
	playMatrixAnimation(6, true);
	await delay(2);

	setHeading(0);
	await delay(0.5);
	//setStabilization(false); //Needed to Jump
	//To the right now
	playMatrixAnimation(3, true);
	await roll(90, 104, 1);
	stopRoll();
	await delay(1);
	//To the left
	playMatrixAnimation(3, true);
	await roll(270, 104, 1);
	stopRoll();
	await delay(1);
	//Take it back now y'all
	playMatrixAnimation(7, true);
	await roll(0, -104, 1);
	stopRoll();
	await delay(1);
	//One hop this time
	setStabilization(false);
	setHeading(0);
	playMatrixAnimation(0, false);
	await rawMotor(-255, -255, 0.4);
	clearMatrix();
	stopRoll();
	await delay(2);
	//One hop this time
	playMatrixAnimation(0, false);
	await rawMotor(-255, -255, 0.3);
	clearMatrix();
	stopRoll();
	setStabilization(true);
	setHeading(0);
	await delay(1);
	//Right foot two stomps
	await rawMotor(0, 94, 0.3);
	await rawMotor(0, -94, 0.3);
	stopRoll();
	await delay(.4);
	//slide to the left
	playMatrixAnimation(3, true);
	await roll(270, 104, 1);
	stopRoll();
	await delay(0.5);
	//slide to the right
	playMatrixAnimation(3, true);
	await roll(90, 104, 1);
	stopRoll();
	await delay(1);
	//Criss Cross
	playMatrixAnimation(4, false);
	await rawMotor(-255, 255, 0.5);
	await rawMotor(255, -255, 0.5);
	stopRoll();
	await delay(1);
	//Criss Cross
	playMatrixAnimation(4, false);
	await rawMotor(-255, 255, 0.5);
	await rawMotor(255, -255, 0.5);
	clearMatrix();
	stopRoll();
	setHeading(0);
	await delay(1);
	//Cha cha real smooth
	playMatrixAnimation(5, false);
	await rawMotor(-108, 108, 0.7);
	await roll(225, 110, 1);
	await rawMotor(104, -108, 0.7);
	await roll(45, 115, 1);
	playMatrixAnimation(10, true);
	await delay(3);



	listenForIRMessage(_messageChannels);
}
registerEvent(EventType.onIRMessage, onIRMessage0);






// Jump
registerMatrixAnimation({
	frames: [[[1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 2, 2, 2, 2, 1, 2], [1, 1, 1, 2, 1, 1, 1, 2], [1, 1, 1, 2, 1, 1, 1, 2], [1, 2, 1, 2, 1, 1, 1, 2], [1, 1, 2, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 1, 2, 1], [1, 1, 2, 1, 1, 1, 2, 1], [1, 1, 2, 1, 1, 1, 2, 1], [2, 1, 2, 1, 1, 1, 2, 1], [1, 2, 1, 1, 1, 1, 1, 2], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 1, 2, 1, 1], [1, 2, 1, 1, 1, 2, 1, 1], [1, 2, 1, 1, 1, 2, 1, 1], [1, 2, 1, 1, 1, 2, 1, 1], [2, 1, 1, 1, 1, 1, 2, 2], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 1, 2, 1, 1, 1], [2, 1, 1, 1, 2, 1, 1, 1], [2, 1, 1, 1, 2, 1, 1, 1], [2, 1, 1, 1, 2, 1, 1, 2], [1, 1, 1, 1, 1, 2, 2, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 1, 2, 1, 1, 1, 2], [1, 1, 1, 2, 1, 1, 1, 2], [1, 1, 1, 2, 1, 1, 1, 2], [1, 1, 1, 2, 1, 1, 1, 2], [1, 1, 1, 1, 2, 2, 2, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 2, 1, 1, 1, 2, 1], [1, 1, 2, 1, 1, 1, 2, 1], [1, 1, 2, 1, 1, 1, 2, 1], [1, 1, 2, 1, 1, 1, 2, 1], [1, 1, 1, 2, 2, 2, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 1, 1, 1, 2, 1, 2], [1, 2, 1, 1, 1, 2, 1, 2], [1, 2, 1, 1, 1, 2, 1, 2], [1, 2, 1, 1, 1, 2, 1, 2], [1, 1, 2, 2, 2, 1, 1, 2], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 1, 1, 2, 1, 2, 1], [2, 1, 1, 1, 2, 1, 2, 2], [2, 1, 1, 1, 2, 1, 2, 1], [2, 1, 1, 1, 2, 1, 2, 1], [1, 2, 2, 2, 1, 1, 2, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 2, 1, 2, 1, 1], [1, 1, 1, 2, 1, 2, 2, 1], [1, 1, 1, 2, 1, 2, 1, 2], [1, 1, 1, 2, 1, 2, 1, 1], [2, 2, 2, 1, 1, 2, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 2, 1, 2, 1, 1, 1], [1, 1, 2, 1, 2, 2, 1, 2], [1, 1, 2, 1, 2, 1, 2, 1], [1, 1, 2, 1, 2, 1, 1, 1], [2, 2, 1, 1, 2, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 1, 2, 1, 1, 1, 2], [1, 2, 1, 2, 2, 1, 2, 2], [1, 2, 1, 2, 1, 2, 1, 2], [1, 2, 1, 2, 1, 1, 1, 2], [2, 1, 1, 2, 1, 1, 1, 2], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 2, 1, 1, 1, 2, 1], [2, 1, 2, 2, 1, 2, 2, 1], [2, 1, 2, 1, 2, 1, 2, 1], [2, 1, 2, 1, 1, 1, 2, 1], [1, 1, 2, 1, 1, 1, 2, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 1, 1, 1, 2, 1, 2], [1, 2, 2, 1, 2, 2, 1, 2], [1, 2, 1, 2, 1, 2, 1, 2], [1, 2, 1, 1, 1, 2, 1, 2], [1, 2, 1, 1, 1, 2, 1, 2], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 1, 1, 2, 1, 2, 2], [2, 2, 1, 2, 2, 1, 2, 1], [2, 1, 2, 1, 2, 1, 2, 2], [2, 1, 1, 1, 2, 1, 2, 1], [2, 1, 1, 1, 2, 1, 2, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 2, 1, 2, 2, 2], [2, 1, 2, 2, 1, 2, 1, 1], [1, 2, 1, 2, 1, 2, 2, 2], [1, 1, 1, 2, 1, 2, 1, 1], [1, 1, 1, 2, 1, 2, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 2, 1, 2, 2, 2, 2], [1, 2, 2, 1, 2, 1, 1, 2], [2, 1, 2, 1, 2, 2, 2, 2], [1, 1, 2, 1, 2, 1, 1, 1], [1, 1, 2, 1, 2, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 1, 2, 2, 2, 2, 1], [2, 2, 1, 2, 1, 1, 2, 1], [1, 2, 1, 2, 2, 2, 2, 1], [1, 2, 1, 2, 1, 1, 1, 1], [1, 2, 1, 2, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 2, 2, 2, 2, 1, 1], [2, 1, 2, 1, 1, 2, 1, 1], [2, 1, 2, 2, 2, 2, 1, 1], [2, 1, 2, 1, 1, 1, 1, 1], [2, 1, 2, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 2, 2, 2, 1, 1, 1], [1, 2, 1, 1, 2, 1, 1, 1], [1, 2, 2, 2, 2, 1, 1, 1], [1, 2, 1, 1, 1, 1, 1, 1], [1, 2, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
// To the Right
registerMatrixAnimation({
	frames: [[[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 11, 1, 1], [1, 1, 1, 1, 1, 11, 11, 1], [11, 11, 11, 11, 11, 11, 11, 11], [11, 11, 11, 11, 11, 11, 11, 11], [1, 1, 1, 1, 1, 11, 11, 1], [1, 1, 1, 1, 1, 11, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
// To the Left
registerMatrixAnimation({
	frames: [[[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 14, 1, 1, 1, 1, 1], [1, 14, 14, 1, 1, 1, 1, 1], [14, 14, 14, 14, 14, 14, 14, 14], [14, 14, 14, 14, 14, 14, 14, 14], [1, 14, 14, 1, 1, 1, 1, 1], [1, 1, 14, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
// Step back
registerMatrixAnimation({
	frames: [[[1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 8, 8, 8, 8, 1, 1], [1, 8, 8, 8, 8, 8, 8, 1], [1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
// Criss Cross
registerMatrixAnimation({
	frames: [[[4, 1, 1, 1, 1, 1, 1, 1], [1, 4, 1, 1, 1, 1, 1, 1], [1, 1, 4, 1, 1, 1, 1, 1], [1, 1, 1, 4, 1, 1, 1, 1], [1, 1, 1, 1, 4, 1, 1, 1], [1, 1, 1, 1, 1, 4, 1, 4], [1, 1, 1, 1, 1, 1, 4, 4], [1, 1, 1, 1, 1, 4, 4, 4]], [[1, 1, 1, 1, 1, 1, 1, 4], [1, 1, 1, 1, 1, 1, 4, 1], [1, 1, 1, 1, 1, 4, 1, 1], [1, 1, 1, 1, 4, 1, 1, 1], [1, 1, 1, 4, 1, 1, 1, 1], [4, 1, 4, 1, 1, 1, 1, 1], [4, 4, 1, 1, 1, 1, 1, 1], [4, 4, 4, 1, 1, 1, 1, 1]], [[4, 1, 1, 1, 1, 1, 1, 4], [1, 4, 1, 1, 1, 1, 4, 1], [1, 1, 4, 1, 1, 4, 1, 1], [1, 1, 1, 4, 4, 1, 1, 1], [1, 1, 1, 4, 4, 1, 1, 1], [4, 1, 4, 1, 1, 4, 1, 4], [4, 4, 1, 1, 1, 1, 4, 4], [4, 4, 4, 1, 1, 4, 4, 4]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
// Cha-Cha
registerMatrixAnimation({
	frames: [[[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 1, 1, 1], [0, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1], [0, 0, 1, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]],
	palette: [{ r: 167, g: 56, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
// equilizer
registerMatrixAnimation({
	frames: [[[1, 1, 2, 2, 1, 2, 2, 1], [2, 2, 4, 4, 2, 4, 4, 2], [4, 4, 6, 6, 4, 6, 6, 4], [6, 6, 8, 8, 6, 8, 8, 6], [8, 8, 11, 11, 8, 11, 11, 8], [11, 11, 11, 12, 11, 11, 12, 11], [12, 12, 12, 1, 12, 12, 1, 12], [1, 1, 1, 1, 1, 1, 1, 1]], [[1, 2, 2, 1, 2, 2, 1, 1], [2, 4, 4, 2, 4, 4, 2, 2], [4, 6, 6, 4, 6, 6, 4, 4], [6, 8, 8, 6, 8, 8, 6, 6], [8, 11, 11, 8, 11, 11, 8, 8], [11, 11, 12, 11, 11, 12, 11, 11], [12, 12, 1, 12, 12, 1, 12, 12], [1, 1, 1, 1, 1, 1, 1, 1]], [[2, 1, 1, 2, 2, 1, 2, 2], [4, 2, 2, 4, 4, 2, 4, 4], [6, 4, 4, 6, 6, 4, 6, 6], [8, 6, 6, 8, 8, 6, 8, 8], [11, 8, 8, 11, 11, 8, 11, 11], [12, 11, 11, 11, 12, 11, 11, 12], [1, 12, 12, 12, 1, 12, 12, 1], [1, 1, 1, 1, 1, 1, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }], 
	fps: 4,
	transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
	frames: [[[1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1], [1, 8, 8, 8, 8, 8, 8, 1], [1, 1, 8, 8, 8, 8, 1, 1], [1, 1, 1, 8, 8, 1, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});


// 8
registerMatrixAnimation({
	frames: [[[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 6, 6, 6, 6, 6, 6], [6, 1, 6, 6, 6, 6, 1, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [1, 6, 6, 1, 1, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
	frames: [[[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 1, 6, 1, 1, 6], [6, 6, 6, 1, 6, 6, 1, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 1, 1, 1, 1, 6, 6], [1, 6, 6, 6, 6, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
	frames: [[[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 1, 1, 1, 1, 6, 6], [1, 6, 6, 1, 1, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]], [[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 11, 6, 6, 6, 6, 11, 6], [6, 6, 1, 1, 1, 1, 6, 6], [1, 6, 6, 1, 1, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]], [[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 11, 6, 6, 6, 6, 11, 6], [11, 11, 1, 1, 1, 1, 11, 11], [1, 6, 6, 1, 1, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
	frames: [[[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 6, 1, 1, 6, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [1, 6, 6, 6, 6, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
	frames: [[[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [1, 6, 6, 1, 1, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});