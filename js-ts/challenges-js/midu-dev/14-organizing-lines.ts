function groupVisitors(energyLevels: number[]): number {
	let groupCount = 0;
	let pending = [...energyLevels];

	while (pending.length > 0) {
		const rest: number[] = [];

		let first = pending[0];

		for (let i = 0; i < pending.length; i++) {
			if (pending[i] > first) {
				first = pending[i];
			} else {
				rest.push(pending[i]);
			}
		}
		groupCount++;
		pending = rest;
	}

	return groupCount;
}
