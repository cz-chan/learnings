function portalFueraDeFase(portales: string) {
	let normalizePortals = [...portales.trim().toLowerCase()];

	let myPortalsMap = new Map();

	for (let portal of normalizePortals) {
		myPortalsMap.set(portal, (myPortalsMap.get(portal) ?? 0) + 1);
	}

	for (let [index, portal] of normalizePortals.entries()) {
		if (myPortalsMap.get(portal) === 1) {
			return index;
		}
	}
	return -1;
}
