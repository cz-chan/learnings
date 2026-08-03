function participanteConMasVotos(votos: string[]) {
	if (votos.length === 0) throw new Error("Debe haber al menos un voto");

	let voteMap: Map<string, number> = new Map();
	let maxVotesCount: number = 0;
	let winner: string = "";

	for (let vote of votos) {
		voteMap.set(vote, (voteMap.get(vote) ?? 0) + 1);
	}

	for (let i = votos.length - 1; i >= 0; i--) {
		let participant = votos[i];
		let getParticipantVotes = voteMap.get(participant) ?? 0;

		if (getParticipantVotes > maxVotesCount) {
			maxVotesCount = getParticipantVotes;
			winner = participant;
		}
	}

	return winner;
}
