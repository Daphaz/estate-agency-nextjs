import api from "../../../auth/axios";

export default async (req, res) => {
	const { method } = req;
	const { slug } = req.query;

	switch (method) {
		case "POST":
			if (slug[0] === "list" && slug[1] === "search") {
				try {
					const { data } = await api.post(
						"/api/property/list/search",
						req.body
					);
					res.status(200).json(data);
				} catch (err) {
					res.status(400).json({
						success: false,
						data: err,
					});
				}
			}
			break;

		default:
			res.status(404).json({
				success: false,
			});
			break;
	}
};
