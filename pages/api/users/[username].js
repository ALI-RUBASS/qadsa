const users = async (req, res) => {

	const { username } = req.query;

	const response = await fetch('https://api.github.com/users/' + 'qadsa123', {
		headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
	});
	const data = await response.json();

	return res.status(200).json(data);
};

export default users;
