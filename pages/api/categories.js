import api from "../../auth/axios";

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const { data } = await api.get("/api/categories");
				res.status(200).json({
					success: true,
					data,
				});
			} catch (err) {
				res.status(400).json({
					success: false,
					data: err,
				});
			}
			break;

		default:
			res.status(404).json({
				success: false,
			});
			break;
	}
};
