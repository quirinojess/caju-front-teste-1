export default function capitalize(str: string | undefined) {
	if (!str) return str;
	return str
		?.toLowerCase()
		.replace(/(?:^|\s)\w/g, match => match?.toUpperCase());
}
