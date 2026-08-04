// 1. la unión: op solo admite estos dos strings
type Operation = "delete" | "insert";

// 2. la forma del objeto, reutilizando el alias anterior
type ChangesStructure = {
	user: string;
	op: Operation; // aquí es donde se valida
	index: number;
	text?: string; // solo en insert
};

function resolverConflictos(
	firstUserChanges: ChangesStructure[],
	secondUserChanges: ChangesStructure[],
): string {
	function applyChanges(initText: string, changes: ChangesStructure[]): string {
		let createChanges: string = initText;

		for (let change of changes) {
			const { index, op, text } = change;

			if (index < 0) continue;

			if (op === "insert" && index > createChanges.length) {
				continue;
			}
			if (op === "delete" && index >= createChanges.length) {
				continue;
			}

			if (op === "insert") {
				createChanges =
					createChanges.slice(0, index) +
					(text ?? "") +
					createChanges.slice(index);
			} else {
				createChanges =
					createChanges.slice(0, index) + createChanges.slice(index + 1);
			}
		}

		return createChanges;
	}

	return applyChanges(applyChanges("", firstUserChanges), secondUserChanges);
}
