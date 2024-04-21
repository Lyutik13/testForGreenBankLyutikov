import { encoded, translations } from "./data.js";

const decodeFields = (encoded, translations) => {
	const decoded = [];
	const uniqueIds = new Set();

	encoded.forEach((item) => {
		const decodedItem = {};
		for (const key in item) {
			if (key.endsWith("Id") && !["_groupId", "_service", "_formatSize", "_ca"].includes(key)) {
				const id = item[key];
				const decodedValue = translations[id] || id;
				decodedItem[key] = decodedValue;
				uniqueIds.add(decodedValue);
			} else {
				decodedItem[key] = item[key];
			}
		}
		decoded.push(decodedItem);
	});

	return { decoded, uniqueIds: Array.from(uniqueIds) };
};

const { decoded, uniqueIds } = decodeFields(encoded, translations);
console.log(decoded);
console.log(uniqueIds);
