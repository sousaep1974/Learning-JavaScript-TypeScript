class HomeController {
	async index(req, res) {
		res.json("Index1");
	}
}
export default new HomeController();
