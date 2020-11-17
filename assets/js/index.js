// ===============
// START: Closure.
// ===============

(async () => {
	// Get root.
	const root = document.getElementById('root');

	// Path to JSON.
	const url = 'https://api.github.com/users/nathansmith';

	// ===================
	// Attempt to do this.
	// ===================

	try {
		// Fetch response.
		const response = await fetch(url);

		// Convert string to JSON.
		const json = await response.json();

		// TODO: REMOVE THIS.
		console.log(json);

		// Array of keys.
		const keyArray = Object.keys(json);

		// Start table.
		let html = '<table><tbody>';

		// Loop through.
		keyArray.forEach((key = '') => {
			// Get value.
			const value = json[key];

			// String?
			const className = typeof value === 'string' ? 'is-style-string' : 'is-style-other';

			// Table row.
			html += `
				<tr>
					<th>${key}</th>
					<td class="${className}">${value}</td>
				</tr>
			`;
		});

		// End table.
		html += '</tbody></table>';

		// Clean up.
		html = html.replace(/\s+/g, ' ');

		// Insert.
		if (root) {
			root.innerHTML = html;
		}

	// =============
	// Handle error.
	// =============

	} catch (error) {
		// Log error.
		console.log(error);
	}

// =============
// END: Closure.
// =============
})();
